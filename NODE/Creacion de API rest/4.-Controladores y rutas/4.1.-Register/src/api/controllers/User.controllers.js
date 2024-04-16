//! -----------------------------------------------------------------------
//? ------------------------------librerias--------------------------------
//! -----------------------------------------------------------------------
const nodemailer = require("nodemailer");
const validator = require("validator"); //validar correo
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");

dotenv.config();

//! -----------------------------------------------------------------------
//? ------------------------------modelos----------------------------------
//! -----------------------------------------------------------------------
const User = require("../models/User.model");
// Consume las librerias
//! -----------------------------------------------------------------------
//? ------------------------------utils - middlewares----------------------
//! -----------------------------------------------------------------------
const { deleteImgCloudinary } = require("../../middleware/files.middleware");
const randomCode = require("../../utils/randomCode");

//------------------->CRUD es el acrónimo de "Crear, Leer, Actualizar y Borrar"
/**+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 */
//! -----------------------------------------------------------------------------
//? ----------------------------REGISTER LARGO EN CODIGO ------------------------
//! -----------------------------------------------------------------------------
//async porque interactuan con el backend mongodb
// A mongodb se le pide una cosa y tarda un tiempo determinado

const registerLargo = async (req, res, next) => {
  // capturamos la imagen nueva subida a cloudinary
  let catchImg = req.file?.path;
  try {
    // actualizamos los elementos unique del modelo
    await User.syncIndexes();

    const { email, name } = req.body; // lo que enviamos por la parte del body de la request

    // vamos a buscsar al usuario
    const userExist = await User.findOne(
      { email: req.body.email },
      { name: req.body.name }
    );

    if (!userExist) {
      let confirmationCode = randomCode();
      const newUser = new User({ ...req.body, confirmationCode });
      if (req.file) {
        newUser.image = req.file.path;
      } else {
        newUser.image = "https://pic.onlinewebfonts.com/svg/img_181369.png";
      }

      try {
        const userSave = await newUser.save();
        if (userSave) {
          // ---------------------------> ENVIAR EL CODIGO CON NODEMAILER --------------------
          const emailEnv = process.env.EMAIL;
          const password = process.env.PASSWORD;

          const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: emailEnv,
              pass: password,
            },
          });

          const mailOptions = {
            from: emailEnv,
            to: email,
            subject: "Confirmation code",
            text: `tu codigo es ${confirmationCode}, gracias por confiar en nosotros ${name}`,
          };

          transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              console.log(error);
              return res.status(404).json({
                user: userSave,
                confirmationCode: "error, resend code",
              });
            }
            console.log("Email sent: " + info.response);
            return res.status(200).json({
              user: userSave,
              confirmationCode,
            });
          });
        } else {
          return res.status(404).json("error save user");
        }
      } catch (error) {
        return res.status(404).json(error.message);
      }
    } else {
      if (req.file) deleteImgCloudinary(catchImg);
      return res.status(409).json("this user already exist");
    }
  } catch (error) {
    // SIEMPRE QUE HAY UN ERROR GENERAL TENEMOS QUE BORRAR LA IMAGEN QUE HA SUBIDO EL MIDDLEWARE
    if (req.file) deleteImgCloudinary(catchImg);
    return next(error);
  }
};

// registerLargo = configurar la ruta
module.exports = {
  registerLargo,
};

//?____________________________________________________________________________________________
// express controla la ruta
//! El modelo siempre consume los controladores.
//! La ruta consume controladores.
//! siempre que algo no es instantaneo es async
//! El next se utiliza en los errores y en el modelo
//! UserSchema se tiene un pre("save")... antes de guardarlo se tine que hacer un bcrypt.hash,
//!     da las vueltas determinadas y si esta todo correcto realiza el next.
//! la funcion del "next": si esta todo correcto realiza la vuelta y si no paraliza todo con un error.

//! Cuando se hace un registro quien esta en medio del modelo y el registro es el "next"

//! Introducir try Catch, para gestionar errores y capturarlos en una asyc "await"
