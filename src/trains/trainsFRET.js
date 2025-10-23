export const trainsFRET = [
  {
    id: "FRT001",
    nom: "BB27000 SNCF",
    moteurs: ["25kV CA", "1.5kV CC"],
    vitesseMax: 100,
    tonnage: 560,
    composition: ["ANF60", "ANF60", "ANF60", "ANF60", "ANF60", "ANF60", "ANF60", "ANF60", "ANF60", "ANF60"],
    trajets: [
      {
        nom: "BT Energie France S.A.S → Strasbourg",
        dessertes: [
          { gare: "BT Energie France S.A.S", heure: "04:00", arret: 30, jours: ["MA", "VE", "SA"] },
          { gare: "Strasbourg", heure: "06:08", arret: 45, jours: ["MA", "VE", "SA"] }
        ]
      },
      {
        nom: "Strasbourg → BT Energie France S.A.S",
        dessertes: [
          { gare: "Strasbourg", heure: "22:00", arret: 5, jours: ["MA", "VE", "SA"] },
          { gare: "BT Energie France S.A.S", heure: "23:43", arret: 2, jours: ["MA", "VE", "SA"] }
        ]
      }
    ]
  }
];
