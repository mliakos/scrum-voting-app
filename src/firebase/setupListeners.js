const setupRootStateListeners = () => (dispatch, getState, getFirebase) => {
	const firebase = getFirebase();
	const dbRef = firebase.database().ref();

	/* Hidden state loading and updates handling */
	dbRef.on("value", snapshot => {
		dispatch({
			type: "SET_HIDDEN",
			payload: snapshot.val().hidden
		});
	});
};

export default setupRootStateListeners;
