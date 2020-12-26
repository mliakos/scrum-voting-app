import { SET_TITLE } from "../../constants/feature";

const loadTitle = () => async (dispatch, getState, getFirebase) => {
	const firebase = getFirebase();

	const snapshot = await firebase.ref(`feature/title`).once("value");

	const title = snapshot.val();

	if (title) {
		dispatch({
			type: SET_TITLE,
			payload: title
		});
	}
};

export default loadTitle;
