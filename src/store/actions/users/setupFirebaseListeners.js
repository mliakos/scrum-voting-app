import getLocalStorage from "../../../utils/getLocalStorage";
import setLocalStorage from "../../../utils/setLocalStorage";

const setupUsersListener = () => (dispatch, getState, getFirebase) => {
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
		const user = snapshot.val();
		const { username } = user;
		const { key } = snapshot;

		if (username === getLocalStorage("username")) {
			// Save user id in local storage if it matches own username
			setLocalStorage({ key: "userId", value: key });
		}

		dispatch({
			type: "ADD_USER",
			payload: {
				[key]: user
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
