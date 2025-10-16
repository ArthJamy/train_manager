export const trainsDE = [
  {
    id: "BR BW1001",
    nom: "BR1462 bwegt",
    moteurs: ["25kV CA", "15kV CA"],
    vitesseMax: 160,
    capacite: { premiere: 80, seconde: 360 },
    trajets: [
      {
        nom: "Mulhouse → Freiburg (Breisgau) Hauptbahnhof",
        dessertes: [
          { gare: "Mulhouse", heure: "08:30", arret: 4 },
          { gare: "Bantzenheim", heure: "08:45", arret: 1 },
          { gare: "Neuenburg (Baden)", heure: "08:55", arret: 1 },
          { gare: "Muellheim", heure: "09:02", arret: 2 },
          { gare: "Freiburg (Breisgau) Hauptbahnhof", heure: "09:20", arret: 0 },
        ]
      },
      {
        nom: "Freiburg (Breisgau) Hauptbahnhof → Mulhouse",
        dessertes: [
          { gare: "Freiburg (Breisgau) Hauptbahnhof", heure: "11:55", arret: 3 }, 
          { gare: "Muellheim", heure: "12:15", arret: 4 },
          { gare: "Neuenburg (Baden)", heure: "12:22", arret: 1 },
          { gare: "Bantzenheim", heure: "12:30", arret: 1 },
          { gare: "Mulhouse", heure: "12:50", arret: 2 }       
        ]
      }
    ]
  },
  {
    id: "BR BW1002",
    nom: "BR1462 bwegt",
    moteurs: ["25kV CA", "15kV CA"],
    vitesseMax: 160,
    capacite: { premiere: 80, seconde: 360 },

    trajets: [
      {
        nom: "Mulhouse → Muellheim",
        dessertes: [
          { gare: "Mulhouse", heure: "08:30", arret: 4 ,jours: ["MA", "VE"]},
          { gare: "Bantzenheim", heure: "08:45", arret: 1 ,jours: ["MA", "VE"]},
          { gare: "Neuenburg (Baden)", heure: "08:55", arret: 1 ,jours: ["MA", "VE"]},
          { gare: "Muellheim", heure: "09:02", arret: 0 ,jours: ["MA", "VE"]}
        ]
      },
      {
        nom: "Muellheim → Mulhouse",
        dessertes: [
          { gare: "Muellheim", heure: "12:15", arret: 4 ,jours: ["MA", "VE"]},
          { gare: "Neuenburg (Baden)", heure: "12:22", arret: 1 ,jours: ["MA", "VE"]},
          { gare: "Bantzenheim", heure: "12:30", arret: 1 ,jours: ["MA", "VE"]},
          { gare: "Mulhouse", heure: "12:50", arret: 0,jours: ["MA", "VE"] }
        ]
      }
    ]
  },
  {
    id: "BR BW1050",
    nom: "BR1462 bwegt",
    moteurs: ["25kV CA", "15kV CA"],
    vitesseMax: 160,
    capacite: { premiere: 80, seconde: 360 },

    trajets: [
      {
        nom: "Offenburg → Muellheim",
        dessertes: [
          { gare: "Offenburg", heure: "08:20", arret: 4 },
          { gare: "Freiburg (Breisgau) Hauptbahnhof", heure: "08:45", arret: 2 },
          { gare: "Muellheim", heure: "09:00", arret: 0 }
        ]
      },
      {
        nom: "Muellheim → Offenburg",
        dessertes: [
          { gare: "Muellheim", heure: "16:11", arret: 4 },
          { gare: "Freiburg (Breisgau) Hauptbahnhof", heure: "16:25", arret: 2 },
          { gare: "Offenburg", heure: "16:50", arret: 0 }
        ]
      }
    ]
  }

];
