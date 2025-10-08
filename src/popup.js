import { trains } from "./trains.js";

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
function showMiniPopup(e, trajet, type) {
  hideMiniPopup();

  const tooltip = document.createElement("div");
  tooltip.className = "mini-popup";
  tooltip.innerHTML = `
    <h5>${trajet.nom}</h5>
    <ul>
      ${trajet.dessertes.map((d, i) => {
        const heureFinale = (i < trajet.dessertes.length - 1)
          ? addMinutesToTime(d.heure, d.arret || 0)  // départs = heure + arrêt
          : d.heure;                                  // dernier arrêt = heure d'arrivée
        return `<li>${heureFinale} — ${d.gare}</li>`;
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

  const html = train.trajets.map(trajet => `
    <div class="trajet-bloc">
      <h3>${trajet.nom}</h3>
      <ul>
        ${trajet.dessertes.map((d, i) => {
          const heure = (i < trajet.dessertes.length - 1)
            ? addMinutesToTime(d.heure, d.arret || 0)
            : d.heure;
          return `<li><span class="heure">${heure}</span> — <span class="gare">${d.gare}</span></li>`;
        }).join("")}
      </ul>
    </div>
  `).join("");

  ouvrirPopup(`🚅 Trajets prévus — ${train.id}`, html);
}

/** Fiche horaire d’une gare (liste synthétique + mini-popup au survol) */
export function afficherFicheHoraire(gareNom) {
  const departs = [];
  const arrivees = [];

  trains.forEach(train => {
    train.trajets.forEach((trajet, idxTrajet) => {
      trajet.dessertes.forEach((d, i, arr) => {
        if (d.gare !== gareNom) return;

        if (i < arr.length - 1) {
          // Départ depuis cette gare : heure = heure + arrêt
          departs.push({
            trainId: train.id,
            train,
            trajet,
            idxTrajet,
            heure: addMinutesToTime(d.heure, d.arret || 0),
            destination: arr[arr.length - 1].gare
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
            provenance: arr[0].gare
          });
        }
      });
    });
  });

  departs.sort((a,b)=>a.heure.localeCompare(b.heure));
  arrivees.sort((a,b)=>a.heure.localeCompare(b.heure));

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
      if (trajet) showMiniPopup(e, trajet, type);
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
  const orderEtat = { en_route: 0, en_gare: 1, termine: 2 };
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
       : e === "en_gare"  ? "etat-en_gare"
       : e === "termine"  ? "etat-termine"
       : "etat-inconnu";
}

function labelEtat(e) {
  return e === "en_route" ? "En route"
       : e === "en_gare"  ? "En gare"
       : e === "termine"  ? "Terminé"
       : "Inconnu";
}

function renderGrid(data, container) {
  if (!data.length) {
    container.innerHTML = `<p style="color:#888; text-align:center; padding:2rem;">Aucun train disponible</p>`;
    return;
  }

  container.innerHTML = data.map(t => `
    <div class="flotte-card ${etatClass(t.etat)}">
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
}

