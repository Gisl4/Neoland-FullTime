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

// console.log(repeatCounter(counterWords));
// function repeatCounter(param) {
// let count = [];
// let array2 = [];
// for(let i = 0; i < param.legth; i++){
// count = 0;
// for(let x = i; x <param.legth; x++){
// if(param[i] === param[x]){
// count ++;
// }
// }
// console.log(param[i]);
// console.log(array. includes(param[i]));
// if(!array.includes(param[i])){
// console.log(anadimos (param[i]));
// array.push([param[i],count]);
// }
// console.log(array);
// }
// }
// return array;

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
