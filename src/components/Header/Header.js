import React from "react";
import logo from "../../assests/Studio_Ghibli_logo.png";
import "./Header.css";
import { NavLink } from "react-router-dom";
import arrow from '../../assests/angle-small-down.png'

const Header = () => {
  return (
    <header className="Header">
      <NavLink to={"/"}>
        <img alt="Studio Ghibli Logo" className="logo" src={logo} />
      </NavLink>
      <div className="links" >
        <NavLink to={"/"}><img alt="Link to all movies" className="arrow" src={arrow} />All Movies</NavLink>
        <NavLink to={"/favorites"}><img alt="Link to favorite movies" className="arrow" src={arrow} />Favorites</NavLink>
        <NavLink to={"/watched"}><img alt="Link to watched movies" className="arrow" src={arrow} />Watched</NavLink>
        <NavLink to={"/watchlist"}><img alt="Link to watch list" className="arrow" src={arrow} />Watch List</NavLink>
      </div>
    </header>
  );
};

export default Header;
