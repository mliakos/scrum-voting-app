import * as actionTypes from "../constants/users";

const initState = {
	users: [],
	hidden: true
};

const usersReducer = (state = initState, action) => {
	switch (action.type) {
		case actionTypes.ADD_USER: {
			return {
				...state,
				users: [...state.users, action.payload]
			};
		}

		case actionTypes.REMOVE_USER: {
			return {
				...state,
				users: state.users.filter(user => {
					const [stateUserId] = Object.keys(user);

					return action.payload !== stateUserId;
				})
			};
		}

		case actionTypes.UPDATE_USER: {
			return {
				...state,
				users: state.users.map(user => {
					const [stateUserId] = Object.keys(user);
					const [payloadUserId] = Object.keys(action.payload);

					if (stateUserId !== payloadUserId) return user;

					return action.payload;
				})
			};
		}

		case actionTypes.SET_HIDDEN: {
			return {
				...state,
				hidden: action.payload
			};
		}

		case actionTypes.SET_USERS:
			return {
				...state,
				users: action.payload
			};

		default:
			return state;
	}
};

export default usersReducer;
