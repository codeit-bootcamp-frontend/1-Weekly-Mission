import {
	API_URL,
	VALID_STATUS,
	USER_EMAIL,
	USER_PASSWORD,
	USER_PASSWORD_CHECK,
	ERROR_ELEMENT_CLASS,
	PASSWORD_VIEW_MODE,
	updateInputDomError,
	findElementFromCloestFormField,
	togglePasswordInput,
	handleInputError,
	handlePasswordNotEqualError,
	isAllInputsValid,
	makeIsEmpty,
	makeIsValid,
	makeIsEqualPassword,
} from "./auth.js";

//엑세스 토큰 있으면 바로 폴더로 이동
window.addEventListener("DOMContentLoaded", function () {
	localStorage.getItem("accessToken") && authForm.submit();
});

const handleAuthEvent = (e) => {
	if (e.type === "keydown" && e.key !== "Enter") return;
	if (!isAllInputsValid(VALID_STATUS)) return;
	const authData = {
		email: emailInput.value,
	};
	const authJson = JSON.stringify(authData);

	joinFormSubmit(API_URL.checkEmail, authJson);
};

const validateInput = (inputElement, regex, errorMsg) => {
	const isEmpty = makeIsEmpty();
	const isValid = makeIsValid(regex);
	const validators = [isEmpty, isValid];
	return handleInputError(inputElement, validators, errorMsg, ERROR_ELEMENT_CLASS);
};

const saveToken = (key, value) => localStorage.setItem(key, value);

const joinFormSubmit = async (url, jsonData) => {
	try {
		const response = await fetch(url, {
			method: "POST",
			headers: {
				accept: "*/*",
				"Content-Type": "application/json",
			},
			body: jsonData,
		});

		if (response.ok) {
			const responseJson = await response.json();
			const { accessToken, refreshToken } = responseJson.data;
			saveToken("accessToken", accessToken);
			saveToken("refreshToken", refreshToken);
			authForm.submit();
		} else {
			const responseJson = await response.json();
			const pTag = findElementFromCloestFormField(emailInput, ".form__warning-message");
			const errorMessage = responseJson.error.message;

			updateInputDomError(emailInput, pTag, errorMessage, ERROR_ELEMENT_CLASS);
		}
	} catch (error) {
		console.error(`에러: ${error.message}`);
	}
};

const authForm = document.querySelector(".auth__form");

const formInputs = document.querySelectorAll(".form__input");

const submitButton = document.querySelector("#submit-button");

const eyeIcons = document.querySelectorAll(".form__eye-icon");

const emailInput = document.querySelector("#user-email");

const passwordInput = document.querySelector("#user-password");

const passwordCheckInput = document.querySelector("#user-password-check");

emailInput.addEventListener("blur", (e) => {
	VALID_STATUS[e.target.id] = validateInput(e.target, USER_EMAIL.regex, USER_EMAIL.errorMsg);
});

passwordInput.addEventListener("blur", (e) => {
	VALID_STATUS[e.target.id] = validateInput(e.target, USER_PASSWORD.regex, USER_PASSWORD.errorMsg);

	const isEqualPassword = makeIsEqualPassword(e.target.value);

	VALID_STATUS[passwordCheckInput.id] = handlePasswordNotEqualError(
		passwordCheckInput,
		[isEqualPassword],
		USER_PASSWORD_CHECK.errorMsg,
		ERROR_ELEMENT_CLASS,
		VALID_STATUS
	);
});

passwordCheckInput.addEventListener("blur", (e) => {
	const isEqualPassword = makeIsEqualPassword(passwordInput.value);

	VALID_STATUS[passwordCheckInput.id] = handlePasswordNotEqualError(
		e.target,
		[isEqualPassword],
		USER_PASSWORD_CHECK.errorMsg,
		ERROR_ELEMENT_CLASS,
		VALID_STATUS
	);
});

eyeIcons.forEach((icon) => {
	icon.addEventListener("click", (e) => {
		const imgElement = e.target;
		const { currentViewMode, passwordInputId } = imgElement.dataset;
		const inputElement = document.getElementById(passwordInputId);
		togglePasswordInput(imgElement, inputElement, PASSWORD_VIEW_MODE[currentViewMode]);
	});
});

formInputs.forEach((input) => input.addEventListener("keydown", handleAuthEvent));

submitButton.addEventListener("click", handleAuthEvent);
