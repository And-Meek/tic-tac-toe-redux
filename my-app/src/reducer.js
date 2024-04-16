export const initialState = {
	currentPlayer: 'X',
	isGameEnded: false,
	isDraw: false,
	field: ['', '', '', '', '', '', '', '', ''],
};

export const appReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'RESET': {
			return {
				...state,
				currentPlayer: 'X',
				isGameEnded: false,
				isDraw: false,
				field: ['', '', '', '', '', '', '', '', ''],
			};
		}
		case 'SET_FIELD': {
			return { ...state, field: payload };
		}
		case 'SET_CURRENT_PLAYER': {
			let currentPlayerSimbol = 'X';
			if (state.currentPlayer === 'X') {
				currentPlayerSimbol = '0';
			}
			if (state.currentPlayer === '0') {
				currentPlayerSimbol = 'X';
			}
			return { ...state, currentPlayer: currentPlayerSimbol };
		}
		case 'SET_IS_GAME_ENDED': {
			return { ...state, isGameEnded: true };
		}
		case 'SET_IS_DRAW': {
			return { ...state, isDraw: true };
		}
		default: {
			return state;
		}
	}
};
