const User = require("../models/User.model");

const changeGender = async (req, res, next) => {
  try {
    const { idUserChanged } = req.params;
    const { gender } = req?.query;
    // los query no son obligatorios no hacen que rompa la ruta, es decir que no encuentre
    // los params SON OBLIGATORIOS, si no se pone la ruta no se encuentra
    /**
     * En los params ponemos info exencial, en los query ponemos info no esencial
     */

    await User.findByIdAndUpdate(idUserChanged, {
      gender: gender ? gender : "otros",
    }); //si esta definido, si no

    // ---------------------> test en runtime------------------

    const updateUser = await User.findById(idUserChanged);
    //si  definido
    if (gender) {
      // si es igual igual que
      if (updateUser.gender == gender) {
        return res.status(200).json({ updateTest: true }); //se lanza un 200 donde el objeto es true
        //si esto no coincide
      } else {
        return res.status(404).json({ updateTest: false }); //se lanza un 404 donde el objeto es false
      }
      //en otro caso
    } else {
      // si es igual a otros
      if (updateUser.gender == "otros") {
        return res.status(200).json({ updateTest: true }); //se lanza un 200 donde el objeto es true
        //si esto no coincide
      } else {
        return res.status(404).json({ updateTest: false }); //se lanza un 404 donde el objeto es false
      }
    }
  } catch (error) {
    return next(error);
  }
};

const changeAdmin = async (req, res, next) => {
  try {
    // el nombre se saca de la ruta y se hace destructurin de req.params
    const { idUser } = req.params;
    try {
      await User.findByIdAndUpdate(idUser, { rol: "admin" }); //cambiar el objeto rolla llamado admin

      // test --------------------runtime ---------------
      const updateUser = await User.findById(idUser); //encontrar en el modelo por id al usuario
      //si es igual igual que
      if (updateUser.rol == "admin") {
        return res.status(200).json({ updateTest: true }); //se lanza un 200 donde el objeto es true
        //si esto no coincide
      } else {
        return res.status(404).json({ updateTest: false }); //se lanza un 404 donde el objeto es false
      }
    } catch (error) {
      return res.status(404).json(error.message);
    }
  } catch (error) {
    return next(error);
  }
};

module.exports = { changeGender, changeAdmin };
