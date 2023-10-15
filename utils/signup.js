import {
	goToFolderPage,
	getPasswordVisibility,
	getIsFilledEmail,
	getIsValidEmail,
	getIsExistEmail,
	getIsFilledPassword,
	getIsValidPassword,
	getIsFilledConfirmPassword,
	getIsConfirmedConfirmPassword,
} from "/utils/auth.js";

import {
	AUTH_HINT,
	INPUT_STATUS,
	INPUT_HINT_CLASSNAME,
} from "/utils/constants.js";

/* 비밀번호 토글 */
const confirmPasswordToggleElement = document.querySelector(
	".auth__toggle-password--confirm"
);
const confirmPasswordInputElement = document.querySelector(
	".auth__input-password--confirm"
);
const confirmPasswordIconElement = document.querySelector(
	".auth__icon-password--confirm"
);
const passwordToggleElement = document.querySelector(".auth__toggle-password");

passwordToggleElement.addEventListener("click", () => {
	const passwordInput = document.querySelector(".auth__input-password");
	const passwordIcon = document.querySelector(".auth__icon-password");

	const passwordVisibility = getPasswordVisibility(passwordInput.type);

	passwordInput.type = passwordVisibility.inputType;
	passwordIcon.src = passwordVisibility.imageSrc;
	passwordIcon.alt = passwordVisibility.imageAlt;
});

confirmPasswordToggleElement.addEventListener("click", () => {
	const passwordVisibility = getPasswordVisibility(
		confirmPasswordInputElement.type
	);

	confirmPasswordInputElement.type = passwordVisibility.inputType;
	confirmPasswordIconElement.src = passwordVisibility.imageSrc;
	confirmPasswordIconElement.alt = passwordVisibility.imageAlt;
});

/* 유효성 검사 */
const emailInputElement = document.querySelector(".auth__input-email");
const passwordInputElement = document.querySelector(".auth__input-password");
const emailHintElement = document.querySelector(".auth__email-hint");
const passwordHintElement = document.querySelector(".auth__password-hint");
const confirmPasswordHintElement = document.querySelector(
	".auth__password-hint--confirm"
);
const signupButtonElement = document.querySelector(".signup__button");

function changeEmailHint(hintType) {
	if (emailHintElement.innerText === AUTH_HINT.email[hintType]) return; // 이전 상태와 바꾸려는 상태가 동일할 경우 리턴
	emailHintElement.innerText = AUTH_HINT.email[hintType];

	if (hintType === INPUT_STATUS.default) {
		emailInputElement.classList.remove(INPUT_HINT_CLASSNAME);
	} else {
		emailInputElement.classList.add(INPUT_HINT_CLASSNAME);
	}
}

function changePasswordHint(hintType) {
	if (passwordHintElement.innerText === AUTH_HINT.password[hintType]) return; // 이전 상태와 바꾸려는 상태가 동일할 경우 리턴
	passwordHintElement.innerText = AUTH_HINT.password[hintType];

	if (hintType === INPUT_STATUS.default) {
		passwordInputElement.classList.remove(INPUT_HINT_CLASSNAME);
	} else {
		passwordInputElement.classList.add(INPUT_HINT_CLASSNAME);
	}
}

function changePasswordConfirmHint(hintType) {
	if (confirmPasswordHintElement.innerText === AUTH_HINT.password[hintType])
		return; // 이전 상태와 바꾸려는 상태가 동일할 경우 리턴
	confirmPasswordHintElement.innerText = AUTH_HINT.password[hintType];

	if (hintType === INPUT_STATUS.default) {
		confirmPasswordInputElement.classList.remove(INPUT_HINT_CLASSNAME);
	} else {
		confirmPasswordInputElement.classList.add(INPUT_HINT_CLASSNAME);
	}
}

function checkEmailFocusout(email) {
	if (!getIsFilledEmail(email)) {
		changeEmailHint(INPUT_STATUS.isNotFilled);
	} else if (!getIsValidEmail(email)) {
		changeEmailHint(INPUT_STATUS.isNotValidated);
	} else if (getIsExistEmail(email)) {
		changeEmailHint(INPUT_STATUS.isExists);
	} else {
		changeEmailHint(INPUT_STATUS.default);
	}
}

function checkPasswordFocusout(password) {
	if (!getIsFilledPassword(password)) {
		changePasswordHint(INPUT_STATUS.isNotFilled);
	} else if (!getIsValidPassword(password)) {
		changePasswordHint(INPUT_STATUS.isNotValidated);
	} else {
		changePasswordHint(INPUT_STATUS.default);
	}
}

function checkPasswordConfirmFocusout(confirmPassword) {
	if (!getIsFilledConfirmPassword(confirmPassword)) {
		changePasswordConfirmHint(INPUT_STATUS.isNotFilled);
	} else if (
		!getIsConfirmedConfirmPassword(confirmPassword, passwordInputElement.value)
	) {
		changePasswordConfirmHint(INPUT_STATUS.isNotConfirmed);
	} else {
		changePasswordConfirmHint(INPUT_STATUS.default);
	}
}

function getIsCompleteEmail(email) {
	if (!getIsFilledEmail(email)) {
		changeEmailHint(INPUT_STATUS.isNotFilled);
		return false;
	} else if (!getIsValidEmail(email)) {
		changeEmailHint(INPUT_STATUS.isNotValidated);
		return false;
	} else if (getIsExistEmail(email)) {
		changeEmailHint(INPUT_STATUS.isExists);
		return false;
	} else {
		changeEmailHint(INPUT_STATUS.default);
		return true;
	}
}

function getIsCompletePassword(password) {
	if (!getIsFilledPassword(password)) {
		changePasswordHint(INPUT_STATUS.isNotFilled);
		return false;
	} else if (!getIsValidPassword(password)) {
		changePasswordHint(INPUT_STATUS.isNotValidated);
		return false;
	} else {
		changePasswordHint(INPUT_STATUS.default);
		return true;
	}
}

function getIsConfirmedPassword(confirmPassword) {
	if (!getIsFilledConfirmPassword(confirmPassword)) {
		changePasswordConfirmHint(INPUT_STATUS.isNotFilled);
		return false;
	} else if (
		!getIsConfirmedConfirmPassword(confirmPassword, passwordInputElement.value)
	) {
		changePasswordConfirmHint(INPUT_STATUS.isNotConfirmed);
		return false;
	} else {
		return true;
	}
}

function clickSignup({ email, password, confirmPassword }) {
	if (
		getIsCompleteEmail(email) &&
		getIsCompletePassword(password) &&
		getIsConfirmedPassword(confirmPassword)
	)
		goToFolderPage();
}

emailInputElement.addEventListener("focusout", (e) => {
	checkEmailFocusout(e.target.value);
});

passwordInputElement.addEventListener("focusout", (e) => {
	checkPasswordFocusout(e.target.value);
});

confirmPasswordInputElement.addEventListener("focusout", (e) => {
	checkPasswordConfirmFocusout(e.target.value);
});

emailInputElement.addEventListener("focusout", (e) => {
	checkEmailFocusout(e.target.value);
});

passwordInputElement.addEventListener("focusout", (e) => {
	checkPasswordFocusout(e.target.value);
});

signupButtonElement.addEventListener("click", (e) => {
	e.preventDefault();
	clickSignup({
		email: emailInputElement.value,
		password: passwordInputElement.value,
		confirmPassword: confirmPasswordInputElement.value,
	});
});
