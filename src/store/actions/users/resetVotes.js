import { RESET_VOTES } from "../../constants/users";

const resetVotes = () => (dispatch, getState) => {
	// async
	console.log(getState("users"));
	dispatch({
		type: RESET_VOTES
	});
};

export default resetVotes;
