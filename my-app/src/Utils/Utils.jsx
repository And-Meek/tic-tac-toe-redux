export const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8], // Варианты побед по горизонтали
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8], // Варианты побед по вертикали
	[0, 4, 8],
	[2, 4, 6], // Варианты побед по диагонали
];

export const isWinners = ([...field], currentPlayer) => {
	const findIndexses = field.reduce((acc, item, index) => {
		if (item === currentPlayer) {
			acc.push(index);
		}
		return acc;
	}, []);
	return WIN_PATTERNS.some((item) => {
		return item.every((element) => {
			return findIndexses.includes(element);
		});
	});
};
