import React from "react";
import Header from "../Header/Header";
import backdrop from "../../assests/spirited-away-background.png";
import "./MovieDetail.css";

const style = {
  backgroundImage: `url(${backdrop})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const MovieDetail = ({
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
          <img alt={title} src={poster} className="large-poster" />
          <section className="movie-info">
            <div className="top-movie-info">
              <h2>{title}</h2>
              <div>
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
            {genre && (
              <p>
                <strong>Genre:</strong> {genre.split("/").join(" | ")}
              </p>
            )}
            {release && (
              <p>
                <strong>Release Date:</strong> {release}
              </p>
            )}
            {rating && (
              <p>
                <strong>Rating:</strong> {rating}
              </p>
            )}
            {music && (
              <p>
                <strong>Music:</strong> {music}
              </p>
            )}
            {runtime !== 'TBA' && (
              <p>
                <strong>Runtime:</strong> {runtime} mins
              </p>
            )}
            {budget !== "N/A" && (
              <p>
                <strong>Budget:</strong> ${budget}
              </p>
            )}
            {boxOffice && (
              <p>
                <strong>boxOffice:</strong> ${boxOffice}
              </p>
            )}
            {rottenTomatoes && (
              <p>
                <strong>Rotten Tomatoes:</strong> {rottenTomatoes}
              </p>
            )}
            {imdb && (
              <p>
                <strong>IMDB:</strong> {imdb}
              </p>
            )}
          </section>
        </section>
        <div>
          <p className="summary">Summary</p>
          <p className="synopsis">{synopsis}</p>
        </div>
      </section>
    </section>
  );
};

export default MovieDetail;
