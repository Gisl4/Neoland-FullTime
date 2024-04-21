/*1.1 Usa querySelector para mostrar por consola el botón con la clase .showme*/

console.log(document.querySelector(".showme"));
console.log("hola");

/*1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado*/

console.log(document.querySelector("#pillado"));

/*1.3 Usa querySelector para mostrar por consola todos los p*/

const etiquetaP = document.querySelectorAll("p");

etiquetaP.forEach((etiquetaP) => console.log(etiquetaP));

/*1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon*/

const pokemonClass = document.querySelectorAll(".pokemon");

pokemonClass.forEach((pokemonClass) => console.log(pokemonClass));

/*1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
data-function="testMe".*/

const elements = document.querySelectorAll('[data-function="testMe"]');

elements.forEach((element) => {
  console.log(element);
});

/*1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
data-function="testMe".*/

console.log(elements[2]);
