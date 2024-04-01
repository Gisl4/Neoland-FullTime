// Mix for e includes

// Dado el siguiente javascript usa for of para recorrer el array de películas,
// genera un nuevo array con las categorías de las películas e imprime por consola el array de categorías.
// Ten en cuenta que las categorías no deberían repetirse. Para filtrar las categorías puedes ayudarte de la función
//  .includes()
//**itinerar el array para itinerar las caracteristicas de los elementos

const movies = [
  { title: "Madaraspar", duration: 192, categories: ["comedia", "aventura"] },
  { title: "Spiderpan", duration: 122, categories: ["aventura", "acción"] },
  {
    title: "Solo en Whatsapp",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "El gato con guantes",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];

const categoria = new Set();

for (const movie of movies) {
  for (const category of movie.categories) {
    categoria.add(category);
  }
}

const categoriaArray = Array.from(categoria);
console.log("🚀 ~ categoriaArray:", categoriaArray);
