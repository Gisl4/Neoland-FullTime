/* eslint-disable react/prop-types */
import "./ListadoDetails.css";

export const ListadoDetails = ({ cocktail }) => {
  return (
    <div className="listadoDetailsContainer">
      <h2 className="cocktailTitle">
        Nombre del cocktail: {cocktail.strDrink}
      </h2>
      <div className="cocktailDetails">
        <img
          className="cocktailImage"
          src={cocktail.strDrinkThumb}
          alt={cocktail.strDrink}
        />
        <p>Categoría: {cocktail.strCategory}</p>
        <p className="cocktailInstructions">
          Instrucciones: {cocktail.strInstructions}
        </p>
      </div>
    </div>
  );
};
