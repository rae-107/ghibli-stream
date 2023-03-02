export const convertObjectToArray = (movies) => {
  const keys = Object.keys(movies)
  const allMovies = keys.reduce((arr, key) => {
    arr.push(movies[key])
    return arr
  }, [])
  return allMovies
}