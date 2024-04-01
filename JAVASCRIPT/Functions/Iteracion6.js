// Valores únicos

// Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados,
// en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:

const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];

function removeDuplicates(param) {
  for (let resultado of param) {
    for (let resultado2 of param.slice(param.indexOf(resultado) + 1)) {
      if (resultado === resultado2) {
        param.splice(param.indexOf(resultado2), 1);
      }
    }
  }
  return param;
}
console.log(removeDuplicates(duplicates));

//*resultado2 se pone como subArray para devolver una copia con slice...
//*con el indexOf buscamos el indice y se suma 1
