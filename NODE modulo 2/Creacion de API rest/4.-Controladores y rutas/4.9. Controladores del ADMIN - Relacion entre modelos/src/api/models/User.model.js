const bcrypt = require("bcrypt"); // para encryptar informacion
const validator = require("validator"); /// n os sirve para validad info
const mongoose = require("mongoose");

// el nombre del esquema en mayusculas
const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      validate: [validator.isEmail, "Email not valid"], // en caso de no ser un email valido
      // lanza el error ----> 'Email not valid'
    },
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      validate: [validator.isStrongPassword], //minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1
    },
    gender: {
      type: String,
      enum: ["hombre", "mujer", "otros"],
      required: true,
    },
    rol: {
      type: String,
      enum: ["admin", "user", "superadmin"],
      default: "user",
    },
    confirmationCode: {
      type: Number,
      required: true,
    },
    check: {
      type: Boolean,
      default: false,
    },
    image: {
      type: String,
    },
    moviesFav: [{ type: mongoose.Schema.Types.ObjectId, ref: "Movie" }], // lo controla cada uno su modelo
    charactersFav: [{ type: mongoose.Schema.Types.ObjectId, ref: "Character" }], // lo controla cada uno su modelo
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // Es un toggle
    followed: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // Es un toggle
    chats: [{ type: mongoose.Schema.Types.ObjectId, ref: "Chat" }], // lo controlan los mensajes
    banned: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // para poder banear a los usuarios, lo controlamos nosotros
    commentsPublicByOther: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Menssage" }, // lo controla los mensajes
    ], // los que me hacen a mi
    postedMessages: [{ type: mongoose.Schema.Types.ObjectId, ref: "Menssage" }], // son los messages que creo
    /// cuando relacionamos un modelo de con otro lo hacemos con populate y el referente a otro
  },
  {
    // esto es cuando se crea y se actualiza el objeto
    timestamps: true,
  }
);

UserSchema.pre("save", async function (next) {
  try {
    this.password = await bcrypt.hash(this.password, 10);
    next();
    // el next puede lanzar al log o puede decir que continuemos
  } catch (error) {
    next("Error hashing password", error);
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
