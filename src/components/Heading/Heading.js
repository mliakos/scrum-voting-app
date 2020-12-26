import Input from "../Input/Input";
import { useDispatch, useSelector } from "react-redux";
import updateUser from "../../store/actions/users/updateUser";

const Heading = props => {
	const dispatch = useDispatch();
	const state = useSelector(state => state.users);

	const currentUserId = JSON.parse(localStorage.getItem("userId"));

	const user = state.users.find(user => Object.keys(user)[0] === currentUserId);

	//TODO: Add successful update message

	const handleUserUpdate = event => {
		const updatedUser = {
			id: currentUserId,
			data: {
				...user[currentUserId],
				username: event.target.value
			}
		};

		dispatch(updateUser(updatedUser));
	};

	return (
		<div className="md:flex md:items-center md:justify-between">
			<div className="flex-1 min-w-0">
				<h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl">
					Scrum Voting App
				</h2>
			</div>
			<div className="mt-10 flex md:mt-0 md:ml-4 justify-center">
				<div>
					<label
						htmlFor="Username"
						className="block text-sm font-medium text-gray-700"
					>
						Username
					</label>
					<Input
						label="Username"
						placeholder="Type a username..."
						handleChange={event => handleUserUpdate(event)}
						value={user ? user[currentUserId].username : "Loading username..."}
						name="Username"
						className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						disabled={user ? false : true}
					/>
				</div>
			</div>
		</div>
	);
};

export default Heading;
