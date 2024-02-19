import styles from './Game.module.css';
import { FieldContainer } from './components/Field/FieldContainer';
import { InformationContainer } from './components/Information/InformationContainer';

export const GameLayout = ({
	currentPlayer,
	isGameEnded,
	isDraw,
	field,
	setCurrentPlayer,
	setIsGameEnded,
	setIsDraw,
	handleClick,
	handleResetButton,
}) => {
	return (
		<div className={styles.App}>
			<InformationContainer
				currentPlayer={currentPlayer}
				isGameEnded={isGameEnded}
				isDraw={isDraw}
				setCurrentPlayer={setCurrentPlayer}
				setIsGameEnded={setIsGameEnded}
				setIsDraw={setIsDraw}
			/>
			<FieldContainer field={field} handleClick={handleClick} />
			<button className={styles.btn} onClick={handleResetButton}>
				Начать заного
			</button>
		</div>
	);
};
