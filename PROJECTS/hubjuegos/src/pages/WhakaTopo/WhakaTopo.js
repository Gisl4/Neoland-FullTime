import { startGame } from "../../components/WhackaTopo/WhakaTopo";

const template = () => `
<div class="topoFont">
  <h1>Atrápame si puedes <span class="score">0</span></h1>

    <div class="levels">
      <div>
        <input type="radio" name="level" id="easy" checked />
        <label for="easy">Fácil</label><br />
      </div>
      <div>
        <input type="radio" name="level" id="medium" />
        <label for="medium">Medio</label><br />
      </div>
      <div>
        <input type="radio" name="level" id="hard" />
        <label for="hard">Difícil</label><br />
      </div>
    </div>

    <div class="controls">
      <button class="start-btn" id="darle">Comenzar!</button>
    </div>

    <div class="game">
      <div class="hole hole1">
        <div class="mole"></div>
      </div>
      <div class="hole hole2">
        <div class="mole"></div>
      </div>
      <div class="hole hole3">
        <div class="mole"></div>
      </div>
      <div class="hole hole4">
        <div class="mole"></div>
      </div>
      <div class="hole hole5">
        <div class="mole"></div>
      </div>
      <div class="hole hole6">
        <div class="mole"></div>
      </div>
    </div>
  </div>
  `;

//! ------------------------------------------------------------------------------
//? ---------------------FUNCION QUE SE EXPORTA QUE PINTA LA PAGINA--------------
//! ------------------------------------------------------------------------------

export const printWhakaTopo = () => {
  document.querySelector("main").innerHTML = template();
  addListeners();
  //PrintTemplateSpinner();
  //PrintSpinner();
  //dataService();
};

const addListeners = () => {
  const inputStart = document.getElementById("darle");
  inputStart.addEventListener("click", () => {
    startGame();
  });
};
