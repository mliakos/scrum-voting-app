import { ADD_USER } from "../../constants/users";

const loadUser = ({ userId }) => (dispatch, getState, getFirebase) => {
	const firebase = getFirebase();

	firebase
		.ref(`users/${userId}`)
		.once("value")
		.then(snapshot => {
			const user = snapshot.val();

			const { key } = user;

			dispatch({
				type: ADD_USER,
				payload: {
					...user,
					id: key
				}
			});
		});
};

export default loadUser;
