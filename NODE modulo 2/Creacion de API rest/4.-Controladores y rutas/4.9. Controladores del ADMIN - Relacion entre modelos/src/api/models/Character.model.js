//! --------- nos requerimos mongoose---
const mongoose = require("mongoose");

//! ----------nos traemos de mongoose la parte de los esquemas de datos

const Schema = mongoose.Schema;

//! --------- creamos los esquemas de datos

// Definir el modelo de datos:
// ------------> Le damos a cada clave del objeto el Type (tipo de dato)
// ------------> definimos otras propiedades que limitan la informacion que se puede incluir en esa clave
// ------------> que sea requerido, una longitud maxima y minima, etc etc

const CharacterSchema = new Schema(
  {
    name: { type: String, required: false, unique: false },
    gender: {
      type: String,
      enum: ["hombre", "mujer", "otros"],
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    //*La redundancia es = que datos no se repiten los diferentes modelos
    //puede ser un array o un unico objeto
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Menssage" }], //tiene un array de objects ids que hacen referencia al modelo "Menssage"
    movies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Movie" }], //tiene un array con las diferentes ids de las peliculas que pertenecen al modelo "Movie"
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], //tiene un array con las diferentes ids que se referencia ocn los usuarios que pertenecen al modelo "likes"
  },
  {
    timestamps: true,
  }
);

//! -------- con la definicion de datos y su esquema vamos a crear el modelo de datos

const Character = mongoose.model("Character", CharacterSchema);

//! -------- exportar el modelo para que lo utilicen los controladores

module.exports = Character;
