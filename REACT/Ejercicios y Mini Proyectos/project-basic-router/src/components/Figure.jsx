/* eslint-disable react/prop-types */
import "./Figure.css";
import { Link } from "react-router-dom";

export const Figure = ({ name, src, id }) => {
  return (
    <figure>
      <Link to={`/cocktail/${id}`}>
        <h3>{name}</h3>
        <img src={src} alt={name} />
      </Link>
    </figure>
  );
};
