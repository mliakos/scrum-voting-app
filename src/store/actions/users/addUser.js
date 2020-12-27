import firebaseAddUser from "../../../firebase/users/addUser";
import setLocalStorage from "../../../utils/setLocalStorage";

const addUser = payload => (dispatch, getState, getFirebase) => {
	const firebase = getFirebase();
	const state = getState();

	const { username: value } = payload;

	const {
		users: { users: oldState }
	} = state;

	const config = {
		ref: "users/",
		payload,
		oldState,
		firebase,
		dispatch
	};

	setLocalStorage({ key: "username", value });

	firebaseAddUser(config);
};

export default addUser;
