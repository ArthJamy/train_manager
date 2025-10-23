// creationTrains.js
import { villes } from './gares.js';
import { lignes } from './voies.js';
import { trainsFR as baseFR } from './trains/trainsFR.js';
import { trainsDE as baseDE } from './trains/trainsDE.js';
import { trainsCH as baseCH } from './trains/trainsCH.js';
import { trainsFRET as baseFRET } from './trains/trainsFRET.js';


/* ============================================================
 * ÉTAT LOCAL
 * ============================================================ */
const state = {
  engins: { trains: [], wagons: [] },
  trainsFR: structuredClone(baseFR),
  trainsDE: structuredClone(baseDE),
  trainsCH: structuredClone(baseCH),
  trainsFRET: structuredClone(baseFRET),
  current: {
    pays: 'FR',
    id: '',
    nom: '',
    engin: null,
    composition: [], // tableau de noms
    vmax: 0,
    capacite: { premiere: 0, seconde: 0 },
    trajets: [],               // [{nom, desserte:[{gare, arret, heure, jours?}], ...}]
    trajetIndex: -1            // index du trajet en cours d'édition
  },
  editingExistingId: null,     // si on a chargé un train existant (pour remplacement)
  defaultArretMin: 1,
  retourBufferMin: 30,         // +30 min
  suggestionRadius: 1          // rayon de suggestion (1=direct, 2=+1 saut, etc.)
};

/* ============================================================
 * HELPERS: DOM
 * ============================================================ */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

function toast(msg, kind = 'info', timeout = 2500) {
  // Crée le conteneur s'il n'existe pas
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  if (kind === 'warn') t.style.background = '#f39c12';
  if (kind === 'err') t.style.background = '#e74c3c';
  if (kind === 'ok') t.style.background = '#2ecc71';

  // Ajoute le toast au conteneur
  container.appendChild(t);

  //document.body.appendChild(t);
  setTimeout(() => t.remove(), timeout);
}

// === Couleurs dynamiques (identiques au catalogueEngins) ===
function getSpeedColor(vitesse) {
  if (!vitesse) return "white";
  const min = 60, max = 320; // échelle
  const ratio = Math.min(1, Math.max(0, (vitesse - min) / (max - min)));
  const r = Math.round(255 * ratio);
  const g = Math.round(200 * (1 - ratio));
  const b = Math.round(255 * (1 - ratio));
  return `rgba(${r}, ${g}, ${b}, 0.2)`; // couleur douce
}

function getAlimGradient(moteurs = []) {
  const colors = {
    "25kV": "rgba(255, 120, 120, 0.5)",   // rouge clair
    "15kV": "rgba(130, 220, 130, 0.5)",   // vert
    "1.5kV": "rgba(120, 170, 255, 0.5)",  // bleu
    "diesel": "rgba(210, 210, 210, 0.5)"  // gris
  };

  const valid = Object.keys(colors).filter(k =>
    moteurs.some(m => m.includes(k))
  );

  if (valid.length === 0) return "rgb(240,240,240)";
  if (valid.length === 1) return colors[valid[0]];

  const stops = valid.map((k, i) => `${colors[k]} ${(i / (valid.length - 1)) * 100}%`);
  return `linear-gradient(90deg, ${stops.join(", ")})`;
}

/* ============================================================
 * HELPERS: TEMPS & DISTANCES
 * ============================================================ */
function timeToMinutes(hhmm) {
  if (!hhmm) return 0;
  const [h, m] = hhmm.split(':').map(Number);
  return (h || 0) * 60 + (m || 0);
}
function minutesToTime(mins) {
  mins = Math.max(0, Math.round(mins));
  const h = Math.floor(mins / 60) % 24;
  const m = mins % 60;
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}
function dist(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y); // pixels "réseau" (unité arbitraire)
}
function getGare(nom) {
  return villes.find(v => v.nom === nom && !v.fantome);
}
// Version "any": retourne la gare même si fantôme
function getGareAny(nom) {
  return villes.find(v => v.nom === nom); // pas de filtre fantome
}


/* ============================================================
 * GRAPH: connexions & chemin
 * ============================================================ */
const graph = {};
(function buildGraph() {
  lignes.forEach(l => {
    if (!graph[l.gareA]) graph[l.gareA] = [];
    if (!graph[l.gareB]) graph[l.gareB] = [];
    graph[l.gareA].push(l.gareB);
    graph[l.gareB].push(l.gareA);
  });
})();

// Index rapide des lignes par paire de gares
const lineByKey = new Map();
function lineKey(a, b) { return a < b ? `${a}__${b}` : `${b}__${a}`; }

(function indexLines() {
  lignes.forEach(l => {
    lineByKey.set(lineKey(l.gareA, l.gareB), l);
  });
})();

function segmentDistanceKm(gareNomA, gareNomB) {
  const k = lineKey(gareNomA, gareNomB);
  const l = lineByKey.get(k);
  if (l?.longueur) return l.longueur;

  console.error(`[ERREUR] Aucune ligne trouvée entre ${gareNomA} et ${gareNomB}`);
  return null;
}

function trouverCheminEntreGares(gareA, gareB) {
  const queue = [[gareA]];
  const visited = new Set([gareA]);

  while (queue.length > 0) {
    const path = queue.shift();
    const last = path[path.length - 1];
    if (last === gareB) return path;

    for (const voisin of graph[last] || []) {
      if (visited.has(voisin)) continue;
      visited.add(voisin);

      const g = getGareAny(voisin);
      if (!g) continue;

      // ⚙️ On ne "compte" pas les gares fantômes : elles ne pénalisent pas le chemin
      // On les traverse librement mais on garde la continuité du chemin
      if (g.fantome) {
        // exploration directe derrière la gare fantôme
        for (const next of graph[voisin] || []) {
          if (!visited.has(next)) {
            queue.push([...path, voisin, next]);
          }
        }
      } else {
        queue.push([...path, voisin]);
      }
    }
  }

  return [gareA, gareB];
}



/**
 * Renvoie les premières gares réelles atteignables depuis une gare source,
 * en traversant librement les gares fantômes.
 * Les paramètres de filtrage et de recherche proviennent de l'état global.
 * 
 * @param {string} gareSource
 * @param {number} maxSuggestions  nb max de gares à retourner (facultatif)
 * @param {number} maxDepth        profondeur max de recherche (facultatif)
 */
function suggestionsDepuis(gareSource, maxSuggestions, maxDepth) {
  const maxSugg = maxSuggestions ?? (state.suggestionMax || 10);
  const depthMax = maxDepth ?? (state.suggestionRadius || 1);
  const filtreType = state.filtreTypeGare || "all";

  function sortByTypePriority(noms) {
    const prio = { petite: 0, moyenne: 1, grande: 2, vaste: 3 };
    return noms.sort((a, b) => {
      const ga = getGareAny(a), gb = getGareAny(b);
      return (prio[ga?.type] ?? 99) - (prio[gb?.type] ?? 99);
    });
  }

  const results = new Set();
  const visited = new Set([gareSource]);
  const queue = [[gareSource, 0]];

  while (queue.length && results.size < maxSugg) {
    const [current, depth] = queue.shift();
    if (depth > depthMax) continue;

    const voisins = graph[current] || [];
    for (const v of voisins) {
      if (visited.has(v)) continue;
      visited.add(v);

      const g = getGareAny(v);
      if (!g) continue;

      // 🟩 Calcul de la profondeur :
      // on n’incrémente que si la gare n’est PAS fantôme
      const nextDepth = g.fantome ? depth : depth + 1;

      if (nextDepth <= depthMax) {
        queue.push([v, nextDepth]);
      }

      // 🟨 Ajout aux résultats uniquement si gare réelle et type OK
      if (!g.fantome) {
        // 🧩 Filtre hiérarchique : inclut les types supérieurs au seuil choisi
        let typeOK = false;

        if (filtreType === "all") {
          typeOK = true;
        } else {
          const ordre = ["petite", "moyenne", "grande", "vaste"];
          const idxFiltre = ordre.indexOf(filtreType);
          const idxGare = ordre.indexOf(g.type);

          // ✅ Vérifie que les deux types sont valides ET que la gare est >= au seuil
          typeOK = idxFiltre !== -1 && idxGare !== -1 && idxGare >= idxFiltre;
        }

        if (typeOK) {
          results.add(v);
          if (results.size >= maxSugg) break;
        }
      }

    }
  }

  return sortByTypePriority(Array.from(results)).slice(0, maxSugg);
}



/* ============================================================
 * CHARGEMENT DES ENGINS (JSON)
 * ============================================================ */
async function loadEngins() {
  try {
    const res = await fetch("./src/engins.json");
    const data = await res.json();

    // 🟢 Stockage séparé des trains et wagons
    state.enginsTrains = data.trains || [];
    state.enginsWagons = data.wagons || [];

    // 🧩 Fusion (utile pour les fonctions génériques)
    state.engins = [...state.enginsTrains, ...state.enginsWagons];

    console.log(
      `✅ Engins chargés : ${state.enginsTrains.length} trains, ${state.enginsWagons.length} wagons`
    );
  } catch (e) {
    console.error(e);
    toast("Impossible de charger engins.json", 'err');
  }
}



