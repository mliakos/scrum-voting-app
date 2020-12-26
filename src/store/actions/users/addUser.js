import { ADD_USER, SET_USERS } from "../../constants/users";
import firebaseAddUser from "../../../firebase/users/updateUser";

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

	firebase
		.ref("users")
		.push(payload)
		.then(ref => {
			// Save in local storage
			localStorage.setItem("userId", JSON.stringify(ref.key));

			dispatch({
				type: ADD_USER,
				payload: {
					[ref.key]: payload
				}
			});
		});
};

export default addUser;
