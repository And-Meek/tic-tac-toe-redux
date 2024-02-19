import { useState } from 'react';
import { GameLayout } from './GameLayout';
import { isWinners } from './Utils/Utils';

export const App = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);

	const handleClick = (event) => {
		if (event.target.id) {
			if (isGameEnded === false && !event.target.classList.contains('isClicked')) {
				event.target.classList.add('isClicked');
				setField((field) => {
					const newField = [...field];
					newField[event.target.id] = currentPlayer;

					if (isWinners([...newField], currentPlayer) === true) {
						setCurrentPlayer(currentPlayer);
						setIsGameEnded(true);
					}
					if (![...newField].includes('') && !isWinners([...newField], currentPlayer)) {
						setIsDraw(true);
					}
					if (![...newField].includes('') && isWinners([...newField], currentPlayer)) {
						setCurrentPlayer(currentPlayer);
						setIsGameEnded(true);
					}

					return newField;
				});
				setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X');
			}
		}
	};

	const handleResetButton = () => {
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
		setField(['', '', '', '', '', '', '', '', '']);
	};

	return (
		<GameLayout
			currentPlayer={currentPlayer}
			isGameEnded={isGameEnded}
			isDraw={isDraw}
			field={field}
			handleClick={handleClick}
			handleResetButton={handleResetButton}
		/>
	);
};
