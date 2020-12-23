const VotingArea = props => {
	const buttons = props.options.map(option => {
		return (
			<button
				type="button"
				className="px-4 m-2 inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
			>
				{option}
			</button>
		);
	});
	return (
		<div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200 max-w-lg my-10 p-5">
			<h3 className="text-lg leading-6 font-medium text-gray-900 inline">
				Cast your vote:
			</h3>
			{buttons}
		</div>
	);
};

export default VotingArea;
