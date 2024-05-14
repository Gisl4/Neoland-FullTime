import "./App.css";
import { Footer, Header, Paragraph, Title } from "./Components";
import { Characters } from "./pages";
import { useEffect, useState } from "react";

function App() {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    (async () => {
      let data = await fetch(`https://rickandmortyapi.com/api/character/`).then(
        (res) => res.json()
      );

      setCharacterList(data.results);
    })();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Title
          className={"titleCharacters"}
          text={" Mini proyecto 2 - advanced"}
        />
        <Paragraph className={"paragraphCharacter"} text="Personajes Vivos" />
        <Characters data={characterList} />
      </main>
      <Footer />
    </>
  );
}

export default App;
