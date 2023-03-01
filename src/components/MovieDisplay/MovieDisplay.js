import React, { useEffect, useState } from "react";
import backdrop from '../../assests/spitited-away-background.png'
import './MovieDisplay.css'
import { apiCalls } from '../../apiCalls'

const style = {
  "backgroundImage": `url(${backdrop})`,
  "backgroundSize": "cover",
  "backgroundRepeat": 'no-repeat'
  
}

const MovieDisplay = () => {

  const [movies, setMovies] = useState({})


  useEffect(() => {
    setMovies(apiCalls().then(data => console.log(data)))
    console.log(movies)
  }, [])


  return (
    <section style={style} className="MovieDisplay">
      <section className="center-movie-container"></section>
    </section>
  )
}

export default MovieDisplay