export const trainsFR = [
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
          { gare: "Strasbourg", heure: "11:42", arret: 5 },
          { gare: "Entzheim-Aéroport", heure: "12:00", arret: 2 },
          { gare: "Molsheim", heure: "12:17", arret: 1 },
          { gare: "Urmatt", heure: "12:38", arret: 1 },
          { gare: "Schirmeck - La Broque", heure: "12:56", arret: 1 },
          { gare: "Fouday", heure: "13:05", arret: 1 },
          { gare: "St-Blaise-Roche-Poutay", heure: "13:10", arret: 1 },
          { gare: "Bourg-Bruche", heure: "13:18", arret: 1 },
          { gare: "Saales", heure: "13:24", arret: 1 },
          { gare: "Provenchères-Sur-Fave", heure: "13:55", arret: 1 },
          { gare: "Saint-Dié-des-Vosges", heure: "14:12", arret: 4 },
          { gare: "Saint-Léonard", heure: "14:26", arret: 1 },
          { gare: "Bruyères", heure: "14:58", arret: 1 },
          { gare: "Arches", heure: "15:27", arret: 1 },
          { gare: "Épinal", heure: "15:41", arret: 4 }
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
          { gare: "Mulhouse", heure: "14:36", arret: 5 },
          { gare: "Altkirch", heure: "14:53", arret: 1 },
          { gare: "Belfort-Ville", heure: "15:21", arret: 2 },
          { gare: "Lure", heure: "15:50", arret: 1 },
          { gare: "Vesoul", heure: "16:16", arret: 1 },
          { gare: "Culmont-Chalindrey", heure: "17:12", arret: 1 },
          { gare: "Langres", heure: "17:22", arret: 1 },
          { gare: "Chaumont", heure: "17:46", arret: 2 },
          { gare: "Bar-Sur-Aube", heure: "18:21", arret: 1 },
          { gare: "Troyes", heure: "19:07", arret: 4 },
          { gare: "Romilly-sur-Seine", heure: "19:36", arret: 1 },
          { gare: "Nogent-sur-Seine", heure: "19:52", arret: 1 },
          { gare: "Gare de l'Est", heure: "21:17", arret: 5 }
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
          { gare: "Bantzenheim", heure: "08:26", arret: 1 },
          { gare: "Neuenburg (Baden)", heure: "08:35", arret: 1 },
          { gare: "Muellheim", heure: "08:42", arret: 2 }
        ]
      },
      {
        nom: "Muellheim → Mulhouse",
        dessertes: [
          { gare: "Muellheim", heure: "09:00", arret: 2 },
          { gare: "Neuenburg (Baden)", heure: "09:08", arret: 1 },
          { gare: "Bantzenheim", heure: "09:17", arret: 1 },
          { gare: "Mulhouse", heure: "09:40", arret: 4 }
        ]
      },
      {
        nom: "Mulhouse → Muellheim",
        dessertes: [
          { gare: "Mulhouse", heure: "10:00", arret: 4 },
          { gare: "Bantzenheim", heure: "10:26", arret: 1 },
          { gare: "Neuenburg (Baden)", heure: "10:35", arret: 1 },
          { gare: "Muellheim", heure: "10:42", arret: 2 }
        ]
      },
      {
        nom: "Muellheim → Mulhouse",
        dessertes: [
          { gare: "Muellheim", heure: "11:00", arret: 2 },
          { gare: "Neuenburg (Baden)", heure: "11:08", arret: 1 },
          { gare: "Bantzenheim", heure: "11:17", arret: 1 },
          { gare: "Mulhouse", heure: "11:40", arret: 4 }
        ]
      },
      {
        nom: "Mulhouse → Muellheim",
        dessertes: [
          { gare: "Mulhouse", heure: "12:00", arret: 4 },
          { gare: "Bantzenheim", heure: "12:26", arret: 1 },
          { gare: "Neuenburg (Baden)", heure: "12:35", arret: 1 },
          { gare: "Muellheim", heure: "12:42", arret: 2 }
        ]
      },
      {
        nom: "Muellheim → Mulhouse",
        dessertes: [
          { gare: "Muellheim", heure: "13:00", arret: 2 },
          { gare: "Neuenburg (Baden)", heure: "13:08", arret: 1 },
          { gare: "Bantzenheim", heure: "13:17", arret: 1 },
          { gare: "Mulhouse", heure: "13:40", arret: 4 }
        ]
      },
      {
        nom: "Mulhouse → Muellheim",
        dessertes: [
          { gare: "Mulhouse", heure: "14:00", arret: 4 },
          { gare: "Bantzenheim", heure: "14:26", arret: 1 },
          { gare: "Neuenburg (Baden)", heure: "14:35", arret: 1 },
          { gare: "Muellheim", heure: "14:42", arret: 2 }
        ]
      },
      {
        nom: "Muellheim → Mulhouse",
        dessertes: [
          { gare: "Muellheim", heure: "15:00", arret: 2 },
          { gare: "Neuenburg (Baden)", heure: "15:08", arret: 1 },
          { gare: "Bantzenheim", heure: "15:17", arret: 1 },
          { gare: "Mulhouse", heure: "15:40", arret: 4 }
        ]
      },
      {
        nom: "Mulhouse → Muellheim",
        dessertes: [
          { gare: "Mulhouse", heure: "16:00", arret: 4 },
          { gare: "Bantzenheim", heure: "16:26", arret: 1 },
          { gare: "Neuenburg (Baden)", heure: "16:35", arret: 1 },
          { gare: "Muellheim", heure: "16:42", arret: 2 }
        ]
      },
      {
        nom: "Muellheim → Mulhouse",
        dessertes: [
          { gare: "Muellheim", heure: "17:00", arret: 2 },
          { gare: "Neuenburg (Baden)", heure: "17:08", arret: 1 },
          { gare: "Bantzenheim", heure: "17:17", arret: 1 },
          { gare: "Mulhouse", heure: "17:40", arret: 4 }
        ]
      },
      {
        nom: "Mulhouse → Muellheim",
        dessertes: [
          { gare: "Mulhouse", heure: "18:00", arret: 4 },
          { gare: "Bantzenheim", heure: "18:26", arret: 1 },
          { gare: "Neuenburg (Baden)", heure: "18:35", arret: 1 },
          { gare: "Muellheim", heure: "18:42", arret: 2 }
        ]
      },
      {
        nom: "Muellheim → Mulhouse",
        dessertes: [
          { gare: "Muellheim", heure: "19:00", arret: 2 },
          { gare: "Neuenburg (Baden)", heure: "19:08", arret: 1 },
          { gare: "Bantzenheim", heure: "19:17", arret: 1 },
          { gare: "Mulhouse", heure: "19:40", arret: 4 }
        ]
      }
    ]
  },

  {
    id: "TER 2056",
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
    id: "TER 2057",
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
          { gare: "Belfort-Ville", heure: "20:30", arret: 2 },
          { gare: "Montreux-Vieux", heure: "20:45", arret: 1 },
          { gare: "Dannemarie", heure: "20:53", arret: 1 },
          { gare: "Altkirch", heure: "21:02", arret: 2 },
          { gare: "Illfurth", heure: "21:09", arret: 1 },
          { gare: "Mulhouse", heure: "21:18", arret: 2 }
        ]
      }
    ]
  },

  {
    id: "TER 3110",
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
          { gare: "Entzheim-Aéroport", heure: "16:10", arret: 2 },
          { gare: "Lingolsheim", heure: "16:18", arret: 1 },
          { gare: "Strasbourg", heure: "16:27", arret: 5 }
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
    id: "TER 3111",
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
  }
];
