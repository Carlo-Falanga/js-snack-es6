console.log("it works");

/* 
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/

const bicycles = [
  {
    name: "E-Bike",
    weight: 24,
  },
  {
    name: "Mountain Bike",
    weight: 13,
  },
  {
    name: "City Bike",
    weight: 16,
  },
  {
    name: "Road Bike",
    weight: 7.5,
  },
  {
    name: "Foldable Bike",
    weight: 11,
  },
];

let lowestBike = bicycles[0];

for (let i = 1; i < bicycles.length; i++) {
  const bicycle = bicycles[i];
  if (bicycle.weight < lowestBike.weight) {
    lowestBike = bicycle
    
  }
}
// console.log(lowestBike.name);

const lowestBikeEl = document.getElementById('snack_1')

lowestBikeEl.textContent = `${lowestBike.name}, ${lowestBike.weight} kg`;











/* 
Snack 2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/
