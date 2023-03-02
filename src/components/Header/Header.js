import React from "react";
import logo from "../../assests/Studio_Ghibli_logo.png";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="Header">
      <NavLink to={'/'} >
        <img className="logo" src={logo} />
      </NavLink>
    </header>
  );
};

export default Header;
