const Input = props => {
	return (
		<input
			type="text"
			name={props.name}
			className={props.className}
			placeholder={props.placeholder}
			onChange={props.handleChange}
			value={props.value}
			disabled={props.disabled}
		/>
	);
};

export default Input;
