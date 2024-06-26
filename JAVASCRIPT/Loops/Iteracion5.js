// Probando For

// Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40.
// Imprime en un console log el array. Puedes usar este array:

const placesToTravel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];

for (let recorrer = placesToTravel.length - 1; recorrer >= 0; recorrer--) {
  if (
    placesToTravel[recorrer].id === 11 ||
    placesToTravel[recorrer].id === 40
  ) {
    placesToTravel.splice(recorrer, 1);
  }
}
console.log(placesToTravel);
