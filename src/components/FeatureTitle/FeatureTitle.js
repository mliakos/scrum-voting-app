import Input from "../Input/Input";

import { useDispatch, useSelector } from "react-redux";

import setTitle from "../../store/actions/feature/setTitle";

const FeatureTitle = props => {
	const title = useSelector(state => state.feature.title);
	const dispatch = useDispatch();

	const handleTitleChange = event => {
		dispatch(setTitle(event.target.value));
	};

	return (
		<div>
			<Input
				className="items-center mt-10 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				handleChange={handleTitleChange}
				value={title === null ? "Loading title..." : title}
				placeholder="Feature title"
				disabled={title === null ? true : false}
			/>
		</div>
	);
};

export default FeatureTitle;
