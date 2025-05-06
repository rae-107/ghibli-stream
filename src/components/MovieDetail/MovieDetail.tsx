import backdrop from '../../assests/spirited-away-background.png';
import { useParams } from 'react-router-dom';
import { Header } from '../Header/Header';
import './MovieDetail.css';
import { useEffect } from 'react';
import { Movie } from '../../types/Movie';

const style = {
	backgroundImage: `url(${backdrop})`,
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	backgroundAttachment: 'fixed',
};

type MovieDetailProps = {
	chooseMovie: (movieTitle: string) => void;
	favoriteMovies: Movie[];
	watchedMovies: Movie[];
	toggleFavorite: (movieTitle: string, action: string) => void;
	toggleWatched: (movieTitle: string, action: string) => void;
	selectedMovie: Movie;
};

export const MovieDetail = ({
	chooseMovie,
	favoriteMovies,
	watchedMovies,
	toggleFavorite,
	toggleWatched,
	selectedMovie,
}: MovieDetailProps) => {
	const { movieTitle } = useParams();
	const {
		description,
		title,
		director,
		id,
		image,
		locations,
		movie_banner,
		original_title,
		original_title_romanised,
		people,
		producer,
		release_date,
		rt_score,
		running_time,
		species,
		url,
		vehicles,
	} = selectedMovie;

	useEffect(() => {
		if (!movieTitle) {
			return;
		}
		chooseMovie(movieTitle);
		// eslint-disable-next-line
	}, [movieTitle]);

	const checkLists = (movieTitle: string, type: string) => {
		if (type === 'favorite') {
			const isList = favoriteMovies.find((movie) => movie.title === movieTitle);
			return isList ? 'Remove' : 'Add';
		} else {
			const isList = watchedMovies.find((movie) => movie.title === movieTitle);
			return isList ? 'Remove' : 'Add';
		}
	};

	return (
		<section className='MovieDetail' style={style}>
			<Header />
			<section className='center-movie-detail'>
				<section className='poster-with-info'>
					<img alt={`${title} poster`} src={image} className='large-poster' />
					<section className='movie-info'>
						<div className='top-movie-info'>
							<h1>{title}</h1>
							<div className='button-container'>
								<button
									id={title}
									onClick={(event) => {
										const target = event.target as HTMLButtonElement;
										toggleFavorite(target.id, checkLists(title, 'favorite'));
									}}
								>
									{checkLists(title, 'favorite')} To Favorites
								</button>
								<button
									id={title}
									onClick={(event) => {
										const target = event.target as HTMLButtonElement;
										toggleWatched(target.id, checkLists(title, 'watched'));
									}}
								>
									{checkLists(title, 'watched')} To Watched
								</button>
							</div>
						</div>
						{release_date && (
							<h2>
								<strong>Release Date:</strong> {release_date}
							</h2>
						)}
						{rt_score && (
							<h2>
								<strong>Rating:</strong> {rt_score}
							</h2>
						)}
						{running_time !== 'TBA' && (
							<h2>
								<strong>Runtime:</strong> {running_time} mins
							</h2>
						)}
					</section>
				</section>
				<div>
					<h2 className='summary'>
						<strong>Summary</strong>
					</h2>
					<p className='synopsis'>{description}</p>
				</div>
			</section>
		</section>
	);
};
