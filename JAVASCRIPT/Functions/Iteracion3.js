//Calcular la suma

// Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
// Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz.

// Puedes usar este array para probar tu función:

// const numbers = [1, 2, 3, 5, 45, 37, 58];

// function sumAll(param) {
// // insert code
// }

const numbers = [1, 2, 3, 5, 45, 37, 58];

const sumAll = (array) => {
  let sumaNums = 0;

  for (let i = 0; i < array.length; i++) {
    sumaNums += numbers[i];
  }
  return sumaNums;
};

console.log(sumAll(numbers));
