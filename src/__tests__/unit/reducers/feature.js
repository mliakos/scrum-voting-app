import reducer from "../../../store/reducers/feature";
import * as actionTypes from "../../../store/constants/feature";

let initState;

beforeEach(() => {
	initState = {
		title: null
	};
});

describe("Feature reducer", () => {
	it("SET_TITLE should successfully add a user", () => {
		const action = {
			type: actionTypes.SET_TITLE,
			payload: "test_title"
		};

		const { title } = reducer(initState, action);

		expect(title).toEqual("test_title");
	});
});
