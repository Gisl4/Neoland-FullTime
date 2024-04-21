// Arrows

// Crea una arrow function que tenga dos parametros a y b y
// que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre
// por consola la suma de los dos parametros.

const suma = (a = 10, b = 5) => {
  let sum = a + b;
  return sum;
};

//1.1 Ejecuta esta función sin pasar ningún parametro

console.log(suma());

//1.2 Ejecuta esta función pasando un solo parametro

console.log(suma(11));

//1.3 Ejecuta esta función pasando dos parametros

console.log(suma(12, 3));
