import {
  PrintTemplateSpinner,
  CardsPokemons,
  PrintButton,
  PrintSpinner,
} from "../../components";
import { getData } from "../../global/state/globalState";
import { filterPokemon } from "../../utils/dataPokemon";
import { Paginacion } from "../../utils/paginacion";
import "./Pokemon.css";

const template = () => `
  <div id="pokemon">
    <div id="containerFilter">
      <div id="spinnerButtonFilter"></div>
      <div id="filterButton"></div>
      <input
        type="text"
        id="inputPokemon"
        placeholder="Busca tu pokemon favorito"
      />
    </div>
    <div id="paginacion"></div>
    <div id="spinner"></div>
    <div id="galleryPokemon"></div>
  </div>
`;

const dataService = async () => {
  const getDataPokemon = getData("Pokemon");

  const { pokemonData, type } = getDataPokemon;

  document.getElementById("spinner").innerHTML = "";
  PrintButton(type);
  document.getElementById("spinnerButtonFilter").innerHTML = "";

  addListeners();
  Paginacion(pokemonData, 25);
};

//! ------------------------------------------------------------------------------
//? ---------------------------EVENTOS PARA EL INPUT-----------------------------------
//! ------------------------------------------------------------------------------
const addListeners = () => {
  const inputPokemon = document.getElementById("inputPokemon");
  inputPokemon.addEventListener("input", (e) => {
    filterPokemon(e.target.value, "name");
  });
};

//! ------------------------------------------------------------------------------
//? ---------------------FUNCION QUE SE EXPORTA QUE PINTA LA PAGINA--------------
//! ------------------------------------------------------------------------------
export const PrintPokemonPage = () => {
  document.querySelector("main").innerHTML = template();
  PrintTemplateSpinner();
  PrintSpinner();
  dataService();
};