/* ============================================================
 * UI: LIENS AVEC LE FORMULAIRE TRAIN
 * ============================================================ */
function updatePaysColor() {
  const sel = $('#paysSel');
  if (!sel) return;

  // Réinitialise les classes
  sel.classList.remove('FR', 'DE', 'CH', 'FRET');
  sel.classList.add(sel.value);
}

function bindTrainForm() {
  // Pays
  $('#paysSel').addEventListener('change', e => {
    state.current.pays = e.target.value;
    updatePaysColor();
  });

  // ID
  $('#trainId').addEventListener('input', e => {
    state.current.id = e.target.value.trim();
    updatePaysColor();
  });

  $('#paysSel').addEventListener('change', e => {
    const sel = e.target;
    state.current.pays = sel.value;
    updatePaysColor();
  });
  updatePaysColor();
}

/* ============================================================
 * COMPOSITION: LISTE & CANDIDATS
 * ============================================================ */
function recalcCapaciteGlobale() {
  let prem = 0, sec = 0;
  let vmax = Infinity;
  // 🟦 inclure la motrice principale si présente
  if (state.current.engin) {
    const e = state.current.engin;
    if (e.capacite) {
      prem += e.capacite.premiere || 0;
      sec += e.capacite.seconde || 0;
    }
    if (e.vitesseMax) vmax = e.vitesseMax;
  }
  // ajouter toutes les compositions
  (state.current.composition || []).forEach(name => {
    const compo = state.engins.find(x => x.nom === name);
    if (compo) {
      if (compo.capacite) {
        prem += compo.capacite.premiere || 0;
        sec += compo.capacite.seconde || 0;
      }
      if (compo.vitesseMax)
        vmax = Math.min(vmax, compo.vitesseMax);
    }
  });
  // si aucun vmax trouvé (ex : engin seul)
  if (!isFinite(vmax) || vmax === 0) vmax = state.current.engin?.vitesseMax || 0;
  // met à jour l'affichage
  $('#capPrem').value = prem;
  $('#capSec').value = sec;
  $('#vmax').value = vmax;
  // 🔄 synchronisation du state avec l’affichage
  state.current.capacite = { premiere: prem, seconde: sec };
  state.current.vmax = vmax;

}


function addCompoTag(name) {
  const list = $('#compoList');
  const tag = document.createElement('span');
  tag.className = "tag";
  tag.style.display = "inline-flex";
  tag.style.alignItems = "center";
  tag.style.gap = "6px";
  tag.innerHTML = `
    <span>${name}</span>
    <button class="btn-mini" aria-label="Supprimer" title="Supprimer" style="
      border:none; background:#00000010; padding:2px 6px; border-radius:6px; cursor:pointer;">×</button>
  `;
  const btn = tag.querySelector('button');
  btn.addEventListener('click', () => {
    // retire du state
    state.current.composition = (state.current.composition || []).filter(n => n !== name);
    // retirer la capacité correspondante
    const e = state.engins.find(x => x.nom === name);
    if (e && e.capacite) {
      const prem = parseInt($('#capPrem').value || 0) - (e.capacite.premiere || 0);
      const sec = parseInt($('#capSec').value || 0) - (e.capacite.seconde || 0);
      $('#capPrem').value = Math.max(prem, 0);
      $('#capSec').value = Math.max(sec, 0);
    }

    // retire du DOM
    tag.remove();
  });
  list.appendChild(tag);
}


/* ============================================================
 * TABLE DESSERTES
 * ============================================================ */
function autoUpdateTrajetNom() {
  const t = activeTrajet();
  if (!t || t.dessertes.length < 2) return;
  const first = t.dessertes[0].gare || '';
  const last = t.dessertes.at(-1).gare || '';
  if (first && last) {
    t.nom = `${first} → ${last}`;
    $('#trajetNom').value = t.nom;
  }
}

function emptyTrajet() {
  return { nom: '', dessertes: [] };
}

function ensureTrajet() {
  // Initialise la structure si besoin
  if (!state.current.trajets) state.current.trajets = [];
  // Si aucun trajet n'existe, on en crée un
  if (state.current.trajets.length === 0) {
    state.current.trajets.push(emptyTrajet());
    state.current.trajetIndex = 0; // ✅ Sélectionne immédiatement le premier trajet
  }
  // Si aucun trajet actif défini → on prend le premier
  if (state.current.trajetIndex == null || state.current.trajetIndex < 0) {
    state.current.trajetIndex = 0;
  }
  // ✅ Renvoie toujours le trajet actif (garanti existant)
  return state.current.trajets[state.current.trajetIndex] || null;
}


function activeTrajet() {
  return state.current.trajets[state.current.trajetIndex] || null;
}

