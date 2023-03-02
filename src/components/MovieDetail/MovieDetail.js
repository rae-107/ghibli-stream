import React from "react";
import Header from "../Header/Header";
import backdrop from "../../assests/forest.png";
import "./MovieDetail.css";

const style = {
  backgroundImage: `url(${backdrop})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const MovieDetail = ({
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
  return (
    <section className="MovieDetail" style={style}>
      <Header />
      <section className="center-movie-detail">
        <section className="poster-with-info">
          <img src={poster} className="large-poster" />
          <section className="movie-info">
            <div className="top-movie-info">
              <h2>{title}</h2>
              <div>
                <button>Add To Favorites</button>
                <button>Add To Watched</button>
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
            {runtime && (
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
                <strong>Rotten Tomatoes:</strong> ${rottenTomatoes}
              </p>
            )}
            {imdb && (
              <p>
                <strong>IMDB:</strong> ${imdb}
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
