import firebaseAddUser from "../../../firebase/users/addUser";

const addUser = payload => (dispatch, getState, getFirebase) => {
	const firebase = getFirebase();
	const state = getState();

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

	firebaseAddUser(config);
};

export default addUser;
