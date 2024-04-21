const randomPassword = () => {
  const randomString = "*@!=&$"; //<----- utiliza eso para general los caracteres especiales
  //Funcion que es template string que contiene un Math.random por cada una de las posiciones
  const passwordSecure = `${Math.random().toString(36).slice(-4)}${
    randomString[Math.floor(Math.random() * 5)]
  }${randomString[Math.floor(Math.random() * 5)]}${Math.random()
    .toString(36)
    .slice(-4)
    .toUpperCase()}${randomString[Math.floor(Math.random() * 5)]}${
    randomString[Math.floor(Math.random() * 5)]
  }`;

  return passwordSecure; // devuelve esta password segura
};

module.exports = randomPassword;
