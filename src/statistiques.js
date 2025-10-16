import { trainsFR } from './trainsFR.js';
import { trainsDE } from './trainsDE.js';
import { etatTrains } from './etatTrains.js';
import { lignes } from './voies.js';
import { villes } from './gares.js';

export const trains = [...trainsFR, ...trainsDE];

export function afficherStatsReseau() {
  const snapshot = window.__trainRuntime.getSnapshot();
  const total = snapshot.length;
  const actifs = snapshot.filter(t => ["en_route", "en_gare"].includes(t.etat));
  const enRoute = actifs.filter(t => t.etat === "en_route").length;
  const enGare = actifs.filter(t => t.etat === "en_gare").length;
  const attente = snapshot.filter(t => t.etat === "en_attente");
  const pasService = snapshot.filter(t => t.etat === "pas_service");

  // --- section infrastructure ---
  const longueurTotale = lignes.reduce((s, l) => s + (l.longueur || 0), 0);
  const nbElectrifiees = lignes.filter(l => l.electrification && l.electrification !== "diesel").length;
  const pourcentElectrifie = (nbElectrifiees / lignes.length) * 100;

  const nbGares = villes.filter(v => !v.fantome).length;
  const vitMoy = lignes.reduce((s, l) => s + (l.vitesse_max || 0), 0) / lignes.length;

  const lignePlusLongue = lignes.reduce((max, l) => (l.longueur > max.longueur ? l : max), lignes[0]);

  // Comptage signalisation
  const sigCount = {};
  lignes.forEach(l => sigCount[l.signalisation] = (sigCount[l.signalisation] || 0) + 1);


  // === Occupation & passagers ===
  const tauxMoyenActifs = actifs.length
    ? (actifs.reduce((sum, t) => {
      const e = etatTrains.find(x => x.id === t.id);
      return sum + (e ? e.tauxRemplissage : 0);
    }, 0) / actifs.length) * 100
    : 0;

  const passagersActuels = actifs.reduce((sum, t) => {
    const e = etatTrains.find(x => x.id === t.id);
    return sum + (e ? e.occupants.premiere + e.occupants.seconde : 0);
  }, 0);

  // === Répartition 1ʳᵉ / 2ᵉ classe ===
  const sommePrem = actifs.reduce((s, t) => {
    const e = etatTrains.find(x => x.id === t.id);
    return s + (e ? e.occupants.premiere : 0);
  }, 0);
  const sommeSec = actifs.reduce((s, t) => {
    const e = etatTrains.find(x => x.id === t.id);
    return s + (e ? e.occupants.seconde : 0);
  }, 0);

  const ratioPrem = sommePrem + sommeSec > 0 ? (sommePrem / (sommePrem + sommeSec)) * 100 : 0;

  // === Top 3 trains les plus remplis ===
  const etatsActifs = etatTrains.filter(e => actifs.some(a => a.id === e.id));
  const topPleins = [...etatsActifs].sort((a, b) => b.tauxRemplissage - a.tauxRemplissage).slice(0, 3);
  const topVides = [...etatsActifs].sort((a, b) => a.tauxRemplissage - b.tauxRemplissage).slice(0, 3);

  // === Répartition par type de train ===
  const types = {};
  trains.forEach(t => {
    const type = t.nom.split(" ")[0]; // ex: "TGV", "TER", "BR", "Regiolis"
    types[type] = (types[type] || 0) + 1;
  });

  // === Indice de saturation du réseau ===
  const indiceSaturation = total > 0 ? (actifs.length / total) * 100 : 0;

  // === Construction HTML ===
  const html = `
  <div class="stats-container">
    <h2>📊 Statistiques réseau</h2>
    <div class="stats-grid">
      <div>
        <ul>
          <li><b>Trains totaux :</b> ${total}</li>
          <li><b>Trains actifs :</b> ${actifs.length}</li>
          <li><b>En circulation :</b> ${enRoute}</li>
          <li><b>En gare :</b> ${enGare}</li>
          <li><b>En attente :</b> ${attente.length}</li>
          <li><b>Pas en service :</b> ${pasService.length}</li>
        </ul>
      </div>
      <div>
        <ul>
          <li><b>Occupation moyenne (actifs) :</b> ${tauxMoyenActifs.toFixed(1)} %</li>
          <li><b>Passagers à bord :</b> ${passagersActuels.toLocaleString('fr-FR')}</li>
          <li><b>1ʳᵉ classe :</b> ${sommePrem.toLocaleString('fr-FR')} (${ratioPrem.toFixed(1)} %)</li>
          <li><b>2ᵉ classe :</b> ${sommeSec.toLocaleString('fr-FR')} (${(100 - ratioPrem).toFixed(1)} %)</li>
          <li><b>Indice de saturation :</b> ${indiceSaturation.toFixed(1)} %</li>
        </ul>
      </div>
    </div>

    <h3>🚆 Top 3 trains les plus remplis</h3>
    <ol>
      ${topPleins.map(e => `<li>${e.id} — ${(e.tauxRemplissage * 100).toFixed(1)}%</li>`).join("")}
    </ol>

    <h3>🟢 Top 3 trains les plus vides</h3>
    <ol>
      ${topVides.map(e => `<li>${e.id} — ${(e.tauxRemplissage * 100).toFixed(1)}%</li>`).join("")}
    </ol>

    <h3>📂 Répartition par type de train</h3>
    <ul>
      ${Object.entries(types).map(([k, v]) => `<li>${k} : ${v}</li>`).join("")}
    </ul>
    <h3>🛤️ Infrastructures</h3>
    <ul>
      <li><b>Longueur totale :</b> ${longueurTotale.toFixed(1)} km</li>
      <li><b>Part électrifiée :</b> ${pourcentElectrifie.toFixed(1)} %</li>
      <li><b>Nombre de gares :</b> ${nbGares}</li>
      <li><b>Vitesse moyenne max :</b> ${vitMoy.toFixed(0)} km/h</li>
      <li><b>Ligne la plus longue :</b> ${lignePlusLongue.gareA} → ${lignePlusLongue.gareB} (${lignePlusLongue.longueur} km)</li>
    </ul>

    <h4>🚦 Signalisation</h4>
    <ul>
      ${Object.entries(sigCount).map(([k, v]) => `<li>${k} : ${v}</li>`).join("")}
    </ul>

  </div>
  `;

  // === Popup (identique au style des autres) ===
  const overlay = document.createElement("div");
  overlay.className = "popup-overlay";
  overlay.innerHTML = `
    <div class="popup-window">
      <button class="popup-close">✖</button>
      ${html}
    </div>
  `;
  document.body.appendChild(overlay);
  overlay.querySelector(".popup-close").addEventListener("click", () => overlay.remove());
}
