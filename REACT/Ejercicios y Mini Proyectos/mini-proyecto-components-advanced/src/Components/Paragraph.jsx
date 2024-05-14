import "./Paragraph.css";
import PropTypes from "prop-types";

export const Paragraph = ({ text, className }) => {
  return <p className={className}>{text}</p>;
};

Paragraph.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};
