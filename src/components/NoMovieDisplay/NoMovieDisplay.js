import backdrop from "../../assests/spirited-away-background.png";
import "./NoMovieDisplay.css";
import React from "react";

const style = {
  backgroundImage: `url(${backdrop})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
};

const NoMovieDisplay = () => {
  return (
    <section className="NoMovieDisplay" style={style}>
      <section className="center-no-movie-display">
        <h2>There are no movies found in this list. Try adding some!</h2>
      </section>
    </section>
  );
};

export default NoMovieDisplay;
