import { UPDATE_USER } from "../../constants/users";

const addUser = payload => (dispatch, getState) => {
	// async

	dispatch({
		type: UPDATE_USER,
		payload
	});
};

export default addUser;
