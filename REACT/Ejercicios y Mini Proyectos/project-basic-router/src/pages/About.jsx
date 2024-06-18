import { Title } from "../components";
import "./About.css";

export const About = () => {
  return (
    <div className="aboutContainer">
      <Title className={"titleMain"}>SOBRE LA MARGARITA</Title>

      <h1 className="aboutTitle mt-3"> Sobre la cocteleria y sus comienzos</h1>
      <p className="aboutParagraph">
        Una antiguo bar de citas reconvertido en coctelería al estilo clásico en
        el año 2010 en pleno corazón de Madrid. Nuestro secreto está en un
        cúmulo de pequeños detalles.
        <br></br>
        <br></br>
        <hr />
        <br></br>
        EL HIELO...
        <br></br>
        <br></br>
        En LA MARGARITA entendemos nuestro oficio como un arte de precisión y
        artesanía. Damos muchísima importancia tanto a la calidad de todas
        nuestras materias primas como a la calidad de nuestro hielo.
      </p>
    </div>
  );
};
