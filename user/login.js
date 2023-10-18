import {
	API_URL,
	VALID_STATUS,
	USER_EMAIL,
	USER_PASSWORD,
	ERROR_ELEMENT_CLASS,
	PASSWORD_VIEW_MODE,
	updateInputDomError,
	findElementFromCloestFormField,
	togglePasswordInput,
	handleInputError,
	isAllInputsValid,
	makeIsEmpty,
	makeIsValid,
} from "./auth.js";

//엑세스 토큰 있으면 바로 폴더로 이동
window.addEventListener("DOMContentLoaded", function () {
	localStorage.getItem("accessToken") && authForm.submit();
});

const isEmptyInput = makeIsEmpty();

const handleAuthEvent = (e) => {
	if (e.type === "keydown" && e.key !== "Enter") return;
	if (!isAllInputsValid(VALID_STATUS)) return;
	const authData = {
		email: emailInput.value,
		password: passwordInput.value,
	};
	const authJson = JSON.stringify(authData);
	loginFormSubmit(API_URL.signIn, authJson);
};

const saveToken = (key, value) => localStorage.setItem(key, value);

const loginFormSubmit = async (url, jsonData) => {
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
			const targetInput = [
				[emailInput, USER_EMAIL],
				[passwordInput, USER_PASSWORD],
			];
			targetInput.forEach(([input, errorObj]) => {
				const pTag = findElementFromCloestFormField(input, ".form__warning-message");
				const errorMessage = errorObj.errorMsg.check;

				updateInputDomError(input, pTag, errorMessage, ERROR_ELEMENT_CLASS);
			});
		}
	} catch (error) {
		console.log(`에러: ${error.message}`);
	}
};

const authForm = document.querySelector(".auth__form");

const formInputs = document.querySelectorAll(".form__input");

const submitButton = document.querySelector("#submit-button");

const eyeIcons = document.querySelectorAll(".form__eye-icon");

const emailInput = document.querySelector("#user-email");

const passwordInput = document.querySelector("#user-password");

emailInput.addEventListener("blur", (e) => {
	const isValidEmail = makeIsValid(USER_EMAIL.regex);
	const validators = [isEmptyInput, isValidEmail];
	VALID_STATUS[e.target.id] = handleInputError(e.target, validators, USER_EMAIL.errorMsg, ERROR_ELEMENT_CLASS);
});

passwordInput.addEventListener("blur", (e) => {
	const isValidPassword = makeIsValid(USER_PASSWORD.regex);
	const validators = [isEmptyInput, isValidPassword];

	VALID_STATUS[e.target.id] = handleInputError(e.target, validators, USER_PASSWORD.errorMsg, ERROR_ELEMENT_CLASS);
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
