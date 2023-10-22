import {
	USERS,
	EMAIL_PATTERN,
	PASSWORD_PATTERN,
	FOLDER_PAGE_PATH,
} from "/utils/constants.js";

import { fetchClient } from "./apiClient.js";

import { getAccessToken, setAccessToken } from "./accessToken.js";

function goToFolderPage() {
	location.href = FOLDER_PAGE_PATH;
}

function getIsFilledEmail(email) {
	if (email !== "") {
		return true;
	} else {
		return false;
	}
}

function getIsValidEmail(email) {
	if (EMAIL_PATTERN.test(email)) {
		return true;
	} else {
		return false;
	}
}

function getIsFilledPassword(password) {
	if (password !== "") {
		return true;
	} else {
		return false;
	}
}

function getIsValidPassword(password) {
	if (PASSWORD_PATTERN.test(password)) {
		return true;
	} else {
		return false;
	}
}

function getIsCorrectPassword(password) {
	if (password === USERS[0].password) {
		return true;
	} else {
		return false;
	}
}

function getIsFilledConfirmPassword(confirmPassword) {
	if (confirmPassword !== "") {
		return true;
	} else {
		return false;
	}
}

function getIsConfirmedConfirmPassword(
	confirmPassword,
	passwordInputElementValue
) {
	if (confirmPassword === passwordInputElementValue) {
		return true;
	} else {
		return false;
	}
}

const redirectIfSignedIn = () => {
	if (getAccessToken()) {
		goToFolderPage();
	}
};

const signIn = async (email, password) => {
	const response = await fetchClient({
		url: "sign-in",
		method: "POST",
		body: { email, password },
	});
	const result = await response.json();
	const accessToken = result.data.accessToken;
	setAccessToken(accessToken);
	redirectIfSignedIn();
};

const getIsNewEmail = async (email) => {
	try {
		await fetchClient({
			url: "check-email",
			method: "POST",
			body: { email },
		});
		return true;
	} catch {
		return false;
	}
};

const signUp = async (email, password) => {
	const response = await fetchClient({
		url: "sign-up",
		method: "POST",
		body: { email, password },
	});
	const result = await response.json();
	const accessToken = result.data.accessToken;
	setAccessToken(accessToken);
	redirectIfSignedIn();
};

export {
	goToFolderPage,
	getIsFilledEmail,
	getIsValidEmail,
	getIsFilledPassword,
	getIsValidPassword,
	getIsCorrectPassword,
	getIsFilledConfirmPassword,
	getIsConfirmedConfirmPassword,
	signIn,
	getIsNewEmail,
	signUp,
	redirectIfSignedIn,
};
