export const trainsFR = [
  {
    id: "Mulhouse - DE",
    nom: "X73900 TER Alsace",
    moteurs: ["diesel"],
    vitesseMax: 140,
    capacite: { premiere: 0, seconde: 122 },
    composition: ["X73900 TER Alsace"],
    trajets: [
      {
        nom: "Mulhouse → Freiburg (Breisgau) Hauptbahnhof",
        dessertes: [
          { gare: "Mulhouse", heure: "08:00", arret: 4 },
          { gare: "Bantzenheim", heure: "08:25", arret: 1 },
          { gare: "Neuenburg (Baden)", heure: "08:33", arret: 1 },
          { gare: "Muellheim", heure: "08:40", arret: 2 },
          { gare: "Freiburg (Breisgau) Hauptbahnhof", heure: "09:07", arret: 2 }
        ]
      },
      {
        nom: "Freiburg (Breisgau) Hauptbahnhof → Mulhouse",
        dessertes: [
          { gare: "Freiburg (Breisgau) Hauptbahnhof", heure: "11:37", arret: 2 },
          { gare: "Muellheim", heure: "12:04", arret: 2 },
          { gare: "Neuenburg (Baden)", heure: "12:12", arret: 1 },
          { gare: "Bantzenheim", heure: "12:20", arret: 1 },
          { gare: "Mulhouse", heure: "12:42", arret: 4 }
        ]
      },
      {
        nom: "Mulhouse → Muellheim",
        dessertes: [
          { gare: "Mulhouse", heure: "16:12", arret: 4 },
          { gare: "Bantzenheim", heure: "16:37", arret: 1 },
          { gare: "Neuenburg (Baden)", heure: "16:45", arret: 1 },
          { gare: "Muellheim", heure: "16:52", arret: 2 }
        ]
      },
      {
        nom: "Muellheim → Mulhouse",
        dessertes: [
          { gare: "Muellheim", heure: "17:22", arret: 2 },
          { gare: "Neuenburg (Baden)", heure: "17:30", arret: 1 },
          { gare: "Bantzenheim", heure: "17:38", arret: 1 },
          { gare: "Mulhouse", heure: "18:00", arret: 4 }
        ]
      }
    ]
  },

  {
    id: "TER200 - 1",
    nom: "BB26000 GrandEst",
    moteurs: ["25kV CA", "1.5kV CC"],
    vitesseMax: 200,
    capacite: { premiere: 120, seconde: 352 },
    composition: ["VTU A Fluo", "VTU Fluo", "VTU Fluo", "VTU Fluo", "VTU Fluo", "VTU B5uxh FluoGdEst"],
    trajets: [
      {
        nom: "Basel SBB → Strasbourg",
        dessertes: [
          { gare: "Basel SBB", heure: "06:00", arret: 2 },
          { gare: "Saint-Louis", heure: "06:07", arret: 1 },
          { gare: "Mulhouse", heure: "06:28", arret: 2 },
          { gare: "Colmar", heure: "06:53", arret: 2 },
          { gare: "Sélestat", heure: "07:06", arret: 1 },
          { gare: "Strasbourg", heure: "07:33", arret: 2 }
        ]
      },
      {
        nom: "Strasbourg → Basel SBB",
        dessertes: [
          { gare: "Strasbourg", heure: "08:00", arret: 2 },
          { gare: "Sélestat", heure: "08:28", arret: 1 },
          { gare: "Colmar", heure: "08:40", arret: 2 },
          { gare: "Mulhouse", heure: "09:05", arret: 2 },
          { gare: "Saint-Louis", heure: "09:27", arret: 1 },
          { gare: "Basel SBB", heure: "09:33", arret: 2 }
        ]
      },
      {
        nom: "Basel SBB → Strasbourg",
        dessertes: [
          { gare: "Basel SBB", heure: "10:00", arret: 2 },
          { gare: "Saint-Louis", heure: "10:07", arret: 1 },
          { gare: "Mulhouse", heure: "10:28", arret: 2 },
          { gare: "Colmar", heure: "10:53", arret: 2 },
          { gare: "Sélestat", heure: "11:06", arret: 1 },
          { gare: "Strasbourg", heure: "11:33", arret: 2 }
        ]
      },
      {
        nom: "Strasbourg → Basel SBB",
        dessertes: [
          { gare: "Strasbourg", heure: "12:00", arret: 2 },
          { gare: "Sélestat", heure: "12:28", arret: 1 },
          { gare: "Colmar", heure: "12:40", arret: 2 },
          { gare: "Mulhouse", heure: "13:05", arret: 2 },
          { gare: "Saint-Louis", heure: "13:27", arret: 1 },
          { gare: "Basel SBB", heure: "13:33", arret: 2 }
        ]
      },
      {
        nom: "Basel SBB → Strasbourg",
        dessertes: [
          { gare: "Basel SBB", heure: "14:00", arret: 2 },
          { gare: "Saint-Louis", heure: "14:07", arret: 1 },
          { gare: "Mulhouse", heure: "14:28", arret: 2 },
          { gare: "Colmar", heure: "14:53", arret: 2 },
          { gare: "Sélestat", heure: "15:06", arret: 1 },
          { gare: "Strasbourg", heure: "15:33", arret: 2 }
        ]
      },
      {
        nom: "Strasbourg → Basel SBB",
        dessertes: [
          { gare: "Strasbourg", heure: "16:00", arret: 2 },
          { gare: "Sélestat", heure: "16:28", arret: 1 },
          { gare: "Colmar", heure: "16:40", arret: 2 },
          { gare: "Mulhouse", heure: "17:05", arret: 2 },
          { gare: "Saint-Louis", heure: "17:27", arret: 1 },
          { gare: "Basel SBB", heure: "17:33", arret: 2 }
        ]
      },
      {
        nom: "Basel SBB → Strasbourg",
        dessertes: [
          { gare: "Basel SBB", heure: "18:00", arret: 2 },
          { gare: "Saint-Louis", heure: "18:07", arret: 1 },
          { gare: "Mulhouse", heure: "18:28", arret: 2 },
          { gare: "Colmar", heure: "18:53", arret: 2 },
          { gare: "Sélestat", heure: "19:06", arret: 1 },
          { gare: "Strasbourg", heure: "19:33", arret: 2 }
        ]
      },
      {
        nom: "Strasbourg → Basel SBB",
        dessertes: [
          { gare: "Strasbourg", heure: "20:00", arret: 2 },
          { gare: "Sélestat", heure: "20:28", arret: 1 },
          { gare: "Colmar", heure: "20:40", arret: 2 },
          { gare: "Mulhouse", heure: "21:05", arret: 2 },
          { gare: "Saint-Louis", heure: "21:27", arret: 1 },
          { gare: "Basel SBB", heure: "21:33", arret: 2 }
        ]
      }
    ]
  },

  {
    id: "TER200 - 2",
    nom: "BB26000 GrandEst",
    moteurs: ["25kV CA", "1.5kV CC"],
    vitesseMax: 200,
    capacite: { premiere: 60, seconde: 392 },
    composition: ["VTU A Fluo", "VTU Fluo", "VTU Fluo", "VTU Fluo", "VTU Fluo", "VTU B5uxh FluoGdEst"],
    trajets: [
      {
        nom: "Strasbourg → Basel SBB",
        dessertes: [
          { gare: "Strasbourg", heure: "06:00", arret: 2 },
          { gare: "Sélestat", heure: "06:28", arret: 1 },
          { gare: "Colmar", heure: "06:40", arret: 2 },
          { gare: "Mulhouse", heure: "07:05", arret: 2 },
          { gare: "Saint-Louis", heure: "07:27", arret: 1 },
          { gare: "Basel SBB", heure: "07:33", arret: 2 }
        ]
      },
      {
        nom: "Basel SBB → Strasbourg",
        dessertes: [
          { gare: "Basel SBB", heure: "08:00", arret: 2 },
          { gare: "Saint-Louis", heure: "08:07", arret: 1 },
          { gare: "Mulhouse", heure: "08:28", arret: 2 },
          { gare: "Colmar", heure: "08:53", arret: 2 },
          { gare: "Sélestat", heure: "09:06", arret: 1 },
          { gare: "Strasbourg", heure: "09:33", arret: 2 }
        ]
      },
      {
        nom: "Strasbourg → Basel SBB",
        dessertes: [
          { gare: "Strasbourg", heure: "10:00", arret: 2 },
          { gare: "Sélestat", heure: "10:28", arret: 1 },
          { gare: "Colmar", heure: "10:40", arret: 2 },
          { gare: "Mulhouse", heure: "11:05", arret: 2 },
          { gare: "Saint-Louis", heure: "11:27", arret: 1 },
          { gare: "Basel SBB", heure: "11:33", arret: 2 }
        ]
      },
      {
        nom: "Basel SBB → Strasbourg",
        dessertes: [
          { gare: "Basel SBB", heure: "12:00", arret: 2 },
          { gare: "Saint-Louis", heure: "12:07", arret: 1 },
          { gare: "Mulhouse", heure: "12:28", arret: 2 },
          { gare: "Colmar", heure: "12:53", arret: 2 },
          { gare: "Sélestat", heure: "13:06", arret: 1 },
          { gare: "Strasbourg", heure: "13:33", arret: 2 }
        ]
      },
      {
        nom: "Strasbourg → Basel SBB",
        dessertes: [
          { gare: "Strasbourg", heure: "14:00", arret: 2 },
          { gare: "Sélestat", heure: "14:28", arret: 1 },
          { gare: "Colmar", heure: "14:40", arret: 2 },
          { gare: "Mulhouse", heure: "15:05", arret: 2 },
          { gare: "Saint-Louis", heure: "15:27", arret: 1 },
          { gare: "Basel SBB", heure: "15:33", arret: 2 }
        ]
      },
      {
        nom: "Basel SBB → Strasbourg",
        dessertes: [
          { gare: "Basel SBB", heure: "16:00", arret: 2 },
          { gare: "Saint-Louis", heure: "16:07", arret: 1 },
          { gare: "Mulhouse", heure: "16:28", arret: 2 },
          { gare: "Colmar", heure: "16:53", arret: 2 },
          { gare: "Sélestat", heure: "17:06", arret: 1 },
          { gare: "Strasbourg", heure: "17:33", arret: 2 }
        ]
      },
      {
        nom: "Strasbourg → Basel SBB",
        dessertes: [
          { gare: "Strasbourg", heure: "18:00", arret: 2 },
          { gare: "Sélestat", heure: "18:28", arret: 1 },
          { gare: "Colmar", heure: "18:40", arret: 2 },
          { gare: "Mulhouse", heure: "19:05", arret: 2 },
          { gare: "Saint-Louis", heure: "19:27", arret: 1 },
          { gare: "Basel SBB", heure: "19:33", arret: 2 }
        ]
      },
      {
        nom: "Basel SBB → Strasbourg",
        dessertes: [
          { gare: "Basel SBB", heure: "20:00", arret: 2 },
          { gare: "Saint-Louis", heure: "20:07", arret: 1 },
          { gare: "Mulhouse", heure: "20:28", arret: 2 },
          { gare: "Colmar", heure: "20:53", arret: 2 },
          { gare: "Sélestat", heure: "21:06", arret: 1 },
          { gare: "Strasbourg", heure: "21:33", arret: 2 }
        ]
      }
    ]
  },

  {
    id: "TER200 - 3",
    nom: "BB26000 GrandEst",
    moteurs: ["25kV CA", "1.5kV CC"],
    vitesseMax: 200,
    capacite: { premiere: 60, seconde: 392 },
    composition: ["VTU A Fluo", "VTU Fluo", "VTU Fluo", "VTU Fluo", "VTU Fluo", "VTU B5uxh FluoGdEst"],
    trajets: [
      {
        nom: "Basel SBB → Strasbourg",
        dessertes: [
          { gare: "Basel SBB", heure: "07:00", arret: 2 },
          { gare: "Saint-Louis", heure: "07:07", arret: 1 },
          { gare: "Mulhouse", heure: "07:28", arret: 2 },
          { gare: "Colmar", heure: "07:53", arret: 2 },
          { gare: "Sélestat", heure: "08:06", arret: 1 },
          { gare: "Strasbourg", heure: "08:33", arret: 2 }
        ]
      },
      {
        nom: "Strasbourg → Basel SBB",
        dessertes: [
          { gare: "Strasbourg", heure: "09:00", arret: 2 },
          { gare: "Sélestat", heure: "09:28", arret: 1 },
          { gare: "Colmar", heure: "09:40", arret: 2 },
          { gare: "Mulhouse", heure: "10:05", arret: 2 },
          { gare: "Saint-Louis", heure: "10:27", arret: 1 },
          { gare: "Basel SBB", heure: "10:33", arret: 2 }
        ]
      },
      {
        nom: "Basel SBB → Strasbourg",
        dessertes: [
          { gare: "Basel SBB", heure: "11:00", arret: 2 },
          { gare: "Saint-Louis", heure: "11:07", arret: 1 },
          { gare: "Mulhouse", heure: "11:28", arret: 2 },
          { gare: "Colmar", heure: "11:53", arret: 2 },
          { gare: "Sélestat", heure: "12:06", arret: 1 },
          { gare: "Strasbourg", heure: "12:33", arret: 2 }
        ]
      },
      {
        nom: "Strasbourg → Basel SBB",
        dessertes: [
          { gare: "Strasbourg", heure: "13:00", arret: 2 },
          { gare: "Sélestat", heure: "13:28", arret: 1 },
          { gare: "Colmar", heure: "13:40", arret: 2 },
          { gare: "Mulhouse", heure: "14:05", arret: 2 },
          { gare: "Saint-Louis", heure: "14:27", arret: 1 },
          { gare: "Basel SBB", heure: "14:33", arret: 2 }
        ]
      },
      {
        nom: "Basel SBB → Strasbourg",
        dessertes: [
          { gare: "Basel SBB", heure: "15:00", arret: 2 },
          { gare: "Saint-Louis", heure: "15:07", arret: 1 },
          { gare: "Mulhouse", heure: "15:28", arret: 2 },
          { gare: "Colmar", heure: "15:53", arret: 2 },
          { gare: "Sélestat", heure: "16:06", arret: 1 },
          { gare: "Strasbourg", heure: "16:33", arret: 2 }
        ]
      },
      {
        nom: "Strasbourg → Basel SBB",
        dessertes: [
          { gare: "Strasbourg", heure: "17:00", arret: 2 },
          { gare: "Sélestat", heure: "17:28", arret: 1 },
          { gare: "Colmar", heure: "17:40", arret: 2 },
          { gare: "Mulhouse", heure: "18:05", arret: 2 },
          { gare: "Saint-Louis", heure: "18:27", arret: 1 },
          { gare: "Basel SBB", heure: "18:33", arret: 2 }
        ]
      },
      {
        nom: "Basel SBB → Strasbourg",
        dessertes: [
          { gare: "Basel SBB", heure: "19:00", arret: 2 },
          { gare: "Saint-Louis", heure: "19:07", arret: 1 },
          { gare: "Mulhouse", heure: "19:28", arret: 2 },
          { gare: "Colmar", heure: "19:53", arret: 2 },
          { gare: "Sélestat", heure: "20:06", arret: 1 },
          { gare: "Strasbourg", heure: "20:33", arret: 2 }
        ]
      },
      {
        nom: "Strasbourg → Basel SBB",
        dessertes: [
          { gare: "Strasbourg", heure: "21:00", arret: 2 },
          { gare: "Sélestat", heure: "21:28", arret: 1 },
          { gare: "Colmar", heure: "21:40", arret: 2 },
          { gare: "Mulhouse", heure: "22:05", arret: 2 },
          { gare: "Saint-Louis", heure: "22:27", arret: 1 },
          { gare: "Basel SBB", heure: "22:33", arret: 2 }
        ]
      }
    ]
  },

  {
    id: "TER200 - 4",
    nom: "BB26000 GrandEst",
    moteurs: ["25kV CA", "1.5kV CC"],
    vitesseMax: 200,
    capacite: { premiere: 60, seconde: 392 },
    composition: ["VTU A Fluo", "VTU Fluo", "VTU Fluo", "VTU Fluo", "VTU Fluo", "VTU B5uxh FluoGdEst"],
    trajets: [
      {
        nom: "Strasbourg → Basel SBB",
        dessertes: [
          { gare: "Strasbourg", heure: "07:00", arret: 2 },
          { gare: "Sélestat", heure: "07:28", arret: 1 },
          { gare: "Colmar", heure: "07:40", arret: 2 },
          { gare: "Mulhouse", heure: "08:05", arret: 2 },
          { gare: "Saint-Louis", heure: "08:27", arret: 1 },
          { gare: "Basel SBB", heure: "08:33", arret: 2 }
        ]
      },
      {
        nom: "Basel SBB → Strasbourg",
        dessertes: [
          { gare: "Basel SBB", heure: "09:00", arret: 2 },
          { gare: "Saint-Louis", heure: "09:07", arret: 1 },
          { gare: "Mulhouse", heure: "09:28", arret: 2 },
          { gare: "Colmar", heure: "09:53", arret: 2 },
          { gare: "Sélestat", heure: "10:06", arret: 1 },
          { gare: "Strasbourg", heure: "10:33", arret: 2 }
        ]
      },
      {
        nom: "Strasbourg → Basel SBB",
        dessertes: [
          { gare: "Strasbourg", heure: "11:00", arret: 2 },
          { gare: "Sélestat", heure: "11:28", arret: 1 },
          { gare: "Colmar", heure: "11:40", arret: 2 },
          { gare: "Mulhouse", heure: "12:05", arret: 2 },
          { gare: "Saint-Louis", heure: "12:27", arret: 1 },
          { gare: "Basel SBB", heure: "12:33", arret: 2 }
        ]
      },
      {
        nom: "Basel SBB → Strasbourg",
        dessertes: [
          { gare: "Basel SBB", heure: "13:00", arret: 2 },
          { gare: "Saint-Louis", heure: "13:07", arret: 1 },
          { gare: "Mulhouse", heure: "13:28", arret: 2 },
          { gare: "Colmar", heure: "13:53", arret: 2 },
          { gare: "Sélestat", heure: "14:06", arret: 1 },
          { gare: "Strasbourg", heure: "14:33", arret: 2 }
        ]
      },
      {
        nom: "Strasbourg → Basel SBB",
        dessertes: [
          { gare: "Strasbourg", heure: "15:00", arret: 2 },
          { gare: "Sélestat", heure: "15:28", arret: 1 },
          { gare: "Colmar", heure: "15:40", arret: 2 },
          { gare: "Mulhouse", heure: "16:05", arret: 2 },
          { gare: "Saint-Louis", heure: "16:27", arret: 1 },
          { gare: "Basel SBB", heure: "16:33", arret: 2 }
        ]
      },
      {
        nom: "Basel SBB → Strasbourg",
        dessertes: [
          { gare: "Basel SBB", heure: "17:00", arret: 2 },
          { gare: "Saint-Louis", heure: "17:07", arret: 1 },
          { gare: "Mulhouse", heure: "17:28", arret: 2 },
          { gare: "Colmar", heure: "17:53", arret: 2 },
          { gare: "Sélestat", heure: "18:06", arret: 1 },
          { gare: "Strasbourg", heure: "18:33", arret: 2 }
        ]
      },
      {
        nom: "Strasbourg → Basel SBB",
        dessertes: [
          { gare: "Strasbourg", heure: "19:00", arret: 2 },
          { gare: "Sélestat", heure: "19:28", arret: 1 },
          { gare: "Colmar", heure: "19:40", arret: 2 },
          { gare: "Mulhouse", heure: "20:05", arret: 2 },
          { gare: "Saint-Louis", heure: "20:27", arret: 1 },
          { gare: "Basel SBB", heure: "20:33", arret: 2 }
        ]
      },
      {
        nom: "Basel SBB → Strasbourg",
        dessertes: [
          { gare: "Basel SBB", heure: "21:00", arret: 2 },
          { gare: "Saint-Louis", heure: "21:07", arret: 1 },
          { gare: "Mulhouse", heure: "21:28", arret: 2 },
          { gare: "Colmar", heure: "21:53", arret: 2 },
          { gare: "Sélestat", heure: "22:06", arret: 1 },
          { gare: "Strasbourg", heure: "22:33", arret: 2 }
        ]
      }
    ]
  },

  {
    id: "TER2011",
    nom: "AGC blueAlsace 4C",
    moteurs: ["25kV CA", "1.5kV CC"],
    vitesseMax: 160,
    capacite: { premiere: 24, seconde: 183 },
    trajets: [
      {
        nom: "Basel SBB → Mulhouse",
        dessertes: [
          { gare: "Basel SBB", heure: "07:15", arret: 4 },
          { gare: "Bâle Saint-Jean", heure: "07:22", arret: 2 },
          { gare: "Saint-Louis", heure: "07:26", arret: 3 },
          { gare: "Aéroport Bâle-Mulhouse Terminal", heure: "07:32", arret: 4 },
          { gare: "Bartenheim", heure: "07:40", arret: 2 },
          { gare: "Sierentz", heure: "07:45", arret: 2 },
          { gare: "Habsheim", heure: "07:53", arret: 2 },
          { gare: "Mulhouse", heure: "08:03", arret: 4 }
        ]
      },
      {
        nom: "Mulhouse → Basel SBB",
        dessertes: [
          { gare: "Mulhouse", heure: "08:33", arret: 4 },
          { gare: "Habsheim", heure: "08:41", arret: 2 },
          { gare: "Sierentz", heure: "08:49", arret: 2 },
          { gare: "Bartenheim", heure: "08:54", arret: 2 },
          { gare: "Aéroport Bâle-Mulhouse Terminal", heure: "09:00", arret: 4 },
          { gare: "Saint-Louis", heure: "09:07", arret: 3 },
          { gare: "Bâle Saint-Jean", heure: "09:12", arret: 2 },
          { gare: "Basel SBB", heure: "09:17", arret: 4 }
        ]
      },
      {
        nom: "Basel SBB → Mulhouse",
        dessertes: [
          { gare: "Basel SBB", heure: "11:52", arret: 4 },
          { gare: "Bâle Saint-Jean", heure: "11:59", arret: 2 },
          { gare: "Saint-Louis", heure: "12:03", arret: 3 },
          { gare: "Aéroport Bâle-Mulhouse Terminal", heure: "12:09", arret: 4 },
          { gare: "Bartenheim", heure: "12:17", arret: 2 },
          { gare: "Sierentz", heure: "12:22", arret: 2 },
          { gare: "Habsheim", heure: "12:30", arret: 2 },
          { gare: "Mulhouse", heure: "12:40", arret: 4 }
        ]
      },
      {
        nom: "Mulhouse → Basel SBB",
        dessertes: [
          { gare: "Mulhouse", heure: "13:05", arret: 4 },
          { gare: "Habsheim", heure: "13:17", arret: 2 },
          { gare: "Sierentz", heure: "13:25", arret: 2 },
          { gare: "Bartenheim", heure: "13:30", arret: 2 },
          { gare: "Aéroport Bâle-Mulhouse Terminal", heure: "13:36", arret: 4 },
          { gare: "Saint-Louis", heure: "13:43", arret: 3 },
          { gare: "Bâle Saint-Jean", heure: "13:48", arret: 2 },
          { gare: "Basel SBB", heure: "13:53", arret: 4 }
        ]
      },
      {
        nom: "Basel SBB → Mulhouse",
        dessertes: [
          { gare: "Basel SBB", heure: "16:23", arret: 4 },
          { gare: "Bâle Saint-Jean", heure: "16:30", arret: 2 },
          { gare: "Saint-Louis", heure: "16:34", arret: 3 },
          { gare: "Aéroport Bâle-Mulhouse Terminal", heure: "16:40", arret: 4 },
          { gare: "Bartenheim", heure: "16:48", arret: 2 },
          { gare: "Sierentz", heure: "16:53", arret: 2 },
          { gare: "Habsheim", heure: "17:01", arret: 2 },
          { gare: "Mulhouse", heure: "17:11", arret: 4 }
        ]
      },
      {
        nom: "Mulhouse → Basel SBB",
        dessertes: [
          { gare: "Mulhouse", heure: "17:41", arret: 4 },
          { gare: "Habsheim", heure: "17:53", arret: 2 },
          { gare: "Sierentz", heure: "18:01", arret: 2 },
          { gare: "Bartenheim", heure: "18:06", arret: 2 },
          { gare: "Aéroport Bâle-Mulhouse Terminal", heure: "18:12", arret: 4 },
          { gare: "Saint-Louis", heure: "18:19", arret: 3 },
          { gare: "Bâle Saint-Jean", heure: "18:24", arret: 2 },
          { gare: "Basel SBB", heure: "18:29", arret: 4 }
        ]
      }
    ]
  },

  {
    id: "TER2012",
    nom: "Regiolis blueFluoEurope 4C",
    moteurs: ["25kV CA", "1.5kV CC", "diesel"],
    vitesseMax: 160,
    capacite: { premiere: 24, seconde: 210 },
    trajets: [
      {
        nom: "Mulhouse → Belfort-Ville",
        dessertes: [
          { gare: "Mulhouse", heure: "07:58", arret: 4 },
          { gare: "Flaxlanden", heure: "08:07", arret: 1 },
          { gare: "Illfurth", heure: "08:11", arret: 1 },
          { gare: "Altkirch", heure: "08:17", arret: 2 },
          { gare: "Dannemarie", heure: "08:27", arret: 2 },
          { gare: "Montreux-Vieux", heure: "08:36", arret: 1 },
          { gare: "Petit-Croix", heure: "08:39", arret: 1 },
          { gare: "Belfort-Ville", heure: "08:50", arret: 0 }
        ]
      },
      {
        nom: "Belfort-Ville → Mulhouse",
        dessertes: [
          { gare: "Belfort-Ville", heure: "11:00", arret: 4 },
          { gare: "Petit-Croix", heure: "11:14", arret: 1 },
          { gare: "Montreux-Vieux", heure: "11:17", arret: 1 },
          { gare: "Dannemarie", heure: "11:25", arret: 2 },
          { gare: "Altkirch", heure: "11:35", arret: 2 },
          { gare: "Illfurth", heure: "11:42", arret: 1 },
          { gare: "Flaxlanden", heure: "11:46", arret: 1 },
          { gare: "Mulhouse", heure: "11:52", arret: 0 }
        ]
      },
      {
        nom: "Mulhouse → Belfort-Ville",
        dessertes: [
          { gare: "Mulhouse", heure: "15:58", arret: 4 },
          { gare: "Flaxlanden", heure: "16:07", arret: 1 },
          { gare: "Illfurth", heure: "16:11", arret: 1 },
          { gare: "Altkirch", heure: "16:17", arret: 2 },
          { gare: "Dannemarie", heure: "16:27", arret: 2 },
          { gare: "Montreux-Vieux", heure: "16:36", arret: 1 },
          { gare: "Petit-Croix", heure: "16:39", arret: 1 },
          { gare: "Belfort-Ville", heure: "16:50", arret: 0 }
        ]
      },
      {
        nom: "Belfort-Ville → Mulhouse",
        dessertes: [
          { gare: "Belfort-Ville", heure: "19:00", arret: 4 },
          { gare: "Petit-Croix", heure: "19:14", arret: 1 },
          { gare: "Montreux-Vieux", heure: "19:17", arret: 1 },
          { gare: "Dannemarie", heure: "19:25", arret: 2 },
          { gare: "Altkirch", heure: "19:35", arret: 2 },
          { gare: "Illfurth", heure: "19:42", arret: 1 },
          { gare: "Flaxlanden", heure: "19:46", arret: 1 },
          { gare: "Mulhouse", heure: "19:52", arret: 0 }
        ]
      }
    ]
  },

  {
    id: "TER2055",
    nom: "AGC Alsace 3C",
    moteurs: ["diesel"],
    vitesseMax: 160,
    capacite: { premiere: 24, seconde: 134 },
    trajets: [
      {
        nom: "Metzeral → Colmar",
        dessertes: [
          { gare: "Metzeral", heure: "07:00", arret: 1 },
          { gare: "Muhlbach-sur-Munster", heure: "07:04", arret: 1 },
          { gare: "Munster", heure: "07:12", arret: 1 },
          { gare: "Wihr-au-Val - Soultzbach", heure: "07:22", arret: 1 },
          { gare: "Turckheim", heure: "07:33", arret: 1 },
          { gare: "Logelbach", heure: "07:40", arret: 1 },
          { gare: "Colmar", heure: "07:45", arret: 1 }
        ]
      },
      {
        nom: "Colmar → Metzeral",
        dessertes: [
          { gare: "Colmar", heure: "08:15", arret: 1 },
          { gare: "Logelbach", heure: "08:20", arret: 1 },
          { gare: "Turckheim", heure: "08:27", arret: 1 },
          { gare: "Wihr-au-Val - Soultzbach", heure: "08:38", arret: 1 },
          { gare: "Munster", heure: "08:48", arret: 1 },
          { gare: "Muhlbach-sur-Munster", heure: "08:56", arret: 1 },
          { gare: "Metzeral", heure: "09:00", arret: 1 }
        ]
      },
      {
        nom: "Metzeral → Colmar",
        dessertes: [
          { gare: "Metzeral", heure: "11:30", arret: 1 },
          { gare: "Muhlbach-sur-Munster", heure: "11:34", arret: 1 },
          { gare: "Munster", heure: "11:42", arret: 1 },
          { gare: "Wihr-au-Val - Soultzbach", heure: "11:52", arret: 1 },
          { gare: "Turckheim", heure: "12:03", arret: 1 },
          { gare: "Logelbach", heure: "12:10", arret: 1 },
          { gare: "Colmar", heure: "12:15", arret: 1 }
        ]
      },
      {
        nom: "Colmar → Metzeral",
        dessertes: [
          { gare: "Colmar", heure: "12:45", arret: 1 },
          { gare: "Logelbach", heure: "12:50", arret: 1 },
          { gare: "Turckheim", heure: "12:57", arret: 1 },
          { gare: "Wihr-au-Val - Soultzbach", heure: "13:08", arret: 1 },
          { gare: "Munster", heure: "13:18", arret: 1 },
          { gare: "Muhlbach-sur-Munster", heure: "13:26", arret: 1 },
          { gare: "Metzeral", heure: "13:30", arret: 1 }
        ]
      },
      {
        nom: "Metzeral → Colmar",
        dessertes: [
          { gare: "Metzeral", heure: "15:00", arret: 1 },
          { gare: "Muhlbach-sur-Munster", heure: "15:04", arret: 1 },
          { gare: "Munster", heure: "15:12", arret: 1 },
          { gare: "Wihr-au-Val - Soultzbach", heure: "15:22", arret: 1 },
          { gare: "Turckheim", heure: "15:33", arret: 1 },
          { gare: "Logelbach", heure: "15:40", arret: 1 },
          { gare: "Colmar", heure: "15:45", arret: 1 }
        ]
      },
      {
        nom: "Colmar → Metzeral",
        dessertes: [
          { gare: "Colmar", heure: "16:20", arret: 1 },
          { gare: "Logelbach", heure: "16:25", arret: 1 },
          { gare: "Turckheim", heure: "16:32", arret: 1 },
          { gare: "Wihr-au-Val - Soultzbach", heure: "16:43", arret: 1 },
          { gare: "Munster", heure: "16:53", arret: 1 },
          { gare: "Muhlbach-sur-Munster", heure: "17:01", arret: 1 },
          { gare: "Metzeral", heure: "17:05", arret: 1 }
        ]
      }
    ]
  },

  {
    id: "TER700",
    nom: "AGC blueAlsace 4C",
    moteurs: ["25kV CA", "1.5kV CC"],
    vitesseMax: 160,
    capacite: { premiere: 24, seconde: 183 },
    trajets: [
      {
        nom: "Haguenau → Strasbourg",
        dessertes: [
          { gare: "Haguenau", heure: "07:30", arret: 3 },
          { gare: "Marienthal", heure: "07:37", arret: 1 },
          { gare: "Bischwiller", heure: "07:41", arret: 1 },
          { gare: "Kurtzenhouse", heure: "07:46", arret: 1 },
          { gare: "Weyersheim", heure: "07:49", arret: 1 },
          { gare: "Hoerdt", heure: "07:52", arret: 1 },
          { gare: "Strasbourg", heure: "08:03", arret: 2 }
        ]
      },
      {
        nom: "Strasbourg → Haguenau",
        dessertes: [
          { gare: "Strasbourg", heure: "08:33", arret: 2 },
          { gare: "Hoerdt", heure: "08:45", arret: 1 },
          { gare: "Weyersheim", heure: "08:48", arret: 1 },
          { gare: "Kurtzenhouse", heure: "08:51", arret: 1 },
          { gare: "Bischwiller", heure: "08:56", arret: 1 },
          { gare: "Marienthal", heure: "09:00", arret: 1 },
          { gare: "Haguenau", heure: "09:05", arret: 3 }
        ]
      },
      {
        nom: "Haguenau → Strasbourg",
        dessertes: [
          { gare: "Haguenau", heure: "11:35", arret: 3 },
          { gare: "Marienthal", heure: "11:42", arret: 1 },
          { gare: "Bischwiller", heure: "11:46", arret: 1 },
          { gare: "Kurtzenhouse", heure: "11:51", arret: 1 },
          { gare: "Weyersheim", heure: "11:54", arret: 1 },
          { gare: "Hoerdt", heure: "11:57", arret: 1 },
          { gare: "Strasbourg", heure: "12:08", arret: 2 }
        ]
      },
      {
        nom: "Strasbourg → Haguenau",
        dessertes: [
          { gare: "Strasbourg", heure: "12:38", arret: 2 },
          { gare: "Hoerdt", heure: "12:50", arret: 1 },
          { gare: "Weyersheim", heure: "12:53", arret: 1 },
          { gare: "Kurtzenhouse", heure: "12:56", arret: 1 },
          { gare: "Bischwiller", heure: "13:01", arret: 1 },
          { gare: "Marienthal", heure: "13:05", arret: 1 },
          { gare: "Haguenau", heure: "13:10", arret: 3 }
        ]
      },
      {
        nom: "Haguenau → Strasbourg",
        dessertes: [
          { gare: "Haguenau", heure: "16:40", arret: 3 },
          { gare: "Marienthal", heure: "16:47", arret: 1 },
          { gare: "Bischwiller", heure: "16:51", arret: 1 },
          { gare: "Kurtzenhouse", heure: "16:56", arret: 1 },
          { gare: "Weyersheim", heure: "16:59", arret: 1 },
          { gare: "Hoerdt", heure: "17:02", arret: 1 },
          { gare: "Strasbourg", heure: "17:13", arret: 2 }
        ]
      },
      {
        nom: "Strasbourg → Haguenau",
        dessertes: [
          { gare: "Strasbourg", heure: "17:43", arret: 2 },
          { gare: "Hoerdt", heure: "17:55", arret: 1 },
          { gare: "Weyersheim", heure: "17:58", arret: 1 },
          { gare: "Kurtzenhouse", heure: "18:01", arret: 1 },
          { gare: "Bischwiller", heure: "18:06", arret: 1 },
          { gare: "Marienthal", heure: "18:10", arret: 1 },
          { gare: "Haguenau", heure: "18:15", arret: 3 }
        ]
      }
    ]
  }
];
