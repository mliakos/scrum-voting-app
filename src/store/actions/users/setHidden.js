import { SET_HIDDEN } from "../../constants/users";

const setHidden = payload => (dispatch, getState, getFirebase) => {
	const firebase = getFirebase();

	firebase
		.ref(`hidden`)
		.set(payload)
		.then(error => {
			if (!error) {
				dispatch({
					type: SET_HIDDEN,
					payload
				});
			} else {
				alert("There was an error performing the request.");
			}
		});
};

export default setHidden;
