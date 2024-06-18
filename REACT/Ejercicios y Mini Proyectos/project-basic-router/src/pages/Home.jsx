import "./Home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="homeContainer">
      <h1 className="homeTitle"> Te damos la bienvenida a la web</h1>
      <p className="homeParagraph">
        En plena Milla de Oro y en un ambiente impregnado del buen vivir
        español, le invitamos a premiar sus sentidos con la mejor coctelería de
        diseño. Una parada consagrada y obligatoria para los amantes de la
        mixología.
        <br></br>
        <br></br>
        En 1933, gracias al Acta Cullen-Harrison, se legalizaba la venta de
        alcohol en EEUU tras la ley seca. 88 años después La Margarita,
        homenajea este gran momento de la mano de los mejores cócteles.
      </p>
      <div className="visitedContainer mt3">
        <span className="visitedPageLink mt-3">Menú: </span>
        <Link to="/cocktails">Margaritas</Link>
      </div>
      <img 
        src="https://res.cloudinary.com/dhshflrbz/image/upload/v1718736729/margaritas_mnhuns.png" 
        alt="Margarita" 
        className="homeImage" 
      />
    </div>
  );
};
