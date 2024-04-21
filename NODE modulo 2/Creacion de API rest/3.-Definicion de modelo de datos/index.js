const express = require("express");
const dotenv = require("dotenv");
const { connect } = require("./src/utils/db");
//! ----------------------------------------------------------
//?------------------ creamos el servidor web------------------
//! ----------------------------------------------------------
const app = express();

// vamos a configurar dotenv para poder utilizar las variables d entorno del .env
dotenv.config();
//! ----------------------------------------------------------
//? ------------conectamos con la base de datos---------------
//! ----------------------------------------------------------
connect();

//! -----------------VARIABLES CONSTANTES --> PORT

const PORT = process.env.PORT;

//! ----------------------------------------------------------
//?- ------------------- CORS -------------------------------
//! ----------------------------------------------------------
//  Las cors dan acceso a la api

const cors = require("cors");

app.use(cors());

//! --------------------------------------------------------------
//? ------------------ limitaciones de cantidad en el back end-----
//! ---------------------------------------------------------------
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ limit: "5mb", extended: false }));

// El extended en "true" hace una forma diferente de enviar los datos, que nos permite parsear los objetos de una forma mas optimizada
// El extended en "false" hace el envio mas rapido y genera menos problemas (querystring es mas rapido, qs mas lento, permite parseos de datos mas optimizados).
//! ----------------- ----------------------------------------
//? -----------------ROUTAS ---------------------------------
//! ----------------- ----------------------------------------

//! ----------------------------------------------------------
//? ----------ERRORES GENERALES Y RUTA NO ENCONTRADA----------
//! ----------------------------------------------------------

app.use("*", (req, res, next) => {
  const error = new Error("Route not found");
  error.status = 404;
  return next(error);
});

// ----- en este caso como gestionamos un error la callback lleva de parametros error, req, res
// cuando es un controlador normal llevaria siempre como para parametros REQ, RES, NEXT ---> en este orden siemppre
app.use((error, req, res) => {
  return res
    .status(error.status || 500)
    .json(error.message || "unexpected error");
});

//! ------------------------------------------------------------------
//? ------------ ESCUCHAMOS EN EL PUERTO EL SERVIDOR WEB--------------
//! ------------------------------------------------------------------
// "listening"-poner en que puerto esta habilitado para que se escuche por parte del exterior

/// app-listen(PORT, () =>
/// console.log(`Server listening on port 👌🔍 http://localhost:${PORT}`));

app.disable("x-powered-by");
app.listen(PORT, () =>
  console.log(`Server listening on port 👌🔍 http://localhost:${PORT}`)
);
