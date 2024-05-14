import "./Image.css";

export const Image = ({ src, alt, width, height }) => {
  return (
    <image>
      <img src={src} alt={alt} width={width} height={height}></img>
    </image>
  );
};
