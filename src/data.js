export const villes = [
  {
    nom: "Mulhouse",
    x: 120,
    y: 450,
    type: "grande" // "grande" ou "petite"
  },
  {
    nom: "Colmar",
    x: 200,
    y: 400,
    type: "petite"
  },
  {
    nom: "Selestat",
    x: 300,
    y: 380,
    type: "petite"
  },
  {
    nom: "Strasbourg",
    x: 400,
    y: 350,
    type: "grande"
  },
  {
    nom: "Bâle",
    x: 100,
    y: 500,
    type: "grande"
  }
];

export const lignes = [
  {
    gareA: "Mulhouse",
    gareB: "Colmar",
    longueur: 45,
    type: "classique",             // "classique" ou "LGV"
    vitesse_max: 200,              // en km/h
    electrification: "25kV CA",    // ou "15kV CA", "diesel", etc.
    signalisation: "KVB"           // ou "ETCS", "BAL", etc.
  },
  {
    gareA: "Colmar",
    gareB: "Selestat",
    longueur: 75,
    type: "classique",
    vitesse_max: 200,
    electrification: "25kV CA",
    signalisation: "ETCS"
  },
  {
    gareA: "Selestat",
    gareB: "Strasbourg",
    longueur: 75,
    type: "classique",
    vitesse_max: 200,
    electrification: "25kV CA",
    signalisation: "ETCS"
  },

  {
    gareA: "Mulhouse",
    gareB: "Bâle",
    longueur: 32,
    type: "classique",
    vitesse_max: 160,
    electrification: "15kV CA",
    signalisation: "KVB"
  }
];
