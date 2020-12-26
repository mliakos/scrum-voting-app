import debounce from "../../utils/debounce";
import { ADD_USER, SET_USERS } from "../../constants/users";

const addUser = ({ ref, payload, oldState, firebase, dispatch }) => {
	firebase
		.ref(ref)
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
		})
		.catch(e => {
			// Revert to old state in case of error
			dispatch({
				type: SET_USERS,
				payload: oldState
			});

			alert("There was an error performing the request.");
		});
};

export default debounce(addUser, 500);
