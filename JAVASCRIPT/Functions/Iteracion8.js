//  Contador de repeticiones

//  Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.
//  Puedes usar este array para probar tu función:

const counterWords = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "upgrade",
  "code",
];

function repeatCounter(param) {
  const wordCounts = {};
  for (const word of param) {
    if (word in wordCounts) {
      wordCounts[word]++;
    } else {
      wordCounts[word] = 1;
    }
  }
  return wordCounts;
}

const result = repeatCounter(counterWords);
for (const word in result) {
  console.log(`'${word}' aparece ${result[word]} veces.`);
}

//*se crea un objeto vacio, luego se itera a traves del array counterwords para asi devolver el numero de veces que se repite.
