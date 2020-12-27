import debounce from "../utils/debounce";
import { SET_HIDDEN } from "../store/constants/users";

const setHidden = ({ ref, payload, oldState, firebase, dispatch }) => {
	firebase
		.ref(ref)
		.set(payload)
		.then(error => {
			// Revert to old state in case of error
			if (error) {
				dispatch({
					type: SET_HIDDEN,
					payload: oldState
				});

				alert("There was an error performing the request.");
			}
		});
};

export default debounce(setHidden, 500);
