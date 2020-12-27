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

// Listeners imports
import setupRootStateListeners from "../store/actions/setupFirebaseListeners";
import setupFeatureListeners from "../store/actions/users/setupFirebaseListeners";
import setupUsersListeners from "../store/actions/feature/setupFirebaseListeners";

const App = () => {
	//TODO: Write some tests
	//TODO: Add some comments

	const dispatch = useDispatch();
	const hidden = useSelector(state => state.users.hidden);

	// Setting up listeners
	useEffect(() => {
		dispatch(setupUsersListeners());
		dispatch(setupRootStateListeners());
		dispatch(setupFeatureListeners());

		return () => {
			// Detach listeners
		};
	}, []);

	const handleReset = () => {
		dispatch(resetVotes());
		dispatch(setTitle(""));
		dispatch(setHidden(true));
	};

	return (
		<main className="max-w-7xl mx-auto my-5 px-4 sm:px-6 lg:px-8">
			<Heading />
			<div className="flex flex-col flex-wrap max-w-3xl mx-auto mt-10">
				<div className="flex justify-center">
					<Button title="Reset" handleClick={handleReset} disabled={hidden} />
				</div>
				<div className="flex justify-center">
					<FeatureTitle />
				</div>
				<div className="flex justify-center">
					<VotingArea options={[1, 2, 3, 4, 5]} />
				</div>
				<div className="flex justify-center">
					<Users names={["mitsos", "user123", "dimitris"]} />
				</div>
			</div>
		</main>
	);
};

export default App;
