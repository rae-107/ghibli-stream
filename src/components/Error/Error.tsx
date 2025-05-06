import backdrop from '../../assests/spirited-away-background.png';
import { Header } from '../Header/Header';
import './Error.css';

const style = {
	backgroundImage: `url(${backdrop})`,
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	backgroundAttachment: 'fixed',
};

type ErrorProps = {
	message: string;
};

export const Error = ({ message }: ErrorProps) => {
	return (
		<section className='Main'>
			<Header />
			<section className='NoMovieDisplay' style={style}>
				<section className='center-no-movie-display'>
					<h2>{message}</h2>
				</section>
			</section>
		</section>
	);
};
