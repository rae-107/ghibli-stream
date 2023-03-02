import React, { useEffect, useState } from "react";
import backdrop from "../../assests/forest.png";
import "./MovieDisplay.css";
import { apiCalls } from "../../apiCalls";
import Movie from "../Movie/Movie";
import { convertObjectToArray } from '../../util'

const style = {
  backgroundImage: `url(${backdrop})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const MovieDisplay = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    apiCalls().then((data) => setMovies(convertObjectToArray(data)));
    console.log(movies)
  }, [movies.length]);

  const displayMovies = (movies) => {
    return movies.map((movie, index) => <Movie key={index} id={index} poster={movie.poster} title={movie.title} />)
  }

  return (
    <section style={style} className="MovieDisplay">
      {movies.length && <section className="center-movie-container">{displayMovies(movies)}</section>}
      
    </section>
  );
};

export default MovieDisplay;
