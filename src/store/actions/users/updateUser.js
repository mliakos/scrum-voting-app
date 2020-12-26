import { UPDATE_USER } from "../../constants/users";

const updateUser = ({ id, data }) => (dispatch, getState, getFirebase) => {
	const firebase = getFirebase();

	firebase
		.ref(`users/${id}`)
		.set(data)
		.then(error => {
			if (!error) {
				dispatch({
					type: UPDATE_USER,
					payload: {
						[id]: data
					}
				});
			} else {
				alert("There was an error performing the request.");
			}
		});
};

export default updateUser;
