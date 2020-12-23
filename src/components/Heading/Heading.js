import Input from "./Input/Input";

const Heading = props => {
	return (
		<div className="md:flex md:items-center md:justify-between">
			<div className="flex-1 min-w-0">
				<h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl">
					Scrum Voting App
				</h2>
			</div>
			<div className="mt-4 flex md:mt-0 md:ml-4 justify-center">
				<Input label="Username" placeholder="Type a username..." />
			</div>
		</div>
	);
};

export default Heading;