function renderDessertes() {
  const t = activeTrajet();
  const tbody = $('#dessertesTbl tbody');
  tbody.innerHTML = '';
  if (!t) return;



  t.dessertes.forEach((d, i) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${i + 1}</td>
    <td class="gare-cell" data-i="${i}">
      <input type="text" class="in-gare" value="${d.gare || ''}" list="garesList" placeholder="Gare...">
    </td>
    <td class="right"><input type="number" class="in-arret" min="0" value="${d.arret ?? state.defaultArretMin}"></td>
    <td class="right"><input type="time" class="in-heure" value="${d.heure || ''}" step="60"></td>
    <td class="right"><input type="text" class="in-jours" value="${(d.jours || []).join(',')}" placeholder="ex: LU,MA,ME"></td>
    <td class="right"><button class="btn btn-mini btn-danger in-del" data-i="${i}">Suppr</button></td>
  `;
    tbody.appendChild(tr);

    // ➕ Bouton "remplir chemin" entre cette gare et la suivante
    if (i < t.dessertes.length - 1) {
      const insertRow = document.createElement('tr');
      insertRow.classList.add('row-inter'); // nouvelle classe

      insertRow.innerHTML = `
      <td colspan="5" style="text-align:center; padding:3px 0;">
        <button class="btn btn-mini btn-ghost btn-fill" data-i="${i}" style="font-size:11px; opacity:0.6;">
          ➕ Ajouter gares intermédiaires
        </button>
      </td>
      <td class="traction-icon-cell" style="text-align:center; width:60px;">—</td>
    `;
      tbody.appendChild(insertRow);
    }
  });

  // auto-complétion des gares (avec datalist complète)
  useGaresDatalist();

  // hook inputs
  tbody.querySelectorAll('.in-gare').forEach((inp, idx) => {
    inp.addEventListener('input', (e) => {
      const t = activeTrajet();
      if (!t) return;
      t.dessertes[idx].gare = e.target.value.trim();
      autoUpdateTrajetNom();
      updateTractionIcons();
    });

    // double-clic → injecte suggestions selon rayon
    inp.addEventListener('dblclick', (e) => {
      const t = activeTrajet(); if (!t) return;
      const idx2 = idx;
      // Prend la gare actuelle OU la précédente comme source
      let curr = t.dessertes[idx2]?.gare;
      if (!curr && idx2 > 0) {
        curr = t.dessertes[idx2 - 1]?.gare;
      }
      if (!curr || !getGare(curr)) {
        toast('Sélectionnez d\'abord une gare valide avant les suggestions.', 'warn');
        return;
      }

      // profondeur = rayon; nombre de résultats = 10 (ou ce que tu veux)
      const sugg = suggestionsDepuis(curr, 10, state.suggestionRadius);

      if (!sugg.length) {
        toast('Aucune suggestion trouvée autour de cette gare.', 'warn');
        return;
      }
      e.target.setAttribute('list', `garesList_sugg_${idx2}`);
      let dl = document.getElementById(`garesList_sugg_${idx2}`);
      if (!dl) {
        dl = document.createElement('datalist');
        dl.id = `garesList_sugg_${idx2}`;
        document.body.appendChild(dl);
      }
      dl.innerHTML = '';
      sugg.forEach(n => {
        const opt = document.createElement('option');
        opt.value = n;
        // Ajoute le type pour aide visuelle
        const gare = getGare(n);
        if (gare?.type) {
          opt.textContent = `${n} (${gare.type})`;
        }
        dl.appendChild(opt);
      });
      toast(`${sugg.length} suggestions chargées (rayon ${state.suggestionRadius}). Tapez pour filtrer.`, 'ok', 1800);
    });
  });

  tbody.querySelectorAll('.in-arret').forEach((inp, idx) => {
    inp.addEventListener('input', (e) => {
      const t = activeTrajet();
      if (!t) return;
      t.dessertes[idx].arret = Math.max(0, Number(e.target.value) || 0);
    });
  });

  tbody.querySelectorAll('.in-heure').forEach((inp, idx) => {
    inp.addEventListener('input', (e) => {
      const t = activeTrajet();
      if (!t) return;
      t.dessertes[idx].heure = e.target.value;
      renderResumeTrajet(); // met à jour distance/temps
    });
  });

  tbody.querySelectorAll('.in-jours').forEach((inp, idx) => {
    inp.addEventListener('input', (e) => {
      const raw = e.target.value.trim();
      const jours = raw ? raw.split(',').map(s => s.trim().toUpperCase()).filter(Boolean) : undefined;
      const t = activeTrajet();
      if (!t) return;
      if (jours && !jours.every(j => ["LU", "MA", "ME", "JE", "VE", "SA", "DI"].includes(j))) {
        toast('Jours invalides : utiliser LU,MA,ME,JE,VE,SA,DI', 'warn');
      } else {
        t.dessertes[idx].jours = jours && jours.length ? jours : undefined;
      }
    });
  });

  tbody.querySelectorAll('.in-del').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const i = Number(e.currentTarget.dataset.i);
      const t = activeTrajet();
      if (!t) return;
      t.dessertes.splice(i, 1);
      renderDessertes();
      renderResumeTrajet();
    });
  });

  tbody.querySelectorAll('.btn-fill').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const i = Number(e.currentTarget.dataset.i);
      const t = activeTrajet();
      if (!t) return;

      const curr = t.dessertes[i];
      const next = t.dessertes[i + 1];
      if (!curr?.gare || !next?.gare) {
        toast("Deux gares valides sont nécessaires pour remplir le chemin.", "warn");
        return;
      }

      // Cherche le chemin complet
      const path = trouverCheminEntreGares(curr.gare, next.gare);
      if (!path || path.length <= 2) {
        toast("Aucune gare intermédiaire trouvée.", "warn");
        return;
      }

      // On extrait les gares intermédiaires réelles uniquement (sans la première et dernière)
      const typeFiltre = state.filtreTypeGare || "all";
      const intermediates = path
        .slice(1, -1)
        .map(nom => getGareAny(nom))
        .filter(g => {
          if (!g || g.fantome) return false;
          if (typeFiltre === "all") return true;
          const ordre = ["petite", "moyenne", "grande", "vaste"];
          const idxFiltre = ordre.indexOf(typeFiltre);
          const idxGare = ordre.indexOf(g.type);
          return idxFiltre !== -1 && idxGare !== -1 && idxGare >= idxFiltre;
        })
        .map(g => g.nom);


      if (!intermediates.length) {
        toast("Pas de gares intermédiaires sur ce segment.", "warn");
        return;
      }

      // Insère les nouvelles dessertes juste après la position i
      const inserts = intermediates.map(nom => ({
        gare: nom,
        arret: state.defaultArretMin,
        heure: '', // à suggérer ensuite
      }));

      t.dessertes.splice(i + 1, 0, ...inserts);


      // Icon elec ou diesel
      const trs = tbody.querySelectorAll("tr");
      trs.forEach((tr, i) => {
        const cell = tr.querySelector(".traction-cell");
        if (!cell) return;
        if (i === trs.length - 1) {
          cell.textContent = "—"; // dernière gare = terminus
          return;
        }

        const ga = trs[i].querySelector('.in-gare')?.value.trim() || "";
        const gb = trs[i + 1]?.querySelector('.in-gare')?.value.trim() || "";

        if (!ga || !gb) {
          cell.textContent = "—";
          return;
        }

        const t = determinerTractionEntre(ga, gb);
        cell.textContent = t.icon;
        cell.style.color = t.color;
        cell.title = t.type;
      });


      renderDessertes();
      renderAllTrajets();
      toast(`${inserts.length} gare(s) intermédiaire(s) ajoutée(s).`, "ok");
    });
  });

  renderResumeTrajet();
  setTimeout(() => updateTractionIcons(), 50);
}

function updateTractionIcons() {
  const tbody = $('#dessertesTbl tbody');
  if (!tbody) return;
  const rowsGare = Array.from(tbody.querySelectorAll('tr')).filter(r => r.querySelector('.in-gare'));
  const rowsInter = Array.from(tbody.querySelectorAll('.row-inter'));
  rowsInter.forEach((row, i) => {
    const tdIcon = row.querySelector('.traction-icon-cell');
    if (tdIcon) { tdIcon.textContent = '—'; tdIcon.style.color = '#aaa'; }
    else { return; }

    const ga = rowsGare[i]?.querySelector('.in-gare')?.value.trim();
    const gb = rowsGare[i + 1]?.querySelector('.in-gare')?.value.trim();
    if (!ga || !gb) {
      tdIcon.textContent = "—";
      tdIcon.style.color = "#aaa";
      tdIcon.title = "";
      return;
    }
    const t = determinerTractionEntre(ga, gb);
    tdIcon.textContent = t.icon;
    tdIcon.style.color = t.color;
    tdIcon.title = `${t.type.toUpperCase()} – ${ga} → ${gb}`;
  });
}


function useGaresDatalist() {
  // datalist complète (fallback global)
  let dl = document.getElementById('garesList');
  if (!dl) {
    dl = document.createElement('datalist');
    dl.id = 'garesList';
    document.body.appendChild(dl);
  }
  dl.innerHTML = '';
  villes.filter(v => !v.fantome).forEach(g => {
    const opt = document.createElement('option');
    opt.value = g.nom;
    dl.appendChild(opt);
  });
  // applique list=garesList partout
  $$('#dessertesTbl .in-gare').forEach(inp => inp.setAttribute('list', 'garesList'));
}

/* ============================================================
 * CALCUL VITESSE & DURÉE
 * ============================================================ */
function dureeCheminMinutes(path) {
  const base = state.current.engin;
  if (!base) return 0;

  let total = 0;
  const FACTEUR_VITESSE_POINTE = 0.92;
  const MARGE_SECURITE = 1.08;

  for (let i = 0; i < path.length - 1; i++) {
    const nomA = path[i];
    const nomB = path[i + 1];

    // trouve la voie correspondante
    const l = lignes.find(L =>
      (L.gareA === nomA && L.gareB === nomB) ||
      (L.gareA === nomB && L.gareB === nomA)
    );
    if (!l) continue;

    const km = l.longueur || 0;
    const vmaxSegment = l.vitesse_max || 80;

    // vitesse effective du train sur ce segment
    const vSeg = Math.min(vmaxSegment, base.vitesseMax || vmaxSegment);
    let vEff = vSeg * FACTEUR_VITESSE_POINTE;

    // ⚡ récupération du type de traction réel
    const mode = determinerTractionEntre(nomA, nomB).type;

    // ⚙️ coefficient de pénalité selon la traction
    const FACTEUR_MODE =
      mode === "diesel" ? 1.35 :
        mode === "electrique" ? 1.20 :
          mode === "incompatible" ? 1.6 :
            1.5;

    // 🕒 temps du segment en minutes
    let tempsSegment = (km / vEff) * 60;
    tempsSegment *= FACTEUR_MODE * MARGE_SECURITE;

    total += tempsSegment;
  }

  // durée totale arrondie
  return Math.ceil(total);
}


/**
 * Détermine le type de traction nécessaire entre deux gares
 * @returns {Object} { type: string, icon: string, color: string }
 */
function determinerTractionEntre(ga, gb) {
  const base = state.current.engin;
  if (!base) {
    return { type: "inconnu", icon: "?", color: "#999" };
  }

  // 📋 Capacités de l'engin
  const capacites = {
    diesel: base.moteurs?.some(m => m.toLowerCase().includes("diesel")) || false,
    "25kv": base.moteurs?.some(m => m.toLowerCase().includes("25kv")) || false,
    "15kv": base.moteurs?.some(m => m.toLowerCase().includes("15kv")) || false,
    "1.5kv": base.moteurs?.some(m => m.toLowerCase().includes("1.5kv")) || false
  };

  // 🛤️ Récupération des types d'électrification sur le chemin
  const path = trouverCheminEntreGares(ga, gb);
  if (!path || path.length < 2) {
    return { type: "inconnu", icon: "?", color: "#999" };
  }

  const typesElec = new Set();
  for (let i = 0; i < path.length - 1; i++) {
    const ligne = lignes.find(L =>
      (L.gareA === path[i] && L.gareB === path[i + 1]) ||
      (L.gareA === path[i + 1] && L.gareB === path[i])
    );
    if (ligne?.electrification) {
      typesElec.add(ligne.electrification.toLowerCase());
    }
  }

  if (typesElec.size === 0) {
    return { type: "inconnu", icon: "?", color: "#999" };
  }

  // 🔍 Analyse de compatibilité
  let modeUtilise = null;
  let compatible = true;

  for (const typeVoie of typesElec) {
    // Cas 1️⃣ : Voie diesel
    if (typeVoie.includes("diesel")) {
      if (capacites.diesel) {
        modeUtilise = "diesel";
      } else {
        compatible = false;
        break;
      }
    }
    // Cas 2️⃣ : Voie électrifiée
    else if (typeVoie.includes("25kv") || typeVoie.includes("15kv") || typeVoie.includes("1.5kv")) {
      const typeExact = typeVoie.includes("25kv") ? "25kv"
        : typeVoie.includes("15kv") ? "15kv"
          : "1.5kv";

      if (capacites[typeExact]) {
        // ✅ Compatible en électrique
        if (!modeUtilise) modeUtilise = "electrique";
      } else if (capacites.diesel) {
        // ⚡➡️🔥 Bascule en diesel (hybride)
        modeUtilise = "diesel";
      } else {
        // ❌ Incompatible
        compatible = false;
        break;
      }
    }
    // Cas 3️⃣ : Type inconnu
    else {
      if (capacites.diesel) {
        modeUtilise = "diesel";
      } else {
        compatible = false;
        break;
      }
    }
  }

  // 🎯 Décision finale
  if (!compatible) {
    return { type: "incompatible", icon: "❌", color: "#e74c3c" };
  }

  if (modeUtilise === "diesel") {
    return { type: "diesel", icon: "⛽", color: "#d0a060" };
  }

  return { type: "electrique", icon: "⚡", color: "#1e90ff" };
}

/**
 * Vérifie la compatibilité de traction sur TOUS les segments de TOUS les trajets
 * @returns {Object} { valid: boolean, errors: string[] }
 */
function verifierCompatibiliteTraction() {
  const errors = [];
  const c = state.current;

  if (!c.engin) {
    return { valid: false, errors: ["Aucun engin sélectionné"] };
  }

  if (!c.trajets || c.trajets.length === 0) {
    return { valid: true, errors: [] }; // Pas de trajet = pas d'incompatibilité
  }

  // 🔍 Parcourt chaque trajet
  c.trajets.forEach((trajet, tIndex) => {
    if (!trajet.dessertes || trajet.dessertes.length < 2) return;

    const nomTrajet = trajet.nom || `Trajet #${tIndex + 1}`;

    // 🔍 Vérifie chaque segment du trajet
    for (let i = 0; i < trajet.dessertes.length - 1; i++) {
      const gareA = trajet.dessertes[i].gare;
      const gareB = trajet.dessertes[i + 1].gare;

      if (!gareA || !gareB) continue;

      const traction = determinerTractionEntre(gareA, gareB);

      // Segment incompatible détecté
      if (traction.type === "incompatible") {
        errors.push(
          `${nomTrajet} : segment "${gareA} → ${gareB}" incompatible avec ${c.engin.nom}`
        );
      }

      // Segment inconnu (pas de données d'électrification)
      if (traction.type === "inconnu") {
        errors.push(
          `${nomTrajet} : segment "${gareA} → ${gareB}" - type de traction indéterminé`
        );
      }
    }
  });

  return {
    valid: errors.length === 0,
    errors
  };
}

