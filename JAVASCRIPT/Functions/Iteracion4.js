// Calcular el promedio

// Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(param) {
  let average = 0;
  for (const num of param) {
    average += num / param.length;
  }
  return average;
}
console.log(average(numbers));
