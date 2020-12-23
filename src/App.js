import Heading from "./components/Heading/Heading";
import Button from "./components/Button/Button";
import FeatureTitle from "./components/FeatureTitle/FeatureTitle";
import VotingArea from "./components/VotingArea/VotingArea";
import Participants from "./components/Participants/Participants";
import "./App.css";

function App() {
	return (
		<main className="max-w-7xl mx-auto my-5 px-4 sm:px-6 lg:px-8">
			<Heading />
			<div className="flex flex-col flex-wrap max-w-3xl mx-auto mt-20">
				<div className="flex justify-center">
					<Button title="Reset" />
				</div>
				<div className="flex justify-center">
					<FeatureTitle />
				</div>
				<div className="flex justify-center">
					<VotingArea options={[1, 2, 3, 4, 5]} />
				</div>
				<div className="flex justify-center">
					<Participants names={["mitsos", "user123", "dimitris"]} />
				</div>
			</div>
		</main>
	);
}

export default App;
