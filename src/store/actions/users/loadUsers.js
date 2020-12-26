import { ADD_USER } from "../../constants/users";

const loadUsers = () => async (dispatch, getState, getFirebase) => {
	const firebase = getFirebase();

	const snapshot = await firebase.ref(`users`).once("value");

	const users = snapshot.val();

	if (users) {
		// Dispatching multiple actions
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
