import backdrop from "../../assests/spirited-away-background.png";
import PropTypes from "prop-types";
import Movie from "../Movie/Movie";
import "./MovieDisplay.css";
import React from "react";

const style = {
  backgroundImage: `url(${backdrop})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
};

const MovieDisplay = ({ movies, chooseMovie }) => {
  const displayMovies = (movies) => {
    return movies.map((movie, index) => (
      <Movie
        key={index}
        poster={movie.poster}
        title={movie.title}
        chooseMovie={chooseMovie}
      />
    ));
  };

  return (
    <section style={style} className="MovieDisplay">
      {movies.length && (
        <section className="center-movie-container">
          {displayMovies(movies)}
        </section>
      )}
    </section>
  );
};

export default MovieDisplay;

MovieDisplay.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  chooseMovie: PropTypes.func.isRequired
}