/* ============================================================
 * CALCUL HORAIRES SUGGÉRÉS
 * ============================================================ */
function suggestHoraires() {
  const t = activeTrajet();
  if (!t || t.dessertes.length < 2) {
    toast("Ajoute au moins 2 gares avant de suggérer.", 'warn');
    return;
  }

  try {
    const startTime = $('#heureDepart').value || '08:00';
    t.dessertes[0].heure = startTime;

    for (let i = 1; i < t.dessertes.length; i++) {
      const prev = t.dessertes[i - 1];
      const curr = t.dessertes[i];

      if (!getGare(prev.gare) || !getGare(curr.gare)) {
        toast(`Gare inconnue : ${prev.gare} ou ${curr.gare}`, 'err', 2500);
        return;
      }

      const path = trouverCheminEntreGares(prev.gare, curr.gare);
      const arretPrev = Number(prev.arret ?? state.defaultArretMin);
      const baseMins = timeToMinutes(prev.heure || startTime);
      try {
        const travel = dureeCheminMinutes(path);
        const arrivalMins = baseMins + arretPrev + travel;
        curr.heure = minutesToTime(arrivalMins);
      } catch (err) {
        console.error(err);
        toast(`Erreur : ${err.message}`, 'err', 4000);
      }
    }

    renderDessertes();
    toast('Horaires suggérés appliqués.', 'ok');
    // ✅ Lance automatiquement la validation après suggestion
    setTimeout(() => {
      const err = validateTrainBeforeSave();
      if (err) {
        toast(err, 'err', 5000);
      } else {
        toast('✅ Trajet validé sans conflit.', 'ok');
      }
    }, 500);

  } catch (err) {
    console.error(err);
    toast(`Erreur : ${err.message}`, 'err', 4000);
  }

}

/* ============================================================
 * GÉNÉRER RETOUR INVERSÉ
 * ============================================================ */
function genererRetourInverse() {
  const t = activeTrajet();
  if (!t || t.dessertes.length < 2) {
    toast("Ajoute au moins 2 gares avant de générer un retour.", 'warn');
    return;
  }

  // --- Crée un nouveau trajet avec les dessertes inversées ---
  const t2 = emptyTrajet();

  // inverse les dessertes et garde arrêts / jours
  t2.dessertes = [...t.dessertes].reverse().map(d => ({
    gare: d.gare,
    arret: d.arret ?? state.defaultArretMin,
    jours: d.jours ? [...d.jours] : undefined,
    heure: '' // sera calculée
  }));

  // --- Calcule l'heure de départ du retour ---
  const lastHeure = t.dessertes.at(-1).heure || $('#heureDepart').value || '08:00';
  const start = minutesToTime(timeToMinutes(lastHeure) + state.retourBufferMin);

  // --- Insère le trajet dans la liste ---
  state.current.trajets.push(t2);
  state.current.trajetIndex = state.current.trajets.length - 1;

  // --- Nom dynamique "première → dernière" ---
  const first = t2.dessertes[0]?.gare || '';
  const last = t2.dessertes.at(-1)?.gare || '';
  t2.nom = first && last ? `${first} → ${last}` : 'Trajet retour';

  // --- Met à jour l’UI ---
  $('#trajetNom').value = t2.nom;
  $('#heureDepart').value = start;

  renderDessertes();     // charge dans l’éditeur
  suggestHoraires();     // calcule les horaires
  renderAllTrajets();    // met à jour les cards


  toast(`Trajet retour généré : ${t2.nom}`, 'ok');
}

/* ============================================================
 * Détection conflit
 * ============================================================ */
function detectConflitTroncons(ignoreConflits = false) {
  if (ignoreConflits) return []; // ✅ Support UM

  const allTrains = [...state.trainsFR, ...state.trainsDE, ...state.trainsCH];
  const conflits = [];

  // ✅ Helper jours
  function joursChevauchent(j1, j2) {
    if (!j1 || !j1.length || !j2 || !j2.length) return true;
    const s2 = new Set(j2);
    return j1.some(j => s2.has(j));
  }

  function calculerPassages(dessertes) {
    const passages = new Map();

    for (let i = 0; i < dessertes.length - 1; i++) {
      const curr = dessertes[i];
      const next = dessertes[i + 1];

      if (!curr.heure || !next.heure) continue;

      const path = trouverCheminEntreGares(curr.gare, next.gare);
      if (!path || path.length <= 1) continue; // ✅ Sécurité

      const tDepart = timeToMinutes(curr.heure) + (curr.arret ?? state.defaultArretMin);
      const tArrivee = timeToMinutes(next.heure);

      for (let j = 0; j < path.length; j++) {
        const gare = path[j];

        if (j === 0) {
          passages.set(gare, tDepart);
        } else if (j === path.length - 1) {
          passages.set(gare, tArrivee);
        } else {
          const ratio = j / (path.length - 1);
          const tPassage = tDepart + (tArrivee - tDepart) * ratio;
          passages.set(gare, tPassage);
        }
      }
    }

    return passages;
  }

  // 🔄 Parcourt TOUS les trajets du train en cours
  for (const nouveauTrajet of state.current.trajets || []) {
    if (!nouveauTrajet.dessertes || nouveauTrajet.dessertes.length < 2) continue;

    const passagesNew = calculerPassages(nouveauTrajet.dessertes);

    for (const train of allTrains) {
      if (state.editingExistingId && train.id === state.editingExistingId) continue;

      for (const trajet of train.trajets || []) {
        if (!trajet.dessertes || trajet.dessertes.length < 2) continue;

        // ✅ Filtre jours
        const jNew = nouveauTrajet.dessertes[0]?.jours || null;
        const jOther = trajet.dessertes[0]?.jours || null;
        if (!joursChevauchent(jNew, jOther)) continue;

        const passagesAutre = calculerPassages(trajet.dessertes);

        for (let j = 0; j < nouveauTrajet.dessertes.length - 1; j++) {
          const nA = nouveauTrajet.dessertes[j].gare;
          const nB = nouveauTrajet.dessertes[j + 1].gare;
          const pathNew = trouverCheminEntreGares(nA, nB);

          for (let i = 0; i < trajet.dessertes.length - 1; i++) {
            const gA = trajet.dessertes[i].gare;
            const gB = trajet.dessertes[i + 1].gare;
            const pathAutre = trouverCheminEntreGares(gA, gB);

            // ✅ Sécurité
            if (pathNew.length <= 1 || pathAutre.length <= 1) continue;

            const segmentsAutreSet = new Set(
              pathAutre.slice(0, -1).map((gare, idx) => `${gare}__${pathAutre[idx + 1]}`)
            );

            const segmentsCommuns = [];

            for (let k = 0; k < pathNew.length - 1; k++) {
              const segA = pathNew[k];
              const segB = pathNew[k + 1];
              const key = `${segA}__${segB}`;

              if (!segmentsAutreSet.has(key)) continue;

              const tNewA = passagesNew.get(segA);
              const tNewB = passagesNew.get(segB);
              const tOtherA = passagesAutre.get(segA);
              const tOtherB = passagesAutre.get(segB);

              if (tNewA != null && tNewB != null && tOtherA != null && tOtherB != null) {
                segmentsCommuns.push({
                  segA, segB,
                  tNewA, tNewB,
                  tOtherA, tOtherB
                });
              }
            }

            if (segmentsCommuns.length === 0) continue;

            for (const seg of segmentsCommuns) {
              const chevauchement = seg.tNewB > seg.tOtherA && seg.tNewA < seg.tOtherB;

              if (!chevauchement) continue;

              const ligne = lignes.find(L =>
                (L.gareA === seg.segA && L.gareB === seg.segB) ||
                (L.gareA === seg.segB && L.gareB === seg.segA)
              );

              const typeSig = ligne?.signalisation || "inconnue";

              const tolerances = {
                "ETCS": 3,
                "LZB": 4,
                "PZB": 5,
                "KVB": 6,
                "inconnue": 10
              };

              const tol = tolerances[typeSig] || 6;
              const ecart = Math.abs(seg.tNewA - seg.tOtherA);

              if (ecart < tol) {
                // ✅ Message amélioré
                conflits.push(
                  `⚠️ Trajet "${nouveauTrajet.nom || 'sans nom'}" : Conflit ${minutesToTime(Math.round(Math.max(seg.tNewA, seg.tOtherA)))} ` +
                  `sur ${seg.segA}→${seg.segB} avec ${train.id} ` +
                  `(${typeSig}, tol ${tol} min, écart ${Math.round(ecart)} min)`
                );
              }
            }
          }
        }
      }
    }
  }

  return conflits;
}

