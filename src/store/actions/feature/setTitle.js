import { SET_TITLE } from "../../constants/feature";

const setTitle = payload => (dispatch, getState, getFirebase) => {
	const firebase = getFirebase();

	firebase
		.ref(`feature/title`)
		.set(payload)
		.then(error => {
			if (!error) {
				dispatch({
					type: SET_TITLE,
					payload
				});
			} else {
				alert("There was an error performing the request.");
			}
		});
};

export default setTitle;
