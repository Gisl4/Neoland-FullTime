import { getUser } from "../global/state/globalState";
import {
  Login,
  PrintPokemonPage,
  printTemplateDashboard,
  printWhakaTopo,
  PrintTresEnRaya,
} from "../pages";

export const initControler = (pagesRender) => {
  switch (pagesRender) {
    case undefined:
      localStorage.getItem(getUser().name) ? printTemplateDashboard() : Login();
      break;
    case "Pokemon":
      PrintPokemonPage();
      break;
    case "Dashboard":
      printTemplateDashboard();
      break;
    case "Topo":
      printWhakaTopo();
      break;
    case "Login":
      Login();
      break;
    case "Memory":
      "PrintMemoryPage() ------> en caso de que lo haya";
      break;
    case "TresEnRaya":
      PrintTresEnRaya();
      break;
  }
};
