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
          { gare: "Schallstadt", heure: "08:29", arret: 1 },
          { gare: "Bad Krozingen", heure: "08:34", arret: 1 },
          { gare: "Heitersheim", heure: "08:39", arret: 1 },
          { gare: "Buggingen", heure: "08:42", arret: 1 },
          { gare: "Muellheim", heure: "08:47", arret: 2 },
          { gare: "Schliengen", heure: "08:53", arret: 1 },
          { gare: "Eimeldingen", heure: "09:03", arret: 1 },
          { gare: "Haltingen", heure: "09:06", arret: 1 },
          { gare: "Weil am Rhein", heure: "09:09", arret: 1 },
          { gare: "Basel Bad Bf", heure: "09:13", arret: 2 }
        ]
      },
      {
        nom: "Basel Bad Bf → Freiburg (Breisgau) Hauptbahnhof",
        dessertes: [
          { gare: "Basel Bad Bf", heure: "11:43", arret: 2 },
          { gare: "Weil am Rhein", heure: "11:48", arret: 1 },
          { gare: "Haltingen", heure: "11:51", arret: 1 },
          { gare: "Eimeldingen", heure: "11:54", arret: 1 },
          { gare: "Schliengen", heure: "12:04", arret: 1 },
          { gare: "Muellheim", heure: "12:09", arret: 2 },
          { gare: "Buggingen", heure: "12:15", arret: 1 },
          { gare: "Heitersheim", heure: "12:18", arret: 1 },
          { gare: "Bad Krozingen", heure: "12:23", arret: 1 },
          { gare: "Schallstadt", heure: "12:28", arret: 1 },
          { gare: "Freiburg (Breisgau) Hauptbahnhof", heure: "12:36", arret: 2 }
        ]
      },
      {
        nom: "Freiburg (Breisgau) Hauptbahnhof → Basel Bad Bf",
        dessertes: [
          { gare: "Freiburg (Breisgau) Hauptbahnhof", heure: "15:06", arret: 2 },
          { gare: "Schallstadt", heure: "15:15", arret: 1 },
          { gare: "Bad Krozingen", heure: "15:20", arret: 1 },
          { gare: "Heitersheim", heure: "15:25", arret: 1 },
          { gare: "Buggingen", heure: "15:28", arret: 1 },
          { gare: "Muellheim", heure: "15:33", arret: 2 },
          { gare: "Schliengen", heure: "15:39", arret: 1 },
          { gare: "Eimeldingen", heure: "15:49", arret: 1 },
          { gare: "Haltingen", heure: "15:52", arret: 1 },
          { gare: "Weil am Rhein", heure: "15:55", arret: 1 },
          { gare: "Basel Bad Bf", heure: "15:59", arret: 2 }
        ]
      },
      {
        nom: "Basel Bad Bf → Freiburg (Breisgau) Hauptbahnhof",
        dessertes: [
          { gare: "Basel Bad Bf", heure: "16:59", arret: 2 },
          { gare: "Weil am Rhein", heure: "17:04", arret: 1 },
          { gare: "Haltingen", heure: "17:07", arret: 1 },
          { gare: "Eimeldingen", heure: "17:10", arret: 1 },
          { gare: "Schliengen", heure: "17:20", arret: 1 },
          { gare: "Muellheim", heure: "17:25", arret: 2 },
          { gare: "Buggingen", heure: "17:31", arret: 1 },
          { gare: "Heitersheim", heure: "17:34", arret: 1 },
          { gare: "Bad Krozingen", heure: "17:39", arret: 1 },
          { gare: "Schallstadt", heure: "17:44", arret: 1 },
          { gare: "Freiburg (Breisgau) Hauptbahnhof", heure: "17:52", arret: 2 }
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
  }
];