/* ============================================================
 * VALIDATIONS
 * ============================================================ */
function validateTrainBeforeSave() {
  const c = state.current;
  if (!c.id) return "L'ID du train est requis.";
  if (!c.id.trim()) return "L'ID ne doit pas être vide.";
  if (!c.engin || !c.engin.nom) return "Aucun engin de base sélectionné.";
  if (!c.vmax || c.vmax <= 0) return "Vitesse max non valide (vérifie composition/engin).";
  if (!c.trajets || c.trajets.length === 0) return "Ajoute au moins un trajet avant d'exporter.";

  // Conflit d'ID si création (sauf si on édite celui-là)
  const all = [...state.trainsFR, ...state.trainsDE, ...state.trainsCH];
  const exists = all.some(t => t.id === c.id);
  // ✅ on autorise le remplacement si on édite le même train
  if (exists && (!state.editingExistingId || state.editingExistingId !== c.id)) {
    return "ID déjà utilisé. Modifie l'ID ou charge l'existant pour l'éditer.";
  }

  // Validation trajets
  for (const [i, tr] of c.trajets.entries()) {
    if (!tr.dessertes || tr.dessertes.length < 2) {
      return `Trajet #${i + 1}: au moins 2 dessertes nécessaires.`;
    }
    // gares valides + heures croissantes
    let prev = null;
    for (const [k, d] of tr.dessertes.entries()) {
      const gare = getGare(d.gare);
      if (!gare) return `Trajet #${i + 1}: gare "${d.gare}" inconnue à la ligne ${k + 1}.`;
      if (!d.heure) return `Trajet #${i + 1}: heure manquante à la ligne ${k + 1}.`;

      const currMins = timeToMinutes(d.heure);
      if (prev !== null && currMins <= prev) {
        return `Trajet #${i + 1}: les heures doivent être strictement croissantes (ligne ${k + 1}).`;
      }
      prev = currMins;
    }
  }
  // NOUVELLE VALIDATION : compatibilité de traction
  const tractionCheck = verifierCompatibiliteTraction();
  if (!tractionCheck.valid) {
    // Retourne la première erreur (ou toutes si tu préfères)
    return `❌ Incompatibilité de traction détectée :\n\n${tractionCheck.errors.join('\n')}`;
  }

  // Vérifie les conflits de sillons avec d'autres trains
  // Vérifie les conflits de sillons avec d'autres trains (TOUS LES TRAJETS)
  const ignoreUM = document.getElementById("ignoreConflitsUM")?.checked;
  const conflits = detectConflitTroncons(ignoreUM);
  if (conflits.length > 0 && !ignoreUM) {
    return `❌ Conflits détectés :\n${conflits.join("\n")}`;
  }


  return null;
}

/* ============================================================
 * EXPORT .JS (FR / DE / CH)
 * ============================================================ */
function toTrainObjectForSave() {
  const c = state.current;
  return {
    id: c.id,
    nom: c.engin?.nom || '(sans nom)',
    vitesseMax: c.vmax,
    moteurs: c.engin?.moteurs || [],
    capacite: { ...c.capacite },
    composition: [...c.composition],
    trajets: c.trajets.map(t => ({
      nom: t.nom || undefined,
      dessertes: t.dessertes.map(d => ({
        gare: d.gare,
        heure: d.heure,
        arret: d.arret ?? state.defaultArretMin,
        ...(d.jours ? { jours: d.jours } : {})
      }))
    }))
  };
}

