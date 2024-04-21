/*2.1 Inserta dinamicamente en un html un div vacio con javascript.*/

const div = document.createElement("div");
document.body.append(div);

/*2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.*/

const div2 = document.createElement("div");
const parrafoDiv2 = document.createElement("p");

document.body.append(div2);
div2.append(parrafoDiv2);

/*2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.*/

const div3 = document.createElement("div");

for (let i = 0; i < 6; i++) {
  const parrafoDiv3 = document.createElement("p");
  div3.append(parrafoDiv3);
}

document.body.append(div3);

/*2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.*/

const p = `<p>Soy dinámico!<p>`;
document.body.innerHTML += p;

/*2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.*/

const texto = `Wubba Lubba dub dub`;
const h2 = document.querySelector(".fn-insert-here");
h2.innerHTML += texto;

/*2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];*/

const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];
const ul = document.createElement("ul");

apps.forEach((app) => {
  const li = document.createElement("li");
  li.textContent = app;
  ul.appendChild(li);
});

document.body.appendChild(ul);

/*2.7 Elimina todos los nodos que tengan la clase .fn-remove-me*/

const elementos = document.querySelectorAll(".fn-remove-me");
elementos.forEach((elemento) => {
  elemento.remove();
});

/*2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
	Recuerda que no solo puedes insertar elementos con .appendChild.*/

const texto1 = document.createElement("p");
texto1.textContent = "Voy en medio!";

const divElements = document.querySelectorAll("div");
const divFirst = divElements[0];

divFirst.parentNode.insertBefore(
  texto1,
  divElements[1]
); /*---------  también valdría
poner body en lugar de parentNode, pero lo he usado para entender mejor lo de la estructura DOM*/

/*2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here*/

const divElegidos = document.querySelectorAll("div.fn-insert-here");

divElegidos.forEach((div) => {
  const parrafo = document.createElement("p");
  parrafo.textContent = `Voy dentro!`;
  div.appendChild(parrafo);

  console.log("Div seleccionado:", div);
});
