/* eslint-disable react/prop-types */
import "./Title.css";

export const Title = ({ children, className }) => {
  return <h1 className={className}>{children}</h1>;
};
