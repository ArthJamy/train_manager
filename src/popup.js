import { trainsFR } from './trains/trainsFR.js';
import { trainsDE } from './trains/trainsDE.js';
import { trainsCH } from './trains/trainsCH.js';
export const trains = [...trainsFR, ...trainsDE, ...trainsCH];


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

  const html = `
    <div class="trajets-container">
      ${train.trajets.map(trajet => {
    // 🔹 Extraire tous les jours valides présents dans le trajet
    const joursSets = new Set();
    trajet.dessertes.forEach(d => {
      const joursValides = d.jours || ["Tous"];
      joursValides.forEach(j => joursSets.add(j));
    });
    const joursTexte = Array.from(joursSets).join(", ");

    return `
          <div class="trajet-bloc">
            <h3>${trajet.nom}</h3>
            <p class="jours-valables">Jour(s) valable(s) : ${joursTexte}</p>
            <ul>
              ${trajet.dessertes.map((d, i) => {
      const heure = (i < trajet.dessertes.length - 1)
        ? addMinutesToTime(d.heure, d.arret || 0)
        : d.heure;
      return `<li><span class="heure">${heure}</span> . > <span class="gare">${d.gare}</span></li>`;
    }).join("")}
            </ul>
          </div>
        `;
  }).join("")}
    </div>
  `;

  ouvrirPopup(`🚅 Trajets prévus — ${train.id}`, html);
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
    <div class="flotte-toolbar">
      <label for="tri-flotte">Trier par :</label>
      <select id="tri-flotte">
        <option value="etat">État du train</option>
        <option value="id">ID</option>
        <option value="nom">Nom</option>
      </select>
    </div>

    <div id="flotte-grid" class="flotte-grid"></div>
  `;

  ouvrirPopup("🚆 Flotte complète", contenu);

  // Récupère l'instantané runtime depuis main.js
  let data = getSnapshotFlotte();
  const grid = document.getElementById("flotte-grid");
  const selTri = document.getElementById("tri-flotte");

  // Tri par défaut : état
  data = sortFlotte(data, "etat");
  renderGrid(data, grid);

  selTri.addEventListener("change", () => {
    data = sortFlotte(data, selTri.value);
    renderGrid(data, grid);
  });
}

function getSnapshotFlotte() {
  if (window.__trainRuntime?.getSnapshot) return window.__trainRuntime.getSnapshot();
  console.warn("[Flotte] Provider runtime manquant. Retourne []");
  return [];
}

function sortFlotte(arr, mode) {
  const orderEtat = { en_route: 0, en_gare: 1, en_attente: 2, termine: 3, pas_service: 4 };
  const a = [...arr];
  if (mode === "etat") {
    a.sort((x, y) => {
      const ox = orderEtat[x.etat] ?? 99;
      const oy = orderEtat[y.etat] ?? 99;
      if (ox !== oy) return ox - oy;
      return x.id.localeCompare(y.id);
    });
  } else if (mode === "id") {
    a.sort((x, y) => x.id.localeCompare(y.id));
  } else if (mode === "nom") {
    a.sort((x, y) => (x.nom || "").localeCompare(y.nom || ""));
  }
  return a;
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

  container.innerHTML = data.map(t => `
    <div class="flotte-card ${etatClass(t.etat)}" data-train-id="${t.id}" data-x="${t.x}" data-y="${t.y}">
      <div class="card-header">
        <span class="card-id">${t.id}</span>
        <span class="etat-badge ${etatClass(t.etat)}">${labelEtat(t.etat)}</span>
      </div>
      <div class="card-body">
        ${t.imageUrl ? `<img src="${t.imageUrl}" alt="${t.nom || t.id}" class="card-image">` : ''}
        <div class="card-nom">${t.nom || '—'}</div>
        ${t.statut ? `<div class="card-info">📍 ${t.statut}</div>` : ''}
      </div>
    </div>
  `).join("");

  // Ajouter les événements click sur chaque carte
  container.querySelectorAll('.flotte-card').forEach(card => {
    card.addEventListener('click', () => {
      const trainId = card.dataset.trainId;
      const x = parseFloat(card.dataset.x);
      const y = parseFloat(card.dataset.y);

      // Appeler la fonction globale pour centrer la carte
      if (window.__centrerSurTrain) {
        window.__centrerSurTrain(x, y, trainId);
      }

      // Fermer la popup
      card.closest('.popup-overlay')?.remove();
    });
  });
}

