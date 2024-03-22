// Calcular el promedio

// Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6];

const average = (array) => {
  let suma = 0;

  for (let i = 0; i < array.length; i++) {
    suma += array[i];
  }
  const promedio = suma / array.length;
  return suma / array.length;
};

console.log(average(numbers));
average(numbers);
