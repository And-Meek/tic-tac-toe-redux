import PropTypes from 'prop-types';
import { FieldLayout } from './FieldLayout';
import { Component } from 'react';
import { connect } from 'react-redux';
import { isWinners } from '../../Utils/Utils';

export class OldFieldContainer extends Component {
	handleClick = (event) => {
		if (event.target.id) {
			if (
				this.props.isGameEnded === false &&
				!event.target.classList.contains('isClicked')
			) {
				event.target.classList.add('isClicked');
				const newField = [...this.props.field];
				newField[event.target.id] = this.props.currentPlayer;
				this.props.dispatch({ type: 'SET_FIELD', payload: newField });
				if (isWinners([...newField], this.props.currentPlayer) === true) {
					this.props.dispatch({ type: 'SET_CURRENT_PLAYER' });
					this.props.dispatch({ type: 'SET_IS_GAME_ENDED' });
				}
				if (
					![...newField].includes('') &&
					!isWinners([...newField], this.props.currentPlayer)
				) {
					this.props.dispatch({ type: 'SET_IS_DRAW' });
				}
				if (
					![...newField].includes('') &&
					isWinners([...newField], this.props.currentPlayer)
				) {
					this.props.dispatch({ type: 'SET_IS_GAME_ENDED' });
				}
				this.props.dispatch({ type: 'SET_CURRENT_PLAYER' });
			}
		}
	};
	render() {
		return <FieldLayout handleClick={this.handleClick} />;
	}
}

export const mapStateToProps = (state) => ({
	isDraw: state.isDraw,
	isGameEnded: state.isGameEnded,
	currentPlayer: state.currentPlayer,
	field: state.field,
});

export const FieldContainer = connect(mapStateToProps)(OldFieldContainer);

FieldContainer.propTypes = {
	field: PropTypes.array,
	handleClick: PropTypes.func,
};
