import {
	goToFolderPage,
	getPasswordVisibility,
	getIsFilledEmail,
	getIsValidEmail,
	getIsExistEmail,
	getIsFilledPassword,
	getIsCorrectPassword,
} from "/utils/auth.js";

import {
	AUTH_HINT,
	INPUT_STATUS,
	INPUT_HINT_CLASSNAME,
} from "/utils/constants.js";

/* 비밀번호 토글 */
const passwordToggleElement = document.querySelector(".auth__toggle-password");

passwordToggleElement.addEventListener("click", () => {
	const passwordInput = document.querySelector(".auth__input-password");
	const passwordIcon = document.querySelector(".auth__icon-password");

	const passwordVisibility = getPasswordVisibility(passwordInput.type);

	passwordInput.type = passwordVisibility.inputType;
	passwordIcon.src = passwordVisibility.imageSrc;
	passwordIcon.alt = passwordVisibility.imageAlt;
});

/* 유효성 검사 */
const emailInputElement = document.querySelector(".auth__input-email");
const passwordInputElement = document.querySelector(".auth__input-password");
const emailHintElement = document.querySelector(".auth__email-hint");
const passwordHintElement = document.querySelector(".auth__password-hint");
const signinButtonElement = document.querySelector(".signin__button");

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

function checkEmailFocusout(email) {
	if (!getIsFilledEmail(email)) {
		changeEmailHint(INPUT_STATUS.isNotFilled);
	} else if (!getIsValidEmail(email)) {
		changeEmailHint(INPUT_STATUS.isNotValidated);
	} else {
		changeEmailHint(INPUT_STATUS.default);
	}
}

function checkPasswordFocusout(password) {
	if (password === "") {
		changePasswordHint(INPUT_STATUS.isNotFilled);
	} else {
		changePasswordHint(INPUT_STATUS.default);
	}
}

function getIsUserEmail(email) {
	if (!getIsFilledEmail(email)) {
		changeEmailHint(INPUT_STATUS.isNotFilled);
		return false;
	} else if (!getIsValidEmail(email)) {
		changeEmailHint(INPUT_STATUS.isNotValidated);
		return false;
	} else if (!getIsExistEmail(email)) {
		changeEmailHint(INPUT_STATUS.isNotExists);
		return false;
	} else {
		changeEmailHint(INPUT_STATUS.default);
		return true;
	}
}

function getIsUserPassword(password) {
	if (!getIsFilledPassword(password)) {
		changePasswordHint(INPUT_STATUS.isNotFilled);
		return false;
	} else if (!getIsCorrectPassword(password)) {
		changePasswordHint(INPUT_STATUS.isNotCorrect);
		return false;
	} else {
		changePasswordHint(INPUT_STATUS.default);
		return true;
	}
}

function clickSignin(email, password) {
	const isUserEmail = getIsUserEmail(email);
	if (!isUserEmail) {
		// TODO 유저 이메일이 아닌경우 비밀번호 입력 여부만 검사하고 리턴
		checkPasswordFocusout(password);
		return;
	}
	const isUserPassword = getIsUserPassword(password);
	if (isUserEmail && isUserPassword) goToFolderPage();
}

emailInputElement.addEventListener("focusout", (e) => {
	checkEmailFocusout(e.target.value);
});

passwordInputElement.addEventListener("focusout", (e) => {
	checkPasswordFocusout(e.target.value);
});

signinButtonElement.addEventListener("click", (e) => {
	e.preventDefault();
	clickSignin(emailInputElement.value, passwordInputElement.value);
});
