const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

//generar el token
const generateToken = (id, email) => {
  if (!id || !email) {
    //no tiene id no email
    throw new Error("Email or id are missing");
    //lanzas un nuevo error
  }
  //en caso de estar correcto retornar a jwt
  return jwt.sign({ id, email }, process.env.JWT_SECRET, { expiresIn: "1d" });
}; //se registra en el jtw(libreria)
//JWT_SECRET se genera en el punto .env con una palabra secreta"cualquier palabra"

const verifyToken = (token) => {
  if (!token) {
    throw new Error("Token is missing");
  }

  return jwt.verify(token, process.env.JWT_SECRET);
};

module.exports = {
  generateToken,
  verifyToken,
};
