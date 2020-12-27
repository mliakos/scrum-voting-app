const setupUsersListener = payload => (dispatch, getState, getFirebase) => {
	const firebase = getFirebase();
	const usersRef = firebase.database().ref("users");

	/* User updates handling */
	usersRef.on("child_changed", snapshot => {
		const { key } = snapshot;

		dispatch({
			type: "UPDATE_USER",
			payload: {
				[key]: snapshot.val()
			}
		});
	});

	/* Users loading and new user handling */
	usersRef.on("child_added", snapshot => {
		const { key } = snapshot;

		// Save in local storage
		localStorage.setItem("userId", JSON.stringify(key));

		dispatch({
			type: "ADD_USER",
			payload: {
				[key]: snapshot.val()
			}
		});
	});

	/* User removal handling */
	usersRef.on("child_removed", snapshot => {
		const { key } = snapshot;

		dispatch({
			type: "REMOVE_USER",
			payload: key
		});
	});
};

export default setupUsersListener;
