export const formatMinutes =(totalMinutes) => {
  const hours = totalMinutes / 60
  const minutes = totalMinutes % 60
  return `${Math.floor(hours)} hrs ${minutes}`
}

export const cleanData = (data) => {
  return data.map((movie) => {
    return {
      title:movie.title.replace('?', ''),
      poster: movie.poster,
      genre: movie.genre,
      rating: movie.rating,
      release: movie.release,
      music: movie.music,
      runtimeMinutes: formatMinutes(movie.runtimeMinutes),
      budgetUSD: movie.budgetUSD,
      boxOfficeUSD: movie.boxOfficeUSD,
      synopsis: movie.synopsis,
      reviews: movie.reviews,
    };
  });
};

export const convertObjectToArray = (movies) => {
  const keys = Object.keys(movies);
  const allMovies = keys.reduce((arr, key) => {
    arr.push(movies[key]);
    return arr;
  }, []);
  return cleanData(allMovies);
};

formatMinutes(179)