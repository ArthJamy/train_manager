import { trainsFR } from "./trainsFR.js";
import { trainsDE } from "./trainsDE.js";

export const trains = [...trainsFR, ...trainsDE];
export const accouplements = [];

function getJoursCommun(joursA = [], joursB = []) {
  // jours par défaut = tous
  const all = ["LU", "MA", "ME", "JE", "VE", "SA", "DI"];
  const jA = joursA.length ? joursA : all;
  const jB = joursB.length ? joursB : all;
  return jA.filter(j => jB.includes(j));
}

function detecterAccouplements() {
  for (let i = 0; i < trains.length; i++) {
    const t1 = trains[i];
    for (let j = i + 1; j < trains.length; j++) {
      const t2 = trains[j];

      t1.trajets.forEach(trajetA => {
        t2.trajets.forEach(trajetB => {

          // Chercher une portion commune
          const dessA = trajetA.dessertes;
          const dessB = trajetB.dessertes;

          for (let a = 0; a < dessA.length - 1; a++) {
            for (let b = 0; b < dessB.length - 1; b++) {
              const dA1 = dessA[a], dA2 = dessA[a + 1];
              const dB1 = dessB[b], dB2 = dessB[b + 1];

              // même paire de gares (même sens)
              if (dA1.gare === dB1.gare && dA2.gare === dB2.gare) {
                // mêmes heures
                if (dA1.heure === dB1.heure && dA2.heure === dB2.heure) {
                  // mêmes jours (au moins un en commun)
                  const joursCommun = getJoursCommun(dA1.jours, dB1.jours);
                  if (joursCommun.length > 0) {
                    accouplements.push({
                      idA: t1.id,
                      idB: t2.id,
                      gareDebut: dA1.gare,
                      gareFin: dA2.gare,
                      heureDebut: dA1.heure,
                      heureFin: dA2.heure,
                      jours: joursCommun
                    });
                  }
                }
              }
            }
          }
        });
      });
    }
  }

  console.log("✅ Accouplements détectés :", accouplements);
}

detecterAccouplements();
