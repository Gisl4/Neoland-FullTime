import { initControler } from "../../utils/Route";
import { getInfo } from "../../utils/dataPokemon";
import "./Dashboard.css";

const template = () => `
  <div id="containerDashboard">
    <ul>
      <li>
        <figure id="navigatePokemon">
          <img
            src="https://res.cloudinary.com/dhshflrbz/image/upload/v1712435128/juegos/pokemon-go-campeonato-mundial-2022_hilsp9.jpg"
            alt="go to page pokemon"
          />
          <h2>POKEMON</h2>
        </figure>
      </li>
      <li>
        <figure id="navigateWhakaTopo">
          <img
            src="https://res.cloudinary.com/dhshflrbz/image/upload/v1713198110/1835817_v6x3rs.png"
            alt=" go to wacka topo game"
          />
          <h2>WACKA TOPO</h2>
        </figure>
      </li>
      <li>
        <figure>
          <img
            src="https://res.cloudinary.com/dhshflrbz/image/upload/v1712434759/juegos/61CiZEmEe4L_yrht58.png"
            alt="go to memory game"
          />
          <h2>MEMORY GAME</h2>
        </figure>
      </li>
      <li>
        <figure>
          <img
            src="https://res.cloudinary.com/dhshflrbz/image/upload/v1712433591/juegos/unnamed_sp0sqe.png"
            alt="go to topo game"
          />
          <h2>QUIZ</h2>
        </figure>
      </li>
      <li>
        <figure id="navigateTresEnRaya">
          <img
            src="https://res.cloudinary.com/dhshflrbz/image/upload/v1712433708/juegos/istockphoto-1364153524-612x612_cm8nmn.jpg"
            alt="go to Tres en Raya game"
          />
          <h2>TRES EN RAYA</h2>
        </figure>
      </li>
      <li>
        <li>
        <figure id="navigateAhorcado">
          <img
            src="https://res.cloudinary.com/dhshflrbz/image/upload/v1712848425/Juego_Ahorcado/mu%C3%B1eco_b4uuur.png"
            alt="go to page Ahorcado"
          />
          <h2>AHORCADO</h2>
        </figure>
      </li>
    </ul>
  </div>
`;

const addEventListeners = () => {
  const navigatePokemon = document.getElementById("navigatePokemon");
  navigatePokemon.addEventListener("click", () => {
    initControler("Pokemon");
  });
  const navigateWhakaTopo = document.getElementById("navigateWhakaTopo");
  navigateWhakaTopo.addEventListener("click", () => {
    initControler("Topo");
  });
  const navigateTresEnRaya = document.getElementById("navigateTresEnRaya");
  navigateTresEnRaya.addEventListener("click", () => {
    initControler("TresEnRaya");
  });
  const navigateAhorcado = document.getElementById("navigateAhorcado");
  navigateAhorcado.addEventListener("click", () => {
    initControler("Ahorcado");
  });
};

export const printTemplateDashboard = () => {
  document.querySelector("main").innerHTML = template();

  document.querySelector("nav").style.display = "flex";

  addEventListeners();
};

getInfo();
