import { useEffect, useState } from 'react';
import { apiCalls } from '../../apiCalls';
import { Route, Routes } from 'react-router-dom';
import { Main } from '../Main/Main';
import { Movie } from '../../types/Movie';
import { Error } from '../Error/Error';
import { MovieDetail } from '../MovieDetail/MovieDetail';
import './App.css';

export const App = () => {
	const [unwatchedMovies, setunwatchedMovies] = useState<Movie[]>([]);
	const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>([]);
	const [watchedMovies, setWatchedMovies] = useState<Movie[]>([]);
	const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
	const [movies, setMovies] = useState<Movie[]>([]);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		apiCalls().then((data) => {
			if (typeof data === 'string') {
				setError(data);
			} else {
				setMovies(data);
			}
		});
		// eslint-disable-next-line
	}, [movies.length]);

	useEffect(() => {
		const allMovies = localStorage.getItem('allMovies');
		const favorites = localStorage.getItem('favoriteMovies');
		const watched = localStorage.getItem('watchedMovies');
		const unwatched = localStorage.getItem('unwatchedMovies');

		let unwatchedMovies: Movie[] = [];

		if (watched && allMovies) {
			const watchedArray = JSON.parse(watched);
			const movieArray = JSON.parse(allMovies);
			unwatchedMovies = generateUnwatched(movieArray, watchedArray);
		}

		if (favorites !== null) {
			setFavoriteMovies(JSON.parse(favorites));
		}
		if (watched !== null) {
			setWatchedMovies(JSON.parse(watched));
		}
		if (unwatched !== null) {
			setunwatchedMovies(unwatchedMovies);
		}
		if (allMovies !== null) {
			setMovies(JSON.parse(allMovies));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('allMovies', JSON.stringify(movies));
		localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
		localStorage.setItem('watchedMovies', JSON.stringify(watchedMovies));
		localStorage.setItem('unwatchedMovies', JSON.stringify(unwatchedMovies));
	}, [favoriteMovies, watchedMovies, unwatchedMovies, movies]);

	useEffect(() => {
		const unwatchedMovies = generateUnwatched(movies, watchedMovies);
		setunwatchedMovies(unwatchedMovies);
	}, [watchedMovies]);

	const generateUnwatched = (all: Movie[], watched: Movie[]) => {
		if (!all) {
			return [];
		}
		return all.filter((movie) => {
			return !watched.find(
				(watchedMovie) => watchedMovie.title === movie.title
			);
		});
	};

	const chooseMovie = (title: string) => {
		setSelectedMovie(movies.find((movie) => movie.title === title) ?? null);
	};

	const toggleFavorite = (title: string, action: string) => {
		action === 'Add'
			? setFavoriteMovies([
					...favoriteMovies,
					...(movies.find((movie) => movie.title === title)
						? [movies.find((movie) => movie.title === title)!]
						: []),
			  ])
			: setFavoriteMovies(
					favoriteMovies.filter((movie) => movie.title !== title)
			  );
	};

	const toggleWatched = (title: string, action: string) => {
		action === 'Add'
			? setWatchedMovies([
					...watchedMovies,
					movies.find((movie) => movie.title === title) ?? ({} as Movie),
			  ])
			: setWatchedMovies(
					watchedMovies.filter((movie) => movie.title !== title)
			  );
	};

	return (
		<main className='App'>
			<Routes>
				<Route
					path='/'
					element={
						error ? (
							<Error
								message={
									'Oh no! Something went wrong with the server. Please try again!'
								}
							/>
						) : (
							<Main chooseMovie={chooseMovie} movies={movies} />
						)
					}
				/>
				<Route
					path='/details/:movieTitle'
					element={
						selectedMovie && (
							<MovieDetail
								chooseMovie={chooseMovie}
								favoriteMovies={favoriteMovies}
								watchedMovies={watchedMovies}
								toggleFavorite={toggleFavorite}
								toggleWatched={toggleWatched}
								selectedMovie={selectedMovie}
							/>
						)
					}
				/>
				<Route
					path='/favorites'
					element={<Main chooseMovie={chooseMovie} movies={favoriteMovies} />}
				/>
				<Route
					path='/watched'
					element={<Main chooseMovie={chooseMovie} movies={watchedMovies} />}
				/>
				<Route
					path='/watchlist'
					element={<Main chooseMovie={() => null} movies={unwatchedMovies} />}
				/>
				<Route
					path='*'
					element={
						<Error
							message={'404... Page Not Found. Click logo to return home.'}
						/>
					}
				/>
			</Routes>
		</main>
	);
};
