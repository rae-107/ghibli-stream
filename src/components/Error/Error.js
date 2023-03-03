import React from "react";
import backdrop from "../../assests/spirited-away-background.png";
import Header from "../Header/Header";
import './Error.css'

const style = {
  backgroundImage: `url(${backdrop})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
};

const Error = () => {
  return (
    <section className="Main">
    <Header />
    <section className="NoMovieDisplay" style={style}>
      <section className="center-no-movie-display">
        <h2>Oh no! Something went wrong with the server. Please try again! </h2>
      </section>
    </section>
  </section>
  )
}

export default Error