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
      <NavLink to={'/'}>All Movies</NavLink>
      <NavLink to={'/favorites'}>Favorites</NavLink>
      <NavLink to={'/watched'}>Watched</NavLink>
      <NavLink to={'/watchlist'}>Watch List</NavLink>
    </header>
  );
};

export default Header;
