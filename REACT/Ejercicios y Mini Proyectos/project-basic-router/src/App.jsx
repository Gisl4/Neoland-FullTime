import "./App.css";
import { Footer, Header, Title } from "./components";
import { Cocktail, Home, About } from "./pages";
import Cocktails from "./pages/Cocktails";
import AppRoutes from "./routes/Routes";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header>
        <h3 style={{ color: "grey", fontSize: "20px" }}>🌼LA MARGARITA🌼</h3>
      </Header>
      <main>
        <Outlet />
      </main>
      <Footer>
        <Title>copyright © todos los derechos reservados Gisell Lopez</Title>
      </Footer>
    </>
  );
}

export default App;
