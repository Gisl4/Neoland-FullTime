const express = require("express"); // controla la ruta
const UserRoutes = express.Router();

const { registerLargo } = require("../controllers/User.controllers"); //controlador
const { upload } = require("../../middleware/files.middleware");

//!------------------------------------------------------------------------
//?--------------------------------RUTAS SIN REDIRECT----------------------
//!------------------------------------------------------------------------
// Una ruta llama a otra ruta.
// confifuar y traer las rutas
//crea elemento-registerLargo

UserRoutes.post("/registerLargo", upload.single("image"), registerLargo);
//upload.single("image")---es el middleware de subida de fichero

module.exports = UserRoutes;

//?____________________________________________________________________________________________
//cuando se ultiliza la libreria se tiene que importar.
//UserRouters = es un objeto complejo

//!metodos en una API: GET(lectura), DELETE(borrado), POST(crear elemento en el backend), PATCH(actualizar parcialemnte), PUT(actualizacion total),
//! Index utiliza las rutas
