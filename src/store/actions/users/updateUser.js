import { UPDATE_USER } from "../../constants/users";

const updateUser = payload => (dispatch, getState, getFirebase) => {
	const firebase = getFirebase();
	console.log(payload);
	firebase
		.ref(`users/`)
		.set(payload)
		.then(error => {
			if (!error) {
				dispatch({
					type: UPDATE_USER,
					payload
				});
			} else {
				alert("There was an error performing the request.");
			}
		});
};

export default updateUser;
