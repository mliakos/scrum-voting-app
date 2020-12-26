const loadHidden = async ({ firebase }) => {
	const snapshot = await firebase.ref("hidden").once("value");

	return snapshot.val();
};

export default loadHidden;
