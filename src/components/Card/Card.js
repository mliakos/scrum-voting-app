const Card = props => {
	return (
		<div
			className={`${props.className} bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200`}
		>
			{props.children}
		</div>
	);
};

export default Card;
