import { villes, lignes } from './data.js';
import { trains } from './trains.js';

new p5((p) => {
  let offsetX = 0;
  let offsetY = 0;
  let elementSelectionne = null; // { type: "train" | "gare", data: ... }
  let derniereHeureConnue = null; // pour éviter les rafraîchissements inutiles
  let zoom = 1;
  const moveSpeed = 20;
  const zoomFactor = 0.1;

  p.setup = function () {
    const container = document.getElementById("canvas-container");
    const canvas = p.createCanvas(container.offsetWidth, container.offsetHeight);
    canvas.parent(container);

    window.addEventListener("resize", () => {
      p.resizeCanvas(container.offsetWidth, container.offsetHeight);
    });

    canvas.parent("canvas-container");
    // Positionner le canvas en arrière-plan
    canvas.style('position', 'absolute');
    canvas.style('top', '0');
    canvas.style('left', '0');

    // --- Déplacement ---
    document.getElementById("up").onclick = () => offsetY += moveSpeed;
    document.getElementById("down").onclick = () => offsetY -= moveSpeed;
    document.getElementById("left").onclick = () => offsetX += moveSpeed;
    document.getElementById("right").onclick = () => offsetX -= moveSpeed;

    // --- Déplacement + zoom clavier ---
    document.addEventListener("keydown", (e) => {
      // Empêcher le défilement de la page
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
        e.preventDefault();
      }

      // Si CTRL est enfoncé → on gère le zoom
      if (e.ctrlKey) {
        if (e.key === "ArrowUp") {
          zoomOnPoint(p.width / 2, p.height / 2, +1); // zoom avant
        } else if (e.key === "ArrowDown") {
          zoomOnPoint(p.width / 2, p.height / 2, -1); // zoom arrière
        }
        return; // on arrête là pour éviter un déplacement
      }

      // Sinon → déplacement normal
      switch (e.key) {
        case "ArrowUp":
          offsetY += moveSpeed;
          break;
        case "ArrowDown":
          offsetY -= moveSpeed;
          break;
        case "ArrowLeft":
          offsetX += moveSpeed;
          break;
        case "ArrowRight":
          offsetX -= moveSpeed;
          break;
      }
    });


    // --- Zoom boutons ---
    document.getElementById("zoom-in").onclick = () => zoomOnPoint(p.width / 2, p.height / 2, 1);
    document.getElementById("zoom-out").onclick = () => zoomOnPoint(p.width / 2, p.height / 2, -1);

    boutonMode.click(); // active automatiquement le mode réel

  };


  // ===== Fonction de zoom centrée sur le curseur ---
  function zoomOnPoint(mouseX, mouseY, direction) {
    const oldZoom = zoom;
    const newZoom = p.constrain(zoom + direction * zoomFactor, 0.5, 3);

    // Calcul du décalage pour garder le point sous la souris fixe
    const worldX = (mouseX - offsetX) / oldZoom;
    const worldY = (mouseY - offsetY) / oldZoom;

    zoom = newZoom;

    offsetX = mouseX - worldX * zoom;
    offsetY = mouseY - worldY * zoom;
  }



  // =====  Gestion de l'heure réelle ---
  let modeReel = false;
  let timerHeure = null;

  const inputHeure = document.getElementById("heure");
  const boutonMode = document.getElementById("mode-heure");

  boutonMode.onclick = () => {
    modeReel = !modeReel;
    boutonMode.classList.toggle("active", modeReel);
    boutonMode.textContent = modeReel ? "🕑 Heure manuelle" : "⏰ Heure réelle";

  if (modeReel) {
    inputHeure.disabled = true;
    majHeureReelle();
    secondeTimer = setInterval(majHeureReelle, 1000); // maj chaque seconde
  } else {
    inputHeure.disabled = false;
    clearInterval(secondeTimer);
  }
  if (modeReel) inputHeure.step = 1; // secondes visibles
  else inputHeure.step = 60;          // retour minute


    };


let secondeTimer = null;

function majHeureReelle() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, "0");
  const m = String(now.getMinutes()).padStart(2, "0");
  const s = String(now.getSeconds()).padStart(2, "0");

  // 🔹 afficher les secondes mais arrondir la simulation à la minute
  inputHeure.value = `${h}:${m}:${s}`;

  const minuteCourante = `${h}:${m}`;
  if (minuteCourante !== derniereHeureConnue) {
    derniereHeureConnue = minuteCourante;
    rafraichirSelection(); // maj des infos toutes les minutes

    // p.redraw(); // force le redessin de la carte, à voir si obligatoire
  }
}

  // Affichage gares intermédiaires
  function trouverCheminEntreGares(gareA, gareB) {
    // Graphe simple des connexions à partir de lignes[]
    const graph = {};
    lignes.forEach(l => {
      if (!graph[l.gareA]) graph[l.gareA] = [];
      if (!graph[l.gareB]) graph[l.gareB] = [];
      graph[l.gareA].push(l.gareB);
      graph[l.gareB].push(l.gareA);
    });

    // BFS pour trouver le plus court chemin
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

    return [gareA, gareB]; // fallback
  }


  // ===== Savoir état du train
