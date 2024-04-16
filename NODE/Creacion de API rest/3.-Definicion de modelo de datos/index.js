const express = require("express");
const dotenv = require("dotenv");
const { connect } = require("./src/utils/db");

//dotenv = permite crear un archivo dentro de nuestro código y agregar los datos que queremos
//ocultar del programa para asignarles una variable para asi usarlas en el programa.
//! ----------------------------------------------------------
//?#------------------ creamos el servidor web------------------
//! ----------------------------------------------------------
const app = express();
//express = genera el freenware para el servidor web

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
//configuracion con la libreria para traer todos los metodos de las cors

const cors = require("cors");

app.use(cors());

//! ----------------- ----------------------------------------
//? -----------------ROUTAS ---------------------------------
//! ----------------- ----------------------------------------
//models=> controllers=>routes=>index   <=endpoint |middleware|
// Los modelos consumen los controladores, los controladores consumen los routes y las rutas consumen el index

//! --------------------------------------------------------------
//? ------------------ limitaciones de cantidad en el back end-----
//! ---------------------------------------------------------------
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ limit: "5mb", extended: false }));

//extended=diferente forma de enviar los datos... parsearlos de una forma mas optimizada
//! ----------------------------------------------------------
//? -----------------  ERRORES GENERALES Y RUTA NO ENCONTRADA
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
//? ------------------ ESCUCHAMOS EN EL PUERTO EL SERVIDOR WEB--------
//! ------------------------------------------------------------------
// listen = poner en que puerto esta habilitado para que el servidor se este escuchando ya sea por el exterior o localhost
app.disable("x-powered-by");
app.listen(PORT, () =>
  console.log(`Server listening on port 👌🔍 http://localhost:${PORT}`)
);

//?_______________________________________________________________________________________________________________________________________
//! Cors es una libreria que sirve para configurar el acceso de la API
//! json.parse= un string lo convertimos a un objeto que sea legible por parte de js.
//! querystring(extended: false) tiende a ser más rápido ---- qs(extended: true) es más potente y flexible.
//! Con la librería mogoose nos conectamos a mongodb
