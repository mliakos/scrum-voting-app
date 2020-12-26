import { SET_TITLE } from "../../constants/feature";
import firebaseLoadTitle from "../../../firebase/feature/loadTitle";

const loadTitle = () => async (dispatch, getState, getFirebase) => {
	const firebase = getFirebase();

	const title = await firebaseLoadTitle({ firebase });

	if (title) {
		dispatch({
			type: SET_TITLE,
			payload: title
		});
	}

	Promise.resolve();
};

export default loadTitle;