function getEtatTrain(train, heureCourante) {
  const tNow = timeToMinutes(heureCourante);
  let trajetActuel = null;
  let statut = "";
  let position = null; // {x, y}

  // --- Trouver trajet en cours ---
  for (const trajet of train.trajets) {
    const debut = timeToMinutes(trajet.dessertes[0].heure);
    const fin = timeToMinutes(trajet.dessertes.at(-1).heure);
    if (tNow >= debut && tNow <= fin) {
      trajetActuel = trajet;
      statut = "en circulation";
      break;
    }
  }

  // --- Cas 1 : trajet en cours ---
  if (trajetActuel) {
    const dess = trajetActuel.dessertes;
    for (let i = 0; i < dess.length - 1; i++) {
      const a = dess[i];
      const b = dess[i + 1];

      const tA = timeToMinutes(a.heure);
      const tB = timeToMinutes(b.heure);
      const arret = a.arret || 0;
      const tDepartEffectif = tA + arret;

      if (tNow < tA) {
        const g = villes.find(v => v.nom === a.gare);
        if (g) position = { x: g.x, y: g.y };
        statut = `en gare à ${a.gare}`;
        return { trajet: trajetActuel, statut, position };
      }

      if (tNow >= tA && tNow < tDepartEffectif) {
        const g = villes.find(v => v.nom === a.gare);
        if (g) position = { x: g.x, y: g.y };
        statut = `en gare à ${a.gare}`;
        return { trajet: trajetActuel, statut, position };
      }

      if (tNow >= tDepartEffectif && tNow <= tB) {
        const ratio = (tNow - tDepartEffectif) / (tB - tDepartEffectif);

        // 🔹 Chemin réel entre les deux gares
        const chemin = trouverCheminEntreGares(a.gare, b.gare);
        const points = chemin.map(nom => villes.find(v => v.nom === nom)).filter(Boolean);

        if (points.length >= 2) {
          // Longueur totale du chemin
          let totalDist = 0;
          for (let j = 0; j < points.length - 1; j++) {
            totalDist += p.dist(points[j].x, points[j].y, points[j + 1].x, points[j + 1].y);
          }

          // Distance parcourue sur le chemin
          let distParcourue = ratio * totalDist;

          // Trouver le segment actuel
          for (let j = 0; j < points.length - 1; j++) {
            const d = p.dist(points[j].x, points[j].y, points[j + 1].x, points[j + 1].y);
            if (distParcourue <= d) {
              const localRatio = distParcourue / d;
              const x = p.lerp(points[j].x, points[j + 1].x, localRatio);
              const y = p.lerp(points[j].y, points[j + 1].y, localRatio);
              position = { x, y };
              statut = `entre ${a.gare} et ${b.gare}`;
              return { trajet: trajetActuel, statut, position };
            }
            distParcourue -= d;
          }
        }
      }
    }

    // arrivé au terminus
    const derniere = trajetActuel.dessertes.at(-1);
    const gTerm = villes.find(v => v.nom === derniere.gare);
    if (gTerm) position = { x: gTerm.x, y: gTerm.y };
    statut = `en gare à ${derniere.gare}`;
    return { trajet: trajetActuel, statut, position };
  }

  // --- Cas 2 : pas de trajet en cours ---
  const prochain = train.trajets.find(t => timeToMinutes(t.dessertes[0].heure) > tNow);
  if (prochain) {
    const precedent = train.trajets.findLast(t => timeToMinutes(t.dessertes.at(-1).heure) <= tNow);
    const gareRef = precedent ? precedent.dessertes.at(-1).gare : prochain.dessertes[0].gare;
    const g = villes.find(v => v.nom === gareRef);
    if (g) position = { x: g.x, y: g.y };
    statut = `en attente du prochain trajet (${prochain.nom})`;
    return { trajet: prochain, statut, position };
  }

  // --- Cas 3 : fin de service ---
  const dernier = train.trajets.at(-1);
  const gFin = villes.find(v => v.nom === dernier.dessertes.at(-1).gare);
  if (gFin) position = { x: gFin.x, y: gFin.y };
  statut = `Service fini. En gare à ${dernier.dessertes.at(-1).gare}`;
  return { trajet: dernier, statut, position };
}




  // --- Dessin ---
  p.draw = function () {
    p.background(170, 200, 255);
    p.push();
    // Appliquer zoom et décalage
    p.translate(offsetX, offsetY);
    p.scale(zoom);


    // Récupère la valeur de l'heure dans le champ HTML
    const input = document.getElementById("heure");
    const heureCourante = input ? input.value : "08:00"; // Valeur par défaut

    // --- Lignes ferroviaires ---
    p.strokeWeight(3);
    lignes.forEach(l => {
      const g1 = villes.find(v => v.nom === l.gareA);
      const g2 = villes.find(v => v.nom === l.gareB);
      if (!g1 || !g2) return;

      // Couleur selon l'électrification
      if (l.electrification === "25kV CA") p.stroke(254, 52, 52);
      else if (l.electrification === "15kV CA") p.stroke(87, 186, 52);
      else p.stroke(0);

      p.line(g1.x, g1.y, g2.x, g2.y);
    });

    // --- Gares ---
    villes.forEach(v => {
      p.noStroke();
      p.fill(0);
      p.circle(v.x, v.y, v.type === "grande" ? 14 : 10);
      p.textAlign(p.CENTER, p.CENTER);
      p.textSize(12);
      p.fill(0);
      p.text(v.nom, v.x, v.y - 15);
    });




    // --- Trains sur la carte ---
    trains.forEach(train => {
      const etat = getEtatTrain(train, heureCourante);
      if (!etat || !etat.position) return;

      const { position, statut } = etat;

      // Couleur selon le statut
      if (statut.startsWith("entre")) p.fill("blue");
      else if (statut.startsWith("en gare")) p.fill("orange");
      else p.fill("gray");

      p.noStroke();
      p.circle(position.x, position.y, 8);
      p.fill(0);
      p.textSize(10);
      p.text(train.id, position.x, position.y - 10);

      train._screenPos = position;
      train._statut = statut;
      train._trajetActuel = etat.trajet;
    });

    p.pop(); // fin du translate
  };

  p.mousePressed = function (event) {
    // Vérifier si le clic est sur le canvas (pas sur le panneau d'info ou les contrôles)
    const canvasRect = p.canvas.getBoundingClientRect();
    const clickX = event.clientX || (canvasRect.left + p.mouseX);
    const clickY = event.clientY || (canvasRect.top + p.mouseY);
    
    // Si le clic est en dehors du canvas, on ignore
    if (clickX < canvasRect.left || clickX > canvasRect.right || clickY < canvasRect.top || clickY > canvasRect.bottom) {
      return;
    }

    // Vérifier si on clique sur le menu contextuel
    const menu = document.getElementById("context-menu");
    if (menu && menu.style.display === "block") {
      const menuRect = menu.getBoundingClientRect();
      const mx = event.clientX || p.mouseX + canvasRect.left;
      const my = event.clientY || p.mouseY + canvasRect.top;

      if (mx >= menuRect.left && mx <= menuRect.right && my >= menuRect.top && my <= menuRect.bottom) {
        return; // Clic sur le menu, on laisse le onclick gérer
      }
    }

    const worldX = (p.mouseX - offsetX) / zoom;
    const worldY = (p.mouseY - offsetY) / zoom;

    const nearbyTrains = [];
    let gareCliquee = null;

    // --- détecter trains proches ---
    for (const train of trains) {
      if (!train._screenPos) continue;
      const d = p.dist(worldX, worldY, train._screenPos.x, train._screenPos.y);
      if (d < 10 / zoom) nearbyTrains.push(train);
    }

    // --- détecter gare proche ---
    for (const v of villes) {
      const d = p.dist(worldX, worldY, v.x, v.y);
      if (d < 10 / zoom) gareCliquee = v;
    }

    // --- aucun élément cliqué ---
    if (nearbyTrains.length === 0 && !gareCliquee) {
      cacherMenu();
      reinitialiserInfoPanel();
      elementSelectionne = null;      
      return;
    }

    // --- un seul élément => affichage direct ---
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

    // --- plusieurs éléments => afficher le menu ---
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

      // déterminer couleur selon statut
      let color = "gray";
      if (train._statut?.startsWith("entre")) color = "blue";
      else if (train._statut?.startsWith("en gare")) color = "orange";

      // contenu du bouton avec petit rond coloré
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


    // --- positionner le menu au clic ---
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

  // --- MAJ affichage
  function reinitialiserInfoPanel() {
  const div = document.getElementById("info-content");
  if (!div) return;
  div.innerHTML = `<h2>Informations</h2><div>Cliquez sur un train ou une gare</div>`;
  }

  function rafraichirSelection() {
    if (!elementSelectionne) return; // pas besoin de rafraîchir le panneau si rien n'est sélectionné
    
    if (elementSelectionne.type === "train") {
      afficherInfosTrain(elementSelectionne.data);
    } else if (elementSelectionne.type === "gare") {
      afficherHorairesGare(elementSelectionne.data);
    }
  }


  // --- afficher Infos Train
  function afficherInfosTrain(train) {
    const div = document.getElementById("info-content");
    if (!div) return;

    // Recalculer l'état actuel du train pour avoir les infos à jour
    const heureCourante = document.getElementById("heure").value;
    const etat = getEtatTrain(train, heureCourante);
    const statut = etat?.statut || "indisponible";
    const trajet = etat?.trajet;

    const rame = [train.nom, ...(train.composition || [])];
    const imagesHTML = rame.map(nom => {
      const imageName = nom.replaceAll(" ", "_") + ".png";
      const imagePath = `./assets/trains/${imageName}`;
      return `<img class="train-segment" src="${imagePath}" alt="${nom}">`;
    }).join("");

    // ---
    

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
        if (tNow >= tNext) etat = "passe";
        else if (tNow >= t && tNow < tDepartEffectif) etat = "en-gare";
        else if (tNow >= tDepartEffectif && tNow < tNext) etat = "en-route";

        // --- Étape : gare ---
        garesHTML += `
      <div class="timeline-step ${etat}">
        <div class="dot"></div>
        <div class="info">
          <span class="heure">${d.heure}</span>
          <span class="gare">${d.gare}</span>
        </div>
      </div>
    `;

        // --- Étape intermédiaire : segment entre les deux gares ---
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


    // --- Animation de transition + affichage du contenu
    div.style.transition = "opacity 0.3s ease, transform 0.3s ease";
    div.style.opacity = 0;
    div.style.transform = "translateX(-10px)";
    
    setTimeout(() => {
      div.innerHTML = `
    <h3>${train.nom}${rame.length > 1 ? " (UM" + rame.length + ")" : ""}</h3>
    <div id="train-image-container">
      <button id="img-left" class="img-nav">◀</button>
      <div id="train-image-view">${imagesHTML}</div>
      <button id="img-right" class="img-nav">▶</button>
    </div>
    <p><b>ID :</b> ${train.id}</p>
    <p><b>Statut :</b> ${statut}</p>
    <p><b>Destination :</b> ${trajet ? trajet.dessertes.at(-1).gare : "—"}</p>
    <p><b>Prochaines gares :</b></p>
    <ul>${garesHTML}</ul>
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
      
      // Petit délai pour que le navigateur prenne en compte le nouveau contenu
      setTimeout(() => {
        div.style.opacity = 1;
        div.style.transform = "translateX(0)";
      }, 50);
    }, 300);
  }





  // --- afficher Horaires Gare

  function afficherHorairesGare(nomGare) {
    const div = document.getElementById("info-content");
    if (!div) return;

    const departs = [];
    const arrivees = [];
    const tNow = timeToMinutes(document.getElementById("heure").value || "00:00");

    // 🔹 Parcourir chaque train et ses trajets
    trains.forEach(train => {
      train.trajets.forEach(trajet => {
        const dess = trajet.dessertes;

        dess.forEach((d, i) => {
          if (d.gare === nomGare) {

            // --- Départ ---
            if (i < dess.length - 1) {
              const destinationFinale = dess.at(-1).gare;
              const minutes = timeToMinutes(d.heure);
              const isTomorrow = minutes < tNow;

              // on crée la liste des gares intermédiaires
              const garesDesservies = dess
                .slice(i + 1)
                .map(x => x.gare)
                .join(" — ");

              departs.push({
                train: train.id,
                heure: d.heure,
                vers: destinationFinale,
                demain: isTomorrow,
                gares: garesDesservies
              });
            }
            // --- Arrivée ---
            if (i > 0) {
              const origine = dess[0].gare;
              const minutes = timeToMinutes(d.heure);
              const isTomorrow = minutes < tNow;
              arrivees.push({
                train: train.id,
                heure: d.heure,
                de: origine,
                demain: isTomorrow,
              });
            }
          }
        });
      });
    });

    // 🔹 Trier par heure (en minutes)
    const sortByTime = (a, b) => timeToMinutes(a.heure) - timeToMinutes(b.heure);
    departs.sort(sortByTime);
    arrivees.sort(sortByTime);

    // 🔹 Ne garder que les trains à venir, sinon marquer comme "lendemain"
    const prochainsDeparts = departs
      .filter(d => !d.demain)
      .concat(departs.filter(d => d.demain))
      .slice(0, 5);

    const prochainesArrivees = arrivees
      .filter(a => !a.demain)
      .concat(arrivees.filter(a => a.demain))
      .slice(0, 5);
      
    // -----
    div.style.transition = "opacity 0.3s ease, transform 0.3s ease";
    div.style.opacity = 0;
    div.style.transform = "translateX(-10px)";
    
    setTimeout(() => {
      // 🔹 Génération HTML
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
            <span class="train-id">(${d.train})</span>
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
            <span class="train-id">(${a.train})</span>
            ${a.demain ? '<span class="next-day">Lendemain</span>' : ""}
          </li>`).join("")}
      </ul>
    </div>
  `;

      div.innerHTML = html;
      
      setTimeout(() => {
        div.style.opacity = 1;
        div.style.transform = "translateX(0)";
      }, 50);
    }, 300);
  }

  // ----- Conversion "HH:MM" → minutes
  function timeToMinutes(h) {
    if (!h) return 0;
    const [hr, mn] = h.split(":").map(Number);
    return hr * 60 + (mn || 0);
  }


});
