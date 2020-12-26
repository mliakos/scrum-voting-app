import { UPDATE_USER } from "../../constants/users";
import firebaseUpdateUser from "../../../firebase/users/updateUser";

const updateUser = ({ id, data }) => (dispatch, getState, getFirebase) => {
	const firebase = getFirebase();
	const state = getState();

	const [oldState] = state.users.users.filter(user => user[id]);

	const config = {
		ref: `users/${id}`,
		payload: data,
		oldState,
		firebase,
		dispatch,
		resetActionType: UPDATE_USER
	};

	firebaseUpdateUser(config);

	// Dispatch asynchronously to maintain a responsive UI
	dispatch({
		type: UPDATE_USER,
		payload: {
			[id]: data
		}
	});
};

export default updateUser;
