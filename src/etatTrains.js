import { trainsFR } from './trainsFR.js';
import { trainsDE } from './trainsDE.js';
export const trains = [...trainsFR, ...trainsDE];

import { villes } from "./gares.js";

// === ETAT DYNAMIQUE DES TRAINS ===
export const etatTrains = [];

/**
 * Calcule le potentiel de ligne (somme des flux des gares desservies aujourd’hui uniquement)
 */
function calculPotentielLigne(train, jourActuel) {
  const garesUniques = new Map();

  train.trajets.forEach(trajet => {
    const jours = trajet.dessertes[0].jours || ["LU","MA","ME","JE","VE","SA","DI"];
    if (!jours.includes(jourActuel)) return;

    trajet.dessertes.forEach(d => {
      const gare = villes.find(v => v.nom === d.gare);
      if (!gare || gare.fantome) return;
      const poids = poidsTypeGare[gare.type] || 0.5;
      garesUniques.set(gare.nom, (gare.fluxPassager || 0) * poids);
    });
  });

  const valeurs = Array.from(garesUniques.values());
  if (valeurs.length === 0) return 0;

  // somme des flux pondérés
  const sommeFlux = valeurs.reduce((a, b) => a + b, 0);

  // correction selon la concentration (moins de gares = flux plus concentré)
  const nbGares = valeurs.length;
  const facteurConcentration = Math.pow(nbGares, 0.25); // adoucit encore plus
  const potentiel = sommeFlux / facteurConcentration;

  return potentiel;
}

// === Données globales de dilution ===
const corridors = {};         // ex: { "Mulhouse|Strasbourg": 8, "Basel|Mulhouse": 5 }
const desserteParGare = {};   // ex: { "Mulhouse": 12, "Colmar": 8 }

function getFacteurDilution(nbTrainsCorridor = 1, nbTrainsGare = 1) {
  const NrefCorridor = 12;
  const NrefGare = 24;
  const betaC = 0.6;
  const betaG = 0.4;
  const minF = 0.35;
  const maxF = 1.10;

  const fCorr = Math.pow(NrefCorridor / Math.max(nbTrainsCorridor, 1), betaC);
  const fGare = Math.pow(NrefGare / Math.max(nbTrainsGare, 1), betaG);
  const f = Math.sqrt(fCorr * fGare);

  return Math.max(minF, Math.min(maxF, f));
}

// Détermine la clé de corridor (début et fin du trajet principal)
function getCorridorKey(train) {
  const trajet = train.trajets[0];
  if (!trajet || !trajet.dessertes?.length) return "INCONNU";

  const start = trajet.dessertes[0].gare;
  const end = trajet.dessertes.at(-1).gare;
  // ordre alphabétique pour que Mulhouse↔Strasbourg = Strasbourg↔Mulhouse
  return [start, end].sort().join("|");
}


/**
 * Détermine un facteur horaire global (modifie la densité de remplissage)
 */
function getFacteurHoraire(heureMinutes) {
  if (heureMinutes < 360) return 0.1;     // 0h–5h59
  if (heureMinutes < 600) return 1.5;     // 6h–9h59
  if (heureMinutes < 960) return 0.7;     // 10h–15h59
  if (heureMinutes < 1140) return 1.3;    // 16h–18h59
  return 0.3;                             // 19h–23h59
}

// Facteur de fréquentation selon le jour de la semaine
// (multiplicateur global appliqué au remplissage et aux montées)
const facteurJourSemaine = {
  LU: 1.0,  // lundi = normal
  MA: 1.05, // mardi
  ME: 1.05, // mercredi
  JE: 1.1,  // jeudi
  VE: 1.15, // vendredi (plus de trafic)
  SA: 0.7,  // samedi
  DI: 0.5   // dimanche
};

// Poids type gare
const poidsTypeGare = {
  grande: 1.0,
  moyenne: 0.7,
  petite: 0.4
};

/**
 * Retourne la somme des flux des gares déjà parcourues dans le trajet actif
 */
