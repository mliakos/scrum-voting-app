import firebaseRemoveUser from "../../../firebase/users/removeUser";
import removeLocalStorage from "../../../utils/removeLocalStorage";

const removeUser = payload => (dispatch, getState, getFirebase) => {
	const firebase = getFirebase();
	const state = getState();
	const {
		users: { users: oldState }
	} = state;

	const config = {
		ref: `users/${payload}`,
		oldState,
		firebase,
		dispatch
	};

	removeLocalStorage("userId");
	removeLocalStorage("username");

	firebaseRemoveUser(config);
};

export default removeUser;
