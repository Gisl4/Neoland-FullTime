/* eslint-disable react/prop-types */
import "./ItemList.css";

export const ItemList = ({ name, status, origin, src }) => {
  return (
    <li>
      <h3>{name}</h3>
      <img src={src} alt={name} />
      <p>{status}</p>
      <figcaption>{origin}</figcaption>
    </li>
  );
};
