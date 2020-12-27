import addUser from "../store/actions/users/addUser";

const createDefaultUser = dispatch => {
	const suffix = Math.random().toString(20).substr(2, 6);

	const payload = {
		username: `user_${suffix}`
	};

	dispatch(addUser(payload));
};

export default createDefaultUser;
