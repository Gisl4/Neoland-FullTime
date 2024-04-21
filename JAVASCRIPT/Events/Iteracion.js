const btn = document.getElementById("btnToClick");

btn.addEventListener("click", (event) => {
  console.log("Evento de clic:", event);
});

const foc = document.getElementsByClassName("focus");

foc[0].addEventListener("focus", (event) => {
  console.log("El evento focus:", event);
});

const value = document.getElementsByClassName("value");

value[0].addEventListener("input", (event) => {
  console.log("El input:", event.target.value);
});
