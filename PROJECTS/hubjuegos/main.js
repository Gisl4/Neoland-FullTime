import { initTemplate } from "./src/utils/InitTemplate";
import { initControler } from "./src/utils/Route";

import "./style.css";

initTemplate();

//! --------> lo ponemos sin parametro para que salte al caso de switch de undefined para evaluar el user

initControler();
