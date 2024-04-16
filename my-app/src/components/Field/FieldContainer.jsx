import PropTypes from 'prop-types';
import { FieldLayout } from './FieldLayout';

export const FieldContainer = ({ handleClick }) => {
	return <FieldLayout handleClick={handleClick} />;
};

FieldContainer.propTypes = {
	field: PropTypes.array,
	handleClick: PropTypes.func,
};
