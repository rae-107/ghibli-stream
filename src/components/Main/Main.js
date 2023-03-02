import MovieDisplay from "../MovieDisplay/MovieDisplay";
import Header from "../Header/Header";
import React from "react";

const Main = ({ chooseMovie, movies }) => {
  return (
    <section className="Main">
      <Header />
      <MovieDisplay chooseMovie={chooseMovie} movies={movies} />
    </section>
  );
};

export default Main;
