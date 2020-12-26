import { SET_USERS } from "../../constants/users";
import firebaseUpdateUser from "../../../firebase/users/updateUser";

const resetVotes = () => (dispatch, getState, getFirebase) => {
	const firebase = getFirebase();

	const usersState = getState().users;
	const { users: oldState } = usersState;

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

	const config = {
		ref: `users/`,
		payload: firebaseUpdatedState,
		oldState,
		firebase,
		dispatch,
		resetActionType: SET_USERS
	};

	firebaseUpdateUser(config);

	dispatch({
		type: SET_USERS,
		payload: reduxUpdatedState
	});
};

export default resetVotes;
