import { ADD_USER } from "../../constants/users";

const loadUsers = () => async (dispatch, getState, getFirebase) => {
	const firebase = getFirebase();

	const snapshot = await firebase.ref(`users`).once("value");

	const users = snapshot.val();

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
