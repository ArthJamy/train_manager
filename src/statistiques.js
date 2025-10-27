import { trainsFR } from './trains/trainsFR.js';
import { trainsDE } from './trains/trainsDE.js';
import { trainsCH } from './trains/trainsCH.js';
import { trainsBNL } from './trains/trainsBNL.js';
import { trainsIT } from './trains/trainsIT.js';
import { trainsFRET } from './trains/trainsFRET.js';

import { etatTrains } from './etatTrains.js';
import { lignes } from './voies.js';
import { villes } from './gares.js';

export const trains = [...trainsFR, ...trainsDE, ...trainsCH, ...trainsBNL, ...trainsIT, ...trainsFRET];

function timeToMinutes(horaire) {
  if (!horaire) return 0;
  const match = horaire.match(/(\d{1,2})[:h](\d{2})/);
  if (!match) return 0;
  const [, h, m] = match;
  return parseInt(h) * 60 + parseInt(m);
}


export function afficherStatsReseau() {
  const snapshot = window.__trainRuntime.getSnapshot();
  const total = snapshot.length;
  const actifs = snapshot.filter(t => ["en_route", "en_gare"].includes(t.etat));
  const enRoute = actifs.filter(t => t.etat === "en_route").length;
  const enGare = actifs.filter(t => t.etat === "en_gare").length;
  const attente = snapshot.filter(t => t.etat === "en_attente");
  const pasService = snapshot.filter(t => t.etat === "pas_service");

  // === Détection FRET ===
  const isFRET = t => ('tonnage' in t) && !('capacite' in t);
  const trainsFret = trains.filter(isFRET);
  const nbFret = trainsFret.length;
  const chargeTotale = trainsFret.reduce((sum, t) => sum + (t.tonnage || 0), 0);
  const pourcentFret = total > 0 ? (nbFret / total) * 100 : 0;
  const lignesFret = lignes.filter(l => l.type === "FRET");
  const longueurFret = lignesFret.reduce((s, l) => s + (l.longueur || 0), 0);

  // === INFRASTRUCTURE ===
  const longueurTotale = lignes.reduce((s, l) => s + (l.longueur || 0), 0);
  const nbElectrifiees = lignes.filter(l => l.electrification && l.electrification !== "diesel").length;
  const pourcentElectrifie = (nbElectrifiees / lignes.length) * 100;
  const nbGares = villes.filter(v => !v.fantome).length;
  const vitMoy = lignes.reduce((s, l) => s + (l.vitesse_max || 0), 0) / lignes.length;
  const lignePlusLongue = lignes.reduce((max, l) => (l.longueur > max.longueur ? l : max), lignes[0]);

  // Comptage signalisation
  const sigCount = {};
  lignes.forEach(l => sigCount[l.signalisation] = (sigCount[l.signalisation] || 0) + 1);

  // === PASSAGERS ===
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

  const sommePrem = actifs.reduce((s, t) => {
    const e = etatTrains.find(x => x.id === t.id);
    return s + (e ? e.occupants.premiere : 0);
  }, 0);
  const sommeSec = actifs.reduce((s, t) => {
    const e = etatTrains.find(x => x.id === t.id);
    return s + (e ? e.occupants.seconde : 0);
  }, 0);
  const ratioPrem = sommePrem + sommeSec > 0 ? (sommePrem / (sommePrem + sommeSec)) * 100 : 0;

  // === TOP TRAINS ===
  const etatsActifs = etatTrains.filter(e => actifs.some(a => a.id === e.id));
  const topPleins = [...etatsActifs].sort((a, b) => b.tauxRemplissage - a.tauxRemplissage).slice(0, 5);
  const topVides = [...etatsActifs].sort((a, b) => a.tauxRemplissage - b.tauxRemplissage).slice(0, 5);

  // === RÉPARTITION PAR TYPE (corrigé) ===
  const types = {};
  trains.forEach(t => {
    if (isFRET(t)) {
      types["FRET"] = (types["FRET"] || 0) + 1;
    } else {
      const prefix = t.nom.split(" ")[0];
      types[prefix] = (types[prefix] || 0) + 1;
    }
  });

  const indiceSaturation = total > 0 ? (actifs.length / total) * 100 : 0;

  // === RÉPARTITION ÉNERGÉTIQUE (corrigé pour éviter les doublons) ===
  const modesCount = {};
  trains.forEach(t => {
    const uniqueMoteurs = [...new Set(t.moteurs)];
    uniqueMoteurs.forEach(m => modesCount[m] = (modesCount[m] || 0) + 1);
  });

  // === RÉPARTITION PAR PAYS ===
  const statsPays = {
    France: trainsFR.length,
    Allemagne: trainsDE.length,
    Suisse: trainsCH.length,
    BeNeLux: trainsBNL.length,
    Italie: trainsIT.length,
    FRET: trainsFRET.length
  };

  // === ROTATIONS ===
  const moyRotations = trains.reduce((s, t) => s + (t.trajets?.length || 0), 0) / trains.length;

  // === TOP GARES ===
  const compteurGares = {};
  trains.forEach(t => t.trajets.forEach(tr => tr.dessertes.forEach(d => {
    compteurGares[d.gare] = (compteurGares[d.gare] || 0) + 1;
  })));
  const topGares = Object.entries(compteurGares).sort((a, b) => b[1] - a[1]).slice(0, 5);

  // === COMPLEXITÉ ===
  const complexite = (lignes.length * nbGares * Object.keys(sigCount).length) / 10000;

  // === DURÉE MOYENNE TRAJET (corrigé) ===
  let totalDurees = 0;
  let nbTrajets = 0;
  trains.forEach(t => {
    t.trajets.forEach(tr => {
      const dess = tr.dessertes;
      if (dess.length < 2) return;
      const debut = dess[0].heure.split(":").reduce((h, m) => h * 60 + parseInt(m), 0);
      const fin = dess[dess.length - 1].heure.split(":").reduce((h, m) => h * 60 + parseInt(m), 0);
      totalDurees += (fin - debut);
      nbTrajets++;
    });
  });
  const dureeMoyenneTrajet = nbTrajets > 0 ? totalDurees / nbTrajets : 0;

  // === SATURATION MOYENNE DU RÉSEAU ===
  let totalTrainsSurLignes = 0;
  let totalCapacites = 0;

  const heureCourante = document.getElementById("heure")?.value || "08:00";
  const tNow = timeToMinutes(heureCourante);

  lignes.forEach(l => {
    const g1 = villes.find(v => v.nom === l.gareA);
    const g2 = villes.find(v => v.nom === l.gareB);
    if (!g1 || !g2) return;

    const distance = Math.sqrt((g2.x - g1.x) ** 2 + (g2.y - g1.y) ** 2);
    const distanceRef = 120;
    const facteurLongueur = Math.max(0.5, Math.sqrt(distance / distanceRef));

    let trainsSurLigne = 0;
    trains.forEach(train => {
      train.trajets.forEach(trajet => {
        const dess = trajet.dessertes;
        for (let i = 0; i < dess.length - 1; i++) {
          const gA = dess[i].gare;
          const gB = dess[i + 1].gare;
          if ((gA === l.gareA && gB === l.gareB) || (gA === l.gareB && gB === l.gareA)) {
            const tA = timeToMinutes(dess[i].heure);
            const tB = timeToMinutes(dess[i + 1].heure);
            if (tNow >= tA && tNow <= tB) {
              trainsSurLigne++;
              break;
            }
          }
        }
      });
    });

    const tolerances = { "ETCS": 3, "LZB": 4, "PZB": 5, "KVB": 6, "BAL": 5, "BAPR": 8, "TVM": 2, "inconnue": 10 };
    const intervalle = tolerances[l.signalisation] || tolerances["inconnue"];
    const trainsParHeureTotal = (60 / intervalle) * 2;
    const capEffective = trainsParHeureTotal * 0.1 * facteurLongueur;

    totalTrainsSurLignes += trainsSurLigne;
    totalCapacites += capEffective;
  });

  const saturationMoyenne = totalCapacites > 0 ? (totalTrainsSurLignes / totalCapacites) * 100 : 0;

  // === CONSTRUCTION HTML (Dashboard moderne) ===
  const html = `
  <div class="stats-dashboard">
    <h2 style="text-align:center; margin-bottom:24px; font-size:28px; color:#1e3a8a;">
      📊 Tableau de bord du réseau
    </h2>

    <!-- KPIs principaux -->
    <div class="kpi-grid">
      <div class="kpi-card">
        <div class="kpi-icon">🚆</div>
        <div class="kpi-value">${actifs.length}</div>
        <div class="kpi-label">Trains actifs</div>
        <div class="kpi-sub">${enRoute} en circulation • ${enGare} en gare</div>
      </div>
      
      <div class="kpi-card">
        <div class="kpi-icon">👥</div>
        <div class="kpi-value">${passagersActuels.toLocaleString('fr-FR')}</div>
        <div class="kpi-label">Passagers à bord</div>
        <div class="kpi-sub">Taux moyen : ${tauxMoyenActifs.toFixed(1)}%</div>
      </div>
      
      <div class="kpi-card">
        <div class="kpi-icon">🛤️</div>
        <div class="kpi-value">${longueurTotale.toFixed(0)} km</div>
        <div class="kpi-label">Réseau total</div>
        <div class="kpi-sub">${nbGares} gares • ${lignes.length} lignes</div>
      </div>
      
      <div class="kpi-card">
        <div class="kpi-icon">📈</div>
        <div class="kpi-value">${saturationMoyenne.toFixed(2)}%</div>
        <div class="kpi-label">Saturation réseau</div>
        <div class="kpi-sub">Capacité moyenne actuelle</div>
      </div>
    </div>

    <!-- Sections détaillées -->
    <div class="stats-sections">
      
      <!-- Section Flotte -->
      <div class="stats-section">
        <h3>🚂 État de la flotte</h3>
        <div class="stat-row">
          <span>Trains totaux</span>
          <span class="stat-value">${total}</span>
        </div>
        <div class="stat-row">
          <span>En attente</span>
          <span class="stat-value">${attente.length}</span>
        </div>
        <div class="stat-row">
          <span>Pas en service</span>
          <span class="stat-value">${pasService.length}</span>
        </div>
        <div class="stat-row">
          <span>Indice de saturation</span>
          <span class="stat-value">${indiceSaturation.toFixed(1)}%</span>
        </div>
      </div>

      <!-- Section Passagers -->
      <div class="stats-section">
        <h3>👥 Répartition passagers</h3>
        <div class="stat-row">
          <span>1ère classe</span>
          <span class="stat-value">${sommePrem.toLocaleString('fr-FR')} (${ratioPrem.toFixed(1)}%)</span>
        </div>
        <div class="stat-row">
          <span>2ème classe</span>
          <span class="stat-value">${sommeSec.toLocaleString('fr-FR')} (${(100 - ratioPrem).toFixed(1)}%)</span>
        </div>
        <div class="stat-row highlight">
          <span>Total à bord</span>
          <span class="stat-value">${passagersActuels.toLocaleString('fr-FR')}</span>
        </div>
      </div>

      <!-- Section FRET -->
      <div class="stats-section fret">
        <h3 style="color:#8B4513;">📦 Activité FRET</h3>
        <div class="stat-row">
          <span>Trains FRET</span>
          <span class="stat-value">${nbFret}</span>
        </div>
        <div class="stat-row">
          <span>Charge transportée</span>
          <span class="stat-value">${chargeTotale.toLocaleString('fr-FR')} t</span>
        </div>
        <div class="stat-row">
          <span>Part du réseau</span>
          <span class="stat-value">${pourcentFret.toFixed(1)}%</span>
        </div>
        <div class="stat-row">
          <span>Lignes FRET</span>
          <span class="stat-value">${longueurFret.toFixed(1)} km</span>
        </div>
      </div>

      <!-- Section Infrastructure -->
      <div class="stats-section">
        <h3>🛤️ Infrastructure</h3>
        <div class="stat-row">
          <span>Électrification</span>
          <span class="stat-value">${pourcentElectrifie.toFixed(1)}%</span>
        </div>
        <div class="stat-row">
          <span>Vitesse moyenne max</span>
          <span class="stat-value">${vitMoy.toFixed(0)} km/h</span>
        </div>
        <div class="stat-row">
          <span>Ligne la plus longue</span>
          <span class="stat-value">${lignePlusLongue.longueur} km</span>
        </div>
        <div class="stat-row small">
          <span>${lignePlusLongue.gareA} → ${lignePlusLongue.gareB}</span>
        </div>
      </div>

      <!-- Section Types de trains -->
      <div class="stats-section">
        <h3>🚆 Types de trains</h3>
        <div class="scrollable-list">
          ${Object.entries(types).sort((a, b) => b[1] - a[1]).map(([k, v]) => `
            <div class="stat-row">
              <span>${k}</span>
              <span class="stat-value">${v}&nbsp</span>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- Section Signalisation -->
      <div class="stats-section">
        <h3>🚦 Signalisation</h3>
        <div class="scrollable-list">
          ${Object.entries(sigCount).sort((a, b) => b[1] - a[1]).map(([k, v]) => `
            <div class="stat-row">
              <span>${k}</span>
              <span class="stat-value">${v} lignes</span>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- Section Énergie -->
      <div class="stats-section">
        <h3>⚡ Motorisations</h3>
        ${Object.entries(modesCount).sort((a, b) => b[1] - a[1]).map(([m, n]) => `
          <div class="stat-row">
            <span>${m}</span>
            <span class="stat-value">${n} trains</span>
          </div>
        `).join("")}
      </div>

      <!-- Section Pays -->
      <div class="stats-section">
        <h3>🌍 Répartition par pays</h3>
        ${Object.entries(statsPays).map(([p, n]) => `
          <div class="stat-row">
            <span>${p}</span>
            <span class="stat-value">${n}</span>
          </div>
        `).join("")}
      </div>

      <!-- Section Top Gares -->
      <div class="stats-section">
        <h3>🏙️ Top 5 gares</h3>
        ${topGares.map(([g, n], i) => `
          <div class="stat-row">
            <span>${i + 1}. ${g}</span>
            <span class="stat-value">${n} passages</span>
          </div>
        `).join("")}
      </div>

      <!-- Section Indicateurs -->
      <div class="stats-section">
        <h3>📊 Indicateurs</h3>
        <div class="stat-row">
          <span>Rotations moyennes</span>
          <span class="stat-value">${moyRotations.toFixed(1)} trajets/train</span>
        </div>
        <div class="stat-row">
          <span>Durée moyenne trajet</span>
          <span class="stat-value">${Math.round(dureeMoyenneTrajet)} min</span>
        </div>
        <div class="stat-row">
          <span>Indice complexité</span>
          <span class="stat-value">${complexite.toFixed(1)}</span>
        </div>
      </div>

      <!-- Section Top Trains -->
      <div class="stats-section highlight-section">
        <h3>🏆 Top 5 trains pleins</h3>
        ${topPleins.map((e, i) => `
          <div class="stat-row">
            <span>${i + 1}. ${e.id}</span>
            <span class="stat-value" style="color:#e74c3c;">${(e.tauxRemplissage * 100).toFixed(1)}%</span>
          </div>
        `).join("")}
      </div>

      <div class="stats-section highlight-section">
        <h3>🟢 Top 5 trains vides</h3>
        ${topVides.map((e, i) => `
          <div class="stat-row">
            <span>${i + 1}. ${e.id}</span>
            <span class="stat-value" style="color:#2ecc71;">${(e.tauxRemplissage * 100).toFixed(1)}%</span>
          </div>
        `).join("")}
      </div>

    </div>
  </div>
  `;

  // === Styles CSS intégrés ===
  const styles = `
    <style>
      .stats-dashboard {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        max-width: 1400px;
        margin: 0 auto;
        padding: 20px;
        background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        border-radius: 12px;
      }

      .kpi-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
        margin-bottom: 32px;
      }

      .kpi-card {
        background: white;
        padding: 24px;
        border-radius: 12px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        text-align: center;
        transition: transform 0.2s, box-shadow 0.2s;
      }

      .kpi-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 12px rgba(0,0,0,0.15);
      }

      .kpi-icon {
        font-size: 42px;
        margin-bottom: 12px;
      }

      .kpi-value {
        font-size: 36px;
        font-weight: bold;
        color: #1e3a8a;
        margin: 8px 0;
      }

      .kpi-label {
        font-size: 14px;
        color: #6b7280;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .kpi-sub {
        font-size: 12px;
        color: #9ca3af;
        margin-top: 8px;
      }

      .stats-sections {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 20px;
      }

      .stats-section {
        background: white;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.08);
      }

      .stats-section.fret {
        background: linear-gradient(135deg, #fff5eb 0%, #ffe9d6 100%);
      }

      .stats-section.highlight-section {
        background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
      }

      .stats-section h3 {
        margin: 0 0 16px 0;
        font-size: 18px;
        color: #1e3a8a;
        border-bottom: 2px solid #e5e7eb;
        padding-bottom: 8px;
      }

      .stat-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0;
        border-bottom: 1px solid #f3f4f6;
      }

      .stat-row:last-child {
        border-bottom: none;
      }

      .stat-row.highlight {
        background: #fef3c7;
        padding: 12px;
        border-radius: 6px;
        font-weight: 600;
      }

      .stat-row.small {
        font-size: 12px;
        color: #6b7280;
        padding: 4px 0;
      }

      .stat-row span:first-child {
        color: #374151;
      }

      .stat-value {
        font-weight: 600;
        color: #1e3a8a;
      }

      .scrollable-list {
        max-height: 200px;
        overflow-y: auto;
      }

      .scrollable-list::-webkit-scrollbar {
        width: 6px;
      }

      .scrollable-list::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 10px;
      }

      .scrollable-list::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 10px;
      }

      .scrollable-list::-webkit-scrollbar-thumb:hover {
        background: #555;
      }

      @media (max-width: 768px) {
        .kpi-grid {
          grid-template-columns: 1fr;
        }
        
        .stats-sections {
          grid-template-columns: 1fr;
        }
        
        .kpi-value {
          font-size: 28px;
        }
      }
    </style>
  `;

  // === Popup ===
  const overlay = document.createElement("div");
  overlay.className = "popup-overlay";
  overlay.innerHTML = `
    ${styles}
    <div class="popup-window" style="max-width: 95vw; max-height: 90vh; overflow-y: auto;">
      <button class="popup-close">✖</button>
      ${html}
    </div>
  `;
  document.body.appendChild(overlay);
  overlay.querySelector(".popup-close").addEventListener("click", () => overlay.remove());
}
