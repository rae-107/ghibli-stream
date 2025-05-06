export const formatMinutes = (totalMinutes: number) => {
	const hours = totalMinutes / 60;
	const minutes = totalMinutes % 60;
	return `${Math.floor(hours)} hrs ${minutes}`;
};
