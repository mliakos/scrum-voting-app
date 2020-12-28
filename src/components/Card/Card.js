import PropTypes from "prop-types";

const Card = props => {
	return (
		<div
			className={`${props.className} bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200`}
		>
			{props.children}
		</div>
	);
};

Card.propTypes = {
	className: PropTypes.string
};

export default Card;
