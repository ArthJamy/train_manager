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
          { gare: "Selestat", heure: "08:45", arret: 2 },
          { gare: "Strasbourg", heure: "09:05", arret: 0 }
        ]
      },
      {
        nom: "Strasbourg → Mulhouse",
        dessertes: [
          { gare: "Strasbourg", heure: "09:55", arret: 4 },
          { gare: "Selestat", heure: "10:15", arret: 2 },
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
        nom: "Bâle → Strasbourg",
        dessertes: [
        { gare: "Bâle", heure: "06:42", arret: 3 },
        { gare: "Mulhouse", heure: "07:00", arret: 4 },
        { gare: "Strasbourg", heure: "07:45", arret: 0 }
      ]
      },
      {
        nom: "Strasbourg → Bâle",
        dessertes: [
          { gare: "Strasbourg", heure: "09:00", arret: 4 },
          { gare: "Mulhouse", heure: "09:50", arret: 4 },
          { gare: "Bâle", heure: "10:08", arret: 0 }
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
        nom: "Bâle → Colmar",
            dessertes: [
      { gare: "Bâle", heure: "08:15", arret: 3 },
      { gare: "Mulhouse", heure: "08:35", arret: 2 },
      { gare: "Colmar", heure: "09:00", arret: 0 }
    ]
      },
      {
        nom: "Colmar → Bâle",
        dessertes: [
          { gare: "Colmar", heure: "19:00", arret: 4 },
          { gare: "Mulhouse", heure: "19:30", arret: 3 },
          { gare: "Bâle", heure: "19:50", arret: 0 }
        ]
      }
    ]
  },
  {
    id: "TER2011",
    nom: "AGC blueAlsace 4C",
    moteurs: ["Diesel"],
    vitesseMax: 140,
    capacite: {
      premiere: 30,
      seconde: 160
    },
    trajets: [
      {
        nom: "Bâle → Colmar",
            dessertes: [
      { gare: "Bâle", heure: "18:15", arret: 3 },
      { gare: "Mulhouse", heure: "18:33", arret: 2 },
      { gare: "Colmar", heure: "19:00", arret: 0 }
    ]
      },
      {
        nom: "Colmar → Bâle",
        dessertes: [
          { gare: "Colmar", heure: "20:00", arret: 4 },
          { gare: "Mulhouse", heure: "20:30", arret: 3 },
          { gare: "Bâle", heure: "20:50", arret: 0 }
        ]
      },
            {
        nom: "Bâle → Colmar",
            dessertes: [
      { gare: "Bâle", heure: "21:15", arret: 3 },
      { gare: "Mulhouse", heure: "21:33", arret: 2 },
      { gare: "Colmar", heure: "22:00", arret: 0 }
    ]
      },
    ]
  }
];
