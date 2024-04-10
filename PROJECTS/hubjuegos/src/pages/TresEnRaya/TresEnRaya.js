import "./TresEnRaya.css";

const template = () => `
<div class="raya">  
<div class="turn-container">
      <h3>Turno</h3>
      <div class="turn-box align">X</div>
      <div class="turn-box align">O</div>
      <div class="bg"></div>
    </div>
    <div class="main-grid">
      <div class="box align">0</div>
      <div class="box align">1</div>
      <div class="box align">2</div>
      <div class="box align">3</div>
      <div class="box align">4</div>
      <div class="box align">5</div>
      <div class="box align">6</div>
      <div class="box align">7</div>
      <div class="box align">8</div>
    </div>
    <h2 id="results"></h2>
    <button id="play-again">Jugar de Nuevo</button>
    </div>
`;

export const PrintTresEnRaya = () => {
  document.querySelector("main").innerHTML = template();
  //   PrintTemplateSpinner();
  //   PrintSpinner();
  //   dataService();
};
