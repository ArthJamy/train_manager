export const trainsFR = [
  {
    id: "TER2001",
    nom: "Regiolis fluoGrandEst 5C",
    moteurs: ["25kV CA", "1.5kV CC"],
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
    moteurs: ["25kV CA", "1.5kV CC", "15kV CA"],
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
    moteurs: ["25kV CA", "1.5kV CC"],
    vitesseMax: 160,
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
    moteurs: ["25kV CA", "1.5kV CC"],
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
  },
  {
    id: "TER2012",
    nom: "Regiolis blueFluoEurope 4C",
    moteurs: ["25kV CA", "1.5kV CC"],
    vitesseMax: 160,
    capacite: {
      premiere: 24,
      seconde: 210
    },
    trajets: [
      {
        nom: "Mulhouse → Belfort-Ville",
            dessertes: [
      { gare: "Mulhouse", heure: "07:58", arret: 4 },
      { gare: "Flaxlanden", heure: "08:05", arret: 1 },
      { gare: "Illfurth", heure: "08:09", arret: 1 },
      { gare: "Altkirch", heure: "08:13", arret: 2 },
      { gare: "Dannemarie", heure: "08:20", arret: 2 },
      { gare: "Montreux-Vieux", heure: "08:26", arret: 1 },
      { gare: "Petit-Croix", heure: "08:29", arret: 1 },
      { gare: "Belfort-Ville", heure: "08:40", arret: 0 },
    ]
      },
      {
        nom: "Belfort-Ville → Mulhouse",
            dessertes: [
      { gare: "Belfort-Ville", heure: "11:00", arret: 4 },
      { gare: "Petit-Croix", heure: "11:10", arret: 1 },
      { gare: "Montreux-Vieux", heure: "11:13", arret: 1 },
      { gare: "Dannemarie", heure: "11:17", arret: 2 },
      { gare: "Altkirch", heure: "11:23", arret: 2 },
      { gare: "Illfurth", heure: "11:29", arret: 1 },
      { gare: "Flaxlanden", heure: "11:33", arret: 1 },
      { gare: "Mulhouse", heure: "11:39", arret: 0 },
    ]
      },
      {
        nom: "Mulhouse → Belfort-Ville",
            dessertes: [
      { gare: "Mulhouse", heure: "15:58", arret: 4 },
      { gare: "Flaxlanden", heure: "16:05", arret: 1 },
      { gare: "Illfurth", heure: "16:09", arret: 1 },
      { gare: "Altkirch", heure: "16:13", arret: 2 },
      { gare: "Dannemarie", heure: "16:20", arret: 2 },
      { gare: "Montreux-Vieux", heure: "16:26", arret: 1 },
      { gare: "Petit-Croix", heure: "16:29", arret: 1 },
      { gare: "Belfort-Ville", heure: "16:40", arret: 0 },
    ]
      },
      {
        nom: "Belfort-Ville → Mulhouse",
            dessertes: [
      { gare: "Belfort-Ville", heure: "19:00", arret: 4 },
      { gare: "Petit-Croix", heure: "19:10", arret: 1 },
      { gare: "Montreux-Vieux", heure: "19:13", arret: 1 },
      { gare: "Dannemarie", heure: "19:17", arret: 2 },
      { gare: "Altkirch", heure: "19:23", arret: 2 },
      { gare: "Illfurth", heure: "19:29", arret: 1 },
      { gare: "Flaxlanden", heure: "19:33", arret: 1 },
      { gare: "Mulhouse", heure: "19:39", arret: 0 },
    ]
      }
    ]
    },
    {
    id: "TGV700",
    nom: "TGVEuroDuplex lyria 8C",
    moteurs: ["25kV CA", "1.5kV CC", "15kV CA"],
    vitesseMax: 320,
    capacite: {
      premiere: 100,
      seconde: 300
    },
    trajets: [
      {
        nom: "Basel SBB → Strasbourg",
        dessertes: [
        { gare: "Basel SBB", heure: "09:15", arret: 3, jours: ["LU","JE", "VE"]},
        { gare: "Mulhouse", heure: "09:35", arret: 3, jours: ["JE", "VE"] },
        { gare: "Strasbourg", heure: "09:55", arret: 0, jours: ["LU","JE", "VE"] }
      ]
      },
      {
        nom: "Strasbourg → Basel SBB",
        dessertes: [
          { gare: "Strasbourg", heure: "20:00", arret: 4, jours: ["LU","JE", "VE"] },
          { gare: "Mulhouse", heure: "20:40", arret: 4, jours: ["JE", "VE"] },
          { gare: "Basel SBB", heure: "20:55", arret: 0, jours: ["LU","JE", "VE"] }
        ]
      },
      {
        nom: "Basel SBB → Strasbourg",
        dessertes: [
        { gare: "Basel SBB", heure: "09:15", arret: 3, jours: ["MA"]},
        { gare: "Strasbourg", heure: "09:55", arret: 0, jours: ["MA"] }
      ]
      },
      {
        nom: "Strasbourg → Basel SBB",
        dessertes: [
          { gare: "Strasbourg", heure: "20:00", arret: 4, jours: ["MA"] },
          { gare: "Basel SBB", heure: "20:55", arret: 0, jours: ["MA"] }
        ]
      }
    ]
  },
    {
    id: "TER700",
    nom: "AGC blueAlsace 4C",
    moteurs: ["25kV CA", "1.5kV CC"],
    vitesseMax: 160,
    capacite: {
      premiere: 30,
      seconde: 160
    },
    trajets: [
      {
        nom: "Mulhouse → Colmar",
            dessertes: [
      { gare: "Mulhouse", heure: "8:32", arret: 3 },
        { gare: "Bollwiller", heure: "8:45", arret: 2 },
        { gare: "Colmar", heure: "9:02", arret: 0 }
    ]
      },
      {
        nom: "Colmar → Mulhouse",
        dessertes: [
          { gare: "Colmar", heure: "16:00", arret: 3 },
          { gare: "Bollwiller", heure: "16:24", arret: 2 },
          { gare: "Mulhouse", heure: "16:34", arret: 0 }
        ]
      }
    ]
  }
];
