import Heading from "../components/Heading/Heading";
import Button from "../components/Button/Button";
import FeatureTitle from "../components/FeatureTitle/FeatureTitle";
import VotingArea from "../components/VotingArea/VotingArea";
import Users from "../components/Users/Users";
import "./App.css";

import { useDispatch } from "react-redux";
import resetVotes from "../store/actions/users/resetVotes";
import setHidden from "../store/actions/users/setHidden";
import setTitle from "../store/actions/feature/setTitle";

const App = () => {
	//TODO: Add realtime event handlers

	const dispatch = useDispatch();

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
					<Button title="Reset" handleClick={handleReset} />
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
