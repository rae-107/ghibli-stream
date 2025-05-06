export const apiCalls = async () => {
	try {
		const res = await fetch(`https://ghibliapi.vercel.app/films`);
		const data = await res.json();
		return data;
	} catch {
		return 'Something wrong with the server';
	}
};
