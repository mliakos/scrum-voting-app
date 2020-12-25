import { ADD_USER } from "../../constants/users";

const addUser = payload => (dispatch, getState, getFirebase) => {
	const firebase = getFirebase();

	firebase
		.ref("users")
		.push(payload)
		.then(ref => {
			// Save in local storage
			localStorage.setItem("userId", JSON.stringify(ref.key));

			dispatch({
				type: ADD_USER,
				payload: {
					...payload,
					id: ref.key
				}
			});
		});
};

export default addUser;
