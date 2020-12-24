const initState = {
	users: [],
	hidden: true
};

const usersReducer = (state = initState, action) => {
	switch (action.type) {
		case "ADD_USER": {
			return {
				...state,
				users: [...state.users, action.payload]
			};
		}

		case "SET_HIDDEN": {
			return {
				...state,
				hidden: action.payload
			};
		}

		default:
			return state;
	}
};

export default usersReducer;
