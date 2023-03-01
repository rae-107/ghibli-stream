import React from "react";
import backdrop from '../../assests/spitited-away-background.png'
import './MovieDisplay.css'

const style = {
  "backgroundImage": `url(${backdrop})`,
  "backgroundSize": "cover",
  "backgroundRepeat": 'no-repeat'
  
}

const MovieDisplay = () => {
  return (
    <section style={style} className="MovieDisplay">
      
    </section>
  )
}

export default MovieDisplay