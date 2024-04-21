const User = require("../api/models/User.model");
const { verifyToken } = require("../utils/token");
const dotenv = require("dotenv");
dotenv.config();

// isAuth = si tiene token
const isAuth = async (req, res, next) => {
  const token = req.headers.authorization?.replace("Bearer ", "");
  // se recibe un token de las headers que se envia por un token llamado "Bearer".
  // el replace elimina la palabra "Bearer" para remplazarlo por el token.

  //si no tenemos un token
  if (!token) {
    return next(new Error("Unauthorized")); // se lanza error diciendo que no esta autorizado por inexistencia de token
  }

  // Se decodifica el token para obtener el propietario
  try {
    const decoded = verifyToken(token, process.env.JWT_SECRET);
    // En "decoded" con la funcion "verifyToken" se le pasa el token y el JWT_SECRET para poder decodificarlo
    // Nos va a devolver el email y el id para hacer el token y la devuelve en un objeto

    /// solo se crea req.user cuando es un endpoint authenticado ---> tiene como middleware el auth
    req.user = await User.findById(decoded.id); // req.user se contruye una nueva clave con la que se llame user
    // con el "await" busco al usuario que esta con el token y se guarda en la req.user
    // hago un "findById" con el "decoded.id"
    next();
  } catch (error) {
    return next(error); // en caso de error se retorna
  }
};

// isAuthAdmin = estas autenticado siendo administrador--- los pasos son iguales a la autentificacion
const isAuthAdmin = async (req, res, next) => {
  const token = req.headers.authorization?.replace("Bearer ", "");
  if (!token) {
    return next(new Error("Unauthorized"));
  }

  try {
    const decoded = verifyToken(token, process.env.JWT_SECRET);
    // cuando decodifico el token saco el id y el email
    console.log(decoded);
    req.user = await User.findById(decoded.id);

    // pongo un requisito mas y es que sea admin
    // si es diferente a admin
    if (req.user.rol !== "admin") {
      return next(new Error("Unauthorized, not admin"));
      // se lanza error de no autorizado, solamente autenticado
      // es error porque no eres administrador
    }
    next();
    // El "next" permite continuar o al ser un error se envia log en la consola
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  isAuth,
  isAuthAdmin,
};
