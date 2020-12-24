import { ADD_USER } from "./types";

const addUser = payload => (dispatch, getState) => {
	// async

	dispatch({
		type: ADD_USER,
		payload
	});
};

export default addUser;
