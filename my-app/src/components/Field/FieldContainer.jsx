import PropTypes from 'prop-types';
import { FieldLayout } from './FieldLayout';

export const FieldContainer = ({ field, handleClick }) => {
	return <FieldLayout field={field} handleClick={handleClick} />;
};

FieldContainer.propTypes = {
	field: PropTypes.array,
	handleClick: PropTypes.func,
};
