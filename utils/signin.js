import {
	passwordToggleElement,
	getPasswordVisibility,
	USERS,
	AUTH_HINT,
	EMAIL_PATTERN,
	INPUT_STATUS,
	INPUT_HINT_CLASSNAME,
	FOLDER_PAGE_PATH,
} from "/utils/auth.js";

/* 비밀번호 토글 */
// 이벤트 핸들러
passwordToggleElement.addEventListener("click", () => {
	const passwordInput = document.querySelector(".auth__input-password");
	const passwordIcon = document.querySelector(".auth__icon-password");

	const passwordVisibility = getPasswordVisibility(passwordInput.type);

	passwordInput.type = passwordVisibility.inputType;
	passwordIcon.src = passwordVisibility.imageSrc;
	passwordIcon.alt = passwordVisibility.imageAlt;
});

/* 유효성 검사 */
// DOM 요소
const emailInputElement = document.querySelector(".auth__input-email");
const passwordInputElement = document.querySelector(".auth__input-password");
const emailHintElement = document.querySelector(".auth__email-hint");
const passwordHintElement = document.querySelector(".auth__password-hint");
const signinButtonElement = document.querySelector(".signin__button");

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

// 함수
function checkEmailFocusout(email) {
	if (email === "") {
		changeEmailHint(INPUT_STATUS.isNotFilled);
	} else if (!EMAIL_PATTERN.test(email)) {
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
	if (email === "") {
		changeEmailHint(INPUT_STATUS.isNotFilled);
		return false;
	} else if (!EMAIL_PATTERN.test(email)) {
		changeEmailHint(INPUT_STATUS.isNotValidated);
		return false;
	} else if (email !== USERS[0].email) {
		changeEmailHint(INPUT_STATUS.isNotExists);
		return false;
	} else {
		changeEmailHint(INPUT_STATUS.default);
		return true;
	}
}

function getIsUserPassword(password) {
	if (password === "") {
		changePasswordHint(INPUT_STATUS.isNotFilled);
		return false;
	} else if (password !== USERS[0].password) {
		changePasswordHint(INPUT_STATUS.isNotExists);
		return false;
	} else {
		changePasswordHint(INPUT_STATUS.default);
		return true;
	}
}

function signinSuccess() {
	location.href = FOLDER_PAGE_PATH;
}

function clickSignin(email, password) {
	const isUserEmail = getIsUserEmail(email);
	if (!isUserEmail) return checkPasswordFocusout(password); // TODO 유저 이메일이 아닌경우 비밀번호 입력 여부만 검사하고 리턴
	const isUserPassword = getIsUserPassword(password);
	if (isUserEmail && isUserPassword) signinSuccess();
}

// 이벤트 핸들러 등록
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
