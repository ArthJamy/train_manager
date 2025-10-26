import { trainsFR } from './trains/trainsFR.js';
import { trainsDE } from './trains/trainsDE.js';
import { trainsCH } from './trains/trainsCH.js';
import { trainsFRET } from './trains/trainsFRET.js';
export const trains = [...trainsFR, ...trainsDE, ...trainsCH, ...trainsFRET];

/** Crée et affiche une fenêtre popup principale */
function ouvrirPopup(titre, contenuHTML) {
  const overlay = document.createElement("div");
  overlay.className = "popup-overlay";

  const popup = document.createElement("div");
  popup.className = "popup-window";
  popup.innerHTML = `
    <button class="popup-close">✖</button>
    <h2>${titre}</h2>
    <div class="popup-content">${contenuHTML}</div>
  `;

  overlay.appendChild(popup);
  document.body.appendChild(overlay);

  overlay.querySelector(".popup-close").addEventListener("click", () => overlay.remove());
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) overlay.remove();
  });
}

/** Ajoute X minutes à "HH:MM" -> "HH:MM" */
function addMinutesToTime(timeStr, minutes) {
  const [h, m] = timeStr.split(":").map(Number);
  const d = new Date();
  d.setHours(h, m + minutes, 0, 0);
  return d.toTimeString().slice(0, 5);
}

// is fret 
function isFRET(train) {
  const ref = trains.find(t => t.id === train.id);
  return ref && ('tonnage' in ref) && !('capacite' in ref);
}

/** Mini-popup détaillant un trajet (côté gauche si 'arrivee') */
function showMiniPopup(e, trajet, type, gareFocus) {
  hideMiniPopup();

  const tooltip = document.createElement("div");
  tooltip.className = "mini-popup";
  tooltip.innerHTML = `
    <h5>${trajet.nom}</h5>
    <ul>
      ${trajet.dessertes.map((d, i) => {
    const heureFinale = (i < trajet.dessertes.length - 1)
      ? addMinutesToTime(d.heure, d.arret || 0)
      : d.heure;

    // ✅ Si cette gare est celle sur laquelle on a cliqué, on la met en gras
    const isFocus = d.gare === gareFocus;
    const styleFocus = isFocus ? 'style="font-weight:700; color:#1e3a8a;"' : '';

    return `<li ${styleFocus}>${heureFinale} — ${d.gare}</li>`;
  }).join("")}
    </ul>
  `;
  document.body.appendChild(tooltip);

  const rect = e.currentTarget.getBoundingClientRect();
  const tip = tooltip.getBoundingClientRect();
  const vw = window.innerWidth, vh = window.innerHeight;
  const isArrivee = type === "arrivee";

  // Position horizontale
  let left = isArrivee ? rect.left - tip.width - 10 : rect.right + 10;
  if (left < 8) left = 8;
  if (left + tip.width > vw - 8) left = vw - tip.width - 8;

  // Position verticale
  let top = rect.top;
  if (top + tip.height > vh - 8) top = vh - tip.height - 8;
  if (top < 8) top = 8;

  tooltip.style.left = `${left}px`;
  tooltip.style.top = `${top}px`;
}


function hideMiniPopup() {
  document.querySelector(".mini-popup")?.remove();
}

