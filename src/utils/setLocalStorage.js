const setLocalStorage = ({ key, value }) => {
	return localStorage.setItem(key, JSON.stringify(value));
};

export default setLocalStorage;
