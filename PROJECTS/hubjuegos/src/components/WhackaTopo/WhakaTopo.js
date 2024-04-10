import "./WhakaTopo.css";

let holes;
let scoreBoard;
let moles;
let startBtn;
let levels;
let game;
let timeUp = false;
let score = 0;
//variabes globales
//elementos
function initialize() {
  holes = document.querySelectorAll(".hole");
  moles = document.querySelectorAll(".mole");
  scoreBoard = document.querySelector(".score");
  // Seleccionar todos los elementos del DOM.
  startBtn = document.querySelector(".start-btn");
  levels = document.querySelector(".levels");
  game = document.querySelector(".game");
  scoreBoard.textContent = 0;
  startBtn.innerHTML = "En juego..";
  startBtn.disabled = true;
  levels.style.visibility = "hidden";
  moles.forEach((mole) => mole.addEventListener("click", hitTheMole));
  //mole es iterable contiene elementos HTML, el forEach itera cada elemento sobre moles, hitmole manejra el evento click
  //aumentando la puntuacion... addEventoListener gestiona los eventos especificos
}

export function startGame() {
  initialize();
  // Se realiza el llamado al hacer click en el boton de inicio
  let show, hide;
  const difficulty = difficultyLevel();
  if (difficulty === "easy") {
    show = 500;
    hide = 1500;
  } else if (difficulty === "medium") {
    show = 200;
    hide = 1000;
  } else {
    show = 100;
    hide = 800;
    // Velocidad en la que aparece y desaparece en diferentes niveles de dificultad
  }
  peep(show, hide);

  setTimeout(() => {
    timeUp = true;
    startBtn.innerHTML = "Comenzar!";
    startBtn.disabled = false;
    levels.style.visibility = "visible";
  }, 15000); //Duracion del juego
}

function difficultyLevel() {
  const ele = document.getElementsByName("level");
  for (let i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      return ele[i].id;
    }
  }
  // obtener el valor del radio en el boton
}

//ramdomTime calcula el intervalo del tiempo aleatorio
//ramdomHole seleccion del agujero al azar

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
  // Obtener el tiempo aleatorio entre min y max
}

//*randomHole() devuelve un elemento al agujero
//*idx indice entre 0 y 5, un rango de indices validos
function randomHole(holes) {
  let lastHole;
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if (hole === lastHole) {
    console.log("duplicate hole");
    return randomHole(holes);
  }
  lastHole = hole; //el agujero mas reciente se almacena en idx.lasthole
  return hole;
  // Para obtener un agujero aleatorio
}

//Hace la aparicion y desaparición del topo durante un periodo de tiempo
function peep(show, hide) {
  const time = randomTime(show, hide);
  const hole = randomHole(holes);
  hole.classList.add("up"); //Se llama a si mismo si el juego se esta ejecutando correctamente
  setTimeout(() => {
    hole.classList.remove("up");
    if (!timeUp) {
      peep(show, hide);
    }
  }, time);
  //show y hide representan los tiempos en los que el topo debe aparecer y desaparecer aleatorio
}

function hitTheMole(e) {
  if (!e.isTrusted) {
    return;
  }
  score++;
  this.parentNode.classList.remove("up"); // eliminar la clase del nodo padre y afecta el comportamiento del elemento
  scoreBoard.textContent = score; // se ejecuta al ocurrir el evento y al realizar accion del golpe
}
//(e) representa el evento click, si el evento es confiable(isTrusted)
