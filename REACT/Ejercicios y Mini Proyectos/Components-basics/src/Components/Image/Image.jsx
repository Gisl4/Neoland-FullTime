import "./Image.css";

export const Image = ({ src, description }) => {
  return (
    <figure>
      <h1>{description}</h1>
      <img src={src} alt={description}></img>
    </figure>
  );
};
