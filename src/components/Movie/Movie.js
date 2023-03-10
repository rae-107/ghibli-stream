import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";
import "./Movie.css";

const Movie = ({ title, poster, chooseMovie }) => {
  return (
    <NavLink to={`/details/${title}`}>
      <section
        onClick={(event) => {
          chooseMovie(event.target.id);
        }}
        className="Movie"
        id={title}
      >
        <img
          src={poster}
          id={title}
          alt={`Click for more information about ${title}`}
          className="small-poster"
        />
        <h1 id={title} className="small-title">
          {title}
        </h1>
      </section>
    </NavLink>
  );
};

export default Movie;

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  chooseMovie: PropTypes.func.isRequired
}