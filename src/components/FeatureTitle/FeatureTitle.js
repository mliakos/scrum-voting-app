import React, { useState, useEffect } from "react";

const FeatureTitle = props => {
	const [title, setTitle] = useState("");

	// TODO: use useDebounce here too

	useEffect(() => {
		(async () => {
			const res = await fetch(
				"https://test-87a57-default-rtdb.firebaseio.com/",
				{
					mode: "no-cors"
				}
			);
		})();

		// return () => {
		// 	cleanup;
		// };
	}, [title]);

	const handleTitleChange = event => {
		setTitle(event.target.value);
	};

	return (
		<input
			className="items-center mt-10 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
			onChange={handleTitleChange}
			value={title}
			placeholder="Feature title"
		/>
	);
};

export default FeatureTitle;
