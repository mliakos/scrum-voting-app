const Input = props => {
	return (
		<div>
			<label
				htmlFor={props.label}
				className="block text-sm font-medium text-gray-700"
			>
				{props.label}
			</label>
			<div>
				<input
					type="text"
					name={props.label}
					className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					placeholder={props.placeholder}
					onChange={props.handleChange}
				/>
			</div>
		</div>
	);
};

export default Input;
