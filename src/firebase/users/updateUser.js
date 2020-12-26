import debounce from "../../utils/debounce";

const updateUser = ({
	ref,
	payload,
	oldState,
	firebase,
	dispatch,
	resetActionType
}) => {
	firebase
		.ref(ref)
		.set(payload)
		.then(error => {
			// Revert to old state in case of error
			if (error) {
				dispatch({
					type: resetActionType,
					payload: oldState
				});

				alert("There was an error performing the request.");
			}
		});
};

export default debounce(updateUser, 500);
