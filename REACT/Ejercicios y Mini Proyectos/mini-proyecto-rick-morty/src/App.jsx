import React from "react";
import "./App.css";

const App = () => {
  const [characterList, setCharacterList] = React.useState([]);
  //* se carga la data de la API de Ricky
  React.useEffect(() => {
    (async () => {
      let data = await fetch("https://rickandmortyapi.com/api/character/").then(
        (res) => res.json()
      );

      setCharacterList(data.results);
    })();
  }, []);
  //* se crea una constante con un filtro para sacar los personajes que estan vivos
  const alive = characterList.filter(
    (character) => character.status === "Alive"
  );
  //* aquí se obtiene la lista de los personajes con su nombre, estado, origen y su imagen
  return (
    <>
      {alive.map((character) => (
        <div key={character.id}>
          {/* <h2>id: {character.id}</h2>  */}
          <h2>name: {character.name}</h2>
          <h2>status: {character.status}</h2>
          <h2>origin: {character.origin.name}</h2>
          <img src={character.image} />
        </div>
      ))}
    </>
  );
};

export default App;
