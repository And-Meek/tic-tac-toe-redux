import PropTypes from 'prop-types';
import { InformationLayout } from './InformationLayout';
import { useSelector } from 'react-redux';
import { SelectIsGameEnded, selectCurrentPlayer, selectIsDraw } from '../selectors';

export const InformationContainer = () => {
	const isDraw = useSelector(selectIsDraw);
	const isGameEnded = useSelector(SelectIsGameEnded);
	const currentPlayer = useSelector(selectCurrentPlayer);

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
