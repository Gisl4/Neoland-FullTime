const express = require("express"); // express crea las rutas
const { toggleLikeMovie } = require("../controllers/Movie.controllers");
const { isAuth } = require("../../middleware/auth.middleware");
const MovieRoutes = express.Router();

MovieRoutes.patch("/like/:idMovie", [isAuth], toggleLikeMovie);

module.exports = MovieRoutes;
