import { goToFolderPage, getPasswordVisibility } from "/utils/auth.js";
import {
	USERS,
	AUTH_HINT,
	EMAIL_PATTERN,
	PASSWORD_PATTERN,
	INPUT_STATUS,
	INPUT_HINT_CLASSNAME,
} from "/utils/constants.js";

/* 비밀번호 토글 */
const passwordConfirmToggleElement = document.querySelector(
	".auth__toggle-password--confirm"
);
const passwordConfirmInputElement = document.querySelector(
	".auth__input-password--confirm"
);
const passwordConfirmIconElement = document.querySelector(
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

passwordConfirmToggleElement.addEventListener("click", () => {
	const passwordVisibility = getPasswordVisibility(
		passwordConfirmInputElement.type
	);

	passwordConfirmInputElement.type = passwordVisibility.inputType;
	passwordConfirmIconElement.src = passwordVisibility.imageSrc;
	passwordConfirmIconElement.alt = passwordVisibility.imageAlt;
});

/* 유효성 검사 */
// DOM 요소
const emailInputElement = document.querySelector(".auth__input-email");
const passwordInputElement = document.querySelector(".auth__input-password");
const emailHintElement = document.querySelector(".auth__email-hint");
const passwordHintElement = document.querySelector(".auth__password-hint");
const passwordConfirmHintElement = document.querySelector(
	".auth__password-hint--confirm"
);
const signupButtonElement = document.querySelector(".signup__button");

// 함수
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
	if (passwordConfirmHintElement.innerText === AUTH_HINT.password[hintType])
		return; // 이전 상태와 바꾸려는 상태가 동일할 경우 리턴
	passwordConfirmHintElement.innerText = AUTH_HINT.password[hintType];

	if (hintType === INPUT_STATUS.default) {
		passwordConfirmInputElement.classList.remove(INPUT_HINT_CLASSNAME);
	} else {
		passwordConfirmInputElement.classList.add(INPUT_HINT_CLASSNAME);
	}
}
function checkEmailFocusout(email) {
	if (email === "") {
		changeEmailHint(INPUT_STATUS.isNotFilled);
	} else if (!EMAIL_PATTERN.test(email)) {
		changeEmailHint(INPUT_STATUS.isNotValidated);
	} else if (email === USERS[0].email) {
		changeEmailHint(INPUT_STATUS.isExists);
	} else {
		changeEmailHint(INPUT_STATUS.default);
	}
}

function checkPasswordFocusout(password) {
	if (password === "") {
		changePasswordHint(INPUT_STATUS.isNotFilled);
	} else if (!PASSWORD_PATTERN.test(password)) {
		changePasswordHint(INPUT_STATUS.isNotValidated);
	} else {
		changePasswordHint(INPUT_STATUS.default);
	}
}

function checkPasswordConfirmFocusout(passwordConfirm) {
	if (passwordConfirm === "") {
		changePasswordConfirmHint(INPUT_STATUS.isNotFilled);
	} else if (passwordConfirm !== passwordInputElement.value) {
		changePasswordConfirmHint(INPUT_STATUS.isNotConfirmed);
	} else {
		changePasswordConfirmHint(INPUT_STATUS.default);
	}
}

function getIsValidatedEmail(email) {
	if (email === "") {
		changeEmailHint(INPUT_STATUS.isNotFilled);
		return false;
	} else if (!EMAIL_PATTERN.test(email)) {
		changeEmailHint(INPUT_STATUS.isNotValidated);
		return false;
	} else if (email === USERS[0].email) {
		changeEmailHint(INPUT_STATUS.isExists);
		return false;
	} else {
		changeEmailHint(INPUT_STATUS.default);
		return true;
	}
}

function getIsValidatedPassword(password) {
	if (password === "") {
		changePasswordHint(INPUT_STATUS.isNotFilled);
		return false;
	} else if (!PASSWORD_PATTERN.test(password)) {
		changePasswordHint(INPUT_STATUS.isNotValidated);
		return false;
	} else {
		changePasswordHint(INPUT_STATUS.default);
		return true;
	}
}

function getIsConfirmedPassword(passwordConfirm) {
	if (passwordConfirm === "") {
		changePasswordConfirmHint(INPUT_STATUS.isNotFilled);
		return false;
	} else if (passwordConfirm !== passwordInputElement.value) {
		changePasswordConfirmHint(INPUT_STATUS.isNotConfirmed);
		return false;
	} else {
		return true;
	}
}

function clickSignup(email, password, passwordConfirm) {
	const isValidatedEmail = getIsValidatedEmail(email);
	const isValidatedPassword = getIsValidatedPassword(password);
	const isConfirmedPassword = getIsConfirmedPassword(passwordConfirm);

	if (isValidatedEmail && isValidatedPassword && isConfirmedPassword)
		goToFolderPage();
}

emailInputElement.addEventListener("focusout", (e) => {
	checkEmailFocusout(e.target.value);
});

passwordInputElement.addEventListener("focusout", (e) => {
	checkPasswordFocusout(e.target.value);
});

passwordConfirmInputElement.addEventListener("focusout", (e) => {
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
	clickSignup(
		emailInputElement.value,
		passwordInputElement.value,
		passwordConfirmInputElement.value
	);
});
