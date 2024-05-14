import "./App.css";
import { Header, Languages, Movies, Read } from "./Components";
import SongsHeard from "./Components/SongsHeard";
import Sports from "./Components/Sports";

function App() {
  return (
    <>
      <div className="mainContainer">
        <Header />
        <main>
          <div className="readContainer">
            <Read />
          </div>
          <div className="sportsContainer">
            <Sports />
          </div>
          <div className="movieContainer">
            <Movies />
          </div>
          <div className="languagesContainer">
            <Languages />
          </div>
          <div className="songsContainerApp">
            <SongsHeard />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
