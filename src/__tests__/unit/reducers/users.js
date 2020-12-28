import reducer from "../../../store/reducers/users";
import * as actionTypes from "../../../store/constants/users";

let initState;

beforeEach(() => {
	initState = {
		users: [
			{
				test_id: {
					username: "test_user"
				}
			}
		],
		hidden: true
	};
});

describe("Users reducer", () => {
	it("ADD_USER should successfully add a user", () => {
		const action = {
			type: actionTypes.ADD_USER,
			payload: {
				test_id_2: {
					username: "test_user_2"
				}
			}
		};

		const { users } = reducer(initState, action);
		const [, addedUser] = users;
		const [id] = Object.keys(addedUser);
		const {
			[id]: { username }
		} = addedUser;

		expect(id).toEqual("test_id_2");
		expect(username).toEqual("test_user_2");
	});

	it("REMOVE_USER should successfully remove a user", () => {
		const action = {
			type: actionTypes.REMOVE_USER,
			payload: "test_id"
		};

		const { users: oldUsers } = initState;
		const { users: newUsers } = reducer(initState, action);

		expect(newUsers).not.toEqual(expect.arrayContaining(oldUsers));
	});

	it("UPDATE_USER should successfully update a user", () => {
		const action = {
			type: actionTypes.UPDATE_USER,
			payload: {
				test_id: {
					username: "test_user_updated"
				}
			}
		};

		const { users } = reducer(initState, action);
		const [addedUser] = users;
		const [id] = Object.keys(addedUser);
		const {
			[id]: { username }
		} = addedUser;

		expect(id).toEqual("test_id");
		expect(username).toEqual("test_user_updated");
	});

	it("SET_USERS should successfully set the whole users state", () => {
		const action = {
			type: actionTypes.SET_USERS,
			payload: ["test"]
		};

		const { users } = reducer(initState, action);
		const [addedUser] = users;

		expect(addedUser).toEqual("test");
	});

	it("SET_HIDDEN should successfully set hidden state", () => {
		const action = {
			type: actionTypes.SET_HIDDEN,
			payload: false
		};

		const { hidden } = reducer(initState, action);

		expect(hidden).toEqual(false);
	});
});
