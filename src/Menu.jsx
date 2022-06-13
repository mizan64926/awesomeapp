import React from "react";
import { NavLink } from "react-router-dom";
const Menu = () => {
  return (
    <>
      <div className="header_section">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Blogs">Blogs</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </>
  );
};
export default Menu;
