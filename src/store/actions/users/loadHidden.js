import { SET_HIDDEN } from "../../constants/users";
import firebaseLoadHidden from "../../../firebase/users/loadHidden";

const loadHidden = () => async (dispatch, getState, getFirebase) => {
	const firebase = getFirebase();

	const payload = await firebaseLoadHidden({ firebase });

	dispatch({
		type: SET_HIDDEN,
		payload
	});

	Promise.resolve();
};

export default loadHidden;
