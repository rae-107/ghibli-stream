import React from "react";
import backdrop from "../../assests/forest.png";
import "./MovieDisplay.css";
import Movie from "../Movie/Movie";

const style = {
  backgroundImage: `url(${backdrop})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const MovieDisplay = ({ movies, chooseMovie }) => {
  const displayMovies = (movies) => {
    return movies.map((movie, index) => (
      <Movie
        key={index}
        id={index}
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
