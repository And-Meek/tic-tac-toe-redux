import PropTypes from 'prop-types';
import { InformationLayout } from './InformationLayout';
import { store } from '../../store';

export const InformationContainer = () => {
	const { isDraw, isGameEnded, currentPlayer } = store.getState();
	const result = () => {
		let resultText = '';
		if (isDraw) {
			return (resultText = 'Ничья');
		}
		if (!isDraw && isGameEnded) {
			return (resultText = `Победа: ${currentPlayer}`);
		}
		if (!isDraw && !isGameEnded) {
			return (resultText = `Ходит: ${currentPlayer}`);
		}
		return resultText;
	};
	return <InformationLayout result={result()} />;
};

InformationLayout.PropTypes = {
	result: PropTypes.string,
};
