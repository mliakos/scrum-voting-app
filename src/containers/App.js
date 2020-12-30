import Heading from "../components/Heading/Heading";
import Button from "../components/Button/Button";
import FeatureTitle from "../components/FeatureTitle/FeatureTitle";
import VotingArea from "../components/VotingArea/VotingArea";
import Users from "../components/Users/Users";
import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import resetVotes from "../store/actions/users/resetVotes";
import setHidden from "../store/actions/setHidden";
import setTitle from "../store/actions/feature/setTitle";
import removeUser from "../store/actions/users/removeUser";

// Listeners imports
import setupRootStateListeners from "../store/actions/setupFirebaseListeners";
import setupFeatureListeners from "../store/actions/users/setupFirebaseListeners";
import setupUsersListeners from "../store/actions/feature/setupFirebaseListeners";
import getLocalStorage from "../utils/getLocalStorage";

import createDefaultUser from "../common/createDefaultUser";

const App = () => {
	const dispatch = useDispatch();
	const hidden = useSelector(state => state.users.hidden);

	// Setting up listeners
	useEffect(() => {
		dispatch(setupUsersListeners());
		dispatch(setupRootStateListeners());
		dispatch(setupFeatureListeners());
	}, []);

	const handleReset = () => {
		dispatch(resetVotes());
		dispatch(setTitle(""));
		dispatch(setHidden(true));
	};

	const handleRefreshUser = () => {
		dispatch(removeUser(getLocalStorage("userId")));
		createDefaultUser(dispatch);
	};

	return (
		<main className="max-w-7xl mx-auto my-5 px-4 sm:px-6 lg:px-8">
			<Heading />
			<div className="flex flex-col flex-wrap max-w-3xl mx-auto mt-10">
				<div className="flex justify-center">
					<Button
						title="Reset Session"
						handleClick={handleReset}
						disabled={hidden}
						className="mr-3"
					/>
					<Button
						title="Refresh User"
						handleClick={handleRefreshUser}
						disabled={false}
						className="ml-3"
					/>
				</div>
				<div className="flex justify-center">
					<FeatureTitle />
				</div>
				<div className="flex justify-center">
					<VotingArea options={[1, 2, 3, 4, 5]} />
				</div>
				<div className="flex justify-center">
					<Users />
				</div>
			</div>
		</main>
	);
};

export default App;
