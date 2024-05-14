/* eslint-disable react/prop-types */
import "./Title.css";

export const Title = ({ text, className }) => {
  return <h1 className={className}>{text}</h1>;
};
