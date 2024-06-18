/* eslint-disable react/prop-types */
import "./Header.css";
import { Nav } from "./Nav";
import { Link } from "react-router-dom";

export const Header = ({ children }) => {
  return (
    <header>
      <Link to="/">{children}</Link>

      <Nav />
    </header>
  );
};
