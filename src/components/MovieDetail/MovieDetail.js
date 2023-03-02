import React from "react";
import Header from "../Header/Header";
import backdrop from "../../assests/forest.png";
import './MovieDetail.css'

const style = {
  backgroundImage: `url(${backdrop})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const MovieDetail = ({ title, poster, genre, rating, release, music, runtime, budget, boxOffice, synopsis, rottenTomatoes, imdb }) => {
  return (
    <section className="MovieDetail" style={style} >
      <Header />
      <section className="center-movie-container">
          <img src={poster} className='poster' />
        <div>
        </div>
      </section>
    </section>
  );
};

export default MovieDetail;
