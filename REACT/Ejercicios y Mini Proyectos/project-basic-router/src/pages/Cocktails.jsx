import "./Cocktails.css";

import { useState, useEffect } from "react";
import { Figure, Title } from "../components";

const Cocktails = () => {
  // Se inicia un estado para almacenar los datos de las margaritas
  const [cocktails, setCocktails] = useState([]);

  // Realizar la peticion de la API
  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
      .then((response) => response.json())
      .then((data) => setCocktails(data.drinks));
  }, []);

  return (
    <div id="cocktailsPage">
      <div className="titleContainer">
        <Title className={"titleMain"}>Menu</Title>
      </div>
      <div className="figuresContainer">
        {/* Mapo de margaritas para mostrar la lista */}
        {cocktails.map((cocktail, index) => (
          <Figure
            src={cocktail.strDrinkThumb}
            name={cocktail.strDrink}
            id={cocktail.idDrink}
            key={index} // siempre meter key aunque no se utilice
          />
        ))}
      </div>
    </div>
  );
};

export default Cocktails;
