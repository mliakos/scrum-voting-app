import { SET_TITLE } from "../../store/constants/feature";

const setupFeatureListeners = () => (dispatch, getState, getFirebase) => {
	const firebase = getFirebase();
	const featureRef = firebase.database().ref("feature");

	/* Title loading and updates handling */
	featureRef.on("value", snapshot => {
		dispatch({
			type: SET_TITLE,
			payload: snapshot.val().title
		});
	});
};

export default setupFeatureListeners;
