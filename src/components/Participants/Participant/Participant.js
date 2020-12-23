const Participant = props => {
	return (
		<div className="flex space-x-3">
			<img
				className="h-6 w-6 rounded-full"
				src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
				alt=""
			/>
			<div className="flex-1 space-y-1">
				<div className="flex items-center justify-between">
					<h3 className="text-sm font-medium">{props.name}</h3>
					<p className="text-sm text-gray-500">Voted!</p>
				</div>
			</div>
		</div>
	);
};

export default Participant;
