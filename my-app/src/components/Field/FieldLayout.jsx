import PropTypes from 'prop-types';
//import styles from './Field.module.css';
import { /*useSelector,*/ connect } from 'react-redux';
//import { selectField } from '../selectors';
import { Component } from 'react';

// export const FieldLayout = ({ handleClick }) => {
// 	const field = useSelector(selectField);
// 	return (
// 		<div className={styles.fields} onClick={handleClick}>
// 			{field.map((item, index) => (
// 				<div
// 					className={`${styles.field} ${item ? 'isClicked' : ''}`}
// 					key={index}
// 					id={index}
// 				>
// 					{item}
// 				</div>
// 			))}
// 		</div>
// 	);
// };

export class OldFieldLayout extends Component {
	render() {
		return (
			<div
				className="bg-inherit w-[255px] h-[255px] flex flex-wrap justify-around items-center"
				onClick={this.props.handleClick}
			>
				{this.props.field.map((item, index) => (
					<div
						className={`flex bg-inherit w-20 h-20 justify-center items-center transition-shadow duration-[0.4s] p-2.5 rounded-[20px] border-[aliceblue] border-2 border-solid hover:cursor-pointer hover:shadow-[4px_4px_100px_80px_rgba(212,214,216,0.2)_inset]
					 ${item ? 'isClicked' : ''}`}
						key={index}
						id={index}
					>
						{item}
					</div>
				))}
			</div>
		);
	}
}

export const mapStateToProps = (state) => ({
	isDraw: state.isDraw,
	isGameEnded: state.isGameEnded,
	currentPlayer: state.currentPlayer,
	field: state.field,
});

export const FieldLayout = connect(mapStateToProps)(OldFieldLayout);

FieldLayout.propTypes = {
	field: PropTypes.array,
	handleClick: PropTypes.func,
};
