// main.js

import { initTemplate } from "./src/utils/InitTemplate";
import { initControler } from "./src/utils/Route";

import "./style.css";

//! -----> renderizamos las etiquetas de la estructura inicial
/** creamos el template inicial con la estructura basica como es el footer
 * main y el header y le daremos contenido con su componente correspondiente
 * SEGUIR EXPLICACION EN LA FUNCION
 */

initTemplate();

//! --------> lo ponemos sin parametro para que salte al caso de switch de undefined para evaluar el user
/** no le metemos parametro en el initControler para que pueda asi
 * evaluar si tenemos usuario o no en el contexto de estados de nuestra app
 */

initControler();