function calculFluxDejaParcouru(train, heureActuelle, jourActuel) {
  const hNow = timeToMinutes(heureActuelle);
  let fluxPonderePasse = 0;
  let fluxPondereTotal = 0;

  for (const trajet of train.trajets) {
    const jours = trajet.dessertes[0].jours || ["LU","MA","ME","JE","VE","SA","DI"];
    if (!jours.includes(jourActuel)) continue;

    const dess = trajet.dessertes;
    const debut = timeToMinutes(dess[0].heure);
    const fin = timeToMinutes(dess.at(-1).heure);
    if (hNow < debut || hNow > fin) continue; // pas ce trajet

    dess.forEach(d => {
      const g = villes.find(v => v.nom === d.gare);
      if (!g || g.fantome) return;

      const tGare = timeToMinutes(d.heure);
      const facteurHeureGare = getFacteurHoraire(tGare);
      const facteurJour = facteurJourSemaine[jourActuel] || 1.0;

      // pondération horaire × jour
      const poids = g.fluxPassager * facteurHeureGare * facteurJour;
      fluxPondereTotal += poids;

      if (tGare <= hNow) fluxPonderePasse += poids;
    });
  }

  if (fluxPondereTotal === 0) return 0;
  return fluxPonderePasse / fluxPondereTotal; // ratio [0–1]
}


/**
 * Initialisation de tous les états de trains au démarrage
 */
export function initTrainsState(heureActuelle = "08:00", jourActuel = getJourActuel()) {
  etatTrains.length = 0; // reset complet
  const heureMinutes = timeToMinutes(heureActuelle);
  const facteurHeure = getFacteurHoraire(heureMinutes);
  // --- Comptage du nombre de trains par corridor et par gare ---
  Object.keys(corridors).forEach(k => delete corridors[k]);
  Object.keys(desserteParGare).forEach(k => delete desserteParGare[k]);

  trains.forEach(train => {
    const key = getCorridorKey(train);
    corridors[key] = (corridors[key] || 0) + 1;

    train.trajets.forEach(trajet => {
      trajet.dessertes.forEach(d => {
        desserteParGare[d.gare] = (desserteParGare[d.gare] || 0) + 1;
      });
    });
  });


  trains.forEach(train => {
    const potentiel = calculPotentielLigne(train, jourActuel);
    if (potentiel === 0) return;
    // Normalisation du potentiel selon le nombre de gares (pour éviter dilution sur les longues lignes)
    const nbGares = Math.max(1, new Set(
      train.trajets.flatMap(t => t.dessertes.map(d => d.gare))
    ).size);

    const facteurLongueur = Math.pow(nbGares, 0.35); // racine carrée = normalisation douce
    const potentielNormalise = potentiel / facteurLongueur;

    const ratioParcours = calculFluxDejaParcouru(train, heureActuelle, jourActuel);
    // Si le train a déjà parcouru la moitié du flux prévu, il a déjà monté du monde
    // mais il reste encore des gares importantes à venir

    const facteurJour = facteurJourSemaine[jourActuel] || 1.0;

    // Base : taux entre 0.1 et 0.9 modulé par l’heure et la progression
    const baseTaux = 0.1 + 0.8 * facteurHeure; // 0.1–1.3 approx
    // on diminue si peu de flux encore traversé (ex : départ tôt)
    const ajustement = Math.min(1, ratioParcours + 0.3); // évite 0 total au départ

    const alea = rand(0.85, 1.15);

    // === DILUTION : en fonction du nombre de trains sur le même corridor et de la gare de départ ===
    const corridorKey = getCorridorKey(train); // on va définir cette fonction juste après
    const nbTrainsCorridor = corridors[corridorKey] || 1;

    // Gare de départ = première gare du trajet du jour
    const gareDepart = train.trajets[0]?.dessertes[0]?.gare;
    const nbTrainsGare = desserteParGare[gareDepart] || 1;

    // Calcul du facteur de dilution (entre 0.35 et 1.1 environ)
    const facteurDilution = getFacteurDilution(nbTrainsCorridor, nbTrainsGare);

    const tauxRemplissage = Math.max(
      0.1,
      Math.min(1, baseTaux * ajustement * 0.85 * facteurJour * alea * facteurDilution)
    );




    const capPrem = train.capacite?.premiere || 0;
    const capSec = train.capacite?.seconde || 0;
    const capTotale = capPrem + capSec;

    // Taux global de remplissage
    const occTotale = Math.round(capTotale * tauxRemplissage);

    // Répartition réaliste (selon parts de capacité)
    let occPrem = 0;
    let occSec = 0;

    if (capTotale > 0) {
      // proportion réelle de la 1ʳᵉ dans le train (ex : 20 places sur 200 = 10 %)
      const ratioPrem = capPrem / capTotale;
      occPrem = Math.round(occTotale * ratioPrem);
      occSec = occTotale - occPrem;

      // bornes (par sécurité)
      occPrem = Math.min(occPrem, capPrem);
      occSec = Math.min(occSec, capSec);
    }

    
    etatTrains.push({
      id: train.id,
      potentielLigne: potentielNormalise,
      occupants: { premiere: occPrem, seconde: occSec },
      tauxRemplissage,
      derniereGare: null
    });
  });

  console.log(`[Init] ${etatTrains.length} trains initialisés avec leur taux de remplissage.`);
}

