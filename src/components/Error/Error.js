import backdrop from "../../assests/spirited-away-background.png";
import Header from "../Header/Header";
import PropTypes from "prop-types";
import React from "react";
import "./Error.css";

const style = {
  backgroundImage: `url(${backdrop})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
};

const Error = ({ message }) => {
  return (
    <section className="Main">
      <Header />
      <section className="NoMovieDisplay" style={style}>
        <section className="center-no-movie-display">
          <h2>{message}</h2>
        </section>
      </section>
    </section>
  );
};

export default Error;

Error.propTypes = {
  message: PropTypes.string.isRequired,
};
