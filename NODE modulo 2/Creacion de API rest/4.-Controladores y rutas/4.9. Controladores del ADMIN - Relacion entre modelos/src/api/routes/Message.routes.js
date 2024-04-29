// Lo importado
const express = require("express"); // express crea las rutas
const { createMessage } = require("../controllers/Message.controllers");
const { isAuth } = require("../../middleware/auth.middleware");
const MessageRoutes = express.Router();

// Lo exportado
MessageRoutes.post("/:idRecipient", [isAuth], createMessage);
//tipo posteo .... por la ruta se recibe el id de quien quiero hacer el mensaje
// /:idRecipient = param
module.exports = MessageRoutes;

// la ruta se crea = enpoint, middleware y controlador
