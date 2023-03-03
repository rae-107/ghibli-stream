import React from "react";
import backdrop from "../../assests/spirited-away-background.png";
import "./NoMovieDisplay.css";
import { useParams } from "react-router-dom";

const style = {
  backgroundImage: `url(${backdrop})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
};

const NoMovieDisplay = () => {
  const { path } = useParams
  return (
    <section className="NoMovieDisplay" style={style}>
      <section className="center-no-movie-display">
        <h2>There are no movies found in this list. Try adding some!</h2>
      </section>
    </section>
  );
};

export default NoMovieDisplay;
