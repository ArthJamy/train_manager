export const trains = [
  {
    id: "TER2001",
    nom: "Regiolis fluoGrandEst 5C",
    moteurs: ["25kV CA"],
    vitesseMax: 160,
    capacite: { premiere: 80, seconde: 360 },
    composition: ["Regiolis fluoGrandEst 5C"],

    trajets: [
      {
        nom: "Mulhouse → Strasbourg",
        dessertes: [
          { gare: "Mulhouse", heure: "08:00", arret: 2 },
          { gare: "Colmar", heure: "08:25", arret: 3 },
          { gare: "Sélestat", heure: "08:45", arret: 2 },
          { gare: "Strasbourg", heure: "09:05", arret: 0 }
        ]
      },
      {
        nom: "Strasbourg → Mulhouse",
        dessertes: [
          { gare: "Strasbourg", heure: "09:55", arret: 4 },
          { gare: "Sélestat", heure: "10:15", arret: 2 },
          { gare: "Colmar", heure: "10:35", arret: 3 },
          { gare: "Mulhouse", heure: "11:00", arret: 0 }
        ]
      }
    ]
  },

  {
    id: "TGV100",
    nom: "TGVEuroDuplex lyria 8C",
    moteurs: ["25kV CA", "15kV CA"],
    vitesseMax: 320,
    capacite: {
      premiere: 100,
      seconde: 300
    },
    trajets: [
      {
        nom: "Basel SBB → Strasbourg",
        dessertes: [
        { gare: "Basel SBB", heure: "06:42", arret: 3 },
        { gare: "Mulhouse", heure: "07:00", arret: 4 },
        { gare: "Strasbourg", heure: "07:45", arret: 0 }
      ]
      },
      {
        nom: "Strasbourg → Basel SBB",
        dessertes: [
          { gare: "Strasbourg", heure: "09:00", arret: 4 },
          { gare: "Mulhouse", heure: "09:50", arret: 4 },
          { gare: "Basel SBB", heure: "10:08", arret: 0 }
        ]
      }
    ]
  },
  {
    id: "TER2010",
    nom: "AGC blueAlsace 4C",
    moteurs: ["Diesel"],
    vitesseMax: 140,
    capacite: {
      premiere: 30,
      seconde: 160
    },
    trajets: [
      {
        nom: "Basel SBB → Colmar",
            dessertes: [
      { gare: "Basel SBB", heure: "08:15", arret: 3 },
      { gare: "Mulhouse", heure: "08:35", arret: 2 },
      { gare: "Colmar", heure: "09:00", arret: 0 }
    ]
      },
      {
        nom: "Colmar → Basel SBB",
        dessertes: [
          { gare: "Colmar", heure: "19:00", arret: 4 },
          { gare: "Mulhouse", heure: "19:30", arret: 3 },
          { gare: "Basel SBB", heure: "19:50", arret: 0 }
        ]
      }
    ]
  },
  {
    id: "TER2011",
    nom: "AGC blueAlsace 4C",
    moteurs: ["25kV CA"],
    vitesseMax: 160,
    capacite: {
      premiere: 30,
      seconde: 160
    },
    trajets: [
      {
        nom: "Basel SBB → Mulhouse",
            dessertes: [
      { gare: "Basel SBB", heure: "07:15", arret: 4 },
      { gare: "Bâle Saint-Jean", heure: "07:22", arret: 2 },
      { gare: "Saint-Louis", heure: "07:28", arret: 3 },
      { gare: "Aéroport Bâle-Mulhouse Terminal", heure: "07:34", arret: 4 },
      { gare: "Bartenheim", heure: "07:51", arret: 2 },
      { gare: "Sierentz", heure: "07:57", arret: 2 },
      { gare: "Habsheim", heure: "08:09", arret: 2 },
      { gare: "Mulhouse", heure: "08:18", arret: 0 }
    ]
      },
      {
        nom: "Mulhouse → Basel SBB",
            dessertes: [
      { gare: "Mulhouse", heure: "08:35", arret: 4 },
      { gare: "Habsheim", heure: "08:48", arret: 2 },
      { gare: "Sierentz", heure: "09:02", arret: 2 },
      { gare: "Bartenheim", heure: "09:10", arret: 2 },
      { gare: "Aéroport Bâle-Mulhouse Terminal", heure: "09:25", arret: 4 },
      { gare: "Saint-Louis", heure: "09:33", arret: 3 },
      { gare: "Bâle Saint-Jean", heure: "09:39", arret: 2 },
      { gare: "Basel SBB", heure: "09:44", arret: 0 }
    ]
      },
      {
        nom: "Basel SBB → Mulhouse",
            dessertes: [
      { gare: "Basel SBB", heure: "10:15", arret: 4 },
      { gare: "Bâle Saint-Jean", heure: "10:22", arret: 2 },
      { gare: "Saint-Louis", heure: "10:28", arret: 3 },
      { gare: "Aéroport Bâle-Mulhouse Terminal", heure: "10:34", arret: 4 },
      { gare: "Bartenheim", heure: "10:51", arret: 2 },
      { gare: "Sierentz", heure: "10:57", arret: 2 },
      { gare: "Habsheim", heure: "11:09", arret: 2 },
      { gare: "Mulhouse", heure: "11:18", arret: 0 }
    ]
      },
      {
        nom: "Mulhouse → Basel SBB",
            dessertes: [
      { gare: "Mulhouse", heure: "12:35", arret: 4 },
      { gare: "Habsheim", heure: "12:48", arret: 2 },
      { gare: "Sierentz", heure: "13:02", arret: 2 },
      { gare: "Bartenheim", heure: "13:10", arret: 2 },
      { gare: "Aéroport Bâle-Mulhouse Terminal", heure: "13:25", arret: 4 },
      { gare: "Saint-Louis", heure: "13:33", arret: 3 },
      { gare: "Bâle Saint-Jean", heure: "13:39", arret: 2 },
      { gare: "Basel SBB", heure: "13:44", arret: 0 }
    ]
      },
    ]
  }
];
