import Card from "../Card/Card";
import updateUser from "../../store/actions/updateUser";
import { useDispatch, useSelector } from "react-redux";

const VotingArea = props => {
	const dispatch = useDispatch();
	const state = useSelector(state => state.users);

	const handleVoteUpdate = event => {
		const currentUser = JSON.parse(localStorage.getItem("user"));
		const user = state.users.find(user => user.id === currentUser.id);
		const updatedUser = { ...user, vote: event.target.innerText };

		dispatch(updateUser(updatedUser));

		// Save in local storage
		localStorage.setItem("user", JSON.stringify(updatedUser));
	};

	const buttons = props.options.map((option, index) => {
		return (
			<button
				type="button"
				className="px-4 py-2 m-2 inline-flex items-center  border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				key={index}
				onClick={event => handleVoteUpdate(event)}
			>
				{option}
			</button>
		);
	});

	return (
		<Card className="p-5 my-10">
			<h3 className="text-lg leading-6 font-medium text-gray-900 inline">
				Cast your vote:
			</h3>
			{buttons}
		</Card>
	);
};

export default VotingArea;
