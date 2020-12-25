import React, { useState, useEffect } from "react";
import Input from "../Input/Input";

import { useDispatch, useSelector } from "react-redux";
import updateTitle from "../../store/actions/feature/updateTitle";

const FeatureTitle = props => {
	const state = useSelector(state => state.feature);
	const dispatch = useDispatch();

	// TODO: use useDebounce here too

	// useEffect(() => {
	// 	(async () => {
	// 		const res = await fetch(
	// 			"https://test-87a57-default-rtdb.firebaseio.com/",
	// 			{
	// 				mode: "no-cors"
	// 			}
	// 		);
	// 	})();
	// }, [title]);

	const handleTitleChange = event => {
		console.log(event);
		dispatch(updateTitle(event.target.value));
	};

	return (
		<div>
			<Input
				className="items-center mt-10 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				handleChange={handleTitleChange}
				value={state.title}
				placeholder="Feature title"
			/>
		</div>
	);
};

export default FeatureTitle;
