import "./Image.css";
import PropTypes from "prop-types";

export const Image = ({ src, alt, width, height }) => {
  return (
    <img
      src={src}
      className="className"
      alt={alt}
      width={width}
      height={height}
    />
  );
};

Image.propTypes = {
  texto: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  className: PropTypes.string,
};
