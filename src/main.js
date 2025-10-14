import { villes } from './gares.js';
import { lignes } from './voies.js';
import { trainsFR } from './trainsFR.js';
import { trainsDE } from './trainsDE.js';
export const trains = [...trainsFR, ...trainsDE];
import { accouplements } from "./um.js";


import { afficherTrajetsTrain, afficherFicheHoraire, afficherCarteFlotte } from "./popup.js";

// Déterminer le nombre d’UM actif pour chaque train
function getUMCount(trainId, heure, jour) {
  return accouplements.filter(a =>
    (a.idA === trainId || a.idB === trainId) &&
    a.heureDebut <= heure &&
    a.heureFin >= heure &&
    a.jours.includes(jour)
  ).length + 1; // +1 = le train lui-même
}

// bouton en header
document.getElementById("btn-flotte").addEventListener("click", () => {
  afficherCarteFlotte();
});

// Fonction helper globale
function timeToMinutes(h) {
  if (!h) return 0;
  const parts = h.split(":").map(Number);
  const hr = parts[0] || 0;
  const mn = parts[1] || 0;
  const sc = parts[2] || 0;
  return hr * 60 + mn + sc / 60; // ← inclut les secondes !
}


// ===== EXPOSITION DU SNAPSHOT FLOTTE POUR popup.js =====
window.__trainRuntime = {
  getSnapshot: () => {
    const heureCourante = document.getElementById("heure")?.value || "08:00";

    return trains.map(train => {
      const etat = window.__getEtatTrain ? window.__getEtatTrain(train, heureCourante) : null;

      let etatSimple = "termine";
      if (etat?.statut) {
        if (etat.statut.startsWith("entre")) {
          etatSimple = "en_route";
        } else if (etat.statut.startsWith("en gare")) {
          etatSimple = "en_gare";
        } else if (etat.statut.startsWith("en attente")) {
          etatSimple = "en_attente";
        } else if (etat.statut.startsWith("Pas de service")) {
          etatSimple = "pas_service";
        }
        
      }

      const imageName = train.nom.replaceAll(" ", "_") + ".png";
      const imageUrl = `./assets/trains/${imageName}`;

      return {
        id: train.id,
        nom: train.nom,
        etat: etatSimple,
        statut: etat?.statut || "Aucune information",
        x: etat?.position?.x || 0,
        y: etat?.position?.y || 0,
        imageUrl
      };
    });
  }
};

// Affichage gares intermédiaires
function trouverCheminEntreGares(gareA, gareB) {
  const graph = {};
  lignes.forEach(l => {
    if (!graph[l.gareA]) graph[l.gareA] = [];
    if (!graph[l.gareB]) graph[l.gareB] = [];
    graph[l.gareA].push(l.gareB);
    graph[l.gareB].push(l.gareA);
  });

  const queue = [[gareA]];
  const visited = new Set([gareA]);

  while (queue.length > 0) {
    const path = queue.shift();
    const last = path[path.length - 1];
    if (last === gareB) return path;

    for (const voisin of graph[last] || []) {
      if (!visited.has(voisin)) {
        visited.add(voisin);
        queue.push([...path, voisin]);
      }
    }
  }

  return [gareA, gareB];
}

