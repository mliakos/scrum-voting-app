import Card from "../Card/Card";
import updateUser from "../../store/actions/users/updateUser";
import { useDispatch, useSelector } from "react-redux";
import getUid from "../../utils/getUid";

const VotingArea = props => {
	const dispatch = useDispatch();
	const state = useSelector(state => state.users);

	const currentUserId = getUid();
	const user = state.users.find(user => Object.keys(user)[0] === currentUserId);

	const { vote } = user ? user[currentUserId] : { vote: null };

	const handleVoteUpdate = event => {
		const updatedUser = {
			id: currentUserId,
			data: {
				...user[currentUserId],
				vote: Number(event.target.innerText)
			}
		};

		dispatch(updateUser(updatedUser));
	};

	const buttons = props.options.map((option, index) => {
		const selectedClass =
			vote === Number(option)
				? "outline-none ring-2 ring-offset-2 ring-indigo-500"
				: "";
		return (
			<button
				type="button"
				className={`${selectedClass} px-4 py-2 m-2 inline-flex items-center  border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none`}
				key={index}
				onClick={event => handleVoteUpdate(event)}
				disabled={user ? false : true}
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
