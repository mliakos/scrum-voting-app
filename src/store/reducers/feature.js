const initState = {
	title: ""
};

const featureReducer = (state = initState, action) => {
	switch (action.type) {
		case "SET_TITLE": {
			return {
				title: action.payload
			};
		}

		default:
			return state;
	}
};

export default featureReducer;
