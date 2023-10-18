import {
	USERS,
	EMAIL_PATTERN,
	PASSWORD_PATTERN,
	PASSWORD_TOGGLE_CONSTANT,
	FOLDER_PAGE_PATH,
} from "/utils/constants.js";

import { fetchClient } from "./apiClient.js";
import { getAccessToken, setAccessToken } from "./accessToken.js";

// 비밀번호 토글
function getPasswordVisibility(inputType) {
	return inputType === "password"
		? PASSWORD_TOGGLE_CONSTANT.visible
		: PASSWORD_TOGGLE_CONSTANT.invisible;
}

// 로그인, 회원가입
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
	getPasswordVisibility,
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
