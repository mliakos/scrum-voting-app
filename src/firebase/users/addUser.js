import { SET_USERS } from "../../store/constants/users";

const addUser = ({ ref, payload, oldState, firebase, dispatch }) => {
	firebase
		.ref(ref)
		.push(payload)

		.catch(e => {
			// Revert to old state in case of error
			dispatch({
				type: SET_USERS,
				payload: oldState
			});

			alert("There was an error performing the request.");
		});
};

export default addUser;