function download(filename, content) {
  const blob = new Blob([content], { type: 'text/javascript;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename; a.click();
  URL.revokeObjectURL(url);
}

function prettyJSExport(varName, arr) {
  const sorted = [...arr].sort((a, b) => String(a.id).localeCompare(String(b.id), 'fr'));

  const formatDessertes = (dessertes) => {
    return "[\n" + dessertes.map(d => {
      const parts = [
        `gare: "${d.gare}"`,
        `heure: "${d.heure}"`,
        `arret: ${d.arret}`
      ];
      if (d.jours && d.jours.length) {
        parts.push(`jours: [${d.jours.map(j => `"${j}"`).join(", ")}]`);
      }
      return `          { ${parts.join(", ")} }`;
    }).join(",\n") + "\n        ]";
  };


  const formatTrajets = (trajets) => {
    return "[\n" + trajets.map(t =>
      `      {\n        nom: "${t.nom}",\n        dessertes: ${formatDessertes(t.dessertes)}\n      }`
    ).join(",\n") + "\n    ]";
  };

  const formatTrain = (t) => {
    const moteurs = `[${(t.moteurs || []).map(m => `"${m}"`).join(", ")}]`;
    const capacite = `{ premiere: ${t.capacite?.premiere || 0}, seconde: ${t.capacite?.seconde || 0} }`;
    const composition = (t.composition && t.composition.length)
      ? `,\n    composition: [${t.composition.map(c => `"${c}"`).join(", ")}]`
      : "";

    return `  {\n    id: "${t.id}",\n    nom: "${t.nom}",\n    moteurs: ${moteurs},\n    vitesseMax: ${t.vitesseMax},\n    capacite: ${capacite}${composition},\n    trajets: ${formatTrajets(t.trajets)}\n  }`;
  };


  const trainsText = sorted.map(formatTrain).join(",\n\n");
  return `export const ${varName} = [\n${trainsText}\n];\n`;
}

// ============================================================
//  UTILITAIRE : détermine le pays d'un train à partir de son ID
// ============================================================
function removeTrainEverywhere(id) {
  if (!id) return;
  const rm = (arr, label) => {
    const idx = arr.findIndex(t => t.id === id);
    if (idx >= 0) {
      arr.splice(idx, 1);
      toast(`Ancienne version supprimée de ${label}.js`, "warn");
    }
  };
  rm(state.trainsFR, "trainsFR");
  rm(state.trainsDE, "trainsDE");
  rm(state.trainsCH, "trainsCH");
}

function performExport() {
  const err = validateTrainBeforeSave();
  if (err) { toast(err, 'err', 3500); return; }

  const trainObj = toTrainObjectForSave();
  const target = state.current.pays === 'DE' ? 'DE' : state.current.pays === 'CH' ? 'CH' : state.current.pays === 'FRET' ? 'FRET' : 'FR';

  // 🧹 Supprime TOUTES les anciennes occurrences
  removeTrainEverywhere(trainObj.id);

  // 🟢 Ajoute ou remplace dans le fichier cible
  const arrTarget =
    target === 'FR' ? state.trainsFR :
      target === 'DE' ? state.trainsDE :
        target === 'CH' ? state.trainsCH :
          state.trainsFRET;


  const idx = arrTarget.findIndex(t => t.id === trainObj.id);
  if (idx >= 0) arrTarget[idx] = trainObj;
  else arrTarget.push(trainObj);

  // 📦 Génère le texte exportable
  const frText = prettyJSExport('trainsFR', state.trainsFR);
  const deText = prettyJSExport('trainsDE', state.trainsDE);
  const chText = prettyJSExport('trainsCH', state.trainsCH);
  const fretText = prettyJSExport('trainsFRET', state.trainsFRET);

  // Téléchargement simultané
  download('trainsFR.js', frText);
  download('trainsDE.js', deText);
  download('trainsCH.js', chText);
  download('trainsFRET.js', fretText);


  renderAllTrajets();
  toast('Export téléchargé (FR, DE, CH & FRET).', 'ok');
  state.editingExistingId = null;
}




/* ============================================================
 * CHARGER / MODIFIER UN TRAIN EXISTANT
 * ============================================================ */

// === Sélection visuelle d’un train existant ===
$('#btn-load-train').addEventListener('click', openPopupTrains);
$('#closePopupTrains').addEventListener('click', () => $('#popupTrains').style.display = 'none');

function openPopupTrains() {
  const popup = $('#popupTrains');
  const grid = $('#gridTrains');
  const search = $('#searchTrain');
  const sort = $('#sortTrains');

  const trains = [
    ...(state.trainsFR || []).map(t => ({ ...t, pays: "FR" })),
    ...(state.trainsDE || []).map(t => ({ ...t, pays: "DE" })),
    ...(state.trainsCH || []).map(t => ({ ...t, pays: "CH" })),
    ...(state.trainsFRET || []).map(t => ({ ...t, pays: "FRET" }))
  ];

  if (!trains.length) {
    toast("Aucun train disponible.", "warn");
    return;
  }

  function renderList() {
    let list = [...trains];
    const q = search.value.toLowerCase().trim();
    if (q) {
      list = list.filter(t =>
        (t.nom || '').toLowerCase().includes(q) ||
        (t.id || '').toLowerCase().includes(q)
      );
    }

    // Tri
    const sortBy = sort.value;
    list.sort((a, b) => {
      if (sortBy === 'pays') return (a.pays || '').localeCompare(b.pays || '');
      if (sortBy === 'nom') return (a.nom || '').localeCompare(b.nom || '');
      return (a.id || '').localeCompare(b.id || '');
    });

    grid.innerHTML = '';
    list.forEach(t => {
      const div = document.createElement('div');
      div.className = 'card-train';


      const p = (t.pays || '').toUpperCase();
      div.style.background =
        p === 'FR' ? '#e6f0ff' :
          p === 'DE' ? '#fff7cc' :
            p === 'CH' ? '#ffe6e6' :
              p === 'FRET' ? '#fcdfcaff' : '#f9f9f9';


      // 🔹 tentative de trouver l'image correspondante (si dispo)
      const imgPath = `./assets/trains/${t.nom?.replaceAll(' ', '_')}.png`;

      div.innerHTML = `
        <img src="${imgPath}" alt="${t.nom}" style="width:100%; height:90px; object-fit:contain; background:#f7f7f7;">
        <h4 style="margin-top:6px;">ID : ${t.id || '(sans id)'}</h4>
        <p>${t.nom || '(sans nom)'}</p>
        <p style="color:#555;">${t.trajets?.length || 0} trajet(s)</p>
      `;


      // clic → charger le train
      div.addEventListener('click', () => {
        loadTrainData(t);
        popup.style.display = 'none';
      });

      grid.appendChild(div);
    });
  }

  search.oninput = renderList;
  sort.onchange = renderList;

  renderList();
  popup.style.display = 'flex';
}

function loadTrainData(train) {
  // reset du state
  state.current = JSON.parse(JSON.stringify(train));
  state.currentPays = train.pays || 'FR';

  // on met à jour les champs encore existants
  $('#trainId').value = train.id || '';
  $('#vmax').value = train.vitesseMax || '';
  $('#capPrem').value = train.capacite?.premiere || 0;
  $('#capSec').value = train.capacite?.seconde || 0;

  // mise à jour du sélecteur d’engin
  const e = state.engins.find(x => x.nom === train.nom);
  if (e) {
    state.current.engin = e;
    $('#enginChoisi').textContent = e.nom;
  } else {
    $('#enginChoisi').textContent = '⚠️ Engin non trouvé';
    toast(`⚠️ L'engin "${train.nom}" n'existe pas dans la base actuelle.`, 'warn');
  }

  // Composition
  $('#compoList').innerHTML = '';
  state.current.composition = [...(train.composition || [])];
  state.current.composition.forEach(n => addCompoTag(n));

  //  recalcul des capacités globales (1ʳᵉ / 2ᵉ classe)
  recalcCapaciteGlobale();
  // Trajets
  renderAllTrajets();
  // 🔧 Enregistre l'ID du train chargé (pour autoriser son remplacement à l'export)
  state.editingExistingId = train.id;
  // 🟦 synchronise le sélecteur de pays (visuel et logique)
  const paysSel = $('#paysSel');
  paysSel.value = train.pays || 'FR';
  state.current.pays = paysSel.value;
  updatePaysColor();
  toast(`✅ Train "${train.nom}" chargé avec succès.`, 'ok');
}


/* ============================================================
 * ACTIONS UI
 * ============================================================ */
/**
 * Vérifie que toutes les dessertes d’un trajet sont valides.
 * @param {Object} t - Trajet à valider
 * @returns {boolean} - true si tout est correct, false sinon
 */
function trajetValide(t) {
  if (!t || !t.dessertes?.length) {
    toast("Aucune gare définie.", "err");
    return false;
  }

  for (let i = 0; i < t.dessertes.length; i++) {
    const d = t.dessertes[i];
    const num = i + 1;

    if (!d.gare || !d.gare.trim()) {
      toast(`Gare n°${num} : nom manquant.`, "err");
      return false;
    }
    if (!d.heure || !d.heure.trim()) {
      toast(`Gare n°${num} (${d.gare || '—'}) : heure manquante.`, "err");
      return false;
    }
    if (!/^\d{2}:\d{2}$/.test(d.heure)) {
      toast(`Gare n°${num} (${d.gare}) : format d'heure invalide.`, "err");
      return false;
    }
    if (isNaN(d.arret) || d.arret < 0) {
      toast(`Gare n°${num} (${d.gare}) : durée d'arrêt invalide.`, "err");
      return false;
    }
  }

  return true;
}

function bindActions() {
  $('#btn-add-gare').addEventListener('click', () => {
    if (state.current.trajetIndex == null || state.current.trajetIndex < 0) {
      state.current.trajetIndex = 0;           // ► fallback
    }
    const t = activeTrajet();
    if (!t) { toast("Aucun trajet actif.", "warn"); return; }

    if (!t.dessertes.length) {
      t.dessertes.push({ gare: '', arret: state.defaultArretMin, heure: $('#heureDepart').value || '08:00' });
    } else {
      t.dessertes.push({ gare: '', arret: state.defaultArretMin, heure: '' });
    }
    renderDessertes();
    renderAllTrajets();
  });
  $('#btn-start-trajet').addEventListener('click', () => {
    ensureTrajet();
    const t = activeTrajet();
    if (!trajetValide(t)) return;  // ✅ validation centralisée

    state.current.trajets.push(emptyTrajet());
    state.current.trajetIndex = state.current.trajets.length - 1;
    renderDessertes();
    renderAllTrajets();
    toast("Nouveau trajet ajouté.", "ok");
  });

  $('#trajetNom').addEventListener('input', (e) => {
    ensureTrajet();
    const t = activeTrajet(); if (!t) return;
    t.nom = e.target.value;
  });
  $('#heureDepart').addEventListener('input', (e) => {
    // ne force rien ici ; utilisé par suggérer/retour
  });
  $('#btn-suggest').addEventListener('click', suggestHoraires);
  $('#btn-return').addEventListener('click', genererRetourInverse);
  $('#btn-export').addEventListener('click', performExport);
  $('#btn-load-train').addEventListener('click', openPopupTrains);
  $('#btn-validate').addEventListener('click', () => {
    const t = activeTrajet();
    if (!t) { toast("Aucun trajet sélectionné.", "warn"); return; }
    if (!trajetValide(t)) return; // ✅ même sécurité que “Ajouter trajet”
    // 🔄 Met à jour le nom du trajet selon les gares (si possible)
    autoUpdateTrajetNom();
    // 🔄 Force le recalcul du résumé et des icônes
    renderDessertes();
    renderResumeTrajet();
    updateTractionIcons();
    // 🔄 Rafraîchit la liste des cards
    renderAllTrajets();

    // ✅ Lance automatiquement la validation après suggestion
    setTimeout(() => {
      const err = validateTrainBeforeSave();
      if (err) {
        toast(err, 'err', 5000);
      } else {
        toast('✅ Trajet validé sans conflit.', 'ok');
      }
    }, 500);

    toast(`Modifications enregistrées pour "${t.nom}".`, "ok");
  });


  $('#filtreTypeGare').addEventListener('change', e => {
    state.filtreTypeGare = e.target.value;
  });
  $('#suggestDepth').addEventListener('input', e => {
    state.suggestionRadius = parseInt(e.target.value, 10);
  });
  $('#suggestMax').addEventListener('input', e => {
    state.suggestionMax = parseInt(e.target.value, 10);
  });

  // valeurs par défaut au démarrage
  state.filtreTypeGare = $('#filtreTypeGare').value;
  state.suggestionRadius = parseInt($('#suggestDepth').value, 10);
  state.suggestionMax = parseInt($('#suggestMax').value, 10);


  // === Sélection d’un engin via popup amélioré ===
  $('#btnSelectEngin').addEventListener('click', () => openPopupEngins());
  $('#closePopupEngins').addEventListener('click', () => $('#popupEngins').style.display = "none");

  function openPopupEngins() {
    const popup = $('#popupEngins');
    const grid = $('#gridEngins');
    const search = $('#searchEngin');
    const sort = $('#sortEngins');
    const paysBtns = document.querySelectorAll('#filtrePays button');

    let paysFiltre = "all";

    paysBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        paysFiltre = btn.dataset.pays;
        paysBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderList();
      });
    });

    function renderList() {
      const q = search.value.toLowerCase();
      let engins = [...state.enginsTrains]; // ✅ uniquement les trains motorisés

      if (q) engins = engins.filter(e => e.nom.toLowerCase().includes(q));
      if (paysFiltre !== "all") engins = engins.filter(e => (e.pays || "").toUpperCase() === paysFiltre);

      // --- tri
      const sortBy = sort.value;
      engins.sort((a, b) => {
        if (sortBy === "pays") return (a.pays || "").localeCompare(b.pays || "");
        if (sortBy === "vitesse") return (b.vitesseMax || 0) - (a.vitesseMax || 0);
        if (sortBy === "moteur") return (a.moteurs?.[0] || "").localeCompare(b.moteurs?.[0] || "");
        return a.nom.localeCompare(b.nom);
      });

      // --- couleurs selon le tri actif
      grid.innerHTML = "";
      engins.forEach(e => {
        const img = `./assets/trains/${e.nom.replaceAll(" ", "_")}.png`;
        const div = document.createElement('div');
        div.className = "card-train";

        let bg = "#f6f6f6";

        // --- Couleur de fond selon le tri actif ---
        if (sortBy === "pays") {
          if ((e.pays || "").toUpperCase() === "FR") bg = "#e6f0ff";
          else if ((e.pays || "").toUpperCase() === "DE") bg = "#fff7cc";
          else if ((e.pays || "").toUpperCase() === "CH") bg = "#ffe6e6";
          else bg = "#f9f9f9";
        }
        else if (sortBy === "vitesse") {
          bg = getSpeedColor(e.vitesseMax);
        }
        else if (sortBy === "moteur") {
          bg = getAlimGradient(e.moteurs || []);
        }

        div.style.background = bg;

        div.innerHTML = `
        <img src="${img}" alt="${e.nom}">
        <h4>${e.nom}</h4>
        <p>${e.vitesseMax || '?'} km/h</p>
        <p style="color:#444;">${(e.moteurs || []).join(" / ") || "—"}</p>
      `;

        div.addEventListener('click', () => {
          $('#enginChoisi').textContent = e.nom;
          state.current.engin = e;

          // Réinitialise les compositions car elles peuvent être incompatibles
          state.current.composition = [];
          $('#compoList').innerHTML = '';
          $('#capPrem').value = e.capacite?.premiere || 0;
          $('#capSec').value = e.capacite?.seconde || 0;
          $('#vmax').value = e.vitesseMax || '';

          recalcCapaciteGlobale();

          popup.style.display = "none";
          toast(`Engin "${e.nom}" sélectionné. Composition réinitialisée.`, "ok");
        });


        grid.appendChild(div);
      });
    }

    search.oninput = renderList;
    sort.onchange = renderList;
    renderList();
    popup.style.display = "flex";
  }

  // === Sélection de composition ===
  $('#btn-add-compo').addEventListener('click', () => openPopupCompo());
  $('#closePopupCompo').addEventListener('click', () => $('#popupCompo').style.display = "none");

  function openPopupCompo() {
    const popup = $('#popupCompo');
    const grid = $('#gridCompo');
    const sortSel = $('#sortCompo');
    const search = $('#searchCompo');
    const qtyInp = $('#qtyCompo');
    const confirm = $('#btnConfirmCompo');

    let selected = new Set();

    function renderList() {
      // affiner la compatibilité 


      // ✅ on commence par les données séparées
      let items = [];
      const base = state.current.engin;

      if (base) {
        const isLoco = (base.capacite?.premiere || 0) + (base.capacite?.seconde || 0) === 0;

        if (isLoco) {
          // 🚂 Locomotive : propose uniquement les wagons
          items = [...state.enginsWagons];
        } else {
          // util: premier "mot" avant espace(s) et/ou underscore(s), en minuscules
          const token = (s) => (s || "")
            .trim()
            .split(/[\s_]+/)[0]     // coupe sur 1+ espaces ou underscores
            .toLowerCase();

          const prefix = token(base.nom);

          items = state.enginsTrains.filter(e => {
            const pfx = token(e.nom);
            const ok = pfx === prefix;   // ou pfx.startsWith(prefix) si tu veux être plus large
            return ok;
          });
        }
      } else {
        // Aucun engin choisi → tout
        items = [...state.engins];
      }

      // ✅ tri lisible (facultatif)
      items.sort((a, b) => a.nom.localeCompare(b.nom));


      // 🔎 filtre texte (dans le popup)
      const q = (search.value || "").toLowerCase().trim();
      if (q) {
        items = items.filter(e =>
          e.nom.toLowerCase().includes(q) ||
          (e.moteurs || []).some(m => m.toLowerCase().includes(q)) ||
          (e.pays || '').toLowerCase().includes(q)
        );
      }

      // 🔃 tri
      const sortBy = sortSel.value;
      items.sort((a, b) => {
        if (sortBy === 'pays') return (a.pays || '').localeCompare(b.pays || '');
        if (sortBy === 'vitesse') return (b.vitesseMax || 0) - (a.vitesseMax || 0);
        return a.nom.localeCompare(b.nom);
      });

      // 🧱 rendu
      grid.innerHTML = '';
      items.forEach(e => {
        const div = document.createElement('div');
        div.className = 'card-train';

        // 🎨 fond selon tri (mêmes règles que le popup engins)
        let bg = '#f8f8f8';
        if (sortBy === 'pays') {
          const p = (e.pays || '').toUpperCase();
          bg = p === 'FR' ? '#e6f0ff' : p === 'DE' ? '#fff7cc' : p === 'CH' ? '#ffe6e6' : '#f9f9f9';
        } else if (sortBy === 'vitesse') {
          bg = getSpeedColor(e.vitesseMax);
        } // (pas de mode "moteur" ici pour compo)

        div.style.background = bg;

        const img = `./assets/trains/${e.nom.replaceAll(' ', '_')}.png`;
        div.innerHTML = `
        <img src="${img}" alt="${e.nom}">
        <h4>${e.nom}</h4>
        <p>${e.vitesseMax || '?'} km/h</p>
        <p style="color:#444;">${(e.moteurs || []).join(' / ') || '—'}</p>
      `;

        // sélection multiple (toggle)
        div.addEventListener('click', () => {
          const key = e.nom;
          if (selected.has(key)) {
            selected.delete(key);
            div.style.outline = 'none';
          } else {
            selected.add(key);
            div.style.outline = '3px solid #1e3a8a';
          }
        });

        grid.appendChild(div);
      });
    }

    // ➕ Ajouter à la rame (popup reste ouvert)
    confirm.onclick = () => {
      if (selected.size === 0) {
        toast('Aucun élément sélectionné.', 'warn');
        return;
      }

      let qty = parseInt(qtyInp.value, 10);
      if (!Number.isFinite(qty) || qty < 1) qty = 1;

      if (!state.current.composition) state.current.composition = [];
      const list = $('#compoList');

      let totalPrem = parseInt($('#capPrem').value || 0);
      let totalSec = parseInt($('#capSec').value || 0);

      for (const name of selected) {
        const e = state.engins.find(x => x.nom === name);
        if (!e) continue;

        for (let i = 0; i < qty; i++) {
          state.current.composition.push(name);
          addCompoTag(name);

          // ajoute la capacité du composant
          if (e.capacite) {
            totalPrem += e.capacite.premiere || 0;
            totalSec += e.capacite.seconde || 0;
          }
        }
      }

      // met à jour la capacité globale affichée
      $('#capPrem').value = totalPrem;
      $('#capSec').value = totalSec;

      toast(`${selected.size * qty} élément(s) ajouté(s).`, 'ok');

      // conserve le popup ouvert, réinitialise juste la sélection visuelle
      selected.clear();
      grid.querySelectorAll('.card-train').forEach(c => c.style.outline = 'none');
      recalcCapaciteGlobale();

    };


    // évènements live
    search.oninput = renderList;
    sortSel.onchange = renderList;

    renderList();
    popup.style.display = 'flex';
  }

  // ==== Gestion nouveau train 
  $('#btn-new-train').addEventListener('click', () => {
    const err = validateTrainBeforeSave();
    if (err) {
      toast(err, "err");
      return;
    }
    // Ajoute le train actuel dans la mémoire locale (sans export)
    const trainObj = toTrainObjectForSave();
    const target =
      state.current.pays === "DE" ? state.trainsDE :
        state.current.pays === "CH" ? state.trainsCH :
          state.current.pays === "FRET" ? state.trainsFRET :
            state.trainsFR;


    // Supprime ancienne version si même ID
    const idx = target.findIndex(t => t.id === trainObj.id);
    if (idx >= 0) target[idx] = trainObj;
    else target.push(trainObj);

    toast(`Train "${trainObj.id}" ajouté en mémoire. Tu peux en créer un nouveau.`, "ok");
    // 🧹 Réinitialise l’éditeur pour un nouveau train
    state.current = {
      id: "",
      nom: "",
      engin: null,
      pays: "FR",
      composition: [],
      trajets: []
    };
    state.editingExistingId = null;
    // UI de base
    $('#trainId').value = "";
    $('#enginChoisi').textContent = "(aucun)";
    $('#compoList').innerHTML = "";
    $('#trajetNom').value = "";
    $('#heureDepart').value = "08:00";
    // 🟦 Pays visuel et logique
    const paysSel = $('#paysSel');
    paysSel.value = "FR";
    paysSel.classList.remove('FR', 'DE', 'CH');
    paysSel.classList.add('FR');
    state.current.pays = "FR";
    // 🔁 Très important : recréer un trajet vide et le sélectionner
    state.current.trajets.push(emptyTrajet());
    state.current.trajetIndex = 0;
    // UI
    renderDessertes();      // recharge l’éditeur avec le trajet vide
    renderAllTrajets();     // affiche la card “(Trajet sans nom)”
  });



}

