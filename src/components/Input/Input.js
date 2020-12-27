import React from "react";

const Input = props => {
	const label = props.label ? (
		<label
			htmlFor={props.name}
			className="block text-sm font-medium text-gray-700"
		>
			{props.label}
		</label>
	) : null;

	return (
		<React.Fragment>
			{label}
			<input
				type="text"
				name={props.name}
				className={props.className}
				placeholder={props.placeholder}
				onChange={props.handleChange}
				value={props.value}
				disabled={props.disabled}
			/>
		</React.Fragment>
	);
};

export default Input;
