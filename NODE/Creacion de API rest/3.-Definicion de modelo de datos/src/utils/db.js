//!------------------------------------------------------------------------------
//?----------------------CONEXION CON LA base de datos MONGO DB------------------
//!------------------------------------------------------------------------------
//quien interactua con mongoDB es mongoose

// tenemos que traernos dotenv porque tenmos la url que no queremos que se comparta publicamente
const dotenv = require("dotenv");
dotenv.config();

// Nos traemos la libreria mongoose que es quien va a controlar la DB: MONGO DB
const mongoose = require("mongoose");

// nos traemos la MONGO_URI del .env
const MONGO_URI = process.env.MONGO_URI;
//Mongo_URI= Es nuestro nombre, contraseña para poderlo conectar con mongoDB

/// hacemos la funcion que se exporta y luego importa en el index que va conectar con Mongo

const connect = async () => {
  try {
    const db = await mongoose.connect(MONGO_URI);

    // AHORA NOS VAMOS A TRAER EL HOST  y el NAME  de la DB --

    const { name, host } = db.connection; // Se hace destructuring

    console.log(
      `Conectada la DB 👌  en el host: ${host} con el nombre: ${name}`
    );
  } catch (error) {
    console.log("No se ha conectado la db❌", error.message);
  }
};

module.exports = { connect };

//!async= interactua con el internet, interactua con algo que incluye sincronias
//!await = para capturar los errores se hace un try catch
//!const db = await mongoose.connect(MONGO_URI); //base de datos con un db para hacer el llamado con .connect y meterlo a MONGO_URI
