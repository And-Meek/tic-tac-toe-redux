import { Component } from 'react';
//import styles from './Game.module.css';
import { FieldContainer } from './components/Field/FieldContainer';
import { InformationContainer } from './components/Information/InformationContainer';

// export const GameLayout = ({ handleClick, handleResetButton }) => {
// 	return (
// 		<div className={styles.App}>
// 			<InformationContainer />
// 			<FieldContainer
// 			// handleClick={handleClick}
// 			/>
// 			<button className={styles.btn} onClick={handleResetButton}>
// 				Начать заново
// 			</button>
// 		</div>
// 	);
// };

export class GameLayout extends Component {
	render() {
		return (
			// <div className={styles.App}>
			<div className="bg-[#282c34] min-h-screen flex flex-col items-center justify-center text-[calc(10px_+_2vmin)] text-[aliceblue]">
				<InformationContainer />
				<FieldContainer />
				<button
					className="w-[255px] h-[50px] bg-inherit text-[aliceblue] cursor-pointer [font-family:inherit] text-2xl mt-[50px] rounded-[20px] border-[aliceblue] border-2 hover:shadow-[4px_4px_100px_80px_rgba(212,214,216,0.2)_inset]"
					onClick={this.props.handleResetButton}
				>
					Начать заново
				</button>
			</div>
		);
	}
}
