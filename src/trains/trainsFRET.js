export const trainsFRET = [
  {
    id: "FRT001",
    nom: "BB27000 SNCF",
    moteurs: ["25kV CA", "1.5kV CC"],
    vitesseMax: 100,
    tonnage: 280,
    composition: ["ANF60", "ANF60", "ANF60", "ANF60", "ANF60"],
    trajets: [
      {
        nom: "FRET Mulhouse → Strasbourg",
        dessertes: [
          { gare: "BT Energie France S.A.S", heure: "04:00", arret: 30 },
          { gare: "Strasbourg", heure: "05:50", arret: 45 }
        ]
      },
      {
        nom: "FRET Strasbourg → Mulhouse",
        dessertes: [
          { gare: "Strasbourg", heure: "22:00", arret: 5 },
          { gare: "BT Energie France S.A.S", heure: "23:50", arret: 2 }
        ]
      }
    ]
  }
];
