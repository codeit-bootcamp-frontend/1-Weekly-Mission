const VALID_STATUS = {
	"user-email": false,
	"user-password": false,
};

const REGEX = {
	"user-email":
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
	"user-password": /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{8,}$/,
};

const ERROR_MSG = {
	"user-email": {
		empty: "이메일을 입력해주세요.",
		wrong: "올바른 이메일 주소가 아닙니다.",
		check: "이메일을 확인해주세요",
	},
	"user-password": {
		empty: "비밀번호를 입력해주세요.",
		wrong: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
		check: "비밀번호를 확인해주세요",
	},
};

const ERROR_MSG_CLASS = {
	msg: "form__warning-message",
	input: "form__input--warning",
};

const PASSWORD_VIEW_MODE = {
	on: {
		mode: "off",
		imgSrc: "../images/eye-off.svg",
		type: "password",
	},
	off: {
		mode: "on",
		imgSrc: "../images/eye-on.svg",
		type: "text",
	},
};

const USER = {
	"test@ddd.com": "testtesttes1t",
	"test@codeit.com": "codeit101",
};

// 인풋 focustout시 유효성검사 후 에러메시지 리턴
const validateInput = ($target) => {
	const { id, value } = $target;
	let msgType = "";

	if (!REGEX[id].test(value))
		msgType = value.length === 0 ? "empty" : "wrong";

	VALID_STATUS[id] = !ERROR_MSG[id][msgType];

	return ERROR_MSG[id][msgType];
};

//에러 메시지 삭제
const removeError = ($target) => {
	const [existingErrorMsg] = $target
		.closest(".form__field")
		.getElementsByClassName(ERROR_MSG_CLASS.msg);

	if (!existingErrorMsg) return;

	existingErrorMsg.remove();
	$target.classList.remove(ERROR_MSG_CLASS.input);
};

//에러 메시지 생성
const showError = ($target, errorText) => {
	const errorMsg = document.createElement("p");

	$target.classList.add(ERROR_MSG_CLASS.input);
	$target.closest(".form__field").append(errorMsg);

	errorMsg.classList.add(ERROR_MSG_CLASS.msg);
	errorMsg.textContent = errorText;
};

//에러 메시지 생성,삭제 토글
const toggleError = ($target, submitErrorText) => {
	const errorText = submitErrorText || validateInput($target);
	removeError($target);
	if (errorText) showError($target, errorText);
};

//비밀번호 인풋 password <-> text 토글
const togglePasswordInput = ({ target: eyeIcon }) => {
	const { currentViewMode, passwordInputId } = eyeIcon.dataset;

	const nextViewMode = PASSWORD_VIEW_MODE[currentViewMode];
	const passwordInput = document.getElementById(passwordInputId);

	eyeIcon.dataset.currentViewMode = nextViewMode.mode;
	eyeIcon.src = nextViewMode.imgSrc;
	passwordInput.type = nextViewMode.type;
};

//유저 정보 확인 임시
const isValidUser = ([email, password]) => USER[email.value] === password.value;

//로그인 폼 전송
const authFormLogin = () => {
	const authForm = document.querySelector(".auth__form");
	const inputArr = authForm.querySelectorAll("#user-email, #user-password");

	inputArr.forEach((input) => toggleError(input));

	if (!isAllInputsValid()) return;

	if (!isValidUser(inputArr)) {
		inputArr.forEach((target) => {
			toggleError(target, ERROR_MSG[target.id].check);
		});
		return;
	}

	authForm.submit();
};

const isAllInputsValid = () => Object.values(VALID_STATUS).every(Boolean);

const formInputs = document.querySelectorAll(".form__input");
formInputs.forEach((input) => {
	input.addEventListener("blur", (e) => toggleError(e.target));
});

const loginButton = document.querySelector("#login-button");
loginButton.addEventListener("click", authFormLogin);

const inputAndButton = [...formInputs, loginButton];
inputAndButton.forEach((ele) =>
	ele.addEventListener("keydown", (e) => e.key === "Enter" && authFormLogin())
);

document.querySelectorAll(".form__eye-icon").forEach((icon) => {
	icon.addEventListener("click", togglePasswordInput);
});
