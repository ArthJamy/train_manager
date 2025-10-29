export const trainsDE = [
  {
    id: "BR BW1001",
    nom: "BR442.2 Baden-Württemberg",
    moteurs: ["15kV CA"],
    vitesseMax: 160,
    capacite: { premiere: 8, seconde: 242 },
    trajets: [
      {
        nom: "Offenburg → Freiburg (Breisgau) Hauptbahnhof",
        dessertes: [
          { gare: "Offenburg", heure: "07:30", arret: 4 },
          { gare: "Lahr (Schwarzwald)", heure: "07:45", arret: 1 },
          { gare: "Riegel-Malterdingen SWEG", heure: "07:59", arret: 1 },
          { gare: "Freiburg (Breisgau) Hauptbahnhof", heure: "08:16", arret: 1 }
        ]
      },
      {
        nom: "Freiburg (Breisgau) Hauptbahnhof → Offenburg",
        dessertes: [
          { gare: "Freiburg (Breisgau) Hauptbahnhof", heure: "08:46", arret: 1 },
          { gare: "Riegel-Malterdingen SWEG", heure: "09:03", arret: 1 },
          { gare: "Lahr (Schwarzwald)", heure: "09:17", arret: 1 },
          { gare: "Offenburg", heure: "09:29", arret: 4 }
        ]
      },
      {
        nom: "Offenburg → Freiburg (Breisgau) Hauptbahnhof",
        dessertes: [
          { gare: "Offenburg", heure: "11:59", arret: 4 },
          { gare: "Lahr (Schwarzwald)", heure: "12:14", arret: 1 },
          { gare: "Riegel-Malterdingen SWEG", heure: "12:28", arret: 1 },
          { gare: "Freiburg (Breisgau) Hauptbahnhof", heure: "12:45", arret: 1 }
        ]
      },
      {
        nom: "Freiburg (Breisgau) Hauptbahnhof → Offenburg",
        dessertes: [
          { gare: "Freiburg (Breisgau) Hauptbahnhof", heure: "13:15", arret: 1 },
          { gare: "Riegel-Malterdingen SWEG", heure: "13:32", arret: 1 },
          { gare: "Lahr (Schwarzwald)", heure: "13:46", arret: 1 },
          { gare: "Offenburg", heure: "13:58", arret: 4 }
        ]
      },
      {
        nom: "Offenburg → Freiburg (Breisgau) Hauptbahnhof",
        dessertes: [
          { gare: "Offenburg", heure: "16:28", arret: 4 },
          { gare: "Lahr (Schwarzwald)", heure: "16:43", arret: 1 },
          { gare: "Riegel-Malterdingen SWEG", heure: "16:57", arret: 1 },
          { gare: "Freiburg (Breisgau) Hauptbahnhof", heure: "17:14", arret: 1 }
        ]
      },
      {
        nom: "Freiburg (Breisgau) Hauptbahnhof → Offenburg",
        dessertes: [
          { gare: "Freiburg (Breisgau) Hauptbahnhof", heure: "17:44", arret: 1 },
          { gare: "Riegel-Malterdingen SWEG", heure: "18:01", arret: 1 },
          { gare: "Lahr (Schwarzwald)", heure: "18:15", arret: 1 },
          { gare: "Offenburg", heure: "18:27", arret: 4 }
        ]
      }
    ]
  },

  {
    id: "BR BW1002",
    nom: "BR1462 bwegt",
    moteurs: ["15kV CA"],
    vitesseMax: 160,
    capacite: { premiere: 16, seconde: 394 },
    trajets: [
      {
        nom: "Offenburg → Freiburg (Breisgau) Hauptbahnhof",
        dessertes: [
          { gare: "Offenburg", heure: "07:40", arret: 4 },
          { gare: "Friesenheim (Baden)", heure: "07:52", arret: 1 },
          { gare: "Lahr (Schwarzwald)", heure: "07:56", arret: 1 },
          { gare: "Orschweier", heure: "08:02", arret: 1 },
          { gare: "Ringsheim/Europa-Park", heure: "08:05", arret: 1 },
          { gare: "Herbolzheim(Breisgau)", heure: "08:08", arret: 1 },
          { gare: "Kenzingen", heure: "08:11", arret: 1 },
          { gare: "Riegel-Malterdingen SWEG", heure: "08:15", arret: 1 },
          { gare: "Emmendingen", heure: "08:21", arret: 1 },
          { gare: "Kollmarsreute", heure: "08:25", arret: 1 },
          { gare: "Denzlingen", heure: "08:28", arret: 1 },
          { gare: "Freiburg Zähringen", heure: "08:33", arret: 1 },
          { gare: "Freiburg (Breisgau) Hauptbahnhof", heure: "08:37", arret: 1 }
        ]
      },
      {
        nom: "Freiburg (Breisgau) Hauptbahnhof → Offenburg",
        dessertes: [
          { gare: "Freiburg (Breisgau) Hauptbahnhof", heure: "11:07", arret: 1 },
          { gare: "Freiburg Zähringen", heure: "11:11", arret: 1 },
          { gare: "Denzlingen", heure: "11:16", arret: 1 },
          { gare: "Kollmarsreute", heure: "11:19", arret: 1 },
          { gare: "Emmendingen", heure: "11:23", arret: 1 },
          { gare: "Riegel-Malterdingen SWEG", heure: "11:29", arret: 1 },
          { gare: "Kenzingen", heure: "11:33", arret: 1 },
          { gare: "Herbolzheim(Breisgau)", heure: "11:36", arret: 1 },
          { gare: "Ringsheim/Europa-Park", heure: "11:39", arret: 1 },
          { gare: "Orschweier", heure: "11:42", arret: 1 },
          { gare: "Lahr (Schwarzwald)", heure: "11:48", arret: 1 },
          { gare: "Friesenheim (Baden)", heure: "11:52", arret: 1 },
          { gare: "Offenburg", heure: "12:01", arret: 4 }
        ]
      },
      {
        nom: "Offenburg → Freiburg (Breisgau) Hauptbahnhof",
        dessertes: [
          { gare: "Offenburg", heure: "16:31", arret: 4 },
          { gare: "Friesenheim (Baden)", heure: "16:43", arret: 1 },
          { gare: "Lahr (Schwarzwald)", heure: "16:47", arret: 1 },
          { gare: "Orschweier", heure: "16:53", arret: 1 },
          { gare: "Ringsheim/Europa-Park", heure: "16:56", arret: 1 },
          { gare: "Herbolzheim(Breisgau)", heure: "16:59", arret: 1 },
          { gare: "Kenzingen", heure: "17:02", arret: 1 },
          { gare: "Riegel-Malterdingen SWEG", heure: "17:06", arret: 1 },
          { gare: "Emmendingen", heure: "17:12", arret: 1 },
          { gare: "Kollmarsreute", heure: "17:16", arret: 1 },
          { gare: "Denzlingen", heure: "17:19", arret: 1 },
          { gare: "Freiburg Zähringen", heure: "17:24", arret: 1 },
          { gare: "Freiburg (Breisgau) Hauptbahnhof", heure: "17:28", arret: 1 }
        ]
      },
      {
        nom: "Freiburg (Breisgau) Hauptbahnhof → Offenburg",
        dessertes: [
          { gare: "Freiburg (Breisgau) Hauptbahnhof", heure: "17:58", arret: 1 },
          { gare: "Freiburg Zähringen", heure: "18:02", arret: 1 },
          { gare: "Denzlingen", heure: "18:07", arret: 1 },
          { gare: "Kollmarsreute", heure: "18:10", arret: 1 },
          { gare: "Emmendingen", heure: "18:14", arret: 1 },
          { gare: "Riegel-Malterdingen SWEG", heure: "18:20", arret: 1 },
          { gare: "Kenzingen", heure: "18:24", arret: 1 },
          { gare: "Herbolzheim(Breisgau)", heure: "18:27", arret: 1 },
          { gare: "Ringsheim/Europa-Park", heure: "18:30", arret: 1 },
          { gare: "Orschweier", heure: "18:33", arret: 1 },
          { gare: "Lahr (Schwarzwald)", heure: "18:39", arret: 1 },
          { gare: "Friesenheim (Baden)", heure: "18:43", arret: 1 },
          { gare: "Offenburg", heure: "18:52", arret: 4 }
        ]
      }
    ]
  },

  {
    id: "BR BW1050",
    nom: "BR1462 bwegt",
    moteurs: ["15kV CA"],
    vitesseMax: 160,
    capacite: { premiere: 16, seconde: 394 },
    trajets: [
      {
        nom: "Freiburg (Breisgau) Hauptbahnhof → Basel Bad Bf",
        dessertes: [
          { gare: "Freiburg (Breisgau) Hauptbahnhof", heure: "08:20", arret: 2 },
          { gare: "Freiburg-St Georgen", heure: "08:26", arret: 1 },
          { gare: "Schallstadt", heure: "08:31", arret: 1 },
          { gare: "Bad Krozingen", heure: "08:36", arret: 1 },
          { gare: "Heitersheim", heure: "08:41", arret: 1 },
          { gare: "Buggingen", heure: "08:44", arret: 1 },
          { gare: "Muellheim", heure: "08:49", arret: 2 },
          { gare: "Schliengen", heure: "08:55", arret: 1 },
          { gare: "Bad Bellingen", heure: "09:00", arret: 1 },
          { gare: "Rheinweiler", heure: "09:05", arret: 1 },
          { gare: "Istein", heure: "09:11", arret: 1 },
          { gare: "Eimeldingen", heure: "09:17", arret: 1 },
          { gare: "Haltingen", heure: "09:20", arret: 1 },
          { gare: "Weil am Rhein", heure: "09:23", arret: 1 },
          { gare: "Basel Bad Bf", heure: "09:27", arret: 2 }
        ]
      },
      {
        nom: "Basel Bad Bf → Freiburg (Breisgau) Hauptbahnhof",
        dessertes: [
          { gare: "Basel Bad Bf", heure: "11:43", arret: 2 },
          { gare: "Weil am Rhein", heure: "11:48", arret: 1 },
          { gare: "Haltingen", heure: "11:51", arret: 1 },
          { gare: "Eimeldingen", heure: "11:54", arret: 1 },
          { gare: "Istein", heure: "12:00", arret: 1 },
          { gare: "Rheinweiler", heure: "12:06", arret: 1 },
          { gare: "Bad Bellingen", heure: "12:11", arret: 1 },
          { gare: "Schliengen", heure: "12:16", arret: 1 },
          { gare: "Muellheim", heure: "12:21", arret: 2 },
          { gare: "Buggingen", heure: "12:27", arret: 1 },
          { gare: "Heitersheim", heure: "12:30", arret: 1 },
          { gare: "Bad Krozingen", heure: "12:35", arret: 1 },
          { gare: "Schallstadt", heure: "12:40", arret: 1 },
          { gare: "Freiburg-St Georgen", heure: "12:45", arret: 1 },
          { gare: "Freiburg (Breisgau) Hauptbahnhof", heure: "12:50", arret: 2 }
        ]
      },
      {
        nom: "Freiburg (Breisgau) Hauptbahnhof → Basel Bad Bf",
        dessertes: [
          { gare: "Freiburg (Breisgau) Hauptbahnhof", heure: "15:06", arret: 2 },
          { gare: "Freiburg-St Georgen", heure: "15:12", arret: 1 },
          { gare: "Schallstadt", heure: "15:17", arret: 1 },
          { gare: "Bad Krozingen", heure: "15:22", arret: 1 },
          { gare: "Heitersheim", heure: "15:27", arret: 1 },
          { gare: "Buggingen", heure: "15:30", arret: 1 },
          { gare: "Muellheim", heure: "15:35", arret: 2 },
          { gare: "Schliengen", heure: "15:41", arret: 1 },
          { gare: "Bad Bellingen", heure: "15:46", arret: 1 },
          { gare: "Rheinweiler", heure: "15:51", arret: 1 },
          { gare: "Istein", heure: "15:57", arret: 1 },
          { gare: "Eimeldingen", heure: "16:03", arret: 1 },
          { gare: "Haltingen", heure: "16:06", arret: 1 },
          { gare: "Weil am Rhein", heure: "16:09", arret: 1 },
          { gare: "Basel Bad Bf", heure: "16:13", arret: 2 }
        ]
      },
      {
        nom: "Basel Bad Bf → Freiburg (Breisgau) Hauptbahnhof",
        dessertes: [
          { gare: "Basel Bad Bf", heure: "16:59", arret: 2 },
          { gare: "Weil am Rhein", heure: "17:04", arret: 1 },
          { gare: "Haltingen", heure: "17:07", arret: 1 },
          { gare: "Eimeldingen", heure: "17:10", arret: 1 },
          { gare: "Istein", heure: "17:16", arret: 1 },
          { gare: "Rheinweiler", heure: "17:22", arret: 1 },
          { gare: "Bad Bellingen", heure: "17:27", arret: 1 },
          { gare: "Schliengen", heure: "17:32", arret: 1 },
          { gare: "Muellheim", heure: "17:37", arret: 2 },
          { gare: "Buggingen", heure: "17:43", arret: 1 },
          { gare: "Heitersheim", heure: "17:46", arret: 1 },
          { gare: "Bad Krozingen", heure: "17:51", arret: 1 },
          { gare: "Schallstadt", heure: "17:56", arret: 1 },
          { gare: "Freiburg-St Georgen", heure: "18:01", arret: 1 },
          { gare: "Freiburg (Breisgau) Hauptbahnhof", heure: "18:06", arret: 2 }
        ]
      }
    ]
  },

  {
    id: "BR Off - FR",
    nom: "RS1 bwegt",
    moteurs: ["diesel"],
    vitesseMax: 120,
    capacite: { premiere: 0, seconde: 202 },
    composition: ["RS1 bwegt"],
    trajets: [
      {
        nom: "Offenburg → Strasbourg",
        dessertes: [
          { gare: "Offenburg", heure: "07:00", arret: 2 },
          { gare: "Appenweier", heure: "07:09", arret: 2 },
          { gare: "Legelshurst", heure: "07:18", arret: 1 },
          { gare: "Kork", heure: "07:24", arret: 1 },
          { gare: "Kehl", heure: "07:33", arret: 1 },
          { gare: "Krimmeri-Meinau", heure: "07:42", arret: 1 },
          { gare: "Strasbourg", heure: "07:47", arret: 2 }
        ]
      },
      {
        nom: "Strasbourg → Offenburg",
        dessertes: [
          { gare: "Strasbourg", heure: "08:17", arret: 2 },
          { gare: "Krimmeri-Meinau", heure: "08:23", arret: 1 },
          { gare: "Kehl", heure: "08:32", arret: 1 },
          { gare: "Kork", heure: "08:41", arret: 1 },
          { gare: "Legelshurst", heure: "08:47", arret: 1 },
          { gare: "Appenweier", heure: "08:55", arret: 2 },
          { gare: "Offenburg", heure: "09:04", arret: 2 }
        ]
      },
      {
        nom: "Offenburg → Strasbourg",
        dessertes: [
          { gare: "Offenburg", heure: "11:34", arret: 2 },
          { gare: "Appenweier", heure: "11:43", arret: 2 },
          { gare: "Legelshurst", heure: "11:52", arret: 1 },
          { gare: "Kork", heure: "11:58", arret: 1 },
          { gare: "Kehl", heure: "12:07", arret: 1 },
          { gare: "Krimmeri-Meinau", heure: "12:16", arret: 1 },
          { gare: "Strasbourg", heure: "12:21", arret: 2 }
        ]
      },
      {
        nom: "Strasbourg → Offenburg",
        dessertes: [
          { gare: "Strasbourg", heure: "12:51", arret: 2 },
          { gare: "Krimmeri-Meinau", heure: "12:57", arret: 1 },
          { gare: "Kehl", heure: "13:06", arret: 1 },
          { gare: "Kork", heure: "13:15", arret: 1 },
          { gare: "Legelshurst", heure: "13:21", arret: 1 },
          { gare: "Appenweier", heure: "13:29", arret: 2 },
          { gare: "Offenburg", heure: "13:38", arret: 2 }
        ]
      },
      {
        nom: "Offenburg → Strasbourg",
        dessertes: [
          { gare: "Offenburg", heure: "15:08", arret: 2 },
          { gare: "Appenweier", heure: "15:17", arret: 2 },
          { gare: "Legelshurst", heure: "15:26", arret: 1 },
          { gare: "Kork", heure: "15:32", arret: 1 },
          { gare: "Kehl", heure: "15:41", arret: 1 },
          { gare: "Krimmeri-Meinau", heure: "15:50", arret: 1 },
          { gare: "Strasbourg", heure: "15:55", arret: 2 }
        ]
      },
      {
        nom: "Strasbourg → Offenburg",
        dessertes: [
          { gare: "Strasbourg", heure: "16:25", arret: 2 },
          { gare: "Krimmeri-Meinau", heure: "16:31", arret: 1 },
          { gare: "Kehl", heure: "16:40", arret: 1 },
          { gare: "Kork", heure: "16:49", arret: 1 },
          { gare: "Legelshurst", heure: "16:55", arret: 1 },
          { gare: "Appenweier", heure: "17:03", arret: 2 },
          { gare: "Offenburg", heure: "17:12", arret: 2 }
        ]
      }
    ]
  },

  {
    id: "S1 Freibourg",
    nom: "BR1440.1 bwegt",
    moteurs: ["15kV CA"],
    vitesseMax: 160,
    capacite: { premiere: 20, seconde: 200 },
    trajets: [
      {
        nom: "Freiburg (Breisgau) Hauptbahnhof → Breisach",
        dessertes: [
          { gare: "Freiburg (Breisgau) Hauptbahnhof", heure: "07:15", arret: 5 },
          { gare: "Freiburg Messe/Universität", heure: "07:23", arret: 1 },
          { gare: "Hugstetten", heure: "07:31", arret: 1 },
          { gare: "Gottenheim", heure: "07:38", arret: 1 },
          { gare: "Wasenweiler", heure: "07:44", arret: 1 },
          { gare: "Breisach", heure: "07:55", arret: 5 }
        ]
      },
      {
        nom: "Breisach → Freiburg (Breisgau) Hauptbahnhof",
        dessertes: [
          { gare: "Breisach", heure: "08:25", arret: 5 },
          { gare: "Wasenweiler", heure: "08:40", arret: 1 },
          { gare: "Gottenheim", heure: "08:46", arret: 1 },
          { gare: "Hugstetten", heure: "08:53", arret: 1 },
          { gare: "Freiburg Messe/Universität", heure: "09:01", arret: 1 },
          { gare: "Freiburg (Breisgau) Hauptbahnhof", heure: "09:05", arret: 5 }
        ]
      },
      {
        nom: "Freiburg (Breisgau) Hauptbahnhof → Breisach",
        dessertes: [
          { gare: "Freiburg (Breisgau) Hauptbahnhof", heure: "10:15", arret: 5 },
          { gare: "Freiburg Messe/Universität", heure: "10:23", arret: 1 },
          { gare: "Hugstetten", heure: "10:31", arret: 1 },
          { gare: "Gottenheim", heure: "10:38", arret: 1 },
          { gare: "Wasenweiler", heure: "10:44", arret: 1 },
          { gare: "Breisach", heure: "10:55", arret: 5 }
        ]
      },
      {
        nom: "Breisach → Freiburg (Breisgau) Hauptbahnhof",
        dessertes: [
          { gare: "Breisach", heure: "11:25", arret: 5 },
          { gare: "Wasenweiler", heure: "11:40", arret: 1 },
          { gare: "Gottenheim", heure: "11:46", arret: 1 },
          { gare: "Hugstetten", heure: "11:53", arret: 1 },
          { gare: "Freiburg Messe/Universität", heure: "12:01", arret: 1 },
          { gare: "Freiburg (Breisgau) Hauptbahnhof", heure: "12:05", arret: 5 }
        ]
      },
      {
        nom: "Freiburg (Breisgau) Hauptbahnhof → Breisach",
        dessertes: [
          { gare: "Freiburg (Breisgau) Hauptbahnhof", heure: "13:15", arret: 5 },
          { gare: "Freiburg Messe/Universität", heure: "13:23", arret: 1 },
          { gare: "Hugstetten", heure: "13:31", arret: 1 },
          { gare: "Gottenheim", heure: "13:38", arret: 1 },
          { gare: "Wasenweiler", heure: "13:44", arret: 1 },
          { gare: "Breisach", heure: "13:55", arret: 5 }
        ]
      },
      {
        nom: "Breisach → Freiburg (Breisgau) Hauptbahnhof",
        dessertes: [
          { gare: "Breisach", heure: "14:25", arret: 5 },
          { gare: "Wasenweiler", heure: "14:40", arret: 1 },
          { gare: "Gottenheim", heure: "14:46", arret: 1 },
          { gare: "Hugstetten", heure: "14:53", arret: 1 },
          { gare: "Freiburg Messe/Universität", heure: "15:01", arret: 1 },
          { gare: "Freiburg (Breisgau) Hauptbahnhof", heure: "15:05", arret: 5 }
        ]
      },
      {
        nom: "Freiburg (Breisgau) Hauptbahnhof → Breisach",
        dessertes: [
          { gare: "Freiburg (Breisgau) Hauptbahnhof", heure: "16:15", arret: 5 },
          { gare: "Freiburg Messe/Universität", heure: "16:23", arret: 1 },
          { gare: "Hugstetten", heure: "16:31", arret: 1 },
          { gare: "Gottenheim", heure: "16:38", arret: 1 },
          { gare: "Wasenweiler", heure: "16:44", arret: 1 },
          { gare: "Breisach", heure: "16:55", arret: 5 }
        ]
      },
      {
        nom: "Breisach → Freiburg (Breisgau) Hauptbahnhof",
        dessertes: [
          { gare: "Breisach", heure: "17:25", arret: 5 },
          { gare: "Wasenweiler", heure: "17:40", arret: 1 },
          { gare: "Gottenheim", heure: "17:46", arret: 1 },
          { gare: "Hugstetten", heure: "17:53", arret: 1 },
          { gare: "Freiburg Messe/Universität", heure: "18:01", arret: 1 },
          { gare: "Freiburg (Breisgau) Hauptbahnhof", heure: "18:05", arret: 5 }
        ]
      },
      {
        nom: "Freiburg (Breisgau) Hauptbahnhof → Breisach",
        dessertes: [
          { gare: "Freiburg (Breisgau) Hauptbahnhof", heure: "19:15", arret: 5 },
          { gare: "Freiburg Messe/Universität", heure: "19:23", arret: 1 },
          { gare: "Hugstetten", heure: "19:31", arret: 1 },
          { gare: "Gottenheim", heure: "19:38", arret: 1 },
          { gare: "Wasenweiler", heure: "19:44", arret: 1 },
          { gare: "Breisach", heure: "19:55", arret: 5 }
        ]
      },
      {
        nom: "Breisach → Freiburg (Breisgau) Hauptbahnhof",
        dessertes: [
          { gare: "Breisach", heure: "20:25", arret: 5 },
          { gare: "Wasenweiler", heure: "20:40", arret: 1 },
          { gare: "Gottenheim", heure: "20:46", arret: 1 },
          { gare: "Hugstetten", heure: "20:53", arret: 1 },
          { gare: "Freiburg Messe/Universität", heure: "21:01", arret: 1 },
          { gare: "Freiburg (Breisgau) Hauptbahnhof", heure: "21:05", arret: 5 }
        ]
      }
    ]
  },

  {
    id: "S2 Freibourg",
    nom: "BR1440.1 bwegt",
    moteurs: ["15kV CA"],
    vitesseMax: 160,
    capacite: { premiere: 20, seconde: 200 },
    trajets: [
      {
        nom: "Freiburg (Breisgau) Hauptbahnhof → Donaueschingen",
        dessertes: [
          { gare: "Freiburg (Breisgau) Hauptbahnhof", heure: "07:25", arret: 5 },
          { gare: "Freiburg-Wiehre", heure: "07:34", arret: 1 },
          { gare: "Littenweiler", heure: "07:40", arret: 1 },
          { gare: "Kirchzarten", heure: "07:48", arret: 1 },
          { gare: "Himmelreich", heure: "07:53", arret: 1 },
          { gare: "Hinterzarten", heure: "08:12", arret: 1 },
          { gare: "Titisee", heure: "08:20", arret: 2 },
          { gare: "Neustadt", heure: "08:30", arret: 2 },
          { gare: "Rötenbach", heure: "08:40", arret: 1 },
          { gare: "Löffingen", heure: "08:47", arret: 1 },
          { gare: "Bachheim", heure: "08:55", arret: 1 },
          { gare: "Unadingen", heure: "08:59", arret: 1 },
          { gare: "Döggingen", heure: "09:05", arret: 1 },
          { gare: "Hüfingen Mitte", heure: "09:14", arret: 1 },
          { gare: "Donaueschingen", heure: "09:18", arret: 4 }
        ]
      },
      {
        nom: "Donaueschingen → Freiburg (Breisgau) Hauptbahnhof",
        dessertes: [
          { gare: "Donaueschingen", heure: "10:00", arret: 4 },
          { gare: "Hüfingen Mitte", heure: "10:07", arret: 1 },
          { gare: "Döggingen", heure: "10:16", arret: 1 },
          { gare: "Unadingen", heure: "10:22", arret: 1 },
          { gare: "Bachheim", heure: "10:26", arret: 1 },
          { gare: "Löffingen", heure: "10:34", arret: 1 },
          { gare: "Rötenbach", heure: "10:41", arret: 1 },
          { gare: "Neustadt", heure: "10:50", arret: 2 },
          { gare: "Titisee", heure: "11:00", arret: 2 },
          { gare: "Hinterzarten", heure: "11:09", arret: 1 },
          { gare: "Himmelreich", heure: "11:28", arret: 1 },
          { gare: "Kirchzarten", heure: "11:33", arret: 1 },
          { gare: "Littenweiler", heure: "11:41", arret: 1 },
          { gare: "Freiburg-Wiehre", heure: "11:47", arret: 1 },
          { gare: "Freiburg (Breisgau) Hauptbahnhof", heure: "11:52", arret: 5 }
        ]
      },
      {
        nom: "Freiburg (Breisgau) Hauptbahnhof → Donaueschingen",
        dessertes: [
          { gare: "Freiburg (Breisgau) Hauptbahnhof", heure: "12:25", arret: 5 },
          { gare: "Freiburg-Wiehre", heure: "12:34", arret: 1 },
          { gare: "Littenweiler", heure: "12:40", arret: 1 },
          { gare: "Kirchzarten", heure: "12:48", arret: 1 },
          { gare: "Himmelreich", heure: "12:53", arret: 1 },
          { gare: "Hinterzarten", heure: "13:12", arret: 1 },
          { gare: "Titisee", heure: "13:20", arret: 2 },
          { gare: "Neustadt", heure: "13:30", arret: 2 },
          { gare: "Rötenbach", heure: "13:40", arret: 1 },
          { gare: "Löffingen", heure: "13:47", arret: 1 },
          { gare: "Bachheim", heure: "13:55", arret: 1 },
          { gare: "Unadingen", heure: "13:59", arret: 1 },
          { gare: "Döggingen", heure: "14:05", arret: 1 },
          { gare: "Hüfingen Mitte", heure: "14:14", arret: 1 },
          { gare: "Donaueschingen", heure: "14:18", arret: 4 }
        ]
      },
      {
        nom: "Donaueschingen → Freiburg (Breisgau) Hauptbahnhof",
        dessertes: [
          { gare: "Donaueschingen", heure: "15:00", arret: 4 },
          { gare: "Hüfingen Mitte", heure: "15:07", arret: 1 },
          { gare: "Döggingen", heure: "15:16", arret: 1 },
          { gare: "Unadingen", heure: "15:22", arret: 1 },
          { gare: "Bachheim", heure: "15:26", arret: 1 },
          { gare: "Löffingen", heure: "15:34", arret: 1 },
          { gare: "Rötenbach", heure: "15:41", arret: 1 },
          { gare: "Neustadt", heure: "15:50", arret: 2 },
          { gare: "Titisee", heure: "16:00", arret: 2 },
          { gare: "Hinterzarten", heure: "16:09", arret: 1 },
          { gare: "Himmelreich", heure: "16:28", arret: 1 },
          { gare: "Kirchzarten", heure: "16:33", arret: 1 },
          { gare: "Littenweiler", heure: "16:41", arret: 1 },
          { gare: "Freiburg-Wiehre", heure: "16:47", arret: 1 },
          { gare: "Freiburg (Breisgau) Hauptbahnhof", heure: "16:52", arret: 5 }
        ]
      },
      {
        nom: "Freiburg (Breisgau) Hauptbahnhof → Donaueschingen",
        dessertes: [
          { gare: "Freiburg (Breisgau) Hauptbahnhof", heure: "17:25", arret: 5 },
          { gare: "Freiburg-Wiehre", heure: "17:34", arret: 1 },
          { gare: "Littenweiler", heure: "17:40", arret: 1 },
          { gare: "Kirchzarten", heure: "17:48", arret: 1 },
          { gare: "Himmelreich", heure: "17:53", arret: 1 },
          { gare: "Hinterzarten", heure: "18:12", arret: 1 },
          { gare: "Titisee", heure: "18:20", arret: 2 },
          { gare: "Neustadt", heure: "18:30", arret: 2 },
          { gare: "Rötenbach", heure: "18:40", arret: 1 },
          { gare: "Löffingen", heure: "18:47", arret: 1 },
          { gare: "Bachheim", heure: "18:55", arret: 1 },
          { gare: "Unadingen", heure: "18:59", arret: 1 },
          { gare: "Döggingen", heure: "19:05", arret: 1 },
          { gare: "Hüfingen Mitte", heure: "19:14", arret: 1 },
          { gare: "Donaueschingen", heure: "19:18", arret: 4 }
        ]
      },
      {
        nom: "Donaueschingen → Freiburg (Breisgau) Hauptbahnhof",
        dessertes: [
          { gare: "Donaueschingen", heure: "20:00", arret: 4 },
          { gare: "Hüfingen Mitte", heure: "20:07", arret: 1 },
          { gare: "Döggingen", heure: "20:16", arret: 1 },
          { gare: "Unadingen", heure: "20:22", arret: 1 },
          { gare: "Bachheim", heure: "20:26", arret: 1 },
          { gare: "Löffingen", heure: "20:34", arret: 1 },
          { gare: "Rötenbach", heure: "20:41", arret: 1 },
          { gare: "Neustadt", heure: "20:50", arret: 2 },
          { gare: "Titisee", heure: "21:00", arret: 2 },
          { gare: "Hinterzarten", heure: "21:09", arret: 1 },
          { gare: "Himmelreich", heure: "21:28", arret: 1 },
          { gare: "Kirchzarten", heure: "21:33", arret: 1 },
          { gare: "Littenweiler", heure: "21:41", arret: 1 },
          { gare: "Freiburg-Wiehre", heure: "21:47", arret: 1 },
          { gare: "Freiburg (Breisgau) Hauptbahnhof", heure: "21:52", arret: 5 }
        ]
      }
    ]
  },

  {
    id: "S21 Freibourg",
    nom: "BR1440.1 bwegt",
    moteurs: ["15kV CA"],
    vitesseMax: 160,
    capacite: { premiere: 20, seconde: 200 },
    trajets: [
      {
        nom: "Freiburg (Breisgau) Hauptbahnhof → Seebrugg",
        dessertes: [
          { gare: "Freiburg (Breisgau) Hauptbahnhof", heure: "07:25", arret: 5 },
          { gare: "Freiburg-Wiehre", heure: "07:34", arret: 1 },
          { gare: "Littenweiler", heure: "07:40", arret: 1 },
          { gare: "Kirchzarten", heure: "07:48", arret: 1 },
          { gare: "Himmelreich", heure: "07:53", arret: 1 },
          { gare: "Hinterzarten", heure: "08:12", arret: 1 },
          { gare: "Titisee", heure: "08:20", arret: 10 },
          { gare: "Feldberg-Bärental", heure: "08:40", arret: 1 },
          { gare: "Altglashütten-Falkau", heure: "08:45", arret: 1 },
          { gare: "Aha", heure: "08:51", arret: 1 },
          { gare: "Schluchsee", heure: "09:00", arret: 2 },
          { gare: "Seebrugg", heure: "09:05", arret: 1 }
        ]
      },
      {
        nom: "Seebrugg → Freiburg (Breisgau) Hauptbahnhof",
        dessertes: [
          { gare: "Seebrugg", heure: "09:35", arret: 1 },
          { gare: "Schluchsee", heure: "09:39", arret: 2 },
          { gare: "Aha", heure: "09:49", arret: 1 },
          { gare: "Altglashütten-Falkau", heure: "09:55", arret: 1 },
          { gare: "Feldberg-Bärental", heure: "10:00", arret: 1 },
          { gare: "Titisee", heure: "10:11", arret: 2 }
        ]
      },
      {
        nom: "Titisee → Seebrugg",
        dessertes: [
          { gare: "Titisee", heure: "10:40", arret: 2 },
          { gare: "Feldberg-Bärental", heure: "10:52", arret: 1 },
          { gare: "Altglashütten-Falkau", heure: "10:57", arret: 1 },
          { gare: "Aha", heure: "11:03", arret: 1 },
          { gare: "Schluchsee", heure: "11:12", arret: 2 },
          { gare: "Seebrugg", heure: "11:17", arret: 1 }
        ]
      },
      {
        nom: "Seebrugg → Titisee",
        dessertes: [
          { gare: "Seebrugg", heure: "11:50", arret: 1 },
          { gare: "Schluchsee", heure: "11:54", arret: 2 },
          { gare: "Aha", heure: "12:04", arret: 1 },
          { gare: "Altglashütten-Falkau", heure: "12:10", arret: 1 },
          { gare: "Feldberg-Bärental", heure: "12:15", arret: 1 },
          { gare: "Titisee", heure: "12:26", arret: 2 }
        ]
      },
      {
        nom: "Titisee → Seebrugg",
        dessertes: [
          { gare: "Titisee", heure: "12:40", arret: 2 },
          { gare: "Feldberg-Bärental", heure: "12:52", arret: 1 },
          { gare: "Altglashütten-Falkau", heure: "12:57", arret: 1 },
          { gare: "Aha", heure: "13:03", arret: 1 },
          { gare: "Schluchsee", heure: "13:12", arret: 2 },
          { gare: "Seebrugg", heure: "13:17", arret: 1 }
        ]
      },
      {
        nom: "Seebrugg → Titisee",
        dessertes: [
          { gare: "Seebrugg", heure: "13:50", arret: 1 },
          { gare: "Schluchsee", heure: "13:54", arret: 2 },
          { gare: "Aha", heure: "14:04", arret: 1 },
          { gare: "Altglashütten-Falkau", heure: "14:10", arret: 1 },
          { gare: "Feldberg-Bärental", heure: "14:15", arret: 1 },
          { gare: "Titisee", heure: "14:26", arret: 2 }
        ]
      },
      {
        nom: "Titisee → Seebrugg",
        dessertes: [
          { gare: "Titisee", heure: "14:40", arret: 2 },
          { gare: "Feldberg-Bärental", heure: "14:52", arret: 1 },
          { gare: "Altglashütten-Falkau", heure: "14:57", arret: 1 },
          { gare: "Aha", heure: "15:03", arret: 1 },
          { gare: "Schluchsee", heure: "15:12", arret: 2 },
          { gare: "Seebrugg", heure: "15:17", arret: 1 }
        ]
      },
      {
        nom: "Seebrugg → Titisee",
        dessertes: [
          { gare: "Seebrugg", heure: "15:50", arret: 1 },
          { gare: "Schluchsee", heure: "15:54", arret: 2 },
          { gare: "Aha", heure: "16:04", arret: 1 },
          { gare: "Altglashütten-Falkau", heure: "16:10", arret: 1 },
          { gare: "Feldberg-Bärental", heure: "16:15", arret: 1 },
          { gare: "Titisee", heure: "16:26", arret: 2 }
        ]
      },
      {
        nom: "Titisee → Seebrugg",
        dessertes: [
          { gare: "Titisee", heure: "16:40", arret: 2 },
          { gare: "Feldberg-Bärental", heure: "16:52", arret: 1 },
          { gare: "Altglashütten-Falkau", heure: "16:57", arret: 1 },
          { gare: "Aha", heure: "17:03", arret: 1 },
          { gare: "Schluchsee", heure: "17:12", arret: 2 },
          { gare: "Seebrugg", heure: "17:17", arret: 1 }
        ]
      },
      {
        nom: "Seebrugg → Freiburg (Breisgau) Hauptbahnhof",
        dessertes: [
          { gare: "Seebrugg", heure: "17:50", arret: 1 },
          { gare: "Schluchsee", heure: "17:54", arret: 2 },
          { gare: "Aha", heure: "18:04", arret: 1 },
          { gare: "Altglashütten-Falkau", heure: "18:10", arret: 1 },
          { gare: "Feldberg-Bärental", heure: "18:15", arret: 1 },
          { gare: "Titisee", heure: "18:26", arret: 2 },
          { gare: "Hinterzarten", heure: "18:35", arret: 1 },
          { gare: "Himmelreich", heure: "18:54", arret: 1 },
          { gare: "Kirchzarten", heure: "18:59", arret: 1 },
          { gare: "Littenweiler", heure: "19:07", arret: 1 },
          { gare: "Freiburg-Wiehre", heure: "19:13", arret: 1 },
          { gare: "Freiburg (Breisgau) Hauptbahnhof", heure: "19:18", arret: 1 }
        ]
      }
    ]
  }
];
