import PropTypes from 'prop-types';
import styles from './Field.module.css';
export const FieldLayout = ({ field, handleClick }) => {
	return (
		<div className={styles.fields} onClick={handleClick}>
			{field.map((item, index) => (
				<div
					className={`${styles.field} ${item ? 'isClicked' : ''}`}
					key={index}
					id={index}
				>
					{item}
				</div>
			))}
		</div>
	);
};

FieldLayout.propTypes = {
	field: PropTypes.array,
	handleClick: PropTypes.func,
};
