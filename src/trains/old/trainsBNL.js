export const trainsBNL = [
  {
    id: "Test",
    nom: "2300 CFL",
    moteurs: ["25kV CA", "15kV CA"],
    vitesseMax: 160,
    capacite: { premiere: 88, seconde: 400 },
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
          { gare: "Basel Bad Bf", heure: "08:48", arret: 2 },
          { gare: "Basel SBB", heure: "08:56", arret: 0 }
        ]
      }
    ]
  }
];
