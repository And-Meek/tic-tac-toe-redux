import PropTypes from 'prop-types';
import { InformationLayout } from './InformationLayout';

export const InformationContainer = ({ currentPlayer, isGameEnded, isDraw }) => {
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
