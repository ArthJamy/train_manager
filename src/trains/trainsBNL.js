export const trainsBNL = [
  {
    id: "CFL 101",
    nom: "2300 CFL",
    moteurs: ["25kV CA", "15kV CA"],
    vitesseMax: 160,
    capacite: { premiere: 38, seconde: 254 },
    trajets: [
      {
        nom: "Luxembourg → Thionville",
        dessertes: [
          { gare: "Luxembourg", heure: "07:20", arret: 2 },
          { gare: "Howald", heure: "07:24", arret: 1 },
          { gare: "Berchem", heure: "07:29", arret: 1 },
          { gare: "Bettembourg", heure: "07:33", arret: 1 },
          { gare: "Hettange-Grande", heure: "07:43", arret: 1 },
          { gare: "Thionville", heure: "07:48", arret: 2 }
        ]
      },
      {
        nom: "Thionville → Luxembourg",
        dessertes: [
          { gare: "Thionville", heure: "08:18", arret: 2 },
          { gare: "Hettange-Grande", heure: "08:24", arret: 1 },
          { gare: "Bettembourg", heure: "08:34", arret: 1 },
          { gare: "Berchem", heure: "08:38", arret: 1 },
          { gare: "Howald", heure: "08:43", arret: 1 },
          { gare: "Luxembourg", heure: "08:46", arret: 2 }
        ]
      }
    ]
  },

  {
    id: "CFL 102",
    nom: "2300 CFL",
    moteurs: ["25kV CA", "15kV CA"],
    vitesseMax: 160,
    capacite: { premiere: 38, seconde: 254 },
    trajets: [
      {
        nom: "Metz → Luxembourg",
        dessertes: [
          { gare: "Metz", heure: "07:00", arret: 2 },
          { gare: "Thionville", heure: "07:21", arret: 1 },
          { gare: "Luxembourg", heure: "07:41", arret: 2 }
        ]
      },
      {
        nom: "Luxembourg → Metz",
        dessertes: [
          { gare: "Luxembourg", heure: "08:11", arret: 2 },
          { gare: "Thionville", heure: "08:30", arret: 1 },
          { gare: "Metz", heure: "08:50", arret: 2 }
        ]
      }
    ]
  }
];
