import backdrop from '../../assests/spirited-away-background.png';
import { Movie } from '../Movie/Movie';
import './MovieDisplay.css';
import { Movie as MovieType } from '../../types/Movie';

const style = {
	backgroundImage: `url(${backdrop})`,
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	backgroundAttachment: 'fixed',
};

type MovieDisplayProps = {
	movies: MovieType[];
	chooseMovie: (movie: string) => void;
};

export const MovieDisplay = ({ movies, chooseMovie }: MovieDisplayProps) => {
	const displayMovies = (movies: MovieType[]) => {
		return movies.map((movie, index) => (
			<Movie key={index} movie={movie} chooseMovie={chooseMovie} />
		));
	};

	return (
		<section style={style} className='MovieDisplay'>
			{movies.length && (
				<section className='center-movie-container'>
					{displayMovies(movies)}
				</section>
			)}
		</section>
	);
};
