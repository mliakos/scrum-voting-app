import Input from "../../Input/Input";
import { useDispatch, useSelector } from "react-redux";
import updateUser from "../../../store/actions/users/updateUser";

// Utility imports
import getLocalStorage from "../../../utils/getLocalStorage";

const UserName = () => {
	const dispatch = useDispatch();
	const state = useSelector(state => state.users);

	const currentUserId = getLocalStorage("userId");

	const user = state.users.find(user => Object.keys(user)[0] === currentUserId);

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
		<Input
			label="Username"
			placeholder="Type a username..."
			handleChange={event => handleUserUpdate(event)}
			value={user ? user[currentUserId].username : "Loading username..."}
			name="username"
			className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
			disabled={user ? false : true}
		/>
	);
};

export default UserName;
