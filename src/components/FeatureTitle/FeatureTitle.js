import React from "react";

const FeatureTitle = props => {
	return (
		<React.Fragment>
			<h2 className="text-lg leading-6 font-medium text-gray-900 inline">
				Feature
			</h2>
			<textarea
				class="w-full px-3 py-2 my-2 text-gray-700 border shadow rounded-lg focus:outline-none"
				rows="4"
			></textarea>
		</React.Fragment>
	);
};

export default FeatureTitle;
