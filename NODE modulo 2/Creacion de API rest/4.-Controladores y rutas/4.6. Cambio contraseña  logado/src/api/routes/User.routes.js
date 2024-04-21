const express = require("express");
const UserRoutes = express.Router();

const {
  registerLargo,
  registerUtil,
  registerWithRedirect,
  sendMailRedirect,
  resendCode,
  checkNewUser,
  login,
  autoLogin,
  changePassword,
  sendPassword,
  modifyPassword,
} = require("../controllers/User.controllers");
const { upload } = require("../../middleware/files.middleware");
const { isAuth, isAuthAdmin } = require("../../middleware/auth.middleware");

//?--------------------------------RUTAS SIN REDIRECT----------------------

//*siempre que se tenga algo en medio de las palabras entre comidas como es el ("image y [isAuth]") se necesita el next solo para que pueda pasar al siguiente

UserRoutes.post("/registerLargo", upload.single("image"), registerLargo);
UserRoutes.post("/registerUtil", upload.single("image"), registerUtil);
UserRoutes.post("/resend", resendCode);
UserRoutes.post("/check", checkNewUser);
UserRoutes.post("/login", login);
UserRoutes.post("/login/autologin", autoLogin);
UserRoutes.patch("/forgotpassword", changePassword);
UserRoutes.patch("/changepassword", [isAuth], modifyPassword); // [isAuth] este middleware se importa de arriba
// si no se tiene el [isAuth] no se tiene una req.user que se crea en el middleware

//?--------------------------------RUTAS CON REDIRECT----------------------

UserRoutes.post("/register", upload.single("image"), registerWithRedirect);

//!---------------- REDIRECT-------------------------------
UserRoutes.post("/register/sendMail/:id", sendMailRedirect);
UserRoutes.patch("/sendPassword/:id", sendPassword);
module.exports = UserRoutes;
