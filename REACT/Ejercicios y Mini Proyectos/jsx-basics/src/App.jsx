import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Parrafo } from "./Components";

const App = () => {
  const [count, setCount] = useState(0);

  const actualizarEstado = () => {
    //*Incremeta value a 1 para despues aplicar el operador modulo % con 25 para asegurar que siempre se este
    //*   en el rango de 0 a 24... se incrementa un 1 y luego se hace cada ciclo al llegar al 25
    setCount((value) => (value + 1) % 25);
    console.log("estado debajo de la actualizacion", count);
  };

  //!Ejercicio 2
  const print = () => {
    if (count > 5 && count < 13) {
      return <Parrafo texto={"Buenos dias"} />;
    } else if (count > 12 && count < 20) {
      return <Parrafo texto={"Buenas tardes"} />;
    } else {
      return <Parrafo texto={"Buenas noches"} />;
    }
  };

  //!Ejercicio 3
  const animales = ["Elefante", "Puma", "Lobo", "Oso", "Toro", "Aguila"];

  //!Ejercicio 4
  const users = [
    {
      id: "82376408K",
      gender: "Mujer",
      age: 67,
      country: "Francia",
      favoriteAnimal: "Lobo",
    },
    {
      id: "56832187J",
      gender: "Hombre",
      age: 18,
      country: "Polonia",
      favoriteAnimal: "Aguila",
    },
    {
      id: "38448511E",
      gender: "Hombre",
      age: 45,
      country: "Japon",
      favoriteAnimal: "Puma",
    },
    {
      id: "94572100V",
      gender: "Mujer",
      age: 35,
      country: "Islandia",
      favoriteAnimal: "Oso",
    },
  ];

  //!Ejercicio 5
  //*Definir el valor del booleano
  const [estimate, setEstimate] = useState(false);
  //*Con esta funcion se cambia la estimacion del valor de false a true y true a false
  const toggleEstimate = () => {
    setEstimate(!estimate);
  };

  return (
    <>
      <div>
        {console.log("estado en el template ", count)}
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {print()}

      <h3>Animales:</h3>
      {animales.map((animales, index) => (
        <Parrafo key={index} texto={animales} />
      ))}

      <h3>Users:</h3>
      {users.map((user, index) => (
        <div key={index}>
          <p>Id: {user.id}</p>
          <p>Gender: {user.gender}</p>
          <p>Age: {user.age}</p>
          <p>Country: {user.country}</p>
          <p>Animal: {user.favoriteAnimal}</p>
        </div>
      ))}

      <h3>Valor:</h3>
      <div className="card">
        <button onClick={toggleEstimate}>Boton Valor:</button>
        {estimate ? (
          <Parrafo texto={"El valor es true"} />
        ) : (
          <Parrafo texto={"El valor es false"} />
        )}
      </div>

      <h1>jsx-basics</h1>
      <div className="card">
        <button onClick={() => actualizarEstado()}>
          El contador es {count}
        </button>
      </div>
    </>
  );
};

export default App;
