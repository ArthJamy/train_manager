export const trainsFR = [
  {
    id: "FLUO IC Bel-PEst 1",
    nom: "CoradiaLiner 6C",
    moteurs: ["25kV CA", "1.5kV CC", "diesel"],
    vitesseMax: 160,
    capacite: { premiere: 90, seconde: 270 },
    trajets: [
      {
        nom: "Belfort-Ville → Gare de l'Est",
        dessertes: [
          { gare: "Belfort-Ville", heure: "10:10", arret: 2 },
          { gare: "Lure", heure: "10:39", arret: 1 },
          { gare: "Vesoul", heure: "11:05", arret: 1 },
          { gare: "Culmont-Chalindrey", heure: "12:01", arret: 1 },
          { gare: "Langres", heure: "12:11", arret: 1 },
          { gare: "Chaumont", heure: "12:35", arret: 1 },
          { gare: "Troyes", heure: "13:53", arret: 2 },
          { gare: "Romilly-sur-Seine", heure: "14:20", arret: 1 },
          { gare: "Nogent-sur-Seine", heure: "14:36", arret: 1 },
          { gare: "Gare de l'Est", heure: "16:01", arret: 4 }
        ]
      },
      {
        nom: "Gare de l'Est → Belfort-Ville",
        dessertes: [
          { gare: "Gare de l'Est", heure: "16:35", arret: 4 },
          { gare: "Nogent-sur-Seine", heure: "18:03", arret: 1 },
          { gare: "Romilly-sur-Seine", heure: "18:19", arret: 1 },
          { gare: "Troyes", heure: "18:45", arret: 2 },
          { gare: "Chaumont", heure: "20:04", arret: 1 },
          { gare: "Langres", heure: "20:28", arret: 1 },
          { gare: "Culmont-Chalindrey", heure: "20:38", arret: 1 },
          { gare: "Vesoul", heure: "21:34", arret: 1 },
          { gare: "Lure", heure: "22:00", arret: 1 },
          { gare: "Belfort-Ville", heure: "22:28", arret: 2 }
        ]
      }
    ]
  },

  {
    id: "FLUO IC Bel-PEst 2",
    nom: "CoradiaLiner 6C",
    moteurs: ["25kV CA", "1.5kV CC", "diesel"],
    vitesseMax: 160,
    capacite: { premiere: 90, seconde: 270 },
    trajets: [
      {
        nom: "Gare de l'Est → Mulhouse",
        dessertes: [
          { gare: "Gare de l'Est", heure: "09:25", arret: 1 },
          { gare: "Nogent-sur-Seine", heure: "10:50", arret: 1 },
          { gare: "Romilly-sur-Seine", heure: "11:06", arret: 1 },
          { gare: "Troyes", heure: "11:32", arret: 2 },
          { gare: "Bar-Sur-Aube", heure: "12:19", arret: 1 },
          { gare: "Chaumont", heure: "12:53", arret: 2 },
          { gare: "Langres", heure: "13:18", arret: 1 },
          { gare: "Culmont-Chalindrey", heure: "13:28", arret: 1 },
          { gare: "Vesoul", heure: "14:24", arret: 1 },
          { gare: "Lure", heure: "14:50", arret: 1 },
          { gare: "Belfort-Ville", heure: "15:18", arret: 4 }
        ]
      },
      {
        nom: "Belfort-Ville → Gare de l'Est",
        dessertes: [
          { gare: "Belfort-Ville", heure: "17:30", arret: 4 },
          { gare: "Lure", heure: "18:01", arret: 1 },
          { gare: "Vesoul", heure: "18:27", arret: 1 },
          { gare: "Culmont-Chalindrey", heure: "19:23", arret: 1 },
          { gare: "Langres", heure: "19:33", arret: 1 },
          { gare: "Chaumont", heure: "19:57", arret: 2 },
          { gare: "Bar-Sur-Aube", heure: "20:32", arret: 1 },
          { gare: "Troyes", heure: "21:18", arret: 2 },
          { gare: "Romilly-sur-Seine", heure: "21:45", arret: 1 },
          { gare: "Nogent-sur-Seine", heure: "22:01", arret: 1 },
          { gare: "Gare de l'Est", heure: "23:26", arret: 1 }
        ]
      }
    ]
  },

  {
    id: "FLUO IC Chm PEst 1",
    nom: "CoradiaLiner 6C",
    moteurs: ["25kV CA", "1.5kV CC", "diesel"],
    vitesseMax: 160,
    capacite: { premiere: 90, seconde: 270 },
    trajets: [
      {
        nom: "Chaumont → Gare de l'Est",
        dessertes: [
          { gare: "Chaumont", heure: "07:00", arret: 4 },
          { gare: "Bar-Sur-Aube", heure: "07:37", arret: 1 },
          { gare: "Vendeuvre (Aube)", heure: "07:55", arret: 1 },
          { gare: "Troyes", heure: "08:25", arret: 3 },
          { gare: "Romilly-sur-Seine", heure: "08:53", arret: 1 },
          { gare: "Nogent-sur-Seine", heure: "09:09", arret: 1 },
          { gare: "Gare de l'Est", heure: "10:34", arret: 5 }
        ]
      },
      {
        nom: "Gare de l'Est → Chaumont",
        dessertes: [
          { gare: "Gare de l'Est", heure: "11:00", arret: 5 },
          { gare: "Nogent-sur-Seine", heure: "12:29", arret: 1 },
          { gare: "Romilly-sur-Seine", heure: "12:45", arret: 1 },
          { gare: "Troyes", heure: "13:11", arret: 3 },
          { gare: "Vendeuvre (Aube)", heure: "13:43", arret: 1 },
          { gare: "Bar-Sur-Aube", heure: "14:01", arret: 1 },
          { gare: "Chaumont", heure: "14:35", arret: 4 }
        ]
      },
      {
        nom: "Chaumont → Gare de l'Est",
        dessertes: [
          { gare: "Chaumont", heure: "15:00", arret: 4 },
          { gare: "Bar-Sur-Aube", heure: "15:37", arret: 1 },
          { gare: "Vendeuvre (Aube)", heure: "15:55", arret: 1 },
          { gare: "Troyes", heure: "16:25", arret: 3 },
          { gare: "Romilly-sur-Seine", heure: "16:53", arret: 1 },
          { gare: "Nogent-sur-Seine", heure: "17:09", arret: 1 },
          { gare: "Gare de l'Est", heure: "18:34", arret: 5 }
        ]
      },
      {
        nom: "Gare de l'Est → Chaumont",
        dessertes: [
          { gare: "Gare de l'Est", heure: "19:00", arret: 5 },
          { gare: "Nogent-sur-Seine", heure: "20:29", arret: 1 },
          { gare: "Romilly-sur-Seine", heure: "20:45", arret: 1 },
          { gare: "Troyes", heure: "21:11", arret: 3 },
          { gare: "Vendeuvre (Aube)", heure: "21:43", arret: 1 },
          { gare: "Bar-Sur-Aube", heure: "22:01", arret: 1 },
          { gare: "Chaumont", heure: "22:35", arret: 4 }
        ]
      }
    ]
  },

  {
    id: "FLUO IC Chm PEst 2",
    nom: "CoradiaLiner fluoGrandEst 6C",
    moteurs: ["25kV CA", "1.5kV CC", "diesel"],
    vitesseMax: 160,
    capacite: { premiere: 90, seconde: 270 },
    trajets: [
      {
        nom: "Chaumont → Gare de l'Est",
        dessertes: [
          { gare: "Chaumont", heure: "08:00", arret: 3 },
          { gare: "Bar-Sur-Aube", heure: "08:36", arret: 1 },
          { gare: "Vendeuvre (Aube)", heure: "08:54", arret: 1 },
          { gare: "Troyes", heure: "09:24", arret: 2 },
          { gare: "Romilly-sur-Seine", heure: "09:51", arret: 1 },
          { gare: "Nogent-sur-Seine", heure: "10:07", arret: 1 },
          { gare: "Gare de l'Est", heure: "11:32", arret: 5 }
        ]
      },
      {
        nom: "Gare de l'Est → Chaumont",
        dessertes: [
          { gare: "Gare de l'Est", heure: "12:00", arret: 5 },
          { gare: "Nogent-sur-Seine", heure: "13:29", arret: 1 },
          { gare: "Romilly-sur-Seine", heure: "13:45", arret: 1 },
          { gare: "Troyes", heure: "14:11", arret: 2 },
          { gare: "Vendeuvre (Aube)", heure: "14:42", arret: 1 },
          { gare: "Bar-Sur-Aube", heure: "15:00", arret: 1 },
          { gare: "Chaumont", heure: "15:34", arret: 3 }
        ]
      },
      {
        nom: "Chaumont → Gare de l'Est",
        dessertes: [
          { gare: "Chaumont", heure: "16:00", arret: 3 },
          { gare: "Bar-Sur-Aube", heure: "16:36", arret: 1 },
          { gare: "Vendeuvre (Aube)", heure: "16:54", arret: 1 },
          { gare: "Troyes", heure: "17:24", arret: 2 },
          { gare: "Romilly-sur-Seine", heure: "17:51", arret: 1 },
          { gare: "Nogent-sur-Seine", heure: "18:07", arret: 1 },
          { gare: "Gare de l'Est", heure: "19:32", arret: 5 }
        ]
      },
      {
        nom: "Gare de l'Est → Chaumont",
        dessertes: [
          { gare: "Gare de l'Est", heure: "20:00", arret: 5 },
          { gare: "Nogent-sur-Seine", heure: "21:29", arret: 1 },
          { gare: "Romilly-sur-Seine", heure: "21:45", arret: 1 },
          { gare: "Troyes", heure: "22:11", arret: 2 },
          { gare: "Vendeuvre (Aube)", heure: "22:42", arret: 1 },
          { gare: "Bar-Sur-Aube", heure: "23:00", arret: 1 },
          { gare: "Chaumont", heure: "23:34", arret: 3 }
        ]
      }
    ]
  },

  {
    id: "FLUO IC Chm PEst 3",
    nom: "CoradiaLiner fluoGrandEst 6C",
    moteurs: ["25kV CA", "1.5kV CC", "diesel"],
    vitesseMax: 160,
    capacite: { premiere: 90, seconde: 270 },
    trajets: [
      {
        nom: "Gare de l'Est → Chaumont",
        dessertes: [
          { gare: "Gare de l'Est", heure: "06:30", arret: 5 },
          { gare: "Nogent-sur-Seine", heure: "07:59", arret: 1 },
          { gare: "Romilly-sur-Seine", heure: "08:15", arret: 1 },
          { gare: "Troyes", heure: "08:41", arret: 2 },
          { gare: "Vendeuvre (Aube)", heure: "09:12", arret: 1 },
          { gare: "Bar-Sur-Aube", heure: "09:30", arret: 1 },
          { gare: "Chaumont", heure: "10:04", arret: 3 }
        ]
      },
      {
        nom: "Chaumont → Gare de l'Est",
        dessertes: [
          { gare: "Chaumont", heure: "11:30", arret: 3 },
          { gare: "Bar-Sur-Aube", heure: "12:06", arret: 1 },
          { gare: "Vendeuvre (Aube)", heure: "12:24", arret: 1 },
          { gare: "Troyes", heure: "12:54", arret: 2 },
          { gare: "Romilly-sur-Seine", heure: "13:21", arret: 1 },
          { gare: "Nogent-sur-Seine", heure: "13:37", arret: 1 },
          { gare: "Gare de l'Est", heure: "15:02", arret: 5 }
        ]
      },
      {
        nom: "Gare de l'Est → Chaumont",
        dessertes: [
          { gare: "Gare de l'Est", heure: "15:32", arret: 5 },
          { gare: "Nogent-sur-Seine", heure: "17:01", arret: 1 },
          { gare: "Romilly-sur-Seine", heure: "17:17", arret: 1 },
          { gare: "Troyes", heure: "17:43", arret: 2 },
          { gare: "Vendeuvre (Aube)", heure: "18:14", arret: 1 },
          { gare: "Bar-Sur-Aube", heure: "18:32", arret: 1 },
          { gare: "Chaumont", heure: "19:06", arret: 3 }
        ]
      },
      {
        nom: "Chaumont → Gare de l'Est",
        dessertes: [
          { gare: "Chaumont", heure: "19:20", arret: 3 },
          { gare: "Bar-Sur-Aube", heure: "19:56", arret: 1 },
          { gare: "Vendeuvre (Aube)", heure: "20:14", arret: 1 },
          { gare: "Troyes", heure: "20:44", arret: 2 },
          { gare: "Romilly-sur-Seine", heure: "21:11", arret: 1 },
          { gare: "Nogent-sur-Seine", heure: "21:27", arret: 1 },
          { gare: "Gare de l'Est", heure: "22:52", arret: 5 }
        ]
      }
    ]
  },

  {
    id: "FLUO IC Chm PEst 4",
    nom: "CoradiaLiner 6C",
    moteurs: ["25kV CA", "1.5kV CC", "diesel"],
    vitesseMax: 160,
    capacite: { premiere: 90, seconde: 270 },
    trajets: [
      {
        nom: "Gare de l'Est → Chaumont",
        dessertes: [
          { gare: "Gare de l'Est", heure: "08:30", arret: 5 },
          { gare: "Nogent-sur-Seine", heure: "09:59", arret: 1 },
          { gare: "Romilly-sur-Seine", heure: "10:15", arret: 1 },
          { gare: "Troyes", heure: "10:41", arret: 2 },
          { gare: "Vendeuvre (Aube)", heure: "11:12", arret: 1 },
          { gare: "Bar-Sur-Aube", heure: "11:30", arret: 1 },
          { gare: "Chaumont", heure: "12:04", arret: 3 }
        ]
      },
      {
        nom: "Chaumont → Gare de l'Est",
        dessertes: [
          { gare: "Chaumont", heure: "13:30", arret: 3 },
          { gare: "Bar-Sur-Aube", heure: "14:06", arret: 1 },
          { gare: "Vendeuvre (Aube)", heure: "14:24", arret: 1 },
          { gare: "Troyes", heure: "14:54", arret: 2 },
          { gare: "Romilly-sur-Seine", heure: "15:21", arret: 1 },
          { gare: "Nogent-sur-Seine", heure: "15:37", arret: 1 },
          { gare: "Gare de l'Est", heure: "17:02", arret: 5 }
        ]
      },
      {
        nom: "Gare de l'Est → Troyes",
        dessertes: [
          { gare: "Gare de l'Est", heure: "17:30", arret: 5 },
          { gare: "Nogent-sur-Seine", heure: "18:59", arret: 1 },
          { gare: "Romilly-sur-Seine", heure: "19:15", arret: 1 },
          { gare: "Troyes", heure: "19:41", arret: 4 }
        ]
      },
      {
        nom: "Troyes → Gare de l'Est",
        dessertes: [
          { gare: "Troyes", heure: "19:50", arret: 4 },
          { gare: "Romilly-sur-Seine", heure: "20:19", arret: 1 },
          { gare: "Nogent-sur-Seine", heure: "20:35", arret: 1 },
          { gare: "Gare de l'Est", heure: "22:00", arret: 5 }
        ]
      }
    ]
  },

  {
    id: "FLUO IC Djn PEst",
    nom: "CoradiaLiner 6C",
    moteurs: ["25kV CA", "1.5kV CC", "diesel"],
    vitesseMax: 160,
    capacite: { premiere: 90, seconde: 270 },
    trajets: [
      {
        nom: "Dijon-Ville → Gare de l'Est",
        dessertes: [
          { gare: "Dijon-Ville", heure: "07:00", arret: 2 },
          { gare: "Dijon Porte Neuve", heure: "07:07", arret: 1 },
          { gare: "Is-sur-tille", heure: "07:25", arret: 1 },
          { gare: "Culmont-Chalindrey", heure: "08:00", arret: 1 },
          { gare: "Langres", heure: "08:10", arret: 1 },
          { gare: "Chaumont", heure: "08:34", arret: 2 },
          { gare: "Bar-Sur-Aube", heure: "09:09", arret: 1 },
          { gare: "Vendeuvre (Aube)", heure: "09:27", arret: 1 },
          { gare: "Troyes", heure: "09:57", arret: 4 },
          { gare: "Romilly-sur-Seine", heure: "10:26", arret: 1 },
          { gare: "Nogent-sur-Seine", heure: "10:42", arret: 1 },
          { gare: "Gare de l'Est", heure: "12:07", arret: 5 }
        ]
      },
      {
        nom: "Gare de l'Est → Dijon-Ville",
        dessertes: [
          { gare: "Gare de l'Est", heure: "12:25", arret: 5 },
          { gare: "Nogent-sur-Seine", heure: "13:54", arret: 1 },
          { gare: "Romilly-sur-Seine", heure: "14:10", arret: 1 },
          { gare: "Troyes", heure: "14:36", arret: 2 }
        ]
      },
      {
        nom: "Troyes → Gare de l'Est",
        dessertes: [
          { gare: "Troyes", heure: "15:40", arret: 2 },
          { gare: "Romilly-sur-Seine", heure: "16:07", arret: 1 },
          { gare: "Nogent-sur-Seine", heure: "16:23", arret: 1 },
          { gare: "Gare de l'Est", heure: "17:48", arret: 5 }
        ]
      },
      {
        nom: "Gare de l'Est → Dijon-Ville",
        dessertes: [
          { gare: "Gare de l'Est", heure: "18:18", arret: 5 },
          { gare: "Nogent-sur-Seine", heure: "19:47", arret: 1 },
          { gare: "Romilly-sur-Seine", heure: "20:03", arret: 1 },
          { gare: "Troyes", heure: "20:29", arret: 2 },
          { gare: "Vendeuvre (Aube)", heure: "21:00", arret: 1 },
          { gare: "Bar-Sur-Aube", heure: "21:18", arret: 1 },
          { gare: "Chaumont", heure: "21:52", arret: 1 },
          { gare: "Langres", heure: "22:16", arret: 1 },
          { gare: "Culmont-Chalindrey", heure: "22:26", arret: 1 },
          { gare: "Is-sur-tille", heure: "23:01", arret: 1 },
          { gare: "Dijon Porte Neuve", heure: "23:19", arret: 1 },
          { gare: "Dijon-Ville", heure: "23:25", arret: 1 }
        ]
      }
    ]
  },

  {
    id: "FLUO IC Epi Str",
    nom: "AGC fluoGrandEst 3C",
    moteurs: ["diesel"],
    vitesseMax: 160,
    capacite: { premiere: 48, seconde: 268 },
    composition: ["AGC fluoGrandEst 3C"],
    trajets: [
      {
        nom: "Épinal → Strasbourg",
        dessertes: [
          { gare: "Épinal", heure: "06:55", arret: 4 },
          { gare: "Arches", heure: "07:12", arret: 1 },
          { gare: "Bruyères", heure: "07:41", arret: 1 },
          { gare: "Saint-Léonard", heure: "08:13", arret: 1 },
          { gare: "Saint-Dié-des-Vosges", heure: "08:24", arret: 4 },
          { gare: "Provenchères-Sur-Fave", heure: "08:44", arret: 1 },
          { gare: "Saales", heure: "09:15", arret: 1 },
          { gare: "Bourg-Bruche", heure: "09:21", arret: 1 },
          { gare: "St-Blaise-Roche-Poutay", heure: "09:29", arret: 1 },
          { gare: "Fouday", heure: "09:34", arret: 1 },
          { gare: "Schirmeck - La Broque", heure: "09:43", arret: 1 },
          { gare: "Urmatt", heure: "10:01", arret: 1 },
          { gare: "Molsheim", heure: "10:22", arret: 1 },
          { gare: "Entzheim-Aéroport", heure: "10:38", arret: 2 },
          { gare: "Strasbourg", heure: "10:53", arret: 5 }
        ]
      },
      {
        nom: "Strasbourg → Épinal",
        dessertes: [
          { gare: "Strasbourg", heure: "11:15", arret: 5 },
          { gare: "Molsheim", heure: "11:48", arret: 1 },
          { gare: "Schirmeck - La Broque", heure: "12:25", arret: 1 },
          { gare: "Fouday", heure: "12:34", arret: 1 },
          { gare: "St-Blaise-Roche-Poutay", heure: "12:39", arret: 1 },
          { gare: "Bourg-Bruche", heure: "12:47", arret: 1 },
          { gare: "Saales", heure: "12:53", arret: 1 },
          { gare: "Provenchères-Sur-Fave", heure: "13:24", arret: 1 },
          { gare: "Saint-Dié-des-Vosges", heure: "13:41", arret: 4 },
          { gare: "Saint-Léonard", heure: "13:55", arret: 1 },
          { gare: "Bruyères", heure: "14:27", arret: 1 },
          { gare: "Arches", heure: "14:56", arret: 1 },
          { gare: "Épinal", heure: "15:10", arret: 4 }
        ]
      },
      {
        nom: "Épinal → Saint-Dié-des-Vosges",
        dessertes: [
          { gare: "Épinal", heure: "16:55", arret: 4 },
          { gare: "Arches", heure: "17:12", arret: 1 },
          { gare: "Bruyères", heure: "17:41", arret: 1 },
          { gare: "Saint-Léonard", heure: "18:13", arret: 1 },
          { gare: "Saint-Dié-des-Vosges", heure: "18:24", arret: 4 }
        ]
      },
      {
        nom: "Saint-Dié-des-Vosges → Épinal",
        dessertes: [
          { gare: "Saint-Dié-des-Vosges", heure: "19:30", arret: 4 },
          { gare: "Saint-Léonard", heure: "19:44", arret: 1 },
          { gare: "Bruyères", heure: "20:16", arret: 1 },
          { gare: "Arches", heure: "20:45", arret: 1 },
          { gare: "Épinal", heure: "20:59", arret: 4 }
        ]
      }
    ]
  },

  {
    id: "FLUO IC Mtz Epy",
    nom: "BB22200 RC Fluo",
    moteurs: ["25kV CA", "1.5kV CC"],
    vitesseMax: 160,
    capacite: { premiere: 120, seconde: 352 },
    composition: ["VTU A Fluo", "VTU A Fluo", "VTU Fluo", "VTU Fluo", "VTU Fluo", "VTU Fluo"],
    trajets: [
      {
        nom: "Metz → Epernay",
        dessertes: [
          { gare: "Metz", heure: "09:45", arret: 2 },
          { gare: "Ars-sur-Moselle", heure: "09:57", arret: 1 },
          { gare: "Onville", heure: "10:08", arret: 1 },
          { gare: "Lérouville", heure: "10:45", arret: 1 },
          { gare: "Nançois - Tronville", heure: "11:02", arret: 1 },
          { gare: "Bar-le-Duc", heure: "11:12", arret: 2 },
          { gare: "Revigny", heure: "11:26", arret: 1 },
          { gare: "Vitry-le-François", heure: "11:53", arret: 1 },
          { gare: "Châlons-En-Champagne", heure: "12:15", arret: 1 },
          { gare: "Epernay", heure: "12:41", arret: 2 }
        ]
      },
      {
        nom: "Epernay → Metz",
        dessertes: [
          { gare: "Epernay", heure: "18:12", arret: 2 },
          { gare: "Châlons-En-Champagne", heure: "18:39", arret: 1 },
          { gare: "Vitry-le-François", heure: "19:01", arret: 1 },
          { gare: "Revigny", heure: "19:28", arret: 1 },
          { gare: "Bar-le-Duc", heure: "19:41", arret: 2 },
          { gare: "Nançois - Tronville", heure: "19:52", arret: 1 },
          { gare: "Lérouville", heure: "20:09", arret: 1 },
          { gare: "Onville", heure: "20:46", arret: 1 },
          { gare: "Ars-sur-Moselle", heure: "20:57", arret: 1 },
          { gare: "Metz", heure: "21:08", arret: 2 }
        ]
      }
    ]
  },

  {
    id: "FLUO IC Mulh-PEst 1",
    nom: "CoradiaLiner fluoGrandEst 6C",
    moteurs: ["25kV CA", "1.5kV CC", "diesel"],
    vitesseMax: 160,
    capacite: { premiere: 90, seconde: 270 },
    trajets: [
      {
        nom: "Mulhouse → Gare de l'Est",
        dessertes: [
          { gare: "Mulhouse", heure: "07:25", arret: 5 },
          { gare: "Altkirch", heure: "07:42", arret: 1 },
          { gare: "Belfort-Ville", heure: "08:10", arret: 2 },
          { gare: "Lure", heure: "08:39", arret: 1 },
          { gare: "Vesoul", heure: "09:05", arret: 1 },
          { gare: "Culmont-Chalindrey", heure: "10:01", arret: 1 },
          { gare: "Langres", heure: "10:11", arret: 1 },
          { gare: "Chaumont", heure: "10:35", arret: 2 },
          { gare: "Bar-Sur-Aube", heure: "11:10", arret: 1 },
          { gare: "Troyes", heure: "11:56", arret: 2 },
          { gare: "Romilly-sur-Seine", heure: "12:23", arret: 1 },
          { gare: "Nogent-sur-Seine", heure: "12:39", arret: 1 },
          { gare: "Gare de l'Est", heure: "14:04", arret: 5 }
        ]
      },
      {
        nom: "Gare de l'Est → Mulhouse",
        dessertes: [
          { gare: "Gare de l'Est", heure: "14:34", arret: 5 },
          { gare: "Nogent-sur-Seine", heure: "16:03", arret: 1 },
          { gare: "Romilly-sur-Seine", heure: "16:19", arret: 1 },
          { gare: "Troyes", heure: "16:45", arret: 2 },
          { gare: "Bar-Sur-Aube", heure: "17:32", arret: 1 },
          { gare: "Chaumont", heure: "18:06", arret: 2 },
          { gare: "Langres", heure: "18:31", arret: 1 },
          { gare: "Culmont-Chalindrey", heure: "18:41", arret: 1 },
          { gare: "Vesoul", heure: "19:37", arret: 1 },
          { gare: "Lure", heure: "20:03", arret: 1 },
          { gare: "Belfort-Ville", heure: "20:31", arret: 2 },
          { gare: "Altkirch", heure: "21:00", arret: 1 },
          { gare: "Mulhouse", heure: "21:13", arret: 5 }
        ]
      }
    ]
  },

  {
    id: "FLUO IC Mulh-PEst 2",
    nom: "CoradiaLiner 6C",
    moteurs: ["25kV CA", "1.5kV CC", "diesel"],
    vitesseMax: 160,
    capacite: { premiere: 90, seconde: 270 },
    trajets: [
      {
        nom: "Gare de l'Est → Mulhouse",
        dessertes: [
          { gare: "Gare de l'Est", heure: "07:25", arret: 5 },
          { gare: "Nogent-sur-Seine", heure: "08:54", arret: 1 },
          { gare: "Romilly-sur-Seine", heure: "09:10", arret: 1 },
          { gare: "Troyes", heure: "09:36", arret: 4 },
          { gare: "Bar-Sur-Aube", heure: "10:25", arret: 1 },
          { gare: "Chaumont", heure: "10:59", arret: 2 },
          { gare: "Langres", heure: "11:24", arret: 1 },
          { gare: "Culmont-Chalindrey", heure: "11:34", arret: 1 },
          { gare: "Vesoul", heure: "12:30", arret: 1 },
          { gare: "Lure", heure: "12:56", arret: 1 },
          { gare: "Belfort-Ville", heure: "13:24", arret: 2 },
          { gare: "Altkirch", heure: "13:53", arret: 1 },
          { gare: "Mulhouse", heure: "14:06", arret: 5 }
        ]
      },
      {
        nom: "Mulhouse → Gare de l'Est",
        dessertes: [
          { gare: "Mulhouse", heure: "14:40", arret: 5 },
          { gare: "Altkirch", heure: "14:57", arret: 1 },
          { gare: "Belfort-Ville", heure: "15:25", arret: 2 },
          { gare: "Lure", heure: "15:54", arret: 1 },
          { gare: "Vesoul", heure: "16:20", arret: 1 },
          { gare: "Culmont-Chalindrey", heure: "17:16", arret: 1 },
          { gare: "Langres", heure: "17:26", arret: 1 },
          { gare: "Chaumont", heure: "17:50", arret: 2 },
          { gare: "Bar-Sur-Aube", heure: "18:25", arret: 1 },
          { gare: "Troyes", heure: "19:11", arret: 4 },
          { gare: "Romilly-sur-Seine", heure: "19:40", arret: 1 },
          { gare: "Nogent-sur-Seine", heure: "19:56", arret: 1 },
          { gare: "Gare de l'Est", heure: "21:21", arret: 5 }
        ]
      }
    ]
  },

  {
    id: "FLUO IC PEst UM",
    nom: "CoradiaLiner 6C",
    moteurs: ["25kV CA", "1.5kV CC", "diesel"],
    vitesseMax: 160,
    capacite: { premiere: 90, seconde: 270 },
    trajets: [
      {
        nom: "Gare de l'Est → Troyes",
        dessertes: [
          { gare: "Gare de l'Est", heure: "05:30", arret: 5, jours: ["LU", "ME", "JE", "VE", "DI"] },
          { gare: "Nogent-sur-Seine", heure: "06:59", arret: 1, jours: ["LU", "ME", "JE", "VE", "DI"] },
          { gare: "Romilly-sur-Seine", heure: "07:15", arret: 1, jours: ["LU", "ME", "JE", "VE", "DI"] },
          { gare: "Troyes", heure: "07:41", arret: 2, jours: ["LU", "ME", "JE", "VE", "DI"] }
        ]
      },
      {
        nom: "Vittel → Gare de l'Est",
        dessertes: [
          { gare: "Vittel", heure: "07:05", arret: 2, jours: ["MA", "SA"] },
          { gare: "Contrexéville", heure: "07:14", arret: 1, jours: ["MA", "SA"] },
          { gare: "Culmont-Chalindrey", heure: "08:35", arret: 1, jours: ["MA", "SA"] },
          { gare: "Langres", heure: "08:45", arret: 1, jours: ["MA", "SA"] },
          { gare: "Chaumont", heure: "09:09", arret: 2, jours: ["MA", "SA"] },
          { gare: "Bar-Sur-Aube", heure: "09:44", arret: 1, jours: ["MA", "SA"] },
          { gare: "Vendeuvre (Aube)", heure: "10:02", arret: 1, jours: ["MA", "SA"] },
          { gare: "Troyes", heure: "10:32", arret: 2, jours: ["MA", "SA"] },
          { gare: "Romilly-sur-Seine", heure: "10:59", arret: 1, jours: ["LU", "VE"] },
          { gare: "Nogent-sur-Seine", heure: "11:15", arret: 1, jours: ["LU", "VE"] },
          { gare: "Gare de l'Est", heure: "12:40", arret: 5, jours: ["LU", "VE"] }
        ]
      },
      {
        nom: "Troyes → Gare de l'Est",
        dessertes: [
          { gare: "Troyes", heure: "08:25", arret: 3, jours: ["LU", "ME", "JE", "VE", "DI"] },
          { gare: "Romilly-sur-Seine", heure: "08:53", arret: 1, jours: ["LU", "ME", "JE", "VE", "DI"] },
          { gare: "Nogent-sur-Seine", heure: "09:09", arret: 1, jours: ["LU", "ME", "JE", "VE", "DI"] },
          { gare: "Gare de l'Est", heure: "10:34", arret: 5, jours: ["LU", "ME", "JE", "VE", "DI"] }
        ]
      },
      {
        nom: "Gare de l'Est → Vittel",
        dessertes: [
          { gare: "Gare de l'Est", heure: "11:25", arret: 5, jours: ["ME", "DI"] },
          { gare: "Longueville", heure: "12:39", arret: 1, jours: ["ME", "DI"] },
          { gare: "Nogent-sur-Seine", heure: "12:55", arret: 1, jours: ["ME", "DI"] },
          { gare: "Romilly-sur-Seine", heure: "13:11", arret: 1, jours: ["ME", "DI"] },
          { gare: "Troyes", heure: "13:37", arret: 2, jours: ["ME", "DI"] },
          { gare: "Vendeuvre (Aube)", heure: "14:08", arret: 1, jours: ["ME", "DI"] },
          { gare: "Bar-Sur-Aube", heure: "14:26", arret: 1, jours: ["ME", "DI"] },
          { gare: "Chaumont", heure: "15:00", arret: 1, jours: ["ME", "DI"] },
          { gare: "Langres", heure: "15:24", arret: 1, jours: ["ME", "DI"] },
          { gare: "Culmont-Chalindrey", heure: "15:34", arret: 1, jours: ["ME", "DI"] },
          { gare: "Contrexéville", heure: "16:55", arret: 1, jours: ["ME", "DI"] },
          { gare: "Vittel", heure: "17:03", arret: 2, jours: ["ME", "DI"] }
        ]
      },
      {
        nom: "Gare de l'Est → Troyes",
        dessertes: [
          { gare: "Gare de l'Est", heure: "13:25", arret: 5, jours: ["LU", "MA", "JE", "VE", "SA"] },
          { gare: "Nogent-sur-Seine", heure: "14:54", arret: 1, jours: ["LU", "MA", "JE", "VE", "SA"] },
          { gare: "Romilly-sur-Seine", heure: "15:10", arret: 1, jours: ["LU", "MA", "JE", "VE", "SA"] },
          { gare: "Troyes", heure: "15:36", arret: 2, jours: ["LU", "MA", "JE", "VE", "SA"] }
        ]
      },
      {
        nom: "Troyes → Gare de l'Est",
        dessertes: [
          { gare: "Troyes", heure: "15:40", arret: 2, jours: ["LU", "MA", "JE", "VE", "SA"] },
          { gare: "Romilly-sur-Seine", heure: "16:07", arret: 1, jours: ["LU", "MA", "JE", "VE", "SA"] },
          { gare: "Nogent-sur-Seine", heure: "16:23", arret: 1, jours: ["LU", "MA", "JE", "VE", "SA"] },
          { gare: "Gare de l'Est", heure: "17:48", arret: 5, jours: ["LU", "MA", "JE", "VE", "SA"] }
        ]
      },
      {
        nom: "Vittel → Gare de l'Est",
        dessertes: [
          { gare: "Vittel", heure: "17:16", arret: 3, jours: ["ME", "DI"] },
          { gare: "Contrexéville", heure: "17:26", arret: 1, jours: ["ME", "DI"] },
          { gare: "Culmont-Chalindrey", heure: "18:47", arret: 1, jours: ["ME", "DI"] },
          { gare: "Langres", heure: "18:57", arret: 1, jours: ["ME", "DI"] },
          { gare: "Chaumont", heure: "19:21", arret: 2, jours: ["ME", "DI"] },
          { gare: "Bar-Sur-Aube", heure: "19:56", arret: 1, jours: ["ME", "DI"] },
          { gare: "Vendeuvre (Aube)", heure: "20:14", arret: 1, jours: ["ME", "DI"] },
          { gare: "Troyes", heure: "20:44", arret: 2, jours: ["ME", "DI"] },
          { gare: "Romilly-sur-Seine", heure: "21:11", arret: 1, jours: ["ME", "DI"] },
          { gare: "Nogent-sur-Seine", heure: "21:27", arret: 1, jours: ["ME", "DI"] },
          { gare: "Gare de l'Est", heure: "22:52", arret: 5, jours: ["ME", "DI"] }
        ]
      },
      {
        nom: "Gare de l'Est → Vittel",
        dessertes: [
          { gare: "Gare de l'Est", heure: "18:00", arret: 5, jours: ["LU", "VE"] },
          { gare: "Nogent-sur-Seine", heure: "19:29", arret: 1, jours: ["LU", "VE"] },
          { gare: "Romilly-sur-Seine", heure: "19:45", arret: 1, jours: ["LU", "VE"] },
          { gare: "Troyes", heure: "20:11", arret: 1, jours: ["LU", "VE"] },
          { gare: "Vendeuvre (Aube)", heure: "20:41", arret: 1, jours: ["LU", "VE"] },
          { gare: "Bar-Sur-Aube", heure: "20:59", arret: 1, jours: ["LU", "VE"] },
          { gare: "Chaumont", heure: "21:33", arret: 1, jours: ["LU", "VE"] },
          { gare: "Langres", heure: "21:57", arret: 1, jours: ["LU", "VE"] },
          { gare: "Culmont-Chalindrey", heure: "22:07", arret: 1, jours: ["LU", "VE"] },
          { gare: "Contrexéville", heure: "23:28", arret: 1, jours: ["LU", "VE"] },
          { gare: "Vittel", heure: "23:36", arret: 1, jours: ["LU", "VE"] }
        ]
      }
    ]
  },

  {
    id: "FLUO IC Rms Mtz",
    nom: "CoradiaLiner fluoGrandEst 6C",
    moteurs: ["25kV CA", "1.5kV CC", "diesel"],
    vitesseMax: 160,
    capacite: { premiere: 90, seconde: 270 },
    trajets: [
      {
        nom: "Reims → Metz",
        dessertes: [
          { gare: "Reims", heure: "08:00", arret: 4 },
          { gare: "Châlons-En-Champagne", heure: "08:46", arret: 1 },
          { gare: "Vitry-le-François", heure: "09:08", arret: 1 },
          { gare: "Bar-le-Duc", heure: "09:47", arret: 2 },
          { gare: "Lérouville", heure: "10:14", arret: 1 },
          { gare: "Onville", heure: "10:51", arret: 1 },
          { gare: "Metz", heure: "11:12", arret: 4 }
        ]
      },
      {
        nom: "Metz → Reims",
        dessertes: [
          { gare: "Metz", heure: "11:42", arret: 4 },
          { gare: "Onville", heure: "12:06", arret: 1 },
          { gare: "Lérouville", heure: "12:43", arret: 1 },
          { gare: "Bar-le-Duc", heure: "13:09", arret: 2 },
          { gare: "Vitry-le-François", heure: "13:49", arret: 1 },
          { gare: "Châlons-En-Champagne", heure: "14:11", arret: 1 },
          { gare: "Reims", heure: "14:54", arret: 4 }
        ]
      },
      {
        nom: "Reims → Metz",
        dessertes: [
          { gare: "Reims", heure: "15:05", arret: 4 },
          { gare: "Châlons-En-Champagne", heure: "15:51", arret: 1 },
          { gare: "Vitry-le-François", heure: "16:13", arret: 1 },
          { gare: "Bar-le-Duc", heure: "16:52", arret: 2 },
          { gare: "Lérouville", heure: "17:19", arret: 1 },
          { gare: "Onville", heure: "17:56", arret: 1 },
          { gare: "Metz", heure: "18:17", arret: 4 }
        ]
      },
      {
        nom: "Metz → Reims",
        dessertes: [
          { gare: "Metz", heure: "18:42", arret: 4 },
          { gare: "Onville", heure: "19:06", arret: 1 },
          { gare: "Lérouville", heure: "19:43", arret: 1 },
          { gare: "Bar-le-Duc", heure: "20:09", arret: 2 },
          { gare: "Vitry-le-François", heure: "20:49", arret: 1 },
          { gare: "Châlons-En-Champagne", heure: "21:11", arret: 1 },
          { gare: "Reims", heure: "21:54", arret: 4 }
        ]
      }
    ]
  },

  {
    id: "FLUO IC StDi PEst 1",
    nom: "CoradiaLiner 6C",
    moteurs: ["25kV CA", "1.5kV CC", "diesel"],
    vitesseMax: 160,
    capacite: { premiere: 90, seconde: 270 },
    trajets: [
      {
        nom: "Saint-Dizier → Gare de l'Est",
        dessertes: [
          { gare: "Saint-Dizier", heure: "07:00", arret: 2 },
          { gare: "Vitry-le-François", heure: "07:27", arret: 1 },
          { gare: "Châlons-En-Champagne", heure: "07:49", arret: 1 },
          { gare: "Epernay", heure: "08:15", arret: 1 },
          { gare: "Dormans", heure: "08:36", arret: 1 },
          { gare: "Château-Thierry", heure: "08:52", arret: 1 },
          { gare: "Meaux", heure: "09:43", arret: 1 },
          { gare: "Gare de l'Est", heure: "10:25", arret: 4 }
        ]
      },
      {
        nom: "Gare de l'Est → Saint-Dizier",
        dessertes: [
          { gare: "Gare de l'Est", heure: "10:55", arret: 4 },
          { gare: "Meaux", heure: "11:40", arret: 1 },
          { gare: "Château-Thierry", heure: "12:31", arret: 1 },
          { gare: "Dormans", heure: "12:47", arret: 1 },
          { gare: "Epernay", heure: "13:08", arret: 1 },
          { gare: "Châlons-En-Champagne", heure: "13:34", arret: 1 },
          { gare: "Vitry-le-François", heure: "13:56", arret: 1 },
          { gare: "Saint-Dizier", heure: "14:22", arret: 2 }
        ]
      },
      {
        nom: "Saint-Dizier → Gare de l'Est",
        dessertes: [
          { gare: "Saint-Dizier", heure: "15:00", arret: 2 },
          { gare: "Vitry-le-François", heure: "15:27", arret: 1 },
          { gare: "Châlons-En-Champagne", heure: "15:49", arret: 1 },
          { gare: "Epernay", heure: "16:15", arret: 1 },
          { gare: "Dormans", heure: "16:36", arret: 1 },
          { gare: "Château-Thierry", heure: "16:52", arret: 1 },
          { gare: "Meaux", heure: "17:43", arret: 1 },
          { gare: "Gare de l'Est", heure: "18:25", arret: 4 }
        ]
      },
      {
        nom: "Gare de l'Est → Saint-Dizier",
        dessertes: [
          { gare: "Gare de l'Est", heure: "18:55", arret: 4 },
          { gare: "Meaux", heure: "19:40", arret: 1 },
          { gare: "Château-Thierry", heure: "20:31", arret: 1 },
          { gare: "Dormans", heure: "20:47", arret: 1 },
          { gare: "Epernay", heure: "21:08", arret: 1 },
          { gare: "Châlons-En-Champagne", heure: "21:34", arret: 1 },
          { gare: "Vitry-le-François", heure: "21:56", arret: 1 },
          { gare: "Saint-Dizier", heure: "22:22", arret: 2 }
        ]
      }
    ]
  },

  {
    id: "FLUO IC StDi PEst 2",
    nom: "CoradiaLiner 6C",
    moteurs: ["25kV CA", "1.5kV CC", "diesel"],
    vitesseMax: 160,
    capacite: { premiere: 90, seconde: 270 },
    trajets: [
      {
        nom: "Saint-Dizier → Gare de l'Est",
        dessertes: [
          { gare: "Saint-Dizier", heure: "08:00", arret: 2 },
          { gare: "Vitry-le-François", heure: "08:27", arret: 1 },
          { gare: "Châlons-En-Champagne", heure: "08:49", arret: 1 },
          { gare: "Epernay", heure: "09:15", arret: 1 },
          { gare: "Dormans", heure: "09:36", arret: 1 },
          { gare: "Château-Thierry", heure: "09:52", arret: 1 },
          { gare: "Meaux", heure: "10:43", arret: 1 },
          { gare: "Gare de l'Est", heure: "11:25", arret: 4 }
        ]
      },
      {
        nom: "Gare de l'Est → Saint-Dizier",
        dessertes: [
          { gare: "Gare de l'Est", heure: "11:55", arret: 4 },
          { gare: "Meaux", heure: "12:40", arret: 1 },
          { gare: "Château-Thierry", heure: "13:31", arret: 1 },
          { gare: "Dormans", heure: "13:47", arret: 1 },
          { gare: "Epernay", heure: "14:08", arret: 1 },
          { gare: "Châlons-En-Champagne", heure: "14:34", arret: 1 },
          { gare: "Vitry-le-François", heure: "14:56", arret: 1 },
          { gare: "Saint-Dizier", heure: "15:22", arret: 2 }
        ]
      },
      {
        nom: "Saint-Dizier → Gare de l'Est",
        dessertes: [
          { gare: "Saint-Dizier", heure: "17:00", arret: 2 },
          { gare: "Vitry-le-François", heure: "17:27", arret: 1 },
          { gare: "Châlons-En-Champagne", heure: "17:49", arret: 1 },
          { gare: "Epernay", heure: "18:15", arret: 1 },
          { gare: "Dormans", heure: "18:36", arret: 1 },
          { gare: "Château-Thierry", heure: "18:52", arret: 1 },
          { gare: "Meaux", heure: "19:43", arret: 1 },
          { gare: "Gare de l'Est", heure: "20:25", arret: 4 }
        ]
      },
      {
        nom: "Gare de l'Est → Saint-Dizier",
        dessertes: [
          { gare: "Gare de l'Est", heure: "20:30", arret: 4 },
          { gare: "Meaux", heure: "21:15", arret: 1 },
          { gare: "Château-Thierry", heure: "22:06", arret: 1 },
          { gare: "Dormans", heure: "22:22", arret: 1 },
          { gare: "Epernay", heure: "22:43", arret: 1 },
          { gare: "Châlons-En-Champagne", heure: "23:09", arret: 1 },
          { gare: "Vitry-le-François", heure: "23:31", arret: 1 },
          { gare: "Saint-Dizier", heure: "23:57", arret: 2 }
        ]
      }
    ]
  },

  {
    id: "FLUO IC Str Epi",
    nom: "CC72100 SNCF",
    moteurs: ["diesel"],
    vitesseMax: 140,
    capacite: { premiere: 40, seconde: 432 },
    composition: ["RRR Régionales FLUO", "RRR Régionales FLUO"],
    trajets: [
      {
        nom: "Strasbourg → Épinal",
        dessertes: [
          { gare: "Strasbourg", heure: "06:55", arret: 4 },
          { gare: "Entzheim-Aéroport", heure: "07:12", arret: 1 },
          { gare: "Molsheim", heure: "07:28", arret: 1 },
          { gare: "Urmatt", heure: "07:49", arret: 1 },
          { gare: "Schirmeck - La Broque", heure: "08:07", arret: 1 },
          { gare: "Fouday", heure: "08:16", arret: 1 },
          { gare: "St-Blaise-Roche-Poutay", heure: "08:21", arret: 1 },
          { gare: "Bourg-Bruche", heure: "08:29", arret: 1 },
          { gare: "Saales", heure: "08:35", arret: 1 },
          { gare: "Provenchères-Sur-Fave", heure: "09:06", arret: 1 },
          { gare: "Saint-Dié-des-Vosges", heure: "09:23", arret: 4 },
          { gare: "Saint-Léonard", heure: "09:37", arret: 1 },
          { gare: "Bruyères", heure: "10:09", arret: 1 },
          { gare: "Arches", heure: "10:38", arret: 1 },
          { gare: "Épinal", heure: "10:52", arret: 5 }
        ]
      },
      {
        nom: "Épinal → Strasbourg",
        dessertes: [
          { gare: "Épinal", heure: "11:42", arret: 5 },
          { gare: "Arches", heure: "12:00", arret: 1 },
          { gare: "Bruyères", heure: "12:29", arret: 1 },
          { gare: "Saint-Léonard", heure: "13:01", arret: 1 },
          { gare: "Saint-Dié-des-Vosges", heure: "13:12", arret: 4 },
          { gare: "Provenchères-Sur-Fave", heure: "13:32", arret: 1 },
          { gare: "Saales", heure: "14:03", arret: 1 },
          { gare: "Bourg-Bruche", heure: "14:09", arret: 1 },
          { gare: "St-Blaise-Roche-Poutay", heure: "14:17", arret: 1 },
          { gare: "Fouday", heure: "14:22", arret: 1 },
          { gare: "Schirmeck - La Broque", heure: "14:31", arret: 1 },
          { gare: "Urmatt", heure: "14:49", arret: 1 },
          { gare: "Molsheim", heure: "15:10", arret: 1 },
          { gare: "Entzheim-Aéroport", heure: "15:26", arret: 1 },
          { gare: "Strasbourg", heure: "15:40", arret: 4 }
        ]
      },
      {
        nom: "Strasbourg → Saint-Dié-des-Vosges",
        dessertes: [
          { gare: "Strasbourg", heure: "16:55", arret: 4 },
          { gare: "Entzheim-Aéroport", heure: "17:12", arret: 1 },
          { gare: "Molsheim", heure: "17:28", arret: 1 },
          { gare: "Urmatt", heure: "17:49", arret: 1 },
          { gare: "Schirmeck - La Broque", heure: "18:07", arret: 1 },
          { gare: "Fouday", heure: "18:16", arret: 1 },
          { gare: "St-Blaise-Roche-Poutay", heure: "18:21", arret: 1 },
          { gare: "Bourg-Bruche", heure: "18:29", arret: 1 },
          { gare: "Saales", heure: "18:35", arret: 1 },
          { gare: "Provenchères-Sur-Fave", heure: "19:06", arret: 1 },
          { gare: "Saint-Dié-des-Vosges", heure: "19:23", arret: 4 }
        ]
      },
      {
        nom: "Saint-Dié-des-Vosges → Strasbourg",
        dessertes: [
          { gare: "Saint-Dié-des-Vosges", heure: "20:00", arret: 4 },
          { gare: "Provenchères-Sur-Fave", heure: "20:20", arret: 1 },
          { gare: "Saales", heure: "20:51", arret: 1 },
          { gare: "Bourg-Bruche", heure: "20:57", arret: 1 },
          { gare: "St-Blaise-Roche-Poutay", heure: "21:05", arret: 1 },
          { gare: "Fouday", heure: "21:10", arret: 1 },
          { gare: "Schirmeck - La Broque", heure: "21:19", arret: 1 },
          { gare: "Urmatt", heure: "21:37", arret: 1 },
          { gare: "Molsheim", heure: "21:58", arret: 1 },
          { gare: "Entzheim-Aéroport", heure: "22:14", arret: 1 },
          { gare: "Strasbourg", heure: "22:28", arret: 4 }
        ]
      }
    ]
  },

  {
    id: "FLUO IC Str Mtz 1",
    nom: "Regiolis fluoGrandEst 6C",
    moteurs: ["25kV CA", "1.5kV CC", "diesel"],
    vitesseMax: 160,
    capacite: { premiere: 24, seconde: 304 },
    trajets: [
      {
        nom: "Strasbourg → Metz",
        dessertes: [
          { gare: "Strasbourg", heure: "07:10", arret: 4 },
          { gare: "Mommenheim", heure: "07:27", arret: 1 },
          { gare: "Saverne", heure: "07:46", arret: 1 },
          { gare: "Réding", heure: "08:09", arret: 2 },
          { gare: "Morhange", heure: "08:45", arret: 1 },
          { gare: "Remilly", heure: "09:05", arret: 1 },
          { gare: "Metz", heure: "09:25", arret: 4 }
        ]
      },
      {
        nom: "Metz → Strasbourg",
        dessertes: [
          { gare: "Metz", heure: "10:25", arret: 4 },
          { gare: "Remilly", heure: "10:48", arret: 1 },
          { gare: "Morhange", heure: "11:08", arret: 1 },
          { gare: "Réding", heure: "11:43", arret: 2 },
          { gare: "Saverne", heure: "12:07", arret: 1 },
          { gare: "Mommenheim", heure: "12:26", arret: 1 },
          { gare: "Strasbourg", heure: "12:40", arret: 4 }
        ]
      },
      {
        nom: "Strasbourg → Metz",
        dessertes: [
          { gare: "Strasbourg", heure: "13:10", arret: 4 },
          { gare: "Mommenheim", heure: "13:27", arret: 1 },
          { gare: "Saverne", heure: "13:46", arret: 1 },
          { gare: "Réding", heure: "14:09", arret: 2 },
          { gare: "Morhange", heure: "14:45", arret: 1 },
          { gare: "Remilly", heure: "15:05", arret: 1 },
          { gare: "Metz", heure: "15:25", arret: 4 }
        ]
      },
      {
        nom: "Metz → Strasbourg",
        dessertes: [
          { gare: "Metz", heure: "16:25", arret: 4 },
          { gare: "Remilly", heure: "16:48", arret: 1 },
          { gare: "Morhange", heure: "17:08", arret: 1 },
          { gare: "Réding", heure: "17:43", arret: 2 },
          { gare: "Saverne", heure: "18:07", arret: 1 },
          { gare: "Mommenheim", heure: "18:26", arret: 1 },
          { gare: "Strasbourg", heure: "18:40", arret: 4 }
        ]
      }
    ]
  },

  {
    id: "FLUO IC Str Mtz 2",
    nom: "Regiolis fluoGrandEst 6C",
    moteurs: ["25kV CA", "1.5kV CC", "diesel"],
    vitesseMax: 160,
    capacite: { premiere: 24, seconde: 304 },
    trajets: [
      {
        nom: "Metz → Strasbourg",
        dessertes: [
          { gare: "Metz", heure: "06:34", arret: 4 },
          { gare: "Remilly", heure: "06:57", arret: 1 },
          { gare: "Morhange", heure: "07:17", arret: 1 },
          { gare: "Réding", heure: "07:52", arret: 2 },
          { gare: "Saverne", heure: "08:16", arret: 1 },
          { gare: "Mommenheim", heure: "08:35", arret: 1 },
          { gare: "Strasbourg", heure: "08:49", arret: 4 }
        ]
      },
      {
        nom: "Strasbourg → Metz",
        dessertes: [
          { gare: "Strasbourg", heure: "09:10", arret: 4 },
          { gare: "Mommenheim", heure: "09:27", arret: 1 },
          { gare: "Saverne", heure: "09:46", arret: 1 },
          { gare: "Réding", heure: "10:09", arret: 2 },
          { gare: "Morhange", heure: "10:45", arret: 1 },
          { gare: "Remilly", heure: "11:05", arret: 1 },
          { gare: "Metz", heure: "11:25", arret: 4 }
        ]
      },
      {
        nom: "Metz → Strasbourg",
        dessertes: [
          { gare: "Metz", heure: "12:35", arret: 4 },
          { gare: "Remilly", heure: "12:58", arret: 1 },
          { gare: "Morhange", heure: "13:18", arret: 1 },
          { gare: "Réding", heure: "13:53", arret: 2 },
          { gare: "Saverne", heure: "14:17", arret: 1 },
          { gare: "Mommenheim", heure: "14:36", arret: 1 },
          { gare: "Strasbourg", heure: "14:50", arret: 4 }
        ]
      },
      {
        nom: "Strasbourg → Metz",
        dessertes: [
          { gare: "Strasbourg", heure: "15:10", arret: 4 },
          { gare: "Mommenheim", heure: "15:27", arret: 1 },
          { gare: "Saverne", heure: "15:46", arret: 1 },
          { gare: "Réding", heure: "16:09", arret: 2 },
          { gare: "Morhange", heure: "16:45", arret: 1 },
          { gare: "Remilly", heure: "17:05", arret: 1 },
          { gare: "Metz", heure: "17:25", arret: 4 }
        ]
      },
      {
        nom: "Metz → Strasbourg",
        dessertes: [
          { gare: "Metz", heure: "18:10", arret: 4 },
          { gare: "Remilly", heure: "18:33", arret: 1 },
          { gare: "Morhange", heure: "18:53", arret: 1 },
          { gare: "Réding", heure: "19:28", arret: 2 },
          { gare: "Saverne", heure: "19:52", arret: 1 },
          { gare: "Mommenheim", heure: "20:11", arret: 1 },
          { gare: "Strasbourg", heure: "20:25", arret: 4 }
        ]
      },
      {
        nom: "Strasbourg → Metz",
        dessertes: [
          { gare: "Strasbourg", heure: "21:10", arret: 4 },
          { gare: "Mommenheim", heure: "21:27", arret: 1 },
          { gare: "Saverne", heure: "21:46", arret: 1 },
          { gare: "Réding", heure: "22:09", arret: 2 },
          { gare: "Morhange", heure: "22:45", arret: 1 },
          { gare: "Remilly", heure: "23:05", arret: 1 },
          { gare: "Metz", heure: "23:25", arret: 4 }
        ]
      }
    ]
  },

  {
    id: "FLUO IC Str Mtz 3",
    nom: "BB26000 GrandEst N",
    moteurs: ["25kV CA", "1.5kV CC"],
    vitesseMax: 200,
    capacite: { premiere: 60, seconde: 392 },
    composition: ["VTU A Fluo", "VTU Fluo", "VTU Fluo", "VTU B5uxh FluoAlsace"],
    trajets: [
      {
        nom: "Strasbourg → Metz",
        dessertes: [
          { gare: "Strasbourg", heure: "05:20", arret: 4 },
          { gare: "Mommenheim", heure: "05:37", arret: 1 },
          { gare: "Saverne", heure: "05:56", arret: 1 },
          { gare: "Réding", heure: "06:19", arret: 2 },
          { gare: "Morhange", heure: "06:55", arret: 1 },
          { gare: "Remilly", heure: "07:15", arret: 1 },
          { gare: "Metz", heure: "07:35", arret: 4 }
        ]
      },
      {
        nom: "Metz → Strasbourg",
        dessertes: [
          { gare: "Metz", heure: "07:55", arret: 4 },
          { gare: "Remilly", heure: "08:18", arret: 1 },
          { gare: "Morhange", heure: "08:38", arret: 1 },
          { gare: "Réding", heure: "09:13", arret: 2 },
          { gare: "Saverne", heure: "09:37", arret: 1 },
          { gare: "Mommenheim", heure: "09:56", arret: 1 },
          { gare: "Strasbourg", heure: "10:10", arret: 4 }
        ]
      },
      {
        nom: "Strasbourg → Metz",
        dessertes: [
          { gare: "Strasbourg", heure: "11:20", arret: 4 },
          { gare: "Mommenheim", heure: "11:37", arret: 1 },
          { gare: "Saverne", heure: "11:56", arret: 1 },
          { gare: "Réding", heure: "12:19", arret: 2 },
          { gare: "Morhange", heure: "12:55", arret: 1 },
          { gare: "Remilly", heure: "13:15", arret: 1 },
          { gare: "Metz", heure: "13:35", arret: 4 }
        ]
      },
      {
        nom: "Metz → Strasbourg",
        dessertes: [
          { gare: "Metz", heure: "13:55", arret: 4 },
          { gare: "Remilly", heure: "14:18", arret: 1 },
          { gare: "Morhange", heure: "14:38", arret: 1 },
          { gare: "Réding", heure: "15:13", arret: 2 },
          { gare: "Saverne", heure: "15:37", arret: 1 },
          { gare: "Mommenheim", heure: "15:56", arret: 1 },
          { gare: "Strasbourg", heure: "16:10", arret: 4 }
        ]
      },
      {
        nom: "Strasbourg → Metz",
        dessertes: [
          { gare: "Strasbourg", heure: "17:20", arret: 4 },
          { gare: "Mommenheim", heure: "17:37", arret: 1 },
          { gare: "Saverne", heure: "17:56", arret: 1 },
          { gare: "Réding", heure: "18:19", arret: 2 },
          { gare: "Morhange", heure: "18:55", arret: 1 },
          { gare: "Remilly", heure: "19:15", arret: 1 },
          { gare: "Metz", heure: "19:35", arret: 4 }
        ]
      },
      {
        nom: "Metz → Strasbourg",
        dessertes: [
          { gare: "Metz", heure: "19:55", arret: 4 },
          { gare: "Remilly", heure: "20:18", arret: 1 },
          { gare: "Morhange", heure: "20:38", arret: 1 },
          { gare: "Réding", heure: "21:13", arret: 2 },
          { gare: "Saverne", heure: "21:37", arret: 1 },
          { gare: "Mommenheim", heure: "21:56", arret: 1 },
          { gare: "Strasbourg", heure: "22:10", arret: 4 }
        ]
      }
    ]
  },

  {
    id: "FLUO IC Str Ncy 1",
    nom: "BB26000 GrandEst N",
    moteurs: ["25kV CA", "1.5kV CC"],
    vitesseMax: 200,
    capacite: { premiere: 60, seconde: 392 },
    composition: ["VTU A Fluo", "VTU Fluo", "VTU Fluo", "VTU Fluo", "VTU Fluo", "VTU B5uxh FluoGdEst"],
    trajets: [
      {
        nom: "Strasbourg → Nancy",
        dessertes: [
          { gare: "Strasbourg", heure: "06:10", arret: 4 },
          { gare: "Mommenheim", heure: "06:27", arret: 1 },
          { gare: "Saverne", heure: "06:46", arret: 2 },
          { gare: "Réding", heure: "07:10", arret: 1 },
          { gare: "Lunéville", heure: "07:50", arret: 1 },
          { gare: "Nancy", heure: "08:14", arret: 4 }
        ]
      },
      {
        nom: "Nancy → Strasbourg",
        dessertes: [
          { gare: "Nancy", heure: "09:00", arret: 4 },
          { gare: "Lunéville", heure: "09:27", arret: 1 },
          { gare: "Réding", heure: "10:07", arret: 1 },
          { gare: "Saverne", heure: "10:30", arret: 2 },
          { gare: "Mommenheim", heure: "10:50", arret: 1 },
          { gare: "Strasbourg", heure: "11:04", arret: 4 }
        ]
      },
      {
        nom: "Strasbourg → Nancy",
        dessertes: [
          { gare: "Strasbourg", heure: "12:10", arret: 4 },
          { gare: "Mommenheim", heure: "12:27", arret: 1 },
          { gare: "Saverne", heure: "12:46", arret: 2 },
          { gare: "Réding", heure: "13:10", arret: 1 },
          { gare: "Lunéville", heure: "13:50", arret: 1 },
          { gare: "Nancy", heure: "14:14", arret: 4 }
        ]
      },
      {
        nom: "Nancy → Strasbourg",
        dessertes: [
          { gare: "Nancy", heure: "15:00", arret: 4 },
          { gare: "Lunéville", heure: "15:27", arret: 1 },
          { gare: "Réding", heure: "16:07", arret: 1 },
          { gare: "Saverne", heure: "16:30", arret: 2 },
          { gare: "Mommenheim", heure: "16:50", arret: 1 },
          { gare: "Strasbourg", heure: "17:04", arret: 4 }
        ]
      },
      {
        nom: "Strasbourg → Nancy",
        dessertes: [
          { gare: "Strasbourg", heure: "18:10", arret: 4 },
          { gare: "Mommenheim", heure: "18:27", arret: 1 },
          { gare: "Saverne", heure: "18:46", arret: 2 },
          { gare: "Réding", heure: "19:10", arret: 1 },
          { gare: "Lunéville", heure: "19:50", arret: 1 },
          { gare: "Nancy", heure: "20:14", arret: 4 }
        ]
      },
      {
        nom: "Nancy → Strasbourg",
        dessertes: [
          { gare: "Nancy", heure: "21:00", arret: 4 },
          { gare: "Lunéville", heure: "21:27", arret: 1 },
          { gare: "Réding", heure: "22:07", arret: 1 },
          { gare: "Saverne", heure: "22:30", arret: 2 },
          { gare: "Mommenheim", heure: "22:50", arret: 1 },
          { gare: "Strasbourg", heure: "23:04", arret: 4 }
        ]
      }
    ]
  },

  {
    id: "FLUO IC Str Ncy 2",
    nom: "BB26000 GrandEst",
    moteurs: ["25kV CA", "1.5kV CC"],
    vitesseMax: 200,
    capacite: { premiere: 60, seconde: 392 },
    composition: ["VTU A Fluo", "VTU Fluo", "VTU Fluo", "VTU Alsace", "VTU Alsace", "VTU B5uxh FluoAlsace"],
    trajets: [
      {
        nom: "Nancy → Strasbourg",
        dessertes: [
          { gare: "Nancy", heure: "05:00", arret: 4 },
          { gare: "Lunéville", heure: "05:27", arret: 1 },
          { gare: "Réding", heure: "06:07", arret: 1 },
          { gare: "Saverne", heure: "06:30", arret: 2 },
          { gare: "Mommenheim", heure: "06:50", arret: 1 },
          { gare: "Strasbourg", heure: "07:04", arret: 4 }
        ]
      },
      {
        nom: "Strasbourg → Nancy",
        dessertes: [
          { gare: "Strasbourg", heure: "08:10", arret: 4 },
          { gare: "Mommenheim", heure: "08:27", arret: 1 },
          { gare: "Saverne", heure: "08:46", arret: 2 },
          { gare: "Réding", heure: "09:10", arret: 1 },
          { gare: "Lunéville", heure: "09:50", arret: 1 },
          { gare: "Nancy", heure: "10:14", arret: 4 }
        ]
      },
      {
        nom: "Nancy → Strasbourg",
        dessertes: [
          { gare: "Nancy", heure: "11:00", arret: 4 },
          { gare: "Lunéville", heure: "11:27", arret: 1 },
          { gare: "Réding", heure: "12:07", arret: 1 },
          { gare: "Saverne", heure: "12:30", arret: 2 },
          { gare: "Mommenheim", heure: "12:50", arret: 1 },
          { gare: "Strasbourg", heure: "13:04", arret: 4 }
        ]
      },
      {
        nom: "Strasbourg → Nancy",
        dessertes: [
          { gare: "Strasbourg", heure: "14:10", arret: 4 },
          { gare: "Mommenheim", heure: "14:27", arret: 1 },
          { gare: "Saverne", heure: "14:46", arret: 2 },
          { gare: "Réding", heure: "15:10", arret: 1 },
          { gare: "Lunéville", heure: "15:50", arret: 1 },
          { gare: "Nancy", heure: "16:14", arret: 4 }
        ]
      },
      {
        nom: "Nancy → Strasbourg",
        dessertes: [
          { gare: "Nancy", heure: "17:00", arret: 4 },
          { gare: "Lunéville", heure: "17:27", arret: 1 },
          { gare: "Réding", heure: "18:07", arret: 1 },
          { gare: "Saverne", heure: "18:30", arret: 2 },
          { gare: "Mommenheim", heure: "18:50", arret: 1 },
          { gare: "Strasbourg", heure: "19:04", arret: 4 }
        ]
      },
      {
        nom: "Strasbourg → Nancy",
        dessertes: [
          { gare: "Strasbourg", heure: "20:00", arret: 4 },
          { gare: "Mommenheim", heure: "20:17", arret: 1 },
          { gare: "Saverne", heure: "20:36", arret: 2 },
          { gare: "Réding", heure: "21:00", arret: 1 },
          { gare: "Lunéville", heure: "21:40", arret: 1 },
          { gare: "Nancy", heure: "22:04", arret: 4 }
        ]
      }
    ]
  },

  {
    id: "FLUO IC Str Ncy 3",
    nom: "BB26000 GrandEst N",
    moteurs: ["25kV CA", "1.5kV CC"],
    vitesseMax: 200,
    capacite: { premiere: 60, seconde: 392 },
    composition: ["VTU A Alsace", "VTU Fluo", "VTU Fluo", "VTU Fluo", "VTU Fluo", "VTU B5uxh FluoAlsace"],
    trajets: [
      {
        nom: "Strasbourg → Nancy",
        dessertes: [
          { gare: "Strasbourg", heure: "04:10", arret: 4 },
          { gare: "Mommenheim", heure: "04:27", arret: 1 },
          { gare: "Saverne", heure: "04:46", arret: 2 },
          { gare: "Réding", heure: "05:10", arret: 1 },
          { gare: "Lunéville", heure: "05:50", arret: 1 },
          { gare: "Nancy", heure: "06:14", arret: 4 }
        ]
      },
      {
        nom: "Nancy → Strasbourg",
        dessertes: [
          { gare: "Nancy", heure: "07:00", arret: 4 },
          { gare: "Lunéville", heure: "07:27", arret: 1 },
          { gare: "Réding", heure: "08:07", arret: 1 },
          { gare: "Saverne", heure: "08:30", arret: 2 },
          { gare: "Mommenheim", heure: "08:50", arret: 1 },
          { gare: "Strasbourg", heure: "09:04", arret: 4 }
        ]
      },
      {
        nom: "Strasbourg → Nancy",
        dessertes: [
          { gare: "Strasbourg", heure: "10:10", arret: 4 },
          { gare: "Mommenheim", heure: "10:27", arret: 1 },
          { gare: "Saverne", heure: "10:46", arret: 2 },
          { gare: "Réding", heure: "11:10", arret: 1 },
          { gare: "Lunéville", heure: "11:50", arret: 1 },
          { gare: "Nancy", heure: "12:14", arret: 4 }
        ]
      },
      {
        nom: "Nancy → Strasbourg",
        dessertes: [
          { gare: "Nancy", heure: "13:00", arret: 4 },
          { gare: "Lunéville", heure: "13:27", arret: 1 },
          { gare: "Réding", heure: "14:07", arret: 1 },
          { gare: "Saverne", heure: "14:30", arret: 2 },
          { gare: "Mommenheim", heure: "14:50", arret: 1 },
          { gare: "Strasbourg", heure: "15:04", arret: 4 }
        ]
      },
      {
        nom: "Strasbourg → Nancy",
        dessertes: [
          { gare: "Strasbourg", heure: "16:10", arret: 4 },
          { gare: "Mommenheim", heure: "16:27", arret: 1 },
          { gare: "Saverne", heure: "16:46", arret: 2 },
          { gare: "Réding", heure: "17:10", arret: 1 },
          { gare: "Lunéville", heure: "17:50", arret: 1 },
          { gare: "Nancy", heure: "18:14", arret: 4 }
        ]
      },
      {
        nom: "Nancy → Strasbourg",
        dessertes: [
          { gare: "Nancy", heure: "19:00", arret: 4 },
          { gare: "Lunéville", heure: "19:27", arret: 1 },
          { gare: "Réding", heure: "20:07", arret: 1 },
          { gare: "Saverne", heure: "20:30", arret: 2 },
          { gare: "Mommenheim", heure: "20:50", arret: 1 },
          { gare: "Strasbourg", heure: "21:04", arret: 4 }
        ]
      }
    ]
  },

  {
    id: "FLUO IC Str PEst 1",
    nom: "BB26000 GrandEst",
    moteurs: ["25kV CA", "1.5kV CC"],
    vitesseMax: 200,
    capacite: { premiere: 120, seconde: 0 },
    composition: ["VTU A Fluo", "VTU A Fluo", "VTU Fluo", "VTU Fluo", "VTU Fluo", "VTU Fluo", "VTU Fluo", "VTU Fluo"],
    trajets: [
      {
        nom: "Strasbourg → Gare de l'Est",
        dessertes: [
          { gare: "Strasbourg", heure: "05:10", arret: 4 },
          { gare: "Saverne", heure: "05:45", arret: 1 },
          { gare: "Lunéville", heure: "06:46", arret: 1 },
          { gare: "Nancy", heure: "07:10", arret: 2 },
          { gare: "Bar-le-Duc", heure: "08:27", arret: 1 },
          { gare: "Vitry-le-François", heure: "09:06", arret: 1 },
          { gare: "Châlons-En-Champagne", heure: "09:28", arret: 1 },
          { gare: "Epernay", heure: "09:54", arret: 1 },
          { gare: "Château-Thierry", heure: "10:30", arret: 1 },
          { gare: "Gare de l'Est", heure: "12:02", arret: 4 }
        ]
      },
      {
        nom: "Gare de l'Est → Strasbourg",
        dessertes: [
          { gare: "Gare de l'Est", heure: "15:55", arret: 4 },
          { gare: "Château-Thierry", heure: "17:30", arret: 1 },
          { gare: "Epernay", heure: "18:06", arret: 1 },
          { gare: "Châlons-En-Champagne", heure: "18:32", arret: 1 },
          { gare: "Vitry-le-François", heure: "18:54", arret: 1 },
          { gare: "Bar-le-Duc", heure: "19:33", arret: 1 },
          { gare: "Nancy", heure: "20:49", arret: 2 },
          { gare: "Lunéville", heure: "21:14", arret: 1 },
          { gare: "Saverne", heure: "22:15", arret: 4 },
          { gare: "Strasbourg", heure: "22:50", arret: 4 }
        ]
      }
    ]
  },

  {
    id: "FLUO IC Str PEst 2",
    nom: "BB26000 GrandEst",
    moteurs: ["25kV CA", "1.5kV CC"],
    vitesseMax: 200,
    capacite: { premiere: 120, seconde: 528 },
    composition: ["VTU A Fluo", "VTU A Fluo", "VTU Fluo", "VTU Fluo", "VTU Fluo", "VTU Fluo", "VTU Fluo", "VTU Fluo"],
    trajets: [
      {
        nom: "Gare de l'Est → Strasbourg",
        dessertes: [
          { gare: "Gare de l'Est", heure: "05:00", arret: 5 },
          { gare: "Château-Thierry", heure: "06:36", arret: 1 },
          { gare: "Epernay", heure: "07:12", arret: 1 },
          { gare: "Châlons-En-Champagne", heure: "07:38", arret: 1 },
          { gare: "Vitry-le-François", heure: "08:00", arret: 1 },
          { gare: "Bar-le-Duc", heure: "08:39", arret: 1 },
          { gare: "Nancy", heure: "09:55", arret: 2 },
          { gare: "Lunéville", heure: "10:20", arret: 1 },
          { gare: "Réding", heure: "11:00", arret: 5 },
          { gare: "Strasbourg", heure: "11:58", arret: 5 }
        ]
      },
      {
        nom: "Strasbourg → Gare de l'Est",
        dessertes: [
          { gare: "Strasbourg", heure: "12:28", arret: 5 },
          { gare: "Réding", heure: "13:26", arret: 5 },
          { gare: "Lunéville", heure: "14:10", arret: 1 },
          { gare: "Nancy", heure: "14:34", arret: 2 },
          { gare: "Bar-le-Duc", heure: "15:51", arret: 1 },
          { gare: "Vitry-le-François", heure: "16:30", arret: 1 },
          { gare: "Châlons-En-Champagne", heure: "16:52", arret: 1 },
          { gare: "Epernay", heure: "17:18", arret: 1 },
          { gare: "Château-Thierry", heure: "17:54", arret: 1 },
          { gare: "Gare de l'Est", heure: "19:26", arret: 5 }
        ]
      }
    ]
  },

  {
    id: "FLUO IC Try PEst",
    nom: "CoradiaLiner fluoGrandEst 6C",
    moteurs: ["25kV CA", "1.5kV CC", "diesel"],
    vitesseMax: 160,
    capacite: { premiere: 90, seconde: 270 },
    trajets: [
      {
        nom: "Troyes → Gare de l'Est",
        dessertes: [
          { gare: "Troyes", heure: "06:30", arret: 4 },
          { gare: "Romilly-sur-Seine", heure: "06:59", arret: 1 },
          { gare: "Nogent-sur-Seine", heure: "07:15", arret: 1 },
          { gare: "Gare de l'Est", heure: "08:40", arret: 5 }
        ]
      },
      {
        nom: "Gare de l'Est → Troyes",
        dessertes: [
          { gare: "Gare de l'Est", heure: "10:20", arret: 5 },
          { gare: "Nogent-sur-Seine", heure: "11:49", arret: 1 },
          { gare: "Romilly-sur-Seine", heure: "12:05", arret: 1 },
          { gare: "Troyes", heure: "12:31", arret: 4 }
        ]
      },
      {
        nom: "Troyes → Gare de l'Est",
        dessertes: [
          { gare: "Troyes", heure: "12:54", arret: 2 },
          { gare: "Romilly-sur-Seine", heure: "13:21", arret: 1 },
          { gare: "Nogent-sur-Seine", heure: "13:37", arret: 1 },
          { gare: "Gare de l'Est", heure: "15:02", arret: 5 }
        ]
      },
      {
        nom: "Gare de l'Est → Troyes",
        dessertes: [
          { gare: "Gare de l'Est", heure: "16:01", arret: 5 },
          { gare: "Nogent-sur-Seine", heure: "17:30", arret: 1 },
          { gare: "Romilly-sur-Seine", heure: "17:46", arret: 1 },
          { gare: "Troyes", heure: "18:12", arret: 4 }
        ]
      },
      {
        nom: "Troyes → Gare de l'Est",
        dessertes: [
          { gare: "Troyes", heure: "18:30", arret: 4 },
          { gare: "Romilly-sur-Seine", heure: "18:59", arret: 1 },
          { gare: "Nogent-sur-Seine", heure: "19:15", arret: 1 },
          { gare: "Gare de l'Est", heure: "20:40", arret: 5 }
        ]
      },
      {
        nom: "Gare de l'Est → Troyes",
        dessertes: [
          { gare: "Gare de l'Est", heure: "21:00", arret: 5 },
          { gare: "Nogent-sur-Seine", heure: "22:29", arret: 1 },
          { gare: "Romilly-sur-Seine", heure: "22:45", arret: 1 },
          { gare: "Troyes", heure: "23:11", arret: 4 }
        ]
      }
    ]
  },

  {
    id: "FLUO IC Try PEst 2",
    nom: "CoradiaLiner 6C",
    moteurs: ["25kV CA", "1.5kV CC", "diesel"],
    vitesseMax: 160,
    capacite: { premiere: 90, seconde: 270 },
    trajets: [
      {
        nom: "Troyes → Gare de l'Est",
        dessertes: [
          { gare: "Troyes", heure: "07:26", arret: 2 },
          { gare: "Romilly-sur-Seine", heure: "07:53", arret: 1 },
          { gare: "Nogent-sur-Seine", heure: "08:09", arret: 1 },
          { gare: "Longueville", heure: "08:25", arret: 1 },
          { gare: "Gare de l'Est", heure: "09:35", arret: 5 }
        ]
      },
      {
        nom: "Gare de l'Est → Troyes",
        dessertes: [
          { gare: "Gare de l'Est", heure: "11:25", arret: 5 },
          { gare: "Longueville", heure: "12:39", arret: 1 },
          { gare: "Nogent-sur-Seine", heure: "12:55", arret: 1 },
          { gare: "Romilly-sur-Seine", heure: "13:11", arret: 1 },
          { gare: "Troyes", heure: "13:37", arret: 2 }
        ]
      },
      {
        nom: "Troyes → Gare de l'Est",
        dessertes: [
          { gare: "Troyes", heure: "16:50", arret: 2 },
          { gare: "Romilly-sur-Seine", heure: "17:17", arret: 1 },
          { gare: "Nogent-sur-Seine", heure: "17:33", arret: 1 },
          { gare: "Longueville", heure: "17:49", arret: 1 },
          { gare: "Gare de l'Est", heure: "18:59", arret: 5 }
        ]
      },
      {
        nom: "Gare de l'Est → Troyes",
        dessertes: [
          { gare: "Gare de l'Est", heure: "21:45", arret: 5 },
          { gare: "Longueville", heure: "22:59", arret: 1 },
          { gare: "Nogent-sur-Seine", heure: "23:15", arret: 1 },
          { gare: "Romilly-sur-Seine", heure: "23:31", arret: 1 },
          { gare: "Troyes", heure: "23:57", arret: 2 }
        ]
      }
    ]
  },

  {
    id: "IC Ncy Djn",
    nom: "Regiolis Metrolor 4C",
    moteurs: ["25kV CA", "1.5kV CC", "diesel"],
    vitesseMax: 160,
    capacite: { premiere: 24, seconde: 210 },
    trajets: [
      {
        nom: "Neufchâteau → Nancy",
        dessertes: [
          { gare: "Neufchâteau", heure: "06:25", arret: 3 },
          { gare: "Soulosse", heure: "06:31", arret: 1 },
          { gare: "Toul", heure: "06:59", arret: 2 },
          { gare: "Fontenoy-Sur-Moselle", heure: "07:09", arret: 1 },
          { gare: "Frouard", heure: "07:22", arret: 1 },
          { gare: "Nancy", heure: "07:29", arret: 3 }
        ]
      },
      {
        nom: "Nancy → Dijon-Ville",
        dessertes: [
          { gare: "Nancy", heure: "07:48", arret: 3 },
          { gare: "Toul", heure: "08:16", arret: 1 },
          { gare: "Neufchâteau", heure: "08:47", arret: 1 },
          { gare: "Culmont-Chalindrey", heure: "09:42", arret: 1 },
          { gare: "Is-sur-tille", heure: "10:17", arret: 1 },
          { gare: "Dijon-Ville", heure: "10:40", arret: 3 }
        ]
      },
      {
        nom: "Dijon-Ville → Nancy",
        dessertes: [
          { gare: "Dijon-Ville", heure: "12:21", arret: 3 },
          { gare: "Is-sur-tille", heure: "12:46", arret: 1 },
          { gare: "Culmont-Chalindrey", heure: "13:21", arret: 1 },
          { gare: "Neufchâteau", heure: "14:16", arret: 1 },
          { gare: "Toul", heure: "14:47", arret: 1 },
          { gare: "Nancy", heure: "15:13", arret: 3 }
        ]
      },
      {
        nom: "Nancy → Neufchâteau",
        dessertes: [
          { gare: "Nancy", heure: "15:27", arret: 3 },
          { gare: "Frouard", heure: "15:36", arret: 1 },
          { gare: "Fontenoy-Sur-Moselle", heure: "15:49", arret: 1 },
          { gare: "Toul", heure: "15:58", arret: 2 },
          { gare: "Soulosse", heure: "16:27", arret: 1 },
          { gare: "Neufchâteau", heure: "16:31", arret: 3 }
        ]
      },
      {
        nom: "Neufchâteau → Nancy",
        dessertes: [
          { gare: "Neufchâteau", heure: "16:50", arret: 3 },
          { gare: "Soulosse", heure: "16:56", arret: 1 },
          { gare: "Toul", heure: "17:24", arret: 2 },
          { gare: "Fontenoy-Sur-Moselle", heure: "17:34", arret: 1 },
          { gare: "Frouard", heure: "17:47", arret: 1 },
          { gare: "Nancy", heure: "17:54", arret: 3 }
        ]
      },
      {
        nom: "Nancy → Neufchâteau",
        dessertes: [
          { gare: "Nancy", heure: "18:11", arret: 3 },
          { gare: "Frouard", heure: "18:20", arret: 1 },
          { gare: "Fontenoy-Sur-Moselle", heure: "18:33", arret: 1 },
          { gare: "Toul", heure: "18:42", arret: 2 },
          { gare: "Soulosse", heure: "19:11", arret: 1 },
          { gare: "Neufchâteau", heure: "19:15", arret: 3 }
        ]
      }
    ]
  },

  {
    id: "Mulhouse - DE",
    nom: "X73900 TER Alsace",
    moteurs: ["diesel"],
    vitesseMax: 140,
    capacite: { premiere: 0, seconde: 122 },
    composition: ["X73900 TER Alsace"],
    trajets: [
      {
        nom: "Mulhouse → Muellheim",
        dessertes: [
          { gare: "Mulhouse", heure: "07:50", arret: 4 },
          { gare: "Bantzenheim", heure: "08:16", arret: 1 },
          { gare: "Neuenburg (Baden)", heure: "08:25", arret: 1 },
          { gare: "Muellheim", heure: "08:32", arret: 2 }
        ]
      },
      {
        nom: "Muellheim → Mulhouse",
        dessertes: [
          { gare: "Muellheim", heure: "08:40", arret: 2 },
          { gare: "Neuenburg (Baden)", heure: "08:48", arret: 1 },
          { gare: "Bantzenheim", heure: "08:57", arret: 1 },
          { gare: "Mulhouse", heure: "09:20", arret: 4 }
        ]
      },
      {
        nom: "Mulhouse → Muellheim",
        dessertes: [
          { gare: "Mulhouse", heure: "09:50", arret: 4 },
          { gare: "Bantzenheim", heure: "10:16", arret: 1 },
          { gare: "Neuenburg (Baden)", heure: "10:25", arret: 1 },
          { gare: "Muellheim", heure: "10:32", arret: 2 }
        ]
      },
      {
        nom: "Muellheim → Mulhouse",
        dessertes: [
          { gare: "Muellheim", heure: "10:40", arret: 2 },
          { gare: "Neuenburg (Baden)", heure: "10:48", arret: 1 },
          { gare: "Bantzenheim", heure: "10:57", arret: 1 },
          { gare: "Mulhouse", heure: "11:20", arret: 4 }
        ]
      },
      {
        nom: "Mulhouse → Muellheim",
        dessertes: [
          { gare: "Mulhouse", heure: "11:50", arret: 4 },
          { gare: "Bantzenheim", heure: "12:16", arret: 1 },
          { gare: "Neuenburg (Baden)", heure: "12:25", arret: 1 },
          { gare: "Muellheim", heure: "12:32", arret: 2 }
        ]
      },
      {
        nom: "Muellheim → Mulhouse",
        dessertes: [
          { gare: "Muellheim", heure: "12:40", arret: 2 },
          { gare: "Neuenburg (Baden)", heure: "12:48", arret: 1 },
          { gare: "Bantzenheim", heure: "12:57", arret: 1 },
          { gare: "Mulhouse", heure: "13:20", arret: 4 }
        ]
      },
      {
        nom: "Mulhouse → Muellheim",
        dessertes: [
          { gare: "Mulhouse", heure: "13:50", arret: 4 },
          { gare: "Bantzenheim", heure: "14:16", arret: 1 },
          { gare: "Neuenburg (Baden)", heure: "14:25", arret: 1 },
          { gare: "Muellheim", heure: "14:32", arret: 2 }
        ]
      },
      {
        nom: "Muellheim → Mulhouse",
        dessertes: [
          { gare: "Muellheim", heure: "14:40", arret: 2 },
          { gare: "Neuenburg (Baden)", heure: "14:48", arret: 1 },
          { gare: "Bantzenheim", heure: "14:57", arret: 1 },
          { gare: "Mulhouse", heure: "15:20", arret: 4 }
        ]
      },
      {
        nom: "Mulhouse → Muellheim",
        dessertes: [
          { gare: "Mulhouse", heure: "15:50", arret: 4 },
          { gare: "Bantzenheim", heure: "16:16", arret: 1 },
          { gare: "Neuenburg (Baden)", heure: "16:25", arret: 1 },
          { gare: "Muellheim", heure: "16:32", arret: 2 }
        ]
      },
      {
        nom: "Muellheim → Mulhouse",
        dessertes: [
          { gare: "Muellheim", heure: "16:40", arret: 2 },
          { gare: "Neuenburg (Baden)", heure: "16:48", arret: 1 },
          { gare: "Bantzenheim", heure: "16:57", arret: 1 },
          { gare: "Mulhouse", heure: "17:20", arret: 4 }
        ]
      },
      {
        nom: "Mulhouse → Muellheim",
        dessertes: [
          { gare: "Mulhouse", heure: "17:50", arret: 4 },
          { gare: "Bantzenheim", heure: "18:16", arret: 1 },
          { gare: "Neuenburg (Baden)", heure: "18:25", arret: 1 },
          { gare: "Muellheim", heure: "18:32", arret: 2 }
        ]
      },
      {
        nom: "Muellheim → Mulhouse",
        dessertes: [
          { gare: "Muellheim", heure: "18:40", arret: 2 },
          { gare: "Neuenburg (Baden)", heure: "18:48", arret: 1 },
          { gare: "Bantzenheim", heure: "18:57", arret: 1 },
          { gare: "Mulhouse", heure: "19:20", arret: 4 }
        ]
      }
    ]
  },

  {
    id: "TER 2800",
    nom: "AGC Champagne-Ardenne 4C",
    moteurs: ["25kV CA", "1.5kV CC", "diesel"],
    vitesseMax: 160,
    capacite: { premiere: 48, seconde: 366 },
    composition: ["AGC Champagne-Ardenne 4C"],
    trajets: [
      {
        nom: "Reims → Sedan",
        dessertes: [
          { gare: "Reims", heure: "06:52", arret: 4 },
          { gare: "Bazancourt", heure: "07:08", arret: 1 },
          { gare: "Rethel", heure: "07:24", arret: 1 },
          { gare: "Amagne-Lucquy", heure: "07:32", arret: 1 },
          { gare: "Poix-Terron", heure: "07:49", arret: 1 },
          { gare: "Charleville-Mézières", heure: "08:02", arret: 2 },
          { gare: "Mohon", heure: "08:06", arret: 1 },
          { gare: "Lumes", heure: "08:12", arret: 1 },
          { gare: "Vrigne-Meuse", heure: "08:21", arret: 1 },
          { gare: "Donchery", heure: "08:25", arret: 1 },
          { gare: "Sedan", heure: "08:31", arret: 2 }
        ]
      },
      {
        nom: "Sedan → Reims",
        dessertes: [
          { gare: "Sedan", heure: "08:50", arret: 2 },
          { gare: "Donchery", heure: "08:57", arret: 1 },
          { gare: "Vrigne-Meuse", heure: "09:01", arret: 1 },
          { gare: "Lumes", heure: "09:10", arret: 1 },
          { gare: "Mohon", heure: "09:16", arret: 1 },
          { gare: "Charleville-Mézières", heure: "09:19", arret: 2 },
          { gare: "Poix-Terron", heure: "09:33", arret: 1 },
          { gare: "Amagne-Lucquy", heure: "09:50", arret: 1 },
          { gare: "Rethel", heure: "09:58", arret: 1 },
          { gare: "Bazancourt", heure: "10:14", arret: 1 },
          { gare: "Reims", heure: "10:27", arret: 4 }
        ]
      },
      {
        nom: "Reims → Sedan",
        dessertes: [
          { gare: "Reims", heure: "10:52", arret: 4 },
          { gare: "Bazancourt", heure: "11:08", arret: 1 },
          { gare: "Rethel", heure: "11:24", arret: 1 },
          { gare: "Amagne-Lucquy", heure: "11:32", arret: 1 },
          { gare: "Poix-Terron", heure: "11:49", arret: 1 },
          { gare: "Charleville-Mézières", heure: "12:02", arret: 2 },
          { gare: "Mohon", heure: "12:06", arret: 1 },
          { gare: "Lumes", heure: "12:12", arret: 1 },
          { gare: "Vrigne-Meuse", heure: "12:21", arret: 1 },
          { gare: "Donchery", heure: "12:25", arret: 1 },
          { gare: "Sedan", heure: "12:31", arret: 2 }
        ]
      },
      {
        nom: "Sedan → Reims",
        dessertes: [
          { gare: "Sedan", heure: "12:50", arret: 2 },
          { gare: "Donchery", heure: "12:57", arret: 1 },
          { gare: "Vrigne-Meuse", heure: "13:01", arret: 1 },
          { gare: "Lumes", heure: "13:10", arret: 1 },
          { gare: "Mohon", heure: "13:16", arret: 1 },
          { gare: "Charleville-Mézières", heure: "13:19", arret: 2 },
          { gare: "Poix-Terron", heure: "13:33", arret: 1 },
          { gare: "Amagne-Lucquy", heure: "13:50", arret: 1 },
          { gare: "Rethel", heure: "13:58", arret: 1 },
          { gare: "Bazancourt", heure: "14:14", arret: 1 },
          { gare: "Reims", heure: "14:27", arret: 4 }
        ]
      },
      {
        nom: "Reims → Sedan",
        dessertes: [
          { gare: "Reims", heure: "14:52", arret: 4 },
          { gare: "Bazancourt", heure: "15:08", arret: 1 },
          { gare: "Rethel", heure: "15:24", arret: 1 },
          { gare: "Amagne-Lucquy", heure: "15:32", arret: 1 },
          { gare: "Poix-Terron", heure: "15:49", arret: 1 },
          { gare: "Charleville-Mézières", heure: "16:02", arret: 2 },
          { gare: "Mohon", heure: "16:06", arret: 1 },
          { gare: "Lumes", heure: "16:12", arret: 1 },
          { gare: "Vrigne-Meuse", heure: "16:21", arret: 1 },
          { gare: "Donchery", heure: "16:25", arret: 1 },
          { gare: "Sedan", heure: "16:31", arret: 2 }
        ]
      },
      {
        nom: "Sedan → Reims",
        dessertes: [
          { gare: "Sedan", heure: "16:50", arret: 2 },
          { gare: "Donchery", heure: "16:57", arret: 1 },
          { gare: "Vrigne-Meuse", heure: "17:01", arret: 1 },
          { gare: "Lumes", heure: "17:10", arret: 1 },
          { gare: "Mohon", heure: "17:16", arret: 1 },
          { gare: "Charleville-Mézières", heure: "17:19", arret: 2 },
          { gare: "Poix-Terron", heure: "17:33", arret: 1 },
          { gare: "Amagne-Lucquy", heure: "17:50", arret: 1 },
          { gare: "Rethel", heure: "17:58", arret: 1 },
          { gare: "Bazancourt", heure: "18:14", arret: 1 },
          { gare: "Reims", heure: "18:27", arret: 4 }
        ]
      },
      {
        nom: "Reims → Sedan",
        dessertes: [
          { gare: "Reims", heure: "18:52", arret: 4 },
          { gare: "Bazancourt", heure: "19:08", arret: 1 },
          { gare: "Rethel", heure: "19:24", arret: 1 },
          { gare: "Amagne-Lucquy", heure: "19:32", arret: 1 },
          { gare: "Poix-Terron", heure: "19:49", arret: 1 },
          { gare: "Charleville-Mézières", heure: "20:02", arret: 2 },
          { gare: "Mohon", heure: "20:06", arret: 1 },
          { gare: "Lumes", heure: "20:12", arret: 1 },
          { gare: "Vrigne-Meuse", heure: "20:21", arret: 1 },
          { gare: "Donchery", heure: "20:25", arret: 1 },
          { gare: "Sedan", heure: "20:31", arret: 2 }
        ]
      },
      {
        nom: "Sedan → Reims",
        dessertes: [
          { gare: "Sedan", heure: "20:50", arret: 2 },
          { gare: "Donchery", heure: "20:57", arret: 1 },
          { gare: "Vrigne-Meuse", heure: "21:01", arret: 1 },
          { gare: "Lumes", heure: "21:10", arret: 1 },
          { gare: "Mohon", heure: "21:16", arret: 1 },
          { gare: "Charleville-Mézières", heure: "21:19", arret: 2 },
          { gare: "Poix-Terron", heure: "21:33", arret: 1 },
          { gare: "Amagne-Lucquy", heure: "21:50", arret: 1 },
          { gare: "Rethel", heure: "21:58", arret: 1 },
          { gare: "Bazancourt", heure: "22:14", arret: 1 },
          { gare: "Reims", heure: "22:27", arret: 4 }
        ]
      }
    ]
  },

  {
    id: "TER 2801",
    nom: "AGC Champagne-Ardenne 4C",
    moteurs: ["25kV CA", "1.5kV CC", "diesel"],
    vitesseMax: 160,
    capacite: { premiere: 48, seconde: 366 },
    composition: ["AGC Champagne-Ardenne 4C"],
    trajets: [
      {
        nom: "Reims → Sedan",
        dessertes: [
          { gare: "Reims", heure: "07:52", arret: 4 },
          { gare: "Bazancourt", heure: "08:08", arret: 1 },
          { gare: "Rethel", heure: "08:24", arret: 1 },
          { gare: "Amagne-Lucquy", heure: "08:32", arret: 1 },
          { gare: "Poix-Terron", heure: "08:49", arret: 1 },
          { gare: "Charleville-Mézières", heure: "09:02", arret: 2 },
          { gare: "Mohon", heure: "09:06", arret: 1 },
          { gare: "Lumes", heure: "09:12", arret: 1 },
          { gare: "Vrigne-Meuse", heure: "09:21", arret: 1 },
          { gare: "Donchery", heure: "09:25", arret: 1 },
          { gare: "Sedan", heure: "09:31", arret: 2 }
        ]
      },
      {
        nom: "Sedan → Reims",
        dessertes: [
          { gare: "Sedan", heure: "09:50", arret: 2 },
          { gare: "Donchery", heure: "09:57", arret: 1 },
          { gare: "Vrigne-Meuse", heure: "10:01", arret: 1 },
          { gare: "Lumes", heure: "10:10", arret: 1 },
          { gare: "Mohon", heure: "10:16", arret: 1 },
          { gare: "Charleville-Mézières", heure: "10:19", arret: 2 },
          { gare: "Poix-Terron", heure: "10:33", arret: 1 },
          { gare: "Amagne-Lucquy", heure: "10:50", arret: 1 },
          { gare: "Rethel", heure: "10:58", arret: 1 },
          { gare: "Bazancourt", heure: "11:14", arret: 1 },
          { gare: "Reims", heure: "11:27", arret: 4 }
        ]
      },
      {
        nom: "Reims → Sedan",
        dessertes: [
          { gare: "Reims", heure: "11:52", arret: 4 },
          { gare: "Bazancourt", heure: "12:08", arret: 1 },
          { gare: "Rethel", heure: "12:24", arret: 1 },
          { gare: "Amagne-Lucquy", heure: "12:32", arret: 1 },
          { gare: "Poix-Terron", heure: "12:49", arret: 1 },
          { gare: "Charleville-Mézières", heure: "13:02", arret: 2 },
          { gare: "Mohon", heure: "13:06", arret: 1 },
          { gare: "Lumes", heure: "13:12", arret: 1 },
          { gare: "Vrigne-Meuse", heure: "13:21", arret: 1 },
          { gare: "Donchery", heure: "13:25", arret: 1 },
          { gare: "Sedan", heure: "13:31", arret: 2 }
        ]
      },
      {
        nom: "Sedan → Reims",
        dessertes: [
          { gare: "Sedan", heure: "13:50", arret: 2 },
          { gare: "Donchery", heure: "13:57", arret: 1 },
          { gare: "Vrigne-Meuse", heure: "14:01", arret: 1 },
          { gare: "Lumes", heure: "14:10", arret: 1 },
          { gare: "Mohon", heure: "14:16", arret: 1 },
          { gare: "Charleville-Mézières", heure: "14:19", arret: 2 },
          { gare: "Poix-Terron", heure: "14:33", arret: 1 },
          { gare: "Amagne-Lucquy", heure: "14:50", arret: 1 },
          { gare: "Rethel", heure: "14:58", arret: 1 },
          { gare: "Bazancourt", heure: "15:14", arret: 1 },
          { gare: "Reims", heure: "15:27", arret: 4 }
        ]
      },
      {
        nom: "Reims → Sedan",
        dessertes: [
          { gare: "Reims", heure: "15:52", arret: 4 },
          { gare: "Bazancourt", heure: "16:08", arret: 1 },
          { gare: "Rethel", heure: "16:24", arret: 1 },
          { gare: "Amagne-Lucquy", heure: "16:32", arret: 1 },
          { gare: "Poix-Terron", heure: "16:49", arret: 1 },
          { gare: "Charleville-Mézières", heure: "17:02", arret: 2 },
          { gare: "Mohon", heure: "17:06", arret: 1 },
          { gare: "Lumes", heure: "17:12", arret: 1 },
          { gare: "Vrigne-Meuse", heure: "17:21", arret: 1 },
          { gare: "Donchery", heure: "17:25", arret: 1 },
          { gare: "Sedan", heure: "17:31", arret: 2 }
        ]
      },
      {
        nom: "Sedan → Reims",
        dessertes: [
          { gare: "Sedan", heure: "17:50", arret: 2 },
          { gare: "Donchery", heure: "17:57", arret: 1 },
          { gare: "Vrigne-Meuse", heure: "18:01", arret: 1 },
          { gare: "Lumes", heure: "18:10", arret: 1 },
          { gare: "Mohon", heure: "18:16", arret: 1 },
          { gare: "Charleville-Mézières", heure: "18:19", arret: 2 },
          { gare: "Poix-Terron", heure: "18:33", arret: 1 },
          { gare: "Amagne-Lucquy", heure: "18:50", arret: 1 },
          { gare: "Rethel", heure: "18:58", arret: 1 },
          { gare: "Bazancourt", heure: "19:14", arret: 1 },
          { gare: "Reims", heure: "19:27", arret: 4 }
        ]
      },
      {
        nom: "Reims → Sedan",
        dessertes: [
          { gare: "Reims", heure: "19:52", arret: 4 },
          { gare: "Bazancourt", heure: "20:08", arret: 1 },
          { gare: "Rethel", heure: "20:24", arret: 1 },
          { gare: "Amagne-Lucquy", heure: "20:32", arret: 1 },
          { gare: "Poix-Terron", heure: "20:49", arret: 1 },
          { gare: "Charleville-Mézières", heure: "21:02", arret: 2 },
          { gare: "Mohon", heure: "21:06", arret: 1 },
          { gare: "Lumes", heure: "21:12", arret: 1 },
          { gare: "Vrigne-Meuse", heure: "21:21", arret: 1 },
          { gare: "Donchery", heure: "21:25", arret: 1 },
          { gare: "Sedan", heure: "21:31", arret: 2 }
        ]
      },
      {
        nom: "Sedan → Reims",
        dessertes: [
          { gare: "Sedan", heure: "21:50", arret: 2 },
          { gare: "Donchery", heure: "21:57", arret: 1 },
          { gare: "Vrigne-Meuse", heure: "22:01", arret: 1 },
          { gare: "Lumes", heure: "22:10", arret: 1 },
          { gare: "Mohon", heure: "22:16", arret: 1 },
          { gare: "Charleville-Mézières", heure: "22:19", arret: 2 },
          { gare: "Poix-Terron", heure: "22:33", arret: 1 },
          { gare: "Amagne-Lucquy", heure: "22:50", arret: 1 },
          { gare: "Rethel", heure: "22:58", arret: 1 },
          { gare: "Bazancourt", heure: "23:14", arret: 1 },
          { gare: "Reims", heure: "23:27", arret: 4 }
        ]
      }
    ]
  },

  {
    id: "TER 2802",
    nom: "AGC Champagne-Ardenne 4C",
    moteurs: ["25kV CA", "1.5kV CC", "diesel"],
    vitesseMax: 160,
    capacite: { premiere: 48, seconde: 366 },
    composition: ["AGC Champagne-Ardenne 4C"],
    trajets: [
      {
        nom: "Sedan → Reims",
        dessertes: [
          { gare: "Sedan", heure: "06:50", arret: 2 },
          { gare: "Donchery", heure: "06:57", arret: 1 },
          { gare: "Vrigne-Meuse", heure: "07:01", arret: 1 },
          { gare: "Lumes", heure: "07:10", arret: 1 },
          { gare: "Mohon", heure: "07:16", arret: 1 },
          { gare: "Charleville-Mézières", heure: "07:19", arret: 2 },
          { gare: "Poix-Terron", heure: "07:33", arret: 1 },
          { gare: "Amagne-Lucquy", heure: "07:50", arret: 1 },
          { gare: "Rethel", heure: "07:58", arret: 1 },
          { gare: "Bazancourt", heure: "08:14", arret: 1 },
          { gare: "Reims", heure: "08:27", arret: 4 }
        ]
      },
      {
        nom: "Reims → Sedan",
        dessertes: [
          { gare: "Reims", heure: "08:52", arret: 4 },
          { gare: "Bazancourt", heure: "09:08", arret: 1 },
          { gare: "Rethel", heure: "09:24", arret: 1 },
          { gare: "Amagne-Lucquy", heure: "09:32", arret: 1 },
          { gare: "Poix-Terron", heure: "09:49", arret: 1 },
          { gare: "Charleville-Mézières", heure: "10:02", arret: 2 },
          { gare: "Mohon", heure: "10:06", arret: 1 },
          { gare: "Lumes", heure: "10:12", arret: 1 },
          { gare: "Vrigne-Meuse", heure: "10:21", arret: 1 },
          { gare: "Donchery", heure: "10:25", arret: 1 },
          { gare: "Sedan", heure: "10:31", arret: 2 }
        ]
      },
      {
        nom: "Sedan → Reims",
        dessertes: [
          { gare: "Sedan", heure: "10:50", arret: 2 },
          { gare: "Donchery", heure: "10:57", arret: 1 },
          { gare: "Vrigne-Meuse", heure: "11:01", arret: 1 },
          { gare: "Lumes", heure: "11:10", arret: 1 },
          { gare: "Mohon", heure: "11:16", arret: 1 },
          { gare: "Charleville-Mézières", heure: "11:19", arret: 2 },
          { gare: "Poix-Terron", heure: "11:33", arret: 1 },
          { gare: "Amagne-Lucquy", heure: "11:50", arret: 1 },
          { gare: "Rethel", heure: "11:58", arret: 1 },
          { gare: "Bazancourt", heure: "12:14", arret: 1 },
          { gare: "Reims", heure: "12:27", arret: 4 }
        ]
      },
      {
        nom: "Reims → Sedan",
        dessertes: [
          { gare: "Reims", heure: "12:52", arret: 4 },
          { gare: "Bazancourt", heure: "13:08", arret: 1 },
          { gare: "Rethel", heure: "13:24", arret: 1 },
          { gare: "Amagne-Lucquy", heure: "13:32", arret: 1 },
          { gare: "Poix-Terron", heure: "13:49", arret: 1 },
          { gare: "Charleville-Mézières", heure: "14:02", arret: 2 },
          { gare: "Mohon", heure: "14:06", arret: 1 },
          { gare: "Lumes", heure: "14:12", arret: 1 },
          { gare: "Vrigne-Meuse", heure: "14:21", arret: 1 },
          { gare: "Donchery", heure: "14:25", arret: 1 },
          { gare: "Sedan", heure: "14:31", arret: 2 }
        ]
      },
      {
        nom: "Sedan → Reims",
        dessertes: [
          { gare: "Sedan", heure: "14:50", arret: 2 },
          { gare: "Donchery", heure: "14:57", arret: 1 },
          { gare: "Vrigne-Meuse", heure: "15:01", arret: 1 },
          { gare: "Lumes", heure: "15:10", arret: 1 },
          { gare: "Mohon", heure: "15:16", arret: 1 },
          { gare: "Charleville-Mézières", heure: "15:19", arret: 2 },
          { gare: "Poix-Terron", heure: "15:33", arret: 1 },
          { gare: "Amagne-Lucquy", heure: "15:50", arret: 1 },
          { gare: "Rethel", heure: "15:58", arret: 1 },
          { gare: "Bazancourt", heure: "16:14", arret: 1 },
          { gare: "Reims", heure: "16:27", arret: 4 }
        ]
      },
      {
        nom: "Reims → Sedan",
        dessertes: [
          { gare: "Reims", heure: "16:52", arret: 4 },
          { gare: "Bazancourt", heure: "17:08", arret: 1 },
          { gare: "Rethel", heure: "17:24", arret: 1 },
          { gare: "Amagne-Lucquy", heure: "17:32", arret: 1 },
          { gare: "Poix-Terron", heure: "17:49", arret: 1 },
          { gare: "Charleville-Mézières", heure: "18:02", arret: 2 },
          { gare: "Mohon", heure: "18:06", arret: 1 },
          { gare: "Lumes", heure: "18:12", arret: 1 },
          { gare: "Vrigne-Meuse", heure: "18:21", arret: 1 },
          { gare: "Donchery", heure: "18:25", arret: 1 },
          { gare: "Sedan", heure: "18:31", arret: 2 }
        ]
      },
      {
        nom: "Sedan → Reims",
        dessertes: [
          { gare: "Sedan", heure: "18:50", arret: 2 },
          { gare: "Donchery", heure: "18:57", arret: 1 },
          { gare: "Vrigne-Meuse", heure: "19:01", arret: 1 },
          { gare: "Lumes", heure: "19:10", arret: 1 },
          { gare: "Mohon", heure: "19:16", arret: 1 },
          { gare: "Charleville-Mézières", heure: "19:19", arret: 2 },
          { gare: "Poix-Terron", heure: "19:33", arret: 1 },
          { gare: "Amagne-Lucquy", heure: "19:50", arret: 1 },
          { gare: "Rethel", heure: "19:58", arret: 1 },
          { gare: "Bazancourt", heure: "20:14", arret: 1 },
          { gare: "Reims", heure: "20:27", arret: 4 }
        ]
      },
      {
        nom: "Reims → Sedan",
        dessertes: [
          { gare: "Reims", heure: "20:52", arret: 4 },
          { gare: "Bazancourt", heure: "21:08", arret: 1 },
          { gare: "Rethel", heure: "21:24", arret: 1 },
          { gare: "Amagne-Lucquy", heure: "21:32", arret: 1 },
          { gare: "Poix-Terron", heure: "21:49", arret: 1 },
          { gare: "Charleville-Mézières", heure: "22:02", arret: 2 },
          { gare: "Mohon", heure: "22:06", arret: 1 },
          { gare: "Lumes", heure: "22:12", arret: 1 },
          { gare: "Vrigne-Meuse", heure: "22:21", arret: 1 },
          { gare: "Donchery", heure: "22:25", arret: 1 },
          { gare: "Sedan", heure: "22:31", arret: 2 }
        ]
      }
    ]
  },

  {
    id: "TER 2803",
    nom: "AGC Champagne-Ardenne 4C",
    moteurs: ["25kV CA", "1.5kV CC", "diesel"],
    vitesseMax: 160,
    capacite: { premiere: 48, seconde: 366 },
    composition: ["AGC Champagne-Ardenne 4C"],
    trajets: [
      {
        nom: "Sedan → Reims",
        dessertes: [
          { gare: "Sedan", heure: "07:50", arret: 2 },
          { gare: "Donchery", heure: "07:57", arret: 1 },
          { gare: "Vrigne-Meuse", heure: "08:01", arret: 1 },
          { gare: "Lumes", heure: "08:10", arret: 1 },
          { gare: "Mohon", heure: "08:16", arret: 1 },
          { gare: "Charleville-Mézières", heure: "08:19", arret: 2 },
          { gare: "Poix-Terron", heure: "08:33", arret: 1 },
          { gare: "Amagne-Lucquy", heure: "08:50", arret: 1 },
          { gare: "Rethel", heure: "08:58", arret: 1 },
          { gare: "Bazancourt", heure: "09:14", arret: 1 },
          { gare: "Reims", heure: "09:27", arret: 4 }
        ]
      },
      {
        nom: "Reims → Sedan",
        dessertes: [
          { gare: "Reims", heure: "09:52", arret: 4 },
          { gare: "Bazancourt", heure: "10:08", arret: 1 },
          { gare: "Rethel", heure: "10:24", arret: 1 },
          { gare: "Amagne-Lucquy", heure: "10:32", arret: 1 },
          { gare: "Poix-Terron", heure: "10:49", arret: 1 },
          { gare: "Charleville-Mézières", heure: "11:02", arret: 2 },
          { gare: "Mohon", heure: "11:06", arret: 1 },
          { gare: "Lumes", heure: "11:12", arret: 1 },
          { gare: "Vrigne-Meuse", heure: "11:21", arret: 1 },
          { gare: "Donchery", heure: "11:25", arret: 1 },
          { gare: "Sedan", heure: "11:31", arret: 2 }
        ]
      },
      {
        nom: "Sedan → Reims",
        dessertes: [
          { gare: "Sedan", heure: "11:50", arret: 2 },
          { gare: "Donchery", heure: "11:57", arret: 1 },
          { gare: "Vrigne-Meuse", heure: "12:01", arret: 1 },
          { gare: "Lumes", heure: "12:10", arret: 1 },
          { gare: "Mohon", heure: "12:16", arret: 1 },
          { gare: "Charleville-Mézières", heure: "12:19", arret: 2 },
          { gare: "Poix-Terron", heure: "12:33", arret: 1 },
          { gare: "Amagne-Lucquy", heure: "12:50", arret: 1 },
          { gare: "Rethel", heure: "12:58", arret: 1 },
          { gare: "Bazancourt", heure: "13:14", arret: 1 },
          { gare: "Reims", heure: "13:27", arret: 4 }
        ]
      },
      {
        nom: "Reims → Sedan",
        dessertes: [
          { gare: "Reims", heure: "13:52", arret: 4 },
          { gare: "Bazancourt", heure: "14:08", arret: 1 },
          { gare: "Rethel", heure: "14:24", arret: 1 },
          { gare: "Amagne-Lucquy", heure: "14:32", arret: 1 },
          { gare: "Poix-Terron", heure: "14:49", arret: 1 },
          { gare: "Charleville-Mézières", heure: "15:02", arret: 2 },
          { gare: "Mohon", heure: "15:06", arret: 1 },
          { gare: "Lumes", heure: "15:12", arret: 1 },
          { gare: "Vrigne-Meuse", heure: "15:21", arret: 1 },
          { gare: "Donchery", heure: "15:25", arret: 1 },
          { gare: "Sedan", heure: "15:31", arret: 2 }
        ]
      },
      {
        nom: "Sedan → Reims",
        dessertes: [
          { gare: "Sedan", heure: "15:50", arret: 2 },
          { gare: "Donchery", heure: "15:57", arret: 1 },
          { gare: "Vrigne-Meuse", heure: "16:01", arret: 1 },
          { gare: "Lumes", heure: "16:10", arret: 1 },
          { gare: "Mohon", heure: "16:16", arret: 1 },
          { gare: "Charleville-Mézières", heure: "16:19", arret: 2 },
          { gare: "Poix-Terron", heure: "16:33", arret: 1 },
          { gare: "Amagne-Lucquy", heure: "16:50", arret: 1 },
          { gare: "Rethel", heure: "16:58", arret: 1 },
          { gare: "Bazancourt", heure: "17:14", arret: 1 },
          { gare: "Reims", heure: "17:27", arret: 4 }
        ]
      },
      {
        nom: "Reims → Sedan",
        dessertes: [
          { gare: "Reims", heure: "17:52", arret: 4 },
          { gare: "Bazancourt", heure: "18:08", arret: 1 },
          { gare: "Rethel", heure: "18:24", arret: 1 },
          { gare: "Amagne-Lucquy", heure: "18:32", arret: 1 },
          { gare: "Poix-Terron", heure: "18:49", arret: 1 },
          { gare: "Charleville-Mézières", heure: "19:02", arret: 2 },
          { gare: "Mohon", heure: "19:06", arret: 1 },
          { gare: "Lumes", heure: "19:12", arret: 1 },
          { gare: "Vrigne-Meuse", heure: "19:21", arret: 1 },
          { gare: "Donchery", heure: "19:25", arret: 1 },
          { gare: "Sedan", heure: "19:31", arret: 2 }
        ]
      },
      {
        nom: "Sedan → Reims",
        dessertes: [
          { gare: "Sedan", heure: "19:50", arret: 2 },
          { gare: "Donchery", heure: "19:57", arret: 1 },
          { gare: "Vrigne-Meuse", heure: "20:01", arret: 1 },
          { gare: "Lumes", heure: "20:10", arret: 1 },
          { gare: "Mohon", heure: "20:16", arret: 1 },
          { gare: "Charleville-Mézières", heure: "20:19", arret: 2 },
          { gare: "Poix-Terron", heure: "20:33", arret: 1 },
          { gare: "Amagne-Lucquy", heure: "20:50", arret: 1 },
          { gare: "Rethel", heure: "20:58", arret: 1 },
          { gare: "Bazancourt", heure: "21:14", arret: 1 },
          { gare: "Reims", heure: "21:27", arret: 4 }
        ]
      },
      {
        nom: "Reims → Sedan",
        dessertes: [
          { gare: "Reims", heure: "21:52", arret: 4 },
          { gare: "Bazancourt", heure: "22:08", arret: 1 },
          { gare: "Rethel", heure: "22:24", arret: 1 },
          { gare: "Amagne-Lucquy", heure: "22:32", arret: 1 },
          { gare: "Poix-Terron", heure: "22:49", arret: 1 },
          { gare: "Charleville-Mézières", heure: "23:02", arret: 2 },
          { gare: "Mohon", heure: "23:06", arret: 1 },
          { gare: "Lumes", heure: "23:12", arret: 1 },
          { gare: "Vrigne-Meuse", heure: "23:21", arret: 1 },
          { gare: "Donchery", heure: "23:25", arret: 1 },
          { gare: "Sedan", heure: "23:31", arret: 2 }
        ]
      }
    ]
  },

  {
    id: "TER 2805",
    nom: "AGC Champagne-Ardenne 3C",
    moteurs: ["diesel"],
    vitesseMax: 160,
    capacite: { premiere: 24, seconde: 134 },
    trajets: [
      {
        nom: "Charleville-Mézières → Givet",
        dessertes: [
          { gare: "Charleville-Mézières", heure: "07:23", arret: 2 },
          { gare: "Nouzonville", heure: "07:31", arret: 1 },
          { gare: "Joigny-sur-Meuse", heure: "07:36", arret: 1 },
          { gare: "Bogny sur Meuse", heure: "07:40", arret: 1 },
          { gare: "Laifour", heure: "07:51", arret: 1 },
          { gare: "Revin", heure: "07:59", arret: 1 },
          { gare: "Fumay", heure: "08:13", arret: 1 },
          { gare: "Fépin", heure: "08:20", arret: 1 },
          { gare: "Vireux-Molhain", heure: "08:28", arret: 1 },
          { gare: "Givet", heure: "08:43", arret: 2 }
        ]
      },
      {
        nom: "Givet → Charleville-Mézières",
        dessertes: [
          { gare: "Givet", heure: "09:15", arret: 2 },
          { gare: "Vireux-Molhain", heure: "09:31", arret: 1 },
          { gare: "Fépin", heure: "09:39", arret: 1 },
          { gare: "Fumay", heure: "09:46", arret: 1 },
          { gare: "Revin", heure: "10:00", arret: 1 },
          { gare: "Laifour", heure: "10:08", arret: 1 },
          { gare: "Bogny sur Meuse", heure: "10:19", arret: 1 },
          { gare: "Joigny-sur-Meuse", heure: "10:23", arret: 1 },
          { gare: "Nouzonville", heure: "10:28", arret: 1 },
          { gare: "Charleville-Mézières", heure: "10:35", arret: 2 }
        ]
      },
      {
        nom: "Charleville-Mézières → Givet",
        dessertes: [
          { gare: "Charleville-Mézières", heure: "11:23", arret: 2 },
          { gare: "Nouzonville", heure: "11:31", arret: 1 },
          { gare: "Joigny-sur-Meuse", heure: "11:36", arret: 1 },
          { gare: "Bogny sur Meuse", heure: "11:40", arret: 1 },
          { gare: "Laifour", heure: "11:51", arret: 1 },
          { gare: "Revin", heure: "11:59", arret: 1 },
          { gare: "Fumay", heure: "12:13", arret: 1 },
          { gare: "Fépin", heure: "12:20", arret: 1 },
          { gare: "Vireux-Molhain", heure: "12:28", arret: 1 },
          { gare: "Givet", heure: "12:43", arret: 2 }
        ]
      },
      {
        nom: "Givet → Charleville-Mézières",
        dessertes: [
          { gare: "Givet", heure: "13:15", arret: 2 },
          { gare: "Vireux-Molhain", heure: "13:31", arret: 1 },
          { gare: "Fépin", heure: "13:39", arret: 1 },
          { gare: "Fumay", heure: "13:46", arret: 1 },
          { gare: "Revin", heure: "14:00", arret: 1 },
          { gare: "Laifour", heure: "14:08", arret: 1 },
          { gare: "Bogny sur Meuse", heure: "14:19", arret: 1 },
          { gare: "Joigny-sur-Meuse", heure: "14:23", arret: 1 },
          { gare: "Nouzonville", heure: "14:28", arret: 1 },
          { gare: "Charleville-Mézières", heure: "14:35", arret: 2 }
        ]
      },
      {
        nom: "Charleville-Mézières → Givet",
        dessertes: [
          { gare: "Charleville-Mézières", heure: "15:23", arret: 2 },
          { gare: "Nouzonville", heure: "15:31", arret: 1 },
          { gare: "Joigny-sur-Meuse", heure: "15:36", arret: 1 },
          { gare: "Bogny sur Meuse", heure: "15:40", arret: 1 },
          { gare: "Laifour", heure: "15:51", arret: 1 },
          { gare: "Revin", heure: "15:59", arret: 1 },
          { gare: "Fumay", heure: "16:13", arret: 1 },
          { gare: "Fépin", heure: "16:20", arret: 1 },
          { gare: "Vireux-Molhain", heure: "16:28", arret: 1 },
          { gare: "Givet", heure: "16:43", arret: 2 }
        ]
      },
      {
        nom: "Givet → Charleville-Mézières",
        dessertes: [
          { gare: "Givet", heure: "17:15", arret: 2 },
          { gare: "Vireux-Molhain", heure: "17:31", arret: 1 },
          { gare: "Fépin", heure: "17:39", arret: 1 },
          { gare: "Fumay", heure: "17:46", arret: 1 },
          { gare: "Revin", heure: "18:00", arret: 1 },
          { gare: "Laifour", heure: "18:08", arret: 1 },
          { gare: "Bogny sur Meuse", heure: "18:19", arret: 1 },
          { gare: "Joigny-sur-Meuse", heure: "18:23", arret: 1 },
          { gare: "Nouzonville", heure: "18:28", arret: 1 },
          { gare: "Charleville-Mézières", heure: "18:35", arret: 2 }
        ]
      }
    ]
  },

  {
    id: "TER 2806",
    nom: "X73900 Champ-Ard",
    moteurs: ["diesel"],
    vitesseMax: 140,
    capacite: { premiere: 0, seconde: 122 },
    composition: ["X73900 Grand Est"],
    trajets: [
      {
        nom: "Givet → Charleville-Mézières",
        dessertes: [
          { gare: "Givet", heure: "07:15", arret: 2, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Vireux-Molhain", heure: "07:31", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Fépin", heure: "07:39", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Fumay", heure: "07:46", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Revin", heure: "08:00", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Laifour", heure: "08:08", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Bogny sur Meuse", heure: "08:19", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Joigny-sur-Meuse", heure: "08:23", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Nouzonville", heure: "08:28", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Charleville-Mézières", heure: "08:35", arret: 2, jours: ["LU", "MA", "ME", "JE", "VE"] }
        ]
      },
      {
        nom: "Charleville-Mézières → Givet",
        dessertes: [
          { gare: "Charleville-Mézières", heure: "09:23", arret: 2, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Nouzonville", heure: "09:31", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Joigny-sur-Meuse", heure: "09:36", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Bogny sur Meuse", heure: "09:40", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Laifour", heure: "09:51", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Revin", heure: "09:59", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Fumay", heure: "10:13", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Fépin", heure: "10:20", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Vireux-Molhain", heure: "10:28", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Givet", heure: "10:43", arret: 2, jours: ["LU", "MA", "ME", "JE", "VE"] }
        ]
      },
      {
        nom: "Givet → Charleville-Mézières",
        dessertes: [
          { gare: "Givet", heure: "11:15", arret: 2, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Vireux-Molhain", heure: "11:31", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Fépin", heure: "11:39", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Fumay", heure: "11:46", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Revin", heure: "12:00", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Laifour", heure: "12:08", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Bogny sur Meuse", heure: "12:19", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Joigny-sur-Meuse", heure: "12:23", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Nouzonville", heure: "12:28", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Charleville-Mézières", heure: "12:35", arret: 2, jours: ["LU", "MA", "ME", "JE", "VE"] }
        ]
      },
      {
        nom: "Charleville-Mézières → Givet",
        dessertes: [
          { gare: "Charleville-Mézières", heure: "13:23", arret: 2, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Nouzonville", heure: "13:31", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Joigny-sur-Meuse", heure: "13:36", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Bogny sur Meuse", heure: "13:40", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Laifour", heure: "13:51", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Revin", heure: "13:59", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Fumay", heure: "14:13", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Fépin", heure: "14:20", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Vireux-Molhain", heure: "14:28", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Givet", heure: "14:43", arret: 2, jours: ["LU", "MA", "ME", "JE", "VE"] }
        ]
      },
      {
        nom: "Givet → Charleville-Mézières",
        dessertes: [
          { gare: "Givet", heure: "15:15", arret: 2, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Vireux-Molhain", heure: "15:31", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Fépin", heure: "15:39", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Fumay", heure: "15:46", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Revin", heure: "16:00", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Laifour", heure: "16:08", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Bogny sur Meuse", heure: "16:19", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Joigny-sur-Meuse", heure: "16:23", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Nouzonville", heure: "16:28", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Charleville-Mézières", heure: "16:35", arret: 2, jours: ["LU", "MA", "ME", "JE", "VE"] }
        ]
      },
      {
        nom: "Charleville-Mézières → Givet",
        dessertes: [
          { gare: "Charleville-Mézières", heure: "17:23", arret: 2, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Nouzonville", heure: "17:31", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Joigny-sur-Meuse", heure: "17:36", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Bogny sur Meuse", heure: "17:40", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Laifour", heure: "17:51", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Revin", heure: "17:59", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Fumay", heure: "18:13", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Fépin", heure: "18:20", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Vireux-Molhain", heure: "18:28", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Givet", heure: "18:43", arret: 2, jours: ["LU", "MA", "ME", "JE", "VE"] }
        ]
      }
    ]
  },

  {
    id: "TER 2809",
    nom: "X73900 Champ-Ard",
    moteurs: ["diesel"],
    vitesseMax: 140,
    capacite: { premiere: 0, seconde: 61 },
    trajets: [
      {
        nom: "Reims → Fismes",
        dessertes: [
          { gare: "Reims", heure: "06:00", arret: 2 },
          { gare: "Muizon", heure: "06:19", arret: 1 },
          { gare: "Breuil - Romain", heure: "06:35", arret: 1 },
          { gare: "Fismes", heure: "06:46", arret: 2 }
        ]
      },
      {
        nom: "Fismes → Reims",
        dessertes: [
          { gare: "Fismes", heure: "07:00", arret: 2 },
          { gare: "Breuil - Romain", heure: "07:12", arret: 1 },
          { gare: "Muizon", heure: "07:28", arret: 1 },
          { gare: "Reims", heure: "07:46", arret: 2 }
        ]
      },
      {
        nom: "Reims → Fismes",
        dessertes: [
          { gare: "Reims", heure: "08:00", arret: 2 },
          { gare: "Muizon", heure: "08:19", arret: 1 },
          { gare: "Breuil - Romain", heure: "08:35", arret: 1 },
          { gare: "Fismes", heure: "08:46", arret: 2 }
        ]
      },
      {
        nom: "Fismes → Reims",
        dessertes: [
          { gare: "Fismes", heure: "09:00", arret: 2 },
          { gare: "Breuil - Romain", heure: "09:12", arret: 1 },
          { gare: "Muizon", heure: "09:28", arret: 1 },
          { gare: "Reims", heure: "09:46", arret: 2 }
        ]
      },
      {
        nom: "Reims → Fismes",
        dessertes: [
          { gare: "Reims", heure: "12:00", arret: 2 },
          { gare: "Muizon", heure: "12:19", arret: 1 },
          { gare: "Breuil - Romain", heure: "12:35", arret: 1 },
          { gare: "Fismes", heure: "12:46", arret: 2 }
        ]
      },
      {
        nom: "Fismes → Reims",
        dessertes: [
          { gare: "Fismes", heure: "13:00", arret: 2 },
          { gare: "Breuil - Romain", heure: "13:12", arret: 1 },
          { gare: "Muizon", heure: "13:28", arret: 1 },
          { gare: "Reims", heure: "13:46", arret: 2 }
        ]
      },
      {
        nom: "Reims → Fismes",
        dessertes: [
          { gare: "Reims", heure: "16:00", arret: 2 },
          { gare: "Muizon", heure: "16:19", arret: 1 },
          { gare: "Breuil - Romain", heure: "16:35", arret: 1 },
          { gare: "Fismes", heure: "16:46", arret: 2 }
        ]
      },
      {
        nom: "Fismes → Reims",
        dessertes: [
          { gare: "Fismes", heure: "17:00", arret: 2 },
          { gare: "Breuil - Romain", heure: "17:12", arret: 1 },
          { gare: "Muizon", heure: "17:28", arret: 1 },
          { gare: "Reims", heure: "17:46", arret: 2 }
        ]
      },
      {
        nom: "Reims → Fismes",
        dessertes: [
          { gare: "Reims", heure: "18:00", arret: 2 },
          { gare: "Muizon", heure: "18:19", arret: 1 },
          { gare: "Breuil - Romain", heure: "18:35", arret: 1 },
          { gare: "Fismes", heure: "18:46", arret: 2 }
        ]
      },
      {
        nom: "Fismes → Reims",
        dessertes: [
          { gare: "Fismes", heure: "19:00", arret: 2 },
          { gare: "Breuil - Romain", heure: "19:12", arret: 1 },
          { gare: "Muizon", heure: "19:28", arret: 1 },
          { gare: "Reims", heure: "19:46", arret: 2 }
        ]
      }
    ]
  },

  {
    id: "TER 2811",
    nom: "AGC Champagne-Ardenne 3C",
    moteurs: ["diesel"],
    vitesseMax: 160,
    capacite: { premiere: 24, seconde: 134 },
    trajets: [
      {
        nom: "Châlons-En-Champagne → Reims",
        dessertes: [
          { gare: "Châlons-En-Champagne", heure: "06:46", arret: 4, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Mourmelon-le-Petit", heure: "07:05", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Reims", heure: "07:34", arret: 4, jours: ["LU", "MA", "ME", "JE", "VE"] }
        ]
      },
      {
        nom: "Reims → Châlons-En-Champagne",
        dessertes: [
          { gare: "Reims", heure: "07:46", arret: 4, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Mourmelon-le-Petit", heure: "08:18", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Châlons-En-Champagne", heure: "08:34", arret: 4, jours: ["LU", "MA", "ME", "JE", "VE"] }
        ]
      },
      {
        nom: "Châlons-En-Champagne → Reims",
        dessertes: [
          { gare: "Châlons-En-Champagne", heure: "08:41", arret: 4, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Mourmelon-le-Petit", heure: "09:00", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Sept-Saulx", heure: "09:07", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Val-de-Vesle", heure: "09:12", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Prunay", heure: "09:17", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Reims", heure: "09:34", arret: 4, jours: ["LU", "MA", "ME", "JE", "VE"] }
        ]
      },
      {
        nom: "Reims → Châlons-En-Champagne",
        dessertes: [
          { gare: "Reims", heure: "09:46", arret: 4, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Mourmelon-le-Petit", heure: "10:18", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Châlons-En-Champagne", heure: "10:34", arret: 4, jours: ["LU", "MA", "ME", "JE", "VE"] }
        ]
      },
      {
        nom: "Châlons-En-Champagne → Reims",
        dessertes: [
          { gare: "Châlons-En-Champagne", heure: "10:46", arret: 4, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Mourmelon-le-Petit", heure: "11:05", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Reims", heure: "11:34", arret: 4, jours: ["LU", "MA", "ME", "JE", "VE"] }
        ]
      },
      {
        nom: "Reims → Châlons-En-Champagne",
        dessertes: [
          { gare: "Reims", heure: "11:41", arret: 4, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Prunay", heure: "12:01", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Val-de-Vesle", heure: "12:06", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Sept-Saulx", heure: "12:11", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Mourmelon-le-Petit", heure: "12:18", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Châlons-En-Champagne", heure: "12:34", arret: 4, jours: ["LU", "MA", "ME", "JE", "VE"] }
        ]
      },
      {
        nom: "Châlons-En-Champagne → Reims",
        dessertes: [
          { gare: "Châlons-En-Champagne", heure: "12:41", arret: 4, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Mourmelon-le-Petit", heure: "13:00", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Sept-Saulx", heure: "13:07", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Val-de-Vesle", heure: "13:12", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Prunay", heure: "13:17", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Reims", heure: "13:34", arret: 4, jours: ["LU", "MA", "ME", "JE", "VE"] }
        ]
      },
      {
        nom: "Reims → Châlons-En-Champagne",
        dessertes: [
          { gare: "Reims", heure: "13:46", arret: 4, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Mourmelon-le-Petit", heure: "14:18", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Châlons-En-Champagne", heure: "14:34", arret: 4, jours: ["LU", "MA", "ME", "JE", "VE"] }
        ]
      },
      {
        nom: "Châlons-En-Champagne → Reims",
        dessertes: [
          { gare: "Châlons-En-Champagne", heure: "14:46", arret: 4, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Mourmelon-le-Petit", heure: "15:05", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Reims", heure: "15:34", arret: 4, jours: ["LU", "MA", "ME", "JE", "VE"] }
        ]
      },
      {
        nom: "Reims → Châlons-En-Champagne",
        dessertes: [
          { gare: "Reims", heure: "15:46", arret: 4, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Mourmelon-le-Petit", heure: "16:18", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Châlons-En-Champagne", heure: "16:34", arret: 4, jours: ["LU", "MA", "ME", "JE", "VE"] }
        ]
      },
      {
        nom: "Châlons-En-Champagne → Reims",
        dessertes: [
          { gare: "Châlons-En-Champagne", heure: "16:41", arret: 4, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Mourmelon-le-Petit", heure: "17:00", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Sept-Saulx", heure: "17:07", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Val-de-Vesle", heure: "17:12", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Prunay", heure: "17:17", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Reims", heure: "17:34", arret: 4, jours: ["LU", "MA", "ME", "JE", "VE"] }
        ]
      },
      {
        nom: "Reims → Châlons-En-Champagne",
        dessertes: [
          { gare: "Reims", heure: "17:41", arret: 4, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Prunay", heure: "18:01", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Val-de-Vesle", heure: "18:06", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Sept-Saulx", heure: "18:11", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Mourmelon-le-Petit", heure: "18:18", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Châlons-En-Champagne", heure: "18:34", arret: 4, jours: ["LU", "MA", "ME", "JE", "VE"] }
        ]
      },
      {
        nom: "Châlons-En-Champagne → Reims",
        dessertes: [
          { gare: "Châlons-En-Champagne", heure: "18:46", arret: 4, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Mourmelon-le-Petit", heure: "19:05", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Reims", heure: "19:34", arret: 4, jours: ["LU", "MA", "ME", "JE", "VE"] }
        ]
      },
      {
        nom: "Reims → Châlons-En-Champagne",
        dessertes: [
          { gare: "Reims", heure: "19:46", arret: 4, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Mourmelon-le-Petit", heure: "20:18", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Châlons-En-Champagne", heure: "20:34", arret: 4, jours: ["LU", "MA", "ME", "JE", "VE"] }
        ]
      },
      {
        nom: "Châlons-En-Champagne → XCR Airport",
        dessertes: [
          { gare: "Châlons-En-Champagne", heure: "08:00", arret: 2, jours: ["SA", "DI"] },
          { gare: "XCR Airport", heure: "08:32", arret: 2, jours: ["SA", "DI"] }
        ]
      },
      {
        nom: "XCR Airport → Châlons-En-Champagne",
        dessertes: [
          { gare: "XCR Airport", heure: "10:00", arret: 2, jours: ["SA", "DI"] },
          { gare: "Châlons-En-Champagne", heure: "10:32", arret: 2, jours: ["SA", "DI"] }
        ]
      },
      {
        nom: "Châlons-En-Champagne → XCR Airport",
        dessertes: [
          { gare: "Châlons-En-Champagne", heure: "11:00", arret: 2, jours: ["SA", "DI"] },
          { gare: "XCR Airport", heure: "11:32", arret: 2, jours: ["SA", "DI"] }
        ]
      },
      {
        nom: "XCR Airport → Châlons-En-Champagne",
        dessertes: [
          { gare: "XCR Airport", heure: "12:00", arret: 2, jours: ["SA", "DI"] },
          { gare: "Châlons-En-Champagne", heure: "12:32", arret: 2, jours: ["SA", "DI"] }
        ]
      },
      {
        nom: "Châlons-En-Champagne → XCR Airport",
        dessertes: [
          { gare: "Châlons-En-Champagne", heure: "14:00", arret: 2, jours: ["SA", "DI"] },
          { gare: "XCR Airport", heure: "14:32", arret: 2, jours: ["SA", "DI"] }
        ]
      },
      {
        nom: "XCR Airport → Châlons-En-Champagne",
        dessertes: [
          { gare: "XCR Airport", heure: "15:00", arret: 2, jours: ["SA", "DI"] },
          { gare: "Châlons-En-Champagne", heure: "15:32", arret: 2, jours: ["SA", "DI"] }
        ]
      },
      {
        nom: "Châlons-En-Champagne → XCR Airport",
        dessertes: [
          { gare: "Châlons-En-Champagne", heure: "16:00", arret: 2, jours: ["SA", "DI"] },
          { gare: "XCR Airport", heure: "16:32", arret: 2, jours: ["SA", "DI"] }
        ]
      },
      {
        nom: "XCR Airport → Châlons-En-Champagne",
        dessertes: [
          { gare: "XCR Airport", heure: "18:00", arret: 2, jours: ["SA", "DI"] },
          { gare: "Châlons-En-Champagne", heure: "18:32", arret: 2, jours: ["SA", "DI"] }
        ]
      }
    ]
  },

  {
    id: "TER 2812",
    nom: "AGC Champagne-Ardenne 3C",
    moteurs: ["diesel"],
    vitesseMax: 160,
    capacite: { premiere: 24, seconde: 134 },
    trajets: [
      {
        nom: "Reims → Châlons-En-Champagne",
        dessertes: [
          { gare: "Reims", heure: "06:46", arret: 4 },
          { gare: "Mourmelon-le-Petit", heure: "07:18", arret: 1 },
          { gare: "Châlons-En-Champagne", heure: "07:34", arret: 4 }
        ]
      },
      {
        nom: "Châlons-En-Champagne → Reims",
        dessertes: [
          { gare: "Châlons-En-Champagne", heure: "07:41", arret: 4 },
          { gare: "Mourmelon-le-Petit", heure: "08:00", arret: 1 },
          { gare: "Sept-Saulx", heure: "08:07", arret: 1 },
          { gare: "Val-de-Vesle", heure: "08:12", arret: 1 },
          { gare: "Prunay", heure: "08:17", arret: 1 },
          { gare: "Reims", heure: "08:34", arret: 4 }
        ]
      },
      {
        nom: "Reims → Châlons-En-Champagne",
        dessertes: [
          { gare: "Reims", heure: "08:41", arret: 4 },
          { gare: "Prunay", heure: "09:01", arret: 1 },
          { gare: "Val-de-Vesle", heure: "09:06", arret: 1 },
          { gare: "Sept-Saulx", heure: "09:11", arret: 1 },
          { gare: "Mourmelon-le-Petit", heure: "09:18", arret: 1 },
          { gare: "Châlons-En-Champagne", heure: "09:34", arret: 4 }
        ]
      },
      {
        nom: "Châlons-En-Champagne → Reims",
        dessertes: [
          { gare: "Châlons-En-Champagne", heure: "09:46", arret: 4 },
          { gare: "Mourmelon-le-Petit", heure: "10:05", arret: 1 },
          { gare: "Reims", heure: "10:34", arret: 4 }
        ]
      },
      {
        nom: "Reims → Châlons-En-Champagne",
        dessertes: [
          { gare: "Reims", heure: "10:46", arret: 4 },
          { gare: "Mourmelon-le-Petit", heure: "11:18", arret: 1 },
          { gare: "Châlons-En-Champagne", heure: "11:34", arret: 4 }
        ]
      },
      {
        nom: "Châlons-En-Champagne → Reims",
        dessertes: [
          { gare: "Châlons-En-Champagne", heure: "11:41", arret: 4 },
          { gare: "Mourmelon-le-Petit", heure: "12:00", arret: 1 },
          { gare: "Sept-Saulx", heure: "12:07", arret: 1 },
          { gare: "Val-de-Vesle", heure: "12:12", arret: 1 },
          { gare: "Prunay", heure: "12:17", arret: 1 },
          { gare: "Reims", heure: "12:34", arret: 4 }
        ]
      },
      {
        nom: "Reims → Châlons-En-Champagne",
        dessertes: [
          { gare: "Reims", heure: "12:41", arret: 4 },
          { gare: "Prunay", heure: "13:01", arret: 1 },
          { gare: "Val-de-Vesle", heure: "13:06", arret: 1 },
          { gare: "Sept-Saulx", heure: "13:11", arret: 1 },
          { gare: "Mourmelon-le-Petit", heure: "13:18", arret: 1 },
          { gare: "Châlons-En-Champagne", heure: "13:34", arret: 4 }
        ]
      },
      {
        nom: "Châlons-En-Champagne → Reims",
        dessertes: [
          { gare: "Châlons-En-Champagne", heure: "13:46", arret: 4 },
          { gare: "Mourmelon-le-Petit", heure: "14:05", arret: 1 },
          { gare: "Reims", heure: "14:34", arret: 4 }
        ]
      },
      {
        nom: "Reims → Châlons-En-Champagne",
        dessertes: [
          { gare: "Reims", heure: "14:46", arret: 4 },
          { gare: "Mourmelon-le-Petit", heure: "15:18", arret: 1 },
          { gare: "Châlons-En-Champagne", heure: "15:34", arret: 4 }
        ]
      },
      {
        nom: "Châlons-En-Champagne → Reims",
        dessertes: [
          { gare: "Châlons-En-Champagne", heure: "15:41", arret: 4 },
          { gare: "Mourmelon-le-Petit", heure: "16:00", arret: 1 },
          { gare: "Sept-Saulx", heure: "16:07", arret: 1 },
          { gare: "Val-de-Vesle", heure: "16:12", arret: 1 },
          { gare: "Prunay", heure: "16:17", arret: 1 },
          { gare: "Reims", heure: "16:34", arret: 4 }
        ]
      },
      {
        nom: "Reims → Châlons-En-Champagne",
        dessertes: [
          { gare: "Reims", heure: "16:41", arret: 4 },
          { gare: "Prunay", heure: "17:01", arret: 1 },
          { gare: "Val-de-Vesle", heure: "17:06", arret: 1 },
          { gare: "Sept-Saulx", heure: "17:11", arret: 1 },
          { gare: "Mourmelon-le-Petit", heure: "17:18", arret: 1 },
          { gare: "Châlons-En-Champagne", heure: "17:34", arret: 4 }
        ]
      },
      {
        nom: "Châlons-En-Champagne → Reims",
        dessertes: [
          { gare: "Châlons-En-Champagne", heure: "17:41", arret: 4 },
          { gare: "Mourmelon-le-Petit", heure: "18:00", arret: 1 },
          { gare: "Sept-Saulx", heure: "18:07", arret: 1 },
          { gare: "Val-de-Vesle", heure: "18:12", arret: 1 },
          { gare: "Prunay", heure: "18:17", arret: 1 },
          { gare: "Reims", heure: "18:34", arret: 4 }
        ]
      },
      {
        nom: "Reims → Châlons-En-Champagne",
        dessertes: [
          { gare: "Reims", heure: "18:46", arret: 4 },
          { gare: "Mourmelon-le-Petit", heure: "19:18", arret: 1 },
          { gare: "Châlons-En-Champagne", heure: "19:34", arret: 4 }
        ]
      },
      {
        nom: "Châlons-En-Champagne → Reims",
        dessertes: [
          { gare: "Châlons-En-Champagne", heure: "19:46", arret: 4 },
          { gare: "Mourmelon-le-Petit", heure: "20:05", arret: 1 },
          { gare: "Reims", heure: "20:34", arret: 4 }
        ]
      }
    ]
  },

  {
    id: "TER 2815",
    nom: "AGC Champagne-Ardenne 3C E",
    moteurs: ["25kV CA", "1.5kV CC"],
    vitesseMax: 160,
    capacite: { premiere: 26, seconde: 138 },
    trajets: [
      {
        nom: "Reims → Epernay",
        dessertes: [
          { gare: "Reims", heure: "07:00", arret: 2 },
          { gare: "Maison Blanche", heure: "07:05", arret: 1 },
          { gare: "Rilly-la-Montagne", heure: "07:13", arret: 1 },
          { gare: "Germaine", heure: "07:18", arret: 1 },
          { gare: "Avenay", heure: "07:25", arret: 1 },
          { gare: "Aÿ-Champagne", heure: "07:30", arret: 1 },
          { gare: "Epernay", heure: "07:35", arret: 2 }
        ]
      },
      {
        nom: "Epernay → Reims",
        dessertes: [
          { gare: "Epernay", heure: "08:00", arret: 2 },
          { gare: "Aÿ-Champagne", heure: "08:06", arret: 1 },
          { gare: "Avenay", heure: "08:11", arret: 1 },
          { gare: "Germaine", heure: "08:18", arret: 1 },
          { gare: "Rilly-la-Montagne", heure: "08:23", arret: 1 },
          { gare: "Maison Blanche", heure: "08:31", arret: 1 },
          { gare: "Reims", heure: "08:35", arret: 2 }
        ]
      },
      {
        nom: "Reims → Epernay",
        dessertes: [
          { gare: "Reims", heure: "09:00", arret: 2 },
          { gare: "Maison Blanche", heure: "09:05", arret: 1 },
          { gare: "Rilly-la-Montagne", heure: "09:13", arret: 1 },
          { gare: "Germaine", heure: "09:18", arret: 1 },
          { gare: "Avenay", heure: "09:25", arret: 1 },
          { gare: "Aÿ-Champagne", heure: "09:30", arret: 1 },
          { gare: "Epernay", heure: "09:35", arret: 2 }
        ]
      },
      {
        nom: "Epernay → Reims",
        dessertes: [
          { gare: "Epernay", heure: "10:00", arret: 2 },
          { gare: "Aÿ-Champagne", heure: "10:06", arret: 1 },
          { gare: "Avenay", heure: "10:11", arret: 1 },
          { gare: "Germaine", heure: "10:18", arret: 1 },
          { gare: "Rilly-la-Montagne", heure: "10:23", arret: 1 },
          { gare: "Maison Blanche", heure: "10:31", arret: 1 },
          { gare: "Reims", heure: "10:35", arret: 2 }
        ]
      },
      {
        nom: "Reims → Epernay",
        dessertes: [
          { gare: "Reims", heure: "11:00", arret: 2 },
          { gare: "Maison Blanche", heure: "11:05", arret: 1 },
          { gare: "Rilly-la-Montagne", heure: "11:13", arret: 1 },
          { gare: "Germaine", heure: "11:18", arret: 1 },
          { gare: "Avenay", heure: "11:25", arret: 1 },
          { gare: "Aÿ-Champagne", heure: "11:30", arret: 1 },
          { gare: "Epernay", heure: "11:35", arret: 2 }
        ]
      },
      {
        nom: "Epernay → Reims",
        dessertes: [
          { gare: "Epernay", heure: "12:00", arret: 2 },
          { gare: "Aÿ-Champagne", heure: "12:06", arret: 1 },
          { gare: "Avenay", heure: "12:11", arret: 1 },
          { gare: "Germaine", heure: "12:18", arret: 1 },
          { gare: "Rilly-la-Montagne", heure: "12:23", arret: 1 },
          { gare: "Maison Blanche", heure: "12:31", arret: 1 },
          { gare: "Reims", heure: "12:35", arret: 2 }
        ]
      },
      {
        nom: "Reims → Epernay",
        dessertes: [
          { gare: "Reims", heure: "13:00", arret: 2 },
          { gare: "Maison Blanche", heure: "13:05", arret: 1 },
          { gare: "Rilly-la-Montagne", heure: "13:13", arret: 1 },
          { gare: "Germaine", heure: "13:18", arret: 1 },
          { gare: "Avenay", heure: "13:25", arret: 1 },
          { gare: "Aÿ-Champagne", heure: "13:30", arret: 1 },
          { gare: "Epernay", heure: "13:35", arret: 2 }
        ]
      },
      {
        nom: "Epernay → Reims",
        dessertes: [
          { gare: "Epernay", heure: "14:00", arret: 2 },
          { gare: "Aÿ-Champagne", heure: "14:06", arret: 1 },
          { gare: "Avenay", heure: "14:11", arret: 1 },
          { gare: "Germaine", heure: "14:18", arret: 1 },
          { gare: "Rilly-la-Montagne", heure: "14:23", arret: 1 },
          { gare: "Maison Blanche", heure: "14:31", arret: 1 },
          { gare: "Reims", heure: "14:35", arret: 2 }
        ]
      },
      {
        nom: "Reims → Epernay",
        dessertes: [
          { gare: "Reims", heure: "15:00", arret: 2 },
          { gare: "Maison Blanche", heure: "15:05", arret: 1 },
          { gare: "Rilly-la-Montagne", heure: "15:13", arret: 1 },
          { gare: "Germaine", heure: "15:18", arret: 1 },
          { gare: "Avenay", heure: "15:25", arret: 1 },
          { gare: "Aÿ-Champagne", heure: "15:30", arret: 1 },
          { gare: "Epernay", heure: "15:35", arret: 2 }
        ]
      },
      {
        nom: "Epernay → Reims",
        dessertes: [
          { gare: "Epernay", heure: "16:00", arret: 2 },
          { gare: "Aÿ-Champagne", heure: "16:06", arret: 1 },
          { gare: "Avenay", heure: "16:11", arret: 1 },
          { gare: "Germaine", heure: "16:18", arret: 1 },
          { gare: "Rilly-la-Montagne", heure: "16:23", arret: 1 },
          { gare: "Maison Blanche", heure: "16:31", arret: 1 },
          { gare: "Reims", heure: "16:35", arret: 2 }
        ]
      },
      {
        nom: "Reims → Epernay",
        dessertes: [
          { gare: "Reims", heure: "17:00", arret: 2 },
          { gare: "Maison Blanche", heure: "17:05", arret: 1 },
          { gare: "Rilly-la-Montagne", heure: "17:13", arret: 1 },
          { gare: "Germaine", heure: "17:18", arret: 1 },
          { gare: "Avenay", heure: "17:25", arret: 1 },
          { gare: "Aÿ-Champagne", heure: "17:30", arret: 1 },
          { gare: "Epernay", heure: "17:35", arret: 2 }
        ]
      },
      {
        nom: "Epernay → Reims",
        dessertes: [
          { gare: "Epernay", heure: "18:00", arret: 2 },
          { gare: "Aÿ-Champagne", heure: "18:06", arret: 1 },
          { gare: "Avenay", heure: "18:11", arret: 1 },
          { gare: "Germaine", heure: "18:18", arret: 1 },
          { gare: "Rilly-la-Montagne", heure: "18:23", arret: 1 },
          { gare: "Maison Blanche", heure: "18:31", arret: 1 },
          { gare: "Reims", heure: "18:35", arret: 2 }
        ]
      },
      {
        nom: "Reims → Epernay",
        dessertes: [
          { gare: "Reims", heure: "19:00", arret: 2 },
          { gare: "Maison Blanche", heure: "19:05", arret: 1 },
          { gare: "Rilly-la-Montagne", heure: "19:13", arret: 1 },
          { gare: "Germaine", heure: "19:18", arret: 1 },
          { gare: "Avenay", heure: "19:25", arret: 1 },
          { gare: "Aÿ-Champagne", heure: "19:30", arret: 1 },
          { gare: "Epernay", heure: "19:35", arret: 2 }
        ]
      },
      {
        nom: "Epernay → Reims",
        dessertes: [
          { gare: "Epernay", heure: "20:00", arret: 2 },
          { gare: "Aÿ-Champagne", heure: "20:06", arret: 1 },
          { gare: "Avenay", heure: "20:11", arret: 1 },
          { gare: "Germaine", heure: "20:18", arret: 1 },
          { gare: "Rilly-la-Montagne", heure: "20:23", arret: 1 },
          { gare: "Maison Blanche", heure: "20:31", arret: 1 },
          { gare: "Reims", heure: "20:35", arret: 2 }
        ]
      }
    ]
  },

  {
    id: "TER 2816",
    nom: "AGC Champagne-Ardenne 3C E",
    moteurs: ["25kV CA", "1.5kV CC"],
    vitesseMax: 160,
    capacite: { premiere: 26, seconde: 138 },
    trajets: [
      {
        nom: "Reims → Epernay",
        dessertes: [
          { gare: "Reims", heure: "06:00", arret: 2 },
          { gare: "Maison Blanche", heure: "06:05", arret: 1 },
          { gare: "Rilly-la-Montagne", heure: "06:13", arret: 1 },
          { gare: "Germaine", heure: "06:18", arret: 1 },
          { gare: "Avenay", heure: "06:25", arret: 1 },
          { gare: "Aÿ-Champagne", heure: "06:30", arret: 1 },
          { gare: "Epernay", heure: "06:35", arret: 2 }
        ]
      },
      {
        nom: "Epernay → Reims",
        dessertes: [
          { gare: "Epernay", heure: "06:50", arret: 2 },
          { gare: "Aÿ-Champagne", heure: "06:56", arret: 1 },
          { gare: "Avenay", heure: "07:01", arret: 1 },
          { gare: "Germaine", heure: "07:08", arret: 1 },
          { gare: "Rilly-la-Montagne", heure: "07:13", arret: 1 },
          { gare: "Maison Blanche", heure: "07:21", arret: 1 },
          { gare: "Reims", heure: "07:25", arret: 2 }
        ]
      },
      {
        nom: "Reims → Champagne-Ardenne TGV",
        dessertes: [
          { gare: "Reims", heure: "07:30", arret: 2 },
          { gare: "Champagne-Ardenne TGV", heure: "07:38", arret: 2 }
        ]
      },
      {
        nom: "Champagne-Ardenne TGV → Reims",
        dessertes: [
          { gare: "Champagne-Ardenne TGV", heure: "07:42", arret: 2 },
          { gare: "Reims", heure: "07:50", arret: 2 }
        ]
      },
      {
        nom: "Reims → Epernay",
        dessertes: [
          { gare: "Reims", heure: "08:00", arret: 2 },
          { gare: "Maison Blanche", heure: "08:05", arret: 1 },
          { gare: "Rilly-la-Montagne", heure: "08:13", arret: 1 },
          { gare: "Germaine", heure: "08:18", arret: 1 },
          { gare: "Avenay", heure: "08:25", arret: 1 },
          { gare: "Aÿ-Champagne", heure: "08:30", arret: 1 },
          { gare: "Epernay", heure: "08:35", arret: 2 }
        ]
      },
      {
        nom: "Epernay → Reims",
        dessertes: [
          { gare: "Epernay", heure: "08:50", arret: 2 },
          { gare: "Aÿ-Champagne", heure: "08:56", arret: 1 },
          { gare: "Avenay", heure: "09:01", arret: 1 },
          { gare: "Germaine", heure: "09:08", arret: 1 },
          { gare: "Rilly-la-Montagne", heure: "09:13", arret: 1 },
          { gare: "Maison Blanche", heure: "09:21", arret: 1 },
          { gare: "Reims", heure: "09:25", arret: 2 }
        ]
      },
      {
        nom: "Reims → Champagne-Ardenne TGV",
        dessertes: [
          { gare: "Reims", heure: "09:30", arret: 2 },
          { gare: "Champagne-Ardenne TGV", heure: "09:38", arret: 2 }
        ]
      },
      {
        nom: "Champagne-Ardenne TGV → Reims",
        dessertes: [
          { gare: "Champagne-Ardenne TGV", heure: "09:42", arret: 2 },
          { gare: "Reims", heure: "09:50", arret: 2 }
        ]
      },
      {
        nom: "Reims → Epernay",
        dessertes: [
          { gare: "Reims", heure: "10:00", arret: 2 },
          { gare: "Maison Blanche", heure: "10:05", arret: 1 },
          { gare: "Rilly-la-Montagne", heure: "10:13", arret: 1 },
          { gare: "Germaine", heure: "10:18", arret: 1 },
          { gare: "Avenay", heure: "10:25", arret: 1 },
          { gare: "Aÿ-Champagne", heure: "10:30", arret: 1 },
          { gare: "Epernay", heure: "10:35", arret: 2 }
        ]
      },
      {
        nom: "Epernay → Reims",
        dessertes: [
          { gare: "Epernay", heure: "10:50", arret: 2 },
          { gare: "Aÿ-Champagne", heure: "10:56", arret: 1 },
          { gare: "Avenay", heure: "11:01", arret: 1 },
          { gare: "Germaine", heure: "11:08", arret: 1 },
          { gare: "Rilly-la-Montagne", heure: "11:13", arret: 1 },
          { gare: "Maison Blanche", heure: "11:21", arret: 1 },
          { gare: "Reims", heure: "11:25", arret: 2 }
        ]
      },
      {
        nom: "Reims → Champagne-Ardenne TGV",
        dessertes: [
          { gare: "Reims", heure: "11:30", arret: 2 },
          { gare: "Champagne-Ardenne TGV", heure: "11:38", arret: 1 }
        ]
      },
      {
        nom: "Champagne-Ardenne TGV → Reims",
        dessertes: [
          { gare: "Champagne-Ardenne TGV", heure: "11:42", arret: 2 },
          { gare: "Reims", heure: "11:50", arret: 2 }
        ]
      },
      {
        nom: "Reims → Epernay",
        dessertes: [
          { gare: "Reims", heure: "12:00", arret: 2 },
          { gare: "Maison Blanche", heure: "12:05", arret: 1 },
          { gare: "Rilly-la-Montagne", heure: "12:13", arret: 1 },
          { gare: "Germaine", heure: "12:18", arret: 1 },
          { gare: "Avenay", heure: "12:25", arret: 1 },
          { gare: "Aÿ-Champagne", heure: "12:30", arret: 1 },
          { gare: "Epernay", heure: "12:35", arret: 2 }
        ]
      },
      {
        nom: "Epernay → Reims",
        dessertes: [
          { gare: "Epernay", heure: "12:50", arret: 2 },
          { gare: "Aÿ-Champagne", heure: "12:56", arret: 1 },
          { gare: "Avenay", heure: "13:01", arret: 1 },
          { gare: "Germaine", heure: "13:08", arret: 1 },
          { gare: "Rilly-la-Montagne", heure: "13:13", arret: 1 },
          { gare: "Maison Blanche", heure: "13:21", arret: 1 },
          { gare: "Reims", heure: "13:25", arret: 2 }
        ]
      },
      {
        nom: "Reims → Champagne-Ardenne TGV",
        dessertes: [
          { gare: "Reims", heure: "13:30", arret: 2 },
          { gare: "Champagne-Ardenne TGV", heure: "13:38", arret: 2 }
        ]
      },
      {
        nom: "Champagne-Ardenne TGV → Reims",
        dessertes: [
          { gare: "Champagne-Ardenne TGV", heure: "13:42", arret: 2 },
          { gare: "Reims", heure: "13:50", arret: 2 }
        ]
      },
      {
        nom: "Reims → Epernay",
        dessertes: [
          { gare: "Reims", heure: "14:00", arret: 2 },
          { gare: "Maison Blanche", heure: "14:05", arret: 1 },
          { gare: "Rilly-la-Montagne", heure: "14:13", arret: 1 },
          { gare: "Germaine", heure: "14:18", arret: 1 },
          { gare: "Avenay", heure: "14:25", arret: 1 },
          { gare: "Aÿ-Champagne", heure: "14:30", arret: 1 },
          { gare: "Epernay", heure: "14:35", arret: 2 }
        ]
      },
      {
        nom: "Epernay → Reims",
        dessertes: [
          { gare: "Epernay", heure: "14:50", arret: 2 },
          { gare: "Aÿ-Champagne", heure: "14:56", arret: 1 },
          { gare: "Avenay", heure: "15:01", arret: 1 },
          { gare: "Germaine", heure: "15:08", arret: 1 },
          { gare: "Rilly-la-Montagne", heure: "15:13", arret: 1 },
          { gare: "Maison Blanche", heure: "15:21", arret: 1 },
          { gare: "Reims", heure: "15:25", arret: 2 }
        ]
      },
      {
        nom: "Reims → Champagne-Ardenne TGV",
        dessertes: [
          { gare: "Reims", heure: "15:30", arret: 2 },
          { gare: "Champagne-Ardenne TGV", heure: "15:38", arret: 2 }
        ]
      },
      {
        nom: "Champagne-Ardenne TGV → Reims",
        dessertes: [
          { gare: "Champagne-Ardenne TGV", heure: "15:42", arret: 2 },
          { gare: "Reims", heure: "15:50", arret: 2 }
        ]
      },
      {
        nom: "Reims → Epernay",
        dessertes: [
          { gare: "Reims", heure: "16:00", arret: 2 },
          { gare: "Maison Blanche", heure: "16:05", arret: 1 },
          { gare: "Rilly-la-Montagne", heure: "16:13", arret: 1 },
          { gare: "Germaine", heure: "16:18", arret: 1 },
          { gare: "Avenay", heure: "16:25", arret: 1 },
          { gare: "Aÿ-Champagne", heure: "16:30", arret: 1 },
          { gare: "Epernay", heure: "16:35", arret: 2 }
        ]
      },
      {
        nom: "Epernay → Reims",
        dessertes: [
          { gare: "Epernay", heure: "16:50", arret: 2 },
          { gare: "Aÿ-Champagne", heure: "16:56", arret: 1 },
          { gare: "Avenay", heure: "17:01", arret: 1 },
          { gare: "Germaine", heure: "17:08", arret: 1 },
          { gare: "Rilly-la-Montagne", heure: "17:13", arret: 1 },
          { gare: "Maison Blanche", heure: "17:21", arret: 1 },
          { gare: "Reims", heure: "17:25", arret: 2 }
        ]
      },
      {
        nom: "Reims → Champagne-Ardenne TGV",
        dessertes: [
          { gare: "Reims", heure: "17:30", arret: 2 },
          { gare: "Champagne-Ardenne TGV", heure: "17:38", arret: 2 }
        ]
      },
      {
        nom: "Champagne-Ardenne TGV → Reims",
        dessertes: [
          { gare: "Champagne-Ardenne TGV", heure: "17:42", arret: 2 },
          { gare: "Reims", heure: "17:50", arret: 2 }
        ]
      },
      {
        nom: "Reims → Epernay",
        dessertes: [
          { gare: "Reims", heure: "18:00", arret: 2 },
          { gare: "Maison Blanche", heure: "18:05", arret: 1 },
          { gare: "Rilly-la-Montagne", heure: "18:13", arret: 1 },
          { gare: "Germaine", heure: "18:18", arret: 1 },
          { gare: "Avenay", heure: "18:25", arret: 1 },
          { gare: "Aÿ-Champagne", heure: "18:30", arret: 1 },
          { gare: "Epernay", heure: "18:35", arret: 2 }
        ]
      },
      {
        nom: "Epernay → Reims",
        dessertes: [
          { gare: "Epernay", heure: "18:50", arret: 2 },
          { gare: "Aÿ-Champagne", heure: "18:56", arret: 1 },
          { gare: "Avenay", heure: "19:01", arret: 1 },
          { gare: "Germaine", heure: "19:08", arret: 1 },
          { gare: "Rilly-la-Montagne", heure: "19:13", arret: 1 },
          { gare: "Maison Blanche", heure: "19:21", arret: 1 },
          { gare: "Reims", heure: "19:25", arret: 2 }
        ]
      },
      {
        nom: "Reims → Champagne-Ardenne TGV",
        dessertes: [
          { gare: "Reims", heure: "19:30", arret: 2 },
          { gare: "Champagne-Ardenne TGV", heure: "19:38", arret: 1 }
        ]
      },
      {
        nom: "Champagne-Ardenne TGV → Reims",
        dessertes: [
          { gare: "Champagne-Ardenne TGV", heure: "19:42", arret: 1 },
          { gare: "Reims", heure: "19:49", arret: 2 }
        ]
      }
    ]
  },

  {
    id: "TER 2818",
    nom: "AGC Champagne-Ardenne 3C",
    moteurs: ["diesel"],
    vitesseMax: 160,
    capacite: { premiere: 24, seconde: 134 },
    trajets: [
      {
        nom: "Reims → Laon",
        dessertes: [
          { gare: "Reims", heure: "06:00", arret: 2 },
          { gare: "Courcy - Brimont", heure: "06:11", arret: 1 },
          { gare: "Loivre", heure: "06:15", arret: 1 },
          { gare: "Aguilcourt-Variscourt", heure: "06:22", arret: 1 },
          { gare: "Guignicourt", heure: "06:26", arret: 1 },
          { gare: "Amifontaine", heure: "06:34", arret: 1 },
          { gare: "Saint-Erme", heure: "06:41", arret: 1 },
          { gare: "Coucy-lès-Eppes", heure: "06:50", arret: 1 },
          { gare: "Laon", heure: "07:04", arret: 2 }
        ]
      },
      {
        nom: "Laon → Reims",
        dessertes: [
          { gare: "Laon", heure: "07:34", arret: 2 },
          { gare: "Coucy-lès-Eppes", heure: "07:49", arret: 1 },
          { gare: "Saint-Erme", heure: "07:58", arret: 1 },
          { gare: "Amifontaine", heure: "08:05", arret: 1 },
          { gare: "Guignicourt", heure: "08:13", arret: 1 },
          { gare: "Aguilcourt-Variscourt", heure: "08:17", arret: 1 },
          { gare: "Loivre", heure: "08:24", arret: 1 },
          { gare: "Courcy - Brimont", heure: "08:28", arret: 1 },
          { gare: "Reims", heure: "08:38", arret: 2 }
        ]
      },
      {
        nom: "Reims → Laon",
        dessertes: [
          { gare: "Reims", heure: "09:00", arret: 2 },
          { gare: "Courcy - Brimont", heure: "09:11", arret: 1 },
          { gare: "Loivre", heure: "09:15", arret: 1 },
          { gare: "Aguilcourt-Variscourt", heure: "09:22", arret: 1 },
          { gare: "Guignicourt", heure: "09:26", arret: 1 },
          { gare: "Amifontaine", heure: "09:34", arret: 1 },
          { gare: "Saint-Erme", heure: "09:41", arret: 1 },
          { gare: "Coucy-lès-Eppes", heure: "09:50", arret: 1 },
          { gare: "Laon", heure: "10:04", arret: 2 }
        ]
      },
      {
        nom: "Laon → Reims",
        dessertes: [
          { gare: "Laon", heure: "10:34", arret: 2 },
          { gare: "Coucy-lès-Eppes", heure: "10:49", arret: 1 },
          { gare: "Saint-Erme", heure: "10:58", arret: 1 },
          { gare: "Amifontaine", heure: "11:05", arret: 1 },
          { gare: "Guignicourt", heure: "11:13", arret: 1 },
          { gare: "Aguilcourt-Variscourt", heure: "11:17", arret: 1 },
          { gare: "Loivre", heure: "11:24", arret: 1 },
          { gare: "Courcy - Brimont", heure: "11:28", arret: 1 },
          { gare: "Reims", heure: "11:38", arret: 2 }
        ]
      },
      {
        nom: "Reims → Laon",
        dessertes: [
          { gare: "Reims", heure: "12:00", arret: 2 },
          { gare: "Courcy - Brimont", heure: "12:11", arret: 1 },
          { gare: "Loivre", heure: "12:15", arret: 1 },
          { gare: "Aguilcourt-Variscourt", heure: "12:22", arret: 1 },
          { gare: "Guignicourt", heure: "12:26", arret: 1 },
          { gare: "Amifontaine", heure: "12:34", arret: 1 },
          { gare: "Saint-Erme", heure: "12:41", arret: 1 },
          { gare: "Coucy-lès-Eppes", heure: "12:50", arret: 1 },
          { gare: "Laon", heure: "13:04", arret: 2 }
        ]
      },
      {
        nom: "Laon → Reims",
        dessertes: [
          { gare: "Laon", heure: "13:34", arret: 2 },
          { gare: "Coucy-lès-Eppes", heure: "13:49", arret: 1 },
          { gare: "Saint-Erme", heure: "13:58", arret: 1 },
          { gare: "Amifontaine", heure: "14:05", arret: 1 },
          { gare: "Guignicourt", heure: "14:13", arret: 1 },
          { gare: "Aguilcourt-Variscourt", heure: "14:17", arret: 1 },
          { gare: "Loivre", heure: "14:24", arret: 1 },
          { gare: "Courcy - Brimont", heure: "14:28", arret: 1 },
          { gare: "Reims", heure: "14:38", arret: 2 }
        ]
      },
      {
        nom: "Reims → Laon",
        dessertes: [
          { gare: "Reims", heure: "15:00", arret: 2 },
          { gare: "Courcy - Brimont", heure: "15:11", arret: 1 },
          { gare: "Loivre", heure: "15:15", arret: 1 },
          { gare: "Aguilcourt-Variscourt", heure: "15:22", arret: 1 },
          { gare: "Guignicourt", heure: "15:26", arret: 1 },
          { gare: "Amifontaine", heure: "15:34", arret: 1 },
          { gare: "Saint-Erme", heure: "15:41", arret: 1 },
          { gare: "Coucy-lès-Eppes", heure: "15:50", arret: 1 },
          { gare: "Laon", heure: "16:04", arret: 2 }
        ]
      },
      {
        nom: "Laon → Reims",
        dessertes: [
          { gare: "Laon", heure: "16:34", arret: 2 },
          { gare: "Coucy-lès-Eppes", heure: "16:49", arret: 1 },
          { gare: "Saint-Erme", heure: "16:58", arret: 1 },
          { gare: "Amifontaine", heure: "17:05", arret: 1 },
          { gare: "Guignicourt", heure: "17:13", arret: 1 },
          { gare: "Aguilcourt-Variscourt", heure: "17:17", arret: 1 },
          { gare: "Loivre", heure: "17:24", arret: 1 },
          { gare: "Courcy - Brimont", heure: "17:28", arret: 1 },
          { gare: "Reims", heure: "17:38", arret: 2 }
        ]
      },
      {
        nom: "Reims → Laon",
        dessertes: [
          { gare: "Reims", heure: "18:00", arret: 2 },
          { gare: "Courcy - Brimont", heure: "18:11", arret: 1 },
          { gare: "Loivre", heure: "18:15", arret: 1 },
          { gare: "Aguilcourt-Variscourt", heure: "18:22", arret: 1 },
          { gare: "Guignicourt", heure: "18:26", arret: 1 },
          { gare: "Amifontaine", heure: "18:34", arret: 1 },
          { gare: "Saint-Erme", heure: "18:41", arret: 1 },
          { gare: "Coucy-lès-Eppes", heure: "18:50", arret: 1 },
          { gare: "Laon", heure: "19:04", arret: 2 }
        ]
      },
      {
        nom: "Laon → Reims",
        dessertes: [
          { gare: "Laon", heure: "19:34", arret: 2 },
          { gare: "Coucy-lès-Eppes", heure: "19:49", arret: 1 },
          { gare: "Saint-Erme", heure: "19:58", arret: 1 },
          { gare: "Amifontaine", heure: "20:05", arret: 1 },
          { gare: "Guignicourt", heure: "20:13", arret: 1 },
          { gare: "Aguilcourt-Variscourt", heure: "20:17", arret: 1 },
          { gare: "Loivre", heure: "20:24", arret: 1 },
          { gare: "Courcy - Brimont", heure: "20:28", arret: 1 },
          { gare: "Reims", heure: "20:38", arret: 2 }
        ]
      }
    ]
  },

  {
    id: "TER 2819",
    nom: "AGC Champagne-Ardenne 3C",
    moteurs: ["diesel"],
    vitesseMax: 160,
    capacite: { premiere: 24, seconde: 134 },
    trajets: [
      {
        nom: "Reims → Laon",
        dessertes: [
          { gare: "Reims", heure: "07:34", arret: 2 },
          { gare: "Courcy - Brimont", heure: "07:45", arret: 1 },
          { gare: "Loivre", heure: "07:49", arret: 1 },
          { gare: "Aguilcourt-Variscourt", heure: "07:56", arret: 1 },
          { gare: "Guignicourt", heure: "08:00", arret: 1 },
          { gare: "Amifontaine", heure: "08:08", arret: 1 },
          { gare: "Saint-Erme", heure: "08:15", arret: 1 },
          { gare: "Coucy-lès-Eppes", heure: "08:24", arret: 1 },
          { gare: "Laon", heure: "08:38", arret: 2 }
        ]
      },
      {
        nom: "Laon → Reims",
        dessertes: [
          { gare: "Laon", heure: "09:00", arret: 2 },
          { gare: "Coucy-lès-Eppes", heure: "09:15", arret: 1 },
          { gare: "Saint-Erme", heure: "09:24", arret: 1 },
          { gare: "Amifontaine", heure: "09:31", arret: 1 },
          { gare: "Guignicourt", heure: "09:39", arret: 1 },
          { gare: "Aguilcourt-Variscourt", heure: "09:43", arret: 1 },
          { gare: "Loivre", heure: "09:50", arret: 1 },
          { gare: "Courcy - Brimont", heure: "09:54", arret: 1 },
          { gare: "Reims", heure: "10:04", arret: 2 }
        ]
      },
      {
        nom: "Reims → Laon",
        dessertes: [
          { gare: "Reims", heure: "10:34", arret: 2 },
          { gare: "Courcy - Brimont", heure: "10:45", arret: 1 },
          { gare: "Loivre", heure: "10:49", arret: 1 },
          { gare: "Aguilcourt-Variscourt", heure: "10:56", arret: 1 },
          { gare: "Guignicourt", heure: "11:00", arret: 1 },
          { gare: "Amifontaine", heure: "11:08", arret: 1 },
          { gare: "Saint-Erme", heure: "11:15", arret: 1 },
          { gare: "Coucy-lès-Eppes", heure: "11:24", arret: 1 },
          { gare: "Laon", heure: "11:38", arret: 2 }
        ]
      },
      {
        nom: "Laon → Reims",
        dessertes: [
          { gare: "Laon", heure: "12:00", arret: 2 },
          { gare: "Coucy-lès-Eppes", heure: "12:15", arret: 1 },
          { gare: "Saint-Erme", heure: "12:24", arret: 1 },
          { gare: "Amifontaine", heure: "12:31", arret: 1 },
          { gare: "Guignicourt", heure: "12:39", arret: 1 },
          { gare: "Aguilcourt-Variscourt", heure: "12:43", arret: 1 },
          { gare: "Loivre", heure: "12:50", arret: 1 },
          { gare: "Courcy - Brimont", heure: "12:54", arret: 1 },
          { gare: "Reims", heure: "13:04", arret: 2 }
        ]
      },
      {
        nom: "Reims → Laon",
        dessertes: [
          { gare: "Reims", heure: "13:34", arret: 2 },
          { gare: "Courcy - Brimont", heure: "13:45", arret: 1 },
          { gare: "Loivre", heure: "13:49", arret: 1 },
          { gare: "Aguilcourt-Variscourt", heure: "13:56", arret: 1 },
          { gare: "Guignicourt", heure: "14:00", arret: 1 },
          { gare: "Amifontaine", heure: "14:08", arret: 1 },
          { gare: "Saint-Erme", heure: "14:15", arret: 1 },
          { gare: "Coucy-lès-Eppes", heure: "14:24", arret: 1 },
          { gare: "Laon", heure: "14:38", arret: 2 }
        ]
      },
      {
        nom: "Laon → Reims",
        dessertes: [
          { gare: "Laon", heure: "15:00", arret: 2 },
          { gare: "Coucy-lès-Eppes", heure: "15:15", arret: 1 },
          { gare: "Saint-Erme", heure: "15:24", arret: 1 },
          { gare: "Amifontaine", heure: "15:31", arret: 1 },
          { gare: "Guignicourt", heure: "15:39", arret: 1 },
          { gare: "Aguilcourt-Variscourt", heure: "15:43", arret: 1 },
          { gare: "Loivre", heure: "15:50", arret: 1 },
          { gare: "Courcy - Brimont", heure: "15:54", arret: 1 },
          { gare: "Reims", heure: "16:04", arret: 2 }
        ]
      },
      {
        nom: "Reims → Laon",
        dessertes: [
          { gare: "Reims", heure: "16:34", arret: 2 },
          { gare: "Courcy - Brimont", heure: "16:45", arret: 1 },
          { gare: "Loivre", heure: "16:49", arret: 1 },
          { gare: "Aguilcourt-Variscourt", heure: "16:56", arret: 1 },
          { gare: "Guignicourt", heure: "17:00", arret: 1 },
          { gare: "Amifontaine", heure: "17:08", arret: 1 },
          { gare: "Saint-Erme", heure: "17:15", arret: 1 },
          { gare: "Coucy-lès-Eppes", heure: "17:24", arret: 1 },
          { gare: "Laon", heure: "17:38", arret: 2 }
        ]
      },
      {
        nom: "Laon → Reims",
        dessertes: [
          { gare: "Laon", heure: "18:00", arret: 2 },
          { gare: "Coucy-lès-Eppes", heure: "18:15", arret: 1 },
          { gare: "Saint-Erme", heure: "18:24", arret: 1 },
          { gare: "Amifontaine", heure: "18:31", arret: 1 },
          { gare: "Guignicourt", heure: "18:39", arret: 1 },
          { gare: "Aguilcourt-Variscourt", heure: "18:43", arret: 1 },
          { gare: "Loivre", heure: "18:50", arret: 1 },
          { gare: "Courcy - Brimont", heure: "18:54", arret: 1 },
          { gare: "Reims", heure: "19:04", arret: 2 }
        ]
      },
      {
        nom: "Reims → Laon",
        dessertes: [
          { gare: "Reims", heure: "19:34", arret: 2 },
          { gare: "Courcy - Brimont", heure: "19:45", arret: 1 },
          { gare: "Loivre", heure: "19:49", arret: 1 },
          { gare: "Aguilcourt-Variscourt", heure: "19:56", arret: 1 },
          { gare: "Guignicourt", heure: "20:00", arret: 1 },
          { gare: "Amifontaine", heure: "20:08", arret: 1 },
          { gare: "Saint-Erme", heure: "20:15", arret: 1 },
          { gare: "Coucy-lès-Eppes", heure: "20:24", arret: 1 },
          { gare: "Laon", heure: "20:38", arret: 2 }
        ]
      },
      {
        nom: "Laon → Reims",
        dessertes: [
          { gare: "Laon", heure: "21:00", arret: 2 },
          { gare: "Coucy-lès-Eppes", heure: "21:15", arret: 1 },
          { gare: "Saint-Erme", heure: "21:24", arret: 1 },
          { gare: "Amifontaine", heure: "21:31", arret: 1 },
          { gare: "Guignicourt", heure: "21:39", arret: 1 },
          { gare: "Aguilcourt-Variscourt", heure: "21:43", arret: 1 },
          { gare: "Loivre", heure: "21:50", arret: 1 },
          { gare: "Courcy - Brimont", heure: "21:54", arret: 1 },
          { gare: "Reims", heure: "22:04", arret: 2 }
        ]
      }
    ]
  },

  {
    id: "TER 2830",
    nom: "AGC Champagne-Ardenne 3C",
    moteurs: ["diesel"],
    vitesseMax: 160,
    capacite: { premiere: 24, seconde: 134 },
    trajets: [
      {
        nom: "Chaumont → Reims",
        dessertes: [
          { gare: "Chaumont", heure: "07:58", arret: 3 },
          { gare: "Bologne", heure: "08:10", arret: 1 },
          { gare: "Vraincourt", heure: "08:16", arret: 1 },
          { gare: "Fronville", heure: "08:32", arret: 1 },
          { gare: "Joinville", heure: "08:38", arret: 1 },
          { gare: "Chevillon", heure: "08:47", arret: 1 },
          { gare: "Saint-Dizier", heure: "09:07", arret: 1 },
          { gare: "Vitry-le-François", heure: "09:37", arret: 1 },
          { gare: "Châlons-En-Champagne", heure: "10:02", arret: 1 },
          { gare: "Mourmelon-le-Petit", heure: "10:18", arret: 1 },
          { gare: "Reims", heure: "10:47", arret: 2 }
        ]
      },
      {
        nom: "Reims → Chaumont",
        dessertes: [
          { gare: "Reims", heure: "11:15", arret: 2 },
          { gare: "Mourmelon-le-Petit", heure: "11:45", arret: 1 },
          { gare: "Châlons-En-Champagne", heure: "12:01", arret: 1 },
          { gare: "Vitry-le-François", heure: "12:26", arret: 1 },
          { gare: "Saint-Dizier", heure: "12:56", arret: 1 },
          { gare: "Chevillon", heure: "13:16", arret: 1 },
          { gare: "Joinville", heure: "13:25", arret: 1 },
          { gare: "Fronville", heure: "13:31", arret: 1 },
          { gare: "Vraincourt", heure: "13:47", arret: 1 },
          { gare: "Bologne", heure: "13:53", arret: 1 },
          { gare: "Chaumont", heure: "14:03", arret: 3 }
        ]
      },
      {
        nom: "Chaumont → Reims",
        dessertes: [
          { gare: "Chaumont", heure: "14:58", arret: 3 },
          { gare: "Bologne", heure: "15:10", arret: 1 },
          { gare: "Vraincourt", heure: "15:16", arret: 1 },
          { gare: "Fronville", heure: "15:32", arret: 1 },
          { gare: "Joinville", heure: "15:38", arret: 1 },
          { gare: "Chevillon", heure: "15:47", arret: 1 },
          { gare: "Saint-Dizier", heure: "16:07", arret: 1 },
          { gare: "Vitry-le-François", heure: "16:37", arret: 1 },
          { gare: "Châlons-En-Champagne", heure: "17:02", arret: 1 },
          { gare: "Mourmelon-le-Petit", heure: "17:18", arret: 1 },
          { gare: "Reims", heure: "17:47", arret: 2 }
        ]
      },
      {
        nom: "Reims → Chaumont",
        dessertes: [
          { gare: "Reims", heure: "18:15", arret: 2 },
          { gare: "Mourmelon-le-Petit", heure: "18:45", arret: 1 },
          { gare: "Châlons-En-Champagne", heure: "19:01", arret: 1 },
          { gare: "Vitry-le-François", heure: "19:26", arret: 1 },
          { gare: "Saint-Dizier", heure: "19:56", arret: 1 },
          { gare: "Chevillon", heure: "20:16", arret: 1 },
          { gare: "Joinville", heure: "20:25", arret: 1 },
          { gare: "Fronville", heure: "20:31", arret: 1 },
          { gare: "Vraincourt", heure: "20:47", arret: 1 },
          { gare: "Bologne", heure: "20:53", arret: 1 },
          { gare: "Chaumont", heure: "21:03", arret: 3 }
        ]
      }
    ]
  },

  {
    id: "TER 2831",
    nom: "AGC Champagne-Ardenne 3C",
    moteurs: ["diesel"],
    vitesseMax: 160,
    capacite: { premiere: 24, seconde: 134 },
    trajets: [
      {
        nom: "Chaumont → Reims",
        dessertes: [
          { gare: "Chaumont", heure: "08:58", arret: 3 },
          { gare: "Bologne", heure: "09:10", arret: 1 },
          { gare: "Vraincourt", heure: "09:16", arret: 1 },
          { gare: "Fronville", heure: "09:32", arret: 1 },
          { gare: "Joinville", heure: "09:38", arret: 1 },
          { gare: "Chevillon", heure: "09:47", arret: 1 },
          { gare: "Saint-Dizier", heure: "10:07", arret: 1 },
          { gare: "Vitry-le-François", heure: "10:37", arret: 1 },
          { gare: "Châlons-En-Champagne", heure: "11:02", arret: 2 },
          { gare: "Mourmelon-le-Petit", heure: "11:19", arret: 1 },
          { gare: "Reims", heure: "11:48", arret: 2 }
        ]
      },
      {
        nom: "Reims → Chaumont",
        dessertes: [
          { gare: "Reims", heure: "12:15", arret: 2 },
          { gare: "Mourmelon-le-Petit", heure: "12:45", arret: 1 },
          { gare: "Châlons-En-Champagne", heure: "13:01", arret: 2 },
          { gare: "Vitry-le-François", heure: "13:27", arret: 1 },
          { gare: "Saint-Dizier", heure: "13:57", arret: 1 },
          { gare: "Chevillon", heure: "14:17", arret: 1 },
          { gare: "Joinville", heure: "14:26", arret: 1 },
          { gare: "Fronville", heure: "14:32", arret: 1 },
          { gare: "Vraincourt", heure: "14:48", arret: 1 },
          { gare: "Bologne", heure: "14:54", arret: 1 },
          { gare: "Chaumont", heure: "15:04", arret: 3 }
        ]
      },
      {
        nom: "Chaumont → Reims",
        dessertes: [
          { gare: "Chaumont", heure: "15:58", arret: 3 },
          { gare: "Bologne", heure: "16:10", arret: 1 },
          { gare: "Vraincourt", heure: "16:16", arret: 1 },
          { gare: "Fronville", heure: "16:32", arret: 1 },
          { gare: "Joinville", heure: "16:38", arret: 1 },
          { gare: "Chevillon", heure: "16:47", arret: 1 },
          { gare: "Saint-Dizier", heure: "17:07", arret: 1 },
          { gare: "Vitry-le-François", heure: "17:37", arret: 1 },
          { gare: "Châlons-En-Champagne", heure: "18:02", arret: 2 },
          { gare: "Mourmelon-le-Petit", heure: "18:19", arret: 1 },
          { gare: "Reims", heure: "18:48", arret: 2 }
        ]
      },
      {
        nom: "Reims → Chaumont",
        dessertes: [
          { gare: "Reims", heure: "19:15", arret: 2 },
          { gare: "Mourmelon-le-Petit", heure: "19:45", arret: 1 },
          { gare: "Châlons-En-Champagne", heure: "20:01", arret: 2 },
          { gare: "Vitry-le-François", heure: "20:27", arret: 1 },
          { gare: "Saint-Dizier", heure: "20:57", arret: 1 },
          { gare: "Chevillon", heure: "21:17", arret: 1 },
          { gare: "Joinville", heure: "21:26", arret: 1 },
          { gare: "Fronville", heure: "21:32", arret: 1 },
          { gare: "Vraincourt", heure: "21:48", arret: 1 },
          { gare: "Bologne", heure: "21:54", arret: 1 },
          { gare: "Chaumont", heure: "22:04", arret: 3 }
        ]
      }
    ]
  },

  {
    id: "TER 2834",
    nom: "AGC Champagne-Ardenne 3C",
    moteurs: ["diesel"],
    vitesseMax: 160,
    capacite: { premiere: 24, seconde: 134 },
    trajets: [
      {
        nom: "Chaumont → Culmont-Chalindrey",
        dessertes: [
          { gare: "Chaumont", heure: "09:00", arret: 2 },
          { gare: "Langres", heure: "09:25", arret: 1 },
          { gare: "Culmont-Chalindrey", heure: "09:35", arret: 2 }
        ]
      },
      {
        nom: "Culmont-Chalindrey → Reims",
        dessertes: [
          { gare: "Culmont-Chalindrey", heure: "10:25", arret: 1 },
          { gare: "Langres", heure: "10:35", arret: 1 },
          { gare: "Chaumont", heure: "10:59", arret: 2 },
          { gare: "Bologne", heure: "11:10", arret: 1 },
          { gare: "Vraincourt", heure: "11:16", arret: 1 },
          { gare: "Fronville", heure: "11:32", arret: 1 },
          { gare: "Joinville", heure: "11:38", arret: 1 },
          { gare: "Chevillon", heure: "11:47", arret: 1 },
          { gare: "Saint-Dizier", heure: "12:07", arret: 2 },
          { gare: "Vitry-le-François", heure: "12:38", arret: 1 },
          { gare: "Châlons-En-Champagne", heure: "13:03", arret: 1 },
          { gare: "Mourmelon-le-Petit", heure: "13:19", arret: 1 },
          { gare: "Reims", heure: "13:48", arret: 2 }
        ]
      },
      {
        nom: "Reims → Chaumont",
        dessertes: [
          { gare: "Reims", heure: "14:20", arret: 2 },
          { gare: "Mourmelon-le-Petit", heure: "14:50", arret: 1 },
          { gare: "Châlons-En-Champagne", heure: "15:06", arret: 1 },
          { gare: "Vitry-le-François", heure: "15:31", arret: 1 },
          { gare: "Saint-Dizier", heure: "16:01", arret: 2 },
          { gare: "Chevillon", heure: "16:22", arret: 1 },
          { gare: "Joinville", heure: "16:31", arret: 1 },
          { gare: "Fronville", heure: "16:37", arret: 1 },
          { gare: "Vraincourt", heure: "16:53", arret: 1 },
          { gare: "Bologne", heure: "16:59", arret: 1 },
          { gare: "Chaumont", heure: "17:09", arret: 2 }
        ]
      },
      {
        nom: "Chaumont → Reims",
        dessertes: [
          { gare: "Chaumont", heure: "17:20", arret: 2 },
          { gare: "Bologne", heure: "17:31", arret: 1 },
          { gare: "Vraincourt", heure: "17:37", arret: 1 },
          { gare: "Fronville", heure: "17:53", arret: 1 },
          { gare: "Joinville", heure: "17:59", arret: 1 },
          { gare: "Chevillon", heure: "18:08", arret: 1 },
          { gare: "Saint-Dizier", heure: "18:28", arret: 2 },
          { gare: "Vitry-le-François", heure: "18:59", arret: 1 },
          { gare: "Châlons-En-Champagne", heure: "19:24", arret: 1 },
          { gare: "Mourmelon-le-Petit", heure: "19:40", arret: 1 },
          { gare: "Reims", heure: "20:09", arret: 2 }
        ]
      },
      {
        nom: "Reims → Chaumont",
        dessertes: [
          { gare: "Reims", heure: "20:20", arret: 2 },
          { gare: "Mourmelon-le-Petit", heure: "20:50", arret: 1 },
          { gare: "Châlons-En-Champagne", heure: "21:06", arret: 1 },
          { gare: "Vitry-le-François", heure: "21:31", arret: 1 },
          { gare: "Saint-Dizier", heure: "22:01", arret: 2 },
          { gare: "Chevillon", heure: "22:22", arret: 1 },
          { gare: "Joinville", heure: "22:31", arret: 1 },
          { gare: "Fronville", heure: "22:37", arret: 1 },
          { gare: "Vraincourt", heure: "22:53", arret: 1 },
          { gare: "Bologne", heure: "22:59", arret: 1 },
          { gare: "Chaumont", heure: "23:09", arret: 2 }
        ]
      }
    ]
  },

  {
    id: "TER 2910",
    nom: "Z24500 Metrolor",
    moteurs: ["25kV CA", "1.5kV CC"],
    vitesseMax: 160,
    capacite: { premiere: 41, seconde: 298 },
    trajets: [
      {
        nom: "Nancy → Metz",
        dessertes: [
          { gare: "Nancy", heure: "07:00", arret: 4 },
          { gare: "Champigneulles", heure: "07:08", arret: 1 },
          { gare: "Frouard", heure: "07:12", arret: 1 },
          { gare: "Pompey", heure: "07:15", arret: 1 },
          { gare: "Belleville", heure: "07:21", arret: 1 },
          { gare: "Dieulouard", heure: "07:25", arret: 1 },
          { gare: "Pont-à-Mousson", heure: "07:30", arret: 1 },
          { gare: "Vandières", heure: "07:35", arret: 1 },
          { gare: "Pagny-sur-Moselle", heure: "07:39", arret: 1 },
          { gare: "Novéant-sur-Moselle", heure: "07:44", arret: 1 },
          { gare: "Ancy sur Moselle", heure: "07:48", arret: 1 },
          { gare: "Ars-sur-Moselle", heure: "07:51", arret: 1 },
          { gare: "Metz", heure: "08:02", arret: 4 }
        ]
      },
      {
        nom: "Metz → Nancy",
        dessertes: [
          { gare: "Metz", heure: "09:00", arret: 4 },
          { gare: "Ars-sur-Moselle", heure: "09:14", arret: 1 },
          { gare: "Ancy sur Moselle", heure: "09:17", arret: 1 },
          { gare: "Novéant-sur-Moselle", heure: "09:21", arret: 1 },
          { gare: "Pagny-sur-Moselle", heure: "09:26", arret: 1 },
          { gare: "Vandières", heure: "09:30", arret: 1 },
          { gare: "Pont-à-Mousson", heure: "09:35", arret: 1 },
          { gare: "Dieulouard", heure: "09:40", arret: 1 },
          { gare: "Belleville", heure: "09:44", arret: 1 },
          { gare: "Pompey", heure: "09:50", arret: 1 },
          { gare: "Frouard", heure: "09:53", arret: 1 },
          { gare: "Champigneulles", heure: "09:57", arret: 1 },
          { gare: "Nancy", heure: "10:02", arret: 4 }
        ]
      },
      {
        nom: "Nancy → Metz",
        dessertes: [
          { gare: "Nancy", heure: "11:00", arret: 4 },
          { gare: "Champigneulles", heure: "11:08", arret: 1 },
          { gare: "Frouard", heure: "11:12", arret: 1 },
          { gare: "Pompey", heure: "11:15", arret: 1 },
          { gare: "Belleville", heure: "11:21", arret: 1 },
          { gare: "Dieulouard", heure: "11:25", arret: 1 },
          { gare: "Pont-à-Mousson", heure: "11:30", arret: 1 },
          { gare: "Vandières", heure: "11:35", arret: 1 },
          { gare: "Pagny-sur-Moselle", heure: "11:39", arret: 1 },
          { gare: "Novéant-sur-Moselle", heure: "11:44", arret: 1 },
          { gare: "Ancy sur Moselle", heure: "11:48", arret: 1 },
          { gare: "Ars-sur-Moselle", heure: "11:51", arret: 1 },
          { gare: "Metz", heure: "12:02", arret: 4 }
        ]
      },
      {
        nom: "Metz → Nancy",
        dessertes: [
          { gare: "Metz", heure: "13:00", arret: 4 },
          { gare: "Ars-sur-Moselle", heure: "13:14", arret: 1 },
          { gare: "Ancy sur Moselle", heure: "13:17", arret: 1 },
          { gare: "Novéant-sur-Moselle", heure: "13:21", arret: 1 },
          { gare: "Pagny-sur-Moselle", heure: "13:26", arret: 1 },
          { gare: "Vandières", heure: "13:30", arret: 1 },
          { gare: "Pont-à-Mousson", heure: "13:35", arret: 1 },
          { gare: "Dieulouard", heure: "13:40", arret: 1 },
          { gare: "Belleville", heure: "13:44", arret: 1 },
          { gare: "Pompey", heure: "13:50", arret: 1 },
          { gare: "Frouard", heure: "13:53", arret: 1 },
          { gare: "Champigneulles", heure: "13:57", arret: 1 },
          { gare: "Nancy", heure: "14:02", arret: 4 }
        ]
      },
      {
        nom: "Nancy → Metz",
        dessertes: [
          { gare: "Nancy", heure: "15:00", arret: 4 },
          { gare: "Champigneulles", heure: "15:08", arret: 1 },
          { gare: "Frouard", heure: "15:12", arret: 1 },
          { gare: "Pompey", heure: "15:15", arret: 1 },
          { gare: "Belleville", heure: "15:21", arret: 1 },
          { gare: "Dieulouard", heure: "15:25", arret: 1 },
          { gare: "Pont-à-Mousson", heure: "15:30", arret: 1 },
          { gare: "Vandières", heure: "15:35", arret: 1 },
          { gare: "Pagny-sur-Moselle", heure: "15:39", arret: 1 },
          { gare: "Novéant-sur-Moselle", heure: "15:44", arret: 1 },
          { gare: "Ancy sur Moselle", heure: "15:48", arret: 1 },
          { gare: "Ars-sur-Moselle", heure: "15:51", arret: 1 },
          { gare: "Metz", heure: "16:02", arret: 4 }
        ]
      },
      {
        nom: "Metz → Nancy",
        dessertes: [
          { gare: "Metz", heure: "17:00", arret: 4 },
          { gare: "Ars-sur-Moselle", heure: "17:14", arret: 1 },
          { gare: "Ancy sur Moselle", heure: "17:17", arret: 1 },
          { gare: "Novéant-sur-Moselle", heure: "17:21", arret: 1 },
          { gare: "Pagny-sur-Moselle", heure: "17:26", arret: 1 },
          { gare: "Vandières", heure: "17:30", arret: 1 },
          { gare: "Pont-à-Mousson", heure: "17:35", arret: 1 },
          { gare: "Dieulouard", heure: "17:40", arret: 1 },
          { gare: "Belleville", heure: "17:44", arret: 1 },
          { gare: "Pompey", heure: "17:50", arret: 1 },
          { gare: "Frouard", heure: "17:53", arret: 1 },
          { gare: "Champigneulles", heure: "17:57", arret: 1 },
          { gare: "Nancy", heure: "18:02", arret: 4 }
        ]
      },
      {
        nom: "Nancy → Metz",
        dessertes: [
          { gare: "Nancy", heure: "19:00", arret: 4 },
          { gare: "Champigneulles", heure: "19:08", arret: 1 },
          { gare: "Frouard", heure: "19:12", arret: 1 },
          { gare: "Pompey", heure: "19:15", arret: 1 },
          { gare: "Belleville", heure: "19:21", arret: 1 },
          { gare: "Dieulouard", heure: "19:25", arret: 1 },
          { gare: "Pont-à-Mousson", heure: "19:30", arret: 1 },
          { gare: "Vandières", heure: "19:35", arret: 1 },
          { gare: "Pagny-sur-Moselle", heure: "19:39", arret: 1 },
          { gare: "Novéant-sur-Moselle", heure: "19:44", arret: 1 },
          { gare: "Ancy sur Moselle", heure: "19:48", arret: 1 },
          { gare: "Ars-sur-Moselle", heure: "19:51", arret: 1 },
          { gare: "Metz", heure: "20:02", arret: 4 }
        ]
      },
      {
        nom: "Metz → Nancy",
        dessertes: [
          { gare: "Metz", heure: "21:00", arret: 4 },
          { gare: "Ars-sur-Moselle", heure: "21:14", arret: 1 },
          { gare: "Ancy sur Moselle", heure: "21:17", arret: 1 },
          { gare: "Novéant-sur-Moselle", heure: "21:21", arret: 1 },
          { gare: "Pagny-sur-Moselle", heure: "21:26", arret: 1 },
          { gare: "Vandières", heure: "21:30", arret: 1 },
          { gare: "Pont-à-Mousson", heure: "21:35", arret: 1 },
          { gare: "Dieulouard", heure: "21:40", arret: 1 },
          { gare: "Belleville", heure: "21:44", arret: 1 },
          { gare: "Pompey", heure: "21:50", arret: 1 },
          { gare: "Frouard", heure: "21:53", arret: 1 },
          { gare: "Champigneulles", heure: "21:57", arret: 1 },
          { gare: "Nancy", heure: "22:02", arret: 4 }
        ]
      }
    ]
  },

  {
    id: "TER 2911",
    nom: "AGC Metrolor 4C",
    moteurs: ["25kV CA", "1.5kV CC"],
    vitesseMax: 160,
    capacite: { premiere: 24, seconde: 183 },
    trajets: [
      {
        nom: "Metz → Nancy",
        dessertes: [
          { gare: "Metz", heure: "07:00", arret: 4 },
          { gare: "Ars-sur-Moselle", heure: "07:14", arret: 1 },
          { gare: "Ancy sur Moselle", heure: "07:17", arret: 1 },
          { gare: "Novéant-sur-Moselle", heure: "07:21", arret: 1 },
          { gare: "Pagny-sur-Moselle", heure: "07:26", arret: 1 },
          { gare: "Vandières", heure: "07:30", arret: 1 },
          { gare: "Pont-à-Mousson", heure: "07:35", arret: 1 },
          { gare: "Dieulouard", heure: "07:40", arret: 1 },
          { gare: "Belleville", heure: "07:44", arret: 1 },
          { gare: "Pompey", heure: "07:50", arret: 1 },
          { gare: "Frouard", heure: "07:53", arret: 1 },
          { gare: "Champigneulles", heure: "07:57", arret: 1 },
          { gare: "Nancy", heure: "08:02", arret: 4 }
        ]
      },
      {
        nom: "Nancy → Metz",
        dessertes: [
          { gare: "Nancy", heure: "09:00", arret: 4 },
          { gare: "Champigneulles", heure: "09:08", arret: 1 },
          { gare: "Frouard", heure: "09:12", arret: 1 },
          { gare: "Pompey", heure: "09:15", arret: 1 },
          { gare: "Belleville", heure: "09:21", arret: 1 },
          { gare: "Dieulouard", heure: "09:25", arret: 1 },
          { gare: "Pont-à-Mousson", heure: "09:30", arret: 1 },
          { gare: "Vandières", heure: "09:35", arret: 1 },
          { gare: "Pagny-sur-Moselle", heure: "09:39", arret: 1 },
          { gare: "Novéant-sur-Moselle", heure: "09:44", arret: 1 },
          { gare: "Ancy sur Moselle", heure: "09:48", arret: 1 },
          { gare: "Ars-sur-Moselle", heure: "09:51", arret: 1 },
          { gare: "Metz", heure: "10:02", arret: 4 }
        ]
      },
      {
        nom: "Metz → Nancy",
        dessertes: [
          { gare: "Metz", heure: "11:00", arret: 4 },
          { gare: "Ars-sur-Moselle", heure: "11:14", arret: 1 },
          { gare: "Ancy sur Moselle", heure: "11:17", arret: 1 },
          { gare: "Novéant-sur-Moselle", heure: "11:21", arret: 1 },
          { gare: "Pagny-sur-Moselle", heure: "11:26", arret: 1 },
          { gare: "Vandières", heure: "11:30", arret: 1 },
          { gare: "Pont-à-Mousson", heure: "11:35", arret: 1 },
          { gare: "Dieulouard", heure: "11:40", arret: 1 },
          { gare: "Belleville", heure: "11:44", arret: 1 },
          { gare: "Pompey", heure: "11:50", arret: 1 },
          { gare: "Frouard", heure: "11:53", arret: 1 },
          { gare: "Champigneulles", heure: "11:57", arret: 1 },
          { gare: "Nancy", heure: "12:02", arret: 4 }
        ]
      },
      {
        nom: "Nancy → Metz",
        dessertes: [
          { gare: "Nancy", heure: "13:00", arret: 4 },
          { gare: "Champigneulles", heure: "13:08", arret: 1 },
          { gare: "Frouard", heure: "13:12", arret: 1 },
          { gare: "Pompey", heure: "13:15", arret: 1 },
          { gare: "Belleville", heure: "13:21", arret: 1 },
          { gare: "Dieulouard", heure: "13:25", arret: 1 },
          { gare: "Pont-à-Mousson", heure: "13:30", arret: 1 },
          { gare: "Vandières", heure: "13:35", arret: 1 },
          { gare: "Pagny-sur-Moselle", heure: "13:39", arret: 1 },
          { gare: "Novéant-sur-Moselle", heure: "13:44", arret: 1 },
          { gare: "Ancy sur Moselle", heure: "13:48", arret: 1 },
          { gare: "Ars-sur-Moselle", heure: "13:51", arret: 1 },
          { gare: "Metz", heure: "14:02", arret: 4 }
        ]
      },
      {
        nom: "Metz → Nancy",
        dessertes: [
          { gare: "Metz", heure: "15:00", arret: 4 },
          { gare: "Ars-sur-Moselle", heure: "15:14", arret: 1 },
          { gare: "Ancy sur Moselle", heure: "15:17", arret: 1 },
          { gare: "Novéant-sur-Moselle", heure: "15:21", arret: 1 },
          { gare: "Pagny-sur-Moselle", heure: "15:26", arret: 1 },
          { gare: "Vandières", heure: "15:30", arret: 1 },
          { gare: "Pont-à-Mousson", heure: "15:35", arret: 1 },
          { gare: "Dieulouard", heure: "15:40", arret: 1 },
          { gare: "Belleville", heure: "15:44", arret: 1 },
          { gare: "Pompey", heure: "15:50", arret: 1 },
          { gare: "Frouard", heure: "15:53", arret: 1 },
          { gare: "Champigneulles", heure: "15:57", arret: 1 },
          { gare: "Nancy", heure: "16:02", arret: 4 }
        ]
      },
      {
        nom: "Nancy → Metz",
        dessertes: [
          { gare: "Nancy", heure: "17:00", arret: 4 },
          { gare: "Champigneulles", heure: "17:08", arret: 1 },
          { gare: "Frouard", heure: "17:12", arret: 1 },
          { gare: "Pompey", heure: "17:15", arret: 1 },
          { gare: "Belleville", heure: "17:21", arret: 1 },
          { gare: "Dieulouard", heure: "17:25", arret: 1 },
          { gare: "Pont-à-Mousson", heure: "17:30", arret: 1 },
          { gare: "Vandières", heure: "17:35", arret: 1 },
          { gare: "Pagny-sur-Moselle", heure: "17:39", arret: 1 },
          { gare: "Novéant-sur-Moselle", heure: "17:44", arret: 1 },
          { gare: "Ancy sur Moselle", heure: "17:48", arret: 1 },
          { gare: "Ars-sur-Moselle", heure: "17:51", arret: 1 },
          { gare: "Metz", heure: "18:02", arret: 4 }
        ]
      },
      {
        nom: "Metz → Nancy",
        dessertes: [
          { gare: "Metz", heure: "19:00", arret: 4 },
          { gare: "Ars-sur-Moselle", heure: "19:14", arret: 1 },
          { gare: "Ancy sur Moselle", heure: "19:17", arret: 1 },
          { gare: "Novéant-sur-Moselle", heure: "19:21", arret: 1 },
          { gare: "Pagny-sur-Moselle", heure: "19:26", arret: 1 },
          { gare: "Vandières", heure: "19:30", arret: 1 },
          { gare: "Pont-à-Mousson", heure: "19:35", arret: 1 },
          { gare: "Dieulouard", heure: "19:40", arret: 1 },
          { gare: "Belleville", heure: "19:44", arret: 1 },
          { gare: "Pompey", heure: "19:50", arret: 1 },
          { gare: "Frouard", heure: "19:53", arret: 1 },
          { gare: "Champigneulles", heure: "19:57", arret: 1 },
          { gare: "Nancy", heure: "20:02", arret: 4 }
        ]
      },
      {
        nom: "Nancy → Metz",
        dessertes: [
          { gare: "Nancy", heure: "21:00", arret: 4 },
          { gare: "Champigneulles", heure: "21:08", arret: 1 },
          { gare: "Frouard", heure: "21:12", arret: 1 },
          { gare: "Pompey", heure: "21:15", arret: 1 },
          { gare: "Belleville", heure: "21:21", arret: 1 },
          { gare: "Dieulouard", heure: "21:25", arret: 1 },
          { gare: "Pont-à-Mousson", heure: "21:30", arret: 1 },
          { gare: "Vandières", heure: "21:35", arret: 1 },
          { gare: "Pagny-sur-Moselle", heure: "21:39", arret: 1 },
          { gare: "Novéant-sur-Moselle", heure: "21:44", arret: 1 },
          { gare: "Ancy sur Moselle", heure: "21:48", arret: 1 },
          { gare: "Ars-sur-Moselle", heure: "21:51", arret: 1 },
          { gare: "Metz", heure: "22:02", arret: 4 }
        ]
      }
    ]
  },

  {
    id: "TER 2920",
    nom: "AGC Metrolor 4C",
    moteurs: ["25kV CA", "1.5kV CC"],
    vitesseMax: 160,
    capacite: { premiere: 24, seconde: 183 },
    trajets: [
      {
        nom: "Bar-le-Duc → Nancy",
        dessertes: [
          { gare: "Bar-le-Duc", heure: "07:11", arret: 3 },
          { gare: "Nançois - Tronville", heure: "07:23", arret: 1 },
          { gare: "Lérouville", heure: "07:40", arret: 1 },
          { gare: "Commercy", heure: "07:45", arret: 1 },
          { gare: "Foug", heure: "08:02", arret: 1 },
          { gare: "Toul", heure: "08:10", arret: 1 },
          { gare: "Fontenoy-Sur-Moselle", heure: "08:19", arret: 1 },
          { gare: "Frouard", heure: "08:32", arret: 1 },
          { gare: "Champigneulles", heure: "08:36", arret: 1 },
          { gare: "Nancy", heure: "08:41", arret: 3 }
        ]
      },
      {
        nom: "Nancy → Bar-le-Duc",
        dessertes: [
          { gare: "Nancy", heure: "09:11", arret: 3 },
          { gare: "Champigneulles", heure: "09:18", arret: 1 },
          { gare: "Frouard", heure: "09:22", arret: 1 },
          { gare: "Fontenoy-Sur-Moselle", heure: "09:35", arret: 1 },
          { gare: "Toul", heure: "09:44", arret: 1 },
          { gare: "Foug", heure: "09:52", arret: 1 },
          { gare: "Commercy", heure: "10:09", arret: 1 },
          { gare: "Lérouville", heure: "10:14", arret: 1 },
          { gare: "Nançois - Tronville", heure: "10:31", arret: 1 },
          { gare: "Bar-le-Duc", heure: "10:41", arret: 3 }
        ]
      },
      {
        nom: "Bar-le-Duc → Nancy",
        dessertes: [
          { gare: "Bar-le-Duc", heure: "11:11", arret: 3 },
          { gare: "Nançois - Tronville", heure: "11:23", arret: 1 },
          { gare: "Lérouville", heure: "11:40", arret: 1 },
          { gare: "Commercy", heure: "11:45", arret: 1 },
          { gare: "Foug", heure: "12:02", arret: 1 },
          { gare: "Toul", heure: "12:10", arret: 1 },
          { gare: "Fontenoy-Sur-Moselle", heure: "12:19", arret: 1 },
          { gare: "Frouard", heure: "12:32", arret: 1 },
          { gare: "Champigneulles", heure: "12:36", arret: 1 },
          { gare: "Nancy", heure: "12:41", arret: 3 }
        ]
      },
      {
        nom: "Nancy → Bar-le-Duc",
        dessertes: [
          { gare: "Nancy", heure: "13:11", arret: 3 },
          { gare: "Champigneulles", heure: "13:18", arret: 1 },
          { gare: "Frouard", heure: "13:22", arret: 1 },
          { gare: "Fontenoy-Sur-Moselle", heure: "13:35", arret: 1 },
          { gare: "Toul", heure: "13:44", arret: 1 },
          { gare: "Foug", heure: "13:52", arret: 1 },
          { gare: "Commercy", heure: "14:09", arret: 1 },
          { gare: "Lérouville", heure: "14:14", arret: 1 },
          { gare: "Nançois - Tronville", heure: "14:31", arret: 1 },
          { gare: "Bar-le-Duc", heure: "14:41", arret: 3 }
        ]
      },
      {
        nom: "Bar-le-Duc → Nancy",
        dessertes: [
          { gare: "Bar-le-Duc", heure: "15:11", arret: 3 },
          { gare: "Nançois - Tronville", heure: "15:23", arret: 1 },
          { gare: "Lérouville", heure: "15:40", arret: 1 },
          { gare: "Commercy", heure: "15:45", arret: 1 },
          { gare: "Foug", heure: "16:02", arret: 1 },
          { gare: "Toul", heure: "16:10", arret: 1 },
          { gare: "Fontenoy-Sur-Moselle", heure: "16:19", arret: 1 },
          { gare: "Frouard", heure: "16:32", arret: 1 },
          { gare: "Champigneulles", heure: "16:36", arret: 1 },
          { gare: "Nancy", heure: "16:41", arret: 3 }
        ]
      },
      {
        nom: "Nancy → Bar-le-Duc",
        dessertes: [
          { gare: "Nancy", heure: "17:11", arret: 3 },
          { gare: "Champigneulles", heure: "17:18", arret: 1 },
          { gare: "Frouard", heure: "17:22", arret: 1 },
          { gare: "Fontenoy-Sur-Moselle", heure: "17:35", arret: 1 },
          { gare: "Toul", heure: "17:44", arret: 1 },
          { gare: "Foug", heure: "17:52", arret: 1 },
          { gare: "Commercy", heure: "18:09", arret: 1 },
          { gare: "Lérouville", heure: "18:14", arret: 1 },
          { gare: "Nançois - Tronville", heure: "18:31", arret: 1 },
          { gare: "Bar-le-Duc", heure: "18:41", arret: 3 }
        ]
      }
    ]
  },

  {
    id: "TER 2921",
    nom: "AGC blueMetrolorLorraine 3C",
    moteurs: ["diesel"],
    vitesseMax: 160,
    capacite: { premiere: 24, seconde: 134 },
    trajets: [
      {
        nom: "Metz → Verdun",
        dessertes: [
          { gare: "Metz", heure: "08:30", arret: 4 },
          { gare: "Ars-sur-Moselle", heure: "08:45", arret: 1 },
          { gare: "Onville", heure: "08:58", arret: 1 },
          { gare: "Conflans - Jarny", heure: "09:21", arret: 2 },
          { gare: "Étain", heure: "09:52", arret: 1 },
          { gare: "Verdun", heure: "10:26", arret: 2 }
        ]
      },
      {
        nom: "Verdun → Metz",
        dessertes: [
          { gare: "Verdun", heure: "11:26", arret: 2 },
          { gare: "Étain", heure: "12:01", arret: 1 },
          { gare: "Conflans - Jarny", heure: "12:31", arret: 2 },
          { gare: "Onville", heure: "12:55", arret: 1 },
          { gare: "Ars-sur-Moselle", heure: "13:08", arret: 1 },
          { gare: "Metz", heure: "13:20", arret: 4 }
        ]
      },
      {
        nom: "Metz → Verdun",
        dessertes: [
          { gare: "Metz", heure: "13:40", arret: 4 },
          { gare: "Ars-sur-Moselle", heure: "13:55", arret: 1 },
          { gare: "Onville", heure: "14:08", arret: 1 },
          { gare: "Conflans - Jarny", heure: "14:31", arret: 2 },
          { gare: "Étain", heure: "15:02", arret: 1 },
          { gare: "Verdun", heure: "15:36", arret: 2 }
        ]
      },
      {
        nom: "Verdun → Metz",
        dessertes: [
          { gare: "Verdun", heure: "17:30", arret: 2 },
          { gare: "Étain", heure: "18:05", arret: 1 },
          { gare: "Conflans - Jarny", heure: "18:35", arret: 2 },
          { gare: "Onville", heure: "18:59", arret: 1 },
          { gare: "Ars-sur-Moselle", heure: "19:12", arret: 1 },
          { gare: "Metz", heure: "19:24", arret: 4 }
        ]
      }
    ]
  },

  {
    id: "TER 2923",
    nom: "AGC Metrolor 4C",
    moteurs: ["25kV CA", "1.5kV CC"],
    vitesseMax: 160,
    capacite: { premiere: 24, seconde: 183 },
    trajets: [
      {
        nom: "Nancy → Bar-le-Duc",
        dessertes: [
          { gare: "Nancy", heure: "08:04", arret: 4 },
          { gare: "Champigneulles", heure: "08:12", arret: 1 },
          { gare: "Frouard", heure: "08:16", arret: 1 },
          { gare: "Fontenoy-Sur-Moselle", heure: "08:29", arret: 1 },
          { gare: "Toul", heure: "08:38", arret: 1 },
          { gare: "Foug", heure: "08:46", arret: 1 },
          { gare: "Commercy", heure: "09:03", arret: 1 },
          { gare: "Lérouville", heure: "09:08", arret: 1 },
          { gare: "Nançois - Tronville", heure: "09:25", arret: 1 },
          { gare: "Bar-le-Duc", heure: "09:35", arret: 4 }
        ]
      },
      {
        nom: "Bar-le-Duc → Nancy",
        dessertes: [
          { gare: "Bar-le-Duc", heure: "10:05", arret: 4 },
          { gare: "Nançois - Tronville", heure: "10:18", arret: 1 },
          { gare: "Lérouville", heure: "10:35", arret: 1 },
          { gare: "Commercy", heure: "10:40", arret: 1 },
          { gare: "Foug", heure: "10:57", arret: 1 },
          { gare: "Toul", heure: "11:05", arret: 1 },
          { gare: "Fontenoy-Sur-Moselle", heure: "11:14", arret: 1 },
          { gare: "Frouard", heure: "11:27", arret: 1 },
          { gare: "Champigneulles", heure: "11:31", arret: 1 },
          { gare: "Nancy", heure: "11:36", arret: 4 }
        ]
      },
      {
        nom: "Nancy → Bar-le-Duc",
        dessertes: [
          { gare: "Nancy", heure: "12:06", arret: 4 },
          { gare: "Champigneulles", heure: "12:14", arret: 1 },
          { gare: "Frouard", heure: "12:18", arret: 1 },
          { gare: "Fontenoy-Sur-Moselle", heure: "12:31", arret: 1 },
          { gare: "Toul", heure: "12:40", arret: 1 },
          { gare: "Foug", heure: "12:48", arret: 1 },
          { gare: "Commercy", heure: "13:05", arret: 1 },
          { gare: "Lérouville", heure: "13:10", arret: 1 },
          { gare: "Nançois - Tronville", heure: "13:27", arret: 1 },
          { gare: "Bar-le-Duc", heure: "13:37", arret: 4 }
        ]
      },
      {
        nom: "Bar-le-Duc → Nancy",
        dessertes: [
          { gare: "Bar-le-Duc", heure: "16:15", arret: 4 },
          { gare: "Nançois - Tronville", heure: "16:28", arret: 1 },
          { gare: "Lérouville", heure: "16:45", arret: 1 },
          { gare: "Commercy", heure: "16:50", arret: 1 },
          { gare: "Foug", heure: "17:07", arret: 1 },
          { gare: "Toul", heure: "17:15", arret: 2 },
          { gare: "Fontenoy-Sur-Moselle", heure: "17:25", arret: 1 },
          { gare: "Frouard", heure: "17:38", arret: 1 },
          { gare: "Nancy", heure: "17:45", arret: 4 }
        ]
      }
    ]
  },

  {
    id: "TER 2926",
    nom: "Z11500 Metrolor",
    moteurs: ["25kV CA", "1.5kV CC"],
    vitesseMax: 160,
    capacite: { premiere: 5, seconde: 126 },
    trajets: [
      {
        nom: "Neufchâteau → Nancy",
        dessertes: [
          { gare: "Neufchâteau", heure: "07:10", arret: 2 },
          { gare: "Soulosse", heure: "07:15", arret: 1 },
          { gare: "Toul", heure: "07:43", arret: 1 },
          { gare: "Fontenoy-Sur-Moselle", heure: "07:52", arret: 1 },
          { gare: "Frouard", heure: "08:05", arret: 1 },
          { gare: "Champigneulles", heure: "08:09", arret: 1 },
          { gare: "Nancy", heure: "08:14", arret: 4 }
        ]
      },
      {
        nom: "Nancy → Neufchâteau",
        dessertes: [
          { gare: "Nancy", heure: "08:44", arret: 4 },
          { gare: "Champigneulles", heure: "08:52", arret: 1 },
          { gare: "Frouard", heure: "08:56", arret: 1 },
          { gare: "Fontenoy-Sur-Moselle", heure: "09:09", arret: 1 },
          { gare: "Toul", heure: "09:18", arret: 3 }
        ]
      },
      {
        nom: "Toul → Nancy",
        dessertes: [
          { gare: "Toul", heure: "09:48", arret: 3 },
          { gare: "Fontenoy-Sur-Moselle", heure: "09:59", arret: 1 },
          { gare: "Frouard", heure: "10:12", arret: 1 },
          { gare: "Champigneulles", heure: "10:16", arret: 1 },
          { gare: "Nancy", heure: "10:21", arret: 4 }
        ]
      },
      {
        nom: "Nancy → Neufchâteau",
        dessertes: [
          { gare: "Nancy", heure: "11:26", arret: 4 },
          { gare: "Champigneulles", heure: "11:34", arret: 1 },
          { gare: "Frouard", heure: "11:38", arret: 1 },
          { gare: "Fontenoy-Sur-Moselle", heure: "11:51", arret: 1 },
          { gare: "Toul", heure: "12:00", arret: 3 },
          { gare: "Soulosse", heure: "12:30", arret: 1 },
          { gare: "Neufchâteau", heure: "12:34", arret: 3 }
        ]
      },
      {
        nom: "Neufchâteau → Nancy",
        dessertes: [
          { gare: "Neufchâteau", heure: "12:50", arret: 3 },
          { gare: "Soulosse", heure: "12:56", arret: 1 },
          { gare: "Toul", heure: "13:24", arret: 3 },
          { gare: "Fontenoy-Sur-Moselle", heure: "13:35", arret: 1 },
          { gare: "Frouard", heure: "13:48", arret: 1 },
          { gare: "Champigneulles", heure: "13:52", arret: 1 },
          { gare: "Nancy", heure: "13:57", arret: 4 }
        ]
      },
      {
        nom: "Nancy → Commercy",
        dessertes: [
          { gare: "Nancy", heure: "14:50", arret: 4 },
          { gare: "Champigneulles", heure: "14:58", arret: 1 },
          { gare: "Frouard", heure: "15:02", arret: 1 },
          { gare: "Fontenoy-Sur-Moselle", heure: "15:15", arret: 1 },
          { gare: "Toul", heure: "15:24", arret: 3 },
          { gare: "Commercy", heure: "15:49", arret: 3 }
        ]
      },
      {
        nom: "Commercy → Nancy",
        dessertes: [
          { gare: "Commercy", heure: "16:00", arret: 3 },
          { gare: "Toul", heure: "16:25", arret: 3 },
          { gare: "Fontenoy-Sur-Moselle", heure: "16:36", arret: 1 },
          { gare: "Frouard", heure: "16:49", arret: 1 },
          { gare: "Champigneulles", heure: "16:53", arret: 1 },
          { gare: "Nancy", heure: "16:58", arret: 4 }
        ]
      },
      {
        nom: "Nancy → Neufchâteau",
        dessertes: [
          { gare: "Nancy", heure: "17:05", arret: 4 },
          { gare: "Frouard", heure: "17:15", arret: 1 },
          { gare: "Fontenoy-Sur-Moselle", heure: "17:28", arret: 1 },
          { gare: "Neufchâteau", heure: "18:06", arret: 3 }
        ]
      }
    ]
  },

  {
    id: "TER 2927",
    nom: "AGC Champagne-Ardenne 4C",
    moteurs: ["25kV CA", "1.5kV CC", "diesel"],
    vitesseMax: 160,
    capacite: { premiere: 24, seconde: 183 },
    trajets: [
      {
        nom: "Nancy → Vittel",
        dessertes: [
          { gare: "Nancy", heure: "17:30", arret: 3, jours: ["VE"] },
          { gare: "Fontenoy-Sur-Moselle", heure: "17:51", arret: 1, jours: ["VE"] },
          { gare: "Toul", heure: "18:00", arret: 1, jours: ["VE"] },
          { gare: "Soulosse", heure: "18:28", arret: 1, jours: ["VE"] },
          { gare: "Neufchâteau", heure: "18:32", arret: 1, jours: ["VE"] },
          { gare: "Contrexéville", heure: "19:56", arret: 1, jours: ["VE"] },
          { gare: "Vittel", heure: "20:04", arret: 3, jours: ["VE"] }
        ]
      },
      {
        nom: "Vittel → Nancy",
        dessertes: [
          { gare: "Vittel", heure: "17:50", arret: 3, jours: ["DI"] },
          { gare: "Contrexéville", heure: "18:00", arret: 1, jours: ["DI"] },
          { gare: "Neufchâteau", heure: "19:24", arret: 1, jours: ["DI"] },
          { gare: "Soulosse", heure: "19:28", arret: 1, jours: ["DI"] },
          { gare: "Toul", heure: "19:56", arret: 1, jours: ["DI"] },
          { gare: "Fontenoy-Sur-Moselle", heure: "20:05", arret: 1, jours: ["DI"] },
          { gare: "Nancy", heure: "20:24", arret: 3, jours: ["DI"] }
        ]
      },
      {
        nom: "Nancy → Lunéville",
        dessertes: [
          { gare: "Nancy", heure: "07:45", arret: 2, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Laneuveville-devant-Nancy", heure: "07:52", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Rosieres-Aux-Salines", heure: "08:02", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Blainville - Damelevières", heure: "08:07", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Lunéville", heure: "08:15", arret: 2, jours: ["LU", "MA", "ME", "JE", "VE"] }
        ]
      },
      {
        nom: "Lunéville → Nancy",
        dessertes: [
          { gare: "Lunéville", heure: "08:30", arret: 2, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Blainville - Damelevières", heure: "08:39", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Rosieres-Aux-Salines", heure: "08:44", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Laneuveville-devant-Nancy", heure: "08:54", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Nancy", heure: "09:00", arret: 2, jours: ["LU", "MA", "ME", "JE", "VE"] }
        ]
      },
      {
        nom: "Nancy → Lunéville",
        dessertes: [
          { gare: "Nancy", heure: "09:30", arret: 2, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Laneuveville-devant-Nancy", heure: "09:37", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Rosieres-Aux-Salines", heure: "09:47", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Blainville - Damelevières", heure: "09:52", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Lunéville", heure: "10:00", arret: 2, jours: ["LU", "MA", "ME", "JE", "VE"] }
        ]
      },
      {
        nom: "Lunéville → Nancy",
        dessertes: [
          { gare: "Lunéville", heure: "12:50", arret: 2, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Blainville - Damelevières", heure: "12:59", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Rosieres-Aux-Salines", heure: "13:04", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Laneuveville-devant-Nancy", heure: "13:14", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Nancy", heure: "13:20", arret: 2, jours: ["LU", "MA", "ME", "JE", "VE"] }
        ]
      },
      {
        nom: "Nancy → Lunéville",
        dessertes: [
          { gare: "Nancy", heure: "14:30", arret: 2, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Laneuveville-devant-Nancy", heure: "14:37", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Rosieres-Aux-Salines", heure: "14:47", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Blainville - Damelevières", heure: "14:52", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Lunéville", heure: "15:00", arret: 2, jours: ["LU", "MA", "ME", "JE", "VE"] }
        ]
      },
      {
        nom: "Lunéville → Nancy",
        dessertes: [
          { gare: "Lunéville", heure: "16:45", arret: 2, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Blainville - Damelevières", heure: "16:54", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Rosieres-Aux-Salines", heure: "16:59", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Laneuveville-devant-Nancy", heure: "17:09", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Nancy", heure: "17:15", arret: 2, jours: ["LU", "MA", "ME", "JE", "VE"] }
        ]
      }
    ]
  },

  {
    id: "TER 2938",
    nom: "AGC Metrolor 4C",
    moteurs: ["25kV CA", "1.5kV CC"],
    vitesseMax: 160,
    capacite: { premiere: 24, seconde: 183 },
    trajets: [
      {
        nom: "Thionville → Perl",
        dessertes: [
          { gare: "Thionville", heure: "06:50", arret: 2 },
          { gare: "Koenigsmacker", heure: "07:05", arret: 1 },
          { gare: "Malling", heure: "07:11", arret: 1 },
          { gare: "Sierck-les-Bains", heure: "07:18", arret: 1 },
          { gare: "Apach", heure: "07:22", arret: 1 },
          { gare: "Perl", heure: "07:25", arret: 2 }
        ]
      },
      {
        nom: "Perl → Thionville",
        dessertes: [
          { gare: "Perl", heure: "07:55", arret: 2 },
          { gare: "Apach", heure: "07:59", arret: 1 },
          { gare: "Sierck-les-Bains", heure: "08:03", arret: 1 },
          { gare: "Malling", heure: "08:10", arret: 1 },
          { gare: "Koenigsmacker", heure: "08:16", arret: 1 },
          { gare: "Thionville", heure: "08:30", arret: 2 }
        ]
      },
      {
        nom: "Thionville → Perl",
        dessertes: [
          { gare: "Thionville", heure: "08:50", arret: 2 },
          { gare: "Koenigsmacker", heure: "09:05", arret: 1 },
          { gare: "Malling", heure: "09:11", arret: 1 },
          { gare: "Sierck-les-Bains", heure: "09:18", arret: 1 },
          { gare: "Apach", heure: "09:22", arret: 1 },
          { gare: "Perl", heure: "09:25", arret: 2 }
        ]
      },
      {
        nom: "Perl → Thionville",
        dessertes: [
          { gare: "Perl", heure: "09:55", arret: 2 },
          { gare: "Apach", heure: "09:59", arret: 1 },
          { gare: "Sierck-les-Bains", heure: "10:03", arret: 1 },
          { gare: "Malling", heure: "10:10", arret: 1 },
          { gare: "Koenigsmacker", heure: "10:16", arret: 1 },
          { gare: "Thionville", heure: "10:30", arret: 2 }
        ]
      },
      {
        nom: "Thionville → Perl",
        dessertes: [
          { gare: "Thionville", heure: "10:50", arret: 2 },
          { gare: "Koenigsmacker", heure: "11:05", arret: 1 },
          { gare: "Malling", heure: "11:11", arret: 1 },
          { gare: "Sierck-les-Bains", heure: "11:18", arret: 1 },
          { gare: "Apach", heure: "11:22", arret: 1 },
          { gare: "Perl", heure: "11:25", arret: 2 }
        ]
      },
      {
        nom: "Perl → Thionville",
        dessertes: [
          { gare: "Perl", heure: "11:55", arret: 2 },
          { gare: "Apach", heure: "11:59", arret: 1 },
          { gare: "Sierck-les-Bains", heure: "12:03", arret: 1 },
          { gare: "Malling", heure: "12:10", arret: 1 },
          { gare: "Koenigsmacker", heure: "12:16", arret: 1 },
          { gare: "Thionville", heure: "12:30", arret: 2 }
        ]
      },
      {
        nom: "Thionville → Perl",
        dessertes: [
          { gare: "Thionville", heure: "12:50", arret: 2 },
          { gare: "Koenigsmacker", heure: "13:05", arret: 1 },
          { gare: "Malling", heure: "13:11", arret: 1 },
          { gare: "Sierck-les-Bains", heure: "13:18", arret: 1 },
          { gare: "Apach", heure: "13:22", arret: 1 },
          { gare: "Perl", heure: "13:25", arret: 2 }
        ]
      },
      {
        nom: "Perl → Thionville",
        dessertes: [
          { gare: "Perl", heure: "13:55", arret: 2 },
          { gare: "Apach", heure: "13:59", arret: 1 },
          { gare: "Sierck-les-Bains", heure: "14:03", arret: 1 },
          { gare: "Malling", heure: "14:10", arret: 1 },
          { gare: "Koenigsmacker", heure: "14:16", arret: 1 },
          { gare: "Thionville", heure: "14:30", arret: 2 }
        ]
      },
      {
        nom: "Thionville → Perl",
        dessertes: [
          { gare: "Thionville", heure: "14:50", arret: 2 },
          { gare: "Koenigsmacker", heure: "15:05", arret: 1 },
          { gare: "Malling", heure: "15:11", arret: 1 },
          { gare: "Sierck-les-Bains", heure: "15:18", arret: 1 },
          { gare: "Apach", heure: "15:22", arret: 1 },
          { gare: "Perl", heure: "15:25", arret: 2 }
        ]
      },
      {
        nom: "Perl → Thionville",
        dessertes: [
          { gare: "Perl", heure: "15:55", arret: 2 },
          { gare: "Apach", heure: "15:59", arret: 1 },
          { gare: "Sierck-les-Bains", heure: "16:03", arret: 1 },
          { gare: "Malling", heure: "16:10", arret: 1 },
          { gare: "Koenigsmacker", heure: "16:16", arret: 1 },
          { gare: "Thionville", heure: "16:30", arret: 2 }
        ]
      },
      {
        nom: "Thionville → Perl",
        dessertes: [
          { gare: "Thionville", heure: "16:50", arret: 2 },
          { gare: "Koenigsmacker", heure: "17:05", arret: 1 },
          { gare: "Malling", heure: "17:11", arret: 1 },
          { gare: "Sierck-les-Bains", heure: "17:18", arret: 1 },
          { gare: "Apach", heure: "17:22", arret: 1 },
          { gare: "Perl", heure: "17:25", arret: 2 }
        ]
      },
      {
        nom: "Perl → Thionville",
        dessertes: [
          { gare: "Perl", heure: "17:55", arret: 2 },
          { gare: "Apach", heure: "17:59", arret: 1 },
          { gare: "Sierck-les-Bains", heure: "18:03", arret: 1 },
          { gare: "Malling", heure: "18:10", arret: 1 },
          { gare: "Koenigsmacker", heure: "18:16", arret: 1 },
          { gare: "Thionville", heure: "18:30", arret: 2 }
        ]
      },
      {
        nom: "Thionville → Perl",
        dessertes: [
          { gare: "Thionville", heure: "18:50", arret: 2 },
          { gare: "Koenigsmacker", heure: "19:05", arret: 1 },
          { gare: "Malling", heure: "19:11", arret: 1 },
          { gare: "Sierck-les-Bains", heure: "19:18", arret: 1 },
          { gare: "Apach", heure: "19:22", arret: 1 },
          { gare: "Perl", heure: "19:25", arret: 2 }
        ]
      },
      {
        nom: "Perl → Thionville",
        dessertes: [
          { gare: "Perl", heure: "19:55", arret: 2 },
          { gare: "Apach", heure: "19:59", arret: 1 },
          { gare: "Sierck-les-Bains", heure: "20:03", arret: 1 },
          { gare: "Malling", heure: "20:10", arret: 1 },
          { gare: "Koenigsmacker", heure: "20:16", arret: 1 },
          { gare: "Thionville", heure: "20:30", arret: 2 }
        ]
      }
    ]
  },

  {
    id: "TER 2940",
    nom: "Regiolis Metrolor 4C",
    moteurs: ["25kV CA", "1.5kV CC", "diesel"],
    vitesseMax: 160,
    capacite: { premiere: 24, seconde: 210 },
    trajets: [
      {
        nom: "Saarbrücken Hauptbahnhof → Metz",
        dessertes: [
          { gare: "Saarbrücken Hauptbahnhof", heure: "06:32", arret: 3 },
          { gare: "Forbach", heure: "06:47", arret: 1 },
          { gare: "Béning-lès-Saint-Avold", heure: "06:56", arret: 1 },
          { gare: "Hombourg-Haut", heure: "07:02", arret: 1 },
          { gare: "Saint-Avold", heure: "07:09", arret: 1 },
          { gare: "Teting-sur-Nied", heure: "07:15", arret: 1 },
          { gare: "Faulquemont", heure: "07:21", arret: 1 },
          { gare: "Herny", heure: "07:31", arret: 1 },
          { gare: "Remilly", heure: "07:39", arret: 2 },
          { gare: "Courcelles-sur-Nied", heure: "07:48", arret: 1 },
          { gare: "Peltre", heure: "07:55", arret: 1 },
          { gare: "Metz", heure: "08:03", arret: 3 }
        ]
      },
      {
        nom: "Metz → Saarbrücken Hauptbahnhof",
        dessertes: [
          { gare: "Metz", heure: "08:35", arret: 3 },
          { gare: "Peltre", heure: "08:45", arret: 1 },
          { gare: "Courcelles-sur-Nied", heure: "08:52", arret: 1 },
          { gare: "Remilly", heure: "09:00", arret: 2 },
          { gare: "Herny", heure: "09:09", arret: 1 },
          { gare: "Faulquemont", heure: "09:19", arret: 1 },
          { gare: "Teting-sur-Nied", heure: "09:25", arret: 1 },
          { gare: "Saint-Avold", heure: "09:31", arret: 1 },
          { gare: "Hombourg-Haut", heure: "09:38", arret: 1 },
          { gare: "Béning-lès-Saint-Avold", heure: "09:44", arret: 1 },
          { gare: "Forbach", heure: "09:53", arret: 1 },
          { gare: "Saarbrücken Hauptbahnhof", heure: "10:06", arret: 3 }
        ]
      },
      {
        nom: "Saarbrücken Hauptbahnhof → Metz",
        dessertes: [
          { gare: "Saarbrücken Hauptbahnhof", heure: "11:30", arret: 3 },
          { gare: "Forbach", heure: "11:45", arret: 1 },
          { gare: "Béning-lès-Saint-Avold", heure: "11:54", arret: 1 },
          { gare: "Hombourg-Haut", heure: "12:00", arret: 1 },
          { gare: "Saint-Avold", heure: "12:07", arret: 1 },
          { gare: "Teting-sur-Nied", heure: "12:13", arret: 1 },
          { gare: "Faulquemont", heure: "12:19", arret: 1 },
          { gare: "Herny", heure: "12:29", arret: 1 },
          { gare: "Remilly", heure: "12:37", arret: 2 },
          { gare: "Courcelles-sur-Nied", heure: "12:46", arret: 1 },
          { gare: "Peltre", heure: "12:53", arret: 1 },
          { gare: "Metz", heure: "13:01", arret: 3 }
        ]
      },
      {
        nom: "Metz → Saarbrücken Hauptbahnhof",
        dessertes: [
          { gare: "Metz", heure: "13:30", arret: 3 },
          { gare: "Peltre", heure: "13:40", arret: 1 },
          { gare: "Courcelles-sur-Nied", heure: "13:47", arret: 1 },
          { gare: "Remilly", heure: "13:55", arret: 2 },
          { gare: "Herny", heure: "14:04", arret: 1 },
          { gare: "Faulquemont", heure: "14:14", arret: 1 },
          { gare: "Teting-sur-Nied", heure: "14:20", arret: 1 },
          { gare: "Saint-Avold", heure: "14:26", arret: 1 },
          { gare: "Hombourg-Haut", heure: "14:33", arret: 1 },
          { gare: "Béning-lès-Saint-Avold", heure: "14:39", arret: 1 },
          { gare: "Forbach", heure: "14:48", arret: 1 },
          { gare: "Saarbrücken Hauptbahnhof", heure: "15:01", arret: 3 }
        ]
      },
      {
        nom: "Saarbrücken Hauptbahnhof → Metz",
        dessertes: [
          { gare: "Saarbrücken Hauptbahnhof", heure: "15:30", arret: 3 },
          { gare: "Forbach", heure: "15:45", arret: 1 },
          { gare: "Béning-lès-Saint-Avold", heure: "15:54", arret: 1 },
          { gare: "Hombourg-Haut", heure: "16:00", arret: 1 },
          { gare: "Saint-Avold", heure: "16:07", arret: 1 },
          { gare: "Teting-sur-Nied", heure: "16:13", arret: 1 },
          { gare: "Faulquemont", heure: "16:19", arret: 1 },
          { gare: "Herny", heure: "16:29", arret: 1 },
          { gare: "Remilly", heure: "16:37", arret: 2 },
          { gare: "Courcelles-sur-Nied", heure: "16:46", arret: 1 },
          { gare: "Peltre", heure: "16:53", arret: 1 },
          { gare: "Metz", heure: "17:01", arret: 3 }
        ]
      },
      {
        nom: "Metz → Saarbrücken Hauptbahnhof",
        dessertes: [
          { gare: "Metz", heure: "17:30", arret: 3 },
          { gare: "Peltre", heure: "17:40", arret: 1 },
          { gare: "Courcelles-sur-Nied", heure: "17:47", arret: 1 },
          { gare: "Remilly", heure: "17:55", arret: 2 },
          { gare: "Herny", heure: "18:04", arret: 1 },
          { gare: "Faulquemont", heure: "18:14", arret: 1 },
          { gare: "Teting-sur-Nied", heure: "18:20", arret: 1 },
          { gare: "Saint-Avold", heure: "18:26", arret: 1 },
          { gare: "Hombourg-Haut", heure: "18:33", arret: 1 },
          { gare: "Béning-lès-Saint-Avold", heure: "18:39", arret: 1 },
          { gare: "Forbach", heure: "18:48", arret: 1 },
          { gare: "Saarbrücken Hauptbahnhof", heure: "19:01", arret: 3 }
        ]
      }
    ]
  },

  {
    id: "TER 2941",
    nom: "X73900 Grand Est",
    moteurs: ["diesel"],
    vitesseMax: 140,
    capacite: { premiere: 0, seconde: 183 },
    composition: ["X73900 Grand Est", "X73900 Grand Est"],
    trajets: [
      {
        nom: "Sarreguemines → Metz",
        dessertes: [
          { gare: "Sarreguemines", heure: "07:20", arret: 2 },
          { gare: "Hundling", heure: "07:32", arret: 1 },
          { gare: "Farschviller", heure: "07:42", arret: 1 },
          { gare: "Béning-lès-Saint-Avold", heure: "07:54", arret: 2 },
          { gare: "Hombourg-Haut", heure: "08:01", arret: 1 },
          { gare: "Saint-Avold", heure: "08:08", arret: 1 },
          { gare: "Teting-sur-Nied", heure: "08:15", arret: 1 },
          { gare: "Faulquemont", heure: "08:22", arret: 1 },
          { gare: "Herny", heure: "08:34", arret: 1 },
          { gare: "Remilly", heure: "08:43", arret: 1 },
          { gare: "Courcelles-sur-Nied", heure: "08:52", arret: 1 },
          { gare: "Peltre", heure: "09:01", arret: 1 },
          { gare: "Metz", heure: "09:10", arret: 2 }
        ]
      },
      {
        nom: "Metz → Sarreguemines",
        dessertes: [
          { gare: "Metz", heure: "09:40", arret: 2 },
          { gare: "Peltre", heure: "09:50", arret: 1 },
          { gare: "Courcelles-sur-Nied", heure: "09:59", arret: 1 },
          { gare: "Remilly", heure: "10:08", arret: 1 },
          { gare: "Herny", heure: "10:17", arret: 1 },
          { gare: "Faulquemont", heure: "10:29", arret: 1 },
          { gare: "Teting-sur-Nied", heure: "10:36", arret: 1 },
          { gare: "Saint-Avold", heure: "10:43", arret: 1 },
          { gare: "Hombourg-Haut", heure: "10:50", arret: 1 },
          { gare: "Béning-lès-Saint-Avold", heure: "10:56", arret: 2 },
          { gare: "Farschviller", heure: "11:09", arret: 1 },
          { gare: "Hundling", heure: "11:19", arret: 1 },
          { gare: "Sarreguemines", heure: "11:30", arret: 2 }
        ]
      },
      {
        nom: "Sarreguemines → Metz",
        dessertes: [
          { gare: "Sarreguemines", heure: "12:20", arret: 2 },
          { gare: "Hundling", heure: "12:32", arret: 1 },
          { gare: "Farschviller", heure: "12:42", arret: 1 },
          { gare: "Béning-lès-Saint-Avold", heure: "12:54", arret: 2 },
          { gare: "Hombourg-Haut", heure: "13:01", arret: 1 },
          { gare: "Saint-Avold", heure: "13:08", arret: 1 },
          { gare: "Teting-sur-Nied", heure: "13:15", arret: 1 },
          { gare: "Faulquemont", heure: "13:22", arret: 1 },
          { gare: "Herny", heure: "13:34", arret: 1 },
          { gare: "Remilly", heure: "13:43", arret: 1 },
          { gare: "Courcelles-sur-Nied", heure: "13:52", arret: 1 },
          { gare: "Peltre", heure: "14:01", arret: 1 },
          { gare: "Metz", heure: "14:10", arret: 2 }
        ]
      },
      {
        nom: "Metz → Sarreguemines",
        dessertes: [
          { gare: "Metz", heure: "14:40", arret: 2 },
          { gare: "Peltre", heure: "14:50", arret: 1 },
          { gare: "Courcelles-sur-Nied", heure: "14:59", arret: 1 },
          { gare: "Remilly", heure: "15:08", arret: 1 },
          { gare: "Herny", heure: "15:17", arret: 1 },
          { gare: "Faulquemont", heure: "15:29", arret: 1 },
          { gare: "Teting-sur-Nied", heure: "15:36", arret: 1 },
          { gare: "Saint-Avold", heure: "15:43", arret: 1 },
          { gare: "Hombourg-Haut", heure: "15:50", arret: 1 },
          { gare: "Béning-lès-Saint-Avold", heure: "15:56", arret: 2 },
          { gare: "Farschviller", heure: "16:09", arret: 1 },
          { gare: "Hundling", heure: "16:19", arret: 1 },
          { gare: "Sarreguemines", heure: "16:30", arret: 2 }
        ]
      },
      {
        nom: "Sarreguemines → Metz",
        dessertes: [
          { gare: "Sarreguemines", heure: "17:20", arret: 2 },
          { gare: "Hundling", heure: "17:32", arret: 1 },
          { gare: "Farschviller", heure: "17:42", arret: 1 },
          { gare: "Béning-lès-Saint-Avold", heure: "17:54", arret: 2 },
          { gare: "Hombourg-Haut", heure: "18:01", arret: 1 },
          { gare: "Saint-Avold", heure: "18:08", arret: 1 },
          { gare: "Teting-sur-Nied", heure: "18:15", arret: 1 },
          { gare: "Faulquemont", heure: "18:22", arret: 1 },
          { gare: "Herny", heure: "18:34", arret: 1 },
          { gare: "Remilly", heure: "18:43", arret: 1 },
          { gare: "Courcelles-sur-Nied", heure: "18:52", arret: 1 },
          { gare: "Peltre", heure: "19:01", arret: 1 },
          { gare: "Metz", heure: "19:10", arret: 2 }
        ]
      },
      {
        nom: "Metz → Sarreguemines",
        dessertes: [
          { gare: "Metz", heure: "19:40", arret: 2 },
          { gare: "Peltre", heure: "19:50", arret: 1 },
          { gare: "Courcelles-sur-Nied", heure: "19:59", arret: 1 },
          { gare: "Remilly", heure: "20:08", arret: 1 },
          { gare: "Herny", heure: "20:17", arret: 1 },
          { gare: "Faulquemont", heure: "20:29", arret: 1 },
          { gare: "Teting-sur-Nied", heure: "20:36", arret: 1 },
          { gare: "Saint-Avold", heure: "20:43", arret: 1 },
          { gare: "Hombourg-Haut", heure: "20:50", arret: 1 },
          { gare: "Béning-lès-Saint-Avold", heure: "20:56", arret: 2 },
          { gare: "Farschviller", heure: "21:09", arret: 1 },
          { gare: "Hundling", heure: "21:19", arret: 1 },
          { gare: "Sarreguemines", heure: "21:30", arret: 2 }
        ]
      }
    ]
  },

  {
    id: "TER 2968",
    nom: "AGC Metrolor 4C",
    moteurs: ["25kV CA", "1.5kV CC"],
    vitesseMax: 160,
    capacite: { premiere: 24, seconde: 183 },
    trajets: [
      {
        nom: "Longuyon → Metz",
        dessertes: [
          { gare: "Longuyon", heure: "07:30", arret: 2 },
          { gare: "Baroncourt", heure: "07:49", arret: 1 },
          { gare: "Conflans - Jarny", heure: "08:06", arret: 1 },
          { gare: "Hatrize", heure: "08:13", arret: 1 },
          { gare: "Auboué", heure: "08:22", arret: 1 },
          { gare: "Moyeuvre-Grande", heure: "08:32", arret: 1 },
          { gare: "Rombas-Clouange", heure: "08:40", arret: 1 },
          { gare: "Gandrange - Amnéville", heure: "08:46", arret: 1 },
          { gare: "Hagondange", heure: "08:51", arret: 1 },
          { gare: "Walygator parc", heure: "08:54", arret: 1 },
          { gare: "Metz", heure: "09:06", arret: 2 }
        ]
      },
      {
        nom: "Metz → Longuyon",
        dessertes: [
          { gare: "Metz", heure: "09:20", arret: 2 },
          { gare: "Walygator parc", heure: "09:33", arret: 1 },
          { gare: "Hagondange", heure: "09:36", arret: 1 },
          { gare: "Gandrange - Amnéville", heure: "09:41", arret: 1 },
          { gare: "Rombas-Clouange", heure: "09:47", arret: 1 },
          { gare: "Moyeuvre-Grande", heure: "09:55", arret: 1 },
          { gare: "Auboué", heure: "10:05", arret: 1 },
          { gare: "Hatrize", heure: "10:14", arret: 1 },
          { gare: "Conflans - Jarny", heure: "10:21", arret: 1 },
          { gare: "Baroncourt", heure: "10:38", arret: 1 },
          { gare: "Longuyon", heure: "10:56", arret: 2 }
        ]
      },
      {
        nom: "Longuyon → Metz",
        dessertes: [
          { gare: "Longuyon", heure: "12:05", arret: 2 },
          { gare: "Baroncourt", heure: "12:24", arret: 1 },
          { gare: "Conflans - Jarny", heure: "12:41", arret: 1 },
          { gare: "Hatrize", heure: "12:48", arret: 1 },
          { gare: "Auboué", heure: "12:57", arret: 1 },
          { gare: "Moyeuvre-Grande", heure: "13:07", arret: 1 },
          { gare: "Rombas-Clouange", heure: "13:15", arret: 1 },
          { gare: "Gandrange - Amnéville", heure: "13:21", arret: 1 },
          { gare: "Hagondange", heure: "13:26", arret: 1 },
          { gare: "Walygator parc", heure: "13:29", arret: 1 },
          { gare: "Metz", heure: "13:41", arret: 2 }
        ]
      },
      {
        nom: "Metz → Longuyon",
        dessertes: [
          { gare: "Metz", heure: "13:55", arret: 2 },
          { gare: "Walygator parc", heure: "14:08", arret: 1 },
          { gare: "Hagondange", heure: "14:11", arret: 1 },
          { gare: "Gandrange - Amnéville", heure: "14:16", arret: 1 },
          { gare: "Rombas-Clouange", heure: "14:22", arret: 1 },
          { gare: "Moyeuvre-Grande", heure: "14:30", arret: 1 },
          { gare: "Auboué", heure: "14:40", arret: 1 },
          { gare: "Hatrize", heure: "14:49", arret: 1 },
          { gare: "Conflans - Jarny", heure: "14:56", arret: 1 },
          { gare: "Baroncourt", heure: "15:13", arret: 1 },
          { gare: "Longuyon", heure: "15:31", arret: 2 }
        ]
      },
      {
        nom: "Longuyon → Metz",
        dessertes: [
          { gare: "Longuyon", heure: "16:30", arret: 2 },
          { gare: "Baroncourt", heure: "16:49", arret: 1 },
          { gare: "Conflans - Jarny", heure: "17:06", arret: 1 },
          { gare: "Hatrize", heure: "17:13", arret: 1 },
          { gare: "Auboué", heure: "17:22", arret: 1 },
          { gare: "Moyeuvre-Grande", heure: "17:32", arret: 1 },
          { gare: "Rombas-Clouange", heure: "17:40", arret: 1 },
          { gare: "Gandrange - Amnéville", heure: "17:46", arret: 1 },
          { gare: "Hagondange", heure: "17:51", arret: 1 },
          { gare: "Walygator parc", heure: "17:54", arret: 1 },
          { gare: "Metz", heure: "18:06", arret: 2 }
        ]
      },
      {
        nom: "Metz → Longuyon",
        dessertes: [
          { gare: "Metz", heure: "18:30", arret: 2 },
          { gare: "Walygator parc", heure: "18:43", arret: 1 },
          { gare: "Hagondange", heure: "18:46", arret: 1 },
          { gare: "Gandrange - Amnéville", heure: "18:51", arret: 1 },
          { gare: "Rombas-Clouange", heure: "18:57", arret: 1 },
          { gare: "Moyeuvre-Grande", heure: "19:05", arret: 1 },
          { gare: "Auboué", heure: "19:15", arret: 1 },
          { gare: "Hatrize", heure: "19:24", arret: 1 },
          { gare: "Conflans - Jarny", heure: "19:31", arret: 1 },
          { gare: "Baroncourt", heure: "19:48", arret: 1 },
          { gare: "Longuyon", heure: "20:06", arret: 2 }
        ]
      }
    ]
  },

  {
    id: "TER 2970",
    nom: "Z24500 Metrolor",
    moteurs: ["25kV CA", "1.5kV CC"],
    vitesseMax: 160,
    capacite: { premiere: 82, seconde: 596 },
    composition: ["Z24500 Metrolor"],
    trajets: [
      {
        nom: "Thionville → Luxembourg",
        dessertes: [
          { gare: "Thionville", heure: "06:14", arret: 4 },
          { gare: "Hettange-Grande", heure: "06:22", arret: 1 },
          { gare: "Bettembourg", heure: "06:32", arret: 1 },
          { gare: "Berchem", heure: "06:36", arret: 1 },
          { gare: "Howald", heure: "06:41", arret: 1 },
          { gare: "Luxembourg", heure: "06:44", arret: 4 }
        ]
      },
      {
        nom: "Luxembourg → Thionville",
        dessertes: [
          { gare: "Luxembourg", heure: "07:00", arret: 4 },
          { gare: "Howald", heure: "07:06", arret: 1 },
          { gare: "Berchem", heure: "07:11", arret: 1 },
          { gare: "Bettembourg", heure: "07:15", arret: 1 },
          { gare: "Hettange-Grande", heure: "07:25", arret: 1 },
          { gare: "Thionville", heure: "07:30", arret: 4 }
        ]
      },
      {
        nom: "Thionville → Luxembourg",
        dessertes: [
          { gare: "Thionville", heure: "08:14", arret: 4 },
          { gare: "Hettange-Grande", heure: "08:22", arret: 1 },
          { gare: "Bettembourg", heure: "08:32", arret: 1 },
          { gare: "Berchem", heure: "08:36", arret: 1 },
          { gare: "Howald", heure: "08:41", arret: 1 },
          { gare: "Luxembourg", heure: "08:44", arret: 4 }
        ]
      },
      {
        nom: "Luxembourg → Thionville",
        dessertes: [
          { gare: "Luxembourg", heure: "09:00", arret: 4 },
          { gare: "Howald", heure: "09:06", arret: 1 },
          { gare: "Berchem", heure: "09:11", arret: 1 },
          { gare: "Bettembourg", heure: "09:15", arret: 1 },
          { gare: "Hettange-Grande", heure: "09:25", arret: 1 },
          { gare: "Thionville", heure: "09:30", arret: 4 }
        ]
      },
      {
        nom: "Thionville → Luxembourg",
        dessertes: [
          { gare: "Thionville", heure: "10:14", arret: 4 },
          { gare: "Hettange-Grande", heure: "10:22", arret: 1 },
          { gare: "Bettembourg", heure: "10:32", arret: 1 },
          { gare: "Berchem", heure: "10:36", arret: 1 },
          { gare: "Howald", heure: "10:41", arret: 1 },
          { gare: "Luxembourg", heure: "10:44", arret: 4 }
        ]
      },
      {
        nom: "Luxembourg → Thionville",
        dessertes: [
          { gare: "Luxembourg", heure: "11:00", arret: 4 },
          { gare: "Howald", heure: "11:06", arret: 1 },
          { gare: "Berchem", heure: "11:11", arret: 1 },
          { gare: "Bettembourg", heure: "11:15", arret: 1 },
          { gare: "Hettange-Grande", heure: "11:25", arret: 1 },
          { gare: "Thionville", heure: "11:30", arret: 4 }
        ]
      },
      {
        nom: "Thionville → Luxembourg",
        dessertes: [
          { gare: "Thionville", heure: "12:14", arret: 4 },
          { gare: "Hettange-Grande", heure: "12:22", arret: 1 },
          { gare: "Bettembourg", heure: "12:32", arret: 1 },
          { gare: "Berchem", heure: "12:36", arret: 1 },
          { gare: "Howald", heure: "12:41", arret: 1 },
          { gare: "Luxembourg", heure: "12:44", arret: 4 }
        ]
      },
      {
        nom: "Luxembourg → Thionville",
        dessertes: [
          { gare: "Luxembourg", heure: "13:00", arret: 4 },
          { gare: "Howald", heure: "13:06", arret: 1 },
          { gare: "Berchem", heure: "13:11", arret: 1 },
          { gare: "Bettembourg", heure: "13:15", arret: 1 },
          { gare: "Hettange-Grande", heure: "13:25", arret: 1 },
          { gare: "Thionville", heure: "13:30", arret: 4 }
        ]
      },
      {
        nom: "Thionville → Luxembourg",
        dessertes: [
          { gare: "Thionville", heure: "14:14", arret: 4 },
          { gare: "Hettange-Grande", heure: "14:22", arret: 1 },
          { gare: "Bettembourg", heure: "14:32", arret: 1 },
          { gare: "Berchem", heure: "14:36", arret: 1 },
          { gare: "Howald", heure: "14:41", arret: 1 },
          { gare: "Luxembourg", heure: "14:44", arret: 4 }
        ]
      },
      {
        nom: "Luxembourg → Thionville",
        dessertes: [
          { gare: "Luxembourg", heure: "15:00", arret: 4 },
          { gare: "Howald", heure: "15:06", arret: 1 },
          { gare: "Berchem", heure: "15:11", arret: 1 },
          { gare: "Bettembourg", heure: "15:15", arret: 1 },
          { gare: "Hettange-Grande", heure: "15:25", arret: 1 },
          { gare: "Thionville", heure: "15:30", arret: 4 }
        ]
      },
      {
        nom: "Thionville → Luxembourg",
        dessertes: [
          { gare: "Thionville", heure: "16:14", arret: 4 },
          { gare: "Hettange-Grande", heure: "16:22", arret: 1 },
          { gare: "Bettembourg", heure: "16:32", arret: 1 },
          { gare: "Berchem", heure: "16:36", arret: 1 },
          { gare: "Howald", heure: "16:41", arret: 1 },
          { gare: "Luxembourg", heure: "16:44", arret: 4 }
        ]
      },
      {
        nom: "Luxembourg → Thionville",
        dessertes: [
          { gare: "Luxembourg", heure: "17:00", arret: 4 },
          { gare: "Howald", heure: "17:06", arret: 1 },
          { gare: "Berchem", heure: "17:11", arret: 1 },
          { gare: "Bettembourg", heure: "17:15", arret: 1 },
          { gare: "Hettange-Grande", heure: "17:25", arret: 1 },
          { gare: "Thionville", heure: "17:30", arret: 4 }
        ]
      },
      {
        nom: "Thionville → Luxembourg",
        dessertes: [
          { gare: "Thionville", heure: "18:14", arret: 4 },
          { gare: "Hettange-Grande", heure: "18:22", arret: 1 },
          { gare: "Bettembourg", heure: "18:32", arret: 1 },
          { gare: "Berchem", heure: "18:36", arret: 1 },
          { gare: "Howald", heure: "18:41", arret: 1 },
          { gare: "Luxembourg", heure: "18:44", arret: 4 }
        ]
      },
      {
        nom: "Luxembourg → Thionville",
        dessertes: [
          { gare: "Luxembourg", heure: "19:00", arret: 4 },
          { gare: "Howald", heure: "19:06", arret: 1 },
          { gare: "Berchem", heure: "19:11", arret: 1 },
          { gare: "Bettembourg", heure: "19:15", arret: 1 },
          { gare: "Hettange-Grande", heure: "19:25", arret: 1 },
          { gare: "Thionville", heure: "19:30", arret: 4 }
        ]
      },
      {
        nom: "Thionville → Luxembourg",
        dessertes: [
          { gare: "Thionville", heure: "20:14", arret: 4 },
          { gare: "Hettange-Grande", heure: "20:22", arret: 1 },
          { gare: "Bettembourg", heure: "20:32", arret: 1 },
          { gare: "Berchem", heure: "20:36", arret: 1 },
          { gare: "Howald", heure: "20:41", arret: 1 },
          { gare: "Luxembourg", heure: "20:44", arret: 4 }
        ]
      },
      {
        nom: "Luxembourg → Thionville",
        dessertes: [
          { gare: "Luxembourg", heure: "21:00", arret: 4 },
          { gare: "Howald", heure: "21:06", arret: 1 },
          { gare: "Berchem", heure: "21:11", arret: 1 },
          { gare: "Bettembourg", heure: "21:15", arret: 1 },
          { gare: "Hettange-Grande", heure: "21:25", arret: 1 },
          { gare: "Thionville", heure: "21:30", arret: 4 }
        ]
      }
    ]
  },

  {
    id: "TER 2974",
    nom: "Z24500 Metrolor",
    moteurs: ["25kV CA", "1.5kV CC"],
    vitesseMax: 160,
    capacite: { premiere: 41, seconde: 298 },
    trajets: [
      {
        nom: "Longuyon → Luxembourg",
        dessertes: [
          { gare: "Longuyon", heure: "06:50", arret: 4 },
          { gare: "Longwy", heure: "07:13", arret: 1 },
          { gare: "Rodange", heure: "07:21", arret: 1 },
          { gare: "Bascharage-Sanem (LU)", heure: "07:28", arret: 1 },
          { gare: "Schouweiler (LU)", heure: "07:32", arret: 1 },
          { gare: "Dippach-Reckange (LU)", heure: "07:36", arret: 1 },
          { gare: "Leudelange (LU)", heure: "07:42", arret: 1 },
          { gare: "Hollerich", heure: "07:48", arret: 1 },
          { gare: "Luxembourg", heure: "07:51", arret: 4 }
        ]
      },
      {
        nom: "Luxembourg → Longuyon",
        dessertes: [
          { gare: "Luxembourg", heure: "08:20", arret: 4 },
          { gare: "Hollerich", heure: "08:26", arret: 1 },
          { gare: "Leudelange (LU)", heure: "08:32", arret: 1 },
          { gare: "Dippach-Reckange (LU)", heure: "08:38", arret: 1 },
          { gare: "Schouweiler (LU)", heure: "08:42", arret: 1 },
          { gare: "Bascharage-Sanem (LU)", heure: "08:46", arret: 1 },
          { gare: "Rodange", heure: "08:53", arret: 1 },
          { gare: "Longwy", heure: "09:01", arret: 1 },
          { gare: "Longuyon", heure: "09:21", arret: 4 }
        ]
      },
      {
        nom: "Longuyon → Luxembourg",
        dessertes: [
          { gare: "Longuyon", heure: "10:00", arret: 4 },
          { gare: "Longwy", heure: "10:23", arret: 1 },
          { gare: "Rodange", heure: "10:31", arret: 1 },
          { gare: "Bascharage-Sanem (LU)", heure: "10:38", arret: 1 },
          { gare: "Schouweiler (LU)", heure: "10:42", arret: 1 },
          { gare: "Dippach-Reckange (LU)", heure: "10:46", arret: 1 },
          { gare: "Leudelange (LU)", heure: "10:52", arret: 1 },
          { gare: "Hollerich", heure: "10:58", arret: 1 },
          { gare: "Luxembourg", heure: "11:01", arret: 4 }
        ]
      },
      {
        nom: "Luxembourg → Longuyon",
        dessertes: [
          { gare: "Luxembourg", heure: "11:32", arret: 4 },
          { gare: "Hollerich", heure: "11:38", arret: 1 },
          { gare: "Leudelange (LU)", heure: "11:44", arret: 1 },
          { gare: "Dippach-Reckange (LU)", heure: "11:50", arret: 1 },
          { gare: "Schouweiler (LU)", heure: "11:54", arret: 1 },
          { gare: "Bascharage-Sanem (LU)", heure: "11:58", arret: 1 },
          { gare: "Rodange", heure: "12:05", arret: 1 },
          { gare: "Longwy", heure: "12:13", arret: 1 },
          { gare: "Longuyon", heure: "12:33", arret: 4 }
        ]
      },
      {
        nom: "Longuyon → Luxembourg",
        dessertes: [
          { gare: "Longuyon", heure: "13:00", arret: 4 },
          { gare: "Longwy", heure: "13:23", arret: 1 },
          { gare: "Rodange", heure: "13:31", arret: 1 },
          { gare: "Bascharage-Sanem (LU)", heure: "13:38", arret: 1 },
          { gare: "Schouweiler (LU)", heure: "13:42", arret: 1 },
          { gare: "Dippach-Reckange (LU)", heure: "13:46", arret: 1 },
          { gare: "Leudelange (LU)", heure: "13:52", arret: 1 },
          { gare: "Hollerich", heure: "13:58", arret: 1 },
          { gare: "Luxembourg", heure: "14:01", arret: 4 }
        ]
      },
      {
        nom: "Luxembourg → Longuyon",
        dessertes: [
          { gare: "Luxembourg", heure: "14:32", arret: 4 },
          { gare: "Hollerich", heure: "14:38", arret: 1 },
          { gare: "Leudelange (LU)", heure: "14:44", arret: 1 },
          { gare: "Dippach-Reckange (LU)", heure: "14:50", arret: 1 },
          { gare: "Schouweiler (LU)", heure: "14:54", arret: 1 },
          { gare: "Bascharage-Sanem (LU)", heure: "14:58", arret: 1 },
          { gare: "Rodange", heure: "15:05", arret: 1 },
          { gare: "Longwy", heure: "15:13", arret: 1 },
          { gare: "Longuyon", heure: "15:33", arret: 4 }
        ]
      },
      {
        nom: "Longuyon → Luxembourg",
        dessertes: [
          { gare: "Longuyon", heure: "16:00", arret: 4 },
          { gare: "Longwy", heure: "16:23", arret: 1 },
          { gare: "Rodange", heure: "16:31", arret: 1 },
          { gare: "Bascharage-Sanem (LU)", heure: "16:38", arret: 1 },
          { gare: "Schouweiler (LU)", heure: "16:42", arret: 1 },
          { gare: "Dippach-Reckange (LU)", heure: "16:46", arret: 1 },
          { gare: "Leudelange (LU)", heure: "16:52", arret: 1 },
          { gare: "Hollerich", heure: "16:58", arret: 1 },
          { gare: "Luxembourg", heure: "17:01", arret: 4 }
        ]
      },
      {
        nom: "Luxembourg → Longuyon",
        dessertes: [
          { gare: "Luxembourg", heure: "17:32", arret: 4 },
          { gare: "Hollerich", heure: "17:38", arret: 1 },
          { gare: "Leudelange (LU)", heure: "17:44", arret: 1 },
          { gare: "Dippach-Reckange (LU)", heure: "17:50", arret: 1 },
          { gare: "Schouweiler (LU)", heure: "17:54", arret: 1 },
          { gare: "Bascharage-Sanem (LU)", heure: "17:58", arret: 1 },
          { gare: "Rodange", heure: "18:05", arret: 1 },
          { gare: "Longwy", heure: "18:13", arret: 1 },
          { gare: "Longuyon", heure: "18:33", arret: 4 }
        ]
      },
      {
        nom: "Longuyon → Luxembourg",
        dessertes: [
          { gare: "Longuyon", heure: "19:00", arret: 4 },
          { gare: "Longwy", heure: "19:23", arret: 1 },
          { gare: "Rodange", heure: "19:31", arret: 1 },
          { gare: "Bascharage-Sanem (LU)", heure: "19:38", arret: 1 },
          { gare: "Schouweiler (LU)", heure: "19:42", arret: 1 },
          { gare: "Dippach-Reckange (LU)", heure: "19:46", arret: 1 },
          { gare: "Leudelange (LU)", heure: "19:52", arret: 1 },
          { gare: "Hollerich", heure: "19:58", arret: 1 },
          { gare: "Luxembourg", heure: "20:01", arret: 4 }
        ]
      },
      {
        nom: "Luxembourg → Longuyon",
        dessertes: [
          { gare: "Luxembourg", heure: "20:32", arret: 4 },
          { gare: "Hollerich", heure: "20:38", arret: 1 },
          { gare: "Leudelange (LU)", heure: "20:44", arret: 1 },
          { gare: "Dippach-Reckange (LU)", heure: "20:50", arret: 1 },
          { gare: "Schouweiler (LU)", heure: "20:54", arret: 1 },
          { gare: "Bascharage-Sanem (LU)", heure: "20:58", arret: 1 },
          { gare: "Rodange", heure: "21:05", arret: 1 },
          { gare: "Longwy", heure: "21:13", arret: 1 },
          { gare: "Longuyon", heure: "21:33", arret: 4 }
        ]
      }
    ]
  },

  {
    id: "TER 2979",
    nom: "X73900 Grand Est",
    moteurs: ["diesel"],
    vitesseMax: 140,
    capacite: { premiere: 0, seconde: 61 },
    trajets: [
      {
        nom: "Nancy → Pont-Saint-Vincent",
        dessertes: [
          { gare: "Nancy", heure: "06:00", arret: 2 },
          { gare: "Houdemont", heure: "06:08", arret: 1 },
          { gare: "Ludres", heure: "06:13", arret: 1 },
          { gare: "Messein", heure: "06:19", arret: 1 },
          { gare: "Pont-Saint-Vincent", heure: "06:25", arret: 3 }
        ]
      },
      {
        nom: "Pont-Saint-Vincent → Nancy",
        dessertes: [
          { gare: "Pont-Saint-Vincent", heure: "06:55", arret: 3 },
          { gare: "Messein", heure: "07:03", arret: 1 },
          { gare: "Ludres", heure: "07:09", arret: 1 },
          { gare: "Houdemont", heure: "07:14", arret: 1 },
          { gare: "Nancy", heure: "07:21", arret: 2 }
        ]
      },
      {
        nom: "Nancy → Pont-Saint-Vincent",
        dessertes: [
          { gare: "Nancy", heure: "07:51", arret: 2 },
          { gare: "Houdemont", heure: "07:59", arret: 1 },
          { gare: "Ludres", heure: "08:04", arret: 1 },
          { gare: "Messein", heure: "08:10", arret: 1 },
          { gare: "Pont-Saint-Vincent", heure: "08:16", arret: 3 }
        ]
      },
      {
        nom: "Pont-Saint-Vincent → Nancy",
        dessertes: [
          { gare: "Pont-Saint-Vincent", heure: "08:46", arret: 3 },
          { gare: "Messein", heure: "08:54", arret: 1 },
          { gare: "Ludres", heure: "09:00", arret: 1 },
          { gare: "Houdemont", heure: "09:05", arret: 1 },
          { gare: "Nancy", heure: "09:12", arret: 2 }
        ]
      },
      {
        nom: "Nancy → Pont-Saint-Vincent",
        dessertes: [
          { gare: "Nancy", heure: "11:42", arret: 2 },
          { gare: "Houdemont", heure: "11:50", arret: 1 },
          { gare: "Ludres", heure: "11:55", arret: 1 },
          { gare: "Messein", heure: "12:01", arret: 1 },
          { gare: "Pont-Saint-Vincent", heure: "12:07", arret: 3 }
        ]
      },
      {
        nom: "Pont-Saint-Vincent → Nancy",
        dessertes: [
          { gare: "Pont-Saint-Vincent", heure: "12:37", arret: 3 },
          { gare: "Messein", heure: "12:45", arret: 1 },
          { gare: "Ludres", heure: "12:51", arret: 1 },
          { gare: "Houdemont", heure: "12:56", arret: 1 },
          { gare: "Nancy", heure: "13:03", arret: 2 }
        ]
      },
      {
        nom: "Nancy → Pont-Saint-Vincent",
        dessertes: [
          { gare: "Nancy", heure: "13:33", arret: 2 },
          { gare: "Houdemont", heure: "13:41", arret: 1 },
          { gare: "Ludres", heure: "13:46", arret: 1 },
          { gare: "Messein", heure: "13:52", arret: 1 },
          { gare: "Pont-Saint-Vincent", heure: "13:58", arret: 3 }
        ]
      },
      {
        nom: "Pont-Saint-Vincent → Nancy",
        dessertes: [
          { gare: "Pont-Saint-Vincent", heure: "15:28", arret: 3 },
          { gare: "Messein", heure: "15:36", arret: 1 },
          { gare: "Ludres", heure: "15:42", arret: 1 },
          { gare: "Houdemont", heure: "15:47", arret: 1 },
          { gare: "Nancy", heure: "15:54", arret: 2 }
        ]
      },
      {
        nom: "Nancy → Pont-Saint-Vincent",
        dessertes: [
          { gare: "Nancy", heure: "16:24", arret: 2 },
          { gare: "Houdemont", heure: "16:32", arret: 1 },
          { gare: "Ludres", heure: "16:37", arret: 1 },
          { gare: "Messein", heure: "16:43", arret: 1 },
          { gare: "Pont-Saint-Vincent", heure: "16:49", arret: 3 }
        ]
      },
      {
        nom: "Pont-Saint-Vincent → Nancy",
        dessertes: [
          { gare: "Pont-Saint-Vincent", heure: "17:19", arret: 3 },
          { gare: "Messein", heure: "17:27", arret: 1 },
          { gare: "Ludres", heure: "17:33", arret: 1 },
          { gare: "Houdemont", heure: "17:38", arret: 1 },
          { gare: "Nancy", heure: "17:45", arret: 2 }
        ]
      },
      {
        nom: "Nancy → Pont-Saint-Vincent",
        dessertes: [
          { gare: "Nancy", heure: "18:15", arret: 2 },
          { gare: "Houdemont", heure: "18:23", arret: 1 },
          { gare: "Ludres", heure: "18:28", arret: 1 },
          { gare: "Messein", heure: "18:34", arret: 1 },
          { gare: "Pont-Saint-Vincent", heure: "18:40", arret: 3 }
        ]
      },
      {
        nom: "Pont-Saint-Vincent → Nancy",
        dessertes: [
          { gare: "Pont-Saint-Vincent", heure: "19:10", arret: 3 },
          { gare: "Messein", heure: "19:18", arret: 1 },
          { gare: "Ludres", heure: "19:24", arret: 1 },
          { gare: "Houdemont", heure: "19:29", arret: 1 },
          { gare: "Nancy", heure: "19:36", arret: 2 }
        ]
      }
    ]
  },

  {
    id: "TER 2980",
    nom: "AGC Metrolor 4C",
    moteurs: ["25kV CA", "1.5kV CC"],
    vitesseMax: 160,
    capacite: { premiere: 24, seconde: 183 },
    trajets: [
      {
        nom: "Nancy → Remiremont",
        dessertes: [
          { gare: "Nancy", heure: "08:05", arret: 5 },
          { gare: "Laneuveville-devant-Nancy", heure: "08:15", arret: 1 },
          { gare: "Rosieres-Aux-Salines", heure: "08:25", arret: 1 },
          { gare: "Blainville - Damelevières", heure: "08:30", arret: 1 },
          { gare: "Einvaux", heure: "08:38", arret: 1 },
          { gare: "Bayon", heure: "08:46", arret: 1 },
          { gare: "Charmes (Vosges)", heure: "08:55", arret: 1 },
          { gare: "Châtel-Nomexy", heure: "09:06", arret: 1 },
          { gare: "Thaon-les-Vosges", heure: "09:13", arret: 1 },
          { gare: "Épinal", heure: "09:19", arret: 3 },
          { gare: "Arches", heure: "09:34", arret: 1 },
          { gare: "Éloyes", heure: "09:44", arret: 1 },
          { gare: "Remiremont", heure: "09:53", arret: 3 }
        ]
      },
      {
        nom: "Remiremont → Nancy",
        dessertes: [
          { gare: "Remiremont", heure: "10:00", arret: 3 },
          { gare: "Éloyes", heure: "10:11", arret: 1 },
          { gare: "Arches", heure: "10:21", arret: 1 },
          { gare: "Épinal", heure: "10:34", arret: 3 },
          { gare: "Thaon-les-Vosges", heure: "10:42", arret: 1 },
          { gare: "Châtel-Nomexy", heure: "10:49", arret: 1 },
          { gare: "Charmes (Vosges)", heure: "11:00", arret: 1 },
          { gare: "Bayon", heure: "11:09", arret: 1 },
          { gare: "Einvaux", heure: "11:17", arret: 1 },
          { gare: "Blainville - Damelevières", heure: "11:25", arret: 1 },
          { gare: "Rosieres-Aux-Salines", heure: "11:30", arret: 1 },
          { gare: "Laneuveville-devant-Nancy", heure: "11:40", arret: 1 },
          { gare: "Nancy", heure: "11:46", arret: 5 }
        ]
      },
      {
        nom: "Nancy → Remiremont",
        dessertes: [
          { gare: "Nancy", heure: "12:05", arret: 5 },
          { gare: "Laneuveville-devant-Nancy", heure: "12:15", arret: 1 },
          { gare: "Rosieres-Aux-Salines", heure: "12:25", arret: 1 },
          { gare: "Blainville - Damelevières", heure: "12:30", arret: 1 },
          { gare: "Einvaux", heure: "12:38", arret: 1 },
          { gare: "Bayon", heure: "12:46", arret: 1 },
          { gare: "Charmes (Vosges)", heure: "12:55", arret: 1 },
          { gare: "Châtel-Nomexy", heure: "13:06", arret: 1 },
          { gare: "Thaon-les-Vosges", heure: "13:13", arret: 1 },
          { gare: "Épinal", heure: "13:19", arret: 3 },
          { gare: "Arches", heure: "13:34", arret: 1 },
          { gare: "Éloyes", heure: "13:44", arret: 1 },
          { gare: "Remiremont", heure: "13:53", arret: 3 }
        ]
      },
      {
        nom: "Remiremont → Nancy",
        dessertes: [
          { gare: "Remiremont", heure: "14:00", arret: 3 },
          { gare: "Éloyes", heure: "14:11", arret: 1 },
          { gare: "Arches", heure: "14:21", arret: 1 },
          { gare: "Épinal", heure: "14:34", arret: 3 },
          { gare: "Thaon-les-Vosges", heure: "14:42", arret: 1 },
          { gare: "Châtel-Nomexy", heure: "14:49", arret: 1 },
          { gare: "Charmes (Vosges)", heure: "15:00", arret: 1 },
          { gare: "Bayon", heure: "15:09", arret: 1 },
          { gare: "Einvaux", heure: "15:17", arret: 1 },
          { gare: "Blainville - Damelevières", heure: "15:25", arret: 1 },
          { gare: "Rosieres-Aux-Salines", heure: "15:30", arret: 1 },
          { gare: "Laneuveville-devant-Nancy", heure: "15:40", arret: 1 },
          { gare: "Nancy", heure: "15:46", arret: 5 }
        ]
      },
      {
        nom: "Nancy → Remiremont",
        dessertes: [
          { gare: "Nancy", heure: "16:05", arret: 5 },
          { gare: "Laneuveville-devant-Nancy", heure: "16:15", arret: 1 },
          { gare: "Rosieres-Aux-Salines", heure: "16:25", arret: 1 },
          { gare: "Blainville - Damelevières", heure: "16:30", arret: 1 },
          { gare: "Einvaux", heure: "16:38", arret: 1 },
          { gare: "Bayon", heure: "16:46", arret: 1 },
          { gare: "Charmes (Vosges)", heure: "16:55", arret: 1 },
          { gare: "Châtel-Nomexy", heure: "17:06", arret: 1 },
          { gare: "Thaon-les-Vosges", heure: "17:13", arret: 1 },
          { gare: "Épinal", heure: "17:19", arret: 3 },
          { gare: "Arches", heure: "17:34", arret: 1 },
          { gare: "Éloyes", heure: "17:44", arret: 1 },
          { gare: "Remiremont", heure: "17:53", arret: 3 }
        ]
      },
      {
        nom: "Remiremont → Nancy",
        dessertes: [
          { gare: "Remiremont", heure: "18:00", arret: 3 },
          { gare: "Éloyes", heure: "18:11", arret: 1 },
          { gare: "Arches", heure: "18:21", arret: 1 },
          { gare: "Épinal", heure: "18:34", arret: 3 },
          { gare: "Thaon-les-Vosges", heure: "18:42", arret: 1 },
          { gare: "Châtel-Nomexy", heure: "18:49", arret: 1 },
          { gare: "Charmes (Vosges)", heure: "19:00", arret: 1 },
          { gare: "Bayon", heure: "19:09", arret: 1 },
          { gare: "Einvaux", heure: "19:17", arret: 1 },
          { gare: "Blainville - Damelevières", heure: "19:25", arret: 1 },
          { gare: "Rosieres-Aux-Salines", heure: "19:30", arret: 1 },
          { gare: "Laneuveville-devant-Nancy", heure: "19:40", arret: 1 },
          { gare: "Nancy", heure: "19:46", arret: 5 }
        ]
      },
      {
        nom: "Nancy → Remiremont",
        dessertes: [
          { gare: "Nancy", heure: "20:05", arret: 5 },
          { gare: "Laneuveville-devant-Nancy", heure: "20:15", arret: 1 },
          { gare: "Rosieres-Aux-Salines", heure: "20:25", arret: 1 },
          { gare: "Blainville - Damelevières", heure: "20:30", arret: 1 },
          { gare: "Einvaux", heure: "20:38", arret: 1 },
          { gare: "Bayon", heure: "20:46", arret: 1 },
          { gare: "Charmes (Vosges)", heure: "20:55", arret: 1 },
          { gare: "Châtel-Nomexy", heure: "21:06", arret: 1 },
          { gare: "Thaon-les-Vosges", heure: "21:13", arret: 1 },
          { gare: "Épinal", heure: "21:19", arret: 3 },
          { gare: "Arches", heure: "21:34", arret: 1 },
          { gare: "Éloyes", heure: "21:44", arret: 1 },
          { gare: "Remiremont", heure: "21:53", arret: 3 }
        ]
      },
      {
        nom: "Remiremont → Nancy",
        dessertes: [
          { gare: "Remiremont", heure: "22:00", arret: 3 },
          { gare: "Éloyes", heure: "22:11", arret: 1 },
          { gare: "Arches", heure: "22:21", arret: 1 },
          { gare: "Épinal", heure: "22:34", arret: 3 },
          { gare: "Thaon-les-Vosges", heure: "22:42", arret: 1 },
          { gare: "Châtel-Nomexy", heure: "22:49", arret: 1 },
          { gare: "Charmes (Vosges)", heure: "23:00", arret: 1 },
          { gare: "Bayon", heure: "23:09", arret: 1 },
          { gare: "Einvaux", heure: "23:17", arret: 1 },
          { gare: "Blainville - Damelevières", heure: "23:25", arret: 1 },
          { gare: "Rosieres-Aux-Salines", heure: "23:30", arret: 1 },
          { gare: "Laneuveville-devant-Nancy", heure: "23:40", arret: 1 },
          { gare: "Nancy", heure: "23:46", arret: 5 }
        ]
      }
    ]
  },

  {
    id: "TER 2981",
    nom: "Z11500 Metrolor",
    moteurs: ["25kV CA", "1.5kV CC"],
    vitesseMax: 160,
    capacite: { premiere: 10, seconde: 252 },
    composition: ["Z11500 Metrolor"],
    trajets: [
      {
        nom: "Nancy → Remiremont",
        dessertes: [
          { gare: "Nancy", heure: "06:05", arret: 1 },
          { gare: "Laneuveville-devant-Nancy", heure: "06:11", arret: 1 },
          { gare: "Rosieres-Aux-Salines", heure: "06:21", arret: 1 },
          { gare: "Blainville - Damelevières", heure: "06:26", arret: 1 },
          { gare: "Einvaux", heure: "06:34", arret: 1 },
          { gare: "Bayon", heure: "06:42", arret: 1 },
          { gare: "Charmes (Vosges)", heure: "06:51", arret: 1 },
          { gare: "Châtel-Nomexy", heure: "07:02", arret: 1 },
          { gare: "Thaon-les-Vosges", heure: "07:09", arret: 1 },
          { gare: "Épinal", heure: "07:15", arret: 3 },
          { gare: "Arches", heure: "07:30", arret: 1 },
          { gare: "Éloyes", heure: "07:40", arret: 1 },
          { gare: "Remiremont", heure: "07:49", arret: 3 }
        ]
      },
      {
        nom: "Remiremont → Nancy",
        dessertes: [
          { gare: "Remiremont", heure: "08:00", arret: 3 },
          { gare: "Éloyes", heure: "08:11", arret: 1 },
          { gare: "Arches", heure: "08:21", arret: 1 },
          { gare: "Épinal", heure: "08:34", arret: 3 },
          { gare: "Thaon-les-Vosges", heure: "08:42", arret: 1 },
          { gare: "Châtel-Nomexy", heure: "08:49", arret: 1 },
          { gare: "Charmes (Vosges)", heure: "09:00", arret: 1 },
          { gare: "Bayon", heure: "09:09", arret: 1 },
          { gare: "Einvaux", heure: "09:17", arret: 1 },
          { gare: "Blainville - Damelevières", heure: "09:25", arret: 1 },
          { gare: "Rosieres-Aux-Salines", heure: "09:30", arret: 1 },
          { gare: "Laneuveville-devant-Nancy", heure: "09:40", arret: 1 },
          { gare: "Nancy", heure: "09:46", arret: 1 }
        ]
      },
      {
        nom: "Nancy → Remiremont",
        dessertes: [
          { gare: "Nancy", heure: "10:05", arret: 1 },
          { gare: "Laneuveville-devant-Nancy", heure: "10:11", arret: 1 },
          { gare: "Rosieres-Aux-Salines", heure: "10:21", arret: 1 },
          { gare: "Blainville - Damelevières", heure: "10:26", arret: 1 },
          { gare: "Einvaux", heure: "10:34", arret: 1 },
          { gare: "Bayon", heure: "10:42", arret: 1 },
          { gare: "Charmes (Vosges)", heure: "10:51", arret: 1 },
          { gare: "Châtel-Nomexy", heure: "11:02", arret: 1 },
          { gare: "Thaon-les-Vosges", heure: "11:09", arret: 1 },
          { gare: "Épinal", heure: "11:15", arret: 3 },
          { gare: "Arches", heure: "11:30", arret: 1 },
          { gare: "Éloyes", heure: "11:40", arret: 1 },
          { gare: "Remiremont", heure: "11:49", arret: 3 }
        ]
      },
      {
        nom: "Remiremont → Nancy",
        dessertes: [
          { gare: "Remiremont", heure: "12:00", arret: 3 },
          { gare: "Éloyes", heure: "12:11", arret: 1 },
          { gare: "Arches", heure: "12:21", arret: 1 },
          { gare: "Épinal", heure: "12:34", arret: 3 },
          { gare: "Thaon-les-Vosges", heure: "12:42", arret: 1 },
          { gare: "Châtel-Nomexy", heure: "12:49", arret: 1 },
          { gare: "Charmes (Vosges)", heure: "13:00", arret: 1 },
          { gare: "Bayon", heure: "13:09", arret: 1 },
          { gare: "Einvaux", heure: "13:17", arret: 1 },
          { gare: "Blainville - Damelevières", heure: "13:25", arret: 1 },
          { gare: "Rosieres-Aux-Salines", heure: "13:30", arret: 1 },
          { gare: "Laneuveville-devant-Nancy", heure: "13:40", arret: 1 },
          { gare: "Nancy", heure: "13:46", arret: 1 }
        ]
      },
      {
        nom: "Nancy → Remiremont",
        dessertes: [
          { gare: "Nancy", heure: "14:05", arret: 1 },
          { gare: "Laneuveville-devant-Nancy", heure: "14:11", arret: 1 },
          { gare: "Rosieres-Aux-Salines", heure: "14:21", arret: 1 },
          { gare: "Blainville - Damelevières", heure: "14:26", arret: 1 },
          { gare: "Einvaux", heure: "14:34", arret: 1 },
          { gare: "Bayon", heure: "14:42", arret: 1 },
          { gare: "Charmes (Vosges)", heure: "14:51", arret: 1 },
          { gare: "Châtel-Nomexy", heure: "15:02", arret: 1 },
          { gare: "Thaon-les-Vosges", heure: "15:09", arret: 1 },
          { gare: "Épinal", heure: "15:15", arret: 3 },
          { gare: "Arches", heure: "15:30", arret: 1 },
          { gare: "Éloyes", heure: "15:40", arret: 1 },
          { gare: "Remiremont", heure: "15:49", arret: 3 }
        ]
      },
      {
        nom: "Remiremont → Nancy",
        dessertes: [
          { gare: "Remiremont", heure: "16:00", arret: 3 },
          { gare: "Éloyes", heure: "16:11", arret: 1 },
          { gare: "Arches", heure: "16:21", arret: 1 },
          { gare: "Épinal", heure: "16:34", arret: 3 },
          { gare: "Thaon-les-Vosges", heure: "16:42", arret: 1 },
          { gare: "Châtel-Nomexy", heure: "16:49", arret: 1 },
          { gare: "Charmes (Vosges)", heure: "17:00", arret: 1 },
          { gare: "Bayon", heure: "17:09", arret: 1 },
          { gare: "Einvaux", heure: "17:17", arret: 1 },
          { gare: "Blainville - Damelevières", heure: "17:25", arret: 1 },
          { gare: "Rosieres-Aux-Salines", heure: "17:30", arret: 1 },
          { gare: "Laneuveville-devant-Nancy", heure: "17:40", arret: 1 },
          { gare: "Nancy", heure: "17:46", arret: 1 }
        ]
      },
      {
        nom: "Nancy → Remiremont",
        dessertes: [
          { gare: "Nancy", heure: "18:05", arret: 1 },
          { gare: "Laneuveville-devant-Nancy", heure: "18:11", arret: 1 },
          { gare: "Rosieres-Aux-Salines", heure: "18:21", arret: 1 },
          { gare: "Blainville - Damelevières", heure: "18:26", arret: 1 },
          { gare: "Einvaux", heure: "18:34", arret: 1 },
          { gare: "Bayon", heure: "18:42", arret: 1 },
          { gare: "Charmes (Vosges)", heure: "18:51", arret: 1 },
          { gare: "Châtel-Nomexy", heure: "19:02", arret: 1 },
          { gare: "Thaon-les-Vosges", heure: "19:09", arret: 1 },
          { gare: "Épinal", heure: "19:15", arret: 3 },
          { gare: "Arches", heure: "19:30", arret: 1 },
          { gare: "Éloyes", heure: "19:40", arret: 1 },
          { gare: "Remiremont", heure: "19:49", arret: 3 }
        ]
      },
      {
        nom: "Remiremont → Nancy",
        dessertes: [
          { gare: "Remiremont", heure: "20:00", arret: 3 },
          { gare: "Éloyes", heure: "20:11", arret: 1 },
          { gare: "Arches", heure: "20:21", arret: 1 },
          { gare: "Épinal", heure: "20:34", arret: 3 },
          { gare: "Thaon-les-Vosges", heure: "20:42", arret: 1 },
          { gare: "Châtel-Nomexy", heure: "20:49", arret: 1 },
          { gare: "Charmes (Vosges)", heure: "21:00", arret: 1 },
          { gare: "Bayon", heure: "21:09", arret: 1 },
          { gare: "Einvaux", heure: "21:17", arret: 1 },
          { gare: "Blainville - Damelevières", heure: "21:25", arret: 1 },
          { gare: "Rosieres-Aux-Salines", heure: "21:30", arret: 1 },
          { gare: "Laneuveville-devant-Nancy", heure: "21:40", arret: 1 },
          { gare: "Nancy", heure: "21:46", arret: 1 }
        ]
      }
    ]
  },

  {
    id: "TER 2985",
    nom: "X73900 Grand Est",
    moteurs: ["diesel"],
    vitesseMax: 140,
    capacite: { premiere: 0, seconde: 61 },
    trajets: [
      {
        nom: "Épinal → Saint-Dié-des-Vosges",
        dessertes: [
          { gare: "Épinal", heure: "08:15", arret: 3 },
          { gare: "Arches", heure: "08:31", arret: 2 },
          { gare: "Bruyères", heure: "09:01", arret: 1 },
          { gare: "Saint-Léonard", heure: "09:33", arret: 1 },
          { gare: "Saint-Dié-des-Vosges", heure: "09:44", arret: 3 }
        ]
      },
      {
        nom: "Saint-Dié-des-Vosges → Épinal",
        dessertes: [
          { gare: "Saint-Dié-des-Vosges", heure: "10:15", arret: 3 },
          { gare: "Saint-Léonard", heure: "10:28", arret: 1 },
          { gare: "Bruyères", heure: "11:00", arret: 1 },
          { gare: "Arches", heure: "11:29", arret: 2 },
          { gare: "Épinal", heure: "11:44", arret: 3 }
        ]
      },
      {
        nom: "Épinal → Saint-Dié-des-Vosges",
        dessertes: [
          { gare: "Épinal", heure: "12:15", arret: 3 },
          { gare: "Arches", heure: "12:31", arret: 2 },
          { gare: "Bruyères", heure: "13:01", arret: 1 },
          { gare: "Saint-Léonard", heure: "13:33", arret: 1 },
          { gare: "Saint-Dié-des-Vosges", heure: "13:44", arret: 3 }
        ]
      },
      {
        nom: "Saint-Dié-des-Vosges → Épinal",
        dessertes: [
          { gare: "Saint-Dié-des-Vosges", heure: "14:15", arret: 3 },
          { gare: "Saint-Léonard", heure: "14:28", arret: 1 },
          { gare: "Bruyères", heure: "15:00", arret: 1 },
          { gare: "Arches", heure: "15:29", arret: 2 },
          { gare: "Épinal", heure: "15:44", arret: 3 }
        ]
      },
      {
        nom: "Épinal → Saint-Dié-des-Vosges",
        dessertes: [
          { gare: "Épinal", heure: "16:15", arret: 3 },
          { gare: "Arches", heure: "16:31", arret: 2 },
          { gare: "Bruyères", heure: "17:01", arret: 1 },
          { gare: "Saint-Léonard", heure: "17:33", arret: 1 },
          { gare: "Saint-Dié-des-Vosges", heure: "17:44", arret: 3 }
        ]
      },
      {
        nom: "Saint-Dié-des-Vosges → Épinal",
        dessertes: [
          { gare: "Saint-Dié-des-Vosges", heure: "18:15", arret: 3 },
          { gare: "Saint-Léonard", heure: "18:28", arret: 1 },
          { gare: "Bruyères", heure: "19:00", arret: 1 },
          { gare: "Arches", heure: "19:29", arret: 2 },
          { gare: "Épinal", heure: "19:44", arret: 3 }
        ]
      }
    ]
  },

  {
    id: "TER 2990",
    nom: "AGC Metrolor 4C",
    moteurs: ["25kV CA", "1.5kV CC"],
    vitesseMax: 160,
    capacite: { premiere: 24, seconde: 183 },
    trajets: [
      {
        nom: "Saint-Dié-des-Vosges → Nancy",
        dessertes: [
          { gare: "Saint-Dié-des-Vosges", heure: "06:20", arret: 3 },
          { gare: "Saint-Michel-sur-Meurthe", heure: "06:30", arret: 1 },
          { gare: "Étival-Clairefontaine", heure: "06:35", arret: 1 },
          { gare: "Raon-l'Etape", heure: "06:41", arret: 1 },
          { gare: "Baccarat", heure: "06:51", arret: 1 },
          { gare: "Azerailles", heure: "06:58", arret: 1 },
          { gare: "Saint-Clément - Laronxe", heure: "07:07", arret: 1 },
          { gare: "Lunéville", heure: "07:19", arret: 2 },
          { gare: "Blainville - Damelevières", heure: "07:28", arret: 1 },
          { gare: "Rosieres-Aux-Salines", heure: "07:33", arret: 1 },
          { gare: "Laneuveville-devant-Nancy", heure: "07:43", arret: 1 },
          { gare: "Nancy", heure: "07:49", arret: 5 }
        ]
      },
      {
        nom: "Nancy → Saint-Dié-des-Vosges",
        dessertes: [
          { gare: "Nancy", heure: "08:25", arret: 5 },
          { gare: "Laneuveville-devant-Nancy", heure: "08:35", arret: 1 },
          { gare: "Rosieres-Aux-Salines", heure: "08:45", arret: 1 },
          { gare: "Blainville - Damelevières", heure: "08:50", arret: 1 },
          { gare: "Lunéville", heure: "08:58", arret: 2 },
          { gare: "Saint-Clément - Laronxe", heure: "09:11", arret: 1 },
          { gare: "Azerailles", heure: "09:20", arret: 1 },
          { gare: "Baccarat", heure: "09:27", arret: 1 },
          { gare: "Raon-l'Etape", heure: "09:37", arret: 1 },
          { gare: "Étival-Clairefontaine", heure: "09:43", arret: 1 },
          { gare: "Saint-Michel-sur-Meurthe", heure: "09:48", arret: 1 },
          { gare: "Saint-Dié-des-Vosges", heure: "09:56", arret: 3 }
        ]
      },
      {
        nom: "Saint-Dié-des-Vosges → Nancy",
        dessertes: [
          { gare: "Saint-Dié-des-Vosges", heure: "11:20", arret: 3 },
          { gare: "Saint-Michel-sur-Meurthe", heure: "11:30", arret: 1 },
          { gare: "Étival-Clairefontaine", heure: "11:35", arret: 1 },
          { gare: "Raon-l'Etape", heure: "11:41", arret: 1 },
          { gare: "Baccarat", heure: "11:51", arret: 1 },
          { gare: "Azerailles", heure: "11:58", arret: 1 },
          { gare: "Saint-Clément - Laronxe", heure: "12:07", arret: 1 },
          { gare: "Lunéville", heure: "12:19", arret: 2 },
          { gare: "Blainville - Damelevières", heure: "12:28", arret: 1 },
          { gare: "Rosieres-Aux-Salines", heure: "12:33", arret: 1 },
          { gare: "Laneuveville-devant-Nancy", heure: "12:43", arret: 1 },
          { gare: "Nancy", heure: "12:49", arret: 5 }
        ]
      },
      {
        nom: "Nancy → Saint-Dié-des-Vosges",
        dessertes: [
          { gare: "Nancy", heure: "13:25", arret: 5 },
          { gare: "Laneuveville-devant-Nancy", heure: "13:35", arret: 1 },
          { gare: "Rosieres-Aux-Salines", heure: "13:45", arret: 1 },
          { gare: "Blainville - Damelevières", heure: "13:50", arret: 1 },
          { gare: "Lunéville", heure: "13:58", arret: 2 },
          { gare: "Saint-Clément - Laronxe", heure: "14:11", arret: 1 },
          { gare: "Azerailles", heure: "14:20", arret: 1 },
          { gare: "Baccarat", heure: "14:27", arret: 1 },
          { gare: "Raon-l'Etape", heure: "14:37", arret: 1 },
          { gare: "Étival-Clairefontaine", heure: "14:43", arret: 1 },
          { gare: "Saint-Michel-sur-Meurthe", heure: "14:48", arret: 1 },
          { gare: "Saint-Dié-des-Vosges", heure: "14:56", arret: 3 }
        ]
      },
      {
        nom: "Saint-Dié-des-Vosges → Nancy",
        dessertes: [
          { gare: "Saint-Dié-des-Vosges", heure: "15:20", arret: 3 },
          { gare: "Saint-Michel-sur-Meurthe", heure: "15:30", arret: 1 },
          { gare: "Étival-Clairefontaine", heure: "15:35", arret: 1 },
          { gare: "Raon-l'Etape", heure: "15:41", arret: 1 },
          { gare: "Baccarat", heure: "15:51", arret: 1 },
          { gare: "Azerailles", heure: "15:58", arret: 1 },
          { gare: "Saint-Clément - Laronxe", heure: "16:07", arret: 1 },
          { gare: "Lunéville", heure: "16:19", arret: 2 },
          { gare: "Blainville - Damelevières", heure: "16:28", arret: 1 },
          { gare: "Rosieres-Aux-Salines", heure: "16:33", arret: 1 },
          { gare: "Laneuveville-devant-Nancy", heure: "16:43", arret: 1 },
          { gare: "Nancy", heure: "16:49", arret: 5 }
        ]
      },
      {
        nom: "Nancy → Saint-Dié-des-Vosges",
        dessertes: [
          { gare: "Nancy", heure: "17:25", arret: 5 },
          { gare: "Laneuveville-devant-Nancy", heure: "17:35", arret: 1 },
          { gare: "Rosieres-Aux-Salines", heure: "17:45", arret: 1 },
          { gare: "Blainville - Damelevières", heure: "17:50", arret: 1 },
          { gare: "Lunéville", heure: "17:58", arret: 2 },
          { gare: "Saint-Clément - Laronxe", heure: "18:11", arret: 1 },
          { gare: "Azerailles", heure: "18:20", arret: 1 },
          { gare: "Baccarat", heure: "18:27", arret: 1 },
          { gare: "Raon-l'Etape", heure: "18:37", arret: 1 },
          { gare: "Étival-Clairefontaine", heure: "18:43", arret: 1 },
          { gare: "Saint-Michel-sur-Meurthe", heure: "18:48", arret: 1 },
          { gare: "Saint-Dié-des-Vosges", heure: "18:56", arret: 3 }
        ]
      },
      {
        nom: "Saint-Dié-des-Vosges → Nancy",
        dessertes: [
          { gare: "Saint-Dié-des-Vosges", heure: "19:20", arret: 3 },
          { gare: "Saint-Michel-sur-Meurthe", heure: "19:30", arret: 1 },
          { gare: "Étival-Clairefontaine", heure: "19:35", arret: 1 },
          { gare: "Raon-l'Etape", heure: "19:41", arret: 1 },
          { gare: "Baccarat", heure: "19:51", arret: 1 },
          { gare: "Azerailles", heure: "19:58", arret: 1 },
          { gare: "Saint-Clément - Laronxe", heure: "20:07", arret: 1 },
          { gare: "Lunéville", heure: "20:19", arret: 2 },
          { gare: "Blainville - Damelevières", heure: "20:28", arret: 1 },
          { gare: "Rosieres-Aux-Salines", heure: "20:33", arret: 1 },
          { gare: "Laneuveville-devant-Nancy", heure: "20:43", arret: 1 },
          { gare: "Nancy", heure: "20:49", arret: 5 }
        ]
      }
    ]
  },

  {
    id: "TER 2991",
    nom: "AGC blueAlsace 4C",
    moteurs: ["25kV CA", "1.5kV CC"],
    vitesseMax: 160,
    capacite: { premiere: 24, seconde: 183 },
    trajets: [
      {
        nom: "Nancy → Saint-Dié-des-Vosges",
        dessertes: [
          { gare: "Nancy", heure: "06:20", arret: 5 },
          { gare: "Laneuveville-devant-Nancy", heure: "06:30", arret: 1 },
          { gare: "Rosieres-Aux-Salines", heure: "06:40", arret: 1 },
          { gare: "Blainville - Damelevières", heure: "06:45", arret: 1 },
          { gare: "Lunéville", heure: "06:53", arret: 2 },
          { gare: "Saint-Clément - Laronxe", heure: "07:06", arret: 1 },
          { gare: "Azerailles", heure: "07:15", arret: 1 },
          { gare: "Baccarat", heure: "07:22", arret: 1 },
          { gare: "Raon-l'Etape", heure: "07:32", arret: 1 },
          { gare: "Étival-Clairefontaine", heure: "07:38", arret: 1 },
          { gare: "Saint-Michel-sur-Meurthe", heure: "07:43", arret: 1 },
          { gare: "Saint-Dié-des-Vosges", heure: "07:51", arret: 4 }
        ]
      },
      {
        nom: "Saint-Dié-des-Vosges → Nancy",
        dessertes: [
          { gare: "Saint-Dié-des-Vosges", heure: "09:20", arret: 4 },
          { gare: "Saint-Michel-sur-Meurthe", heure: "09:31", arret: 1 },
          { gare: "Étival-Clairefontaine", heure: "09:36", arret: 1 },
          { gare: "Raon-l'Etape", heure: "09:42", arret: 1 },
          { gare: "Baccarat", heure: "09:52", arret: 1 },
          { gare: "Azerailles", heure: "09:59", arret: 1 },
          { gare: "Saint-Clément - Laronxe", heure: "10:08", arret: 1 },
          { gare: "Lunéville", heure: "10:20", arret: 2 },
          { gare: "Blainville - Damelevières", heure: "10:29", arret: 1 },
          { gare: "Rosieres-Aux-Salines", heure: "10:34", arret: 1 },
          { gare: "Laneuveville-devant-Nancy", heure: "10:44", arret: 1 },
          { gare: "Nancy", heure: "10:50", arret: 5 }
        ]
      },
      {
        nom: "Nancy → Saint-Dié-des-Vosges",
        dessertes: [
          { gare: "Nancy", heure: "11:20", arret: 5 },
          { gare: "Laneuveville-devant-Nancy", heure: "11:30", arret: 1 },
          { gare: "Rosieres-Aux-Salines", heure: "11:40", arret: 1 },
          { gare: "Blainville - Damelevières", heure: "11:45", arret: 1 },
          { gare: "Lunéville", heure: "11:53", arret: 2 },
          { gare: "Saint-Clément - Laronxe", heure: "12:06", arret: 1 },
          { gare: "Azerailles", heure: "12:15", arret: 1 },
          { gare: "Baccarat", heure: "12:22", arret: 1 },
          { gare: "Raon-l'Etape", heure: "12:32", arret: 1 },
          { gare: "Étival-Clairefontaine", heure: "12:38", arret: 1 },
          { gare: "Saint-Michel-sur-Meurthe", heure: "12:43", arret: 1 },
          { gare: "Saint-Dié-des-Vosges", heure: "12:51", arret: 4 }
        ]
      },
      {
        nom: "Saint-Dié-des-Vosges → Nancy",
        dessertes: [
          { gare: "Saint-Dié-des-Vosges", heure: "13:25", arret: 4 },
          { gare: "Saint-Michel-sur-Meurthe", heure: "13:36", arret: 1 },
          { gare: "Étival-Clairefontaine", heure: "13:41", arret: 1 },
          { gare: "Raon-l'Etape", heure: "13:47", arret: 1 },
          { gare: "Baccarat", heure: "13:57", arret: 1 },
          { gare: "Azerailles", heure: "14:04", arret: 1 },
          { gare: "Saint-Clément - Laronxe", heure: "14:13", arret: 1 },
          { gare: "Lunéville", heure: "14:25", arret: 2 },
          { gare: "Blainville - Damelevières", heure: "14:34", arret: 1 },
          { gare: "Rosieres-Aux-Salines", heure: "14:39", arret: 1 },
          { gare: "Laneuveville-devant-Nancy", heure: "14:49", arret: 1 },
          { gare: "Nancy", heure: "14:55", arret: 5 }
        ]
      },
      {
        nom: "Nancy → Saint-Dié-des-Vosges",
        dessertes: [
          { gare: "Nancy", heure: "15:25", arret: 5 },
          { gare: "Laneuveville-devant-Nancy", heure: "15:35", arret: 1 },
          { gare: "Rosieres-Aux-Salines", heure: "15:45", arret: 1 },
          { gare: "Blainville - Damelevières", heure: "15:50", arret: 1 },
          { gare: "Lunéville", heure: "15:58", arret: 2 },
          { gare: "Saint-Clément - Laronxe", heure: "16:11", arret: 1 },
          { gare: "Azerailles", heure: "16:20", arret: 1 },
          { gare: "Baccarat", heure: "16:27", arret: 1 },
          { gare: "Raon-l'Etape", heure: "16:37", arret: 1 },
          { gare: "Étival-Clairefontaine", heure: "16:43", arret: 1 },
          { gare: "Saint-Michel-sur-Meurthe", heure: "16:48", arret: 1 },
          { gare: "Saint-Dié-des-Vosges", heure: "16:56", arret: 4 }
        ]
      },
      {
        nom: "Saint-Dié-des-Vosges → Nancy",
        dessertes: [
          { gare: "Saint-Dié-des-Vosges", heure: "17:25", arret: 4 },
          { gare: "Saint-Michel-sur-Meurthe", heure: "17:36", arret: 1 },
          { gare: "Étival-Clairefontaine", heure: "17:41", arret: 1 },
          { gare: "Raon-l'Etape", heure: "17:47", arret: 1 },
          { gare: "Baccarat", heure: "17:57", arret: 1 },
          { gare: "Azerailles", heure: "18:04", arret: 1 },
          { gare: "Saint-Clément - Laronxe", heure: "18:13", arret: 1 },
          { gare: "Lunéville", heure: "18:25", arret: 2 },
          { gare: "Blainville - Damelevières", heure: "18:34", arret: 1 },
          { gare: "Rosieres-Aux-Salines", heure: "18:39", arret: 1 },
          { gare: "Laneuveville-devant-Nancy", heure: "18:49", arret: 1 },
          { gare: "Nancy", heure: "18:55", arret: 5 }
        ]
      },
      {
        nom: "Nancy → Saint-Dié-des-Vosges",
        dessertes: [
          { gare: "Nancy", heure: "19:25", arret: 5 },
          { gare: "Laneuveville-devant-Nancy", heure: "19:35", arret: 1 },
          { gare: "Rosieres-Aux-Salines", heure: "19:45", arret: 1 },
          { gare: "Blainville - Damelevières", heure: "19:50", arret: 1 },
          { gare: "Lunéville", heure: "19:58", arret: 2 },
          { gare: "Saint-Clément - Laronxe", heure: "20:11", arret: 1 },
          { gare: "Azerailles", heure: "20:20", arret: 1 },
          { gare: "Baccarat", heure: "20:27", arret: 1 },
          { gare: "Raon-l'Etape", heure: "20:37", arret: 1 },
          { gare: "Étival-Clairefontaine", heure: "20:43", arret: 1 },
          { gare: "Saint-Michel-sur-Meurthe", heure: "20:48", arret: 1 },
          { gare: "Saint-Dié-des-Vosges", heure: "20:56", arret: 4 }
        ]
      },
      {
        nom: "Saint-Dié-des-Vosges → Nancy",
        dessertes: [
          { gare: "Saint-Dié-des-Vosges", heure: "21:25", arret: 4 },
          { gare: "Saint-Michel-sur-Meurthe", heure: "21:36", arret: 1 },
          { gare: "Étival-Clairefontaine", heure: "21:41", arret: 1 },
          { gare: "Raon-l'Etape", heure: "21:47", arret: 1 },
          { gare: "Baccarat", heure: "21:57", arret: 1 },
          { gare: "Azerailles", heure: "22:04", arret: 1 },
          { gare: "Saint-Clément - Laronxe", heure: "22:13", arret: 1 },
          { gare: "Lunéville", heure: "22:25", arret: 2 },
          { gare: "Blainville - Damelevières", heure: "22:34", arret: 1 },
          { gare: "Rosieres-Aux-Salines", heure: "22:39", arret: 1 },
          { gare: "Laneuveville-devant-Nancy", heure: "22:49", arret: 1 },
          { gare: "Nancy", heure: "22:55", arret: 5 }
        ]
      }
    ]
  },

  {
    id: "TER 3001",
    nom: "Regiolis blueFluoEurope 4C",
    moteurs: ["25kV CA", "1.5kV CC", "diesel"],
    vitesseMax: 160,
    capacite: { premiere: 24, seconde: 210 },
    trajets: [
      {
        nom: "Kruth → Mulhouse",
        dessertes: [
          { gare: "Kruth", heure: "06:45", arret: 1 },
          { gare: "Oderen", heure: "06:49", arret: 1 },
          { gare: "Wesserling", heure: "06:55", arret: 1 },
          { gare: "Saint-Amarin", heure: "07:01", arret: 1 },
          { gare: "Willer-sur-Thur", heure: "07:10", arret: 1 },
          { gare: "Bitschwiller-lès-Thann", heure: "07:14", arret: 1 },
          { gare: "Thann Gare", heure: "07:20", arret: 1 },
          { gare: "Cernay", heure: "07:30", arret: 1 },
          { gare: "Graffenwald", heure: "07:36", arret: 1 },
          { gare: "Lutterbach", heure: "07:42", arret: 1 },
          { gare: "Mulhouse Dornach", heure: "07:46", arret: 1 },
          { gare: "Mulhouse", heure: "07:52", arret: 1 }
        ]
      },
      {
        nom: "Mulhouse → Kruth",
        dessertes: [
          { gare: "Mulhouse", heure: "08:35", arret: 1 },
          { gare: "Mulhouse Dornach", heure: "08:41", arret: 1 },
          { gare: "Lutterbach", heure: "08:45", arret: 1 },
          { gare: "Graffenwald", heure: "08:51", arret: 1 },
          { gare: "Cernay", heure: "08:57", arret: 1 },
          { gare: "Thann Gare", heure: "09:07", arret: 1 },
          { gare: "Bitschwiller-lès-Thann", heure: "09:13", arret: 1 },
          { gare: "Willer-sur-Thur", heure: "09:17", arret: 1 },
          { gare: "Saint-Amarin", heure: "09:26", arret: 1 },
          { gare: "Wesserling", heure: "09:32", arret: 1 },
          { gare: "Oderen", heure: "09:38", arret: 1 },
          { gare: "Kruth", heure: "09:42", arret: 1 }
        ]
      },
      {
        nom: "Kruth → Mulhouse",
        dessertes: [
          { gare: "Kruth", heure: "10:45", arret: 1 },
          { gare: "Oderen", heure: "10:49", arret: 1 },
          { gare: "Wesserling", heure: "10:55", arret: 1 },
          { gare: "Saint-Amarin", heure: "11:01", arret: 1 },
          { gare: "Willer-sur-Thur", heure: "11:10", arret: 1 },
          { gare: "Bitschwiller-lès-Thann", heure: "11:14", arret: 1 },
          { gare: "Thann Gare", heure: "11:20", arret: 1 },
          { gare: "Cernay", heure: "11:30", arret: 1 },
          { gare: "Graffenwald", heure: "11:36", arret: 1 },
          { gare: "Lutterbach", heure: "11:42", arret: 1 },
          { gare: "Mulhouse Dornach", heure: "11:46", arret: 1 },
          { gare: "Mulhouse", heure: "11:52", arret: 1 }
        ]
      },
      {
        nom: "Mulhouse → Kruth",
        dessertes: [
          { gare: "Mulhouse", heure: "12:35", arret: 1 },
          { gare: "Mulhouse Dornach", heure: "12:41", arret: 1 },
          { gare: "Lutterbach", heure: "12:45", arret: 1 },
          { gare: "Graffenwald", heure: "12:51", arret: 1 },
          { gare: "Cernay", heure: "12:57", arret: 1 },
          { gare: "Thann Gare", heure: "13:07", arret: 1 },
          { gare: "Bitschwiller-lès-Thann", heure: "13:13", arret: 1 },
          { gare: "Willer-sur-Thur", heure: "13:17", arret: 1 },
          { gare: "Saint-Amarin", heure: "13:26", arret: 1 },
          { gare: "Wesserling", heure: "13:32", arret: 1 },
          { gare: "Oderen", heure: "13:38", arret: 1 },
          { gare: "Kruth", heure: "13:42", arret: 1 }
        ]
      },
      {
        nom: "Kruth → Mulhouse",
        dessertes: [
          { gare: "Kruth", heure: "14:45", arret: 1 },
          { gare: "Oderen", heure: "14:49", arret: 1 },
          { gare: "Wesserling", heure: "14:55", arret: 1 },
          { gare: "Saint-Amarin", heure: "15:01", arret: 1 },
          { gare: "Willer-sur-Thur", heure: "15:10", arret: 1 },
          { gare: "Bitschwiller-lès-Thann", heure: "15:14", arret: 1 },
          { gare: "Thann Gare", heure: "15:20", arret: 1 },
          { gare: "Cernay", heure: "15:30", arret: 1 },
          { gare: "Graffenwald", heure: "15:36", arret: 1 },
          { gare: "Lutterbach", heure: "15:42", arret: 1 },
          { gare: "Mulhouse Dornach", heure: "15:46", arret: 1 },
          { gare: "Mulhouse", heure: "15:52", arret: 1 }
        ]
      },
      {
        nom: "Mulhouse → Kruth",
        dessertes: [
          { gare: "Mulhouse", heure: "16:35", arret: 1 },
          { gare: "Mulhouse Dornach", heure: "16:41", arret: 1 },
          { gare: "Lutterbach", heure: "16:45", arret: 1 },
          { gare: "Graffenwald", heure: "16:51", arret: 1 },
          { gare: "Cernay", heure: "16:57", arret: 1 },
          { gare: "Thann Gare", heure: "17:07", arret: 1 },
          { gare: "Bitschwiller-lès-Thann", heure: "17:13", arret: 1 },
          { gare: "Willer-sur-Thur", heure: "17:17", arret: 1 },
          { gare: "Saint-Amarin", heure: "17:26", arret: 1 },
          { gare: "Wesserling", heure: "17:32", arret: 1 },
          { gare: "Oderen", heure: "17:38", arret: 1 },
          { gare: "Kruth", heure: "17:42", arret: 1 }
        ]
      },
      {
        nom: "Kruth → Mulhouse",
        dessertes: [
          { gare: "Kruth", heure: "18:45", arret: 1 },
          { gare: "Oderen", heure: "18:49", arret: 1 },
          { gare: "Wesserling", heure: "18:55", arret: 1 },
          { gare: "Saint-Amarin", heure: "19:01", arret: 1 },
          { gare: "Willer-sur-Thur", heure: "19:10", arret: 1 },
          { gare: "Bitschwiller-lès-Thann", heure: "19:14", arret: 1 },
          { gare: "Thann Gare", heure: "19:20", arret: 1 },
          { gare: "Cernay", heure: "19:30", arret: 1 },
          { gare: "Graffenwald", heure: "19:36", arret: 1 },
          { gare: "Lutterbach", heure: "19:42", arret: 1 },
          { gare: "Mulhouse Dornach", heure: "19:46", arret: 1 },
          { gare: "Mulhouse", heure: "19:52", arret: 1 }
        ]
      },
      {
        nom: "Mulhouse → Kruth",
        dessertes: [
          { gare: "Mulhouse", heure: "20:35", arret: 1 },
          { gare: "Mulhouse Dornach", heure: "20:41", arret: 1 },
          { gare: "Lutterbach", heure: "20:45", arret: 1 },
          { gare: "Graffenwald", heure: "20:51", arret: 1 },
          { gare: "Cernay", heure: "20:57", arret: 1 },
          { gare: "Thann Gare", heure: "21:07", arret: 1 },
          { gare: "Bitschwiller-lès-Thann", heure: "21:13", arret: 1 },
          { gare: "Willer-sur-Thur", heure: "21:17", arret: 1 },
          { gare: "Saint-Amarin", heure: "21:26", arret: 1 },
          { gare: "Wesserling", heure: "21:32", arret: 1 },
          { gare: "Oderen", heure: "21:38", arret: 1 },
          { gare: "Kruth", heure: "21:42", arret: 1 }
        ]
      }
    ]
  },

  {
    id: "TER 3002",
    nom: "X73900 TER Alsace",
    moteurs: ["diesel"],
    vitesseMax: 140,
    capacite: { premiere: 0, seconde: 122 },
    composition: ["X73900 TER Alsace"],
    trajets: [
      {
        nom: "Mulhouse → Kruth",
        dessertes: [
          { gare: "Mulhouse", heure: "06:32", arret: 4 },
          { gare: "Mulhouse Dornach", heure: "06:41", arret: 1 },
          { gare: "Lutterbach", heure: "06:45", arret: 1 },
          { gare: "Graffenwald", heure: "06:52", arret: 1 },
          { gare: "Cernay", heure: "06:59", arret: 1 },
          { gare: "Thann Gare", heure: "07:10", arret: 2 },
          { gare: "Bitschwiller-lès-Thann", heure: "07:17", arret: 1 },
          { gare: "Willer-sur-Thur", heure: "07:21", arret: 1 },
          { gare: "Saint-Amarin", heure: "07:30", arret: 1 },
          { gare: "Wesserling", heure: "07:36", arret: 1 },
          { gare: "Oderen", heure: "07:42", arret: 1 },
          { gare: "Kruth", heure: "07:46", arret: 2 }
        ]
      },
      {
        nom: "Kruth → Mulhouse",
        dessertes: [
          { gare: "Kruth", heure: "08:44", arret: 2 },
          { gare: "Oderen", heure: "08:49", arret: 1 },
          { gare: "Wesserling", heure: "08:55", arret: 1 },
          { gare: "Saint-Amarin", heure: "09:01", arret: 1 },
          { gare: "Willer-sur-Thur", heure: "09:10", arret: 1 },
          { gare: "Bitschwiller-lès-Thann", heure: "09:14", arret: 1 },
          { gare: "Thann Gare", heure: "09:20", arret: 2 },
          { gare: "Cernay", heure: "09:32", arret: 1 },
          { gare: "Graffenwald", heure: "09:39", arret: 1 },
          { gare: "Lutterbach", heure: "09:46", arret: 1 },
          { gare: "Mulhouse Dornach", heure: "09:50", arret: 1 },
          { gare: "Mulhouse", heure: "09:56", arret: 4 }
        ]
      },
      {
        nom: "Mulhouse → Kruth",
        dessertes: [
          { gare: "Mulhouse", heure: "10:32", arret: 4 },
          { gare: "Mulhouse Dornach", heure: "10:41", arret: 1 },
          { gare: "Lutterbach", heure: "10:45", arret: 1 },
          { gare: "Graffenwald", heure: "10:52", arret: 1 },
          { gare: "Cernay", heure: "10:59", arret: 1 },
          { gare: "Thann Gare", heure: "11:10", arret: 2 },
          { gare: "Bitschwiller-lès-Thann", heure: "11:17", arret: 1 },
          { gare: "Willer-sur-Thur", heure: "11:21", arret: 1 },
          { gare: "Saint-Amarin", heure: "11:30", arret: 1 },
          { gare: "Wesserling", heure: "11:36", arret: 1 },
          { gare: "Oderen", heure: "11:42", arret: 1 },
          { gare: "Kruth", heure: "11:46", arret: 2 }
        ]
      },
      {
        nom: "Kruth → Mulhouse",
        dessertes: [
          { gare: "Kruth", heure: "12:44", arret: 2 },
          { gare: "Oderen", heure: "12:49", arret: 1 },
          { gare: "Wesserling", heure: "12:55", arret: 1 },
          { gare: "Saint-Amarin", heure: "13:01", arret: 1 },
          { gare: "Willer-sur-Thur", heure: "13:10", arret: 1 },
          { gare: "Bitschwiller-lès-Thann", heure: "13:14", arret: 1 },
          { gare: "Thann Gare", heure: "13:20", arret: 2 },
          { gare: "Cernay", heure: "13:32", arret: 1 },
          { gare: "Graffenwald", heure: "13:39", arret: 1 },
          { gare: "Lutterbach", heure: "13:46", arret: 1 },
          { gare: "Mulhouse Dornach", heure: "13:50", arret: 1 },
          { gare: "Mulhouse", heure: "13:56", arret: 4 }
        ]
      },
      {
        nom: "Mulhouse → Kruth",
        dessertes: [
          { gare: "Mulhouse", heure: "14:32", arret: 4 },
          { gare: "Mulhouse Dornach", heure: "14:41", arret: 1 },
          { gare: "Lutterbach", heure: "14:45", arret: 1 },
          { gare: "Graffenwald", heure: "14:52", arret: 1 },
          { gare: "Cernay", heure: "14:59", arret: 1 },
          { gare: "Thann Gare", heure: "15:10", arret: 2 },
          { gare: "Bitschwiller-lès-Thann", heure: "15:17", arret: 1 },
          { gare: "Willer-sur-Thur", heure: "15:21", arret: 1 },
          { gare: "Saint-Amarin", heure: "15:30", arret: 1 },
          { gare: "Wesserling", heure: "15:36", arret: 1 },
          { gare: "Oderen", heure: "15:42", arret: 1 },
          { gare: "Kruth", heure: "15:46", arret: 2 }
        ]
      },
      {
        nom: "Kruth → Mulhouse",
        dessertes: [
          { gare: "Kruth", heure: "16:44", arret: 2 },
          { gare: "Oderen", heure: "16:49", arret: 1 },
          { gare: "Wesserling", heure: "16:55", arret: 1 },
          { gare: "Saint-Amarin", heure: "17:01", arret: 1 },
          { gare: "Willer-sur-Thur", heure: "17:10", arret: 1 },
          { gare: "Bitschwiller-lès-Thann", heure: "17:14", arret: 1 },
          { gare: "Thann Gare", heure: "17:20", arret: 2 },
          { gare: "Cernay", heure: "17:32", arret: 1 },
          { gare: "Graffenwald", heure: "17:39", arret: 1 },
          { gare: "Lutterbach", heure: "17:46", arret: 1 },
          { gare: "Mulhouse Dornach", heure: "17:50", arret: 1 },
          { gare: "Mulhouse", heure: "17:56", arret: 4 }
        ]
      },
      {
        nom: "Mulhouse → Kruth",
        dessertes: [
          { gare: "Mulhouse", heure: "18:32", arret: 4 },
          { gare: "Mulhouse Dornach", heure: "18:41", arret: 1 },
          { gare: "Lutterbach", heure: "18:45", arret: 1 },
          { gare: "Graffenwald", heure: "18:52", arret: 1 },
          { gare: "Cernay", heure: "18:59", arret: 1 },
          { gare: "Thann Gare", heure: "19:10", arret: 2 },
          { gare: "Bitschwiller-lès-Thann", heure: "19:17", arret: 1 },
          { gare: "Willer-sur-Thur", heure: "19:21", arret: 1 },
          { gare: "Saint-Amarin", heure: "19:30", arret: 1 },
          { gare: "Wesserling", heure: "19:36", arret: 1 },
          { gare: "Oderen", heure: "19:42", arret: 1 },
          { gare: "Kruth", heure: "19:46", arret: 2 }
        ]
      },
      {
        nom: "Kruth → Mulhouse",
        dessertes: [
          { gare: "Kruth", heure: "20:44", arret: 2 },
          { gare: "Oderen", heure: "20:49", arret: 1 },
          { gare: "Wesserling", heure: "20:55", arret: 1 },
          { gare: "Saint-Amarin", heure: "21:01", arret: 1 },
          { gare: "Willer-sur-Thur", heure: "21:10", arret: 1 },
          { gare: "Bitschwiller-lès-Thann", heure: "21:14", arret: 1 },
          { gare: "Thann Gare", heure: "21:20", arret: 2 },
          { gare: "Cernay", heure: "21:32", arret: 1 },
          { gare: "Graffenwald", heure: "21:39", arret: 1 },
          { gare: "Lutterbach", heure: "21:46", arret: 1 },
          { gare: "Mulhouse Dornach", heure: "21:50", arret: 1 },
          { gare: "Mulhouse", heure: "21:56", arret: 4 }
        ]
      }
    ]
  },

  {
    id: "TER 3005",
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
          { gare: "Munster", heure: "07:12", arret: 2 },
          { gare: "Wihr-au-Val - Soultzbach", heure: "07:24", arret: 1 },
          { gare: "Turckheim", heure: "07:36", arret: 1 },
          { gare: "Logelbach", heure: "07:43", arret: 1 },
          { gare: "Colmar", heure: "07:48", arret: 2 }
        ]
      },
      {
        nom: "Colmar → Metzeral",
        dessertes: [
          { gare: "Colmar", heure: "08:30", arret: 2 },
          { gare: "Logelbach", heure: "08:36", arret: 1 },
          { gare: "Turckheim", heure: "08:43", arret: 1 },
          { gare: "Wihr-au-Val - Soultzbach", heure: "08:55", arret: 1 },
          { gare: "Munster", heure: "09:06", arret: 2 },
          { gare: "Muhlbach-sur-Munster", heure: "09:15", arret: 1 },
          { gare: "Metzeral", heure: "09:19", arret: 1 }
        ]
      },
      {
        nom: "Metzeral → Colmar",
        dessertes: [
          { gare: "Metzeral", heure: "10:00", arret: 1 },
          { gare: "Muhlbach-sur-Munster", heure: "10:04", arret: 1 },
          { gare: "Munster", heure: "10:12", arret: 2 },
          { gare: "Wihr-au-Val - Soultzbach", heure: "10:24", arret: 1 },
          { gare: "Turckheim", heure: "10:36", arret: 1 },
          { gare: "Logelbach", heure: "10:43", arret: 1 },
          { gare: "Colmar", heure: "10:48", arret: 2 }
        ]
      },
      {
        nom: "Colmar → Metzeral",
        dessertes: [
          { gare: "Colmar", heure: "11:30", arret: 2 },
          { gare: "Logelbach", heure: "11:36", arret: 1 },
          { gare: "Turckheim", heure: "11:43", arret: 1 },
          { gare: "Wihr-au-Val - Soultzbach", heure: "11:55", arret: 1 },
          { gare: "Munster", heure: "12:06", arret: 2 },
          { gare: "Muhlbach-sur-Munster", heure: "12:15", arret: 1 },
          { gare: "Metzeral", heure: "12:19", arret: 1 }
        ]
      },
      {
        nom: "Metzeral → Colmar",
        dessertes: [
          { gare: "Metzeral", heure: "13:00", arret: 1 },
          { gare: "Muhlbach-sur-Munster", heure: "13:04", arret: 1 },
          { gare: "Munster", heure: "13:12", arret: 2 },
          { gare: "Wihr-au-Val - Soultzbach", heure: "13:24", arret: 1 },
          { gare: "Turckheim", heure: "13:36", arret: 1 },
          { gare: "Logelbach", heure: "13:43", arret: 1 },
          { gare: "Colmar", heure: "13:48", arret: 2 }
        ]
      },
      {
        nom: "Colmar → Metzeral",
        dessertes: [
          { gare: "Colmar", heure: "14:30", arret: 2 },
          { gare: "Logelbach", heure: "14:36", arret: 1 },
          { gare: "Turckheim", heure: "14:43", arret: 1 },
          { gare: "Wihr-au-Val - Soultzbach", heure: "14:55", arret: 1 },
          { gare: "Munster", heure: "15:06", arret: 2 },
          { gare: "Muhlbach-sur-Munster", heure: "15:15", arret: 1 },
          { gare: "Metzeral", heure: "15:19", arret: 1 }
        ]
      },
      {
        nom: "Metzeral → Colmar",
        dessertes: [
          { gare: "Metzeral", heure: "16:00", arret: 1 },
          { gare: "Muhlbach-sur-Munster", heure: "16:04", arret: 1 },
          { gare: "Munster", heure: "16:12", arret: 2 },
          { gare: "Wihr-au-Val - Soultzbach", heure: "16:24", arret: 1 },
          { gare: "Turckheim", heure: "16:36", arret: 1 },
          { gare: "Logelbach", heure: "16:43", arret: 1 },
          { gare: "Colmar", heure: "16:48", arret: 2 }
        ]
      },
      {
        nom: "Colmar → Metzeral",
        dessertes: [
          { gare: "Colmar", heure: "17:30", arret: 2 },
          { gare: "Logelbach", heure: "17:36", arret: 1 },
          { gare: "Turckheim", heure: "17:43", arret: 1 },
          { gare: "Wihr-au-Val - Soultzbach", heure: "17:55", arret: 1 },
          { gare: "Munster", heure: "18:06", arret: 2 },
          { gare: "Muhlbach-sur-Munster", heure: "18:15", arret: 1 },
          { gare: "Metzeral", heure: "18:19", arret: 1 }
        ]
      },
      {
        nom: "Metzeral → Colmar",
        dessertes: [
          { gare: "Metzeral", heure: "19:00", arret: 1 },
          { gare: "Muhlbach-sur-Munster", heure: "19:04", arret: 1 },
          { gare: "Munster", heure: "19:12", arret: 2 },
          { gare: "Wihr-au-Val - Soultzbach", heure: "19:24", arret: 1 },
          { gare: "Turckheim", heure: "19:36", arret: 1 },
          { gare: "Logelbach", heure: "19:43", arret: 1 },
          { gare: "Colmar", heure: "19:48", arret: 2 }
        ]
      },
      {
        nom: "Colmar → Metzeral",
        dessertes: [
          { gare: "Colmar", heure: "20:30", arret: 2 },
          { gare: "Logelbach", heure: "20:36", arret: 1 },
          { gare: "Turckheim", heure: "20:43", arret: 1 },
          { gare: "Wihr-au-Val - Soultzbach", heure: "20:55", arret: 1 },
          { gare: "Munster", heure: "21:06", arret: 2 },
          { gare: "Muhlbach-sur-Munster", heure: "21:15", arret: 1 },
          { gare: "Metzeral", heure: "21:19", arret: 1 }
        ]
      }
    ]
  },

  {
    id: "TER 3006",
    nom: "X73900 TER Alsace",
    moteurs: ["diesel"],
    vitesseMax: 140,
    capacite: { premiere: 0, seconde: 61 },
    trajets: [
      {
        nom: "Colmar → Metzeral",
        dessertes: [
          { gare: "Colmar", heure: "07:00", arret: 2, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Logelbach", heure: "07:06", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Turckheim", heure: "07:13", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Wihr-au-Val - Soultzbach", heure: "07:25", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Munster", heure: "07:36", arret: 2, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Muhlbach-sur-Munster", heure: "07:45", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Metzeral", heure: "07:49", arret: 2, jours: ["LU", "MA", "ME", "JE", "VE"] }
        ]
      },
      {
        nom: "Metzeral → Colmar",
        dessertes: [
          { gare: "Metzeral", heure: "08:30", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Muhlbach-sur-Munster", heure: "08:34", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Munster", heure: "08:42", arret: 2, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Wihr-au-Val - Soultzbach", heure: "08:54", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Turckheim", heure: "09:06", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Logelbach", heure: "09:13", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Colmar", heure: "09:18", arret: 2, jours: ["LU", "MA", "ME", "JE", "VE"] }
        ]
      },
      {
        nom: "Colmar → Metzeral",
        dessertes: [
          { gare: "Colmar", heure: "10:00", arret: 2, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Logelbach", heure: "10:06", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Turckheim", heure: "10:13", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Wihr-au-Val - Soultzbach", heure: "10:25", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Munster", heure: "10:36", arret: 2, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Muhlbach-sur-Munster", heure: "10:45", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Metzeral", heure: "10:49", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] }
        ]
      },
      {
        nom: "Metzeral → Colmar",
        dessertes: [
          { gare: "Metzeral", heure: "11:30", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Muhlbach-sur-Munster", heure: "11:34", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Munster", heure: "11:42", arret: 2, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Wihr-au-Val - Soultzbach", heure: "11:54", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Turckheim", heure: "12:06", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Logelbach", heure: "12:13", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Colmar", heure: "12:18", arret: 2, jours: ["LU", "MA", "ME", "JE", "VE"] }
        ]
      },
      {
        nom: "Colmar → Metzeral",
        dessertes: [
          { gare: "Colmar", heure: "13:00", arret: 2, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Logelbach", heure: "13:06", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Turckheim", heure: "13:13", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Wihr-au-Val - Soultzbach", heure: "13:25", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Munster", heure: "13:36", arret: 2, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Muhlbach-sur-Munster", heure: "13:45", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Metzeral", heure: "13:49", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] }
        ]
      },
      {
        nom: "Metzeral → Colmar",
        dessertes: [
          { gare: "Metzeral", heure: "14:30", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Muhlbach-sur-Munster", heure: "14:34", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Munster", heure: "14:42", arret: 2, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Wihr-au-Val - Soultzbach", heure: "14:54", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Turckheim", heure: "15:06", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Logelbach", heure: "15:13", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Colmar", heure: "15:18", arret: 2, jours: ["LU", "MA", "ME", "JE", "VE"] }
        ]
      },
      {
        nom: "Colmar → Metzeral",
        dessertes: [
          { gare: "Colmar", heure: "16:00", arret: 2, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Logelbach", heure: "16:06", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Turckheim", heure: "16:13", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Wihr-au-Val - Soultzbach", heure: "16:25", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Munster", heure: "16:36", arret: 2, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Muhlbach-sur-Munster", heure: "16:45", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Metzeral", heure: "16:49", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] }
        ]
      },
      {
        nom: "Metzeral → Colmar",
        dessertes: [
          { gare: "Metzeral", heure: "17:30", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Muhlbach-sur-Munster", heure: "17:34", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Munster", heure: "17:42", arret: 2, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Wihr-au-Val - Soultzbach", heure: "17:54", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Turckheim", heure: "18:06", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Logelbach", heure: "18:13", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Colmar", heure: "18:18", arret: 2, jours: ["LU", "MA", "ME", "JE", "VE"] }
        ]
      },
      {
        nom: "Colmar → Freiburg (Breisgau) Hauptbahnhof",
        dessertes: [
          { gare: "Colmar", heure: "08:00", arret: 5, jours: ["SA", "DI"] },
          { gare: "Sundhoffen", heure: "08:15", arret: 1, jours: ["SA", "DI"] },
          { gare: "Wolfgantzen", heure: "08:27", arret: 1, jours: ["SA", "DI"] },
          { gare: "Volgelsheim", heure: "08:34", arret: 1, jours: ["SA", "DI"] },
          { gare: "Breisach", heure: "08:42", arret: 2, jours: ["SA", "DI"] },
          { gare: "Gottenheim", heure: "09:00", arret: 1, jours: ["SA", "DI"] },
          { gare: "Freiburg (Breisgau) Hauptbahnhof", heure: "09:18", arret: 5, jours: ["SA", "DI"] }
        ]
      },
      {
        nom: "Freiburg (Breisgau) Hauptbahnhof → Colmar",
        dessertes: [
          { gare: "Freiburg (Breisgau) Hauptbahnhof", heure: "10:00", arret: 5, jours: ["SA", "DI"] },
          { gare: "Gottenheim", heure: "10:22", arret: 1, jours: ["SA", "DI"] },
          { gare: "Breisach", heure: "10:39", arret: 2, jours: ["SA", "DI"] },
          { gare: "Volgelsheim", heure: "10:48", arret: 1, jours: ["SA", "DI"] },
          { gare: "Wolfgantzen", heure: "10:55", arret: 1, jours: ["SA", "DI"] },
          { gare: "Sundhoffen", heure: "11:07", arret: 1, jours: ["SA", "DI"] },
          { gare: "Colmar", heure: "11:18", arret: 5, jours: ["SA", "DI"] }
        ]
      },
      {
        nom: "Colmar → Freiburg (Breisgau) Hauptbahnhof",
        dessertes: [
          { gare: "Colmar", heure: "12:00", arret: 5, jours: ["SA", "DI"] },
          { gare: "Sundhoffen", heure: "12:15", arret: 1, jours: ["SA", "DI"] },
          { gare: "Wolfgantzen", heure: "12:27", arret: 1, jours: ["SA", "DI"] },
          { gare: "Volgelsheim", heure: "12:34", arret: 1, jours: ["SA", "DI"] },
          { gare: "Breisach", heure: "12:42", arret: 2, jours: ["SA", "DI"] },
          { gare: "Gottenheim", heure: "13:00", arret: 1, jours: ["SA", "DI"] },
          { gare: "Freiburg (Breisgau) Hauptbahnhof", heure: "13:18", arret: 5, jours: ["SA", "DI"] }
        ]
      },
      {
        nom: "Freiburg (Breisgau) Hauptbahnhof → Colmar",
        dessertes: [
          { gare: "Freiburg (Breisgau) Hauptbahnhof", heure: "14:00", arret: 5, jours: ["SA", "DI"] },
          { gare: "Gottenheim", heure: "14:22", arret: 1, jours: ["SA", "DI"] },
          { gare: "Breisach", heure: "14:39", arret: 2, jours: ["SA", "DI"] },
          { gare: "Volgelsheim", heure: "14:48", arret: 1, jours: ["SA", "DI"] },
          { gare: "Wolfgantzen", heure: "14:55", arret: 1, jours: ["SA", "DI"] },
          { gare: "Sundhoffen", heure: "15:07", arret: 1, jours: ["SA", "DI"] },
          { gare: "Colmar", heure: "15:18", arret: 5, jours: ["SA", "DI"] }
        ]
      },
      {
        nom: "Colmar → Freiburg (Breisgau) Hauptbahnhof",
        dessertes: [
          { gare: "Colmar", heure: "16:00", arret: 5, jours: ["SA", "DI"] },
          { gare: "Sundhoffen", heure: "16:15", arret: 1, jours: ["SA", "DI"] },
          { gare: "Wolfgantzen", heure: "16:27", arret: 1, jours: ["SA", "DI"] },
          { gare: "Volgelsheim", heure: "16:34", arret: 1, jours: ["SA", "DI"] },
          { gare: "Breisach", heure: "16:42", arret: 2, jours: ["SA", "DI"] },
          { gare: "Gottenheim", heure: "17:00", arret: 1, jours: ["SA", "DI"] },
          { gare: "Freiburg (Breisgau) Hauptbahnhof", heure: "17:18", arret: 5, jours: ["SA", "DI"] }
        ]
      },
      {
        nom: "Freiburg (Breisgau) Hauptbahnhof → Colmar",
        dessertes: [
          { gare: "Freiburg (Breisgau) Hauptbahnhof", heure: "18:00", arret: 5, jours: ["SA", "DI"] },
          { gare: "Gottenheim", heure: "18:22", arret: 1, jours: ["SA", "DI"] },
          { gare: "Breisach", heure: "18:39", arret: 2, jours: ["SA", "DI"] },
          { gare: "Volgelsheim", heure: "18:48", arret: 1, jours: ["SA", "DI"] },
          { gare: "Wolfgantzen", heure: "18:55", arret: 1, jours: ["SA", "DI"] },
          { gare: "Sundhoffen", heure: "19:07", arret: 1, jours: ["SA", "DI"] },
          { gare: "Colmar", heure: "19:18", arret: 5, jours: ["SA", "DI"] }
        ]
      }
    ]
  },

  {
    id: "TER 3007",
    nom: "X73900 Grand Est",
    moteurs: ["diesel"],
    vitesseMax: 140,
    capacite: { premiere: 0, seconde: 61 },
    trajets: [
      {
        nom: "Colmar → Freiburg (Breisgau) Hauptbahnhof",
        dessertes: [
          { gare: "Colmar", heure: "08:00", arret: 5 },
          { gare: "Sundhoffen", heure: "08:15", arret: 1 },
          { gare: "Wolfgantzen", heure: "08:27", arret: 1 },
          { gare: "Volgelsheim", heure: "08:34", arret: 1 },
          { gare: "Breisach", heure: "08:42", arret: 2 },
          { gare: "Gottenheim", heure: "09:00", arret: 1 },
          { gare: "Freiburg (Breisgau) Hauptbahnhof", heure: "09:18", arret: 5 }
        ]
      },
      {
        nom: "Freiburg (Breisgau) Hauptbahnhof → Colmar",
        dessertes: [
          { gare: "Freiburg (Breisgau) Hauptbahnhof", heure: "10:00", arret: 5 },
          { gare: "Gottenheim", heure: "10:22", arret: 1 },
          { gare: "Breisach", heure: "10:39", arret: 2 },
          { gare: "Volgelsheim", heure: "10:48", arret: 1 },
          { gare: "Wolfgantzen", heure: "10:55", arret: 1 },
          { gare: "Sundhoffen", heure: "11:07", arret: 1 },
          { gare: "Colmar", heure: "11:18", arret: 5 }
        ]
      },
      {
        nom: "Colmar → Freiburg (Breisgau) Hauptbahnhof",
        dessertes: [
          { gare: "Colmar", heure: "12:00", arret: 5 },
          { gare: "Sundhoffen", heure: "12:15", arret: 1 },
          { gare: "Wolfgantzen", heure: "12:27", arret: 1 },
          { gare: "Volgelsheim", heure: "12:34", arret: 1 },
          { gare: "Breisach", heure: "12:42", arret: 2 },
          { gare: "Gottenheim", heure: "13:00", arret: 1 },
          { gare: "Freiburg (Breisgau) Hauptbahnhof", heure: "13:18", arret: 5 }
        ]
      },
      {
        nom: "Freiburg (Breisgau) Hauptbahnhof → Colmar",
        dessertes: [
          { gare: "Freiburg (Breisgau) Hauptbahnhof", heure: "14:00", arret: 5 },
          { gare: "Gottenheim", heure: "14:22", arret: 1 },
          { gare: "Breisach", heure: "14:39", arret: 2 },
          { gare: "Volgelsheim", heure: "14:48", arret: 1 },
          { gare: "Wolfgantzen", heure: "14:55", arret: 1 },
          { gare: "Sundhoffen", heure: "15:07", arret: 1 },
          { gare: "Colmar", heure: "15:18", arret: 5 }
        ]
      },
      {
        nom: "Colmar → Freiburg (Breisgau) Hauptbahnhof",
        dessertes: [
          { gare: "Colmar", heure: "16:00", arret: 5 },
          { gare: "Sundhoffen", heure: "16:15", arret: 1 },
          { gare: "Wolfgantzen", heure: "16:27", arret: 1 },
          { gare: "Volgelsheim", heure: "16:34", arret: 1 },
          { gare: "Breisach", heure: "16:42", arret: 2 },
          { gare: "Gottenheim", heure: "17:00", arret: 1 },
          { gare: "Freiburg (Breisgau) Hauptbahnhof", heure: "17:18", arret: 5 }
        ]
      },
      {
        nom: "Freiburg (Breisgau) Hauptbahnhof → Colmar",
        dessertes: [
          { gare: "Freiburg (Breisgau) Hauptbahnhof", heure: "18:00", arret: 5 },
          { gare: "Gottenheim", heure: "18:22", arret: 1 },
          { gare: "Breisach", heure: "18:39", arret: 2 },
          { gare: "Volgelsheim", heure: "18:48", arret: 1 },
          { gare: "Wolfgantzen", heure: "18:55", arret: 1 },
          { gare: "Sundhoffen", heure: "19:07", arret: 1 },
          { gare: "Colmar", heure: "19:18", arret: 5 }
        ]
      }
    ]
  },

  {
    id: "TER 3020",
    nom: "AGC blueAlsace 4C",
    moteurs: ["25kV CA", "1.5kV CC"],
    vitesseMax: 160,
    capacite: { premiere: 24, seconde: 183 },
    trajets: [
      {
        nom: "Mulhouse → Basel SBB",
        dessertes: [
          { gare: "Mulhouse", heure: "06:10", arret: 4 },
          { gare: "Habsheim", heure: "06:22", arret: 1 },
          { gare: "Sierentz", heure: "06:29", arret: 1 },
          { gare: "Bartenheim", heure: "06:33", arret: 1 },
          { gare: "Saint-Louis la Chaussée", heure: "06:38", arret: 1 },
          { gare: "Saint-Louis", heure: "06:41", arret: 2 },
          { gare: "Bâle Saint-Jean", heure: "06:45", arret: 1 },
          { gare: "Basel SBB", heure: "06:49", arret: 2 }
        ]
      },
      {
        nom: "Basel SBB → Mulhouse",
        dessertes: [
          { gare: "Basel SBB", heure: "07:19", arret: 2 },
          { gare: "Bâle Saint-Jean", heure: "07:24", arret: 1 },
          { gare: "Saint-Louis", heure: "07:27", arret: 2 },
          { gare: "Saint-Louis la Chaussée", heure: "07:31", arret: 1 },
          { gare: "Bartenheim", heure: "07:36", arret: 1 },
          { gare: "Sierentz", heure: "07:40", arret: 1 },
          { gare: "Habsheim", heure: "07:47", arret: 1 },
          { gare: "Mulhouse", heure: "07:56", arret: 4 }
        ]
      },
      {
        nom: "Mulhouse → Basel SBB",
        dessertes: [
          { gare: "Mulhouse", heure: "08:10", arret: 4 },
          { gare: "Habsheim", heure: "08:22", arret: 1 },
          { gare: "Sierentz", heure: "08:29", arret: 1 },
          { gare: "Bartenheim", heure: "08:33", arret: 1 },
          { gare: "Saint-Louis la Chaussée", heure: "08:38", arret: 1 },
          { gare: "Saint-Louis", heure: "08:41", arret: 2 },
          { gare: "Bâle Saint-Jean", heure: "08:45", arret: 1 },
          { gare: "Basel SBB", heure: "08:49", arret: 2 }
        ]
      },
      {
        nom: "Basel SBB → Mulhouse",
        dessertes: [
          { gare: "Basel SBB", heure: "09:19", arret: 2 },
          { gare: "Bâle Saint-Jean", heure: "09:24", arret: 1 },
          { gare: "Saint-Louis", heure: "09:27", arret: 2 },
          { gare: "Saint-Louis la Chaussée", heure: "09:31", arret: 1 },
          { gare: "Bartenheim", heure: "09:36", arret: 1 },
          { gare: "Sierentz", heure: "09:40", arret: 1 },
          { gare: "Habsheim", heure: "09:47", arret: 1 },
          { gare: "Mulhouse", heure: "09:56", arret: 4 }
        ]
      },
      {
        nom: "Mulhouse → Basel SBB",
        dessertes: [
          { gare: "Mulhouse", heure: "10:10", arret: 4 },
          { gare: "Habsheim", heure: "10:22", arret: 1 },
          { gare: "Sierentz", heure: "10:29", arret: 1 },
          { gare: "Bartenheim", heure: "10:33", arret: 1 },
          { gare: "Saint-Louis la Chaussée", heure: "10:38", arret: 1 },
          { gare: "Saint-Louis", heure: "10:41", arret: 2 },
          { gare: "Bâle Saint-Jean", heure: "10:45", arret: 1 },
          { gare: "Basel SBB", heure: "10:49", arret: 2 }
        ]
      },
      {
        nom: "Basel SBB → Mulhouse",
        dessertes: [
          { gare: "Basel SBB", heure: "11:19", arret: 2 },
          { gare: "Bâle Saint-Jean", heure: "11:24", arret: 1 },
          { gare: "Saint-Louis", heure: "11:27", arret: 2 },
          { gare: "Saint-Louis la Chaussée", heure: "11:31", arret: 1 },
          { gare: "Bartenheim", heure: "11:36", arret: 1 },
          { gare: "Sierentz", heure: "11:40", arret: 1 },
          { gare: "Habsheim", heure: "11:47", arret: 1 },
          { gare: "Mulhouse", heure: "11:56", arret: 4 }
        ]
      },
      {
        nom: "Mulhouse → Basel SBB",
        dessertes: [
          { gare: "Mulhouse", heure: "12:10", arret: 4 },
          { gare: "Habsheim", heure: "12:22", arret: 1 },
          { gare: "Sierentz", heure: "12:29", arret: 1 },
          { gare: "Bartenheim", heure: "12:33", arret: 1 },
          { gare: "Saint-Louis la Chaussée", heure: "12:38", arret: 1 },
          { gare: "Saint-Louis", heure: "12:41", arret: 2 },
          { gare: "Bâle Saint-Jean", heure: "12:45", arret: 1 },
          { gare: "Basel SBB", heure: "12:49", arret: 2 }
        ]
      },
      {
        nom: "Basel SBB → Mulhouse",
        dessertes: [
          { gare: "Basel SBB", heure: "13:19", arret: 2 },
          { gare: "Bâle Saint-Jean", heure: "13:24", arret: 1 },
          { gare: "Saint-Louis", heure: "13:27", arret: 2 },
          { gare: "Saint-Louis la Chaussée", heure: "13:31", arret: 1 },
          { gare: "Bartenheim", heure: "13:36", arret: 1 },
          { gare: "Sierentz", heure: "13:40", arret: 1 },
          { gare: "Habsheim", heure: "13:47", arret: 1 },
          { gare: "Mulhouse", heure: "13:56", arret: 4 }
        ]
      },
      {
        nom: "Mulhouse → Basel SBB",
        dessertes: [
          { gare: "Mulhouse", heure: "14:10", arret: 4 },
          { gare: "Habsheim", heure: "14:22", arret: 1 },
          { gare: "Sierentz", heure: "14:29", arret: 1 },
          { gare: "Bartenheim", heure: "14:33", arret: 1 },
          { gare: "Saint-Louis la Chaussée", heure: "14:38", arret: 1 },
          { gare: "Saint-Louis", heure: "14:41", arret: 2 },
          { gare: "Bâle Saint-Jean", heure: "14:45", arret: 1 },
          { gare: "Basel SBB", heure: "14:49", arret: 2 }
        ]
      },
      {
        nom: "Basel SBB → Mulhouse",
        dessertes: [
          { gare: "Basel SBB", heure: "15:19", arret: 2 },
          { gare: "Bâle Saint-Jean", heure: "15:24", arret: 1 },
          { gare: "Saint-Louis", heure: "15:27", arret: 2 },
          { gare: "Saint-Louis la Chaussée", heure: "15:31", arret: 1 },
          { gare: "Bartenheim", heure: "15:36", arret: 1 },
          { gare: "Sierentz", heure: "15:40", arret: 1 },
          { gare: "Habsheim", heure: "15:47", arret: 1 },
          { gare: "Mulhouse", heure: "15:56", arret: 4 }
        ]
      },
      {
        nom: "Mulhouse → Basel SBB",
        dessertes: [
          { gare: "Mulhouse", heure: "16:10", arret: 4 },
          { gare: "Habsheim", heure: "16:22", arret: 1 },
          { gare: "Sierentz", heure: "16:29", arret: 1 },
          { gare: "Bartenheim", heure: "16:33", arret: 1 },
          { gare: "Saint-Louis la Chaussée", heure: "16:38", arret: 1 },
          { gare: "Saint-Louis", heure: "16:41", arret: 2 },
          { gare: "Bâle Saint-Jean", heure: "16:45", arret: 1 },
          { gare: "Basel SBB", heure: "16:49", arret: 2 }
        ]
      },
      {
        nom: "Basel SBB → Mulhouse",
        dessertes: [
          { gare: "Basel SBB", heure: "17:19", arret: 2 },
          { gare: "Bâle Saint-Jean", heure: "17:24", arret: 1 },
          { gare: "Saint-Louis", heure: "17:27", arret: 2 },
          { gare: "Saint-Louis la Chaussée", heure: "17:31", arret: 1 },
          { gare: "Bartenheim", heure: "17:36", arret: 1 },
          { gare: "Sierentz", heure: "17:40", arret: 1 },
          { gare: "Habsheim", heure: "17:47", arret: 1 },
          { gare: "Mulhouse", heure: "17:56", arret: 4 }
        ]
      },
      {
        nom: "Mulhouse → Basel SBB",
        dessertes: [
          { gare: "Mulhouse", heure: "18:10", arret: 4 },
          { gare: "Habsheim", heure: "18:22", arret: 1 },
          { gare: "Sierentz", heure: "18:29", arret: 1 },
          { gare: "Bartenheim", heure: "18:33", arret: 1 },
          { gare: "Saint-Louis la Chaussée", heure: "18:38", arret: 1 },
          { gare: "Saint-Louis", heure: "18:41", arret: 2 },
          { gare: "Bâle Saint-Jean", heure: "18:45", arret: 1 },
          { gare: "Basel SBB", heure: "18:49", arret: 2 }
        ]
      },
      {
        nom: "Basel SBB → Mulhouse",
        dessertes: [
          { gare: "Basel SBB", heure: "19:19", arret: 2 },
          { gare: "Bâle Saint-Jean", heure: "19:24", arret: 1 },
          { gare: "Saint-Louis", heure: "19:27", arret: 2 },
          { gare: "Saint-Louis la Chaussée", heure: "19:31", arret: 1 },
          { gare: "Bartenheim", heure: "19:36", arret: 1 },
          { gare: "Sierentz", heure: "19:40", arret: 1 },
          { gare: "Habsheim", heure: "19:47", arret: 1 },
          { gare: "Mulhouse", heure: "19:56", arret: 4 }
        ]
      },
      {
        nom: "Mulhouse → Basel SBB",
        dessertes: [
          { gare: "Mulhouse", heure: "20:10", arret: 4 },
          { gare: "Habsheim", heure: "20:22", arret: 1 },
          { gare: "Sierentz", heure: "20:29", arret: 1 },
          { gare: "Bartenheim", heure: "20:33", arret: 1 },
          { gare: "Saint-Louis la Chaussée", heure: "20:38", arret: 1 },
          { gare: "Saint-Louis", heure: "20:41", arret: 2 },
          { gare: "Bâle Saint-Jean", heure: "20:45", arret: 1 },
          { gare: "Basel SBB", heure: "20:49", arret: 2 }
        ]
      },
      {
        nom: "Basel SBB → Mulhouse",
        dessertes: [
          { gare: "Basel SBB", heure: "21:19", arret: 2 },
          { gare: "Bâle Saint-Jean", heure: "21:24", arret: 1 },
          { gare: "Saint-Louis", heure: "21:27", arret: 2 },
          { gare: "Saint-Louis la Chaussée", heure: "21:31", arret: 1 },
          { gare: "Bartenheim", heure: "21:36", arret: 1 },
          { gare: "Sierentz", heure: "21:40", arret: 1 },
          { gare: "Habsheim", heure: "21:47", arret: 1 },
          { gare: "Mulhouse", heure: "21:56", arret: 4 }
        ]
      }
    ]
  },

  {
    id: "TER 3030",
    nom: "Regiolis fluoGrandEst 4C",
    moteurs: ["25kV CA", "1.5kV CC", "diesel"],
    vitesseMax: 160,
    capacite: { premiere: 24, seconde: 210 },
    trajets: [
      {
        nom: "Mulhouse → Colmar",
        dessertes: [
          { gare: "Mulhouse", heure: "07:38", arret: 2 },
          { gare: "Mulhouse Dornach", heure: "07:45", arret: 1 },
          { gare: "Staffelfelden", heure: "07:53", arret: 1 },
          { gare: "Bollwiller", heure: "07:56", arret: 1 },
          { gare: "Raedersheim", heure: "08:00", arret: 1 },
          { gare: "Merxheim", heure: "08:03", arret: 1 },
          { gare: "Rouffach", heure: "08:07", arret: 1 },
          { gare: "Herrlisheim-Près-Colmar", heure: "08:12", arret: 1 },
          { gare: "Colmar", heure: "08:17", arret: 2 }
        ]
      },
      {
        nom: "Colmar → Mulhouse",
        dessertes: [
          { gare: "Colmar", heure: "08:50", arret: 2 },
          { gare: "Herrlisheim-Près-Colmar", heure: "08:56", arret: 1 },
          { gare: "Rouffach", heure: "09:01", arret: 1 },
          { gare: "Merxheim", heure: "09:05", arret: 1 },
          { gare: "Raedersheim", heure: "09:08", arret: 1 },
          { gare: "Bollwiller", heure: "09:12", arret: 1 },
          { gare: "Staffelfelden", heure: "09:15", arret: 1 },
          { gare: "Mulhouse Dornach", heure: "09:23", arret: 1 },
          { gare: "Mulhouse", heure: "09:29", arret: 2 }
        ]
      },
      {
        nom: "Mulhouse → Colmar",
        dessertes: [
          { gare: "Mulhouse", heure: "11:38", arret: 2 },
          { gare: "Mulhouse Dornach", heure: "11:45", arret: 1 },
          { gare: "Staffelfelden", heure: "11:53", arret: 1 },
          { gare: "Bollwiller", heure: "11:56", arret: 1 },
          { gare: "Raedersheim", heure: "12:00", arret: 1 },
          { gare: "Merxheim", heure: "12:03", arret: 1 },
          { gare: "Rouffach", heure: "12:07", arret: 1 },
          { gare: "Herrlisheim-Près-Colmar", heure: "12:12", arret: 1 },
          { gare: "Colmar", heure: "12:17", arret: 2 }
        ]
      },
      {
        nom: "Colmar → Mulhouse",
        dessertes: [
          { gare: "Colmar", heure: "12:50", arret: 2 },
          { gare: "Herrlisheim-Près-Colmar", heure: "12:56", arret: 1 },
          { gare: "Rouffach", heure: "13:01", arret: 1 },
          { gare: "Merxheim", heure: "13:05", arret: 1 },
          { gare: "Raedersheim", heure: "13:08", arret: 1 },
          { gare: "Bollwiller", heure: "13:12", arret: 1 },
          { gare: "Staffelfelden", heure: "13:15", arret: 1 },
          { gare: "Mulhouse Dornach", heure: "13:23", arret: 1 },
          { gare: "Mulhouse", heure: "13:29", arret: 2 }
        ]
      },
      {
        nom: "Mulhouse → Colmar",
        dessertes: [
          { gare: "Mulhouse", heure: "14:38", arret: 2 },
          { gare: "Mulhouse Dornach", heure: "14:45", arret: 1 },
          { gare: "Staffelfelden", heure: "14:53", arret: 1 },
          { gare: "Bollwiller", heure: "14:56", arret: 1 },
          { gare: "Raedersheim", heure: "15:00", arret: 1 },
          { gare: "Merxheim", heure: "15:03", arret: 1 },
          { gare: "Rouffach", heure: "15:07", arret: 1 },
          { gare: "Herrlisheim-Près-Colmar", heure: "15:12", arret: 1 },
          { gare: "Colmar", heure: "15:17", arret: 2 }
        ]
      },
      {
        nom: "Colmar → Mulhouse",
        dessertes: [
          { gare: "Colmar", heure: "15:50", arret: 2 },
          { gare: "Herrlisheim-Près-Colmar", heure: "15:56", arret: 1 },
          { gare: "Rouffach", heure: "16:01", arret: 1 },
          { gare: "Merxheim", heure: "16:05", arret: 1 },
          { gare: "Raedersheim", heure: "16:08", arret: 1 },
          { gare: "Bollwiller", heure: "16:12", arret: 1 },
          { gare: "Staffelfelden", heure: "16:15", arret: 1 },
          { gare: "Mulhouse Dornach", heure: "16:23", arret: 1 },
          { gare: "Mulhouse", heure: "16:29", arret: 2 }
        ]
      },
      {
        nom: "Mulhouse → Colmar",
        dessertes: [
          { gare: "Mulhouse", heure: "17:38", arret: 2 },
          { gare: "Mulhouse Dornach", heure: "17:45", arret: 1 },
          { gare: "Staffelfelden", heure: "17:53", arret: 1 },
          { gare: "Bollwiller", heure: "17:56", arret: 1 },
          { gare: "Raedersheim", heure: "18:00", arret: 1 },
          { gare: "Merxheim", heure: "18:03", arret: 1 },
          { gare: "Rouffach", heure: "18:07", arret: 1 },
          { gare: "Herrlisheim-Près-Colmar", heure: "18:12", arret: 1 },
          { gare: "Colmar", heure: "18:17", arret: 2 }
        ]
      },
      {
        nom: "Colmar → Mulhouse",
        dessertes: [
          { gare: "Colmar", heure: "18:50", arret: 2 },
          { gare: "Herrlisheim-Près-Colmar", heure: "18:56", arret: 1 },
          { gare: "Rouffach", heure: "19:01", arret: 1 },
          { gare: "Merxheim", heure: "19:05", arret: 1 },
          { gare: "Raedersheim", heure: "19:08", arret: 1 },
          { gare: "Bollwiller", heure: "19:12", arret: 1 },
          { gare: "Staffelfelden", heure: "19:15", arret: 1 },
          { gare: "Mulhouse Dornach", heure: "19:23", arret: 1 },
          { gare: "Mulhouse", heure: "19:29", arret: 2 }
        ]
      }
    ]
  },

  {
    id: "TER 3040",
    nom: "Regiolis blueFluoEurope 4C",
    moteurs: ["25kV CA", "1.5kV CC", "diesel"],
    vitesseMax: 160,
    capacite: { premiere: 24, seconde: 210 },
    trajets: [
      {
        nom: "Mulhouse → Belfort-Ville",
        dessertes: [
          { gare: "Mulhouse", heure: "07:00", arret: 2 },
          { gare: "Flaxlanden", heure: "07:07", arret: 1 },
          { gare: "Illfurth", heure: "07:12", arret: 1 },
          { gare: "Altkirch", heure: "07:18", arret: 2 },
          { gare: "Dannemarie", heure: "07:28", arret: 1 },
          { gare: "Montreux-Vieux", heure: "07:36", arret: 1 },
          { gare: "Petit-Croix", heure: "07:39", arret: 1 },
          { gare: "Belfort-Ville", heure: "07:51", arret: 2 }
        ]
      },
      {
        nom: "Belfort-Ville → Mulhouse",
        dessertes: [
          { gare: "Belfort-Ville", heure: "08:30", arret: 2 },
          { gare: "Petit-Croix", heure: "08:43", arret: 1 },
          { gare: "Montreux-Vieux", heure: "08:46", arret: 1 },
          { gare: "Dannemarie", heure: "08:54", arret: 1 },
          { gare: "Altkirch", heure: "09:03", arret: 2 },
          { gare: "Illfurth", heure: "09:10", arret: 1 },
          { gare: "Flaxlanden", heure: "09:15", arret: 1 },
          { gare: "Mulhouse", heure: "09:21", arret: 2 }
        ]
      },
      {
        nom: "Mulhouse → Belfort-Ville",
        dessertes: [
          { gare: "Mulhouse", heure: "10:00", arret: 2 },
          { gare: "Illfurth", heure: "10:10", arret: 1 },
          { gare: "Altkirch", heure: "10:16", arret: 2 },
          { gare: "Dannemarie", heure: "10:26", arret: 1 },
          { gare: "Montreux-Vieux", heure: "10:34", arret: 1 },
          { gare: "Belfort-Ville", heure: "10:48", arret: 2 }
        ]
      },
      {
        nom: "Belfort-Ville → Mulhouse",
        dessertes: [
          { gare: "Belfort-Ville", heure: "11:30", arret: 2 },
          { gare: "Montreux-Vieux", heure: "11:45", arret: 1 },
          { gare: "Dannemarie", heure: "11:53", arret: 1 },
          { gare: "Altkirch", heure: "12:02", arret: 2 },
          { gare: "Illfurth", heure: "12:09", arret: 1 },
          { gare: "Mulhouse", heure: "12:18", arret: 2 }
        ]
      },
      {
        nom: "Mulhouse → Belfort-Ville",
        dessertes: [
          { gare: "Mulhouse", heure: "13:00", arret: 2 },
          { gare: "Flaxlanden", heure: "13:07", arret: 1 },
          { gare: "Illfurth", heure: "13:12", arret: 1 },
          { gare: "Altkirch", heure: "13:18", arret: 2 },
          { gare: "Dannemarie", heure: "13:28", arret: 1 },
          { gare: "Montreux-Vieux", heure: "13:36", arret: 1 },
          { gare: "Petit-Croix", heure: "13:39", arret: 1 },
          { gare: "Belfort-Ville", heure: "13:51", arret: 2 }
        ]
      },
      {
        nom: "Belfort-Ville → Mulhouse",
        dessertes: [
          { gare: "Belfort-Ville", heure: "14:30", arret: 2 },
          { gare: "Petit-Croix", heure: "14:43", arret: 1 },
          { gare: "Montreux-Vieux", heure: "14:46", arret: 1 },
          { gare: "Dannemarie", heure: "14:54", arret: 1 },
          { gare: "Altkirch", heure: "15:03", arret: 2 },
          { gare: "Illfurth", heure: "15:10", arret: 1 },
          { gare: "Flaxlanden", heure: "15:15", arret: 1 },
          { gare: "Mulhouse", heure: "15:21", arret: 2 }
        ]
      },
      {
        nom: "Mulhouse → Belfort-Ville",
        dessertes: [
          { gare: "Mulhouse", heure: "16:00", arret: 2 },
          { gare: "Flaxlanden", heure: "16:07", arret: 1 },
          { gare: "Illfurth", heure: "16:12", arret: 1 },
          { gare: "Altkirch", heure: "16:18", arret: 2 },
          { gare: "Dannemarie", heure: "16:28", arret: 1 },
          { gare: "Montreux-Vieux", heure: "16:36", arret: 1 },
          { gare: "Petit-Croix", heure: "16:39", arret: 1 },
          { gare: "Belfort-Ville", heure: "16:51", arret: 2 }
        ]
      },
      {
        nom: "Belfort-Ville → Mulhouse",
        dessertes: [
          { gare: "Belfort-Ville", heure: "17:30", arret: 2 },
          { gare: "Petit-Croix", heure: "17:43", arret: 1 },
          { gare: "Montreux-Vieux", heure: "17:46", arret: 1 },
          { gare: "Dannemarie", heure: "17:54", arret: 1 },
          { gare: "Altkirch", heure: "18:03", arret: 2 },
          { gare: "Illfurth", heure: "18:10", arret: 1 },
          { gare: "Flaxlanden", heure: "18:15", arret: 1 },
          { gare: "Mulhouse", heure: "18:21", arret: 2 }
        ]
      },
      {
        nom: "Mulhouse → Belfort-Ville",
        dessertes: [
          { gare: "Mulhouse", heure: "19:00", arret: 2 },
          { gare: "Illfurth", heure: "19:10", arret: 1 },
          { gare: "Altkirch", heure: "19:16", arret: 2 },
          { gare: "Dannemarie", heure: "19:26", arret: 1 },
          { gare: "Montreux-Vieux", heure: "19:34", arret: 1 },
          { gare: "Belfort-Ville", heure: "19:48", arret: 2 }
        ]
      },
      {
        nom: "Belfort-Ville → Mulhouse",
        dessertes: [
          { gare: "Belfort-Ville", heure: "21:30", arret: 2 },
          { gare: "Montreux-Vieux", heure: "21:45", arret: 1 },
          { gare: "Dannemarie", heure: "21:53", arret: 1 },
          { gare: "Altkirch", heure: "22:02", arret: 2 },
          { gare: "Illfurth", heure: "22:09", arret: 1 },
          { gare: "Mulhouse", heure: "22:18", arret: 2 }
        ]
      }
    ]
  },

  {
    id: "TER 3041",
    nom: "Regiolis blueFluoEurope 4C",
    moteurs: ["25kV CA", "1.5kV CC", "diesel"],
    vitesseMax: 160,
    capacite: { premiere: 24, seconde: 210 },
    trajets: [
      {
        nom: "Belfort-Ville → Mulhouse",
        dessertes: [
          { gare: "Belfort-Ville", heure: "07:00", arret: 2 },
          { gare: "Petit-Croix", heure: "07:13", arret: 1 },
          { gare: "Montreux-Vieux", heure: "07:16", arret: 1 },
          { gare: "Dannemarie", heure: "07:24", arret: 1 },
          { gare: "Altkirch", heure: "07:33", arret: 2 },
          { gare: "Illfurth", heure: "07:40", arret: 1 },
          { gare: "Flaxlanden", heure: "07:45", arret: 1 },
          { gare: "Mulhouse", heure: "07:51", arret: 2 }
        ]
      },
      {
        nom: "Mulhouse → Belfort-Ville",
        dessertes: [
          { gare: "Mulhouse", heure: "08:30", arret: 2 },
          { gare: "Flaxlanden", heure: "08:37", arret: 1 },
          { gare: "Illfurth", heure: "08:42", arret: 1 },
          { gare: "Altkirch", heure: "08:48", arret: 2 },
          { gare: "Dannemarie", heure: "08:58", arret: 1 },
          { gare: "Montreux-Vieux", heure: "09:06", arret: 1 },
          { gare: "Petit-Croix", heure: "09:09", arret: 1 },
          { gare: "Belfort-Ville", heure: "09:21", arret: 2 }
        ]
      },
      {
        nom: "Belfort-Ville → Mulhouse",
        dessertes: [
          { gare: "Belfort-Ville", heure: "10:00", arret: 2 },
          { gare: "Montreux-Vieux", heure: "10:15", arret: 1 },
          { gare: "Dannemarie", heure: "10:23", arret: 1 },
          { gare: "Altkirch", heure: "10:32", arret: 2 },
          { gare: "Illfurth", heure: "10:39", arret: 1 },
          { gare: "Mulhouse", heure: "10:48", arret: 2 }
        ]
      },
      {
        nom: "Mulhouse → Belfort-Ville",
        dessertes: [
          { gare: "Mulhouse", heure: "11:30", arret: 2 },
          { gare: "Flaxlanden", heure: "11:37", arret: 1 },
          { gare: "Illfurth", heure: "11:42", arret: 1 },
          { gare: "Altkirch", heure: "11:48", arret: 2 },
          { gare: "Dannemarie", heure: "11:58", arret: 1 },
          { gare: "Montreux-Vieux", heure: "12:06", arret: 1 },
          { gare: "Petit-Croix", heure: "12:09", arret: 1 },
          { gare: "Belfort-Ville", heure: "12:21", arret: 2 }
        ]
      },
      {
        nom: "Belfort-Ville → Mulhouse",
        dessertes: [
          { gare: "Belfort-Ville", heure: "13:00", arret: 2 },
          { gare: "Montreux-Vieux", heure: "13:15", arret: 1 },
          { gare: "Dannemarie", heure: "13:23", arret: 1 },
          { gare: "Altkirch", heure: "13:32", arret: 2 },
          { gare: "Illfurth", heure: "13:39", arret: 1 },
          { gare: "Mulhouse", heure: "13:48", arret: 2 }
        ]
      },
      {
        nom: "Mulhouse → Belfort-Ville",
        dessertes: [
          { gare: "Mulhouse", heure: "14:30", arret: 2 },
          { gare: "Illfurth", heure: "14:40", arret: 1 },
          { gare: "Altkirch", heure: "14:46", arret: 2 },
          { gare: "Dannemarie", heure: "14:56", arret: 1 },
          { gare: "Montreux-Vieux", heure: "15:04", arret: 1 },
          { gare: "Belfort-Ville", heure: "15:18", arret: 2 }
        ]
      },
      {
        nom: "Belfort-Ville → Mulhouse",
        dessertes: [
          { gare: "Belfort-Ville", heure: "16:00", arret: 2 },
          { gare: "Petit-Croix", heure: "16:13", arret: 1 },
          { gare: "Montreux-Vieux", heure: "16:16", arret: 1 },
          { gare: "Dannemarie", heure: "16:24", arret: 1 },
          { gare: "Altkirch", heure: "16:33", arret: 2 },
          { gare: "Illfurth", heure: "16:40", arret: 1 },
          { gare: "Flaxlanden", heure: "16:45", arret: 1 },
          { gare: "Mulhouse", heure: "16:51", arret: 2 }
        ]
      },
      {
        nom: "Mulhouse → Belfort-Ville",
        dessertes: [
          { gare: "Mulhouse", heure: "17:30", arret: 2 },
          { gare: "Flaxlanden", heure: "17:37", arret: 1 },
          { gare: "Illfurth", heure: "17:42", arret: 1 },
          { gare: "Altkirch", heure: "17:48", arret: 2 },
          { gare: "Dannemarie", heure: "17:58", arret: 1 },
          { gare: "Montreux-Vieux", heure: "18:06", arret: 1 },
          { gare: "Petit-Croix", heure: "18:09", arret: 1 },
          { gare: "Belfort-Ville", heure: "18:21", arret: 2 }
        ]
      },
      {
        nom: "Belfort-Ville → Mulhouse",
        dessertes: [
          { gare: "Belfort-Ville", heure: "19:00", arret: 2 },
          { gare: "Petit-Croix", heure: "19:13", arret: 1 },
          { gare: "Montreux-Vieux", heure: "19:16", arret: 1 },
          { gare: "Dannemarie", heure: "19:24", arret: 1 },
          { gare: "Altkirch", heure: "19:33", arret: 2 },
          { gare: "Illfurth", heure: "19:40", arret: 1 },
          { gare: "Flaxlanden", heure: "19:45", arret: 1 },
          { gare: "Mulhouse", heure: "19:51", arret: 2 }
        ]
      },
      {
        nom: "Mulhouse → Belfort-Ville",
        dessertes: [
          { gare: "Mulhouse", heure: "20:30", arret: 2 },
          { gare: "Illfurth", heure: "20:40", arret: 1 },
          { gare: "Altkirch", heure: "20:46", arret: 2 },
          { gare: "Dannemarie", heure: "20:56", arret: 1 },
          { gare: "Montreux-Vieux", heure: "21:04", arret: 1 },
          { gare: "Belfort-Ville", heure: "21:18", arret: 2 }
        ]
      }
    ]
  },

  {
    id: "TER 3050",
    nom: "AGC fluoGrandEst 4C",
    moteurs: ["diesel"],
    vitesseMax: 160,
    capacite: { premiere: 24, seconde: 183 },
    trajets: [
      {
        nom: "Sélestat → Strasbourg",
        dessertes: [
          { gare: "Sélestat", heure: "06:55", arret: 5 },
          { gare: "Scherwiller", heure: "07:05", arret: 1 },
          { gare: "Dambach-la-Ville", heure: "07:11", arret: 1 },
          { gare: "Eichhoffen", heure: "07:21", arret: 1 },
          { gare: "Gertwiller", heure: "07:27", arret: 1 },
          { gare: "Obernai", heure: "07:36", arret: 2 },
          { gare: "Bischoffsheim", heure: "07:42", arret: 1 },
          { gare: "Rosheim", heure: "07:46", arret: 1 },
          { gare: "Molsheim", heure: "07:52", arret: 2 },
          { gare: "Duttlenheim", heure: "08:02", arret: 1 },
          { gare: "Entzheim-Aéroport", heure: "08:10", arret: 2 },
          { gare: "Lingolsheim", heure: "08:18", arret: 1 },
          { gare: "Strasbourg", heure: "08:27", arret: 5 }
        ]
      },
      {
        nom: "Strasbourg → Sélestat",
        dessertes: [
          { gare: "Strasbourg", heure: "09:00", arret: 5 },
          { gare: "Lingolsheim", heure: "09:13", arret: 1 },
          { gare: "Entzheim-Aéroport", heure: "09:20", arret: 2 },
          { gare: "Duttlenheim", heure: "09:29", arret: 1 },
          { gare: "Molsheim", heure: "09:38", arret: 2 },
          { gare: "Rosheim", heure: "09:45", arret: 1 },
          { gare: "Bischoffsheim", heure: "09:49", arret: 1 },
          { gare: "Obernai", heure: "09:54", arret: 2 },
          { gare: "Gertwiller", heure: "10:04", arret: 1 },
          { gare: "Eichhoffen", heure: "10:10", arret: 1 },
          { gare: "Dambach-la-Ville", heure: "10:20", arret: 1 },
          { gare: "Scherwiller", heure: "10:26", arret: 1 },
          { gare: "Sélestat", heure: "10:32", arret: 5 }
        ]
      },
      {
        nom: "Sélestat → Strasbourg",
        dessertes: [
          { gare: "Sélestat", heure: "10:55", arret: 5 },
          { gare: "Scherwiller", heure: "11:05", arret: 1 },
          { gare: "Dambach-la-Ville", heure: "11:11", arret: 1 },
          { gare: "Eichhoffen", heure: "11:21", arret: 1 },
          { gare: "Gertwiller", heure: "11:27", arret: 1 },
          { gare: "Obernai", heure: "11:36", arret: 2 },
          { gare: "Bischoffsheim", heure: "11:42", arret: 1 },
          { gare: "Rosheim", heure: "11:46", arret: 1 },
          { gare: "Molsheim", heure: "11:52", arret: 2 },
          { gare: "Duttlenheim", heure: "12:02", arret: 1 },
          { gare: "Entzheim-Aéroport", heure: "12:10", arret: 2 },
          { gare: "Lingolsheim", heure: "12:18", arret: 1 },
          { gare: "Strasbourg", heure: "12:27", arret: 5 }
        ]
      },
      {
        nom: "Strasbourg → Sélestat",
        dessertes: [
          { gare: "Strasbourg", heure: "13:00", arret: 5 },
          { gare: "Lingolsheim", heure: "13:13", arret: 1 },
          { gare: "Entzheim-Aéroport", heure: "13:20", arret: 2 },
          { gare: "Duttlenheim", heure: "13:29", arret: 1 },
          { gare: "Molsheim", heure: "13:38", arret: 2 },
          { gare: "Rosheim", heure: "13:45", arret: 1 },
          { gare: "Bischoffsheim", heure: "13:49", arret: 1 },
          { gare: "Obernai", heure: "13:54", arret: 2 },
          { gare: "Gertwiller", heure: "14:04", arret: 1 },
          { gare: "Eichhoffen", heure: "14:10", arret: 1 },
          { gare: "Dambach-la-Ville", heure: "14:20", arret: 1 },
          { gare: "Scherwiller", heure: "14:26", arret: 1 },
          { gare: "Sélestat", heure: "14:32", arret: 5 }
        ]
      },
      {
        nom: "Sélestat → Strasbourg",
        dessertes: [
          { gare: "Sélestat", heure: "14:55", arret: 5 },
          { gare: "Scherwiller", heure: "15:05", arret: 1 },
          { gare: "Dambach-la-Ville", heure: "15:11", arret: 1 },
          { gare: "Eichhoffen", heure: "15:21", arret: 1 },
          { gare: "Gertwiller", heure: "15:27", arret: 1 },
          { gare: "Obernai", heure: "15:36", arret: 2 },
          { gare: "Bischoffsheim", heure: "15:42", arret: 1 },
          { gare: "Rosheim", heure: "15:46", arret: 1 },
          { gare: "Molsheim", heure: "15:52", arret: 2 },
          { gare: "Duttlenheim", heure: "16:02", arret: 1 },
          { gare: "Entzheim-Aéroport", heure: "16:10", arret: 3 },
          { gare: "Lingolsheim", heure: "16:19", arret: 1 },
          { gare: "Strasbourg", heure: "16:28", arret: 5 }
        ]
      },
      {
        nom: "Strasbourg → Sélestat",
        dessertes: [
          { gare: "Strasbourg", heure: "17:00", arret: 5 },
          { gare: "Lingolsheim", heure: "17:13", arret: 1 },
          { gare: "Entzheim-Aéroport", heure: "17:20", arret: 2 },
          { gare: "Duttlenheim", heure: "17:29", arret: 1 },
          { gare: "Molsheim", heure: "17:38", arret: 2 },
          { gare: "Rosheim", heure: "17:45", arret: 1 },
          { gare: "Bischoffsheim", heure: "17:49", arret: 1 },
          { gare: "Obernai", heure: "17:54", arret: 2 },
          { gare: "Gertwiller", heure: "18:04", arret: 1 },
          { gare: "Eichhoffen", heure: "18:10", arret: 1 },
          { gare: "Dambach-la-Ville", heure: "18:20", arret: 1 },
          { gare: "Scherwiller", heure: "18:26", arret: 1 },
          { gare: "Sélestat", heure: "18:32", arret: 5 }
        ]
      },
      {
        nom: "Sélestat → Strasbourg",
        dessertes: [
          { gare: "Sélestat", heure: "18:55", arret: 5 },
          { gare: "Scherwiller", heure: "19:05", arret: 1 },
          { gare: "Dambach-la-Ville", heure: "19:11", arret: 1 },
          { gare: "Eichhoffen", heure: "19:21", arret: 1 },
          { gare: "Gertwiller", heure: "19:27", arret: 1 },
          { gare: "Obernai", heure: "19:36", arret: 2 },
          { gare: "Bischoffsheim", heure: "19:42", arret: 1 },
          { gare: "Rosheim", heure: "19:46", arret: 1 },
          { gare: "Molsheim", heure: "19:52", arret: 2 },
          { gare: "Duttlenheim", heure: "20:02", arret: 1 },
          { gare: "Entzheim-Aéroport", heure: "20:10", arret: 2 },
          { gare: "Lingolsheim", heure: "20:18", arret: 1 },
          { gare: "Strasbourg", heure: "20:27", arret: 5 }
        ]
      },
      {
        nom: "Strasbourg → Sélestat",
        dessertes: [
          { gare: "Strasbourg", heure: "21:00", arret: 5 },
          { gare: "Lingolsheim", heure: "21:13", arret: 1 },
          { gare: "Entzheim-Aéroport", heure: "21:20", arret: 2 },
          { gare: "Duttlenheim", heure: "21:29", arret: 1 },
          { gare: "Molsheim", heure: "21:38", arret: 2 },
          { gare: "Rosheim", heure: "21:45", arret: 1 },
          { gare: "Bischoffsheim", heure: "21:49", arret: 1 },
          { gare: "Obernai", heure: "21:54", arret: 2 },
          { gare: "Gertwiller", heure: "22:04", arret: 1 },
          { gare: "Eichhoffen", heure: "22:10", arret: 1 },
          { gare: "Dambach-la-Ville", heure: "22:20", arret: 1 },
          { gare: "Scherwiller", heure: "22:26", arret: 1 },
          { gare: "Sélestat", heure: "22:32", arret: 5 }
        ]
      }
    ]
  },

  {
    id: "TER 3051",
    nom: "AGC fluoGrandEst 3C",
    moteurs: ["diesel"],
    vitesseMax: 160,
    capacite: { premiere: 24, seconde: 134 },
    trajets: [
      {
        nom: "Strasbourg → Obernai",
        dessertes: [
          { gare: "Strasbourg", heure: "06:00", arret: 5 },
          { gare: "Lingolsheim", heure: "06:13", arret: 1 },
          { gare: "Entzheim-Aéroport", heure: "06:20", arret: 2 },
          { gare: "Duttlenheim", heure: "06:29", arret: 1 },
          { gare: "Molsheim", heure: "06:38", arret: 2 },
          { gare: "Rosheim", heure: "06:45", arret: 1 },
          { gare: "Bischoffsheim", heure: "06:49", arret: 1 },
          { gare: "Obernai", heure: "06:54", arret: 2 }
        ]
      },
      {
        nom: "Obernai → Strasbourg",
        dessertes: [
          { gare: "Obernai", heure: "08:00", arret: 2 },
          { gare: "Bischoffsheim", heure: "08:06", arret: 1 },
          { gare: "Rosheim", heure: "08:10", arret: 1 },
          { gare: "Molsheim", heure: "08:16", arret: 2 },
          { gare: "Duttlenheim", heure: "08:26", arret: 1 },
          { gare: "Entzheim-Aéroport", heure: "08:34", arret: 2 },
          { gare: "Lingolsheim", heure: "08:42", arret: 1 },
          { gare: "Strasbourg", heure: "08:51", arret: 5 }
        ]
      },
      {
        nom: "Strasbourg → Obernai",
        dessertes: [
          { gare: "Strasbourg", heure: "10:00", arret: 5 },
          { gare: "Lingolsheim", heure: "10:13", arret: 1 },
          { gare: "Entzheim-Aéroport", heure: "10:20", arret: 2 },
          { gare: "Duttlenheim", heure: "10:29", arret: 1 },
          { gare: "Molsheim", heure: "10:38", arret: 2 },
          { gare: "Rosheim", heure: "10:45", arret: 1 },
          { gare: "Bischoffsheim", heure: "10:49", arret: 1 },
          { gare: "Obernai", heure: "10:54", arret: 2 }
        ]
      },
      {
        nom: "Obernai → Strasbourg",
        dessertes: [
          { gare: "Obernai", heure: "12:00", arret: 2 },
          { gare: "Bischoffsheim", heure: "12:06", arret: 1 },
          { gare: "Rosheim", heure: "12:10", arret: 1 },
          { gare: "Molsheim", heure: "12:16", arret: 2 },
          { gare: "Duttlenheim", heure: "12:26", arret: 1 },
          { gare: "Entzheim-Aéroport", heure: "12:34", arret: 2 },
          { gare: "Lingolsheim", heure: "12:42", arret: 1 },
          { gare: "Strasbourg", heure: "12:51", arret: 5 }
        ]
      },
      {
        nom: "Strasbourg → Obernai",
        dessertes: [
          { gare: "Strasbourg", heure: "14:00", arret: 5 },
          { gare: "Lingolsheim", heure: "14:13", arret: 1 },
          { gare: "Entzheim-Aéroport", heure: "14:20", arret: 2 },
          { gare: "Duttlenheim", heure: "14:29", arret: 1 },
          { gare: "Molsheim", heure: "14:38", arret: 2 },
          { gare: "Rosheim", heure: "14:45", arret: 1 },
          { gare: "Bischoffsheim", heure: "14:49", arret: 1 },
          { gare: "Obernai", heure: "14:54", arret: 2 }
        ]
      },
      {
        nom: "Obernai → Strasbourg",
        dessertes: [
          { gare: "Obernai", heure: "16:00", arret: 2 },
          { gare: "Bischoffsheim", heure: "16:06", arret: 1 },
          { gare: "Rosheim", heure: "16:10", arret: 1 },
          { gare: "Molsheim", heure: "16:16", arret: 2 },
          { gare: "Duttlenheim", heure: "16:26", arret: 1 },
          { gare: "Entzheim-Aéroport", heure: "16:34", arret: 2 },
          { gare: "Lingolsheim", heure: "16:42", arret: 1 },
          { gare: "Strasbourg", heure: "16:51", arret: 5 }
        ]
      },
      {
        nom: "Strasbourg → Obernai",
        dessertes: [
          { gare: "Strasbourg", heure: "18:00", arret: 5 },
          { gare: "Lingolsheim", heure: "18:13", arret: 1 },
          { gare: "Entzheim-Aéroport", heure: "18:20", arret: 2 },
          { gare: "Duttlenheim", heure: "18:29", arret: 1 },
          { gare: "Molsheim", heure: "18:38", arret: 2 },
          { gare: "Rosheim", heure: "18:45", arret: 1 },
          { gare: "Bischoffsheim", heure: "18:49", arret: 1 },
          { gare: "Obernai", heure: "18:54", arret: 2 }
        ]
      },
      {
        nom: "Obernai → Strasbourg",
        dessertes: [
          { gare: "Obernai", heure: "20:00", arret: 2 },
          { gare: "Bischoffsheim", heure: "20:06", arret: 1 },
          { gare: "Rosheim", heure: "20:10", arret: 1 },
          { gare: "Molsheim", heure: "20:16", arret: 2 },
          { gare: "Duttlenheim", heure: "20:26", arret: 1 },
          { gare: "Entzheim-Aéroport", heure: "20:34", arret: 2 },
          { gare: "Lingolsheim", heure: "20:42", arret: 1 },
          { gare: "Strasbourg", heure: "20:51", arret: 5 }
        ]
      }
    ]
  },

  {
    id: "TER 3052",
    nom: "AGC Alsace 3C",
    moteurs: ["diesel"],
    vitesseMax: 160,
    capacite: { premiere: 24, seconde: 134 },
    trajets: [
      {
        nom: "Obernai → Hoenheim Tram",
        dessertes: [
          { gare: "Obernai", heure: "08:30", arret: 4 },
          { gare: "Bischoffsheim", heure: "08:38", arret: 1 },
          { gare: "Rosheim", heure: "08:42", arret: 1 },
          { gare: "Molsheim", heure: "08:48", arret: 2 },
          { gare: "Duttlenheim", heure: "08:58", arret: 1 },
          { gare: "Entzheim-Aéroport", heure: "09:06", arret: 2 },
          { gare: "Lingolsheim", heure: "09:14", arret: 1 },
          { gare: "Strasbourg", heure: "09:23", arret: 5 },
          { gare: "Bischheim", heure: "09:32", arret: 1 },
          { gare: "Hoenheim Tram", heure: "09:36", arret: 4 }
        ]
      },
      {
        nom: "Hoenheim Tram → Obernai",
        dessertes: [
          { gare: "Hoenheim Tram", heure: "10:30", arret: 4 },
          { gare: "Bischheim", heure: "10:37", arret: 1 },
          { gare: "Strasbourg", heure: "10:42", arret: 5 },
          { gare: "Lingolsheim", heure: "10:55", arret: 1 },
          { gare: "Entzheim-Aéroport", heure: "11:02", arret: 2 },
          { gare: "Duttlenheim", heure: "11:11", arret: 1 },
          { gare: "Molsheim", heure: "11:20", arret: 2 },
          { gare: "Rosheim", heure: "11:27", arret: 1 },
          { gare: "Bischoffsheim", heure: "11:31", arret: 1 },
          { gare: "Obernai", heure: "11:36", arret: 4 }
        ]
      },
      {
        nom: "Obernai → Hoenheim Tram",
        dessertes: [
          { gare: "Obernai", heure: "13:30", arret: 4 },
          { gare: "Bischoffsheim", heure: "13:38", arret: 1 },
          { gare: "Rosheim", heure: "13:42", arret: 1 },
          { gare: "Molsheim", heure: "13:48", arret: 2 },
          { gare: "Duttlenheim", heure: "13:58", arret: 1 },
          { gare: "Entzheim-Aéroport", heure: "14:06", arret: 2 },
          { gare: "Lingolsheim", heure: "14:14", arret: 1 },
          { gare: "Strasbourg", heure: "14:23", arret: 5 },
          { gare: "Bischheim", heure: "14:32", arret: 1 },
          { gare: "Hoenheim Tram", heure: "14:36", arret: 4 }
        ]
      },
      {
        nom: "Hoenheim Tram → Obernai",
        dessertes: [
          { gare: "Hoenheim Tram", heure: "15:00", arret: 4 },
          { gare: "Bischheim", heure: "15:07", arret: 1 },
          { gare: "Strasbourg", heure: "15:12", arret: 5 },
          { gare: "Lingolsheim", heure: "15:25", arret: 1 },
          { gare: "Entzheim-Aéroport", heure: "15:32", arret: 2 },
          { gare: "Duttlenheim", heure: "15:41", arret: 1 },
          { gare: "Molsheim", heure: "15:50", arret: 2 },
          { gare: "Rosheim", heure: "15:57", arret: 1 },
          { gare: "Bischoffsheim", heure: "16:01", arret: 1 },
          { gare: "Obernai", heure: "16:06", arret: 4 }
        ]
      },
      {
        nom: "Obernai → Hoenheim Tram",
        dessertes: [
          { gare: "Obernai", heure: "17:30", arret: 4 },
          { gare: "Bischoffsheim", heure: "17:38", arret: 1 },
          { gare: "Rosheim", heure: "17:42", arret: 1 },
          { gare: "Molsheim", heure: "17:48", arret: 2 },
          { gare: "Duttlenheim", heure: "17:58", arret: 1 },
          { gare: "Entzheim-Aéroport", heure: "18:06", arret: 2 },
          { gare: "Lingolsheim", heure: "18:14", arret: 1 },
          { gare: "Strasbourg", heure: "18:23", arret: 5 },
          { gare: "Bischheim", heure: "18:32", arret: 1 },
          { gare: "Hoenheim Tram", heure: "18:36", arret: 4 }
        ]
      },
      {
        nom: "Hoenheim Tram → Obernai",
        dessertes: [
          { gare: "Hoenheim Tram", heure: "20:00", arret: 4 },
          { gare: "Bischheim", heure: "20:07", arret: 1 },
          { gare: "Strasbourg", heure: "20:12", arret: 5 },
          { gare: "Lingolsheim", heure: "20:25", arret: 1 },
          { gare: "Entzheim-Aéroport", heure: "20:32", arret: 2 },
          { gare: "Duttlenheim", heure: "20:41", arret: 1 },
          { gare: "Molsheim", heure: "20:50", arret: 2 },
          { gare: "Rosheim", heure: "20:57", arret: 1 },
          { gare: "Bischoffsheim", heure: "21:01", arret: 1 },
          { gare: "Obernai", heure: "21:06", arret: 4 }
        ]
      }
    ]
  },

  {
    id: "TER 3054",
    nom: "AGC fluoGrandEst 3C",
    moteurs: ["diesel"],
    vitesseMax: 160,
    capacite: { premiere: 24, seconde: 134 },
    trajets: [
      {
        nom: "Schirmeck - La Broque → Strasbourg",
        dessertes: [
          { gare: "Schirmeck - La Broque", heure: "06:00", arret: 2 },
          { gare: "Wisches", heure: "06:10", arret: 1 },
          { gare: "Urmatt", heure: "06:20", arret: 1 },
          { gare: "Gresswiller", heure: "06:32", arret: 1 },
          { gare: "Molsheim", heure: "06:43", arret: 2 },
          { gare: "Duttlenheim", heure: "06:53", arret: 1 },
          { gare: "Entzheim-Aéroport", heure: "07:01", arret: 1 },
          { gare: "Lingolsheim", heure: "07:08", arret: 1 },
          { gare: "Strasbourg", heure: "07:17", arret: 4 }
        ]
      },
      {
        nom: "Strasbourg → Schirmeck - La Broque",
        dessertes: [
          { gare: "Strasbourg", heure: "07:47", arret: 4 },
          { gare: "Lingolsheim", heure: "07:59", arret: 1 },
          { gare: "Entzheim-Aéroport", heure: "08:06", arret: 1 },
          { gare: "Duttlenheim", heure: "08:14", arret: 1 },
          { gare: "Molsheim", heure: "08:23", arret: 2 },
          { gare: "Gresswiller", heure: "08:35", arret: 1 },
          { gare: "Urmatt", heure: "08:47", arret: 1 },
          { gare: "Wisches", heure: "08:57", arret: 1 },
          { gare: "Schirmeck - La Broque", heure: "09:06", arret: 2 }
        ]
      },
      {
        nom: "Schirmeck - La Broque → Strasbourg",
        dessertes: [
          { gare: "Schirmeck - La Broque", heure: "10:00", arret: 2 },
          { gare: "Wisches", heure: "10:10", arret: 1 },
          { gare: "Urmatt", heure: "10:20", arret: 1 },
          { gare: "Gresswiller", heure: "10:32", arret: 1 },
          { gare: "Molsheim", heure: "10:43", arret: 2 },
          { gare: "Duttlenheim", heure: "10:53", arret: 1 },
          { gare: "Entzheim-Aéroport", heure: "11:01", arret: 1 },
          { gare: "Lingolsheim", heure: "11:08", arret: 1 },
          { gare: "Strasbourg", heure: "11:17", arret: 4 }
        ]
      },
      {
        nom: "Strasbourg → Schirmeck - La Broque",
        dessertes: [
          { gare: "Strasbourg", heure: "11:47", arret: 4 },
          { gare: "Lingolsheim", heure: "11:59", arret: 1 },
          { gare: "Entzheim-Aéroport", heure: "12:06", arret: 1 },
          { gare: "Duttlenheim", heure: "12:14", arret: 1 },
          { gare: "Molsheim", heure: "12:23", arret: 2 },
          { gare: "Gresswiller", heure: "12:35", arret: 1 },
          { gare: "Urmatt", heure: "12:47", arret: 1 },
          { gare: "Wisches", heure: "12:57", arret: 1 },
          { gare: "Schirmeck - La Broque", heure: "13:06", arret: 2 }
        ]
      },
      {
        nom: "Schirmeck - La Broque → Strasbourg",
        dessertes: [
          { gare: "Schirmeck - La Broque", heure: "14:00", arret: 2 },
          { gare: "Wisches", heure: "14:10", arret: 1 },
          { gare: "Urmatt", heure: "14:20", arret: 1 },
          { gare: "Gresswiller", heure: "14:32", arret: 1 },
          { gare: "Molsheim", heure: "14:43", arret: 2 },
          { gare: "Duttlenheim", heure: "14:53", arret: 1 },
          { gare: "Entzheim-Aéroport", heure: "15:01", arret: 1 },
          { gare: "Lingolsheim", heure: "15:08", arret: 1 },
          { gare: "Strasbourg", heure: "15:17", arret: 4 }
        ]
      },
      {
        nom: "Strasbourg → Schirmeck - La Broque",
        dessertes: [
          { gare: "Strasbourg", heure: "15:47", arret: 4 },
          { gare: "Lingolsheim", heure: "15:59", arret: 1 },
          { gare: "Entzheim-Aéroport", heure: "16:06", arret: 1 },
          { gare: "Duttlenheim", heure: "16:14", arret: 1 },
          { gare: "Molsheim", heure: "16:23", arret: 2 },
          { gare: "Gresswiller", heure: "16:35", arret: 1 },
          { gare: "Urmatt", heure: "16:47", arret: 1 },
          { gare: "Wisches", heure: "16:57", arret: 1 },
          { gare: "Schirmeck - La Broque", heure: "17:06", arret: 2 }
        ]
      },
      {
        nom: "Schirmeck - La Broque → Strasbourg",
        dessertes: [
          { gare: "Schirmeck - La Broque", heure: "18:00", arret: 2 },
          { gare: "Wisches", heure: "18:10", arret: 1 },
          { gare: "Urmatt", heure: "18:20", arret: 1 },
          { gare: "Gresswiller", heure: "18:32", arret: 1 },
          { gare: "Molsheim", heure: "18:43", arret: 2 },
          { gare: "Duttlenheim", heure: "18:53", arret: 1 },
          { gare: "Entzheim-Aéroport", heure: "19:01", arret: 1 },
          { gare: "Lingolsheim", heure: "19:08", arret: 1 },
          { gare: "Strasbourg", heure: "19:17", arret: 4 }
        ]
      },
      {
        nom: "Strasbourg → Schirmeck - La Broque",
        dessertes: [
          { gare: "Strasbourg", heure: "19:47", arret: 4 },
          { gare: "Lingolsheim", heure: "19:59", arret: 1 },
          { gare: "Entzheim-Aéroport", heure: "20:06", arret: 1 },
          { gare: "Duttlenheim", heure: "20:14", arret: 1 },
          { gare: "Molsheim", heure: "20:23", arret: 2 },
          { gare: "Gresswiller", heure: "20:35", arret: 1 },
          { gare: "Urmatt", heure: "20:47", arret: 1 },
          { gare: "Wisches", heure: "20:57", arret: 1 },
          { gare: "Schirmeck - La Broque", heure: "21:06", arret: 2 }
        ]
      }
    ]
  },

  {
    id: "TER 3055",
    nom: "AGC Alsace 3C",
    moteurs: ["diesel"],
    vitesseMax: 160,
    capacite: { premiere: 24, seconde: 134 },
    trajets: [
      {
        nom: "Strasbourg → Schirmeck - La Broque",
        dessertes: [
          { gare: "Strasbourg", heure: "05:47", arret: 4 },
          { gare: "Lingolsheim", heure: "05:59", arret: 1 },
          { gare: "Entzheim-Aéroport", heure: "06:06", arret: 1 },
          { gare: "Duttlenheim", heure: "06:14", arret: 1 },
          { gare: "Molsheim", heure: "06:23", arret: 2 },
          { gare: "Gresswiller", heure: "06:35", arret: 1 },
          { gare: "Urmatt", heure: "06:47", arret: 1 },
          { gare: "Wisches", heure: "06:57", arret: 1 },
          { gare: "Schirmeck - La Broque", heure: "07:06", arret: 2 }
        ]
      },
      {
        nom: "Schirmeck - La Broque → Strasbourg",
        dessertes: [
          { gare: "Schirmeck - La Broque", heure: "08:00", arret: 2 },
          { gare: "Wisches", heure: "08:10", arret: 1 },
          { gare: "Urmatt", heure: "08:20", arret: 1 },
          { gare: "Gresswiller", heure: "08:32", arret: 1 },
          { gare: "Molsheim", heure: "08:43", arret: 1 },
          { gare: "Strasbourg", heure: "09:12", arret: 4 }
        ]
      },
      {
        nom: "Strasbourg → Schirmeck - La Broque",
        dessertes: [
          { gare: "Strasbourg", heure: "09:42", arret: 4 },
          { gare: "Lingolsheim", heure: "09:54", arret: 1 },
          { gare: "Entzheim-Aéroport", heure: "10:01", arret: 1 },
          { gare: "Duttlenheim", heure: "10:09", arret: 1 },
          { gare: "Molsheim", heure: "10:18", arret: 1 },
          { gare: "Gresswiller", heure: "10:29", arret: 1 },
          { gare: "Urmatt", heure: "10:41", arret: 1 },
          { gare: "Wisches", heure: "10:51", arret: 1 },
          { gare: "Schirmeck - La Broque", heure: "11:00", arret: 2 }
        ]
      },
      {
        nom: "Schirmeck - La Broque → Strasbourg",
        dessertes: [
          { gare: "Schirmeck - La Broque", heure: "12:00", arret: 2 },
          { gare: "Wisches", heure: "12:10", arret: 1 },
          { gare: "Urmatt", heure: "12:20", arret: 1 },
          { gare: "Gresswiller", heure: "12:32", arret: 1 },
          { gare: "Molsheim", heure: "12:43", arret: 2 },
          { gare: "Duttlenheim", heure: "12:53", arret: 1 },
          { gare: "Entzheim-Aéroport", heure: "13:01", arret: 1 },
          { gare: "Lingolsheim", heure: "13:08", arret: 1 },
          { gare: "Strasbourg", heure: "13:17", arret: 4 }
        ]
      },
      {
        nom: "Strasbourg → Schirmeck - La Broque",
        dessertes: [
          { gare: "Strasbourg", heure: "13:47", arret: 4 },
          { gare: "Lingolsheim", heure: "13:59", arret: 1 },
          { gare: "Entzheim-Aéroport", heure: "14:06", arret: 1 },
          { gare: "Duttlenheim", heure: "14:14", arret: 1 },
          { gare: "Molsheim", heure: "14:23", arret: 2 },
          { gare: "Gresswiller", heure: "14:35", arret: 1 },
          { gare: "Urmatt", heure: "14:47", arret: 1 },
          { gare: "Wisches", heure: "14:57", arret: 1 },
          { gare: "Schirmeck - La Broque", heure: "15:06", arret: 2 }
        ]
      },
      {
        nom: "Schirmeck - La Broque → Strasbourg",
        dessertes: [
          { gare: "Schirmeck - La Broque", heure: "16:00", arret: 2 },
          { gare: "Wisches", heure: "16:10", arret: 1 },
          { gare: "Urmatt", heure: "16:20", arret: 1 },
          { gare: "Gresswiller", heure: "16:32", arret: 1 },
          { gare: "Molsheim", heure: "16:43", arret: 2 },
          { gare: "Duttlenheim", heure: "16:53", arret: 1 },
          { gare: "Entzheim-Aéroport", heure: "17:01", arret: 1 },
          { gare: "Lingolsheim", heure: "17:08", arret: 1 },
          { gare: "Strasbourg", heure: "17:17", arret: 4 }
        ]
      },
      {
        nom: "Strasbourg → Schirmeck - La Broque",
        dessertes: [
          { gare: "Strasbourg", heure: "17:47", arret: 4 },
          { gare: "Lingolsheim", heure: "17:59", arret: 1 },
          { gare: "Entzheim-Aéroport", heure: "18:06", arret: 1 },
          { gare: "Duttlenheim", heure: "18:14", arret: 1 },
          { gare: "Molsheim", heure: "18:23", arret: 2 },
          { gare: "Gresswiller", heure: "18:35", arret: 1 },
          { gare: "Urmatt", heure: "18:47", arret: 1 },
          { gare: "Wisches", heure: "18:57", arret: 1 },
          { gare: "Schirmeck - La Broque", heure: "19:06", arret: 2 }
        ]
      },
      {
        nom: "Schirmeck - La Broque → Strasbourg",
        dessertes: [
          { gare: "Schirmeck - La Broque", heure: "20:00", arret: 2 },
          { gare: "Wisches", heure: "20:10", arret: 1 },
          { gare: "Urmatt", heure: "20:20", arret: 1 },
          { gare: "Gresswiller", heure: "20:32", arret: 1 },
          { gare: "Molsheim", heure: "20:43", arret: 2 },
          { gare: "Duttlenheim", heure: "20:53", arret: 1 },
          { gare: "Entzheim-Aéroport", heure: "21:01", arret: 1 },
          { gare: "Lingolsheim", heure: "21:08", arret: 1 },
          { gare: "Strasbourg", heure: "21:17", arret: 4 }
        ]
      }
    ]
  },

  {
    id: "TER 3060",
    nom: "BB22200 RC Fluo",
    moteurs: ["25kV CA", "1.5kV CC"],
    vitesseMax: 140,
    capacite: { premiere: 40, seconde: 432 },
    composition: ["RRR Régionales FLUO", "RRR Régionales FLUO"],
    trajets: [
      {
        nom: "Mommenheim → Sélestat",
        dessertes: [
          { gare: "Mommenheim", heure: "07:00", arret: 2 },
          { gare: "Brumath", heure: "07:06", arret: 1 },
          { gare: "Strasbourg", heure: "07:16", arret: 5 },
          { gare: "Graffenstaden", heure: "07:28", arret: 1 },
          { gare: "Fegersheim - Lipsheim", heure: "07:32", arret: 1 },
          { gare: "Erstein", heure: "07:38", arret: 1 },
          { gare: "Benfeld", heure: "07:44", arret: 1 },
          { gare: "Kogenheim", heure: "07:49", arret: 1 },
          { gare: "Ebersheim", heure: "07:54", arret: 1 },
          { gare: "Sélestat", heure: "08:00", arret: 4 }
        ]
      },
      {
        nom: "Sélestat → Mommenheim",
        dessertes: [
          { gare: "Sélestat", heure: "08:11", arret: 4 },
          { gare: "Ebersheim", heure: "08:20", arret: 1 },
          { gare: "Kogenheim", heure: "08:25", arret: 1 },
          { gare: "Benfeld", heure: "08:30", arret: 1 },
          { gare: "Erstein", heure: "08:36", arret: 1 },
          { gare: "Fegersheim - Lipsheim", heure: "08:42", arret: 1 },
          { gare: "Graffenstaden", heure: "08:46", arret: 1 },
          { gare: "Strasbourg", heure: "08:54", arret: 5 },
          { gare: "Brumath", heure: "09:08", arret: 1 },
          { gare: "Mommenheim", heure: "09:13", arret: 2 }
        ]
      },
      {
        nom: "Mommenheim → Sélestat",
        dessertes: [
          { gare: "Mommenheim", heure: "10:00", arret: 2 },
          { gare: "Brumath", heure: "10:06", arret: 1 },
          { gare: "Strasbourg", heure: "10:16", arret: 5 },
          { gare: "Graffenstaden", heure: "10:28", arret: 1 },
          { gare: "Fegersheim - Lipsheim", heure: "10:32", arret: 1 },
          { gare: "Erstein", heure: "10:38", arret: 1 },
          { gare: "Benfeld", heure: "10:44", arret: 1 },
          { gare: "Kogenheim", heure: "10:49", arret: 1 },
          { gare: "Ebersheim", heure: "10:54", arret: 1 },
          { gare: "Sélestat", heure: "11:00", arret: 4 }
        ]
      },
      {
        nom: "Sélestat → Mommenheim",
        dessertes: [
          { gare: "Sélestat", heure: "11:11", arret: 4 },
          { gare: "Ebersheim", heure: "11:20", arret: 1 },
          { gare: "Kogenheim", heure: "11:25", arret: 1 },
          { gare: "Benfeld", heure: "11:30", arret: 1 },
          { gare: "Erstein", heure: "11:36", arret: 1 },
          { gare: "Fegersheim - Lipsheim", heure: "11:42", arret: 1 },
          { gare: "Graffenstaden", heure: "11:46", arret: 1 },
          { gare: "Strasbourg", heure: "11:54", arret: 5 },
          { gare: "Brumath", heure: "12:08", arret: 1 },
          { gare: "Mommenheim", heure: "12:13", arret: 2 }
        ]
      },
      {
        nom: "Mommenheim → Sélestat",
        dessertes: [
          { gare: "Mommenheim", heure: "13:00", arret: 2 },
          { gare: "Brumath", heure: "13:06", arret: 1 },
          { gare: "Strasbourg", heure: "13:16", arret: 5 },
          { gare: "Graffenstaden", heure: "13:28", arret: 1 },
          { gare: "Fegersheim - Lipsheim", heure: "13:32", arret: 1 },
          { gare: "Erstein", heure: "13:38", arret: 1 },
          { gare: "Benfeld", heure: "13:44", arret: 1 },
          { gare: "Kogenheim", heure: "13:49", arret: 1 },
          { gare: "Ebersheim", heure: "13:54", arret: 1 },
          { gare: "Sélestat", heure: "14:00", arret: 4 }
        ]
      },
      {
        nom: "Sélestat → Mommenheim",
        dessertes: [
          { gare: "Sélestat", heure: "14:11", arret: 4 },
          { gare: "Ebersheim", heure: "14:20", arret: 1 },
          { gare: "Kogenheim", heure: "14:25", arret: 1 },
          { gare: "Benfeld", heure: "14:30", arret: 1 },
          { gare: "Erstein", heure: "14:36", arret: 1 },
          { gare: "Fegersheim - Lipsheim", heure: "14:42", arret: 1 },
          { gare: "Graffenstaden", heure: "14:46", arret: 1 },
          { gare: "Strasbourg", heure: "14:54", arret: 5 },
          { gare: "Brumath", heure: "15:08", arret: 1 },
          { gare: "Mommenheim", heure: "15:13", arret: 2 }
        ]
      },
      {
        nom: "Mommenheim → Sélestat",
        dessertes: [
          { gare: "Mommenheim", heure: "16:00", arret: 2 },
          { gare: "Brumath", heure: "16:06", arret: 1 },
          { gare: "Strasbourg", heure: "16:16", arret: 5 },
          { gare: "Graffenstaden", heure: "16:28", arret: 1 },
          { gare: "Fegersheim - Lipsheim", heure: "16:32", arret: 1 },
          { gare: "Erstein", heure: "16:38", arret: 1 },
          { gare: "Benfeld", heure: "16:44", arret: 1 },
          { gare: "Kogenheim", heure: "16:49", arret: 1 },
          { gare: "Ebersheim", heure: "16:54", arret: 1 },
          { gare: "Sélestat", heure: "17:00", arret: 4 }
        ]
      },
      {
        nom: "Sélestat → Mommenheim",
        dessertes: [
          { gare: "Sélestat", heure: "17:11", arret: 4 },
          { gare: "Ebersheim", heure: "17:20", arret: 1 },
          { gare: "Kogenheim", heure: "17:25", arret: 1 },
          { gare: "Benfeld", heure: "17:30", arret: 1 },
          { gare: "Erstein", heure: "17:36", arret: 1 },
          { gare: "Fegersheim - Lipsheim", heure: "17:42", arret: 1 },
          { gare: "Graffenstaden", heure: "17:46", arret: 1 },
          { gare: "Strasbourg", heure: "17:54", arret: 5 },
          { gare: "Brumath", heure: "18:08", arret: 1 },
          { gare: "Mommenheim", heure: "18:13", arret: 2 }
        ]
      },
      {
        nom: "Mommenheim → Sélestat",
        dessertes: [
          { gare: "Mommenheim", heure: "19:00", arret: 2 },
          { gare: "Brumath", heure: "19:06", arret: 1 },
          { gare: "Strasbourg", heure: "19:16", arret: 5 },
          { gare: "Graffenstaden", heure: "19:28", arret: 1 },
          { gare: "Fegersheim - Lipsheim", heure: "19:32", arret: 1 },
          { gare: "Erstein", heure: "19:38", arret: 1 },
          { gare: "Benfeld", heure: "19:44", arret: 1 },
          { gare: "Kogenheim", heure: "19:49", arret: 1 },
          { gare: "Ebersheim", heure: "19:54", arret: 1 },
          { gare: "Sélestat", heure: "20:00", arret: 4 }
        ]
      },
      {
        nom: "Sélestat → Mommenheim",
        dessertes: [
          { gare: "Sélestat", heure: "20:11", arret: 4 },
          { gare: "Ebersheim", heure: "20:20", arret: 1 },
          { gare: "Kogenheim", heure: "20:25", arret: 1 },
          { gare: "Benfeld", heure: "20:30", arret: 1 },
          { gare: "Erstein", heure: "20:36", arret: 1 },
          { gare: "Fegersheim - Lipsheim", heure: "20:42", arret: 1 },
          { gare: "Graffenstaden", heure: "20:46", arret: 1 },
          { gare: "Strasbourg", heure: "20:54", arret: 5 },
          { gare: "Brumath", heure: "21:08", arret: 1 },
          { gare: "Mommenheim", heure: "21:13", arret: 2 }
        ]
      }
    ]
  },

  {
    id: "TER 3061",
    nom: "BB22200 RC Fluo",
    moteurs: ["25kV CA", "1.5kV CC"],
    vitesseMax: 140,
    capacite: { premiere: 40, seconde: 432 },
    composition: ["RRR Régionales FLUO", "RRR Régionales FLUO"],
    trajets: [
      {
        nom: "Sélestat → Mommenheim",
        dessertes: [
          { gare: "Sélestat", heure: "06:40", arret: 5 },
          { gare: "Ebersheim", heure: "06:50", arret: 1 },
          { gare: "Kogenheim", heure: "06:55", arret: 1 },
          { gare: "Benfeld", heure: "07:00", arret: 1 },
          { gare: "Erstein", heure: "07:06", arret: 1 },
          { gare: "Fegersheim - Lipsheim", heure: "07:12", arret: 1 },
          { gare: "Graffenstaden", heure: "07:16", arret: 1 },
          { gare: "Strasbourg", heure: "07:24", arret: 5 },
          { gare: "Brumath", heure: "07:38", arret: 1 },
          { gare: "Mommenheim", heure: "07:43", arret: 1 }
        ]
      },
      {
        nom: "Mommenheim → Sélestat",
        dessertes: [
          { gare: "Mommenheim", heure: "08:20", arret: 2 },
          { gare: "Brumath", heure: "08:26", arret: 1 },
          { gare: "Strasbourg", heure: "08:36", arret: 5 },
          { gare: "Graffenstaden", heure: "08:48", arret: 1 },
          { gare: "Fegersheim - Lipsheim", heure: "08:52", arret: 1 },
          { gare: "Erstein", heure: "08:58", arret: 1 },
          { gare: "Benfeld", heure: "09:04", arret: 1 },
          { gare: "Kogenheim", heure: "09:09", arret: 1 },
          { gare: "Ebersheim", heure: "09:14", arret: 1 },
          { gare: "Sélestat", heure: "09:20", arret: 5 }
        ]
      },
      {
        nom: "Sélestat → Mommenheim",
        dessertes: [
          { gare: "Sélestat", heure: "09:40", arret: 5 },
          { gare: "Ebersheim", heure: "09:50", arret: 1 },
          { gare: "Kogenheim", heure: "09:55", arret: 1 },
          { gare: "Benfeld", heure: "10:00", arret: 1 },
          { gare: "Erstein", heure: "10:06", arret: 1 },
          { gare: "Fegersheim - Lipsheim", heure: "10:12", arret: 1 },
          { gare: "Graffenstaden", heure: "10:16", arret: 1 },
          { gare: "Strasbourg", heure: "10:24", arret: 5 },
          { gare: "Brumath", heure: "10:38", arret: 1 },
          { gare: "Mommenheim", heure: "10:43", arret: 2 }
        ]
      },
      {
        nom: "Mommenheim → Sélestat",
        dessertes: [
          { gare: "Mommenheim", heure: "11:20", arret: 2 },
          { gare: "Brumath", heure: "11:26", arret: 1 },
          { gare: "Strasbourg", heure: "11:36", arret: 5 },
          { gare: "Graffenstaden", heure: "11:48", arret: 1 },
          { gare: "Fegersheim - Lipsheim", heure: "11:52", arret: 1 },
          { gare: "Erstein", heure: "11:58", arret: 1 },
          { gare: "Benfeld", heure: "12:04", arret: 1 },
          { gare: "Kogenheim", heure: "12:09", arret: 1 },
          { gare: "Ebersheim", heure: "12:14", arret: 1 },
          { gare: "Sélestat", heure: "12:20", arret: 5 }
        ]
      },
      {
        nom: "Sélestat → Mommenheim",
        dessertes: [
          { gare: "Sélestat", heure: "12:40", arret: 5 },
          { gare: "Ebersheim", heure: "12:50", arret: 1 },
          { gare: "Kogenheim", heure: "12:55", arret: 1 },
          { gare: "Benfeld", heure: "13:00", arret: 1 },
          { gare: "Erstein", heure: "13:06", arret: 1 },
          { gare: "Fegersheim - Lipsheim", heure: "13:12", arret: 1 },
          { gare: "Graffenstaden", heure: "13:16", arret: 1 },
          { gare: "Strasbourg", heure: "13:24", arret: 5 },
          { gare: "Brumath", heure: "13:38", arret: 1 },
          { gare: "Mommenheim", heure: "13:43", arret: 2 }
        ]
      },
      {
        nom: "Mommenheim → Sélestat",
        dessertes: [
          { gare: "Mommenheim", heure: "14:20", arret: 2 },
          { gare: "Brumath", heure: "14:26", arret: 1 },
          { gare: "Strasbourg", heure: "14:36", arret: 5 },
          { gare: "Graffenstaden", heure: "14:48", arret: 1 },
          { gare: "Fegersheim - Lipsheim", heure: "14:52", arret: 1 },
          { gare: "Erstein", heure: "14:58", arret: 1 },
          { gare: "Benfeld", heure: "15:04", arret: 1 },
          { gare: "Kogenheim", heure: "15:09", arret: 1 },
          { gare: "Ebersheim", heure: "15:14", arret: 1 },
          { gare: "Sélestat", heure: "15:20", arret: 5 }
        ]
      },
      {
        nom: "Sélestat → Mommenheim",
        dessertes: [
          { gare: "Sélestat", heure: "15:40", arret: 5 },
          { gare: "Ebersheim", heure: "15:50", arret: 1 },
          { gare: "Kogenheim", heure: "15:55", arret: 1 },
          { gare: "Benfeld", heure: "16:00", arret: 1 },
          { gare: "Erstein", heure: "16:06", arret: 1 },
          { gare: "Fegersheim - Lipsheim", heure: "16:12", arret: 1 },
          { gare: "Graffenstaden", heure: "16:16", arret: 1 },
          { gare: "Strasbourg", heure: "16:24", arret: 5 },
          { gare: "Brumath", heure: "16:38", arret: 1 },
          { gare: "Mommenheim", heure: "16:43", arret: 2 }
        ]
      },
      {
        nom: "Mommenheim → Sélestat",
        dessertes: [
          { gare: "Mommenheim", heure: "17:20", arret: 2 },
          { gare: "Brumath", heure: "17:26", arret: 1 },
          { gare: "Strasbourg", heure: "17:36", arret: 5 },
          { gare: "Graffenstaden", heure: "17:48", arret: 1 },
          { gare: "Fegersheim - Lipsheim", heure: "17:52", arret: 1 },
          { gare: "Erstein", heure: "17:58", arret: 1 },
          { gare: "Benfeld", heure: "18:04", arret: 1 },
          { gare: "Kogenheim", heure: "18:09", arret: 1 },
          { gare: "Ebersheim", heure: "18:14", arret: 1 },
          { gare: "Sélestat", heure: "18:20", arret: 5 }
        ]
      },
      {
        nom: "Sélestat → Mommenheim",
        dessertes: [
          { gare: "Sélestat", heure: "18:40", arret: 5 },
          { gare: "Ebersheim", heure: "18:50", arret: 1 },
          { gare: "Kogenheim", heure: "18:55", arret: 1 },
          { gare: "Benfeld", heure: "19:00", arret: 1 },
          { gare: "Erstein", heure: "19:06", arret: 1 },
          { gare: "Fegersheim - Lipsheim", heure: "19:12", arret: 1 },
          { gare: "Graffenstaden", heure: "19:16", arret: 1 },
          { gare: "Strasbourg", heure: "19:24", arret: 5 },
          { gare: "Brumath", heure: "19:38", arret: 1 },
          { gare: "Mommenheim", heure: "19:43", arret: 2 }
        ]
      },
      {
        nom: "Mommenheim → Sélestat",
        dessertes: [
          { gare: "Mommenheim", heure: "20:20", arret: 2 },
          { gare: "Brumath", heure: "20:26", arret: 1 },
          { gare: "Strasbourg", heure: "20:36", arret: 5 },
          { gare: "Graffenstaden", heure: "20:48", arret: 1 },
          { gare: "Fegersheim - Lipsheim", heure: "20:52", arret: 1 },
          { gare: "Erstein", heure: "20:58", arret: 1 },
          { gare: "Benfeld", heure: "21:04", arret: 1 },
          { gare: "Kogenheim", heure: "21:09", arret: 1 },
          { gare: "Ebersheim", heure: "21:14", arret: 1 },
          { gare: "Sélestat", heure: "21:20", arret: 5 }
        ]
      }
    ]
  },

  {
    id: "TER 3065",
    nom: "Regiolis fluoGrandEst 6C",
    moteurs: ["25kV CA", "1.5kV CC", "diesel"],
    vitesseMax: 160,
    capacite: { premiere: 24, seconde: 304 },
    trajets: [
      {
        nom: "Strasbourg → Saverne",
        dessertes: [
          { gare: "Strasbourg", heure: "08:30", arret: 4 },
          { gare: "Mundolsheim", heure: "08:39", arret: 1 },
          { gare: "Vendenheim", heure: "08:42", arret: 1 },
          { gare: "Brumath", heure: "08:48", arret: 1 },
          { gare: "Mommenheim", heure: "08:53", arret: 2 },
          { gare: "Wilwisheim", heure: "09:04", arret: 1 },
          { gare: "Steinbourg", heure: "09:11", arret: 1 },
          { gare: "Saverne", heure: "09:16", arret: 4 }
        ]
      },
      {
        nom: "Saverne → Strasbourg",
        dessertes: [
          { gare: "Saverne", heure: "10:00", arret: 4 },
          { gare: "Steinbourg", heure: "10:08", arret: 1 },
          { gare: "Wilwisheim", heure: "10:15", arret: 1 },
          { gare: "Mommenheim", heure: "10:25", arret: 2 },
          { gare: "Brumath", heure: "10:31", arret: 1 },
          { gare: "Vendenheim", heure: "10:37", arret: 1 },
          { gare: "Mundolsheim", heure: "10:40", arret: 1 },
          { gare: "Strasbourg", heure: "10:46", arret: 4 }
        ]
      },
      {
        nom: "Strasbourg → Saverne",
        dessertes: [
          { gare: "Strasbourg", heure: "11:30", arret: 4 },
          { gare: "Mundolsheim", heure: "11:39", arret: 1 },
          { gare: "Vendenheim", heure: "11:42", arret: 1 },
          { gare: "Brumath", heure: "11:48", arret: 1 },
          { gare: "Mommenheim", heure: "11:53", arret: 2 },
          { gare: "Wilwisheim", heure: "12:04", arret: 1 },
          { gare: "Steinbourg", heure: "12:11", arret: 1 },
          { gare: "Saverne", heure: "12:16", arret: 4 }
        ]
      },
      {
        nom: "Saverne → Strasbourg",
        dessertes: [
          { gare: "Saverne", heure: "13:00", arret: 4 },
          { gare: "Steinbourg", heure: "13:08", arret: 1 },
          { gare: "Wilwisheim", heure: "13:15", arret: 1 },
          { gare: "Mommenheim", heure: "13:25", arret: 2 },
          { gare: "Brumath", heure: "13:31", arret: 1 },
          { gare: "Vendenheim", heure: "13:37", arret: 1 },
          { gare: "Mundolsheim", heure: "13:40", arret: 1 },
          { gare: "Strasbourg", heure: "13:46", arret: 4 }
        ]
      },
      {
        nom: "Strasbourg → Saverne",
        dessertes: [
          { gare: "Strasbourg", heure: "14:30", arret: 4 },
          { gare: "Mundolsheim", heure: "14:39", arret: 1 },
          { gare: "Vendenheim", heure: "14:42", arret: 1 },
          { gare: "Brumath", heure: "14:48", arret: 1 },
          { gare: "Mommenheim", heure: "14:53", arret: 2 },
          { gare: "Wilwisheim", heure: "15:04", arret: 1 },
          { gare: "Steinbourg", heure: "15:11", arret: 1 },
          { gare: "Saverne", heure: "15:16", arret: 4 }
        ]
      },
      {
        nom: "Saverne → Strasbourg",
        dessertes: [
          { gare: "Saverne", heure: "16:00", arret: 4 },
          { gare: "Steinbourg", heure: "16:08", arret: 1 },
          { gare: "Wilwisheim", heure: "16:15", arret: 1 },
          { gare: "Mommenheim", heure: "16:25", arret: 2 },
          { gare: "Brumath", heure: "16:31", arret: 1 },
          { gare: "Vendenheim", heure: "16:37", arret: 1 },
          { gare: "Mundolsheim", heure: "16:40", arret: 1 },
          { gare: "Strasbourg", heure: "16:46", arret: 4 }
        ]
      },
      {
        nom: "Strasbourg → Saverne",
        dessertes: [
          { gare: "Strasbourg", heure: "17:35", arret: 4 },
          { gare: "Mundolsheim", heure: "17:44", arret: 1 },
          { gare: "Vendenheim", heure: "17:47", arret: 1 },
          { gare: "Brumath", heure: "17:53", arret: 1 },
          { gare: "Mommenheim", heure: "17:58", arret: 2 },
          { gare: "Wilwisheim", heure: "18:09", arret: 1 },
          { gare: "Steinbourg", heure: "18:16", arret: 1 },
          { gare: "Saverne", heure: "18:21", arret: 4 }
        ]
      },
      {
        nom: "Saverne → Strasbourg",
        dessertes: [
          { gare: "Saverne", heure: "19:00", arret: 4 },
          { gare: "Steinbourg", heure: "19:08", arret: 1 },
          { gare: "Wilwisheim", heure: "19:15", arret: 1 },
          { gare: "Mommenheim", heure: "19:25", arret: 2 },
          { gare: "Brumath", heure: "19:31", arret: 1 },
          { gare: "Vendenheim", heure: "19:37", arret: 1 },
          { gare: "Mundolsheim", heure: "19:40", arret: 1 },
          { gare: "Strasbourg", heure: "19:46", arret: 4 }
        ]
      },
      {
        nom: "Strasbourg → Saverne",
        dessertes: [
          { gare: "Strasbourg", heure: "20:30", arret: 4 },
          { gare: "Mundolsheim", heure: "20:39", arret: 1 },
          { gare: "Vendenheim", heure: "20:42", arret: 1 },
          { gare: "Brumath", heure: "20:48", arret: 1 },
          { gare: "Mommenheim", heure: "20:53", arret: 2 },
          { gare: "Wilwisheim", heure: "21:04", arret: 1 },
          { gare: "Steinbourg", heure: "21:11", arret: 1 },
          { gare: "Saverne", heure: "21:16", arret: 4 }
        ]
      },
      {
        nom: "Saverne → Strasbourg",
        dessertes: [
          { gare: "Saverne", heure: "22:00", arret: 4 },
          { gare: "Steinbourg", heure: "22:08", arret: 1 },
          { gare: "Wilwisheim", heure: "22:15", arret: 1 },
          { gare: "Mommenheim", heure: "22:25", arret: 2 },
          { gare: "Brumath", heure: "22:31", arret: 1 },
          { gare: "Vendenheim", heure: "22:37", arret: 1 },
          { gare: "Mundolsheim", heure: "22:40", arret: 1 },
          { gare: "Strasbourg", heure: "22:46", arret: 4 }
        ]
      }
    ]
  },

  {
    id: "TER 3070",
    nom: "AGC Alsace 3C",
    moteurs: ["diesel"],
    vitesseMax: 160,
    capacite: { premiere: 48, seconde: 268 },
    composition: ["AGC Alsace 3C"],
    trajets: [
      {
        nom: "Sarreguemines → Strasbourg",
        dessertes: [
          { gare: "Sarreguemines", heure: "05:30", arret: 4 },
          { gare: "Wittring", heure: "05:44", arret: 1 },
          { gare: "Oermingen", heure: "05:52", arret: 1 },
          { gare: "Diemeringen", heure: "06:03", arret: 1 },
          { gare: "Tieffenbach - Struth", heure: "06:13", arret: 1 },
          { gare: "Wingen Sur Moder", heure: "06:29", arret: 1 },
          { gare: "Ingwiller", heure: "06:42", arret: 1 },
          { gare: "Obermodern", heure: "06:52", arret: 1 },
          { gare: "Mommenheim", heure: "07:09", arret: 1 },
          { gare: "Brumath", heure: "07:15", arret: 1 },
          { gare: "Vendenheim", heure: "07:21", arret: 1 },
          { gare: "Mundolsheim", heure: "07:24", arret: 1 },
          { gare: "Strasbourg", heure: "07:31", arret: 4 }
        ]
      },
      {
        nom: "Strasbourg → Sarreguemines",
        dessertes: [
          { gare: "Strasbourg", heure: "08:00", arret: 4 },
          { gare: "Mundolsheim", heure: "08:10", arret: 1 },
          { gare: "Vendenheim", heure: "08:13", arret: 1 },
          { gare: "Brumath", heure: "08:19", arret: 1 },
          { gare: "Mommenheim", heure: "08:25", arret: 1 },
          { gare: "Obermodern", heure: "08:42", arret: 1 },
          { gare: "Ingwiller", heure: "08:52", arret: 1 },
          { gare: "Wingen Sur Moder", heure: "09:05", arret: 1 },
          { gare: "Tieffenbach - Struth", heure: "09:21", arret: 1 },
          { gare: "Diemeringen", heure: "09:31", arret: 1 },
          { gare: "Oermingen", heure: "09:42", arret: 1 },
          { gare: "Wittring", heure: "09:50", arret: 1 },
          { gare: "Sarreguemines", heure: "10:01", arret: 4 }
        ]
      },
      {
        nom: "Sarreguemines → Strasbourg",
        dessertes: [
          { gare: "Sarreguemines", heure: "10:30", arret: 4 },
          { gare: "Wittring", heure: "10:44", arret: 1 },
          { gare: "Oermingen", heure: "10:52", arret: 1 },
          { gare: "Diemeringen", heure: "11:03", arret: 1 },
          { gare: "Tieffenbach - Struth", heure: "11:13", arret: 1 },
          { gare: "Wingen Sur Moder", heure: "11:29", arret: 1 },
          { gare: "Ingwiller", heure: "11:42", arret: 1 },
          { gare: "Obermodern", heure: "11:52", arret: 1 },
          { gare: "Mommenheim", heure: "12:09", arret: 1 },
          { gare: "Brumath", heure: "12:15", arret: 1 },
          { gare: "Vendenheim", heure: "12:21", arret: 1 },
          { gare: "Mundolsheim", heure: "12:24", arret: 1 },
          { gare: "Strasbourg", heure: "12:31", arret: 4 }
        ]
      },
      {
        nom: "Strasbourg → Sarreguemines",
        dessertes: [
          { gare: "Strasbourg", heure: "13:00", arret: 4 },
          { gare: "Mundolsheim", heure: "13:10", arret: 1 },
          { gare: "Vendenheim", heure: "13:13", arret: 1 },
          { gare: "Brumath", heure: "13:19", arret: 1 },
          { gare: "Mommenheim", heure: "13:25", arret: 1 },
          { gare: "Obermodern", heure: "13:42", arret: 1 },
          { gare: "Ingwiller", heure: "13:52", arret: 1 },
          { gare: "Wingen Sur Moder", heure: "14:05", arret: 1 },
          { gare: "Tieffenbach - Struth", heure: "14:21", arret: 1 },
          { gare: "Diemeringen", heure: "14:31", arret: 1 },
          { gare: "Oermingen", heure: "14:42", arret: 1 },
          { gare: "Wittring", heure: "14:50", arret: 1 },
          { gare: "Sarreguemines", heure: "15:01", arret: 4 }
        ]
      },
      {
        nom: "Sarreguemines → Strasbourg",
        dessertes: [
          { gare: "Sarreguemines", heure: "15:30", arret: 4 },
          { gare: "Wittring", heure: "15:44", arret: 1 },
          { gare: "Oermingen", heure: "15:52", arret: 1 },
          { gare: "Diemeringen", heure: "16:03", arret: 1 },
          { gare: "Tieffenbach - Struth", heure: "16:13", arret: 1 },
          { gare: "Wingen Sur Moder", heure: "16:29", arret: 1 },
          { gare: "Ingwiller", heure: "16:42", arret: 1 },
          { gare: "Obermodern", heure: "16:52", arret: 1 },
          { gare: "Mommenheim", heure: "17:09", arret: 1 },
          { gare: "Brumath", heure: "17:15", arret: 1 },
          { gare: "Vendenheim", heure: "17:21", arret: 1 },
          { gare: "Mundolsheim", heure: "17:24", arret: 1 },
          { gare: "Strasbourg", heure: "17:31", arret: 4 }
        ]
      },
      {
        nom: "Strasbourg → Sarreguemines",
        dessertes: [
          { gare: "Strasbourg", heure: "18:00", arret: 4 },
          { gare: "Mundolsheim", heure: "18:10", arret: 1 },
          { gare: "Vendenheim", heure: "18:13", arret: 1 },
          { gare: "Brumath", heure: "18:19", arret: 1 },
          { gare: "Mommenheim", heure: "18:25", arret: 1 },
          { gare: "Obermodern", heure: "18:42", arret: 1 },
          { gare: "Ingwiller", heure: "18:52", arret: 1 },
          { gare: "Wingen Sur Moder", heure: "19:05", arret: 1 },
          { gare: "Tieffenbach - Struth", heure: "19:21", arret: 1 },
          { gare: "Diemeringen", heure: "19:31", arret: 1 },
          { gare: "Oermingen", heure: "19:42", arret: 1 },
          { gare: "Wittring", heure: "19:50", arret: 1 },
          { gare: "Sarreguemines", heure: "20:01", arret: 4 }
        ]
      }
    ]
  },

  {
    id: "TER 3071",
    nom: "AGC blueMetrolorLorraine 3C",
    moteurs: ["diesel"],
    vitesseMax: 160,
    capacite: { premiere: 48, seconde: 268 },
    composition: ["AGC Alsace 3C"],
    trajets: [
      {
        nom: "Strasbourg → Sarreguemines",
        dessertes: [
          { gare: "Strasbourg", heure: "07:00", arret: 4 },
          { gare: "Mundolsheim", heure: "07:10", arret: 1 },
          { gare: "Vendenheim", heure: "07:13", arret: 1 },
          { gare: "Brumath", heure: "07:19", arret: 1 },
          { gare: "Mommenheim", heure: "07:25", arret: 1 },
          { gare: "Obermodern", heure: "07:42", arret: 1 },
          { gare: "Ingwiller", heure: "07:52", arret: 1 },
          { gare: "Wingen Sur Moder", heure: "08:05", arret: 1 },
          { gare: "Tieffenbach - Struth", heure: "08:21", arret: 1 },
          { gare: "Diemeringen", heure: "08:31", arret: 1 },
          { gare: "Oermingen", heure: "08:42", arret: 1 },
          { gare: "Wittring", heure: "08:50", arret: 1 },
          { gare: "Sarreguemines", heure: "09:01", arret: 4 }
        ]
      },
      {
        nom: "Sarreguemines → Strasbourg",
        dessertes: [
          { gare: "Sarreguemines", heure: "09:30", arret: 4 },
          { gare: "Wittring", heure: "09:44", arret: 1 },
          { gare: "Oermingen", heure: "09:52", arret: 1 },
          { gare: "Diemeringen", heure: "10:03", arret: 1 },
          { gare: "Tieffenbach - Struth", heure: "10:13", arret: 1 },
          { gare: "Wingen Sur Moder", heure: "10:29", arret: 1 },
          { gare: "Ingwiller", heure: "10:42", arret: 1 },
          { gare: "Obermodern", heure: "10:52", arret: 1 },
          { gare: "Mommenheim", heure: "11:09", arret: 1 },
          { gare: "Brumath", heure: "11:15", arret: 1 },
          { gare: "Vendenheim", heure: "11:21", arret: 1 },
          { gare: "Mundolsheim", heure: "11:24", arret: 1 },
          { gare: "Strasbourg", heure: "11:31", arret: 4 }
        ]
      },
      {
        nom: "Strasbourg → Sarreguemines",
        dessertes: [
          { gare: "Strasbourg", heure: "12:00", arret: 4 },
          { gare: "Mundolsheim", heure: "12:10", arret: 1 },
          { gare: "Vendenheim", heure: "12:13", arret: 1 },
          { gare: "Brumath", heure: "12:19", arret: 1 },
          { gare: "Mommenheim", heure: "12:25", arret: 1 },
          { gare: "Obermodern", heure: "12:42", arret: 1 },
          { gare: "Ingwiller", heure: "12:52", arret: 1 },
          { gare: "Wingen Sur Moder", heure: "13:05", arret: 1 },
          { gare: "Tieffenbach - Struth", heure: "13:21", arret: 1 },
          { gare: "Diemeringen", heure: "13:31", arret: 1 },
          { gare: "Oermingen", heure: "13:42", arret: 1 },
          { gare: "Wittring", heure: "13:50", arret: 1 },
          { gare: "Sarreguemines", heure: "14:01", arret: 4 }
        ]
      },
      {
        nom: "Sarreguemines → Strasbourg",
        dessertes: [
          { gare: "Sarreguemines", heure: "14:30", arret: 4 },
          { gare: "Wittring", heure: "14:44", arret: 1 },
          { gare: "Oermingen", heure: "14:52", arret: 1 },
          { gare: "Diemeringen", heure: "15:03", arret: 1 },
          { gare: "Tieffenbach - Struth", heure: "15:13", arret: 1 },
          { gare: "Wingen Sur Moder", heure: "15:29", arret: 1 },
          { gare: "Ingwiller", heure: "15:42", arret: 1 },
          { gare: "Obermodern", heure: "15:52", arret: 1 },
          { gare: "Mommenheim", heure: "16:09", arret: 1 },
          { gare: "Brumath", heure: "16:15", arret: 1 },
          { gare: "Vendenheim", heure: "16:21", arret: 1 },
          { gare: "Mundolsheim", heure: "16:24", arret: 1 },
          { gare: "Strasbourg", heure: "16:31", arret: 4 }
        ]
      },
      {
        nom: "Strasbourg → Sarreguemines",
        dessertes: [
          { gare: "Strasbourg", heure: "17:00", arret: 4 },
          { gare: "Mundolsheim", heure: "17:10", arret: 1 },
          { gare: "Vendenheim", heure: "17:13", arret: 1 },
          { gare: "Brumath", heure: "17:19", arret: 1 },
          { gare: "Mommenheim", heure: "17:25", arret: 1 },
          { gare: "Obermodern", heure: "17:42", arret: 1 },
          { gare: "Ingwiller", heure: "17:52", arret: 1 },
          { gare: "Wingen Sur Moder", heure: "18:05", arret: 1 },
          { gare: "Tieffenbach - Struth", heure: "18:21", arret: 1 },
          { gare: "Diemeringen", heure: "18:31", arret: 1 },
          { gare: "Oermingen", heure: "18:42", arret: 1 },
          { gare: "Wittring", heure: "18:50", arret: 1 },
          { gare: "Sarreguemines", heure: "19:01", arret: 4 }
        ]
      },
      {
        nom: "Sarreguemines → Strasbourg",
        dessertes: [
          { gare: "Sarreguemines", heure: "19:30", arret: 4 },
          { gare: "Wittring", heure: "19:44", arret: 1 },
          { gare: "Oermingen", heure: "19:52", arret: 1 },
          { gare: "Diemeringen", heure: "20:03", arret: 1 },
          { gare: "Tieffenbach - Struth", heure: "20:13", arret: 1 },
          { gare: "Wingen Sur Moder", heure: "20:29", arret: 1 },
          { gare: "Ingwiller", heure: "20:42", arret: 1 },
          { gare: "Obermodern", heure: "20:52", arret: 1 },
          { gare: "Mommenheim", heure: "21:09", arret: 1 },
          { gare: "Brumath", heure: "21:15", arret: 1 },
          { gare: "Vendenheim", heure: "21:21", arret: 1 },
          { gare: "Mundolsheim", heure: "21:24", arret: 1 },
          { gare: "Strasbourg", heure: "21:31", arret: 4 }
        ]
      }
    ]
  },

  {
    id: "TER 3080",
    nom: "AGC blueAlsace 4C",
    moteurs: ["25kV CA", "1.5kV CC"],
    vitesseMax: 160,
    capacite: { premiere: 24, seconde: 183 },
    trajets: [
      {
        nom: "Haguenau → Strasbourg",
        dessertes: [
          { gare: "Haguenau", heure: "06:00", arret: 2 },
          { gare: "Marienthal", heure: "06:06", arret: 1 },
          { gare: "Bischwiller", heure: "06:10", arret: 1 },
          { gare: "Kurtzenhouse", heure: "06:15", arret: 1 },
          { gare: "Weyersheim", heure: "06:19", arret: 1 },
          { gare: "Hoerdt", heure: "06:22", arret: 1 },
          { gare: "Vendenheim", heure: "06:29", arret: 1 },
          { gare: "Mundolsheim", heure: "06:32", arret: 1 },
          { gare: "Strasbourg", heure: "06:38", arret: 4 }
        ]
      },
      {
        nom: "Strasbourg → Haguenau",
        dessertes: [
          { gare: "Strasbourg", heure: "07:18", arret: 4 },
          { gare: "Mundolsheim", heure: "07:27", arret: 1 },
          { gare: "Vendenheim", heure: "07:30", arret: 1 },
          { gare: "Hoerdt", heure: "07:37", arret: 1 },
          { gare: "Weyersheim", heure: "07:40", arret: 1 },
          { gare: "Kurtzenhouse", heure: "07:44", arret: 1 },
          { gare: "Bischwiller", heure: "07:49", arret: 1 },
          { gare: "Marienthal", heure: "07:53", arret: 1 },
          { gare: "Haguenau", heure: "07:58", arret: 2 }
        ]
      },
      {
        nom: "Haguenau → Strasbourg",
        dessertes: [
          { gare: "Haguenau", heure: "08:28", arret: 2 },
          { gare: "Marienthal", heure: "08:34", arret: 1 },
          { gare: "Bischwiller", heure: "08:38", arret: 1 },
          { gare: "Kurtzenhouse", heure: "08:43", arret: 1 },
          { gare: "Weyersheim", heure: "08:47", arret: 1 },
          { gare: "Hoerdt", heure: "08:50", arret: 1 },
          { gare: "Vendenheim", heure: "08:57", arret: 1 },
          { gare: "Mundolsheim", heure: "09:00", arret: 1 },
          { gare: "Strasbourg", heure: "09:06", arret: 4 }
        ]
      },
      {
        nom: "Strasbourg → Haguenau",
        dessertes: [
          { gare: "Strasbourg", heure: "09:50", arret: 4 },
          { gare: "Mundolsheim", heure: "09:59", arret: 1 },
          { gare: "Vendenheim", heure: "10:02", arret: 1 },
          { gare: "Hoerdt", heure: "10:09", arret: 1 },
          { gare: "Weyersheim", heure: "10:12", arret: 1 },
          { gare: "Kurtzenhouse", heure: "10:16", arret: 1 },
          { gare: "Bischwiller", heure: "10:21", arret: 1 },
          { gare: "Marienthal", heure: "10:25", arret: 1 },
          { gare: "Haguenau", heure: "10:30", arret: 2 }
        ]
      },
      {
        nom: "Haguenau → Strasbourg",
        dessertes: [
          { gare: "Haguenau", heure: "12:40", arret: 2 },
          { gare: "Marienthal", heure: "12:46", arret: 1 },
          { gare: "Bischwiller", heure: "12:50", arret: 1 },
          { gare: "Kurtzenhouse", heure: "12:55", arret: 1 },
          { gare: "Weyersheim", heure: "12:59", arret: 1 },
          { gare: "Hoerdt", heure: "13:02", arret: 1 },
          { gare: "Vendenheim", heure: "13:09", arret: 1 },
          { gare: "Mundolsheim", heure: "13:12", arret: 1 },
          { gare: "Strasbourg", heure: "13:18", arret: 4 }
        ]
      },
      {
        nom: "Strasbourg → Haguenau",
        dessertes: [
          { gare: "Strasbourg", heure: "13:50", arret: 4 },
          { gare: "Mundolsheim", heure: "13:59", arret: 1 },
          { gare: "Vendenheim", heure: "14:02", arret: 1 },
          { gare: "Hoerdt", heure: "14:09", arret: 1 },
          { gare: "Weyersheim", heure: "14:12", arret: 1 },
          { gare: "Kurtzenhouse", heure: "14:16", arret: 1 },
          { gare: "Bischwiller", heure: "14:21", arret: 1 },
          { gare: "Marienthal", heure: "14:25", arret: 1 },
          { gare: "Haguenau", heure: "14:30", arret: 2 }
        ]
      },
      {
        nom: "Haguenau → Strasbourg",
        dessertes: [
          { gare: "Haguenau", heure: "16:40", arret: 2 },
          { gare: "Marienthal", heure: "16:46", arret: 1 },
          { gare: "Bischwiller", heure: "16:50", arret: 1 },
          { gare: "Kurtzenhouse", heure: "16:55", arret: 1 },
          { gare: "Weyersheim", heure: "16:59", arret: 1 },
          { gare: "Hoerdt", heure: "17:02", arret: 1 },
          { gare: "Vendenheim", heure: "17:09", arret: 1 },
          { gare: "Mundolsheim", heure: "17:12", arret: 1 },
          { gare: "Strasbourg", heure: "17:18", arret: 4 }
        ]
      },
      {
        nom: "Strasbourg → Haguenau",
        dessertes: [
          { gare: "Strasbourg", heure: "17:50", arret: 4 },
          { gare: "Mundolsheim", heure: "17:59", arret: 1 },
          { gare: "Vendenheim", heure: "18:02", arret: 1 },
          { gare: "Hoerdt", heure: "18:09", arret: 1 },
          { gare: "Weyersheim", heure: "18:12", arret: 1 },
          { gare: "Kurtzenhouse", heure: "18:16", arret: 1 },
          { gare: "Bischwiller", heure: "18:21", arret: 1 },
          { gare: "Marienthal", heure: "18:25", arret: 1 },
          { gare: "Haguenau", heure: "18:30", arret: 2 }
        ]
      },
      {
        nom: "Haguenau → Strasbourg",
        dessertes: [
          { gare: "Haguenau", heure: "18:40", arret: 2 },
          { gare: "Marienthal", heure: "18:46", arret: 1 },
          { gare: "Bischwiller", heure: "18:50", arret: 1 },
          { gare: "Kurtzenhouse", heure: "18:55", arret: 1 },
          { gare: "Weyersheim", heure: "18:59", arret: 1 },
          { gare: "Hoerdt", heure: "19:02", arret: 1 },
          { gare: "Vendenheim", heure: "19:09", arret: 1 },
          { gare: "Mundolsheim", heure: "19:12", arret: 1 },
          { gare: "Strasbourg", heure: "19:18", arret: 4 }
        ]
      },
      {
        nom: "Strasbourg → Haguenau",
        dessertes: [
          { gare: "Strasbourg", heure: "19:48", arret: 4 },
          { gare: "Mundolsheim", heure: "19:57", arret: 1 },
          { gare: "Vendenheim", heure: "20:00", arret: 1 },
          { gare: "Hoerdt", heure: "20:07", arret: 1 },
          { gare: "Weyersheim", heure: "20:10", arret: 1 },
          { gare: "Kurtzenhouse", heure: "20:14", arret: 1 },
          { gare: "Bischwiller", heure: "20:19", arret: 1 },
          { gare: "Marienthal", heure: "20:23", arret: 1 },
          { gare: "Haguenau", heure: "20:28", arret: 2 }
        ]
      },
      {
        nom: "Haguenau → Strasbourg",
        dessertes: [
          { gare: "Haguenau", heure: "22:00", arret: 2 },
          { gare: "Marienthal", heure: "22:06", arret: 1 },
          { gare: "Bischwiller", heure: "22:10", arret: 1 },
          { gare: "Kurtzenhouse", heure: "22:15", arret: 1 },
          { gare: "Weyersheim", heure: "22:19", arret: 1 },
          { gare: "Hoerdt", heure: "22:22", arret: 1 },
          { gare: "Vendenheim", heure: "22:29", arret: 1 },
          { gare: "Mundolsheim", heure: "22:32", arret: 1 },
          { gare: "Strasbourg", heure: "22:38", arret: 4 }
        ]
      },
      {
        nom: "Strasbourg → Haguenau",
        dessertes: [
          { gare: "Strasbourg", heure: "22:50", arret: 4 },
          { gare: "Mundolsheim", heure: "22:59", arret: 1 },
          { gare: "Vendenheim", heure: "23:02", arret: 1 },
          { gare: "Hoerdt", heure: "23:09", arret: 1 },
          { gare: "Weyersheim", heure: "23:12", arret: 1 },
          { gare: "Kurtzenhouse", heure: "23:16", arret: 1 },
          { gare: "Bischwiller", heure: "23:21", arret: 1 },
          { gare: "Marienthal", heure: "23:25", arret: 1 },
          { gare: "Haguenau", heure: "23:30", arret: 2 }
        ]
      }
    ]
  },

  {
    id: "TER 3084",
    nom: "Regiolis fluoGrandEst 4C",
    moteurs: ["25kV CA", "1.5kV CC", "diesel"],
    vitesseMax: 160,
    capacite: { premiere: 24, seconde: 210 },
    trajets: [
      {
        nom: "Niederbronn-les-Bains → Strasbourg",
        dessertes: [
          { gare: "Niederbronn-les-Bains", heure: "07:30", arret: 2 },
          { gare: "Reichshoffen", heure: "07:36", arret: 1 },
          { gare: "Gundershoffen", heure: "07:41", arret: 1 },
          { gare: "Mertzwiller", heure: "07:48", arret: 1 },
          { gare: "Schweighouse-Sur-Moder", heure: "07:59", arret: 1 },
          { gare: "Haguenau", heure: "08:06", arret: 2 },
          { gare: "Marienthal", heure: "08:12", arret: 1 },
          { gare: "Bischwiller", heure: "08:16", arret: 1 },
          { gare: "Kurtzenhouse", heure: "08:21", arret: 1 },
          { gare: "Weyersheim", heure: "08:25", arret: 1 },
          { gare: "Hoerdt", heure: "08:28", arret: 1 },
          { gare: "Vendenheim", heure: "08:35", arret: 1 },
          { gare: "Mundolsheim", heure: "08:38", arret: 1 },
          { gare: "Strasbourg", heure: "08:44", arret: 2 }
        ]
      },
      {
        nom: "Strasbourg → Niederbronn-les-Bains",
        dessertes: [
          { gare: "Strasbourg", heure: "09:30", arret: 2 },
          { gare: "Mundolsheim", heure: "09:37", arret: 1 },
          { gare: "Vendenheim", heure: "09:40", arret: 1 },
          { gare: "Hoerdt", heure: "09:47", arret: 1 },
          { gare: "Weyersheim", heure: "09:50", arret: 1 },
          { gare: "Kurtzenhouse", heure: "09:54", arret: 1 },
          { gare: "Bischwiller", heure: "09:59", arret: 1 },
          { gare: "Marienthal", heure: "10:03", arret: 1 },
          { gare: "Haguenau", heure: "10:08", arret: 2 },
          { gare: "Schweighouse-Sur-Moder", heure: "10:16", arret: 1 },
          { gare: "Mertzwiller", heure: "10:27", arret: 1 },
          { gare: "Gundershoffen", heure: "10:34", arret: 1 },
          { gare: "Reichshoffen", heure: "10:39", arret: 1 },
          { gare: "Niederbronn-les-Bains", heure: "10:44", arret: 2 }
        ]
      },
      {
        nom: "Niederbronn-les-Bains → Strasbourg",
        dessertes: [
          { gare: "Niederbronn-les-Bains", heure: "11:30", arret: 2 },
          { gare: "Reichshoffen", heure: "11:36", arret: 1 },
          { gare: "Gundershoffen", heure: "11:41", arret: 1 },
          { gare: "Mertzwiller", heure: "11:48", arret: 1 },
          { gare: "Schweighouse-Sur-Moder", heure: "11:59", arret: 1 },
          { gare: "Haguenau", heure: "12:06", arret: 2 },
          { gare: "Vendenheim", heure: "12:27", arret: 1 },
          { gare: "Strasbourg", heure: "12:35", arret: 4 },
          { gare: "Krimmeri-Meinau", heure: "12:43", arret: 10 },
          { gare: "Strasbourg", heure: "12:57", arret: 2 }
        ]
      },
      {
        nom: "Strasbourg → Niederbronn-les-Bains",
        dessertes: [
          { gare: "Strasbourg", heure: "13:30", arret: 2 },
          { gare: "Mundolsheim", heure: "13:37", arret: 1 },
          { gare: "Vendenheim", heure: "13:40", arret: 1 },
          { gare: "Hoerdt", heure: "13:47", arret: 1 },
          { gare: "Weyersheim", heure: "13:50", arret: 1 },
          { gare: "Kurtzenhouse", heure: "13:54", arret: 1 },
          { gare: "Bischwiller", heure: "13:59", arret: 1 },
          { gare: "Marienthal", heure: "14:03", arret: 1 },
          { gare: "Haguenau", heure: "14:08", arret: 2 },
          { gare: "Schweighouse-Sur-Moder", heure: "14:16", arret: 1 },
          { gare: "Mertzwiller", heure: "14:27", arret: 1 },
          { gare: "Gundershoffen", heure: "14:34", arret: 1 },
          { gare: "Reichshoffen", heure: "14:39", arret: 1 },
          { gare: "Niederbronn-les-Bains", heure: "14:44", arret: 2 }
        ]
      },
      {
        nom: "Niederbronn-les-Bains → Strasbourg",
        dessertes: [
          { gare: "Niederbronn-les-Bains", heure: "15:30", arret: 2 },
          { gare: "Reichshoffen", heure: "15:36", arret: 1 },
          { gare: "Gundershoffen", heure: "15:41", arret: 1 },
          { gare: "Mertzwiller", heure: "15:48", arret: 1 },
          { gare: "Schweighouse-Sur-Moder", heure: "15:59", arret: 1 },
          { gare: "Haguenau", heure: "16:06", arret: 2 },
          { gare: "Marienthal", heure: "16:12", arret: 1 },
          { gare: "Bischwiller", heure: "16:16", arret: 1 },
          { gare: "Kurtzenhouse", heure: "16:21", arret: 1 },
          { gare: "Weyersheim", heure: "16:25", arret: 1 },
          { gare: "Hoerdt", heure: "16:28", arret: 1 },
          { gare: "Strasbourg", heure: "16:40", arret: 4 },
          { gare: "Krimmeri-Meinau", heure: "16:48", arret: 10 },
          { gare: "Strasbourg", heure: "17:02", arret: 2 }
        ]
      },
      {
        nom: "Strasbourg → Niederbronn-les-Bains",
        dessertes: [
          { gare: "Strasbourg", heure: "17:30", arret: 2 },
          { gare: "Mundolsheim", heure: "17:37", arret: 1 },
          { gare: "Vendenheim", heure: "17:40", arret: 1 },
          { gare: "Hoerdt", heure: "17:47", arret: 1 },
          { gare: "Weyersheim", heure: "17:50", arret: 1 },
          { gare: "Kurtzenhouse", heure: "17:54", arret: 1 },
          { gare: "Bischwiller", heure: "17:59", arret: 1 },
          { gare: "Marienthal", heure: "18:03", arret: 1 },
          { gare: "Haguenau", heure: "18:08", arret: 2 },
          { gare: "Schweighouse-Sur-Moder", heure: "18:16", arret: 1 },
          { gare: "Mertzwiller", heure: "18:27", arret: 1 },
          { gare: "Gundershoffen", heure: "18:34", arret: 1 },
          { gare: "Reichshoffen", heure: "18:39", arret: 1 },
          { gare: "Niederbronn-les-Bains", heure: "18:44", arret: 2 }
        ]
      },
      {
        nom: "Niederbronn-les-Bains → Strasbourg",
        dessertes: [
          { gare: "Niederbronn-les-Bains", heure: "19:30", arret: 2 },
          { gare: "Reichshoffen", heure: "19:36", arret: 1 },
          { gare: "Gundershoffen", heure: "19:41", arret: 1 },
          { gare: "Mertzwiller", heure: "19:48", arret: 1 },
          { gare: "Schweighouse-Sur-Moder", heure: "19:59", arret: 1 },
          { gare: "Haguenau", heure: "20:06", arret: 2 },
          { gare: "Marienthal", heure: "20:12", arret: 1 },
          { gare: "Bischwiller", heure: "20:16", arret: 1 },
          { gare: "Kurtzenhouse", heure: "20:21", arret: 1 },
          { gare: "Weyersheim", heure: "20:25", arret: 1 },
          { gare: "Hoerdt", heure: "20:28", arret: 1 },
          { gare: "Vendenheim", heure: "20:35", arret: 1 },
          { gare: "Mundolsheim", heure: "20:38", arret: 1 },
          { gare: "Strasbourg", heure: "20:44", arret: 2 }
        ]
      },
      {
        nom: "Strasbourg → Niederbronn-les-Bains",
        dessertes: [
          { gare: "Strasbourg", heure: "21:30", arret: 2 },
          { gare: "Mundolsheim", heure: "21:37", arret: 1 },
          { gare: "Vendenheim", heure: "21:40", arret: 1 },
          { gare: "Hoerdt", heure: "21:47", arret: 1 },
          { gare: "Weyersheim", heure: "21:50", arret: 1 },
          { gare: "Kurtzenhouse", heure: "21:54", arret: 1 },
          { gare: "Bischwiller", heure: "21:59", arret: 1 },
          { gare: "Marienthal", heure: "22:03", arret: 1 },
          { gare: "Haguenau", heure: "22:08", arret: 2 },
          { gare: "Schweighouse-Sur-Moder", heure: "22:16", arret: 1 },
          { gare: "Mertzwiller", heure: "22:27", arret: 1 },
          { gare: "Gundershoffen", heure: "22:34", arret: 1 },
          { gare: "Reichshoffen", heure: "22:39", arret: 1 },
          { gare: "Niederbronn-les-Bains", heure: "22:44", arret: 2 }
        ]
      }
    ]
  },

  {
    id: "TER 3086",
    nom: "Regiolis blueFluoEurope 4C",
    moteurs: ["25kV CA", "1.5kV CC", "diesel"],
    vitesseMax: 160,
    capacite: { premiere: 24, seconde: 210 },
    trajets: [
      {
        nom: "Wissembourg → Strasbourg",
        dessertes: [
          { gare: "Wissembourg", heure: "06:26", arret: 4 },
          { gare: "Riedseltz", heure: "06:35", arret: 1 },
          { gare: "Soultz-sous-Forêts", heure: "06:50", arret: 1 },
          { gare: "Hoelschloch", heure: "06:58", arret: 1 },
          { gare: "Walbourg", heure: "07:04", arret: 1 },
          { gare: "Haguenau", heure: "07:14", arret: 2 },
          { gare: "Marienthal", heure: "07:20", arret: 1 },
          { gare: "Bischwiller", heure: "07:24", arret: 1 },
          { gare: "Kurtzenhouse", heure: "07:29", arret: 1 },
          { gare: "Weyersheim", heure: "07:33", arret: 1 },
          { gare: "Hoerdt", heure: "07:36", arret: 1 },
          { gare: "Vendenheim", heure: "07:43", arret: 1 },
          { gare: "Mundolsheim", heure: "07:46", arret: 1 },
          { gare: "Strasbourg", heure: "07:52", arret: 4 }
        ]
      },
      {
        nom: "Strasbourg → Wissembourg",
        dessertes: [
          { gare: "Strasbourg", heure: "08:15", arret: 4 },
          { gare: "Mundolsheim", heure: "08:24", arret: 1 },
          { gare: "Vendenheim", heure: "08:27", arret: 1 },
          { gare: "Hoerdt", heure: "08:34", arret: 1 },
          { gare: "Weyersheim", heure: "08:37", arret: 1 },
          { gare: "Kurtzenhouse", heure: "08:41", arret: 1 },
          { gare: "Bischwiller", heure: "08:46", arret: 1 },
          { gare: "Marienthal", heure: "08:50", arret: 1 },
          { gare: "Haguenau", heure: "08:55", arret: 2 },
          { gare: "Walbourg", heure: "09:06", arret: 1 },
          { gare: "Hoelschloch", heure: "09:12", arret: 1 },
          { gare: "Soultz-sous-Forêts", heure: "09:20", arret: 1 },
          { gare: "Riedseltz", heure: "09:35", arret: 1 },
          { gare: "Wissembourg", heure: "09:41", arret: 4 }
        ]
      },
      {
        nom: "Wissembourg → Strasbourg",
        dessertes: [
          { gare: "Wissembourg", heure: "10:26", arret: 4 },
          { gare: "Riedseltz", heure: "10:35", arret: 1 },
          { gare: "Soultz-sous-Forêts", heure: "10:50", arret: 1 },
          { gare: "Hoelschloch", heure: "10:58", arret: 1 },
          { gare: "Walbourg", heure: "11:04", arret: 1 },
          { gare: "Haguenau", heure: "11:14", arret: 2 },
          { gare: "Marienthal", heure: "11:20", arret: 1 },
          { gare: "Bischwiller", heure: "11:24", arret: 1 },
          { gare: "Kurtzenhouse", heure: "11:29", arret: 1 },
          { gare: "Weyersheim", heure: "11:33", arret: 1 },
          { gare: "Hoerdt", heure: "11:36", arret: 1 },
          { gare: "Vendenheim", heure: "11:43", arret: 1 },
          { gare: "Mundolsheim", heure: "11:46", arret: 1 },
          { gare: "Strasbourg", heure: "11:52", arret: 4 }
        ]
      },
      {
        nom: "Strasbourg → Wissembourg",
        dessertes: [
          { gare: "Strasbourg", heure: "12:15", arret: 4 },
          { gare: "Mundolsheim", heure: "12:24", arret: 1 },
          { gare: "Vendenheim", heure: "12:27", arret: 1 },
          { gare: "Hoerdt", heure: "12:34", arret: 1 },
          { gare: "Weyersheim", heure: "12:37", arret: 1 },
          { gare: "Kurtzenhouse", heure: "12:41", arret: 1 },
          { gare: "Bischwiller", heure: "12:46", arret: 1 },
          { gare: "Marienthal", heure: "12:50", arret: 1 },
          { gare: "Haguenau", heure: "12:55", arret: 2 },
          { gare: "Walbourg", heure: "13:06", arret: 1 },
          { gare: "Hoelschloch", heure: "13:12", arret: 1 },
          { gare: "Soultz-sous-Forêts", heure: "13:20", arret: 1 },
          { gare: "Riedseltz", heure: "13:35", arret: 1 },
          { gare: "Wissembourg", heure: "13:41", arret: 4 }
        ]
      },
      {
        nom: "Wissembourg → Strasbourg",
        dessertes: [
          { gare: "Wissembourg", heure: "14:26", arret: 4 },
          { gare: "Riedseltz", heure: "14:35", arret: 1 },
          { gare: "Soultz-sous-Forêts", heure: "14:50", arret: 1 },
          { gare: "Hoelschloch", heure: "14:58", arret: 1 },
          { gare: "Walbourg", heure: "15:04", arret: 1 },
          { gare: "Haguenau", heure: "15:14", arret: 2 },
          { gare: "Marienthal", heure: "15:20", arret: 1 },
          { gare: "Bischwiller", heure: "15:24", arret: 1 },
          { gare: "Kurtzenhouse", heure: "15:29", arret: 1 },
          { gare: "Weyersheim", heure: "15:33", arret: 1 },
          { gare: "Hoerdt", heure: "15:36", arret: 1 },
          { gare: "Strasbourg", heure: "15:48", arret: 4 }
        ]
      },
      {
        nom: "Strasbourg → Wissembourg",
        dessertes: [
          { gare: "Strasbourg", heure: "16:15", arret: 4 },
          { gare: "Mundolsheim", heure: "16:24", arret: 1 },
          { gare: "Vendenheim", heure: "16:27", arret: 1 },
          { gare: "Hoerdt", heure: "16:34", arret: 1 },
          { gare: "Weyersheim", heure: "16:37", arret: 1 },
          { gare: "Kurtzenhouse", heure: "16:41", arret: 1 },
          { gare: "Bischwiller", heure: "16:46", arret: 1 },
          { gare: "Marienthal", heure: "16:50", arret: 1 },
          { gare: "Haguenau", heure: "16:55", arret: 2 },
          { gare: "Walbourg", heure: "17:06", arret: 1 },
          { gare: "Hoelschloch", heure: "17:12", arret: 1 },
          { gare: "Soultz-sous-Forêts", heure: "17:20", arret: 1 },
          { gare: "Riedseltz", heure: "17:35", arret: 1 },
          { gare: "Wissembourg", heure: "17:41", arret: 4 }
        ]
      },
      {
        nom: "Wissembourg → Strasbourg",
        dessertes: [
          { gare: "Wissembourg", heure: "18:26", arret: 4 },
          { gare: "Riedseltz", heure: "18:35", arret: 1 },
          { gare: "Soultz-sous-Forêts", heure: "18:50", arret: 1 },
          { gare: "Hoelschloch", heure: "18:58", arret: 1 },
          { gare: "Walbourg", heure: "19:04", arret: 1 },
          { gare: "Haguenau", heure: "19:14", arret: 2 },
          { gare: "Marienthal", heure: "19:20", arret: 1 },
          { gare: "Bischwiller", heure: "19:24", arret: 1 },
          { gare: "Kurtzenhouse", heure: "19:29", arret: 1 },
          { gare: "Weyersheim", heure: "19:33", arret: 1 },
          { gare: "Hoerdt", heure: "19:36", arret: 1 },
          { gare: "Vendenheim", heure: "19:43", arret: 1 },
          { gare: "Mundolsheim", heure: "19:46", arret: 1 },
          { gare: "Strasbourg", heure: "19:52", arret: 4 }
        ]
      },
      {
        nom: "Strasbourg → Wissembourg",
        dessertes: [
          { gare: "Strasbourg", heure: "20:15", arret: 4 },
          { gare: "Mundolsheim", heure: "20:24", arret: 1 },
          { gare: "Vendenheim", heure: "20:27", arret: 1 },
          { gare: "Hoerdt", heure: "20:34", arret: 1 },
          { gare: "Weyersheim", heure: "20:37", arret: 1 },
          { gare: "Kurtzenhouse", heure: "20:41", arret: 1 },
          { gare: "Bischwiller", heure: "20:46", arret: 1 },
          { gare: "Marienthal", heure: "20:50", arret: 1 },
          { gare: "Haguenau", heure: "20:55", arret: 2 },
          { gare: "Walbourg", heure: "21:06", arret: 1 },
          { gare: "Hoelschloch", heure: "21:12", arret: 1 },
          { gare: "Soultz-sous-Forêts", heure: "21:20", arret: 1 },
          { gare: "Riedseltz", heure: "21:35", arret: 1 },
          { gare: "Wissembourg", heure: "21:41", arret: 4 }
        ]
      }
    ]
  },

  {
    id: "TER 3087",
    nom: "Regiolis blueFluoEurope 4C",
    moteurs: ["25kV CA", "1.5kV CC", "diesel"],
    vitesseMax: 160,
    capacite: { premiere: 24, seconde: 210 },
    trajets: [
      {
        nom: "Strasbourg → Wissembourg",
        dessertes: [
          { gare: "Strasbourg", heure: "06:15", arret: 4 },
          { gare: "Mundolsheim", heure: "06:24", arret: 1 },
          { gare: "Vendenheim", heure: "06:27", arret: 1 },
          { gare: "Hoerdt", heure: "06:34", arret: 1 },
          { gare: "Weyersheim", heure: "06:37", arret: 1 },
          { gare: "Kurtzenhouse", heure: "06:41", arret: 1 },
          { gare: "Bischwiller", heure: "06:46", arret: 1 },
          { gare: "Marienthal", heure: "06:50", arret: 1 },
          { gare: "Haguenau", heure: "06:55", arret: 2 },
          { gare: "Walbourg", heure: "07:06", arret: 1 },
          { gare: "Hoelschloch", heure: "07:12", arret: 1 },
          { gare: "Soultz-sous-Forêts", heure: "07:20", arret: 1 },
          { gare: "Riedseltz", heure: "07:35", arret: 1 },
          { gare: "Wissembourg", heure: "07:41", arret: 4 }
        ]
      },
      {
        nom: "Wissembourg → Strasbourg",
        dessertes: [
          { gare: "Wissembourg", heure: "08:26", arret: 4 },
          { gare: "Riedseltz", heure: "08:35", arret: 1 },
          { gare: "Soultz-sous-Forêts", heure: "08:50", arret: 1 },
          { gare: "Hoelschloch", heure: "08:58", arret: 1 },
          { gare: "Walbourg", heure: "09:04", arret: 1 },
          { gare: "Haguenau", heure: "09:14", arret: 2 },
          { gare: "Marienthal", heure: "09:20", arret: 1 },
          { gare: "Bischwiller", heure: "09:24", arret: 1 },
          { gare: "Kurtzenhouse", heure: "09:29", arret: 1 },
          { gare: "Weyersheim", heure: "09:33", arret: 1 },
          { gare: "Hoerdt", heure: "09:36", arret: 1 },
          { gare: "Strasbourg", heure: "09:48", arret: 4 }
        ]
      },
      {
        nom: "Strasbourg → Wissembourg",
        dessertes: [
          { gare: "Strasbourg", heure: "10:15", arret: 4 },
          { gare: "Mundolsheim", heure: "10:24", arret: 1 },
          { gare: "Vendenheim", heure: "10:27", arret: 1 },
          { gare: "Hoerdt", heure: "10:34", arret: 1 },
          { gare: "Weyersheim", heure: "10:37", arret: 1 },
          { gare: "Kurtzenhouse", heure: "10:41", arret: 1 },
          { gare: "Bischwiller", heure: "10:46", arret: 1 },
          { gare: "Marienthal", heure: "10:50", arret: 1 },
          { gare: "Haguenau", heure: "10:55", arret: 2 },
          { gare: "Walbourg", heure: "11:06", arret: 1 },
          { gare: "Hoelschloch", heure: "11:12", arret: 1 },
          { gare: "Soultz-sous-Forêts", heure: "11:20", arret: 1 },
          { gare: "Riedseltz", heure: "11:35", arret: 1 },
          { gare: "Wissembourg", heure: "11:41", arret: 4 }
        ]
      },
      {
        nom: "Wissembourg → Strasbourg",
        dessertes: [
          { gare: "Wissembourg", heure: "12:26", arret: 4 },
          { gare: "Riedseltz", heure: "12:35", arret: 1 },
          { gare: "Soultz-sous-Forêts", heure: "12:50", arret: 1 },
          { gare: "Hoelschloch", heure: "12:58", arret: 1 },
          { gare: "Walbourg", heure: "13:04", arret: 1 },
          { gare: "Haguenau", heure: "13:14", arret: 2 },
          { gare: "Marienthal", heure: "13:20", arret: 1 },
          { gare: "Bischwiller", heure: "13:24", arret: 1 },
          { gare: "Kurtzenhouse", heure: "13:29", arret: 1 },
          { gare: "Weyersheim", heure: "13:33", arret: 1 },
          { gare: "Hoerdt", heure: "13:36", arret: 1 },
          { gare: "Vendenheim", heure: "13:43", arret: 1 },
          { gare: "Mundolsheim", heure: "13:46", arret: 1 },
          { gare: "Strasbourg", heure: "13:52", arret: 4 }
        ]
      },
      {
        nom: "Strasbourg → Wissembourg",
        dessertes: [
          { gare: "Strasbourg", heure: "14:15", arret: 4 },
          { gare: "Mundolsheim", heure: "14:24", arret: 1 },
          { gare: "Vendenheim", heure: "14:27", arret: 1 },
          { gare: "Hoerdt", heure: "14:34", arret: 1 },
          { gare: "Weyersheim", heure: "14:37", arret: 1 },
          { gare: "Kurtzenhouse", heure: "14:41", arret: 1 },
          { gare: "Bischwiller", heure: "14:46", arret: 1 },
          { gare: "Marienthal", heure: "14:50", arret: 1 },
          { gare: "Haguenau", heure: "14:55", arret: 2 },
          { gare: "Walbourg", heure: "15:06", arret: 1 },
          { gare: "Hoelschloch", heure: "15:12", arret: 1 },
          { gare: "Soultz-sous-Forêts", heure: "15:20", arret: 1 },
          { gare: "Riedseltz", heure: "15:35", arret: 1 },
          { gare: "Wissembourg", heure: "15:41", arret: 4 }
        ]
      },
      {
        nom: "Wissembourg → Strasbourg",
        dessertes: [
          { gare: "Wissembourg", heure: "16:26", arret: 4 },
          { gare: "Riedseltz", heure: "16:35", arret: 1 },
          { gare: "Soultz-sous-Forêts", heure: "16:50", arret: 1 },
          { gare: "Hoelschloch", heure: "16:58", arret: 1 },
          { gare: "Walbourg", heure: "17:04", arret: 1 },
          { gare: "Haguenau", heure: "17:14", arret: 2 },
          { gare: "Marienthal", heure: "17:20", arret: 1 },
          { gare: "Bischwiller", heure: "17:24", arret: 1 },
          { gare: "Kurtzenhouse", heure: "17:29", arret: 1 },
          { gare: "Weyersheim", heure: "17:33", arret: 1 },
          { gare: "Hoerdt", heure: "17:36", arret: 1 },
          { gare: "Vendenheim", heure: "17:43", arret: 1 },
          { gare: "Mundolsheim", heure: "17:46", arret: 1 },
          { gare: "Strasbourg", heure: "17:52", arret: 4 }
        ]
      },
      {
        nom: "Strasbourg → Wissembourg",
        dessertes: [
          { gare: "Strasbourg", heure: "18:15", arret: 4 },
          { gare: "Mundolsheim", heure: "18:24", arret: 1 },
          { gare: "Vendenheim", heure: "18:27", arret: 1 },
          { gare: "Hoerdt", heure: "18:34", arret: 1 },
          { gare: "Weyersheim", heure: "18:37", arret: 1 },
          { gare: "Kurtzenhouse", heure: "18:41", arret: 1 },
          { gare: "Bischwiller", heure: "18:46", arret: 1 },
          { gare: "Marienthal", heure: "18:50", arret: 1 },
          { gare: "Haguenau", heure: "18:55", arret: 2 },
          { gare: "Walbourg", heure: "19:06", arret: 1 },
          { gare: "Hoelschloch", heure: "19:12", arret: 1 },
          { gare: "Soultz-sous-Forêts", heure: "19:20", arret: 1 },
          { gare: "Riedseltz", heure: "19:35", arret: 1 },
          { gare: "Wissembourg", heure: "19:41", arret: 4 }
        ]
      },
      {
        nom: "Wissembourg → Strasbourg",
        dessertes: [
          { gare: "Wissembourg", heure: "20:26", arret: 4 },
          { gare: "Riedseltz", heure: "20:35", arret: 1 },
          { gare: "Soultz-sous-Forêts", heure: "20:50", arret: 1 },
          { gare: "Hoelschloch", heure: "20:58", arret: 1 },
          { gare: "Walbourg", heure: "21:04", arret: 1 },
          { gare: "Haguenau", heure: "21:14", arret: 2 },
          { gare: "Marienthal", heure: "21:20", arret: 1 },
          { gare: "Bischwiller", heure: "21:24", arret: 1 },
          { gare: "Kurtzenhouse", heure: "21:29", arret: 1 },
          { gare: "Weyersheim", heure: "21:33", arret: 1 },
          { gare: "Hoerdt", heure: "21:36", arret: 1 },
          { gare: "Vendenheim", heure: "21:43", arret: 1 },
          { gare: "Strasbourg", heure: "21:51", arret: 4 }
        ]
      }
    ]
  },

  {
    id: "TER 3088",
    nom: "Regiolis blueFluoEurope 4C",
    moteurs: ["25kV CA", "1.5kV CC", "diesel"],
    vitesseMax: 160,
    capacite: { premiere: 24, seconde: 210 },
    trajets: [
      {
        nom: "Strasbourg → Woerth (Rhein)",
        dessertes: [
          { gare: "Strasbourg", heure: "05:00", arret: 4 },
          { gare: "Bischheim", heure: "05:08", arret: 1 },
          { gare: "Hoenheim Tram", heure: "05:12", arret: 1 },
          { gare: "La Wantzenau", heure: "05:23", arret: 1 },
          { gare: "Gambsheim", heure: "05:32", arret: 1 },
          { gare: "Herrlisheim(Bas-Rhin)", heure: "05:39", arret: 1 },
          { gare: "Drusenheim", heure: "05:47", arret: 2 },
          { gare: "Sessenheim", heure: "05:56", arret: 1 },
          { gare: "Roeschwoog", heure: "06:04", arret: 1 },
          { gare: "Seltz", heure: "06:17", arret: 1 },
          { gare: "Mothern", heure: "06:28", arret: 1 },
          { gare: "Lauterbourg", heure: "06:34", arret: 1 },
          { gare: "Berg (Pfalz)", heure: "06:40", arret: 1 },
          { gare: "Neuburg", heure: "06:46", arret: 1 },
          { gare: "Hagenbach", heure: "06:52", arret: 1 },
          { gare: "Woerth (Rhein)", heure: "06:59", arret: 4 }
        ]
      },
      {
        nom: "Woerth (Rhein) → Strasbourg",
        dessertes: [
          { gare: "Woerth (Rhein)", heure: "07:30", arret: 4 },
          { gare: "Hagenbach", heure: "07:40", arret: 1 },
          { gare: "Neuburg", heure: "07:46", arret: 1 },
          { gare: "Berg (Pfalz)", heure: "07:52", arret: 1 },
          { gare: "Lauterbourg", heure: "07:58", arret: 1 },
          { gare: "Mothern", heure: "08:04", arret: 1 },
          { gare: "Seltz", heure: "08:15", arret: 1 },
          { gare: "Roeschwoog", heure: "08:28", arret: 1 },
          { gare: "Sessenheim", heure: "08:36", arret: 1 },
          { gare: "Drusenheim", heure: "08:44", arret: 2 },
          { gare: "Herrlisheim(Bas-Rhin)", heure: "08:53", arret: 1 },
          { gare: "Gambsheim", heure: "09:00", arret: 1 },
          { gare: "La Wantzenau", heure: "09:09", arret: 1 },
          { gare: "Hoenheim Tram", heure: "09:20", arret: 1 },
          { gare: "Bischheim", heure: "09:24", arret: 1 },
          { gare: "Strasbourg", heure: "09:29", arret: 4 }
        ]
      },
      {
        nom: "Strasbourg → Woerth (Rhein)",
        dessertes: [
          { gare: "Strasbourg", heure: "10:00", arret: 4 },
          { gare: "Bischheim", heure: "10:08", arret: 1 },
          { gare: "Hoenheim Tram", heure: "10:12", arret: 1 },
          { gare: "La Wantzenau", heure: "10:23", arret: 1 },
          { gare: "Gambsheim", heure: "10:32", arret: 1 },
          { gare: "Herrlisheim(Bas-Rhin)", heure: "10:39", arret: 1 },
          { gare: "Drusenheim", heure: "10:47", arret: 2 },
          { gare: "Sessenheim", heure: "10:56", arret: 1 },
          { gare: "Roeschwoog", heure: "11:04", arret: 1 },
          { gare: "Seltz", heure: "11:17", arret: 1 },
          { gare: "Mothern", heure: "11:28", arret: 1 },
          { gare: "Lauterbourg", heure: "11:34", arret: 1 },
          { gare: "Berg (Pfalz)", heure: "11:40", arret: 1 },
          { gare: "Neuburg", heure: "11:46", arret: 1 },
          { gare: "Hagenbach", heure: "11:52", arret: 1 },
          { gare: "Woerth (Rhein)", heure: "11:59", arret: 4 }
        ]
      },
      {
        nom: "Woerth (Rhein) → Strasbourg",
        dessertes: [
          { gare: "Woerth (Rhein)", heure: "12:30", arret: 4 },
          { gare: "Hagenbach", heure: "12:40", arret: 1 },
          { gare: "Neuburg", heure: "12:46", arret: 1 },
          { gare: "Berg (Pfalz)", heure: "12:52", arret: 1 },
          { gare: "Lauterbourg", heure: "12:58", arret: 1 },
          { gare: "Mothern", heure: "13:04", arret: 1 },
          { gare: "Seltz", heure: "13:15", arret: 1 },
          { gare: "Roeschwoog", heure: "13:28", arret: 1 },
          { gare: "Sessenheim", heure: "13:36", arret: 1 },
          { gare: "Drusenheim", heure: "13:44", arret: 2 },
          { gare: "Herrlisheim(Bas-Rhin)", heure: "13:53", arret: 1 },
          { gare: "Gambsheim", heure: "14:00", arret: 1 },
          { gare: "La Wantzenau", heure: "14:09", arret: 1 },
          { gare: "Hoenheim Tram", heure: "14:20", arret: 1 },
          { gare: "Bischheim", heure: "14:24", arret: 1 },
          { gare: "Strasbourg", heure: "14:29", arret: 4 }
        ]
      },
      {
        nom: "Strasbourg → Woerth (Rhein)",
        dessertes: [
          { gare: "Strasbourg", heure: "15:00", arret: 4 },
          { gare: "Bischheim", heure: "15:08", arret: 1 },
          { gare: "Hoenheim Tram", heure: "15:12", arret: 1 },
          { gare: "La Wantzenau", heure: "15:23", arret: 1 },
          { gare: "Gambsheim", heure: "15:32", arret: 1 },
          { gare: "Herrlisheim(Bas-Rhin)", heure: "15:39", arret: 1 },
          { gare: "Drusenheim", heure: "15:47", arret: 2 },
          { gare: "Sessenheim", heure: "15:56", arret: 1 },
          { gare: "Roeschwoog", heure: "16:04", arret: 1 },
          { gare: "Seltz", heure: "16:17", arret: 1 },
          { gare: "Mothern", heure: "16:28", arret: 1 },
          { gare: "Lauterbourg", heure: "16:34", arret: 1 },
          { gare: "Berg (Pfalz)", heure: "16:40", arret: 1 },
          { gare: "Neuburg", heure: "16:46", arret: 1 },
          { gare: "Hagenbach", heure: "16:52", arret: 1 },
          { gare: "Woerth (Rhein)", heure: "16:59", arret: 4 }
        ]
      },
      {
        nom: "Woerth (Rhein) → Strasbourg",
        dessertes: [
          { gare: "Woerth (Rhein)", heure: "17:30", arret: 4 },
          { gare: "Hagenbach", heure: "17:40", arret: 1 },
          { gare: "Neuburg", heure: "17:46", arret: 1 },
          { gare: "Berg (Pfalz)", heure: "17:52", arret: 1 },
          { gare: "Lauterbourg", heure: "17:58", arret: 1 },
          { gare: "Mothern", heure: "18:04", arret: 1 },
          { gare: "Seltz", heure: "18:15", arret: 1 },
          { gare: "Roeschwoog", heure: "18:28", arret: 1 },
          { gare: "Sessenheim", heure: "18:36", arret: 1 },
          { gare: "Drusenheim", heure: "18:44", arret: 2 },
          { gare: "Herrlisheim(Bas-Rhin)", heure: "18:53", arret: 1 },
          { gare: "Gambsheim", heure: "19:00", arret: 1 },
          { gare: "La Wantzenau", heure: "19:09", arret: 1 },
          { gare: "Hoenheim Tram", heure: "19:20", arret: 1 },
          { gare: "Bischheim", heure: "19:24", arret: 1 },
          { gare: "Strasbourg", heure: "19:29", arret: 4 }
        ]
      },
      {
        nom: "Strasbourg → Lauterbourg",
        dessertes: [
          { gare: "Strasbourg", heure: "20:05", arret: 4 },
          { gare: "Bischheim", heure: "20:13", arret: 1 },
          { gare: "Hoenheim Tram", heure: "20:17", arret: 1 },
          { gare: "La Wantzenau", heure: "20:28", arret: 1 },
          { gare: "Gambsheim", heure: "20:37", arret: 1 },
          { gare: "Drusenheim", heure: "20:51", arret: 2 },
          { gare: "Seltz", heure: "21:18", arret: 1 },
          { gare: "Lauterbourg", heure: "21:33", arret: 1 }
        ]
      },
      {
        nom: "Lauterbourg → Strasbourg",
        dessertes: [
          { gare: "Lauterbourg", heure: "22:00", arret: 1 },
          { gare: "Seltz", heure: "22:15", arret: 1 },
          { gare: "Drusenheim", heure: "22:41", arret: 2 },
          { gare: "Gambsheim", heure: "22:56", arret: 1 },
          { gare: "La Wantzenau", heure: "23:05", arret: 1 },
          { gare: "Hoenheim Tram", heure: "23:16", arret: 1 },
          { gare: "Bischheim", heure: "23:20", arret: 1 },
          { gare: "Strasbourg", heure: "23:25", arret: 4 }
        ]
      }
    ]
  },

  {
    id: "TER 3500",
    nom: "Regiolis BFC 4C",
    moteurs: ["25kV CA", "1.5kV CC"],
    vitesseMax: 160,
    capacite: { premiere: 24, seconde: 210 },
    trajets: [
      {
        nom: "Belfort-Ville → Besançon Viotte",
        dessertes: [
          { gare: "Belfort-Ville", heure: "06:30", arret: 4 },
          { gare: "Héricourt", heure: "06:42", arret: 1 },
          { gare: "Montbéliard", heure: "06:48", arret: 2 },
          { gare: "Voujeaucourt", heure: "06:55", arret: 1 },
          { gare: "Colombier-Fontaine", heure: "07:05", arret: 1 },
          { gare: "L'Isle-sur-le-Doubs", heure: "07:19", arret: 1 },
          { gare: "Clerval", heure: "07:31", arret: 1 },
          { gare: "Baume-Les-Dames", heure: "07:47", arret: 1 },
          { gare: "Deluz", heure: "08:08", arret: 1 },
          { gare: "Roche-lez-Beaupre", heure: "08:20", arret: 1 },
          { gare: "Besançon Viotte", heure: "08:32", arret: 4 }
        ]
      },
      {
        nom: "Besançon Viotte → Belfort-Ville",
        dessertes: [
          { gare: "Besançon Viotte", heure: "09:30", arret: 4 },
          { gare: "Roche-lez-Beaupre", heure: "09:45", arret: 1 },
          { gare: "Deluz", heure: "09:57", arret: 1 },
          { gare: "Baume-Les-Dames", heure: "10:18", arret: 1 },
          { gare: "Clerval", heure: "10:34", arret: 1 },
          { gare: "L'Isle-sur-le-Doubs", heure: "10:46", arret: 1 },
          { gare: "Colombier-Fontaine", heure: "11:00", arret: 1 },
          { gare: "Voujeaucourt", heure: "11:10", arret: 1 },
          { gare: "Montbéliard", heure: "11:16", arret: 2 },
          { gare: "Héricourt", heure: "11:23", arret: 1 },
          { gare: "Belfort-Ville", heure: "11:32", arret: 4 }
        ]
      },
      {
        nom: "Belfort-Ville → Besançon Viotte",
        dessertes: [
          { gare: "Belfort-Ville", heure: "12:30", arret: 4 },
          { gare: "Héricourt", heure: "12:42", arret: 1 },
          { gare: "Montbéliard", heure: "12:48", arret: 2 },
          { gare: "Voujeaucourt", heure: "12:55", arret: 1 },
          { gare: "Colombier-Fontaine", heure: "13:05", arret: 1 },
          { gare: "L'Isle-sur-le-Doubs", heure: "13:19", arret: 1 },
          { gare: "Clerval", heure: "13:31", arret: 1 },
          { gare: "Baume-Les-Dames", heure: "13:47", arret: 1 },
          { gare: "Deluz", heure: "14:08", arret: 1 },
          { gare: "Roche-lez-Beaupre", heure: "14:20", arret: 1 },
          { gare: "Besançon Viotte", heure: "14:32", arret: 4 }
        ]
      },
      {
        nom: "Besançon Viotte → Belfort-Ville",
        dessertes: [
          { gare: "Besançon Viotte", heure: "15:30", arret: 4 },
          { gare: "Roche-lez-Beaupre", heure: "15:45", arret: 1 },
          { gare: "Deluz", heure: "15:57", arret: 1 },
          { gare: "Baume-Les-Dames", heure: "16:18", arret: 1 },
          { gare: "Clerval", heure: "16:34", arret: 1 },
          { gare: "L'Isle-sur-le-Doubs", heure: "16:46", arret: 1 },
          { gare: "Colombier-Fontaine", heure: "17:00", arret: 1 },
          { gare: "Voujeaucourt", heure: "17:10", arret: 1 },
          { gare: "Montbéliard", heure: "17:16", arret: 2 },
          { gare: "Héricourt", heure: "17:23", arret: 1 },
          { gare: "Belfort-Ville", heure: "17:32", arret: 4 }
        ]
      }
    ]
  },

  {
    id: "TER 3501",
    nom: "Regiolis BFC 4C",
    moteurs: ["25kV CA", "1.5kV CC"],
    vitesseMax: 160,
    capacite: { premiere: 24, seconde: 210 },
    trajets: [
      {
        nom: "Besançon Viotte → Belfort-Ville",
        dessertes: [
          { gare: "Besançon Viotte", heure: "06:30", arret: 4 },
          { gare: "Roche-lez-Beaupre", heure: "06:45", arret: 1 },
          { gare: "Deluz", heure: "06:57", arret: 1 },
          { gare: "Baume-Les-Dames", heure: "07:18", arret: 1 },
          { gare: "Clerval", heure: "07:34", arret: 1 },
          { gare: "L'Isle-sur-le-Doubs", heure: "07:46", arret: 1 },
          { gare: "Colombier-Fontaine", heure: "08:00", arret: 1 },
          { gare: "Voujeaucourt", heure: "08:10", arret: 1 },
          { gare: "Montbéliard", heure: "08:16", arret: 2 },
          { gare: "Héricourt", heure: "08:23", arret: 1 },
          { gare: "Belfort-Ville", heure: "08:32", arret: 4 }
        ]
      },
      {
        nom: "Belfort-Ville → Besançon Viotte",
        dessertes: [
          { gare: "Belfort-Ville", heure: "09:30", arret: 4 },
          { gare: "Héricourt", heure: "09:42", arret: 1 },
          { gare: "Montbéliard", heure: "09:48", arret: 2 },
          { gare: "Voujeaucourt", heure: "09:55", arret: 1 },
          { gare: "Colombier-Fontaine", heure: "10:05", arret: 1 },
          { gare: "L'Isle-sur-le-Doubs", heure: "10:19", arret: 1 },
          { gare: "Clerval", heure: "10:31", arret: 1 },
          { gare: "Baume-Les-Dames", heure: "10:47", arret: 1 },
          { gare: "Deluz", heure: "11:08", arret: 1 },
          { gare: "Roche-lez-Beaupre", heure: "11:20", arret: 1 },
          { gare: "Besançon Viotte", heure: "11:32", arret: 4 }
        ]
      },
      {
        nom: "Besançon Viotte → Belfort-Ville",
        dessertes: [
          { gare: "Besançon Viotte", heure: "12:30", arret: 4 },
          { gare: "Roche-lez-Beaupre", heure: "12:45", arret: 1 },
          { gare: "Deluz", heure: "12:57", arret: 1 },
          { gare: "Baume-Les-Dames", heure: "13:18", arret: 1 },
          { gare: "Clerval", heure: "13:34", arret: 1 },
          { gare: "L'Isle-sur-le-Doubs", heure: "13:46", arret: 1 },
          { gare: "Colombier-Fontaine", heure: "14:00", arret: 1 },
          { gare: "Voujeaucourt", heure: "14:10", arret: 1 },
          { gare: "Montbéliard", heure: "14:16", arret: 2 },
          { gare: "Héricourt", heure: "14:23", arret: 1 },
          { gare: "Belfort-Ville", heure: "14:32", arret: 4 }
        ]
      },
      {
        nom: "Belfort-Ville → Besançon Viotte",
        dessertes: [
          { gare: "Belfort-Ville", heure: "15:30", arret: 4 },
          { gare: "Héricourt", heure: "15:42", arret: 1 },
          { gare: "Montbéliard", heure: "15:48", arret: 2 },
          { gare: "Voujeaucourt", heure: "15:55", arret: 1 },
          { gare: "Colombier-Fontaine", heure: "16:05", arret: 1 },
          { gare: "L'Isle-sur-le-Doubs", heure: "16:19", arret: 1 },
          { gare: "Clerval", heure: "16:31", arret: 1 },
          { gare: "Baume-Les-Dames", heure: "16:47", arret: 1 },
          { gare: "Deluz", heure: "17:08", arret: 1 },
          { gare: "Roche-lez-Beaupre", heure: "17:20", arret: 1 },
          { gare: "Besançon Viotte", heure: "17:32", arret: 4 }
        ]
      },
      {
        nom: "Besançon Viotte → Belfort-Ville",
        dessertes: [
          { gare: "Besançon Viotte", heure: "18:30", arret: 4 },
          { gare: "Roche-lez-Beaupre", heure: "18:45", arret: 1 },
          { gare: "Deluz", heure: "18:57", arret: 1 },
          { gare: "Baume-Les-Dames", heure: "19:18", arret: 1 },
          { gare: "Clerval", heure: "19:34", arret: 1 },
          { gare: "L'Isle-sur-le-Doubs", heure: "19:46", arret: 1 },
          { gare: "Colombier-Fontaine", heure: "20:00", arret: 1 },
          { gare: "Voujeaucourt", heure: "20:10", arret: 1 },
          { gare: "Montbéliard", heure: "20:16", arret: 2 },
          { gare: "Héricourt", heure: "20:23", arret: 1 },
          { gare: "Belfort-Ville", heure: "20:32", arret: 4 }
        ]
      },
      {
        nom: "Belfort-Ville → Besançon Viotte",
        dessertes: [
          { gare: "Belfort-Ville", heure: "21:30", arret: 4 },
          { gare: "Héricourt", heure: "21:42", arret: 1 },
          { gare: "Montbéliard", heure: "21:48", arret: 2 },
          { gare: "Voujeaucourt", heure: "21:55", arret: 1 },
          { gare: "Colombier-Fontaine", heure: "22:05", arret: 1 },
          { gare: "L'Isle-sur-le-Doubs", heure: "22:19", arret: 1 },
          { gare: "Clerval", heure: "22:31", arret: 1 },
          { gare: "Baume-Les-Dames", heure: "22:47", arret: 1 },
          { gare: "Deluz", heure: "23:08", arret: 1 },
          { gare: "Roche-lez-Beaupre", heure: "23:20", arret: 1 },
          { gare: "Besançon Viotte", heure: "23:32", arret: 4 }
        ]
      }
    ]
  },

  {
    id: "TER 3502",
    nom: "Regiolis BFC 4C",
    moteurs: ["25kV CA", "1.5kV CC"],
    vitesseMax: 160,
    capacite: { premiere: 24, seconde: 210 },
    trajets: [
      {
        nom: "Belfort-Ville → Besançon Viotte",
        dessertes: [
          { gare: "Belfort-Ville", heure: "08:30", arret: 4 },
          { gare: "Héricourt", heure: "08:42", arret: 1 },
          { gare: "Montbéliard", heure: "08:48", arret: 2 },
          { gare: "Voujeaucourt", heure: "08:55", arret: 1 },
          { gare: "Colombier-Fontaine", heure: "09:05", arret: 1 },
          { gare: "L'Isle-sur-le-Doubs", heure: "09:19", arret: 1 },
          { gare: "Clerval", heure: "09:31", arret: 1 },
          { gare: "Baume-Les-Dames", heure: "09:47", arret: 1 },
          { gare: "Deluz", heure: "10:08", arret: 1 },
          { gare: "Roche-lez-Beaupre", heure: "10:20", arret: 1 },
          { gare: "Besançon Viotte", heure: "10:32", arret: 4 }
        ]
      },
      {
        nom: "Besançon Viotte → Belfort-Ville",
        dessertes: [
          { gare: "Besançon Viotte", heure: "11:30", arret: 4 },
          { gare: "Roche-lez-Beaupre", heure: "11:45", arret: 1 },
          { gare: "Deluz", heure: "11:57", arret: 1 },
          { gare: "Baume-Les-Dames", heure: "12:18", arret: 1 },
          { gare: "Clerval", heure: "12:34", arret: 1 },
          { gare: "L'Isle-sur-le-Doubs", heure: "12:46", arret: 1 },
          { gare: "Colombier-Fontaine", heure: "13:00", arret: 1 },
          { gare: "Voujeaucourt", heure: "13:10", arret: 1 },
          { gare: "Montbéliard", heure: "13:16", arret: 2 },
          { gare: "Héricourt", heure: "13:23", arret: 1 },
          { gare: "Belfort-Ville", heure: "13:32", arret: 4 }
        ]
      },
      {
        nom: "Belfort-Ville → Besançon Viotte",
        dessertes: [
          { gare: "Belfort-Ville", heure: "14:30", arret: 4 },
          { gare: "Héricourt", heure: "14:42", arret: 1 },
          { gare: "Montbéliard", heure: "14:48", arret: 2 },
          { gare: "Voujeaucourt", heure: "14:55", arret: 1 },
          { gare: "Colombier-Fontaine", heure: "15:05", arret: 1 },
          { gare: "L'Isle-sur-le-Doubs", heure: "15:19", arret: 1 },
          { gare: "Clerval", heure: "15:31", arret: 1 },
          { gare: "Baume-Les-Dames", heure: "15:47", arret: 1 },
          { gare: "Deluz", heure: "16:08", arret: 1 },
          { gare: "Roche-lez-Beaupre", heure: "16:20", arret: 1 },
          { gare: "Besançon Viotte", heure: "16:32", arret: 4 }
        ]
      },
      {
        nom: "Besançon Viotte → Belfort-Ville",
        dessertes: [
          { gare: "Besançon Viotte", heure: "17:30", arret: 4 },
          { gare: "Roche-lez-Beaupre", heure: "17:45", arret: 1 },
          { gare: "Deluz", heure: "17:57", arret: 1 },
          { gare: "Baume-Les-Dames", heure: "18:18", arret: 1 },
          { gare: "Clerval", heure: "18:34", arret: 1 },
          { gare: "L'Isle-sur-le-Doubs", heure: "18:46", arret: 1 },
          { gare: "Colombier-Fontaine", heure: "19:00", arret: 1 },
          { gare: "Voujeaucourt", heure: "19:10", arret: 1 },
          { gare: "Montbéliard", heure: "19:16", arret: 2 },
          { gare: "Héricourt", heure: "19:23", arret: 1 },
          { gare: "Belfort-Ville", heure: "19:32", arret: 4 }
        ]
      },
      {
        nom: "Belfort-Ville → Méroux",
        dessertes: [
          { gare: "Belfort-Ville", heure: "20:00", arret: 1 },
          { gare: "Danjoutin", heure: "20:04", arret: 1 },
          { gare: "Méroux", heure: "20:10", arret: 2 }
        ]
      },
      {
        nom: "Méroux → Belfort-Ville",
        dessertes: [
          { gare: "Méroux", heure: "21:10", arret: 2 },
          { gare: "Danjoutin", heure: "21:17", arret: 1 },
          { gare: "Belfort-Ville", heure: "21:21", arret: 1 }
        ]
      }
    ]
  },

  {
    id: "TER 3503",
    nom: "Regiolis BFC 4C",
    moteurs: ["25kV CA", "1.5kV CC"],
    vitesseMax: 160,
    capacite: { premiere: 24, seconde: 210 },
    trajets: [
      {
        nom: "Besançon Viotte → Belfort-Ville",
        dessertes: [
          { gare: "Besançon Viotte", heure: "08:30", arret: 4 },
          { gare: "Roche-lez-Beaupre", heure: "08:45", arret: 1 },
          { gare: "Deluz", heure: "08:57", arret: 1 },
          { gare: "Baume-Les-Dames", heure: "09:18", arret: 1 },
          { gare: "Clerval", heure: "09:34", arret: 1 },
          { gare: "L'Isle-sur-le-Doubs", heure: "09:46", arret: 1 },
          { gare: "Colombier-Fontaine", heure: "10:00", arret: 1 },
          { gare: "Voujeaucourt", heure: "10:10", arret: 1 },
          { gare: "Montbéliard", heure: "10:16", arret: 2 },
          { gare: "Héricourt", heure: "10:23", arret: 1 },
          { gare: "Belfort-Ville", heure: "10:32", arret: 4 }
        ]
      },
      {
        nom: "Belfort-Ville → Besançon Viotte",
        dessertes: [
          { gare: "Belfort-Ville", heure: "11:30", arret: 4 },
          { gare: "Héricourt", heure: "11:42", arret: 1 },
          { gare: "Montbéliard", heure: "11:48", arret: 2 },
          { gare: "Voujeaucourt", heure: "11:55", arret: 1 },
          { gare: "Colombier-Fontaine", heure: "12:05", arret: 1 },
          { gare: "L'Isle-sur-le-Doubs", heure: "12:19", arret: 1 },
          { gare: "Clerval", heure: "12:31", arret: 1 },
          { gare: "Baume-Les-Dames", heure: "12:47", arret: 1 },
          { gare: "Deluz", heure: "13:08", arret: 1 },
          { gare: "Roche-lez-Beaupre", heure: "13:20", arret: 1 },
          { gare: "Besançon Viotte", heure: "13:32", arret: 4 }
        ]
      },
      {
        nom: "Besançon Viotte → Belfort-Ville",
        dessertes: [
          { gare: "Besançon Viotte", heure: "14:30", arret: 4 },
          { gare: "Roche-lez-Beaupre", heure: "14:45", arret: 1 },
          { gare: "Deluz", heure: "14:57", arret: 1 },
          { gare: "Baume-Les-Dames", heure: "15:18", arret: 1 },
          { gare: "Clerval", heure: "15:34", arret: 1 },
          { gare: "L'Isle-sur-le-Doubs", heure: "15:46", arret: 1 },
          { gare: "Colombier-Fontaine", heure: "16:00", arret: 1 },
          { gare: "Voujeaucourt", heure: "16:10", arret: 1 },
          { gare: "Montbéliard", heure: "16:16", arret: 2 },
          { gare: "Héricourt", heure: "16:23", arret: 1 },
          { gare: "Belfort-Ville", heure: "16:32", arret: 4 }
        ]
      },
      {
        nom: "Belfort-Ville → Besançon Viotte",
        dessertes: [
          { gare: "Belfort-Ville", heure: "17:30", arret: 4 },
          { gare: "Héricourt", heure: "17:42", arret: 1 },
          { gare: "Montbéliard", heure: "17:48", arret: 2 },
          { gare: "Voujeaucourt", heure: "17:55", arret: 1 },
          { gare: "Colombier-Fontaine", heure: "18:05", arret: 1 },
          { gare: "L'Isle-sur-le-Doubs", heure: "18:19", arret: 1 },
          { gare: "Clerval", heure: "18:31", arret: 1 },
          { gare: "Baume-Les-Dames", heure: "18:47", arret: 1 },
          { gare: "Deluz", heure: "19:08", arret: 1 },
          { gare: "Roche-lez-Beaupre", heure: "19:20", arret: 1 },
          { gare: "Besançon Viotte", heure: "19:32", arret: 4 }
        ]
      },
      {
        nom: "Besançon Viotte → Besancon Franche-Comté",
        dessertes: [
          { gare: "Besançon Viotte", heure: "20:02", arret: 4 },
          { gare: "Ecole-Valentin", heure: "20:10", arret: 1 },
          { gare: "Besancon Franche-Comté", heure: "20:16", arret: 1 }
        ]
      },
      {
        nom: "Besancon Franche-Comté → Besançon Viotte",
        dessertes: [
          { gare: "Besancon Franche-Comté", heure: "20:46", arret: 1 },
          { gare: "Ecole-Valentin", heure: "20:52", arret: 1 },
          { gare: "Besançon Viotte", heure: "20:57", arret: 4 }
        ]
      }
    ]
  },

  {
    id: "TER 3504",
    nom: "Regiolis BFC 4C",
    moteurs: ["25kV CA", "1.5kV CC"],
    vitesseMax: 160,
    capacite: { premiere: 24, seconde: 210 },
    trajets: [
      {
        nom: "Besançon Viotte → Belfort-Ville",
        dessertes: [
          { gare: "Besançon Viotte", heure: "07:30", arret: 4 },
          { gare: "Roche-lez-Beaupre", heure: "07:45", arret: 1 },
          { gare: "Deluz", heure: "07:57", arret: 1 },
          { gare: "Baume-Les-Dames", heure: "08:18", arret: 1 },
          { gare: "Clerval", heure: "08:34", arret: 1 },
          { gare: "L'Isle-sur-le-Doubs", heure: "08:46", arret: 1 },
          { gare: "Colombier-Fontaine", heure: "09:00", arret: 1 },
          { gare: "Voujeaucourt", heure: "09:10", arret: 1 },
          { gare: "Montbéliard", heure: "09:16", arret: 2 },
          { gare: "Héricourt", heure: "09:23", arret: 1 },
          { gare: "Belfort-Ville", heure: "09:32", arret: 4 }
        ]
      },
      {
        nom: "Belfort-Ville → Besançon Viotte",
        dessertes: [
          { gare: "Belfort-Ville", heure: "10:30", arret: 4 },
          { gare: "Héricourt", heure: "10:42", arret: 1 },
          { gare: "Montbéliard", heure: "10:48", arret: 2 },
          { gare: "Voujeaucourt", heure: "10:55", arret: 1 },
          { gare: "Colombier-Fontaine", heure: "11:05", arret: 1 },
          { gare: "L'Isle-sur-le-Doubs", heure: "11:19", arret: 1 },
          { gare: "Clerval", heure: "11:31", arret: 1 },
          { gare: "Baume-Les-Dames", heure: "11:47", arret: 1 },
          { gare: "Deluz", heure: "12:08", arret: 1 },
          { gare: "Roche-lez-Beaupre", heure: "12:20", arret: 1 },
          { gare: "Besançon Viotte", heure: "12:32", arret: 4 }
        ]
      },
      {
        nom: "Besançon Viotte → Belfort-Ville",
        dessertes: [
          { gare: "Besançon Viotte", heure: "13:30", arret: 4 },
          { gare: "Roche-lez-Beaupre", heure: "13:45", arret: 1 },
          { gare: "Deluz", heure: "13:57", arret: 1 },
          { gare: "Baume-Les-Dames", heure: "14:18", arret: 1 },
          { gare: "Clerval", heure: "14:34", arret: 1 },
          { gare: "L'Isle-sur-le-Doubs", heure: "14:46", arret: 1 },
          { gare: "Colombier-Fontaine", heure: "15:00", arret: 1 },
          { gare: "Voujeaucourt", heure: "15:10", arret: 1 },
          { gare: "Montbéliard", heure: "15:16", arret: 2 },
          { gare: "Héricourt", heure: "15:23", arret: 1 },
          { gare: "Belfort-Ville", heure: "15:32", arret: 4 }
        ]
      },
      {
        nom: "Belfort-Ville → Besançon Viotte",
        dessertes: [
          { gare: "Belfort-Ville", heure: "16:30", arret: 4 },
          { gare: "Héricourt", heure: "16:42", arret: 1 },
          { gare: "Montbéliard", heure: "16:48", arret: 2 },
          { gare: "Voujeaucourt", heure: "16:55", arret: 1 },
          { gare: "Colombier-Fontaine", heure: "17:05", arret: 1 },
          { gare: "L'Isle-sur-le-Doubs", heure: "17:19", arret: 1 },
          { gare: "Clerval", heure: "17:31", arret: 1 },
          { gare: "Baume-Les-Dames", heure: "17:47", arret: 1 },
          { gare: "Deluz", heure: "18:08", arret: 1 },
          { gare: "Roche-lez-Beaupre", heure: "18:20", arret: 1 },
          { gare: "Besançon Viotte", heure: "18:32", arret: 4 }
        ]
      },
      {
        nom: "Besançon Viotte → Dole",
        dessertes: [
          { gare: "Besançon Viotte", heure: "19:02", arret: 4 },
          { gare: "Franois", heure: "19:12", arret: 1 },
          { gare: "Dannemarie - Velesmes", heure: "19:18", arret: 1 },
          { gare: "Saint-Vit", heure: "19:24", arret: 1 },
          { gare: "Ranchot", heure: "19:31", arret: 1 },
          { gare: "Dole", heure: "19:47", arret: 2 }
        ]
      },
      {
        nom: "Dole → Besançon Viotte",
        dessertes: [
          { gare: "Dole", heure: "20:00", arret: 2 },
          { gare: "Ranchot", heure: "20:17", arret: 1 },
          { gare: "Saint-Vit", heure: "20:24", arret: 1 },
          { gare: "Dannemarie - Velesmes", heure: "20:30", arret: 1 },
          { gare: "Franois", heure: "20:36", arret: 1 },
          { gare: "Besançon Viotte", heure: "20:43", arret: 4 }
        ]
      }
    ]
  },

  {
    id: "TER 3508",
    nom: "X73900 BFC",
    moteurs: ["diesel"],
    vitesseMax: 140,
    capacite: { premiere: 0, seconde: 61 },
    trajets: [
      {
        nom: "Belfort-Ville → Épinal",
        dessertes: [
          { gare: "Belfort-Ville", heure: "08:15", arret: 5 },
          { gare: "Bas Évette", heure: "08:26", arret: 1 },
          { gare: "Champagney", heure: "08:36", arret: 1 },
          { gare: "Ronchamp", heure: "08:44", arret: 1 },
          { gare: "Lure", heure: "08:56", arret: 2 },
          { gare: "Luxeuil-Les-Bains", heure: "09:19", arret: 1 },
          { gare: "Aillevillers", heure: "09:32", arret: 1 },
          { gare: "Bains-les-Bains", heure: "09:50", arret: 1 },
          { gare: "Xertigny", heure: "10:05", arret: 1 },
          { gare: "Épinal", heure: "10:22", arret: 4 }
        ]
      },
      {
        nom: "Épinal → Belfort-Ville",
        dessertes: [
          { gare: "Épinal", heure: "11:35", arret: 4 },
          { gare: "Xertigny", heure: "11:55", arret: 1 },
          { gare: "Bains-les-Bains", heure: "12:10", arret: 1 },
          { gare: "Aillevillers", heure: "12:28", arret: 1 },
          { gare: "Luxeuil-Les-Bains", heure: "12:41", arret: 1 },
          { gare: "Lure", heure: "13:03", arret: 2 },
          { gare: "Ronchamp", heure: "13:16", arret: 1 },
          { gare: "Champagney", heure: "13:24", arret: 1 },
          { gare: "Bas Évette", heure: "13:34", arret: 1 },
          { gare: "Belfort-Ville", heure: "13:41", arret: 5 }
        ]
      },
      {
        nom: "Belfort-Ville → Épinal",
        dessertes: [
          { gare: "Belfort-Ville", heure: "14:15", arret: 5 },
          { gare: "Bas Évette", heure: "14:26", arret: 1 },
          { gare: "Champagney", heure: "14:36", arret: 1 },
          { gare: "Ronchamp", heure: "14:44", arret: 1 },
          { gare: "Lure", heure: "14:56", arret: 2 },
          { gare: "Luxeuil-Les-Bains", heure: "15:19", arret: 1 },
          { gare: "Aillevillers", heure: "15:32", arret: 1 },
          { gare: "Bains-les-Bains", heure: "15:50", arret: 1 },
          { gare: "Xertigny", heure: "16:05", arret: 1 },
          { gare: "Épinal", heure: "16:22", arret: 4 }
        ]
      },
      {
        nom: "Épinal → Belfort-Ville",
        dessertes: [
          { gare: "Épinal", heure: "17:00", arret: 4 },
          { gare: "Xertigny", heure: "17:20", arret: 1 },
          { gare: "Bains-les-Bains", heure: "17:35", arret: 1 },
          { gare: "Aillevillers", heure: "17:53", arret: 1 },
          { gare: "Luxeuil-Les-Bains", heure: "18:06", arret: 1 },
          { gare: "Lure", heure: "18:28", arret: 2 },
          { gare: "Ronchamp", heure: "18:41", arret: 1 },
          { gare: "Champagney", heure: "18:49", arret: 1 },
          { gare: "Bas Évette", heure: "18:59", arret: 1 },
          { gare: "Belfort-Ville", heure: "19:06", arret: 5 }
        ]
      }
    ]
  },

  {
    id: "TER 3510",
    nom: "X73900 FrCo",
    moteurs: ["diesel"],
    vitesseMax: 140,
    capacite: { premiere: 0, seconde: 61 },
    trajets: [
      {
        nom: "Belfort-Ville → Vesoul",
        dessertes: [
          { gare: "Belfort-Ville", heure: "07:00", arret: 4 },
          { gare: "Bas Évette", heure: "07:10", arret: 1 },
          { gare: "Champagney", heure: "07:20", arret: 1 },
          { gare: "Ronchamp", heure: "07:28", arret: 1 },
          { gare: "Lure", heure: "07:40", arret: 2 },
          { gare: "Vesoul", heure: "08:11", arret: 4 }
        ]
      },
      {
        nom: "Vesoul → Belfort-Ville",
        dessertes: [
          { gare: "Vesoul", heure: "08:30", arret: 4 },
          { gare: "Lure", heure: "09:03", arret: 2 },
          { gare: "Ronchamp", heure: "09:16", arret: 1 },
          { gare: "Champagney", heure: "09:24", arret: 1 },
          { gare: "Bas Évette", heure: "09:34", arret: 1 },
          { gare: "Belfort-Ville", heure: "09:41", arret: 4 }
        ]
      },
      {
        nom: "Belfort-Ville → Vesoul",
        dessertes: [
          { gare: "Belfort-Ville", heure: "11:00", arret: 4 },
          { gare: "Bas Évette", heure: "11:10", arret: 1 },
          { gare: "Champagney", heure: "11:20", arret: 1 },
          { gare: "Ronchamp", heure: "11:28", arret: 1 },
          { gare: "Lure", heure: "11:40", arret: 2 },
          { gare: "Vesoul", heure: "12:11", arret: 4 }
        ]
      },
      {
        nom: "Vesoul → Belfort-Ville",
        dessertes: [
          { gare: "Vesoul", heure: "16:30", arret: 4 },
          { gare: "Lure", heure: "17:03", arret: 2 },
          { gare: "Ronchamp", heure: "17:16", arret: 1 },
          { gare: "Champagney", heure: "17:24", arret: 1 },
          { gare: "Bas Évette", heure: "17:34", arret: 1 },
          { gare: "Belfort-Ville", heure: "17:41", arret: 4 }
        ]
      },
      {
        nom: "Belfort-Ville → Vesoul",
        dessertes: [
          { gare: "Belfort-Ville", heure: "18:30", arret: 4 },
          { gare: "Bas Évette", heure: "18:40", arret: 1 },
          { gare: "Champagney", heure: "18:50", arret: 1 },
          { gare: "Ronchamp", heure: "18:58", arret: 1 },
          { gare: "Lure", heure: "19:10", arret: 2 },
          { gare: "Vesoul", heure: "19:41", arret: 4 }
        ]
      },
      {
        nom: "Vesoul → Belfort-Ville",
        dessertes: [
          { gare: "Vesoul", heure: "20:20", arret: 4 },
          { gare: "Lure", heure: "20:53", arret: 2 },
          { gare: "Ronchamp", heure: "21:06", arret: 1 },
          { gare: "Champagney", heure: "21:14", arret: 1 },
          { gare: "Bas Évette", heure: "21:24", arret: 1 },
          { gare: "Belfort-Ville", heure: "21:31", arret: 4 }
        ]
      }
    ]
  },

  {
    id: "TER 3520",
    nom: "AGC BFC 3C",
    moteurs: ["diesel"],
    vitesseMax: 160,
    capacite: { premiere: 24, seconde: 134 },
    trajets: [
      {
        nom: "Belfort-Ville → Porrentruy",
        dessertes: [
          { gare: "Belfort-Ville", heure: "06:30", arret: 3, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Danjoutin", heure: "06:36", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Méroux", heure: "06:43", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Morvillars", heure: "06:53", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Grandvillars", heure: "07:02", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Joncherey", heure: "07:06", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Delle", heure: "07:10", arret: 2, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Boncourt", heure: "07:14", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Grandgourt", heure: "07:19", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Courchavon", heure: "07:24", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Porrentruy", heure: "07:28", arret: 3, jours: ["LU", "MA", "ME", "JE", "VE"] }
        ]
      },
      {
        nom: "Porrentruy → Belfort-Ville",
        dessertes: [
          { gare: "Porrentruy", heure: "08:00", arret: 3, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Courchavon", heure: "08:06", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Grandgourt", heure: "08:11", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Boncourt", heure: "08:16", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Delle", heure: "08:19", arret: 2, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Joncherey", heure: "08:24", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Grandvillars", heure: "08:28", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Morvillars", heure: "08:37", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Méroux", heure: "08:47", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Danjoutin", heure: "08:54", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Belfort-Ville", heure: "08:58", arret: 3, jours: ["LU", "MA", "ME", "JE", "VE"] }
        ]
      },
      {
        nom: "Belfort-Ville → Porrentruy",
        dessertes: [
          { gare: "Belfort-Ville", heure: "09:30", arret: 3, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Danjoutin", heure: "09:36", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Méroux", heure: "09:43", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Morvillars", heure: "09:53", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Grandvillars", heure: "10:02", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Joncherey", heure: "10:06", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Delle", heure: "10:10", arret: 2, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Boncourt", heure: "10:14", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Grandgourt", heure: "10:19", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Courchavon", heure: "10:24", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Porrentruy", heure: "10:28", arret: 3, jours: ["LU", "MA", "ME", "JE", "VE"] }
        ]
      },
      {
        nom: "Porrentruy → Belfort-Ville",
        dessertes: [
          { gare: "Porrentruy", heure: "11:00", arret: 3, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Courchavon", heure: "11:06", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Grandgourt", heure: "11:11", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Boncourt", heure: "11:16", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Delle", heure: "11:19", arret: 2, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Joncherey", heure: "11:24", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Grandvillars", heure: "11:28", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Morvillars", heure: "11:37", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Méroux", heure: "11:47", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Danjoutin", heure: "11:54", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Belfort-Ville", heure: "11:58", arret: 3, jours: ["LU", "MA", "ME", "JE", "VE"] }
        ]
      },
      {
        nom: "Belfort-Ville → Porrentruy",
        dessertes: [
          { gare: "Belfort-Ville", heure: "12:30", arret: 3, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Danjoutin", heure: "12:36", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Méroux", heure: "12:43", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Morvillars", heure: "12:53", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Grandvillars", heure: "13:02", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Joncherey", heure: "13:06", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Delle", heure: "13:10", arret: 2, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Boncourt", heure: "13:14", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Grandgourt", heure: "13:19", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Courchavon", heure: "13:24", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Porrentruy", heure: "13:28", arret: 3, jours: ["LU", "MA", "ME", "JE", "VE"] }
        ]
      },
      {
        nom: "Porrentruy → Belfort-Ville",
        dessertes: [
          { gare: "Porrentruy", heure: "14:00", arret: 3, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Courchavon", heure: "14:06", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Grandgourt", heure: "14:11", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Boncourt", heure: "14:16", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Delle", heure: "14:19", arret: 2, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Joncherey", heure: "14:24", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Grandvillars", heure: "14:28", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Morvillars", heure: "14:37", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Méroux", heure: "14:47", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Danjoutin", heure: "14:54", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Belfort-Ville", heure: "14:58", arret: 3, jours: ["LU", "MA", "ME", "JE", "VE"] }
        ]
      },
      {
        nom: "Belfort-Ville → Porrentruy",
        dessertes: [
          { gare: "Belfort-Ville", heure: "15:30", arret: 3, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Danjoutin", heure: "15:36", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Méroux", heure: "15:43", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Morvillars", heure: "15:53", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Grandvillars", heure: "16:02", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Joncherey", heure: "16:06", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Delle", heure: "16:10", arret: 2, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Boncourt", heure: "16:14", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Grandgourt", heure: "16:19", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Courchavon", heure: "16:24", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Porrentruy", heure: "16:28", arret: 3, jours: ["LU", "MA", "ME", "JE", "VE"] }
        ]
      },
      {
        nom: "Porrentruy → Belfort-Ville",
        dessertes: [
          { gare: "Porrentruy", heure: "17:00", arret: 3, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Courchavon", heure: "17:06", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Grandgourt", heure: "17:11", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Boncourt", heure: "17:16", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Delle", heure: "17:19", arret: 2, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Joncherey", heure: "17:24", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Grandvillars", heure: "17:28", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Morvillars", heure: "17:37", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Méroux", heure: "17:47", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Danjoutin", heure: "17:54", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Belfort-Ville", heure: "17:58", arret: 3, jours: ["LU", "MA", "ME", "JE", "VE"] }
        ]
      },
      {
        nom: "Belfort-Ville → Porrentruy",
        dessertes: [
          { gare: "Belfort-Ville", heure: "18:30", arret: 3, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Danjoutin", heure: "18:36", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Méroux", heure: "18:43", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Morvillars", heure: "18:53", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Grandvillars", heure: "19:02", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Joncherey", heure: "19:06", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Delle", heure: "19:10", arret: 2, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Boncourt", heure: "19:14", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Grandgourt", heure: "19:19", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Courchavon", heure: "19:24", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Porrentruy", heure: "19:28", arret: 3, jours: ["LU", "MA", "ME", "JE", "VE"] }
        ]
      },
      {
        nom: "Porrentruy → Belfort-Ville",
        dessertes: [
          { gare: "Porrentruy", heure: "20:00", arret: 3, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Courchavon", heure: "20:06", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Grandgourt", heure: "20:11", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Boncourt", heure: "20:16", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Delle", heure: "20:19", arret: 2, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Joncherey", heure: "20:24", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Grandvillars", heure: "20:28", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Morvillars", heure: "20:37", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Méroux", heure: "20:47", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Danjoutin", heure: "20:54", arret: 1, jours: ["LU", "MA", "ME", "JE", "VE"] },
          { gare: "Belfort-Ville", heure: "20:58", arret: 3, jours: ["LU", "MA", "ME", "JE", "VE"] }
        ]
      },
      {
        nom: "Belfort-Ville → Delle",
        dessertes: [
          { gare: "Belfort-Ville", heure: "09:30", arret: 4, jours: ["SA", "DI"] },
          { gare: "Danjoutin", heure: "09:37", arret: 1, jours: ["SA", "DI"] },
          { gare: "Méroux", heure: "09:44", arret: 1, jours: ["SA", "DI"] },
          { gare: "Morvillars", heure: "09:54", arret: 1, jours: ["SA", "DI"] },
          { gare: "Grandvillars", heure: "10:03", arret: 1, jours: ["SA", "DI"] },
          { gare: "Joncherey", heure: "10:07", arret: 1, jours: ["SA", "DI"] },
          { gare: "Delle", heure: "10:11", arret: 4, jours: ["SA", "DI"] }
        ]
      },
      {
        nom: "Delle → Belfort-Ville",
        dessertes: [
          { gare: "Delle", heure: "11:00", arret: 4, jours: ["SA", "DI"] },
          { gare: "Joncherey", heure: "11:07", arret: 1, jours: ["SA", "DI"] },
          { gare: "Grandvillars", heure: "11:11", arret: 1, jours: ["SA", "DI"] },
          { gare: "Morvillars", heure: "11:20", arret: 1, jours: ["SA", "DI"] },
          { gare: "Méroux", heure: "11:30", arret: 1, jours: ["SA", "DI"] },
          { gare: "Danjoutin", heure: "11:37", arret: 1, jours: ["SA", "DI"] },
          { gare: "Belfort-Ville", heure: "11:41", arret: 4, jours: ["SA", "DI"] }
        ]
      },
      {
        nom: "Belfort-Ville → Delle",
        dessertes: [
          { gare: "Belfort-Ville", heure: "12:30", arret: 4, jours: ["SA", "DI"] },
          { gare: "Danjoutin", heure: "12:37", arret: 1, jours: ["SA", "DI"] },
          { gare: "Méroux", heure: "12:44", arret: 1, jours: ["SA", "DI"] },
          { gare: "Morvillars", heure: "12:54", arret: 1, jours: ["SA", "DI"] },
          { gare: "Grandvillars", heure: "13:03", arret: 1, jours: ["SA", "DI"] },
          { gare: "Joncherey", heure: "13:07", arret: 1, jours: ["SA", "DI"] },
          { gare: "Delle", heure: "13:11", arret: 4, jours: ["SA", "DI"] }
        ]
      },
      {
        nom: "Delle → Belfort-Ville",
        dessertes: [
          { gare: "Delle", heure: "14:00", arret: 4, jours: ["SA", "DI"] },
          { gare: "Joncherey", heure: "14:07", arret: 1, jours: ["SA", "DI"] },
          { gare: "Grandvillars", heure: "14:11", arret: 1, jours: ["SA", "DI"] },
          { gare: "Morvillars", heure: "14:20", arret: 1, jours: ["SA", "DI"] },
          { gare: "Méroux", heure: "14:30", arret: 1, jours: ["SA", "DI"] },
          { gare: "Danjoutin", heure: "14:37", arret: 1, jours: ["SA", "DI"] },
          { gare: "Belfort-Ville", heure: "14:41", arret: 4, jours: ["SA", "DI"] }
        ]
      },
      {
        nom: "Belfort-Ville → Delle",
        dessertes: [
          { gare: "Belfort-Ville", heure: "15:30", arret: 4, jours: ["SA", "DI"] },
          { gare: "Danjoutin", heure: "15:37", arret: 1, jours: ["SA", "DI"] },
          { gare: "Méroux", heure: "15:44", arret: 1, jours: ["SA", "DI"] },
          { gare: "Morvillars", heure: "15:54", arret: 1, jours: ["SA", "DI"] },
          { gare: "Grandvillars", heure: "16:03", arret: 1, jours: ["SA", "DI"] },
          { gare: "Joncherey", heure: "16:07", arret: 1, jours: ["SA", "DI"] },
          { gare: "Delle", heure: "16:11", arret: 4, jours: ["SA", "DI"] }
        ]
      },
      {
        nom: "Delle → Belfort-Ville",
        dessertes: [
          { gare: "Delle", heure: "17:00", arret: 4, jours: ["SA", "DI"] },
          { gare: "Joncherey", heure: "17:07", arret: 1, jours: ["SA", "DI"] },
          { gare: "Grandvillars", heure: "17:11", arret: 1, jours: ["SA", "DI"] },
          { gare: "Morvillars", heure: "17:20", arret: 1, jours: ["SA", "DI"] },
          { gare: "Méroux", heure: "17:30", arret: 1, jours: ["SA", "DI"] },
          { gare: "Danjoutin", heure: "17:37", arret: 1, jours: ["SA", "DI"] },
          { gare: "Belfort-Ville", heure: "17:41", arret: 4, jours: ["SA", "DI"] }
        ]
      },
      {
        nom: "Belfort-Ville → Delle",
        dessertes: [
          { gare: "Belfort-Ville", heure: "18:30", arret: 4, jours: ["SA", "DI"] },
          { gare: "Danjoutin", heure: "18:37", arret: 1, jours: ["SA", "DI"] },
          { gare: "Méroux", heure: "18:44", arret: 1, jours: ["SA", "DI"] },
          { gare: "Morvillars", heure: "18:54", arret: 1, jours: ["SA", "DI"] },
          { gare: "Grandvillars", heure: "19:03", arret: 1, jours: ["SA", "DI"] },
          { gare: "Joncherey", heure: "19:07", arret: 1, jours: ["SA", "DI"] },
          { gare: "Delle", heure: "19:11", arret: 4, jours: ["SA", "DI"] }
        ]
      },
      {
        nom: "Delle → Belfort-Ville",
        dessertes: [
          { gare: "Delle", heure: "20:00", arret: 4, jours: ["SA", "DI"] },
          { gare: "Joncherey", heure: "20:07", arret: 1, jours: ["SA", "DI"] },
          { gare: "Grandvillars", heure: "20:11", arret: 1, jours: ["SA", "DI"] },
          { gare: "Morvillars", heure: "20:20", arret: 1, jours: ["SA", "DI"] },
          { gare: "Méroux", heure: "20:30", arret: 1, jours: ["SA", "DI"] },
          { gare: "Danjoutin", heure: "20:37", arret: 1, jours: ["SA", "DI"] },
          { gare: "Belfort-Ville", heure: "20:41", arret: 4, jours: ["SA", "DI"] }
        ]
      }
    ]
  },

  {
    id: "TER Lu Nc 1",
    nom: "Z24500 Metrolor",
    moteurs: ["25kV CA", "1.5kV CC"],
    vitesseMax: 160,
    capacite: { premiere: 82, seconde: 596 },
    composition: ["Z24500 Metrolor"],
    trajets: [
      {
        nom: "Nancy → Luxembourg",
        dessertes: [
          { gare: "Nancy", heure: "06:00", arret: 4 },
          { gare: "Pont-à-Mousson", heure: "06:23", arret: 1 },
          { gare: "Pagny-sur-Moselle", heure: "06:30", arret: 1 },
          { gare: "Ars-sur-Moselle", heure: "06:39", arret: 1 },
          { gare: "Metz", heure: "06:50", arret: 4 },
          { gare: "Walygator parc", heure: "07:05", arret: 1 },
          { gare: "Uckange", heure: "07:11", arret: 1 },
          { gare: "Thionville", heure: "07:16", arret: 2 },
          { gare: "Bettembourg", heure: "07:31", arret: 1 },
          { gare: "Howald", heure: "07:37", arret: 1 },
          { gare: "Luxembourg", heure: "07:40", arret: 4 }
        ]
      },
      {
        nom: "Luxembourg → Nancy",
        dessertes: [
          { gare: "Luxembourg", heure: "08:00", arret: 4 },
          { gare: "Howald", heure: "08:06", arret: 1 },
          { gare: "Bettembourg", heure: "08:12", arret: 1 },
          { gare: "Thionville", heure: "08:26", arret: 2 },
          { gare: "Uckange", heure: "08:32", arret: 1 },
          { gare: "Walygator parc", heure: "08:38", arret: 1 },
          { gare: "Metz", heure: "08:50", arret: 4 },
          { gare: "Ars-sur-Moselle", heure: "09:04", arret: 1 },
          { gare: "Pagny-sur-Moselle", heure: "09:13", arret: 1 },
          { gare: "Pont-à-Mousson", heure: "09:20", arret: 1 },
          { gare: "Nancy", heure: "09:40", arret: 4 }
        ]
      },
      {
        nom: "Nancy → Luxembourg",
        dessertes: [
          { gare: "Nancy", heure: "10:00", arret: 4 },
          { gare: "Pont-à-Mousson", heure: "10:23", arret: 1 },
          { gare: "Pagny-sur-Moselle", heure: "10:30", arret: 1 },
          { gare: "Ars-sur-Moselle", heure: "10:39", arret: 1 },
          { gare: "Metz", heure: "10:50", arret: 4 },
          { gare: "Walygator parc", heure: "11:05", arret: 1 },
          { gare: "Uckange", heure: "11:11", arret: 1 },
          { gare: "Thionville", heure: "11:16", arret: 2 },
          { gare: "Bettembourg", heure: "11:31", arret: 1 },
          { gare: "Howald", heure: "11:37", arret: 1 },
          { gare: "Luxembourg", heure: "11:40", arret: 4 }
        ]
      },
      {
        nom: "Luxembourg → Nancy",
        dessertes: [
          { gare: "Luxembourg", heure: "12:00", arret: 4 },
          { gare: "Howald", heure: "12:06", arret: 1 },
          { gare: "Bettembourg", heure: "12:12", arret: 1 },
          { gare: "Thionville", heure: "12:26", arret: 2 },
          { gare: "Uckange", heure: "12:32", arret: 1 },
          { gare: "Walygator parc", heure: "12:38", arret: 1 },
          { gare: "Metz", heure: "12:50", arret: 4 },
          { gare: "Ars-sur-Moselle", heure: "13:04", arret: 1 },
          { gare: "Pagny-sur-Moselle", heure: "13:13", arret: 1 },
          { gare: "Pont-à-Mousson", heure: "13:20", arret: 1 },
          { gare: "Nancy", heure: "13:40", arret: 4 }
        ]
      },
      {
        nom: "Nancy → Luxembourg",
        dessertes: [
          { gare: "Nancy", heure: "14:00", arret: 4 },
          { gare: "Pont-à-Mousson", heure: "14:23", arret: 1 },
          { gare: "Pagny-sur-Moselle", heure: "14:30", arret: 1 },
          { gare: "Ars-sur-Moselle", heure: "14:39", arret: 1 },
          { gare: "Metz", heure: "14:50", arret: 4 },
          { gare: "Walygator parc", heure: "15:05", arret: 1 },
          { gare: "Uckange", heure: "15:11", arret: 1 },
          { gare: "Thionville", heure: "15:16", arret: 2 },
          { gare: "Bettembourg", heure: "15:31", arret: 1 },
          { gare: "Howald", heure: "15:37", arret: 1 },
          { gare: "Luxembourg", heure: "15:40", arret: 4 }
        ]
      },
      {
        nom: "Luxembourg → Nancy",
        dessertes: [
          { gare: "Luxembourg", heure: "16:00", arret: 4 },
          { gare: "Howald", heure: "16:06", arret: 1 },
          { gare: "Bettembourg", heure: "16:12", arret: 1 },
          { gare: "Thionville", heure: "16:26", arret: 2 },
          { gare: "Uckange", heure: "16:32", arret: 1 },
          { gare: "Walygator parc", heure: "16:38", arret: 1 },
          { gare: "Metz", heure: "16:50", arret: 4 },
          { gare: "Ars-sur-Moselle", heure: "17:04", arret: 1 },
          { gare: "Pagny-sur-Moselle", heure: "17:13", arret: 1 },
          { gare: "Pont-à-Mousson", heure: "17:20", arret: 1 },
          { gare: "Nancy", heure: "17:40", arret: 4 }
        ]
      },
      {
        nom: "Nancy → Luxembourg",
        dessertes: [
          { gare: "Nancy", heure: "18:00", arret: 4 },
          { gare: "Pont-à-Mousson", heure: "18:23", arret: 1 },
          { gare: "Pagny-sur-Moselle", heure: "18:30", arret: 1 },
          { gare: "Ars-sur-Moselle", heure: "18:39", arret: 1 },
          { gare: "Metz", heure: "18:50", arret: 4 },
          { gare: "Walygator parc", heure: "19:05", arret: 1 },
          { gare: "Uckange", heure: "19:11", arret: 1 },
          { gare: "Thionville", heure: "19:16", arret: 2 },
          { gare: "Bettembourg", heure: "19:31", arret: 1 },
          { gare: "Howald", heure: "19:37", arret: 1 },
          { gare: "Luxembourg", heure: "19:40", arret: 4 }
        ]
      },
      {
        nom: "Luxembourg → Nancy",
        dessertes: [
          { gare: "Luxembourg", heure: "20:00", arret: 4 },
          { gare: "Howald", heure: "20:06", arret: 1 },
          { gare: "Bettembourg", heure: "20:12", arret: 1 },
          { gare: "Thionville", heure: "20:26", arret: 2 },
          { gare: "Uckange", heure: "20:32", arret: 1 },
          { gare: "Walygator parc", heure: "20:38", arret: 1 },
          { gare: "Metz", heure: "20:50", arret: 4 },
          { gare: "Ars-sur-Moselle", heure: "21:04", arret: 1 },
          { gare: "Pagny-sur-Moselle", heure: "21:13", arret: 1 },
          { gare: "Pont-à-Mousson", heure: "21:20", arret: 1 },
          { gare: "Nancy", heure: "21:40", arret: 4 }
        ]
      }
    ]
  },

  {
    id: "TER Lu Nc 2",
    nom: "Z24500 Metrolor",
    moteurs: ["25kV CA", "1.5kV CC"],
    vitesseMax: 160,
    capacite: { premiere: 82, seconde: 596 },
    composition: ["Z24500 Metrolor"],
    trajets: [
      {
        nom: "Nancy → Luxembourg",
        dessertes: [
          { gare: "Nancy", heure: "08:00", arret: 4 },
          { gare: "Pont-à-Mousson", heure: "08:23", arret: 1 },
          { gare: "Pagny-sur-Moselle", heure: "08:30", arret: 1 },
          { gare: "Ars-sur-Moselle", heure: "08:39", arret: 1 },
          { gare: "Metz", heure: "08:50", arret: 4 },
          { gare: "Walygator parc", heure: "09:05", arret: 1 },
          { gare: "Uckange", heure: "09:11", arret: 1 },
          { gare: "Thionville", heure: "09:16", arret: 2 },
          { gare: "Bettembourg", heure: "09:31", arret: 1 },
          { gare: "Howald", heure: "09:37", arret: 1 },
          { gare: "Luxembourg", heure: "09:40", arret: 4 }
        ]
      },
      {
        nom: "Luxembourg → Nancy",
        dessertes: [
          { gare: "Luxembourg", heure: "10:00", arret: 4 },
          { gare: "Howald", heure: "10:06", arret: 1 },
          { gare: "Bettembourg", heure: "10:12", arret: 1 },
          { gare: "Thionville", heure: "10:26", arret: 2 },
          { gare: "Uckange", heure: "10:32", arret: 1 },
          { gare: "Walygator parc", heure: "10:38", arret: 1 },
          { gare: "Metz", heure: "10:50", arret: 4 },
          { gare: "Ars-sur-Moselle", heure: "11:04", arret: 1 },
          { gare: "Pagny-sur-Moselle", heure: "11:13", arret: 1 },
          { gare: "Pont-à-Mousson", heure: "11:20", arret: 1 },
          { gare: "Nancy", heure: "11:40", arret: 4 }
        ]
      },
      {
        nom: "Nancy → Luxembourg",
        dessertes: [
          { gare: "Nancy", heure: "12:00", arret: 4 },
          { gare: "Pont-à-Mousson", heure: "12:23", arret: 1 },
          { gare: "Pagny-sur-Moselle", heure: "12:30", arret: 1 },
          { gare: "Ars-sur-Moselle", heure: "12:39", arret: 1 },
          { gare: "Metz", heure: "12:50", arret: 4 },
          { gare: "Walygator parc", heure: "13:05", arret: 1 },
          { gare: "Uckange", heure: "13:11", arret: 1 },
          { gare: "Thionville", heure: "13:16", arret: 2 },
          { gare: "Bettembourg", heure: "13:31", arret: 1 },
          { gare: "Howald", heure: "13:37", arret: 1 },
          { gare: "Luxembourg", heure: "13:40", arret: 4 }
        ]
      },
      {
        nom: "Luxembourg → Nancy",
        dessertes: [
          { gare: "Luxembourg", heure: "14:00", arret: 4 },
          { gare: "Howald", heure: "14:06", arret: 1 },
          { gare: "Bettembourg", heure: "14:12", arret: 1 },
          { gare: "Thionville", heure: "14:26", arret: 2 },
          { gare: "Uckange", heure: "14:32", arret: 1 },
          { gare: "Walygator parc", heure: "14:38", arret: 1 },
          { gare: "Metz", heure: "14:50", arret: 4 },
          { gare: "Ars-sur-Moselle", heure: "15:04", arret: 1 },
          { gare: "Pagny-sur-Moselle", heure: "15:13", arret: 1 },
          { gare: "Pont-à-Mousson", heure: "15:20", arret: 1 },
          { gare: "Nancy", heure: "15:40", arret: 4 }
        ]
      },
      {
        nom: "Nancy → Luxembourg",
        dessertes: [
          { gare: "Nancy", heure: "16:00", arret: 4 },
          { gare: "Pont-à-Mousson", heure: "16:23", arret: 1 },
          { gare: "Pagny-sur-Moselle", heure: "16:30", arret: 1 },
          { gare: "Ars-sur-Moselle", heure: "16:39", arret: 1 },
          { gare: "Metz", heure: "16:50", arret: 4 },
          { gare: "Walygator parc", heure: "17:05", arret: 1 },
          { gare: "Uckange", heure: "17:11", arret: 1 },
          { gare: "Thionville", heure: "17:16", arret: 2 },
          { gare: "Bettembourg", heure: "17:31", arret: 1 },
          { gare: "Howald", heure: "17:37", arret: 1 },
          { gare: "Luxembourg", heure: "17:40", arret: 4 }
        ]
      },
      {
        nom: "Luxembourg → Nancy",
        dessertes: [
          { gare: "Luxembourg", heure: "18:00", arret: 4 },
          { gare: "Howald", heure: "18:06", arret: 1 },
          { gare: "Bettembourg", heure: "18:12", arret: 1 },
          { gare: "Thionville", heure: "18:26", arret: 2 },
          { gare: "Uckange", heure: "18:32", arret: 1 },
          { gare: "Walygator parc", heure: "18:38", arret: 1 },
          { gare: "Metz", heure: "18:50", arret: 4 },
          { gare: "Ars-sur-Moselle", heure: "19:04", arret: 1 },
          { gare: "Pagny-sur-Moselle", heure: "19:13", arret: 1 },
          { gare: "Pont-à-Mousson", heure: "19:20", arret: 1 },
          { gare: "Nancy", heure: "19:40", arret: 4 }
        ]
      },
      {
        nom: "Nancy → Luxembourg",
        dessertes: [
          { gare: "Nancy", heure: "20:00", arret: 4 },
          { gare: "Pont-à-Mousson", heure: "20:23", arret: 1 },
          { gare: "Pagny-sur-Moselle", heure: "20:30", arret: 1 },
          { gare: "Ars-sur-Moselle", heure: "20:39", arret: 1 },
          { gare: "Metz", heure: "20:50", arret: 4 },
          { gare: "Walygator parc", heure: "21:05", arret: 1 },
          { gare: "Uckange", heure: "21:11", arret: 1 },
          { gare: "Thionville", heure: "21:16", arret: 2 },
          { gare: "Bettembourg", heure: "21:31", arret: 1 },
          { gare: "Howald", heure: "21:37", arret: 1 },
          { gare: "Luxembourg", heure: "21:40", arret: 4 }
        ]
      },
      {
        nom: "Luxembourg → Nancy",
        dessertes: [
          { gare: "Luxembourg", heure: "22:00", arret: 4 },
          { gare: "Howald", heure: "22:06", arret: 1 },
          { gare: "Bettembourg", heure: "22:12", arret: 1 },
          { gare: "Thionville", heure: "22:26", arret: 2 },
          { gare: "Uckange", heure: "22:32", arret: 1 },
          { gare: "Walygator parc", heure: "22:38", arret: 1 },
          { gare: "Metz", heure: "22:50", arret: 4 },
          { gare: "Ars-sur-Moselle", heure: "23:04", arret: 1 },
          { gare: "Pagny-sur-Moselle", heure: "23:13", arret: 1 },
          { gare: "Pont-à-Mousson", heure: "23:20", arret: 1 },
          { gare: "Nancy", heure: "23:40", arret: 4 }
        ]
      }
    ]
  },

  {
    id: "TER nv aérp Mul",
    nom: "Regiolis fluoGrandEst 4C",
    moteurs: ["25kV CA", "1.5kV CC", "diesel"],
    vitesseMax: 160,
    capacite: { premiere: 24, seconde: 210 },
    trajets: [
      {
        nom: "Mulhouse → Aéroport Bâle-Mulhouse Terminal",
        dessertes: [
          { gare: "Mulhouse", heure: "08:25", arret: 5 },
          { gare: "Sierentz", heure: "08:44", arret: 1 },
          { gare: "Aéroport Bâle-Mulhouse Terminal", heure: "08:52", arret: 5 }
        ]
      },
      {
        nom: "Aéroport Bâle-Mulhouse Terminal → Mulhouse",
        dessertes: [
          { gare: "Aéroport Bâle-Mulhouse Terminal", heure: "10:25", arret: 5 },
          { gare: "Sierentz", heure: "10:37", arret: 1 },
          { gare: "Mulhouse", heure: "10:52", arret: 5 }
        ]
      },
      {
        nom: "Mulhouse → Aéroport Bâle-Mulhouse Terminal",
        dessertes: [
          { gare: "Mulhouse", heure: "12:25", arret: 5 },
          { gare: "Sierentz", heure: "12:44", arret: 1 },
          { gare: "Aéroport Bâle-Mulhouse Terminal", heure: "12:52", arret: 5 }
        ]
      },
      {
        nom: "Aéroport Bâle-Mulhouse Terminal → Mulhouse",
        dessertes: [
          { gare: "Aéroport Bâle-Mulhouse Terminal", heure: "14:25", arret: 5 },
          { gare: "Sierentz", heure: "14:37", arret: 1 },
          { gare: "Mulhouse", heure: "14:52", arret: 5 }
        ]
      },
      {
        nom: "Mulhouse → Aéroport Bâle-Mulhouse Terminal",
        dessertes: [
          { gare: "Mulhouse", heure: "16:25", arret: 5 },
          { gare: "Sierentz", heure: "16:44", arret: 1 },
          { gare: "Aéroport Bâle-Mulhouse Terminal", heure: "16:52", arret: 5 }
        ]
      },
      {
        nom: "Aéroport Bâle-Mulhouse Terminal → Mulhouse",
        dessertes: [
          { gare: "Aéroport Bâle-Mulhouse Terminal", heure: "18:25", arret: 5 },
          { gare: "Sierentz", heure: "18:37", arret: 1 },
          { gare: "Mulhouse", heure: "18:52", arret: 5 }
        ]
      },
      {
        nom: "Mulhouse → Aéroport Bâle-Mulhouse Terminal",
        dessertes: [
          { gare: "Mulhouse", heure: "20:25", arret: 5 },
          { gare: "Sierentz", heure: "20:44", arret: 1 },
          { gare: "Aéroport Bâle-Mulhouse Terminal", heure: "20:52", arret: 5 }
        ]
      },
      {
        nom: "Aéroport Bâle-Mulhouse Terminal → Mulhouse",
        dessertes: [
          { gare: "Aéroport Bâle-Mulhouse Terminal", heure: "22:25", arret: 5 },
          { gare: "Sierentz", heure: "22:37", arret: 1 },
          { gare: "Mulhouse", heure: "22:52", arret: 5 }
        ]
      }
    ]
  },

  {
    id: "TER nv aérp Mul 2",
    nom: "Regiolis fluoGrandEst 6C",
    moteurs: ["25kV CA", "1.5kV CC", "diesel"],
    vitesseMax: 160,
    capacite: { premiere: 24, seconde: 304 },
    trajets: [
      {
        nom: "Colmar → Aéroport Bâle-Mulhouse Terminal",
        dessertes: [
          { gare: "Colmar", heure: "05:55", arret: 2 },
          { gare: "Bollwiller", heure: "06:12", arret: 1 },
          { gare: "Mulhouse", heure: "06:26", arret: 4 },
          { gare: "Sierentz", heure: "06:44", arret: 1 },
          { gare: "Aéroport Bâle-Mulhouse Terminal", heure: "06:52", arret: 4 }
        ]
      },
      {
        nom: "Aéroport Bâle-Mulhouse Terminal → Colmar",
        dessertes: [
          { gare: "Aéroport Bâle-Mulhouse Terminal", heure: "08:26", arret: 4 },
          { gare: "Sierentz", heure: "08:37", arret: 1 },
          { gare: "Mulhouse", heure: "08:52", arret: 4 },
          { gare: "Bollwiller", heure: "09:09", arret: 1 },
          { gare: "Colmar", heure: "09:25", arret: 4 }
        ]
      },
      {
        nom: "Colmar → Aéroport Bâle-Mulhouse Terminal",
        dessertes: [
          { gare: "Colmar", heure: "09:55", arret: 2 },
          { gare: "Bollwiller", heure: "10:12", arret: 1 },
          { gare: "Mulhouse", heure: "10:26", arret: 4 },
          { gare: "Sierentz", heure: "10:44", arret: 1 },
          { gare: "Aéroport Bâle-Mulhouse Terminal", heure: "10:52", arret: 4 }
        ]
      },
      {
        nom: "Aéroport Bâle-Mulhouse Terminal → Colmar",
        dessertes: [
          { gare: "Aéroport Bâle-Mulhouse Terminal", heure: "12:26", arret: 4 },
          { gare: "Sierentz", heure: "12:37", arret: 1 },
          { gare: "Mulhouse", heure: "12:52", arret: 4 },
          { gare: "Bollwiller", heure: "13:09", arret: 1 },
          { gare: "Colmar", heure: "13:25", arret: 2 }
        ]
      },
      {
        nom: "Colmar → Aéroport Bâle-Mulhouse Terminal",
        dessertes: [
          { gare: "Colmar", heure: "13:55", arret: 2 },
          { gare: "Bollwiller", heure: "14:12", arret: 1 },
          { gare: "Mulhouse", heure: "14:26", arret: 4 },
          { gare: "Sierentz", heure: "14:44", arret: 1 },
          { gare: "Aéroport Bâle-Mulhouse Terminal", heure: "14:52", arret: 4 }
        ]
      },
      {
        nom: "Aéroport Bâle-Mulhouse Terminal → Colmar",
        dessertes: [
          { gare: "Aéroport Bâle-Mulhouse Terminal", heure: "16:26", arret: 4 },
          { gare: "Sierentz", heure: "16:37", arret: 1 },
          { gare: "Mulhouse", heure: "16:52", arret: 4 },
          { gare: "Bollwiller", heure: "17:09", arret: 1 },
          { gare: "Colmar", heure: "17:25", arret: 2 }
        ]
      },
      {
        nom: "Colmar → Aéroport Bâle-Mulhouse Terminal",
        dessertes: [
          { gare: "Colmar", heure: "17:55", arret: 2 },
          { gare: "Bollwiller", heure: "18:12", arret: 1 },
          { gare: "Mulhouse", heure: "18:26", arret: 4 },
          { gare: "Sierentz", heure: "18:44", arret: 1 },
          { gare: "Aéroport Bâle-Mulhouse Terminal", heure: "18:52", arret: 4 }
        ]
      },
      {
        nom: "Aéroport Bâle-Mulhouse Terminal → Colmar",
        dessertes: [
          { gare: "Aéroport Bâle-Mulhouse Terminal", heure: "20:26", arret: 4 },
          { gare: "Sierentz", heure: "20:37", arret: 1 },
          { gare: "Mulhouse", heure: "20:52", arret: 4 },
          { gare: "Bollwiller", heure: "21:09", arret: 1 },
          { gare: "Colmar", heure: "21:25", arret: 2 }
        ]
      }
    ]
  },

  {
    id: "TER200 - 1",
    nom: "BB26000 GrandEst",
    moteurs: ["25kV CA", "1.5kV CC"],
    vitesseMax: 200,
    capacite: { premiere: 60, seconde: 392 },
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
  }
];
