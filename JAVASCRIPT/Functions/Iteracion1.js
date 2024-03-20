//Completa la función que tomando dos números como argumento devuelva el más alto.

// const sum = (numberOne, numberTwo) => {
// return Math.max(numberOne, numberTwo);
// };
// console.log(sum(5, 9));

function sum(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    return numberOne;
  } else {
    return numberTwo;
  }
}
console.log(sum(3, 7));
