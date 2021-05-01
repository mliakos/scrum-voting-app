import { SET_TITLE } from "../../constants/feature";

// This will handle logic relevant ONLY to firebase update, not Redux state
import firebaseUpdateTitle from "../../../firebase/feature/updateTitle";

const setTitle = payload => (dispatch, getState, getFirebase) => {
	const firebase = getFirebase();
	const state = getState();

	// Getting old title
	const {
		feature: { title: oldState }
	} = state;

	const config = {
		ref: "feature/title",
		payload,
		oldState,
		firebase,
		dispatch
	};

	firebaseUpdateTitle(config);

	// Dispatch asynchronously to maintain a responsive UI
	dispatch({
		type: SET_TITLE,
		payload
	});
};

export default setTitle;
