// Mix Fors

// Dado el siguiente javascript usa for of y for in para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios.

const users = [
  {
    name: "Manolo el del bombo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Mortadelo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Super Lopez",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "El culebra",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

const media = (users) => {
  sound = 0;
  vol = 0;
  for (const total of users) {
    for (const sonido in total.favoritesSounds) {
      sound += total.favoritesSounds[sonido].volume;
      vol++;
    }
  }
  console.log(`${sound} es el total`); //*Para sacar el total

  const calcularMedia = sound / vol;
  return calcularMedia;
};

const calcularMedia = media(users);
console.log(`y la media es  ${calcularMedia}`); //*Para sacar la media
