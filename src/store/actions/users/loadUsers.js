import { ADD_USER } from "../../constants/users";
import firebaseLoadUsers from "../../../firebase/users/loadUsers";

const loadUsers = () => async (dispatch, getState, getFirebase) => {
	const firebase = getFirebase();

	const users = await firebaseLoadUsers({ firebase });

	if (users) {
		// Dispatching action for each loaded user
		//TODO: Maybe create a separate action 'ADD_USERS'

		for (const [userId, user] of Object.entries(users)) {
			dispatch({
				type: ADD_USER,
				payload: {
					[userId]: user
				}
			});
		}
	}

	return Promise.resolve();
};

export default loadUsers;
