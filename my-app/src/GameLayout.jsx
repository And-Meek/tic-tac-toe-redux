import styles from './Game.module.css';
import { FieldContainer } from './components/Field/FieldContainer';
import { InformationContainer } from './components/Information/InformationContainer';

export const GameLayout = ({ handleClick, handleResetButton }) => {
	return (
		<div className={styles.App}>
			<InformationContainer />
			<FieldContainer handleClick={handleClick} />
			<button className={styles.btn} onClick={handleResetButton}>
				Начать заново
			</button>
		</div>
	);
};
