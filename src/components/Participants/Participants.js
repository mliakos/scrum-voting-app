import Participant from "./Participant/Participant";
import Button from "../Button/Button";

const Participants = props => {
	const participantsList = (
		<div className="flow-root">
			<ul className="divide-y divide-gray-200">
				{props.names.map(participant => {
					return (
						<li className="py-4">
							<Participant name="test" />
						</li>
					);
				})}
			</ul>
		</div>
	);

	return (
		<div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200 my-10">
			<div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
				<div className="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
					<div className="ml-4 mt-2">
						<h3 className="text-lg leading-6 font-medium text-gray-900">
							Participants
						</h3>
					</div>
					<div className="ml-4 mt-2 flex-shrink-0">
						<Button title="Reveal!" />
					</div>
				</div>
			</div>
			<div className="px-4 py-5 sm:p-3">{participantsList}</div>
		</div>
	);
};

export default Participants;
