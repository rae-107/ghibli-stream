import { Routes, Route } from "react-router-dom";
import Main from "../Main/Main";
import "./App.css";
import React, { useEffect, useState } from "react";
import { apiCalls } from "../../apiCalls";
import { convertObjectToArray } from "../../util";
import MovieDetail from "../MovieDetail/MovieDetail";

function App() {
  const [selectedMovie, setSelectedMovie] = useState({});
  const [movies, setMovies] = useState([]);
  const [unwatchedMovies, setunwatchedMovies] = useState([]);
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [watchedMovies, setWatchedMovies] = useState([]);

  useEffect(() => {
    apiCalls().then((data) => setMovies(convertObjectToArray(data)));
    console.log(movies);
    // eslint-disable-next-line
  }, [movies.length]);

  const chooseMovie = (id) => {
    const findChoosenMovie = movies.find((movie, index) => index === +id);
    setSelectedMovie(findChoosenMovie);
  };

  return (
    <main className="App">
      <Routes>
        <Route
          path="/"
          element={<Main chooseMovie={chooseMovie} movies={movies} />}
        />
        <Route path="/details/:id" element={selectedMovie.title && <MovieDetail title={selectedMovie.title} poster={selectedMovie.poster} genre={selectedMovie.genre} rating={selectedMovie.rating} release={selectedMovie.release} music={selectedMovie.music} runtime={selectedMovie.runtimeMinutes} budget={selectedMovie.budgetUSD} boxOffice={selectedMovie.boxOfficeUSD} synopsis={selectedMovie.synopsis} rottenTomatoes={selectedMovie.reviews.rottenTomatoes} imdb={selectedMovie.reviews.imdb} />} />
        <Route path="*" />
      </Routes>
    </main>
  );
}

export default App;