/* ============================================================
 * AFFICHAGE MULTIPLE DES TRAJETS (cards repliables)
 * ============================================================ */
function renderAllTrajets() {
  const container = document.getElementById('trajetsContainer');
  if (!container) return;
  container.innerHTML = '';

  if (!state.current.trajets.length) {
    container.innerHTML = `<div class="muted" style="padding:6px;">Aucun trajet défini.</div>`;
    return;
  }

  state.current.trajets.forEach((trajet, index) => {
    // Création de la card principale
    const card = document.createElement('div');
    card.className = 'trajet-card' + (index === state.current.trajetIndex ? ' active' : '');
    card.style.cssText = `
      background:#fafbff;
      border:1px solid #dde2f3;
      border-radius:12px;
      overflow:hidden;
      box-shadow:0 2px 6px rgba(0,0,0,.04);
    `;

    // === HEADER REPLIABLE ===
    const header = document.createElement('div');
    header.className = 'trajet-header';
    header.style.cssText = `
      background:#eef2ff;
      cursor:pointer;
      padding:8px 12px;
      font-weight:600;
      display:flex;
      justify-content:space-between;
      align-items:center;
    `;

    // Calcule les infos du résumé
    let nbGares = trajet.dessertes.length;
    let heureDebut = trajet.dessertes[0]?.heure || "—";
    let heureFin = trajet.dessertes.at(-1)?.heure || "—";
    let duree = "—";

    if (heureDebut !== "—" && heureFin !== "—") {
      const diff = timeToMinutes(heureFin) - timeToMinutes(heureDebut);
      if (diff >= 0) duree = `${diff} min`;
    }

    // === HEADER REPLIABLE ===
    header.innerHTML = `
  <div style="display:flex; flex-direction:column; flex:1;">
    <span style="font-weight:600;">${trajet.nom || '(Trajet sans nom)'}</span>
    <small class="muted">${nbGares} gares — ${heureDebut} → ${heureFin} (${duree})</small>
  </div>
  <span style="font-size:18px; color:#888;">▼</span>
`;


    // === CONTENU ===
    const body = document.createElement('div');
    body.className = 'trajet-body';
    body.style.cssText = `padding:10px 12px; display:none; background:#fff;`;

    if (index === state.current.trajetIndex) {
      body.style.display = 'block'; // ✅ ouvre la card active
    }


    // Table interne (dessertes)
    const tbl = document.createElement('table');
    tbl.className = 'table';
    tbl.innerHTML = `
      <thead><tr>
        <th>#</th><th>Gare</th><th>Arrêt</th><th>Heure</th><th>Jours</th><th></th>
      </tr></thead>
      <tbody></tbody>
    `;
    body.appendChild(tbl);

    // === Actions spécifiques ===
    // === Actions spécifiques ===
    const actions = document.createElement('div');
    actions.className = 'actions';
    actions.innerHTML = `
      <button class="btn btn-ghost btn-mini" data-act="edit">✏️ Modifier</button>
      <button class="btn btn-danger btn-mini" data-act="delete">🗑 Supprimer</button>
    `;

    body.appendChild(actions);

    // === Gestion ouverture/fermeture ===
    header.addEventListener('click', () => {
      const isVisible = body.style.display === 'block';
      body.style.display = isVisible ? 'none' : 'block';
    });

    // === Injection du tableau ===
    trajet.dessertes.forEach((d, i) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${i + 1}</td>
        <td>${d.gare}</td>
        <td class="right">${d.arret ?? state.defaultArretMin}</td>
        <td class="right">${d.heure || '—'}</td>
        <td class="right">${(d.jours || []).join(',') || 'tous'}</td>
        <td class="right"></td>
      `;
      tbl.querySelector('tbody').appendChild(tr);
    });

    // === Actions locales ===
    actions.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const act = e.currentTarget.dataset.act;
        state.current.trajetIndex = index; // focus sur le trajet cliqué
        if (act === 'suggest') {
          suggestHoraires();
        }
        if (act === 'return') {
          genererRetourInverse();
        }
        if (act === 'delete') {
          const trajets = state.current.trajets || [];
          if (trajets.length <= 1) {
            toast("Impossible de supprimer : il doit rester au moins un trajet.", "warn");
            return;
          }
          trajets.splice(index, 1);
          state.current.trajetIndex = Math.max(0, index - 1);
          renderAllTrajets();
          renderDessertes(); // recharge l’éditeur sur le trajet restant
          toast("Trajet supprimé.", "ok");
        }
        if (act === 'edit') {
          state.current.trajetIndex = index;
          const t = state.current.trajets[index];
          $('#trajetNom').value = t.nom || '';
          $('#heureDepart').value = t.dessertes?.[0]?.heure || '08:00';
          renderDessertes();          // recharge la grande table
          toast(`Trajet #${index + 1} chargé pour édition.`, "ok");
        }
      });
    });


    // Injection dans le container
    card.appendChild(header);
    card.appendChild(body);
    container.appendChild(card);
    // quand on clique sur l’en-tête, on rend cette card active aussi :
    header.addEventListener('click', () => {
      // Si on reclique sur la même card, on toggle son affichage
      if (state.current.trajetIndex === index) {
        const currentBody = header.nextElementSibling;
        const visible = currentBody.style.display === 'block';
        currentBody.style.display = visible ? 'none' : 'block';
        return;
      }
      // Sinon, on sélectionne une nouvelle card et on l’ouvre
      state.current.trajetIndex = index;
      renderDessertes();
      renderAllTrajets();
    });
  });
}

