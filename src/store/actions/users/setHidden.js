import { SET_HIDDEN } from "../../constants/users";

const setHidden = payload => {
	return {
		type: SET_HIDDEN,
		payload
	};
};

export default setHidden;
