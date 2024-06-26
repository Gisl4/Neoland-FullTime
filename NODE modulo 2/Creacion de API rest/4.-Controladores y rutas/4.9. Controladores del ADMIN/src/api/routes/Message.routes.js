const express = require("express"); // express crea las rutas
const { createMessage } = require("../controllers/Message.controllers");
const { isAuth } = require("../../middleware/auth.middleware");
const MessageRoutes = express.Router();

MessageRoutes.post("/:idRecipient", [isAuth], createMessage);
module.exports = MessageRoutes;
