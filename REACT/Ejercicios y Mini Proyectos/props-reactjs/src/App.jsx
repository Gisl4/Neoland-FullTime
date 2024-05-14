import React from "react";

import { Title } from "../../Components-basics/src/Components/Title/Title";
import { SubTitle } from "../../Components-basics/src/Components/SubTitle/SubTitle";
import { Image } from "../../Components-basics/src/Components/Image/Image";
import { Paragraph } from "../../Components-basics/src/Components/Paragraph/Paragraph";
const App = () => {
  return (
    <div>
      <Title className={"Title"} texto={"Mi blog sobre ReactJS"} />
      <SubTitle className={"SubTitle"} texto={"Props react js"} />
      <Image
        src={
          "https://res.cloudinary.com/dhshflrbz/image/upload/v1714564032/flat_750x_075_f-pad_750x1000_f8f8f8_nl13sq.jpg"
        }
        alt={"GATO"}
        width={"400"}
        height={"300"}
      />
      <Paragraph className={"Paragraph"} texto={"Ejercicio props react js"} />
    </div>
  );
};

export default App;
