import MovieDetail from "../MovieDetail/MovieDetail";
import React, { useEffect, useState } from "react";
import { convertObjectToArray } from "../../util";
import { Routes, Route } from "react-router-dom";
import { apiCalls } from "../../apiCalls";
import Error from "../Error/Error";
import Main from "../Main/Main";
import "./App.css";

function App() {
  const [unwatchedMovies, setunwatchedMovies] = useState([]);
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [watchedMovies, setWatchedMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({});
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiCalls().then((data) => {
      if (typeof data === "string") {
        setError(data);
      } else {
        setMovies(convertObjectToArray(data));
        setunwatchedMovies(movies);
      }
    });
    // eslint-disable-next-line
  }, [movies.length]);

  useEffect(() => {
    const determineUnwatchedMovies = [];
    movies.forEach((movie) =>
      !watchedMovies.includes(movie) ? determineUnwatchedMovies.push(movie) : ""
    );
    setunwatchedMovies(determineUnwatchedMovies);
    // eslint-disable-next-line
  }, [watchedMovies]);


    const chooseMovie = (title) => {
      setSelectedMovie(movies.find((movie) => movie.title === title));
    };


  const toggleFavorite = (title, action) => {
    action === "Add" 
    ? setFavoriteMovies([...favoriteMovies, movies.find((movie) => movie.title === title)])
    : setFavoriteMovies(favoriteMovies.filter( (movie) => movie.title !== title));
  };

  const toggleWatched = (title, action) => {
    action === "Add"
      ? setWatchedMovies([...watchedMovies, movies.find((movie) => movie.title === title)])
      : setWatchedMovies(watchedMovies.filter((movie) => movie.title !== title));
  };

  return (
    <main className="App">
      <Routes>
        <Route
          path="/"
          element={
            error 
              ? (<Error message={"Oh no! Something went wrong with the server. Please try again!"}/>)
              : (<Main chooseMovie={chooseMovie} movies={movies} />)} />
        <Route
          path="/details/:movieTitle"
          element={
            selectedMovie.title && (
              <MovieDetail
                chooseMovie={chooseMovie}
                favoriteMovies={favoriteMovies}
                watchedMovies={watchedMovies}
                toggleFavorite={toggleFavorite}
                toggleWatched={toggleWatched}
                title={selectedMovie.title}
                poster={selectedMovie.poster}
                genre={selectedMovie.genre}
                rating={selectedMovie.rating}
                release={selectedMovie.release}
                music={selectedMovie.music}
                runtime={selectedMovie.runtimeMinutes}
                budget={selectedMovie.budgetUSD}
                boxOffice={selectedMovie.boxOfficeUSD}
                synopsis={selectedMovie.synopsis}
                rottenTomatoes={selectedMovie.reviews.rottenTomatoes}
                imdb={selectedMovie.reviews.imdb}
              />
            )
          }
        />
        <Route
          path="/favorites"
          element={<Main chooseMovie={chooseMovie} movies={favoriteMovies} />}
        />
        <Route
          path="/watched"
          element={<Main chooseMovie={chooseMovie} movies={watchedMovies} />}
        />
        <Route
          path="/watchlist"
          element={<Main chooseMovie={chooseMovie} movies={unwatchedMovies} />}
        />
        <Route
          path="*"
          element={
            <Error
              message={"404... Page Not Found. Click logo to return home."}
            />
          }
        />
      </Routes>
    </main>
  );
}

export default App;
