import { ADD_USER } from "../../constants/users";

const addUser = payload => (dispatch, getState) => {
	// async

	dispatch({
		type: ADD_USER,
		payload
	});
};

export default addUser;