/* ============================================================
 * RÉSUMÉ: distance cumulée & temps total
 * ============================================================ */
function renderResumeTrajet() {
  const t = activeTrajet();
  if (!t || t.dessertes.length < 2) {
    $('#distTot').textContent = '— km';
    $('#timeTot').textContent = '— min';
    return;
  }
  let totalMin = 0;
  let totalArret = 0;
  let totalKm = 0;

  for (let i = 0; i < t.dessertes.length - 1; i++) {
    const a = t.dessertes[i], b = t.dessertes[i + 1];
    const g1 = getGare(a.gare), g2 = getGare(b.gare);
    if (!g1 || !g2) continue;

    const path = trouverCheminEntreGares(a.gare, b.gare);

    // km cumulés le long du chemin
    for (let j = 0; j < path.length - 1; j++) {
      totalKm += segmentDistanceKm(path[j], path[j + 1]);
    }

    totalArret += Number(a.arret ?? state.defaultArretMin);
    totalMin += dureeCheminMinutes(path);
  }

  const total = totalMin + totalArret;
  $('#distTot').textContent = `${totalKm.toFixed(1)} km`;
  $('#timeTot').textContent = `${Math.round(total)} min`;
}


/* ============================================================
 * INIT
 * ============================================================ */
async function init() {
  state.current.pays = $('#paysSel').value;
  bindTrainForm();
  bindActions();
  await loadEngins();

  // ► Sélection initiale
  if (!state.current.trajets) state.current.trajets = [];
  if (state.current.trajets.length === 0) {
    state.current.trajets.push(emptyTrajet());
  }
  if (state.current.trajetIndex == null || state.current.trajetIndex < 0) {
    state.current.trajetIndex = 0;           // ► le 1er trajet devient actif
  }

  renderDessertes();                         // ► charge l’éditeur avec ce trajet
  renderAllTrajets();                        // ► affiche les cards avec l’actif
}

// ============================================================
// 🔒 Confirmation avant de quitter ou recharger la page
// ============================================================
window.addEventListener('beforeunload', (event) => {
  // Si au moins un train a été modifié ou ajouté
  if (
    state.current?.trajets?.length > 0 ||
    (state.trainsFR && state.trainsFR.length > 0) ||
    (state.trainsDE && state.trainsDE.length > 0) ||
    (state.trainsCH && state.trainsCH.length > 0)
  ) {
    event.preventDefault();
    event.returnValue = ""; // Nécessaire pour afficher le message système
  }
});


init();
