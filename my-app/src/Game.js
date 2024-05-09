import { Component } from 'react';
import { GameLayout } from './GameLayout';
// import { isWinners } from './Utils/Utils';
// import {
// 	SelectIsGameEnded,
// 	selectCurrentPlayer,
// 	selectField,
// } from './components/selectors';
import { /*useSelector, useDispatch,*/ connect } from 'react-redux';

// export const App = () => {
// 	const isGameEnded = useSelector(SelectIsGameEnded);
// 	const currentPlayer = useSelector(selectCurrentPlayer);
// 	const field = useSelector(selectField);
// 	const dispatch = useDispatch();

// 	const handleClick = (event) => {
// 		if (event.target.id) {
// 			if (isGameEnded === false && !event.target.classList.contains('isClicked')) {
// 				event.target.classList.add('isClicked');
// 				const newField = [...field];
// 				newField[event.target.id] = currentPlayer;
// 				dispatch({ type: 'SET_FIELD', payload: newField });
// 				if (isWinners([...newField], currentPlayer) === true) {
// 					dispatch({ type: 'SET_CURRENT_PLAYER' });
// 					dispatch({ type: 'SET_IS_GAME_ENDED' });
// 				}
// 				if (![...newField].includes('') && !isWinners([...newField], currentPlayer)) {
// 					dispatch({ type: 'SET_IS_DRAW' });
// 				}
// 				if (![...newField].includes('') && isWinners([...newField], currentPlayer)) {
// 					dispatch({ type: 'SET_IS_GAME_ENDED' });
// 				}
// 				dispatch({ type: 'SET_CURRENT_PLAYER' });
// 			}
// 		}
// 	};

// 	const handleResetButton = () => {
// 		dispatch({ type: 'RESET' });
// 	};

// 	return <GameLayout handleClick={handleClick} handleResetButton={handleResetButton} />;
// };

export class oldAppContainer extends Component {
	constructor(props) {
		super(props);
	}

	// handleClick = (event) => {
	// 			if (event.target.id) {
	// 				if (isGameEnded === false && !event.target.classList.contains('isClicked')) {
	// 					event.target.classList.add('isClicked');
	// 					const newField = [...field];
	// 					newField[event.target.id] = currentPlayer;
	// 					dispatch({ type: 'SET_FIELD', payload: newField });
	// 					if (isWinners([...newField], currentPlayer) === true) {
	// 						dispatch({ type: 'SET_CURRENT_PLAYER' });
	// 						dispatch({ type: 'SET_IS_GAME_ENDED' });
	// 					}
	// 					if (![...newField].includes('') && !isWinners([...newField], currentPlayer)) {
	// 						dispatch({ type: 'SET_IS_DRAW' });
	// 					}
	// 					if (![...newField].includes('') && isWinners([...newField], currentPlayer)) {
	// 						dispatch({ type: 'SET_IS_GAME_ENDED' });
	// 					}
	// 					dispatch({ type: 'SET_CURRENT_PLAYER' });
	// 				}
	// 			}
	// 		};

	handleResetButton = () => {
		// dispatch({ type: 'RESET' });
		this.props.dispatch({ type: 'RESET' });
	};

	render() {
		return <GameLayout handleResetButton={this.handleResetButton} />;
	}
}

export const OldApp = connect()(oldAppContainer);
