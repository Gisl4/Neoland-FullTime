// Map

/*4.1 Dado el siguiente array, devuelve un array con sus nombres
utilizando .map().*/
const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

const userss = users.map((users) => users.name);
console.log(userss);

/*4.2 Dado el siguiente array, devuelve una lista que contenga los valores
de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que
empiece por 'A'.*/

const users1 = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

const usersss = users1.map((users) => users.name);

let newName = [];

usersss.forEach((element) => {
  if (element.toLowerCase().charAt(0) == "a") {
    element = "Anacleto";
    newName.push(element);
  } else {
    newName.push(element);
  }
});
console.log(newName);

/*4.3 Dado el siguiente array, devuelve una lista que contenga los valores
de la propiedad .name y añade al valor de .name el string ' (Visitado)'
cuando el valor de la propiedad isVisited = true.*/
const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];

const nameCity = cities.map((cities) => cities.name);

const inVisited = cities.map((cities) => cities.isVisited);

inVisited.forEach((element, index) => {
  if (element == true) {
    nameCity[index] += " (Visitado)";
  }
});
console.log(nameCity);
