import Input from "./Input/Input";
import { useDispatch, useSelector } from "react-redux";
import updateUser from "../../store/actions/updateUser";

const Heading = props => {
	const dispatch = useDispatch();
	const state = useSelector(state => state.users);

	//TODO: Add debounce
	const handleUserUpdate = event => {
		const currentUser = JSON.parse(localStorage.getItem("user"));
		const user = state.users.find(user => user.id === currentUser.id);
		const updatedUser = { ...user, username: event.target.value };

		dispatch(updateUser(updatedUser));

		// Save in local storage
		localStorage.setItem("user", JSON.stringify(updatedUser));
	};

	return (
		<div className="md:flex md:items-center md:justify-between">
			<div className="flex-1 min-w-0">
				<h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl">
					Scrum Voting App
				</h2>
			</div>
			<div className="mt-10 flex md:mt-0 md:ml-4 justify-center">
				<Input
					label="Username"
					placeholder="Type a username..."
					handleChange={event => handleUserUpdate(event)}
				/>
			</div>
		</div>
	);
};

export default Heading;
