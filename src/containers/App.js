import "./App.css";

import FeatureTitle from "../components/FeatureTitle";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import setupFeatureListeners from "../store/actions/feature/setupFirebaseListeners";

function App() {
	const dispatch = useDispatch();

	// Setting up listeners
	useEffect(() => {
		dispatch(setupFeatureListeners());
	}, []);

	return (
		<main className="max-w-7xl mx-auto my-5 px-4 sm:px-6 lg:px-8">
			<div className="flex flex-col flex-wrap max-w-3xl mx-auto mt-10">
				<div className="flex justify-center">
					<FeatureTitle />
				</div>
			</div>
		</main>
	);
}

export default App;
