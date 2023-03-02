import React from "react";
import './Movie.css'

const Movie = ({ id, title, poster}) => {
  return (
    <section className="Movie" >
      <img src={poster} alt={`Click for more information about ${title}`} className="small-poster" />
      <h3 className="small-title" >{title}</h3>
    </section>
  )
}

export default Movie