import { UPDATE_USER } from "../../constants/users";

const updateUser = ({ id, data }) => (dispatch, getState, getFirebase) => {
	const firebase = getFirebase();
	const state = getState();

	const [oldUser] = state.users.users.filter(user => user[id]);

	firebase
		.ref(`users/${id}`)
		.set(data)
		.then(error => {
			// Revert to old state in case of error
			if (error) {
				dispatch({
					type: UPDATE_USER,
					payload: oldUser
				});
				alert("There was an error performing the request.");
			}
		});

	// Dispatch asynchronously to maintain a responsive UI
	dispatch({
		type: UPDATE_USER,
		payload: {
			[id]: data
		}
	});
};

export default updateUser;
