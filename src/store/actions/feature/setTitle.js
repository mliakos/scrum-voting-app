import { SET_TITLE } from "../../constants/feature";

const setTitle = payload => (dispatch, getState, getFirebase) => {
	const firebase = getFirebase();
	const state = getState();

	const oldTitle = state.feature.title;

	firebase
		.ref(`feature/title`)
		.set(payload)
		.then(error => {
			// Revert to old state in case of error
			if (error) {
				dispatch({
					type: SET_TITLE,
					payload: oldTitle
				});
				alert("There was an error performing the request.");
			}
		});

	// Dispatch asynchronously to maintain a responsive UI
	dispatch({
		type: SET_TITLE,
		payload
	});
};

export default setTitle;
