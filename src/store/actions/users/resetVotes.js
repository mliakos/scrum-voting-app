import { RESET_VOTES } from "../../constants/users";

const resetVotes = () => (dispatch, getState) => {
	// async
	dispatch({
		type: RESET_VOTES
	});
};

export default resetVotes;
