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
    lowestBike = bicycle;
  }
}

const lowestBikeEl = document.getElementById("snack_1");
lowestBikeEl.textContent = `${lowestBike.name}, ${lowestBike.weight} kg`;

/* 
Snack 2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

const footballTeams = [
  {
    name: "Juventus FC",
    points: 0,
    fouls: 0,
  },
  {
    name: "AC Milan",
    points: 0,
    fouls: 0,
  },
  {
    name: "Inter Milan",
    points: 0,
    fouls: 0,
  },
  {
    name: "SSC Napoli",
    points: 0,
    fouls: 0,
  },
  {
    name: "AS Roma",
    points: 0,
    fouls: 0,
  },
];

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

const namesAndFouls = []

for (let i = 0; i < footballTeams.length; i++){
    const footballTeam = footballTeams[i]
    footballTeam.points = getRandomNum(1, 100)
    footballTeam.fouls = getRandomNum(100, 200)

    namesAndFouls.push({
        name: footballTeam.name,
        fouls: footballTeam.fouls

    })
}

console.log(namesAndFouls);
