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

		case "UPDATE_USER": {
			return {
				...state,
				users: [...state.users].map(user => {
					const [stateUserId] = Object.keys(user);
					const [payloadUserId] = Object.keys(action.payload);

					if (stateUserId !== payloadUserId) return user;

					return action.payload;
				})
			};
		}

		case "SET_HIDDEN": {
			return {
				...state,
				hidden: action.payload
			};
		}

		case "RESET_VOTES":
			return {
				...state,
				users: [...state.users].map(user => ({ ...user, vote: null }))
			};

		default:
			return state;
	}
};

export default usersReducer;
