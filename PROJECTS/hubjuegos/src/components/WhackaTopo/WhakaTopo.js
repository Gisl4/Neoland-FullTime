import "./WhakaTopo.css";

let holes;
let scoreBoard;
let moles;
let startBtn;
let levels;
let game;
let timeUp = false;
let score = 0;

function initialize() {
  holes = document.querySelectorAll(".hole");
  moles = document.querySelectorAll(".mole");
  scoreBoard = document.querySelector(".score"); // Seleccionar todos los elementos del DOM.
  startBtn = document.querySelector(".start-btn");
  levels = document.querySelector(".levels");
  game = document.querySelector(".game");
  scoreBoard.textContent = 0;
  startBtn.innerHTML = "En juego..";
  startBtn.disabled = true;
  levels.style.visibility = "hidden";
  moles.forEach((mole) => mole.addEventListener("click", hitTheMole));
}

export function startGame() {
  initialize();
  // Se realiza un llamado al hacer click en el boton de inicio
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
  }, 15000);
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

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
  // Obtener el tiempo aleatorio entre min y max
}

function randomHole(holes) {
  let lastHole;
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if (hole === lastHole) {
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
  // Para obtener un agujero aleatorio
}

function peep(show, hide) {
  const time = randomTime(show, hide);
  const hole = randomHole(holes);
  hole.classList.add("up");
  setTimeout(() => {
    hole.classList.remove("up");
    if (!timeUp) {
      peep(show, hide);
    }
  }, time);
  // Hacer que el topo aparezca y desaparezca
}

function hitTheMole(e) {
  if (!e.isTrusted) {
    return;
  }
  score++;
  this.parentNode.classList.remove("up");
  scoreBoard.textContent = score;
}
