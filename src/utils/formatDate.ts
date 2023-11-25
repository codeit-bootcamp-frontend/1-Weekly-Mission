export function formatDate(value: number) {
	const date = new Date(value);
	return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}