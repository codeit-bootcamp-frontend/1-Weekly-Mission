import {
	goToFolderPage,
	getPasswordVisibility,
	getIsFilledEmail,
	getIsValidEmail,
	getIsFilledPassword,
} from "/utils/auth.js";

import {
	AUTH_HINT,
	INPUT_STATUS,
	INPUT_HINT_CLASSNAME,
} from "/utils/constants.js";

import { signIn } from "./api.js";

/* 로그인 상태로 접근 시 리다이렉트 */
(function () {
	const accessToken = localStorage.getItem("accessToken");

	if (accessToken) {
		goToFolderPage();
	}
})();

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

function getIsCompleteEmail(email) {
	if (!getIsFilledEmail(email)) {
		changeEmailHint(INPUT_STATUS.isNotFilled);
		return false;
	} else if (!getIsValidEmail(email)) {
		changeEmailHint(INPUT_STATUS.isNotValidated);
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
	} else {
		changePasswordHint(INPUT_STATUS.default);
		return true;
	}
}

async function clickSignin(email, password) {
	if (getIsCompleteEmail(email) && getIsCompletePassword(password))
		await signIn({ email, password });
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
