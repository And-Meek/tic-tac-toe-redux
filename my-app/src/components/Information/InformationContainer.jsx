import PropTypes from 'prop-types';
import { InformationLayout } from './InformationLayout';
import { connect /*useSelector*/ } from 'react-redux';
//import { SelectIsGameEnded, selectCurrentPlayer, selectIsDraw } from '../selectors';
import { Component } from 'react';

// export const InformationContainer = () => {
// 	const isDraw = useSelector(selectIsDraw);
// 	const isGameEnded = useSelector(SelectIsGameEnded);
// 	const currentPlayer = useSelector(selectCurrentPlayer);

// 	const result = () => {
// 		let resultText = '';
// 		if (isDraw) {
// 			return (resultText = 'Ничья');
// 		}
// 		if (!isDraw && isGameEnded) {
// 			return (resultText = `Победа: ${currentPlayer}`);
// 		}
// 		if (!isDraw && !isGameEnded) {
// 			return (resultText = `Ходит: ${currentPlayer}`);
// 		}
// 		return resultText;
// 	};
// 	return <InformationLayout result={result()} />;
// };

export class OldInformationContainer extends Component {
	constructor(props) {
		super(props);
	}

	result = () => {
		let resultText = '';
		if (this.props.isDraw) {
			return (resultText = 'Ничья');
		}
		if (!this.props.isDraw && this.props.isGameEnded) {
			return (resultText = `Победа: ${this.props.currentPlayer}`);
		}
		if (!this.props.isDraw && !this.props.isGameEnded) {
			return (resultText = `Ходит: ${this.props.currentPlayer}`);
		}
		return resultText;
	};

	render() {
		return <InformationLayout result={this.result()} />;
	}
}

export const mapStateToProps = (state) => ({
	isDraw: state.isDraw,
	isGameEnded: state.isGameEnded,
	currentPlayer: state.currentPlayer,
});

export const InformationContainer = connect(mapStateToProps)(OldInformationContainer);

InformationLayout.PropTypes = {
	result: PropTypes.string,
};
