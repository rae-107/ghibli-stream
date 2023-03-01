import React, { useEffect, useState } from "react";
import backdrop from "../../assests/spitited-away-background.png";
import "./MovieDisplay.css";
import { apiCalls } from "../../apiCalls";
import Movie from "../Movie/Movie";

const style = {
  backgroundImage: `url(${backdrop})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const MovieDisplay = () => {
  const [movies, setMovies] = useState({});

  useEffect(() => {
    apiCalls().then((data) => setMovies(data));
    console.log(movies)
    console.log(Object.keys(movies));
  }, [movies]);

  return (
    <section style={style} className="MovieDisplay">
      <section className="center-movie-container"></section>
      
    </section>
  );
};

export default MovieDisplay;
