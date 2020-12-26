const loadUsers = async ({ firebase }) => {
	const snapshot = await firebase.ref("users").once("value");

	return snapshot.val();
};

export default loadUsers;
