export const trainsCH = [
  {
    id: "BR Suisse",
    nom: "BR1462 bwegt",
    moteurs: ["15kV CA"],
    vitesseMax: 160,
    capacite: { premiere: 16, seconde: 394 },
    trajets: [
      {
        nom: "Basel SBB → Weil am Rhein",
        dessertes: [
          { gare: "Basel SBB", heure: "08:00", arret: 2 },
          { gare: "Basel Bad Bf", heure: "08:08", arret: 2 },
          { gare: "Weil am Rhein", heure: "08:13", arret: 0 }
        ]
      },
      {
        nom: "Weil am Rhein → Basel SBB",
        dessertes: [
          { gare: "Weil am Rhein", heure: "08:43", arret: 2 },
          { gare: "Basel Bad Bf", heure: "08:46", arret: 2 },
          { gare: "Basel SBB", heure: "08:54", arret: 0 }
        ]
      }
    ]
  }
];
