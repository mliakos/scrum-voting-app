import React, { useState, useEffect } from "react";
import Input from "../Input/Input";

import { useDispatch, useSelector } from "react-redux";

import setTitle from "../../store/actions/feature/setTitle";
import loadTitle from "../../store/actions/feature/loadTitle";

const FeatureTitle = props => {
	const state = useSelector(state => state.feature);
	const dispatch = useDispatch();

	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);

		dispatch(loadTitle()).then(() => {
			setLoading(false);
		});
	}, []);

	const handleTitleChange = event => {
		dispatch(setTitle(event.target.value));
	};

	return (
		<div>
			<Input
				className="items-center mt-10 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				handleChange={handleTitleChange}
				value={loading ? "Loading title..." : state.title}
				placeholder="Feature title"
				disabled={loading}
			/>
		</div>
	);
};

export default FeatureTitle;
