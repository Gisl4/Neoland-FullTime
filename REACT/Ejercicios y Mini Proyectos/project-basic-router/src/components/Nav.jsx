import "./Nav.css";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="navGeneral">
      <NavLink to="">Home</NavLink>
      <NavLink to="/cocktails">Menu</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
};
