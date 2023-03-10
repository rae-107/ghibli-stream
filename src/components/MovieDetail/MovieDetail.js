import backdrop from "../../assests/spirited-away-background.png";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import PropTypes from "prop-types";
import "./MovieDetail.css";
import React, { useEffect } from "react";

const style = {
  backgroundImage: `url(${backdrop})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
};

const MovieDetail = ({
  chooseMovie,
  favoriteMovies,
  watchedMovies,
  toggleFavorite,
  toggleWatched,
  title,
  poster,
  genre,
  rating,
  release,
  music,
  runtime,
  budget,
  boxOffice,
  synopsis,
  rottenTomatoes,
  imdb,
}) => {
  const { movieTitle } = useParams();

  useEffect(() => {
    chooseMovie(movieTitle);
     // eslint-disable-next-line
  }, [title]);

  const checkLists = (movieTitle, type) => {
    if (type === "favorite") {
      const isList = favoriteMovies.find((movie) => movie.title === movieTitle);
      return isList ? "Remove" : "Add";
    } else {
      const isList = watchedMovies.find((movie) => movie.title === movieTitle);
      return isList ? "Remove" : "Add";
    }
  };

  return (
    <section className="MovieDetail" style={style}>
      <Header />
      <section className="center-movie-detail">
        <section className="poster-with-info">
          <img alt={`${title} poster`} src={poster} className="large-poster" />
          <section className="movie-info">
            <div className="top-movie-info">
              <h1>{title}</h1>
              <div className="button-container">
                <button
                  id={title}
                  onClick={(event) =>
                    toggleFavorite(
                      event.target.id,
                      checkLists(title, "favorite")
                    )
                  }
                >
                  {checkLists(title, "favorite")} To Favorites
                </button>
                <button
                  id={title}
                  onClick={(event) =>
                    toggleWatched(event.target.id, checkLists(title, "watched"))
                  }
                >
                  {checkLists(title, "watched")} To Watched
                </button>
              </div>
            </div>
            {genre && (<h2><strong>Genre:</strong> {genre.split("/").join(" | ")}</h2>)}
            {release && (<h2><strong>Release Date:</strong> {release}</h2>)}
            {rating && (<h2><strong>Rating:</strong> {rating}</h2>)}
            {music && (<h2><strong>Music:</strong> {music}</h2>)}
            {runtime !== 'TBA' && (<h2><strong>Runtime:</strong> {runtime} mins</h2>)}
            {budget !== "N/A" && (<h2><strong>Budget:</strong> ${budget}</h2>)}
            {boxOffice && (<h2><strong>Box Office:</strong> ${boxOffice}</h2>)}
            {rottenTomatoes && (<h2><strong>Rotten Tomatoes:</strong> {rottenTomatoes}</h2>)}
            {imdb && (<h2><strong>IMDB:</strong> {imdb}</h2>)}
          </section>
        </section>
        <div>
          <h2 className="summary">
            <strong>Summary</strong>
          </h2>
          <p className="synopsis">{synopsis}</p>
        </div>
      </section>
    </section>
  );
};

export default MovieDetail;

MovieDetail.propTypes = {
  chooseMovie: PropTypes.func.isRequired,
  favoriteMovies: PropTypes.arrayOf(PropTypes.object).isRequired,
  watchedMovies: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  toggleWatched: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  release: PropTypes.string.isRequired,
  music: PropTypes.string.isRequired,
  runtime: PropTypes.string.isRequired,
  budget: PropTypes.string.isRequired,
  boxOffice: PropTypes.string.isRequired,
  synopsis: PropTypes.string.isRequired,
  rottenTomatoes: PropTypes.string.isRequired,
  imdb: PropTypes.string.isRequired,
};
