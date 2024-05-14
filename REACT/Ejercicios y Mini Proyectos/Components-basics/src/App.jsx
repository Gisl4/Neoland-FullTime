import React from "react";
import { Title } from "./Components";
import { SubTitle } from "./Components";
import { Image } from "./Components";
import { Paragraph } from "./Components";

const App = () => {
  return (
    <>
      <div className="App">
        <Title className={"Title"} texto={"Welcome to Components ReactJS"} />
        <SubTitle
          className={"SubTitle"}
          texto={"This is a example components with ReactJS"}
        />
        <Image
          src={
            "https://res.cloudinary.com/dhshflrbz/image/upload/v1714564032/flat_750x_075_f-pad_750x1000_f8f8f8_nl13sq.jpg"
          }
          alt={"Gato Samurai"}
        />
        <Paragraph
          className={"Paragraph"}
          texto={"Ejercicio Components basics"}
        />
      </div>
    </>
  );
};

export default App;
