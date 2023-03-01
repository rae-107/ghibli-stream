import MovieDisplay from '../MovieDisplay/MovieDisplay'
import Header from '../Header/Header'
import React from 'react'

const Main = () => {
  return (
    <section className='Main' >
      <Header />
      <MovieDisplay />
    </section>
  )
}

export default Main