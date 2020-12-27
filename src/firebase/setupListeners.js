const setupRootStateListeners = () => (dispatch, getState, getFirebase) => {
	const firebase = getFirebase();
	const dbRef = firebase.database().ref();

	/* Hidden state loading and updates handling */
	dbRef.on("child_changed", snapshot => {
		dispatch({
			type: "SET_HIDDEN",
			payload: snapshot.val()
		});
	});
};

export default setupRootStateListeners;
