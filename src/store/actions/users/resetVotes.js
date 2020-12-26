import { RESET_VOTES } from "../../constants/users";

const resetVotes = () => (dispatch, getState, getFirebase) => {
	const firebase = getFirebase();

	const usersState = getState().users;

	const reduxUpdatedState = usersState.users.map(user => {
		const [id] = Object.keys(user);
		const [values] = Object.values(user);

		return { [id]: { ...values, vote: null } };
	});

	const firebaseUpdatedState = reduxUpdatedState.reduce((acc, user) => {
		const [id] = Object.keys(user);
		const [values] = Object.values(user);

		acc[id] = values;

		return acc;
	}, {});

	firebase
		.ref(`users/`)
		.set(firebaseUpdatedState)
		.then(error => {
			if (!error) {
				dispatch({
					type: RESET_VOTES,
					payload: reduxUpdatedState
				});
			} else {
				alert("There was an error performing the request.");
			}
		});
};

export default resetVotes;
