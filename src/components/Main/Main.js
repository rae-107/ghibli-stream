import NoMovieDisplay from "../NoMovieDisplay/NoMovieDisplay";
import MovieDisplay from "../MovieDisplay/MovieDisplay";
import Header from "../Header/Header";
import PropTypes from "prop-types";
import React from "react";

const Main = ({ chooseMovie, movies }) => {
  return (
    <section className="Main">
      <Header />
      {movies.length ? <MovieDisplay chooseMovie={chooseMovie} movies={movies} /> : <NoMovieDisplay />}
    </section>
  );
};

export default Main;

Main.propTypes = {
  chooseMovie: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(PropTypes.object).isRequired
}