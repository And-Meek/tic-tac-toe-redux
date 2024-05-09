import PropTypes from 'prop-types';
//import styles from './Information.module.css';
import { Component } from 'react';

// export const InformationLayout = ({ result }) => {
// 	return <div className={styles.information}>{result}</div>;
// };

export class InformationLayout extends Component {
	render() {
		return <div className="mb-[50px]">{this.props.result}</div>;
	}
}

InformationLayout.propTypes = {
	result: PropTypes.string,
};
