import { UPDATE_TITLE } from "../../constants/feature";

const addUser = payload => (dispatch, getState) => {
	// async

	dispatch({
		type: UPDATE_TITLE,
		payload
	});
};

export default addUser;