new p5((p) => {
  let offsetX = 0;
  let offsetY = 0;
  let elementSelectionne = null;
  let derniereHeureConnue = null;
  let zoom = 1;
  let moveSpeed = 400;
  const zoomFactor = 0.1;

  let frontieres = [];
  let fondBuffer;
  let lastTrainUpdate = 0;
  let lastOffsetX = null;
  let lastOffsetY = null;
  let lastZoom = null;
  let fondDoitEtreRedessine = true;
  let cachedTrainStates = [];

  let affichageLignes = "electrification";


  p.preload = function () {
    frontieres = p.loadJSON('./src/frontieres.geojson');
  };




  // ===== Fonction état du train =====
  function getEtatTrain(train, heureCourante) {
    const tNow = timeToMinutes(heureCourante);

    // Calcul du jour courant (LU, MA, ME, JE, VE, SA, DI)
    const joursSemaine = ["DI", "LU", "MA", "ME", "JE", "VE", "SA"];
    const now = new Date();
    const jourActuel = joursSemaine[
      new Date(now.toLocaleString("en-US", { timeZone: "Europe/Paris" })).getDay()
    ];

    let trajetActuel = null;
    let statut = "";
    let position = null;

    // Filtrer les trajets valides pour le jour actuel
    const trajetsValides = train.trajets.filter(trajet =>
      trajet.dessertes.some(d => {
        const joursValides = d.jours || ["LU", "MA", "ME", "JE", "VE", "SA", "DI"];
        return joursValides.includes(jourActuel);
      })
    );

    if (trajetsValides.length === 0) {
      // Aucun trajet prévu ce jour → le train reste au dépôt
      const dernierTrajet = train.trajets.at(-1);
      const gFin = villes.find(v => v.nom === dernierTrajet.dessertes.at(-1).gare);
      if (gFin) position = { x: gFin.x, y: gFin.y };
      return {
        trajet: null,
        statut: `Pas de service ce jour (${jourActuel})`,
        position
      };
    }


    // --- Trouver trajet en cours ---
    for (const trajet of train.trajets) {
      const debut = timeToMinutes(trajet.dessertes[0].heure);
      const fin = timeToMinutes(trajet.dessertes.at(-1).heure);

      // 🔹 Vérifier si le trajet circule aujourd'hui
      // ✅ CORRECTIF 1 : Suppression de la double déclaration de joursSemaine et jourActuel
      const joursValides = trajet.dessertes[0].jours || ["LU", "MA", "ME", "JE", "VE", "SA", "DI"];
      const circuleAujourdhui = joursValides.includes(jourActuel);

      if (!circuleAujourdhui) continue; // ⚠️ on ignore les trajets non valides ce jour

      if (tNow >= debut && tNow <= fin) {
        trajetActuel = trajet;
        statut = "en circulation";
        break;
      }
    }


    if (trajetActuel) {
      const dess = trajetActuel.dessertes;

      for (let i = 0; i < dess.length - 1; i++) {
        const a = dess[i];
        const b = dess[i + 1];

        const tA = timeToMinutes(a.heure);
        const tB = timeToMinutes(b.heure);
        const arret = a.arret || 0;
        const tDepartEffectif = tA + arret;

        if (tNow >= tA && tNow < tDepartEffectif) {
          const g = villes.find(v => v.nom === a.gare);
          if (g) position = { x: g.x, y: g.y };
          statut = `en gare à ${a.gare}`;
          return { trajet: trajetActuel, statut, position };
        }


        // 🚆 Après départ effectif → suivre le trajet entre A et B
        if (tNow >= tDepartEffectif && tNow < tB) {
          const ratio = (tNow - tDepartEffectif) / (tB - tDepartEffectif);

          // 🔹 Récupération du chemin réel
          const chemin = trouverCheminEntreGares(a.gare, b.gare);
          const points = chemin.map(nom => villes.find(v => v.nom === nom)).filter(Boolean);
          if (points.length < 2) return;

          // --- Calcul des vitesses effectives par segment ---
          let totalTempsRelatif = 0;
          const segments = [];

          for (let j = 0; j < points.length - 1; j++) {
            const g1 = points[j];
            const g2 = points[j + 1];
            const ligne = lignes.find(l =>
              (l.gareA === g1.nom && l.gareB === g2.nom) ||
              (l.gareA === g2.nom && l.gareB === g1.nom)
            );

            const distance = p.dist(g1.x, g1.y, g2.x, g2.y);
            const vitesseVoie = ligne?.vitesse_max || 100;
            const vitesseTrain = train.vitesseMax || 120;
            const vitesseEffective = Math.min(vitesseVoie, vitesseTrain);

            const tempsRelatif = distance / vitesseEffective;
            totalTempsRelatif += tempsRelatif;

            segments.push({ g1, g2, distance, vitesseEffective, tempsRelatif, ligne });
          }

          // --- Trouver le segment courant ---
          let tempsCible = ratio * totalTempsRelatif;

          for (let i = 0; i < segments.length; i++) {
            const seg = segments[i];
            if (tempsCible <= seg.tempsRelatif) {
              const localRatio = seg.tempsRelatif > 0 ? tempsCible / seg.tempsRelatif : 1;

              // === 🔹 Détermination des phases à appliquer ===
              const premierSegmentGareDepart = segments[0].g1.nom;
              const dernierSegmentGareArrivee = segments[segments.length - 1].g2.nom;

              let isStartOfTrip = (seg.g1.nom === premierSegmentGareDepart);
              let isEndOfTrip = (seg.g2.nom === dernierSegmentGareArrivee);

              // Cas spécial : un seul segment dans le trajet
              if (segments.length === 1) {
                isStartOfTrip = true;
                isEndOfTrip = true;
              }

              const nextSeg = segments[i + 1];
              const vitesseSuivante = nextSeg ? nextSeg.vitesseEffective : seg.vitesseEffective;
              const speedChangeAhead = Math.abs(vitesseSuivante - seg.vitesseEffective) >= 15; // changement notable

              // === 🔹 Paramètres selon le type de train ===
              const vTrain = train.vitesseMax || 120;
              const moteur = (train.moteurs || []).join(" ").toLowerCase();
              const isDiesel = moteur.includes("diesel");

              let accelDist, decelDist;
              if (vTrain <= 160) { accelDist = 0.6; decelDist = 0.6; }          // TER
              else if (vTrain <= 200) { accelDist = 1.2; decelDist = 1.2; }     // Intercités
              else { accelDist = 2.0; decelDist = 2.0; }                        // TGV

              if (isDiesel) {
                accelDist *= 1.15;
                decelDist *= 1.10;
              }

              const kmSegment = seg.distance / 1000;
              let accelRatio = Math.min(accelDist / kmSegment, 0.5);
              let decelRatio = Math.min(decelDist / kmSegment, 0.5);
              if (segments.length === 1) {
                accelRatio = 0.1;
                decelRatio = 0.1;
              }

              // === 🔹 Easing monotone (pas de repondération de temps) ===
              let easedRatio = localRatio;

              // 1) Accélération uniquement sur le tout 1er segment du chemin (départ réel)
              if (isStartOfTrip && localRatio < accelRatio) {
                const t = localRatio / Math.max(accelRatio, 1e-6);
                // 0→1 lissé sans rétrogradation
                easedRatio = (0.5 - 0.5 * Math.cos(Math.PI * t)) * accelRatio
                  + (localRatio - t * accelRatio); // garde la continuité hors fenêtre
              }

              // 2) Décélération uniquement sur le tout dernier segment du chemin (arrivée réelle)
              if (isEndOfTrip && localRatio > 1 - decelRatio) {
                const t = (localRatio - (1 - decelRatio)) / Math.max(decelRatio, 1e-6);
                const tail = 0.5 - 0.5 * Math.cos(Math.PI * t); // 0→1
                // on "arrondit" seulement la queue, sans changer le reste
                easedRatio = (1 - decelRatio) + tail * decelRatio;
              }

              // 3) Transition de vitesse entre tronçons (optionnelle, mais sans retour arrière)
              //    Fin du segment N: lisser la queue (pas de repondération du temps)
              if (!isEndOfTrip && speedChangeAhead && localRatio > 0.85) {
                const t = (localRatio - 0.85) / 0.15; // fenêtre de 15% en fin
                const s = t * t * (3 - 2 * t); // smoothstep 0→1
                easedRatio = (1 - 0.15) + s * 0.15; // compresse juste la queue
              }


              // --- Position du train ---
              const x = p.lerp(seg.g1.x, seg.g2.x, easedRatio);
              const y = p.lerp(seg.g1.y, seg.g2.y, easedRatio);
              position = { x, y };


              // === 🔹 Calcul de la vitesse réelle approximative (synchronisé avec easedRatio) ===
              let vitesseReelle = seg.vitesseEffective;

              // départ
              if (isStartOfTrip && localRatio < accelRatio) {
                const t = localRatio / Math.max(accelRatio, 1e-6);
                vitesseReelle = seg.vitesseEffective * t; // simple et lisible
              }
              // arrivée
              else if (isEndOfTrip && localRatio > 1 - decelRatio) {
                const t = (1 - localRatio) / Math.max(decelRatio, 1e-6);
                vitesseReelle = seg.vitesseEffective * t;
              }

              // --- Adaptation de la vitesse entre tronçons ---
              else {
                const prevSeg = segments[i - 1];
                const nextSeg = segments[i + 1];
                const vitessePrecedente = prevSeg ? prevSeg.vitesseEffective : seg.vitesseEffective;
                const vitesseSuivante = nextSeg ? nextSeg.vitesseEffective : seg.vitesseEffective;
                const decelAhead = nextSeg && vitesseSuivante < seg.vitesseEffective;
                const accelBehind = prevSeg && seg.vitesseEffective > vitessePrecedente;

                // 🔻 Décélération anticipée (avant le tronçon lent)
                if (decelAhead && localRatio > 0.85) {
                  const t = (localRatio - 0.85) / 0.15;
                  const s = t * t * (3 - 2 * t);
                  vitesseReelle = seg.vitesseEffective + (vitesseSuivante - seg.vitesseEffective) * s;
                }

                // 🔺 Accélération retardée (au début du tronçon rapide)
                else if (accelBehind && localRatio < 0.15) {
                  const t = localRatio / 0.15;
                  const s = t * t * (3 - 2 * t);
                  vitesseReelle = vitessePrecedente + (seg.vitesseEffective - vitessePrecedente) * s;
                }
              }


              vitesseReelle = Math.max(0, Math.round(vitesseReelle));

              // === FIN 🔹 Calcul de la vitesse réelle approximative ===

              statut = `entre ${a.gare} et ${b.gare}`;
              return { trajet: trajetActuel, statut, position, vitesseActuelle: Math.round(vitesseReelle) };
            }
            tempsCible -= seg.tempsRelatif;
          }
        }


      }

      const derniere = trajetActuel.dessertes.at(-1);
      const gTerm = villes.find(v => v.nom === derniere.gare);
      if (gTerm) position = { x: gTerm.x, y: gTerm.y };
      statut = `en gare à ${derniere.gare}`;
      return { trajet: trajetActuel, statut, position };
    }

    // --- Cas 2 : pas de trajet en cours ---
    // ✅ CORRECTIF 2 : Calcul correct de jourDemain avec le fuseau horaire
    const jourDemain = joursSemaine[(new Date(now.toLocaleString("en-US", { timeZone: "Europe/Paris" })).getDay() + 1) % 7];

    let prochain = null;

    // 🔹 On cherche le premier trajet valide aujourd'hui (même si plus tard dans la journée)
    for (const trajet of train.trajets) {
      const joursValides = trajet.dessertes[0].jours || ["LU", "MA", "ME", "JE", "VE", "SA", "DI"];
      if (!joursValides.includes(jourActuel)) continue;

      const debut = timeToMinutes(trajet.dessertes[0].heure);
      if (debut > tNow) {
        prochain = trajet;
        break;
      }
    }

    // 🔹 Si aucun trajet valide aujourd'hui → on cherche celui de demain
    /*
    if (!prochain) {
      for (const trajet of train.trajets) {
        const joursValides = trajet.dessertes[0].jours || ["LU", "MA", "ME", "JE", "VE", "SA", "DI"];
        if (!joursValides.includes(jourDemain)) continue;
        prochain = trajet;
        break;
      }
    }
*/
    if (prochain) {
      // ✅ CORRECTIF 3 : Vérifier que le trajet précédent circule bien aujourd'hui
      const precedent = train.trajets.findLast(t => {
        const joursValides = t.dessertes[0].jours || ["LU", "MA", "ME", "JE", "VE", "SA", "DI"];
        const circuleAujourdhui = joursValides.includes(jourActuel);
        return circuleAujourdhui && timeToMinutes(t.dessertes.at(-1).heure) <= tNow;
      });

      const gareRef = precedent ? precedent.dessertes.at(-1).gare : prochain.dessertes[0].gare;
      const g = villes.find(v => v.nom === gareRef);
      if (g) position = { x: g.x, y: g.y };
      statut = `en attente du prochain trajet (${prochain.nom})`;
      return { trajet: prochain, statut, position };
    }

    // ✅ CORRECTIF 4 : Nouveau cas "Service fini pour aujourd'hui"
    // 🔹 Aucun prochain trajet trouvé → service terminé pour aujourd'hui
    const dernierTrajetAujourdhui = train.trajets.findLast(t => {
      const joursValides = t.dessertes[0].jours || ["LU", "MA", "ME", "JE", "VE", "SA", "DI"];
      return joursValides.includes(jourActuel);
    });

    if (dernierTrajetAujourdhui) {
      const gFin = villes.find(v => v.nom === dernierTrajetAujourdhui.dessertes.at(-1).gare);
      if (gFin) position = { x: gFin.x, y: gFin.y };
      statut = `Service fini pour aujourd'hui`;
      return { trajet: null, statut, position };
    }

    // ✅ CORRECTIF 5 : Cas par défaut pour gérer les situations imprévues
    // Cas par défaut : on ne sait pas où est le train
    return { trajet: null, statut: "Position inconnue", position: null };
  }



  window.__getEtatTrain = getEtatTrain;

  window.__centrerSurTrain = (x, y, trainId) => {
    const targetZoom = 2.5;
    zoom = targetZoom;
    offsetX = p.width / 2 - x * zoom;
    offsetY = p.height / 2 - y * zoom;

    const train = trains.find(t => t.id === trainId);
    if (train) {
      elementSelectionne = { type: "train", data: train };
      setTimeout(() => afficherInfosTrain(train), 100);
    }
  };

  p.setup = function () {
    const container = document.getElementById("canvas-container");
    const canvas = p.createCanvas(container.offsetWidth, container.offsetHeight);
    canvas.parent(container);

    // ✅ Créer le buffer APRÈS avoir défini les dimensions du canvas
    fondBuffer = p.createGraphics(p.width, p.height);

    window.addEventListener("resize", () => {
      p.resizeCanvas(container.offsetWidth, container.offsetHeight);
      fondBuffer = p.createGraphics(p.width, p.height);
      fondDoitEtreRedessine = true;
    });

    canvas.style('position', 'absolute');
    canvas.style('top', '0');
    canvas.style('left', '0');

    document.getElementById("up").onclick = () => offsetY += moveSpeed;
    document.getElementById("down").onclick = () => offsetY -= moveSpeed;
    document.getElementById("left").onclick = () => offsetX += moveSpeed;
    document.getElementById("right").onclick = () => offsetX -= moveSpeed;

    document.addEventListener("keydown", (e) => {
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
        e.preventDefault();
      }

      if (e.ctrlKey) {
        if (e.key === "ArrowUp") {
          zoomOnPoint(p.width / 2, p.height / 2, +1);
        } else if (e.key === "ArrowDown") {
          zoomOnPoint(p.width / 2, p.height / 2, -1);
        }
        return;
      }

      switch (e.key) {
        case "ArrowUp": offsetY += 40; break;
        case "ArrowDown": offsetY -= 40; break;
        case "ArrowLeft": offsetX += 40; break;
        case "ArrowRight": offsetX -= 40; break;
      }
    });

    document.getElementById("zoom-in").onclick = () => zoomOnPoint(p.width / 2, p.height / 2, 1);
    document.getElementById("zoom-out").onclick = () => zoomOnPoint(p.width / 2, p.height / 2, -1);

    offsetX = p.width / 2;
    offsetY = p.height / 2;

    boutonMode.click();
    precomputeFrontieres();
  };

  function precomputeFrontieres() {
    if (!frontieres || !frontieres.features) return;

    const origine = { lat: 47.742426, lon: 7.3428351 };
    const echelle = 1000;

    function latLonToXY(lat, lon) {
      const x = (lon - origine.lon) * echelle;
      const y = (origine.lat - lat) * echelle;
      return { x, y };
    }

    frontieres.paths = [];

    frontieres.features.forEach(feat => {
      const geom = feat.geometry;
      if (!geom || geom.type !== "LineString") return;

      const coords = geom.coordinates;
      const path = coords.map(coord => {
        const [lon, lat] = coord;
        return latLonToXY(lat, lon);
      });

      frontieres.paths.push(path);
    });
  }

  function zoomOnPoint(mouseX, mouseY, direction) {
    const oldZoom = zoom;
    const newZoom = p.constrain(zoom + direction * zoomFactor, 0.5, 3);

    const worldX = (mouseX - offsetX) / oldZoom;
    const worldY = (mouseY - offsetY) / oldZoom;

    zoom = newZoom;

    offsetX = mouseX - worldX * zoom;
    offsetY = mouseY - worldY * zoom;
  }

  // ===== Gestion de l'heure réelle =====
  let modeReel = false;
  let secondeTimer = null;

  const inputHeure = document.getElementById("heure");
  const boutonMode = document.getElementById("mode-heure");

  boutonMode.onclick = () => {
    modeReel = !modeReel;
    boutonMode.classList.toggle("active", modeReel);
    boutonMode.textContent = modeReel ? "🕒 Heure manuelle" : "⏰ Heure réelle";

    if (modeReel) {
      inputHeure.disabled = true;
      majHeureReelle();
      secondeTimer = setInterval(majHeureReelle, 1000);
      inputHeure.step = 1;
    } else {
      inputHeure.disabled = false;
      clearInterval(secondeTimer);
      inputHeure.step = 1;
    }
  };

  function majHeureReelle() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, "0");
    const m = String(now.getMinutes()).padStart(2, "0");
    const s = String(now.getSeconds()).padStart(2, "0");

    // affichage complet HH:MM:SS
    inputHeure.value = `${h}:${m}:${s}`;

    // on ne rafraîchit les infos que si la minute change
    const minuteCourante = `${h}:${m}`;
    if (minuteCourante !== derniereHeureConnue) {
      derniereHeureConnue = minuteCourante;
      rafraichirSelection(); // maj du panneau seulement 1×/min
    }
  }



  // ===== Dessin du fond (optimisé) =====
  function dessinerFond() {
    fondBuffer.clear();
    fondBuffer.background(228, 246, 222);
    fondBuffer.push();
    fondBuffer.translate(offsetX, offsetY);
    fondBuffer.scale(zoom);

    // Frontières
    fondBuffer.noFill();
    fondBuffer.stroke(80);
    fondBuffer.strokeWeight(1 / zoom);
    if (frontieres.paths) {
      frontieres.paths.forEach(path => {
        fondBuffer.beginShape();
        path.forEach(pt => fondBuffer.vertex(pt.x, pt.y));
        fondBuffer.endShape();
      });
    }

    // Lignes
    fondBuffer.strokeWeight(3 / zoom);
    lignes.forEach(l => {
      const g1 = villes.find(v => v.nom === l.gareA);
      const g2 = villes.find(v => v.nom === l.gareB);
      if (!g1 || !g2) return;

      if (l.type === "tunnel") fondBuffer.drawingContext.setLineDash([2 / zoom, 6 / zoom]);
      else fondBuffer.drawingContext.setLineDash([]);
      //Affichage dynamique
      switch (affichageLignes) {
        case "electrification":
          if (l.electrification === "25kV CA") fondBuffer.stroke(254, 52, 52);
          else if (l.electrification === "15kV CA") fondBuffer.stroke(87, 186, 52);
          else if (l.electrification === "diesel") fondBuffer.stroke(100);
          else fondBuffer.stroke(0);
          break;

        case "type":
          if (l.type === "LGV") fondBuffer.stroke(220, 0, 0);
          else if (l.type === "tunnel") fondBuffer.stroke(60);
          else fondBuffer.stroke(0, 100, 255);
          break;

        case "vitesse":
          const v = l.vitesse_max || 100;

          if (v >= 260) fondBuffer.stroke(220, 0, 0);          // rouge bordeaux
          else if (v >= 200) fondBuffer.stroke(255, 215, 0);   // jaune
          else if (v >= 160) fondBuffer.stroke(0, 100, 0);     // vert foncé
          else if (v >= 120) fondBuffer.stroke(50, 205, 50);   // vert clair
          else if (v >= 90) fondBuffer.stroke(135, 206, 250); // bleu clair
          else fondBuffer.stroke(0, 0, 128);     // bleu foncé
          break;


        case "signalisation":
          if (l.signalisation === "ETCS") fondBuffer.stroke(255, 0, 255);
          else if (l.signalisation === "KVB") fondBuffer.stroke(0, 0, 255);
          else if (l.signalisation === "PZB") fondBuffer.stroke(255, 200, 0);
          else if (l.signalisation === "LZB") fondBuffer.stroke(0, 200, 255);
          else fondBuffer.stroke(80);
          break;
      }


      fondBuffer.line(g1.x, g1.y, g2.x, g2.y);
    });

    fondBuffer.drawingContext.setLineDash([]);

    // Gares
    villes.forEach(v => {
      if (v.fantome) return;
      if (zoom < 1.2 && v.type === "petite") return;
      if (zoom < 0.8 && v.type === "moyenne") return;

      let size, textSize;
      switch (v.type) {
        case "vaste": size = 16; textSize = 18; break;
        case "grande": size = 14; textSize = 16; break;
        case "moyenne": size = 12; textSize = 14; break;
        default: size = 10; textSize = 12;
      }

      const scaleFactor = Math.min(2, 1.2 / zoom);
      size *= scaleFactor;
      textSize *= scaleFactor;

      fondBuffer.noStroke();
      fondBuffer.fill(0);
      fondBuffer.circle(v.x, v.y, size);

      fondBuffer.textAlign(fondBuffer.RIGHT, fondBuffer.CENTER);
      fondBuffer.textSize(textSize);
      fondBuffer.fill(0);
      fondBuffer.text(v.nom, v.x - 10, v.y);
    });

    fondBuffer.pop();
  }

  // ===== Boucle draw optimisée =====
  p.draw = function () {
    const now = p.millis();

    // détecter zoom ou déplacement
    if (zoom !== lastZoom || offsetX !== lastOffsetX || offsetY !== lastOffsetY) {
      fondDoitEtreRedessine = true;
      lastZoom = zoom;
      lastOffsetX = offsetX;
      lastOffsetY = offsetY;
    }

    if (fondDoitEtreRedessine) {
      dessinerFond();
      fondDoitEtreRedessine = false;
    }

    p.image(fondBuffer, 0, 0);

    // intervalle dynamique selon le zoom
    const TRAIN_UPDATE_INTERVAL = p.map(zoom, 0.5, 3, 1000, 50, true);

    // recalculer les positions à intervalle dynamique
    if (now - lastTrainUpdate >= TRAIN_UPDATE_INTERVAL || cachedTrainStates.length === 0) {
      lastTrainUpdate = now;
      const heureCourante = document.getElementById("heure")?.value || "08:00:00";
      cachedTrainStates = trains.map(train => ({
        train,
        etat: getEtatTrain(train, heureCourante)
      }));
    }

    // affichage continu
    p.push();
    p.translate(offsetX, offsetY);
    p.scale(zoom);

    cachedTrainStates.forEach(({ train, etat }) => {
      if (!etat?.position) return;
      const { position, statut } = etat;

      const scaleFactor = Math.min(2, 1.2 / zoom);
      const size = 9 * scaleFactor;
      const textSize = 12 * scaleFactor;

      if (statut.startsWith("entre")) p.fill("blue");
      else if (statut.startsWith("en gare")) p.fill(0, 179, 255);
      else if (statut.startsWith("en attente")) p.fill(113, 114, 122);
      else p.fill(170, 171, 180);

      p.noStroke();
      p.circle(position.x, position.y, size);

      if (zoom > 0.5) {
        // Affichage du texte (ID) → toujours visible sauf service fini et pas en service ajd
        if (
          !statut.toLowerCase().includes("service fini") &&
          !statut.toLowerCase().includes("pas de service")
        ) {
          p.textSize(textSize);
          p.textAlign(p.CENTER, p.CENTER);
          p.fill(25, 46, 232);

          const heureCourante = document.getElementById("heure")?.value || "08:00";
          const joursSemaine = ["DI", "LU", "MA", "ME", "JE", "VE", "SA"];
          const jourActuel = joursSemaine[new Date().getDay()];
          const umCount = getUMCount(train.id, heureCourante, jourActuel);

          const label = umCount > 1 ? `${train.id} (UM${umCount})` : train.id;
          p.text(label, position.x, position.y - textSize);
          //p.text(train.id, position.x, position.y - textSize);
        }
      }

      train._screenPos = position;
      train._statut = statut;
      train._trajetActuel = etat.trajet;
    });

    p.pop();
  };



  p.mousePressed = function (event) {
    const canvasRect = p.canvas.getBoundingClientRect();
    const clickX = event.clientX || (canvasRect.left + p.mouseX);
    const clickY = event.clientY || (canvasRect.top + p.mouseY);

    if (clickX < canvasRect.left || clickX > canvasRect.right || clickY < canvasRect.top || clickY > canvasRect.bottom) {
      return;
    }

    const menu = document.getElementById("context-menu");
    if (menu && menu.style.display === "block") {
      const menuRect = menu.getBoundingClientRect();
      const mx = event.clientX || p.mouseX + canvasRect.left;
      const my = event.clientY || p.mouseY + canvasRect.top;

      if (mx >= menuRect.left && mx <= menuRect.right && my >= menuRect.top && my <= menuRect.bottom) {
        return;
      }
    }

    const worldX = (p.mouseX - offsetX) / zoom;
    const worldY = (p.mouseY - offsetY) / zoom;

    const nearbyTrains = [];
    let gareCliquee = null;

    for (const train of trains) {
      if (!train._screenPos) continue;
      const d = p.dist(worldX, worldY, train._screenPos.x, train._screenPos.y);
      if (d < 10 / zoom) nearbyTrains.push(train);
    }

    for (const v of villes) {
      if (v.fantome) continue;
      const d = p.dist(worldX, worldY, v.x, v.y);
      if (d < 10 / zoom) gareCliquee = v;
    }

    if (nearbyTrains.length === 0 && !gareCliquee) {
      cacherMenu();
      reinitialiserInfoPanel();
      elementSelectionne = null;
      return;
    }

    if (nearbyTrains.length + (gareCliquee ? 1 : 0) === 1) {
      cacherMenu();
      if (gareCliquee) {
        elementSelectionne = { type: "gare", data: gareCliquee.nom };
        afficherHorairesGare(gareCliquee.nom);
      } else {
        elementSelectionne = { type: "train", data: nearbyTrains[0] };
        afficherInfosTrain(nearbyTrains[0]);
      }
      return;
    }

    menu.innerHTML = "";

    if (gareCliquee) {
      const btn = document.createElement("button");
      btn.textContent = `🅶 Gare : ${gareCliquee.nom}`;
      btn.onclick = () => {
        elementSelectionne = { type: "gare", data: gareCliquee.nom };
        afficherHorairesGare(gareCliquee.nom);
        cacherMenu();
      };
      menu.appendChild(btn);
    }

    nearbyTrains.forEach(train => {
      const btn = document.createElement("button");
      btn.classList.add("train-option");

      let color = "gray";
      if (train._statut?.startsWith("entre")) color = "blue";
      else if (train._statut?.startsWith("en gare")) color = "rgb(0, 179, 255)";

      btn.innerHTML = `
        <span class="train-dot" style="background:${color};"></span>
        🚆 <b>${train.id}</b> (${train.nom})
      `;

      btn.onclick = () => {
        elementSelectionne = { type: "train", data: train };
        afficherInfosTrain(train);
        cacherMenu();
      };

      menu.appendChild(btn);
    });

    const screenX = canvasRect.left + p.mouseX;
    const screenY = canvasRect.top + p.mouseY;
    menu.style.left = `${screenX + 8}px`;
    menu.style.top = `${screenY + 8}px`;
    menu.style.display = "block";
  };

  function cacherMenu() {
    const menu = document.getElementById("context-menu");
    if (menu) menu.style.display = "none";
  }

  function reinitialiserInfoPanel() {
    const div = document.getElementById("info-content");
    if (!div) return;
    div.innerHTML = `<div>Cliquez sur un train ou une gare</div>`;
  }

  function rafraichirSelection() {
    if (!elementSelectionne) return;

    if (elementSelectionne.type === "train") {
      afficherInfosTrain(elementSelectionne.data);
    } else if (elementSelectionne.type === "gare") {
      afficherHorairesGare(elementSelectionne.data);
    }
  }

  function afficherInfosTrain(train) {
    const div = document.getElementById("info-content");
    if (!div) return;

    const heureCourante = document.getElementById("heure").value;
    const etat = getEtatTrain(train, heureCourante);
    const statut = etat?.statut || "indisponible";
    const vitesseActuelle = etat?.vitesseActuelle || "—";
    const trajet = etat?.trajet;

    const rame = [train.nom, ...(train.composition || [])];
    const imagesHTML = rame.map(nom => {
      const imageName = nom.replaceAll(" ", "_") + ".png";
      const imagePath = `./assets/trains/${imageName}`;
      return `<img class="train-segment" src="${imagePath}" alt="${nom}">`;
    }).join("");

    let garesHTML = "<div class='timeline'>";
    if (trajet) {
      const tNow = timeToMinutes(document.getElementById("heure").value);

      trajet.dessertes.forEach((d, i) => {
        const t = timeToMinutes(d.heure);
        const prochain = trajet.dessertes[i + 1];
        const tNext = prochain ? timeToMinutes(prochain.heure) : t;
        const arret = d.arret || 0;
        const tDepartEffectif = t + arret;
        

        let etat = "futur";
        if (tNow >= tNext) {
          etat = "passe";
        }
        else if (tNow >= t && tNow < tDepartEffectif) {
          etat = "en-gare";
        }
        else if (tNow >= tDepartEffectif && tNow < tNext) {
          etat = "en-route";
        }
        else if (tNow < t) {
          etat = "futur";
        }

        const heureAffichee = minutesToTime(tDepartEffectif);
        const joursHTML = d.jours ? `<span class="jours">(${d.jours.join(", ")})</span>` : "";
        
        if (i < trajet.dessertes.length - 1) {
          garesHTML += `
        <div class="timeline-step ${etat}">
          <div class="dot"></div>
          <div class="info">
            <span class="heure">${d.heure} 🡺 ${heureAffichee} ${joursHTML}</span>
            <span class="gare">${d.gare}</span>
          </div>
        </div>
      `;
        } else {
          garesHTML += `
        <div class="timeline-step ${etat}">
          <div class="dot"></div>
          <div class="info">
            <span class="heure">${heureAffichee} ${joursHTML}</span>
            <span class="gare">${d.gare}</span>
          </div>
        </div>
      `;
        }

        if (prochain && i < trajet.dessertes.length - 1) {
          const estEnRoute = (tNow >= tDepartEffectif && tNow < tNext);
          garesHTML += `
        <div class="timeline-segment ${estEnRoute ? "en-route" : ""}">
          <div class="dot-train"></div>
        </div>
      `;
        }
      });
    } else {
      garesHTML += "<p style='color: #888; font-style: italic;'>Aucun trajet prévu pour le moment</p>";
    }
    garesHTML += "</div>";

    div.style.transition = "opacity 0.3s ease, transform 0.3s ease";
    div.style.opacity = 0;
    div.style.transform = "translateX(-10px)";

    setTimeout(() => {
      div.innerHTML = `
    <h3>${train.nom} ${(() => {
      const heureCourante = document.getElementById("heure")?.value || "08:00";
      const joursSemaine = ["DI", "LU", "MA", "ME", "JE", "VE", "SA"];
      const jourActuel = joursSemaine[new Date().getDay()];
      const umCount = getUMCount(train.id, heureCourante, jourActuel);
      return umCount > 1 ? `(UM${umCount})` : "";
    })()}</h3>

    <div id="train-image-container">
      <button id="img-left" class="img-nav">◀</button>
      <div id="train-image-view">${imagesHTML}</div>
      <button id="img-right" class="img-nav">▶</button>
    </div>
    <p><b>ID :</b> ${train.id}</p>
    <p><b>Statut :</b> ${statut}</p>
    
    <p><b>Destination :</b> ${trajet ? trajet.dessertes.at(-1).gare : "—"}</p>
    <p><b>Vitesse actuelle :</b> ${vitesseActuelle} km/h</p>
    <p><b>Prochaines gares :</b></p>
    <ul>${garesHTML}</ul>
    <button class="btn-popup" id="btn-trajets-train">📅 Voir les trajets du jour</button>
  `;

      const imgView = div.querySelector("#train-image-view");
      div.querySelector("#img-left").onclick = (e) => {
        e.stopPropagation();
        imgView.scrollBy({ left: -150, behavior: "smooth" });
      };
      div.querySelector("#img-right").onclick = (e) => {
        e.stopPropagation();
        imgView.scrollBy({ left: 150, behavior: "smooth" });
      };

      document.getElementById("btn-trajets-train").addEventListener("click", () => {
        afficherTrajetsTrain(train.id);
      });

      setTimeout(() => {
        div.style.opacity = 1;
        div.style.transform = "translateX(0)";
      }, 50);
    }, 300);
  }


  // === Rafraîchissement automatique de la vitesse actuelle toutes les secondes ===
  setInterval(() => {
    const div = document.getElementById("info-content");
    if (!div || !elementSelectionne || elementSelectionne.type !== "train") return;

    const train = elementSelectionne.data;
    const heureCourante = document.getElementById("heure")?.value || "08:00:00";
    const etat = window.__getEtatTrain ? window.__getEtatTrain(train, heureCourante) : null;
    if (!etat) return;

    const vitesseActuelle = Math.round(etat.vitesseActuelle || 0);

    // Trouver l'élément contenant "Vitesse actuelle"
    const paragraphes = div.querySelectorAll("p");
    for (const p of paragraphes) {
      const bold = p.querySelector("b");
      if (bold && bold.textContent.includes("Vitesse actuelle")) {
        p.innerHTML = `<b>Vitesse actuelle :</b> ${vitesseActuelle} km/h`;
        break;
      }
    }
  }, 1000);



  function afficherHorairesGare(nomGare) {
    const div = document.getElementById("info-content");
    if (!div) return;

    const departs = [];
    const arrivees = [];
    const tNow = timeToMinutes(document.getElementById("heure").value || "00:00");

    // Calcul des jours
    const joursSemaine = ["DI", "LU", "MA", "ME", "JE", "VE", "SA"];
    const now = new Date();
    const todayIndex = new Date(now.toLocaleString("en-US", { timeZone: "Europe/Paris" })).getDay();
    const jourActuel = joursSemaine[todayIndex];
    const jourDemain = joursSemaine[(todayIndex + 1) % 7];

    trains.forEach(train => {
      train.trajets.forEach(trajet => {
        const dess = trajet.dessertes;

        dess.forEach((d, i) => {
          if (d.gare === nomGare) {
            const joursValides = d.jours || ["LU", "MA", "ME", "JE", "VE", "SA", "DI"];
            const minutes = timeToMinutes(d.heure);

            const circuleAujourdhui = joursValides.includes(jourActuel);
            const circuleDemain = joursValides.includes(jourDemain);

            // Si le train ne circule ni aujourd'hui ni demain → on ignore
            if (!circuleAujourdhui && !circuleDemain) return;

            // ✅ AJOUT POUR AUJOURD'HUI
            if (circuleAujourdhui && minutes + (d.arret || 0) >= tNow){

              if (i < dess.length - 1) {
                const destinationFinale = dess.at(-1).gare;
                const heureArrivee = timeToMinutes(d.heure);
                const heureDepart = heureArrivee + (d.arret || 0);
                const heureFormatee = minutesToTime(heureDepart);

                const garesDesservies = dess
                  .slice(i + 1)
                  .map(x => x.gare)
                  .join(" – ");

                departs.push({
                  train: train.id,
                  heure: heureFormatee,
                  vers: destinationFinale,
                  demain: false,
                  gares: garesDesservies,
                  jours: d.jours
                });
              }

              if (i > 0) {
                const origine = dess[0].gare;
                arrivees.push({
                  train: train.id,
                  heure: d.heure,
                  de: origine,
                  demain: false,
                  jours: d.jours
                });
              }
            }

            // ✅ AJOUT POUR DEMAIN
            if (circuleDemain) {
              if (i < dess.length - 1) {
                const destinationFinale = dess.at(-1).gare;
                const heureArrivee = timeToMinutes(d.heure);
                const heureDepart = heureArrivee + (d.arret || 0);
                const heureFormatee = minutesToTime(heureDepart);

                const garesDesservies = dess
                  .slice(i + 1)
                  .map(x => x.gare)
                  .join(" – ");

                departs.push({
                  train: train.id,
                  heure: heureFormatee,
                  vers: destinationFinale,
                  demain: true,
                  gares: garesDesservies,
                  jours: d.jours
                });
              }

              if (i > 0) {
                const origine = dess[0].gare;
                arrivees.push({
                  train: train.id,
                  heure: d.heure,
                  de: origine,
                  demain: true,
                  jours: d.jours
                });
              }
            }
          }
        });
      });
    });

    // Tri : d'abord par jour (aujourd'hui puis demain), puis par heure
    const sortByTimeAndDay = (a, b) => {
      if (a.demain !== b.demain) return a.demain ? 1 : -1; // aujourd'hui avant demain
      return timeToMinutes(a.heure) - timeToMinutes(b.heure);
    };

    departs.sort(sortByTimeAndDay);
    arrivees.sort(sortByTimeAndDay);

    //const prochainsDeparts = departs.slice(0, 5); // Augmenté pour voir plus de trajets
    //const prochainesArrivees = arrivees.slice(0, 5);
    const prochainsDeparts = departs.slice(0, 5).map(d => {
      const joursSemaine = ["DI", "LU", "MA", "ME", "JE", "VE", "SA"];
      const jourActuel = joursSemaine[new Date().getDay()];
      const umCount = getUMCount(d.train, d.heure, jourActuel);
      return { ...d, umCount };
    });

    const prochainesArrivees = arrivees.slice(0, 5).map(a => {
      const joursSemaine = ["DI", "LU", "MA", "ME", "JE", "VE", "SA"];
      const jourActuel = joursSemaine[new Date().getDay()];
      const umCount = getUMCount(a.train, a.heure, jourActuel);
      return { ...a, umCount };
    });


    div.style.transition = "opacity 0.3s ease, transform 0.3s ease";
    div.style.opacity = 0;
    div.style.transform = "translateX(-10px)";

    setTimeout(() => {
      const html = `
  <h3>🕓 Gare de ${nomGare}</h3>

  <div class="horaire-section depart">
    <h4>🚆 Départs</h4>
    <ul>
      ${prochainsDeparts.map(d => `
        <li class="depart ${d.demain ? "lendemain" : ""}">
          <span class="heure">${d.heure}</span>
          <span class="vers">→ ${d.vers}</span> 
          <span class="gares-defile">
            <span class="gares-txt">${d.gares}</span>
          </span>
          <span class="train-id">(${d.train}${d.umCount > 1 ? ` – UM${d.umCount}` : ""})</span>
          ${d.demain ? '<span class="next-day">Lendemain</span>' : ""}
        </li>`).join("")}
    </ul>
  </div>

  <div class="horaire-section arrivee">
    <h4>🚉 Arrivées</h4>
    <ul>
      ${prochainesArrivees.map(a => `
        <li class="arrivee ${a.demain ? "lendemain" : ""}">
          <span class="heure">${a.heure}</span>
          <span class="de">← ${a.de}</span> 
          <span class="train-id">(${a.train}${a.umCount > 1 ? ` – UM${a.umCount}` : ""})</span>
          ${a.demain ? '<span class="next-day">Lendemain</span>' : ""}
        </li>`).join("")}
    </ul>
  </div>
  <button class="btn-popup" id="btn-fiche-gare">🕐 Voir la fiche horaire</button>
  `;

      div.innerHTML = html;
      document.getElementById("btn-fiche-gare").addEventListener("click", () => {
        afficherFicheHoraire(nomGare);
      });

      setTimeout(() => {
        div.style.opacity = 1;
        div.style.transform = "translateX(0)";
      }, 50);
    }, 300);
  }

  // Affichage ligne + légende 
  const selectAffichage = document.getElementById("select-affichage");
  // Gère à la fois un changement et un reclique sur la même option
  selectAffichage.addEventListener("click", (e) => {
    afficherLegendeAffichage(); // même si la valeur est identique
  });

  selectAffichage.addEventListener("change", (e) => {
    affichageLignes = e.target.value;
    fondDoitEtreRedessine = true;
    afficherLegendeAffichage();
  });

  function afficherLegendeAffichage() {
    const div = document.getElementById("info-content");
    if (!div) return;

    let html = `<h3>Légende – ${selectAffichage.options[selectAffichage.selectedIndex].text}</h3>`;

    switch (affichageLignes) {
      case "electrification":
        html += `
        <ul class="legende">
          <li><span class="coul" style="background:#fe3434"></span> 25 kV CA</li>
          <li><span class="coul" style="background:#57ba34"></span> 15 kV CA</li>
          <li><span class="coul" style="background:#666"></span> Diesel / non électrifiée</li>
        </ul>`;
        break;

      case "type":
        html += `
        <ul class="legende">
          <li><span class="coul" style="background:#dc0000"></span> LGV</li>
          <li><span class="coul" style="background:#0064ff"></span> Ligne classique</li>
          <li><span class="coul" style="background:#555;border:dashed 1px #999"></span> Tunnel</li>
        </ul>`;
        break;

      case "vitesse":
        html += `
    <ul class="legende">
      <li><span class="coul" style="background:#dc0000"></span> ≥ 260 km/h</li>
      <li><span class="coul" style="background:#ffd700"></span> ≥ 200 km/h</li>
      <li><span class="coul" style="background:#006400"></span> ≥ 160 km/h</li>
      <li><span class="coul" style="background:#32cd32"></span> ≥ 120 km/h</li>
      <li><span class="coul" style="background:#87cefa"></span> ≥ 90 km/h</li>
      <li><span class="coul" style="background:#000080"></span> < 90 km/h</li>
    </ul>`;
        break;


      case "signalisation":
        html += `
        <ul class="legende">
          <li><span class="coul" style="background:#ff00ff"></span> ETCS</li>
          <li><span class="coul" style="background:#0000ff"></span> KVB</li>
          <li><span class="coul" style="background:#ffc800"></span> PZB</li>
          <li><span class="coul" style="background:#00c8ff"></span> LZB</li>
          <li><span class="coul" style="background:#666"></span> Autre</li>
        </ul>`;
        break;
    }

    div.innerHTML = html;
  }

  function minutesToTime(minutes) {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
  }
});

