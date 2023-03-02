import React from "react";
import "./Movie.css";
import { NavLink } from "react-router-dom";

const Movie = ({ id, title, poster, chooseMovie }) => {
  return (
    <NavLink to={`/details/${title}`}>
      <section
        onClick={(event) => chooseMovie(event.target.id)}
        className="Movie"
      >
        <img
          src={poster}
          id={id}
          alt={`Click for more information about ${title}`}
          className="small-poster"
        />
        <h3 className="small-title">{title}</h3>
      </section>
    </NavLink>
  );
};

export default Movie;
