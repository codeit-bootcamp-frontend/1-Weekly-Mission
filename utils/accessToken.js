const getAccessToken = () => {
	return localStorage.getItem("accessToken");
};

const setAccessToken = (accessToken) => {
	localStorage.setItem("accessToken", accessToken);
};

export { getAccessToken, setAccessToken };
