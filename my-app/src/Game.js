import { useEffect, useState } from 'react';
import { GameLayout } from './GameLayout';
import { isWinners } from './Utils/Utils';
import { store } from './store';

export const App = () => {
	const [updateFields, setUpdateFields] = useState(false);

	useEffect(() => {
		const subscribe = store.subscribe(() => {
			setUpdateFields(!updateFields);
		});
		return () => subscribe();
	}, [updateFields]);

	const handleClick = (event) => {
		const { isGameEnded, currentPlayer, field } = store.getState();
		if (event.target.id) {
			if (isGameEnded === false && !event.target.classList.contains('isClicked')) {
				event.target.classList.add('isClicked');
				const newField = [...field];
				newField[event.target.id] = currentPlayer;
				store.dispatch({ type: 'SET_FIELD', payload: newField });
				if (isWinners([...newField], currentPlayer) === true) {
					store.dispatch({ type: 'SET_CURRENT_PLAYER' });
					store.dispatch({ type: 'SET_IS_GAME_ENDED' });
				}
				if (![...newField].includes('') && !isWinners([...newField], currentPlayer)) {
					store.dispatch({ type: 'SET_IS_DRAW' });
				}
				if (![...newField].includes('') && isWinners([...newField], currentPlayer)) {
					store.dispatch({ type: 'SET_IS_GAME_ENDED' });
				}
				store.dispatch({ type: 'SET_CURRENT_PLAYER' });
			}
		}
	};

	const handleResetButton = () => {
		store.dispatch({ type: 'RESET' });
	};

	return <GameLayout handleClick={handleClick} handleResetButton={handleResetButton} />;
};
