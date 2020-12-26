import { SET_HIDDEN } from "../../constants/users";
import firebaseSetHidden from "../../../firebase/users/setHidden";

const setHidden = payload => (dispatch, getState, getFirebase) => {
	const firebase = getFirebase();

	const {
		users: { hidden: oldState }
	} = getState();

	const config = {
		ref: "hidden",
		payload,
		oldState,
		firebase,
		dispatch
	};

	firebaseSetHidden(config);

	// Dispatch asynchronously to maintain a responsive UI
	dispatch({
		type: SET_HIDDEN,
		payload
	});
};

export default setHidden;
