import PropTypes from 'prop-types';
import styles from './Information.module.css';

export const InformationLayout = ({ result }) => {
	return <div className={styles.information}>{result}</div>;
};

InformationLayout.propTypes = {
	result: PropTypes.string,
};
