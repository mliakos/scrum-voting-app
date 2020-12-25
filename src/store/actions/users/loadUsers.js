import { ADD_USER } from "../../constants/users";

const loadUsers = () => (dispatch, getState, getFirebase) => {
	const firebase = getFirebase();

	firebase
		.ref(`users`)
		.once("value")
		.then(snapshot => {
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
		});
};

export default loadUsers;
