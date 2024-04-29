const Character = require("../models/Character.model");
const Chat = require("../models/Chat.model");
const Menssage = require("../models/Message.model");
const Movie = require("../models/Movie.model");
const User = require("../models/User.model");

/**+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * ++++++++++++++++++++++++++-------C R U D--------+++++++++++++++++++++++++++++++++++
 * +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 */
// Del toggleLikeMovie traemos el param
const toggleLikeMovie = async (req, res, next) => {
  try {
    const { idMovie } = req.params; // El id de la movie que quiero darle like
    // vamos a tener el middleware de auth por lo cual se crea req.user
    const { _id } = req.user; // el id del usuario que esta en el autenticado y se saca del req.user

    // Si dentro del usuario en la raiz moviesFav, si esta incluido el id de la pelicula
    if (req.user.moviesFav.includes(idMovie)) {
      try {
        // se actualiza el user, buscando por el _id.
        await User.findByIdAndUpdate(_id, {
          // se hace un pull para sacar el id de la movie
          $pull: { moviesFav: idMovie },
        });

        try {
          await Movie.findByIdAndUpdate(idMovie, {
            // de la pelicula se saca el id mio de user en todos los likes
            $pull: { likes: _id },
          });

          //si todo esta correcto se lanza un 200
          return res.status(200).json({
            // Se manda la accion disliked
            action: "disliked",
            user: await User.findById(_id).populate("moviesFav"),
            movie: await Movie.findById(idMovie).populate("likes"),
          });
          // Se capturan los errores
        } catch (error) {
          return res.status(404).json({
            error: "no update movie - likes",
            message: error.message,
          });
        }
      } catch (error) {
        return res.status(404).json({
          error: "no update user-  moviesFav",
          message: error.message,
        });
      }
    } else {
      try {
        // En el usuario se mete el id de la movie
        await User.findByIdAndUpdate(_id, {
          $push: { moviesFav: idMovie },
        });

        try {
          // En la pelicula se meten los likes del id del user
          await Movie.findByIdAndUpdate(idMovie, {
            $push: { likes: _id },
          });

          // Si todo esta correcto, se envia la accion like
          return res.status(200).json({
            action: "like",
            user: await User.findById(_id).populate("moviesFav"), // El usuario actualizado para ver que todo esta ok
            movie: await Movie.findById(idMovie).populate("likes"), // La actualizada para ver que todo esta ok
          });
          // Capturamos los errores
        } catch (error) {
          return res.status(404).json({
            error: "no update movie - likes",
            message: error.message,
          });
        }
      } catch (error) {
        return res.status(404).json({
          error: "no update user-  moviesFav",
          message: error.message,
        });
      }
    }
  } catch (error) {
    return res.status(404).json(error.message);
  }
};

module.exports = { toggleLikeMovie };
