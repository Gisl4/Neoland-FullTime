//*Los mensajes estan enn todos los modelos
const Character = require("../models/Character.model");
const Chat = require("../models/Chat.model");
const Menssage = require("../models/Message.model");
const Movie = require("../models/Movie.model");
const User = require("../models/User.model");

/**+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * ++++++++++++++++++++++++++-------C R U D--------+++++++++++++++++++++++++++++++++++
 * +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 */

//? -------------------------------POST create --------------------------

// por el body se envia el contenido de mensaje, tipo
//cuando hay un middleware de auntentificacion crea un req.user

const createMessage = async (req, res, next) => {
  try {
    const { type, content } = req.body; // tipo y contenido vienen de la req.body---> Esta info se envia por las query
    const { idRecipient } = req.params; // -----> id de a quien quiero hacer el comentario
    /**
     * idRecipient puede ser el id de : movie, character, user
     */
    //Buscar en los tres modelos a cual corresponde que no sea  null
    const findUser = await User.findById(idRecipient); //este es el usuario por el cual sabes que vamos a iniciar el chat
    const findCharacter = await Character.findById(idRecipient);
    const findMovie = await Movie.findById(idRecipient);
    /**
     * cuando no lo encuentre devuelve un null y el que encuentre va a devolver el objeto encontrado
     *
     */
    //si lo encuentra
    if (findUser) {
      const newMessage = new Menssage(req.body);
      const savedMessage = await newMessage.save();

      // si es privado
      if (type == "private") {
        try {
          //Comprobar buscando el usuario 1
          const chatExistOne = await Chat.findOne({
            userOne: req.user._id, //El usuario que envia el token este en el usuario 1
            userTwo: findUser._id, //El usuario que envia por el param este por el usuario 2
          });
          //Comprobar buscando el usuario 2
          const chatExistTwo = await Chat.findOne({
            userOne: findUser._id,
            userTwo: req.user._id,
          });

          /**
           * si no tengo ningun chat abierto con el otro usuario ambas constantes
           * serán null
           *
           * Si tengo abierto un chat con ese usuario una de las dos constantes tendra valor y la
           * otra sera null
           */
          if (chatExistOne != null || chatExistTwo != null) {
            //*Si los dos son null entran por el else

            // *---------------------------- CHAT EXISTE: TENEMOS QUE ACTUALIZARLO -------------------------------------

            ///  Si existe un chat y entonces lo actualizamos conm el nuevo mensaje

            if (chatExistOne) {
              try {
                await chatExistOne.updateOne({
                  /** podemos hacer un push */
                  $push: { messages: newMessage._id },
                });
                try {
                  //Actualizar el mensaje uno
                  await User.findByIdAndUpdate(req.user._id, {
                    //*se gestionan arrays... push añade algo al final del array
                    $push: {
                      postedMessages: newMessage._id, //mete en el array el id unicamente
                    },
                  });
                  return res.status(200).json({
                    chat: await Chat.findById(chatExistOne._id).populate(
                      // Populate = permite ver las claves son las que estan con un id, referenciado a un modelo y en ese modelo busque su info para darmela
                      "messages  userOne  userTwo"
                    ), //Buscar el chat actualizado y devolverle un mensaje
                    comment: newMessage,
                  });
                } catch (error) {
                  return res.status(404).json({
                    error:
                      "no hemos actualizado el user en la clave postedMenssages",
                    idMessage: newMessage._id, // le devolvemos el mensaje con la copia del comentario
                  });
                }
              } catch (error) {
                await Menssage.findByIdAndDelete(savedMessage._id); //utilizamos la query para eliminar lo que paunta al mensaje
                return res
                  .status(404)
                  .json(
                    "error en actualizar el chat existente, elimino el comentario"
                  );
              }
              //**Se repiten los mismo pasos que el chat uno**
            } else {
              try {
                await chatExistTwo.updateOne({
                  /** podemos hacer un push */
                  $push: { messages: newMessage._id },
                });

                try {
                  //Actualizar el mensaje dos
                  await User.findByIdAndUpdate(req.user._id, {
                    //*se gestionan arrays... push añade algo al final del array
                    $push: {
                      postedMessages: newMessage._id, //mete en el array el id unicamente
                    },
                  });
                  return res.status(200).json({
                    chat: await Chat.findById(chatExistTwo._id).populate(
                      // Populate = permite ver las claves son las que estan con un id, referenciado a un modelo y en ese modelo busque su info para darmela
                      "messages  userOne  userTwo"
                    ),
                    //Buscar el chat actualizado y devolverle un mensaje
                    comment: newMessage,
                  });
                } catch (error) {
                  return res.status(404).json({
                    error:
                      "no hemos actualizado el user en la clave postedMenssages",
                    idMessage: newMessage._id, // le devolvemos el mensaje con la copia del comentario
                  });
                }
              } catch (error) {
                try {
                  await Menssage.findByIdAndDelete(savedMessage._id); //utilizamos la query para eliminar lo que paunta al mensaje
                  return res
                    .status(404)
                    .json(
                      "error en actualizar el chat existente, elimino el comentario"
                    );
                } catch (error) {
                  return res
                    .status(404)
                    .json(
                      "no he borrado el coment  ni tampoco he actualizdo el chat existente"
                    );
                }
              }
            }
          } else {
            //* ---------------------------- CREAR CHAT PORQUE NO EXISTE NINGUNO ---------------------------------------

            //populate cosas metidas en el chat para decirle las claves que se tienen para que mongoose busque en su modelo correspondiente que significa ese id

            /// crear un chat con el comentario que hemos creado

            const newChat = new Chat({
              userOne: req.user._id, //Usuario uno es el que inicia siempre el chat
              userTwo: findUser._id, //Aqui es donde meto el find user... es el que he encontrado con el id que recibi por el param
              messages: [savedMessage._id], //array con mensaje creado
            });

            try {
              await newChat.save(); //Actualizo con el chat nuevo

              try {
                //primer usuario
                await User.findByIdAndUpdate(req.user._id, {
                  $push: {
                    postedMessages: newMessage._id,
                    chats: newChat._id,
                  },
                });

                try {
                  await User.findByIdAndUpdate(idRecipient, {
                    $push: {
                      chats: newChat._id, //Se mete lo del primero sin el postedMessages porque no lo ha posteado
                    },
                  });

                  return res.status(200).json({
                    //Await = cualquier valor que haya que esperar
                    chat: await Chat.findById(newChat._id).populate(
                      "messages  userOne  userTwo"
                    ),
                    comment: newMessage,
                  });
                } catch (error) {
                  return res.status(404).json({
                    error:
                      "no hemos actualizado el user que recibe el comentario la clave chat",
                    idMessage: newMessage._id,
                  });
                }
              } catch (error) {
                return res.status(404).json({
                  error:
                    "no hemos actualizado el user el dueño del mensaje en la clave postedMenssages y en la clave chats",
                  idMessage: newMessage._id,
                });
              }
            } catch (error) {
              // borramos el mensaje porque no nos ha enviado bien el tipo
              try {
                await Menssage.findByIdAndDelete(savedMessage._id);
                return res.status(404).json(error.message);
              } catch (error) {
                return res.status(404).json({
                  // Se envia el id del mensaje para que se borre
                  error:
                    "no se ha creado el chat pero no se ha borrado el comentario",

                  idMensageNoBorrado: savedMessage._id, // se coloca aca para que el forntal pueda eliminarlo
                });
              }
            }
          }
        } catch (error) {
          return res.status(404).json(error.message);
        }
        // si es publico
      } else if (type == "public") {
        try {
          await User.findByIdAndUpdate(req.user._id, {
            $push: {
              postedMessages: newMessage._id,
            },
          });

          try {
            await User.findByIdAndUpdate(idRecipient, {
              $push: {
                commentsPublicByOther: newMessage._id,
              },
            });

            return res.status(200).json({
              userOwner: await User.findById(req.user._id).populate([
                {
                  path: "chats",
                  model: Chat,
                  populate: "messages userOne userTwo",
                },
              ]),
              recipient: await User.findById(idRecipient),
              comentario: newMessage._id,
            });
          } catch (error) {
            return res.status(404).json({
              error:
                "error catch update quien recibe el comentario  -  commentsPublicByOther",
              message: error.message,
            });
          }
        } catch (error) {
          return res.status(404).json({
            error:
              "error catch update quien hace el comentario  -  postedMessages",
            message: error.message,
          });
        }
      } else {
        return res.status(404).json("no has puesto el tipo correctamente");
      }
    } else if (findCharacter) {
      if (type == "private") {
        return res.status(404).json("no puedes hacer comentarios privados");
      } else {
        try {
          const newMessage = new Menssage(req.body);
          const savedMessage = await newMessage.save();

          try {
            await User.findByIdAndUpdate(req.user._id, {
              $push: {
                postedMessages: newMessage._id,
              },
            });

            try {
              await Character.findByIdAndUpdate(findCharacter._id, {
                $push: { comments: newMessage._id },
              });

              return res.status(200).json({
                userOwner: await User.findById(req.user._id).populate(
                  "postedMessages"
                ),
                character: await Character.findById(findCharacter._id).populate(
                  "comments"
                ),
              });
            } catch (error) {
              return res.status(404).json({
                error: "error catch update character - comments",
                message: error.message,
              });
            }
          } catch (error) {
            return res.status(404).json({
              error:
                "error catch update userOwner del comentario  -  postedMessages",
              message: error.message,
            });
          }
        } catch (error) {
          return res.status(404).json({
            error: "error catch save message",
            message: error.message,
          });
        }
      }
    } else if (findMovie) {
      if (type == "private") {
        return res.status(404).json("no puedes hacer comentarios privados");
      } else {
        try {
          const newMessage = new Menssage(req.body);
          const savedMessage = await newMessage.save();

          try {
            await User.findByIdAndUpdate(req.user._id, {
              $push: {
                postedMessages: newMessage._id,
              },
            });

            try {
              await Movie.findByIdAndUpdate(findMovie._id, {
                $push: { comments: newMessage._id },
              });

              return res.status(200).json({
                userOwner: await User.findById(req.user._id).populate(
                  "postedMessages"
                ),
                Movie: await Movie.findById(findMovie._id).populate("comments"),
              });
            } catch (error) {
              return res.status(404).json({
                error: "error catch update Movie - comments",
                message: error.message,
              });
            }
          } catch (error) {
            return res.status(404).json({
              error:
                "error catch update userOwner del comentario  -  postedMessages",
              message: error.message,
            });
          }
        } catch (error) {
          return res.status(404).json({
            error: "error catch save message",
            message: error.message,
          });
        }
      }
    }
  } catch (error) {
    return next(error);
  }
};

//Se crea objeto para exportarlo a rutas
module.exports = { createMessage };
