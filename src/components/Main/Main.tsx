import { Movie } from '../../types/Movie';
import { Header } from '../Header/Header';
import { MovieDisplay } from '../MovieDisplay/MovieDisplay';
import NoMovieDisplay from '../NoMovieDisplay/NoMovieDisplay';

type MainProps = {
	chooseMovie: (movie: any) => void;
	movies: Movie[];
};

export const Main = ({ chooseMovie, movies }: MainProps) => {
	return (
		<section className='Main'>
			<Header />
			{movies.length ? (
				<MovieDisplay chooseMovie={chooseMovie} movies={movies} />
			) : (
				<NoMovieDisplay />
			)}
		</section>
	);
};