/**
 * Mise à jour du nombre de passagers à chaque arrêt
 */
export function majOccupants(train, gareNom, heureActuelle) {
  const etat = etatTrains.find(e => e.id === train.id);
  if (!etat) return;

  const gare = villes.find(v => v.nom === gareNom);
  if (!gare || gare.fantome) return;

  const hNow = timeToMinutes(heureActuelle);
  const facteur = getFacteurHoraire(hNow);

  const jourActuel = getJourActuel();
  const facteurJour = facteurJourSemaine[jourActuel] || 1.0;

  const base = 200; // constante globale (ajuste le volume global)
  const ratio = gare.fluxPassager / etat.potentielLigne;

  
  // Recalcul du facteur de dilution pour ce train et cette gare
  const corridorKey = getCorridorKey(train);
  const nbTrainsCorridor = corridors[corridorKey] || 1;
  const nbTrainsGareCourante = desserteParGare[gareNom] || 1;

  const fDilution = getFacteurDilution(nbTrainsCorridor, nbTrainsGareCourante);

  const montees = Math.round(base * ratio * facteur * facteurJour * fDilution * rand(0.8, 1.2));

  const desc = Math.round(
    (etat.occupants.seconde + etat.occupants.premiere) *
    (gare.type === "grande" ? 0.15 : gare.type === "moyenne" ? 0.1 : 0.05) *
    rand(0.8, 1.2)
  );


  const capPrem = train.capacite?.premiere || 0;
  const capSec = train.capacite?.seconde || 0;

  // Répartition des montées par classe 
  const monteesPrem = Math.round(montees * 0.12);
  const monteesSec = Math.round(montees * 0.88);

  // --- util ---
  function repartitionProportionnelle(part, total, quantite) {
    if (total <= 0 || quantite <= 0) return 0;
    const x = Math.round((part / total) * quantite);
    // bornage pour éviter > part si quantite > total (sécurité descente)
    return Math.max(0, Math.min(x, quantite));
  }

  // === Répartition des descendus (bornée par occupants actuels) ===
  const totalAvant = etat.occupants.premiere + etat.occupants.seconde;
  let descPrem = repartitionProportionnelle(etat.occupants.premiere, totalAvant, desc);
  let descSec = desc - descPrem;

  // on ne peut pas faire descendre plus que présent
  descPrem = Math.min(descPrem, etat.occupants.premiere);
  descSec = Math.min(descSec, etat.occupants.seconde);

  // Occupation après descentes
  let occPrem = etat.occupants.premiere - descPrem;
  let occSec = etat.occupants.seconde - descSec;

  // === Montées avec priorités capacités ===
  // 1) On tente de faire monter en 1ʳᵉ, puis surplus -> 2ᵉ
  const placePrem = Math.max(0, capPrem - occPrem);
  const embarqPrem = Math.min(monteesPrem, placePrem);
  const surplusPremVersSec = Math.max(0, monteesPrem - embarqPrem);

  // 2) En 2ᵉ : ses propres montées + surplus venu de 1ʳᵉ
  const placeSec = Math.max(0, capSec - occSec);
  const demandeSecTotale = monteesSec + surplusPremVersSec;
  const embarqSec = Math.min(demandeSecTotale, placeSec);
  const refuses = Math.max(0, demandeSecTotale - embarqSec); // si tout est plein

  // MàJ occupants
  occPrem += embarqPrem;
  occSec += embarqSec;

  // Garanties “hard” (devraient déjà être vraies)
  occPrem = Math.min(capPrem, Math.max(0, occPrem));
  occSec = Math.min(capSec, Math.max(0, occSec));

  // Taux
  const total = occPrem + occSec;
  const tauxReel = (capPrem + capSec) > 0 ? total / (capPrem + capSec) : 0;

  // État
  etat.occupants.premiere = occPrem;
  etat.occupants.seconde = occSec;
  etat.tauxRemplissage = tauxReel;
  etat.derniereGare = gareNom;
  etat.refuses = refuses; // utile pour stats/UX

}

/** UTILITAIRES **/
function rand(min, max) { return Math.random() * (max - min) + min; }

function timeToMinutes(h) {
  const [hr, mn] = h.split(":").map(Number);
  return hr * 60 + mn;
}

function getJourActuel() {
  const joursSemaine = ["DI", "LU", "MA", "ME", "JE", "VE", "SA"];
  const now = new Date();
  const jourIndex = new Date(now.toLocaleString("en-US", { timeZone: "Europe/Paris" })).getDay();
  return joursSemaine[jourIndex];
}
