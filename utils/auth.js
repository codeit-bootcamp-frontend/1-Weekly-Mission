// Signin, Signup 비밀번호 토글
const PASSWORD_TOGGLE_CONSTANT = {
	visible: {
		inputType: "text",
		imageSrc: "/public/icons/password-visible.svg",
		imageAlt: "비밀번호 보이기 아이콘",
	},
	invisible: {
		inputType: "password",
		imageSrc: "/public/icons/password-invisible.svg",
		imageAlt: "비밀번호 숨김 아이콘",
	},
};
const passwordToggle = document.querySelector(".auth__toggle-password");
const passwordConfirmToggle = document.querySelector(
	".auth__toggle-password--confirm"
);

passwordToggle.addEventListener("click", () => {
	const passwordInput = document.querySelector(".auth__input-password");
	const passwordIcon = document.querySelector(".auth__icon-password");

	if (passwordInput.type === "password") {
		passwordInput.type = PASSWORD_TOGGLE_CONSTANT.visible.inputType;
		passwordIcon.src = PASSWORD_TOGGLE_CONSTANT.visible.imageSrc;
		passwordIcon.alt = PASSWORD_TOGGLE_CONSTANT.visible.imageAlt;
	} else {
		passwordInput.type = PASSWORD_TOGGLE_CONSTANT.invisible.inputType;
		passwordIcon.src = PASSWORD_TOGGLE_CONSTANT.invisible.imageSrc;
		passwordIcon.alt = PASSWORD_TOGGLE_CONSTANT.invisible.imageAlt;
	}
});

passwordConfirmToggle?.addEventListener("click", () => {
	const passwordConfirmInput = document.querySelector(
		".auth__input-password--confirm"
	);
	const passwordConfirmIcon = document.querySelector(
		".auth__icon-password--confirm"
	);

	if (passwordConfirmInput.type === "password") {
		passwordInput.type = PASSWORD_TOGGLE_CONSTANT.visible.inputType;
		passwordIcon.src = PASSWORD_TOGGLE_CONSTANT.invisible.imageSrc;
		passwordIcon.alt = PASSWORD_TOGGLE_CONSTANT.invisible.imageAlt;
	} else {
		passwordInput.type = PASSWORD_TOGGLE_CONSTANT.invisible.inputType;
		passwordIcon.src = PASSWORD_TOGGLE_CONSTANT.visible.imageSrc;
		passwordIcon.alt = PASSWORD_TOGGLE_CONSTANT.visible.imageAlt;
	}
});

// Signin 유효성 검사
const SIGNIN_CURRECT = {
	email: "test@codeit.com",
	password: "codeit101",
};
const SIGNIN_HINT = {
	email: {
		default: "",
		isNotFilled: "이메일을 입력해주세요.",
		isNotValidated: "올바른 이메일 주소가 아닙니다",
		isNotUser: "이메일을 변경해주세요.",
	},
	password: {
		default: "",
		isNotFilled: "비밀번호를 입력해주세요.",
		isNotUser: "비밀번호를 변경해주세요.",
	},
};
const EMAIL_PATTURN = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

const emailInputElement = document.querySelector(".auth__input-email");
const passwordInputElement = document.querySelector(".auth__input-password");
const signInButtonElement = document.querySelector(".signin__buton");
const emailHintElement = document.querySelector(".auth__email-hint");
const passwordHintElement = document.querySelector(".auth__password-hint");

function handleEmailHint(hintType) {
	emailHintElement.innerText = SIGNIN_HINT.email[hintType];
	if (hintType === "default") {
		emailInputElement.classList.remove("auth__input--hint");
	} else if (
		emailInputElement.classList.contains("auth__input--hint") === false
	) {
		emailInputElement.classList.add("auth__input--hint");
	}
}

function handlePasswordHint(hintType) {
	passwordHintElement.innerText = SIGNIN_HINT.password[hintType];
	if (hintType === "default") {
		passwordInputElement.classList.remove("auth__input--hint");
	} else if (
		passwordInputElement.classList.contains("auth__input--hint") === false
	) {
		passwordInputElement.classList.add("auth__input--hint");
	}
}

function handleSigninSuccess() {
	emailInputElement.classList.remove("auth__input--hint");
	passwordInputElement.classList.remove("auth__input--hint");
	location.href = "/pages/forder.html";
}

function checkEmailInputValue(email) {
	if (email === "") handleEmailHint("isNotFilled");
	else if (EMAIL_PATTURN.test(email) === false)
		handleEmailHint("isNotValidated");
	else handleEmailHint("default");
}

function checkPasswordInputValue(password) {
	if (password === "") {
		handlePasswordHint("isNotFilled");
	} else {
		handlePasswordHint("default");
	}
}

function handleSignIn(email, password) {
	let isEmailRight = false;
	let isPasswordRight = false;

	if (email === "") {
		handleEmailHint("isNotFilled");
	} else if (EMAIL_PATTURN.test(email) === false) {
		handleEmailHint("isNotValidated");
	} else if (email !== SIGNIN_CURRECT.email) {
		handleEmailHint("isNotUser");
	} else {
		isEmailRight = true;
	}

	if (password === "") {
		handlePasswordHint("isNotFilled");
	} else if (password !== SIGNIN_CURRECT.password) {
		handlePasswordHint("isNotUser");
	} else {
		isPasswordRight = true;
	}

	if (isEmailRight === true && isPasswordRight === true) handleSigninSuccess();
}

emailInputElement.addEventListener("focusout", () => {
	const emailValue = emailInputElement.value;
	checkEmailInputValue(emailValue);
});

passwordInputElement.addEventListener("focusout", () => {
	const passwordValue = passwordInputElement.value;
	checkPasswordInputValue(passwordValue);
});

signInButtonElement.addEventListener("click", (e) => {
	e.preventDefault();
	const emailValue = emailInputElement.value;
	const passwordValue = passwordInputElement.value;
	handleSignIn(emailValue, passwordValue);
});
