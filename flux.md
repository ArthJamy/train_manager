# 🚆 Système de flux passagers – Simulation ferroviaire

## 🎯 Objectif

Simuler de façon **crédible mais légère** le remplissage des trains, sans créer de voyageurs individuels.
Chaque train dispose d’un **état dynamique** (occupants 1ʳᵉ / 2ᵉ classe, taux de remplissage) calculé selon :

* les **flux journaliers des gares desservies**,
* l’**heure courante** (pointe ou creux),
* et la **progression dans le trajet** (gares déjà parcourues).

---

## 📁 Structure des fichiers

| Fichier                       | Rôle                                                         |
| ----------------------------- | ------------------------------------------------------------ |
| `gares.js`                    | Liste des gares fixes (coordonnées, type, `fluxPassager`)    |
| `trainsFR.js` / `trainsDE.js` | Définition statique des trains, trajets et dessertes         |
| `etatTrains.js`               | Module dynamique : initialise et met à jour les passagers    |
| `main.js`                     | Boucle principale, dessin et intégration de `majOccupants()` |

---

## ⚙️ Fonctionnement général

### 🔹 Initialisation (`initTrainsState()`)

* Calcul du **potentiel de ligne** = somme des `fluxPassager` des gares **desservies aujourd’hui** (hors gares fantômes).
* Calcul du **taux de remplissage initial** selon :

  * l’heure (`getFacteurHoraire()`),
  * la proportion de gares déjà parcourues,
  * un léger aléa.
* Initialisation des occupants (`première` / `seconde`) et stockage dans `etatTrains`.

### 🔹 Mise à jour en gare (`majOccupants()`)

* Appelée automatiquement dans `main.js` quand un train **arrive en gare**.
* Calcule les **montées** et **descentes** en fonction de :

  * la taille de la gare (flux + type),
  * le potentiel total de la ligne,
  * l’heure du jour,
  * un facteur aléatoire léger.
* Les montées et descentes sont arrondies (`Math.round`) pour rester entières.
* Les valeurs sont bornées entre 0 et la capacité du train.

### 🔹 Affichage (`afficherInfosTrain()`)

* Affiche occupants 1ʳᵉ / 2ᵉ classe + taux de remplissage.
* Le pourcentage est **coloré** selon le taux :

  * 🟢 vert → ≤ 50 %
  * 🟠 orange → > 50 %
  * 🔴 rouge → > 80 %
* Affiché uniquement si le train est **en route** ou **en gare**.

---

## 🧮 Facteurs ajustables

| Élément                               | Description                          | Emplacement           | Valeurs typiques                  |
| ------------------------------------- | ------------------------------------ | --------------------- | --------------------------------- |
| `base = 800`                          | Volume global de voyageurs par arrêt | `majOccupants()`      | 300–1200                          |
| `facteurHeure`                        | Modulation selon l’heure             | `getFacteurHoraire()` | 0.1 → 1.5                         |
| `desc grande/moyenne/petite`          | % de passagers qui descendent        | `majOccupants()`      | 0.15 / 0.10 / 0.05                |
| `rand(0.8, 1.2)`                      | Variabilité aléatoire                | `majOccupants()`      | (0.9, 1.1) pour plus de stabilité |
| `baseTaux = 0.1 + 0.8 * facteurHeure` | Remplissage initial                  | `initTrainsState()`   | augmente pour trains plus pleins  |
| `* 0.8` dans tauxRemplissage          | Ajuste le taux global initial        | `initTrainsState()`   | 0.7–1.0 selon densité voulue      |

---

## ⏰ Facteurs horaires par défaut

| Heure   | Facteur horaire | Effet            |
| ------- | --------------- | ---------------- |
| 0h–5h   | 0.1             | quasi nul        |
| 6h–9h   | 1.5             | pointe du matin  |
| 10h–15h | 0.7             | creux de journée |
| 16h–19h | 1.3             | pointe du soir   |
| 20h–23h | 0.3             | faible trafic    |

---

## 💡 Conseils d’équilibrage

* Si **tous les trains sont trop pleins** → baisse `base` ou les `facteurs horaires`.
* Si **aucun train ne dépasse 50 %** → augmente `base` ou les `fluxPassager` des gares principales.
* Pour **un réseau plus stable**, réduis l’aléa `(rand(0.9, 1.1))`.
* Pour **plus de dynamisme** entre gares → augmente légèrement les taux de descente (0.2 / 0.15 / 0.1).

---

## 🧠 En résumé

> Le système simule un trafic crédible sans complexité :
>
> * tout repose sur les flux journaliers des gares,
> * les trains se remplissent progressivement selon leur itinéraire et l’heure,
> * et les ajustements sont localisés dans `etatTrains.js` via quelques coefficients clairs.