/** Trajets du jour d’un train (popup principal) */
export function afficherTrajetsTrain(trainId) {
  const train = trains.find(t => t.id === trainId);
  if (!train) return;

  // Détection FRET
  const estFRET = ('tonnage' in train) && !('capacite' in train);

  const html = `
    <div class="trajets-container" style="color:${estFRET ? '#8B4513' : 'inherit'};">
      ${train.trajets.map(trajet => {
    // 🔹 Extraire les jours valides (ou "Tous")
    const joursSets = new Set();
    trajet.dessertes.forEach(d => {
      const joursValides = d.jours || ["Tous"];
      joursValides.forEach(j => joursSets.add(j));
    });
    const joursTexte = Array.from(joursSets).join(", ");

    // 🔹 Bloc de trajet
    return `
          <div class="trajet-bloc" style="border-left:4px solid ${estFRET ? '#8B4513' : '#1e3a8a'}; padding-left:6px;">
            <h3 style="color:${estFRET ? '#8B4513' : '#1e3a8a'};">
              ${estFRET ? '📦 ' : '🚅 '}${trajet.nom}
            </h3>
            <p class="jours-valables">Jour(s) valable(s) : ${joursTexte}</p>
            <ul>
              ${trajet.dessertes.map((d, i) => {
      const heure = (i < trajet.dessertes.length - 1)
        ? addMinutesToTime(d.heure, d.arret || 0)
        : d.heure;
      return `
                  <li>
                    <span class="heure" style="color:${estFRET ? '#A0522D' : '#1e3a8a'}">${heure}</span> 
                    . > 
                    <span class="gare">${d.gare}</span>
                    ${estFRET ? `<span style="color:#CD853F;">&nbsp (${d.arret || 0} min d'arrêt)</span>` : ""}
                  </li>`;
    }).join("")}
            </ul>
          </div>
        `;
  }).join("")}
    </div>
  `;

  // 🟤 Popup titre différent pour FRET
  const titre = estFRET
    ? `📦 Itinéraires FRET — ${train.id} (${train.tonnage} t)`
    : `🚅 Trajets prévus — ${train.id}`;

  ouvrirPopup(titre, html);
}




/** Fiche horaire d’une gare (liste synthétique + mini-popup au survol) */
export function afficherFicheHoraire(gareNom) {
  const departs = [];
  const arrivees = [];

  trains.forEach(train => {
    train.trajets.forEach((trajet, idxTrajet) => {
      const joursSemaine = ["DI", "LU", "MA", "ME", "JE", "VE", "SA"];
      const now = new Date();
      const jourActuel = joursSemaine[
        new Date(now.toLocaleString("en-US", { timeZone: "Europe/Paris" })).getDay()
      ];

      trajet.dessertes.forEach((d, i, arr) => {
        if (d.gare !== gareNom) return;
        // Vérifie si cette desserte est valable aujourd’hui
        const joursValides = d.jours || ["LU", "MA", "ME", "JE", "VE", "SA", "DI"];

        //if (!joursValides.includes(jourActuel)) return; Si on veut pas afficher dans fiche horraire


        if (i < arr.length - 1) {
          // Départ depuis cette gare : heure = heure + arrêt
          departs.push({
            trainId: train.id,
            train,
            trajet,
            idxTrajet,
            heure: addMinutesToTime(d.heure, d.arret || 0),
            destination: arr[arr.length - 1].gare,
            jours: d.jours
          });
        }

        if (i > 0) {
          // Arrivée à cette gare
          arrivees.push({
            trainId: train.id,
            train,
            trajet,
            idxTrajet,
            heure: d.heure,
            provenance: arr[0].gare,
            jours: d.jours  // ✅ Ajouter les jours
          });
        }
      });
    });
  });

  departs.sort((a, b) => a.heure.localeCompare(b.heure));
  arrivees.sort((a, b) => a.heure.localeCompare(b.heure));

  const html = `
    <div class="fiche-horaire">
      <div class="horaire-col depart">
        <h4>🚆 Départs</h4>
        <ul>
          ${departs.map(d => `
            <li class="train-line"
                data-train="${d.trainId}"
                data-type="depart"
                data-trajet-index="${d.idxTrajet}">
              <span class="heure">${d.heure}</span>
              <span class="destination"> → ${d.destination}</span>
              <span class="jours">(${(d.jours || ["Tous"]).join(", ")})</span>
              <span class="train-id">${d.trainId}</span>
            </li>`).join("")}
        </ul>
      </div>

      <div class="horaire-col arrivee">
        <h4>🚉 Arrivées</h4>
        <ul>
          ${arrivees.map(a => `
            <li class="train-line"
                data-train="${a.trainId}"
                data-type="arrivee"
                data-trajet-index="${a.idxTrajet}">
              <span class="heure">${a.heure}</span>
              <span class="destination"> ← ${a.provenance}</span>
              <span class="jours">(${(a.jours || ["Tous"]).join(", ")})</span>
              <span class="train-id">${a.trainId}</span>
            </li>`).join("")}
        </ul>
      </div>
    </div>
  `;

  ouvrirPopup(`🕓 Fiche horaire — ${gareNom}`, html);

  // Survol : mini-popup du trajet correspondant à la ligne
  document.querySelectorAll(".train-line").forEach(li => {
    li.addEventListener("mouseenter", e => {
      const id = li.dataset.train;
      const idx = Number(li.dataset.trajetIndex);
      const type = li.dataset.type;
      const train = trains.find(t => t.id === id);
      const trajet = train?.trajets[idx];
      if (trajet) showMiniPopup(e, trajet, type, gareNom);

    });
    li.addEventListener("mouseleave", hideMiniPopup);
  });
}




// ===================== Flotte : popup carte + liste triable par état ===================
export function afficherCarteFlotte() {
  const contenu = `
  <div class="flotte-toolbar" style="display:flex; align-items:center; justify-content:space-between; gap:1rem;">
    <div style="display:flex; align-items:center; gap:0.5rem;">
      <label for="tri-flotte">Trier par :</label>
      <select id="tri-flotte">
        <option value="etat">État du train</option>
        <option value="pays">Pays</option>
        <option value="type">Type (Voyageur / FRET)</option>
        <option value="id">ID</option>
        <option value="nom">Nom</option>
        <option value="vitesse">Vitesse</option>
      </select>
      <!-- sous-filtre dynamique -->
      <select id="filtre-secondaire" style="display:none; padding:4px; border-radius:4px;">
        <option value="all" selected>Tout</option>
      </select>
    </div>
    <input type="text" id="recherche-flotte" placeholder="Rechercher un train..." 
          style="padding:4px 8px; font-size:0.9em; border-radius:4px; border:1px solid #aaa; width:160px;">
  </div>
  <div id="flotte-grid" class="flotte-grid"></div>
`;



  ouvrirPopup("🚆 Flotte complète", contenu);

  // Récupère l'instantané runtime depuis main.js
  let data = getSnapshotFlotte();
  const grid = document.getElementById("flotte-grid");

  // === Compteur global de flotte ===
  const compteurDiv = document.createElement("div");
  compteurDiv.id = "compteur-flotte";
  compteurDiv.style.cssText = `
  display:flex;
  justify-content:center;
  align-items:center;
  gap:1rem;
  margin:8px 0 10px 0;
  font-weight:600;
  font-size:0.95em;
`;
  grid.parentNode.insertBefore(compteurDiv, grid);
  // fonction maj compteur
  function majCompteur(data) {
    const total = data.length;
    let nbFret = 0;
    let nbVoy = 0;

    data.forEach(t => {
      if (isFRET(t)) nbFret++;
      else nbVoy++;
    });

    compteurDiv.innerHTML = `
    <span style="color:#1e3a8a;">🚆 Voyageurs : ${nbVoy}</span>
    <span style="color:#8B4513;">📦 FRET : ${nbFret}</span>
    <span style="color:#555;">Total : ${total}</span>
  `;
  }

  const selTri = document.getElementById("tri-flotte");

  const selFiltre = document.getElementById("filtre-secondaire");
  // 🔹 Quand on change le tri principal
  selTri.addEventListener("change", async () => {
    // Montrer / cacher le sous-filtre selon le mode
    if (selTri.value === "pays") {
      selFiltre.style.display = "inline-block";
      selFiltre.innerHTML = `
      <option value="all">Tous</option>
      <option value="FR">France</option>
      <option value="DE">Allemagne</option>
      <option value="CH">Suisse</option>
    `;
    } else if (selTri.value === "type") {
      selFiltre.style.display = "inline-block";
      selFiltre.innerHTML = `
      <option value="all">Tous</option>
      <option value="voyageur">Voyageurs</option>
      <option value="fret">FRET</option>
    `;
    } else {
      selFiltre.style.display = "none";
    }

    const sorted = await sortFlotte(data, selTri.value);
    const filtered = filtrerSecondaire(sorted, selTri.value, selFiltre.value);
    renderGrid(filtered, grid);
    majCompteur(filtered); // ou sorted selon le contexte

  });

  // 🔹 Quand on change le sous-filtre
  selFiltre.addEventListener("change", async () => {
    const sorted = await sortFlotte(data, selTri.value);
    const filtered = filtrerSecondaire(sorted, selTri.value, selFiltre.value);
    renderGrid(filtered, grid);
    majCompteur(filtered); // ou sorted selon le contexte

  });


  // Tri par défaut : état
  sortFlotte(data, "etat").then(sorted => {
    renderGrid(sorted, grid);
    majCompteur(sorted); // ou sorted selon le contexte

  });

  selTri.addEventListener("change", async () => {
    const sorted = await sortFlotte(data, selTri.value);
    renderGrid(sorted, grid);
    majCompteur(sorted); // ou sorted selon le contexte

  });


  // Gérer la  barre de recherche
  const inputSearch = document.getElementById("recherche-flotte");
  // Tri par défaut
  sortFlotte(data, "etat").then(sorted => {
  renderGrid(sorted, grid);
  majCompteur(sorted);
});


  // Quand on change le tri
  selTri.addEventListener("change", async () => {
    const sorted = await sortFlotte(data, selTri.value);
    renderGrid(sorted, grid);
    majCompteur(sorted); // ou sorted selon le contexte

  });
  // Quand on tape dans la barre de recherche
  inputSearch.addEventListener("input", async () => {
    const term = inputSearch.value.toLowerCase().trim();
    const sorted = await sortFlotte(data, selTri.value);
    const filtered = sorted.filter(t =>
      t.id.toLowerCase().includes(term) ||
      (t.nom || "").toLowerCase().includes(term)
    );
    renderGrid(filtered, grid);
    majCompteur(filtered); // ou sorted selon le contexte

  });
}



export function afficherTrainsAleatoires() {
  const data = window.__trainRuntime?.getSnapshot() || [];
  const enRoute = data.filter(t => t.etat === "en_route");
  if (!enRoute.length) {
    alert("Aucun train actuellement en circulation !");
    return;
  }

  // Tirage de 3 trains différents
  const selection = [];
  while (selection.length < 3 && enRoute.length > 0) {
    const index = Math.floor(Math.random() * enRoute.length);
    selection.push(enRoute.splice(index, 1)[0]);
  }

  // Fonction pour créer le HTML complet d’un train
  const renderTrain = (t) => {
    const ref = trains.find(x => x.id === t.id);
    if (!ref) return "";

    const rame = [ref.nom, ...(ref.composition || [])];
    const images = rame.map(nom => {
      const image = nom.replaceAll(" ", "_") + ".png";
      return `<img src="./assets/trains/${image}" alt="${nom}" class="train-segment" style="height:38px;">`;
    }).join("");

    const fret = ('tonnage' in ref);
    const color = fret ? '#8B4513' : '#1e3a8a';
    const icon = fret ? '📦' : '🚆';

    return `
      <div class="train-card" style="border-left:4px solid ${color}; margin:10px 0; padding:8px; background:#f8f8f8; border-radius:6px;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <h3 style="margin:0; color:${color};">${icon} ${ref.nom}</h3>
          <span style="color:#555; font-size:0.85em;">${t.vitesseActuelle} km/h</span>
        </div>
        <p style="margin:2px 0 4px 0; color:#444;">${t.statut}</p>
        <div class="train-rame-view">${images}</div>
        <a href="#0" class="btn-popup" data-train="${t.id}" style="display:inline-block; margin-top:6px;">🔍 Voir détails</a>
      </div>
    `;
  };

  const contenu = `
    <div id="random-trains-container">
      ${selection.map(renderTrain).join("")}
    </div>
    <div style="text-align:center; margin-top:10px;">
      <a href="#0" id="btn-refresh-random" class="btn-popup">↻ Autres trains</a>
    </div>
  `;

  ouvrirPopup("🚞 Trains en circulatio", contenu);

  // Recharger les trains
  document.getElementById("btn-refresh-random").addEventListener("click", () => {
    document.querySelector(".popup-overlay")?.remove();
    afficherTrainsAleatoires();
  });

  // Cliquer sur "Voir détails" ou sur une rame recentre sur le train
  document.querySelectorAll(".btn-popup[data-train]").forEach(a => {
    a.addEventListener("click", e => {
      e.preventDefault();
      const id = a.dataset.train;
      const train = selection.find(t => t.id === id);
      if (train && window.__centrerSurTrain) {
        window.__centrerSurTrain(train.x, train.y, train.id);
        document.querySelector(".popup-overlay")?.remove();
      }
    });
  });
}



function getSnapshotFlotte() {
  if (window.__trainRuntime?.getSnapshot) return window.__trainRuntime.getSnapshot();
  console.warn("[Flotte] Provider runtime manquant. Retourne []");
  return [];
}

async function sortFlotte(arr, mode) {
  const orderEtat = { en_route: 0, en_gare: 1, en_attente: 2, termine: 3, pas_service: 4 };
  const a = [...arr];

  // 🔹 Charger le fichier engins.json une seule fois
  if (!window.__enginsData) {
    try {
      const res = await fetch("./src/engins.json");
      window.__enginsData = await res.json();
    } catch (e) {
      console.warn("⚠️ Impossible de charger engins.json :", e);
      window.__enginsData = { trains: [] };
    }
  }

  const enginsData = window.__enginsData;
  const paysMap = {};
  const vitesseMaxMap = {};

  enginsData.trains.forEach(t => {
    paysMap[t.nom] = t.pays;
    vitesseMaxMap[t.nom] = t.vitesseMax || 0;
  });

  // 🟦 Tri par état
  if (mode === "etat") {
    a.sort((x, y) => {
      const ox = orderEtat[x.etat] ?? 99;
      const oy = orderEtat[y.etat] ?? 99;
      if (ox !== oy) return ox - oy;
      return x.id.localeCompare(y.id);
    });
  }

  // 🟦 Tri par ID
  else if (mode === "id") {
    a.sort((x, y) => x.id.localeCompare(y.id));
  }

  // 🟦 Tri par nom
  else if (mode === "nom") {
    a.sort((x, y) => (x.nom || "").localeCompare(y.nom || ""));
  }

  // 🟦 Tri par pays + priorité aux actifs
  else if (mode === "pays") {
    const orderEtat = { en_route: 0, en_gare: 1, en_attente: 2, termine: 3, pas_service: 4, inconnu: 5 };
    a.sort((x, y) => {
      const px = paysMap[x.nom] || "ZZZ"; // ZZZ = fin si non trouvé
      const py = paysMap[y.nom] || "ZZZ";

      if (px !== py) return px.localeCompare(py);

      const ox = orderEtat[x.etat] ?? orderEtat.inconnu;
      const oy = orderEtat[y.etat] ?? orderEtat.inconnu;
      if (ox !== oy) return ox - oy;

      return (x.nom || "").localeCompare(y.nom || "");
    });
  }

  // 🟦 Tri par vitesse (réelle actuelle si dispo)
  else if (mode === "vitesse") {
    a.sort((x, y) => {
      // vitesse réelle envoyée par main.js
      const vx = (x.vitesseActuelle ?? 0);
      const vy = (y.vitesseActuelle ?? 0);

      // 1) priorité à la vitesse réelle décroissante
      if (vx !== vy) return vy - vx;

      // 2) si égalité (souvent 0 = 0), départage par vitesseMax (desc.)
      const mx = vitesseMaxMap[x.nom] || 0;
      const my = vitesseMaxMap[y.nom] || 0;
      if (mx !== my) return my - mx;

      // 3) tie-breakers stables
      return (x.nom || "").localeCompare(y.nom || "");
    });
  }
  // 🟫 Tri par type (Voyageur / FRET)
  else if (mode === "type") {
    a.sort((x, y) => {
      const xfret = isFRET(x) ? 1 : 0;
      const yfret = isFRET(y) ? 1 : 0;

      // 🔹 Met d’abord les voyageurs (0), puis les FRET (1)
      if (xfret !== yfret) return xfret - yfret;

      // 🔹 Second critère : état (pour regrouper les actifs)
      const orderEtat = { en_route: 0, en_gare: 1, en_attente: 2, termine: 3, pas_service: 4, inconnu: 5 };
      const ox = orderEtat[x.etat] ?? orderEtat.inconnu;
      const oy = orderEtat[y.etat] ?? orderEtat.inconnu;
      if (ox !== oy) return ox - oy;

      // 🔹 Dernier critère : nom
      return (x.nom || "").localeCompare(y.nom || "");
    });
  }

  return a;
}


function filtrerSecondaire(data, mode, valeur) {
  if (valeur === "all") return data;

  // 🔹 Filtre par pays
  if (mode === "pays") {
    if (!window.__enginsData?.trains) return data;
    const map = {};
    window.__enginsData.trains.forEach(t => map[t.nom] = t.pays);
    return data.filter(t => map[t.nom] === valeur);
  }

  // 🔹 Filtre par type (FRET / Voyageur)
  if (mode === "type") {
    return data.filter(t => {
      const fret = isFRET(t);
      return (valeur === "fret" && fret) || (valeur === "voyageur" && !fret);
    });
  }

  return data;
}


function etatClass(e) {
  return e === "en_route" ? "etat-en_route"
    : e === "en_gare" ? "etat-en_gare"
      : e === "en_attente" ? "etat-en_attente"
        : e === "termine" ? "etat-termine"
          : e === "pas_service" ? "etat-pas-service"
            : "etat-inconnu";
}

function labelEtat(e) {
  return e === "en_route" ? "En route"
    : e === "en_gare" ? "En gare"
      : e === "en_attente" ? "En attente"
        : e === "termine" ? "Terminé"
          : e === "pas_service" ? "Pas en service"
            : "Inconnu";
}

function renderGrid(data, container) {
  if (!data.length) {
    container.innerHTML = `<p style="color:#888; text-align:center; padding:2rem;">Aucun train disponible</p>`;
    return;
  }

  // 🔹 Récupérer le mode de tri courant
  const currentSort = document.getElementById("tri-flotte")?.value || "";

  // 🔹 Charger infos depuis engins.json si dispo
  const paysMap = {};
  const vitesseMap = {};
  if (window.__enginsData?.trains) {
    window.__enginsData.trains.forEach(t => {
      paysMap[t.nom] = t.pays;
      vitesseMap[t.nom] = t.vitesseMax || 0;
    });
  }

  container.innerHTML = data.map(t => {
    const pays = paysMap[t.nom] || "??";
    const vmax = vitesseMap[t.nom] || null;

    // ✅ badge dynamique selon le mode actif
    let infoBadge = "";
    if (currentSort === "pays") {
      infoBadge = `<span class="info-badge" style="margin-left:6px; color:#777; font-size:0.65em;">(${pays})</span>`;
    }
    else if (currentSort === "type") {
      const fret = isFRET(t);
      infoBadge = `<span class="info-badge"
            style="margin-left:6px; font-size:0.75em; font-weight:600;
                  color:${fret ? '#8B4513' : '#1e3a8a'};">
        ${fret ? '📦 FRET' : '🚆 Voyageur'}</span>`;
    }

    else if (currentSort === "vitesse") {
      const vactu = t.vitesseActuelle || 0;
      infoBadge = `<span class="info-badge" style="margin-left:6px; color:#777; font-size:0.75em;"><br>(${vactu} km/h)</span>`;
    }


    const fret = isFRET(t);
    const styleBorder = `border-bottom: 4px solid ${fret ? '#8B4513' : '#1e3a8a'};`;

    return `
      <div class="flotte-card ${etatClass(t.etat)}"
     style="${styleBorder}"
     data-train-id="${t.id}" 
     data-x="${t.x}" data-y="${t.y}">

        <div class="card-header">
          <span class="card-id">${t.id}${infoBadge}</span>
          <span class="etat-badge ${etatClass(t.etat)}">${labelEtat(t.etat)}</span>
        </div>
        <div class="card-body">
          ${t.imageUrl ? `<img src="${t.imageUrl}" alt="${t.nom || t.id}" class="card-image">` : ''}
          <div class="card-nom">${t.nom || '—'}</div>
          ${t.statut ? `<div class="card-info">📍 ${t.statut}</div>` : ''}
        </div>
      </div>
    `;
  }).join("");

  // 🎯 Click : centrer sur le train
  container.querySelectorAll('.flotte-card').forEach(card => {
    card.addEventListener('click', () => {
      const trainId = card.dataset.trainId;
      const x = parseFloat(card.dataset.x);
      const y = parseFloat(card.dataset.y);
      if (window.__centrerSurTrain) window.__centrerSurTrain(x, y, trainId);
      card.closest('.popup-overlay')?.remove();
    });
  });
}


