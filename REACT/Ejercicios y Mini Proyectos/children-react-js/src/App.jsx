import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Image } from "./components/Image/Image";
import { Main } from "./components/Main/Main";
import Paragraph from "./components/Paragraph/Paragraph";
import SubTitle from "./components/SubTitle/SubTitle";
import Title from "./components/Title/Title";

const App = () => {
  return (
    <div id="cuerpo">
      <Header>
        <Title text={"Gatos de la suerte"} />
      </Header>
      <Main>
        <SubTitle text={"Maneki-neko"} />
        <Image
          src="https://res.cloudinary.com/dhshflrbz/image/upload/v1715512598/manekineko01_papom7.jpg"
          alt="Imagen Maneki neko"
          width="250"
          height="300"
        />
        <Paragraph
          id="Main"
          text={
            "Se dice que un maneki-neko (gato que invita a entrar) que levanta su pata derecha trae riqueza, mientras que uno que levanta su pata izquierda trae personas y felicidad, y los restaurantes japoneses adornan sus locales con los dos con la esperanza de que traigan prosperidad."
          }
        />
      </Main>
      <Footer>
        <Paragraph text={"© 2024 Gisell López. All rights reserved."} />
      </Footer>
    </div>
  );
};

export default App;
