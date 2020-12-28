import PropTypes from "prop-types";
import debounce from "../../utils/debounce";

const Button = props => {
	return (
		<button
			type="button"
			className={`${props.className} relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
			onClick={debounce(props.handleClick, 500)}
			disabled={props.disabled}
		>
			{props.title}
		</button>
	);
};

Button.propTypes = {
	className: PropTypes.string,
	onClick: PropTypes.func,
	disabled: PropTypes.bool.isRequired
};

export default Button;
