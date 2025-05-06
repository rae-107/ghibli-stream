import { NavLink } from 'react-router-dom';
import { Movie as MovieType } from '../../types/Movie';
import './Movie.css';

type MovieProps = {
	movie: MovieType;
	chooseMovie: (movie: string) => void;
};

export const Movie = ({ movie, chooseMovie }: MovieProps) => {
	console.log('movie: ', movie);
	const { id, title, image } = movie;
	return (
		<NavLink to={`/details/${title}`}>
			<section
				onClick={(event) => {
					const target = event.target as HTMLButtonElement;
					chooseMovie(target.id);
				}}
				className='Movie'
				id={title}
			>
				<img
					src={image}
					id={title}
					alt={`Click for more information about ${title}`}
					className='small-poster'
				/>
				<h1 id={title} className='small-title'>
					{title}
				</h1>
			</section>
		</NavLink>
	);
};
