import { SET_HIDDEN } from "./types";

const setHidden = payload => {
	return {
		type: SET_HIDDEN,
		payload
	};
};

export default setHidden;
