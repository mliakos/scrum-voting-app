const loadTitle = async ({ firebase }) => {
	const snapshot = await firebase.ref(`feature/title`).once("value");

	return snapshot.val();
};

export default loadTitle;
