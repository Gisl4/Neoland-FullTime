//Función swap

//Crea una función llamada `swap()` que reciba un array y dos parametros que sean indices del array.
//La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro.
//Retorna el array resultante.

//Sugerencia de array:

const text = [
  "Mesirve",
  "Cristiano Romualdo",
  "Fernando Muralla",
  "Ronalguiño",
];

const swap = (array, index1, index2) => {
  let copia = array[index1];
  array[index1] = array[index2];
  array[index2] = copia;
  return array;
};

const result = swap(text, 3, 0);
console.log(result);
