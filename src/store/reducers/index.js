import { combineReducers } from "redux";
import users from "./users";
import feature from "./feature";

export default combineReducers({
	users,
	feature
});
