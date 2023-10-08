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
		alt: "비밀번호 보기",
	},
	off: {
		mode: "on",
		imgSrc: "../images/eye-on.svg",
		type: "text",
		alt: "비밀번호 가리기",
	},
};

const USER = {
	"test@ddd.com": "testtesttes1t",
	"test@codeit.com": "codeit101",
};

// --- 순수 함수들 ---

// 이미 존재하는 에러 엘리먼트를 찾아서 반환
const findErrorElement = ($target) =>
	$target.closest(".form__field").getElementsByClassName(ERROR_MSG_CLASS.msg);

// 유저 정보 확인 임시
const isValidUser = ([email, password]) => USER[email.value] === password.value;

// 모든 인풋 유효성 검사 통과 여부
const isAllInputsValid = () => Object.values(VALID_STATUS).every(Boolean);

// --- 사이드 이펙트 함수들 ---

// 유효성 검사 통과 여부 업데이트
const setValidStatus = (id, status) => (VALID_STATUS[id] = status);

// 인풋 focustout시 유효성검사 후 에러메시지 리턴
const validateInput = ($target) => {
	const { id, value } = $target;
	let msgType = "";

	if (!REGEX[id].test(value))
		msgType = value.length === 0 ? "empty" : "wrong";

	setValidStatus(id, !ERROR_MSG[id][msgType]);

	return ERROR_MSG[id][msgType];
};

// 에러 메시지 생성
const showError = ($target, errorText) => {
	const errorMsg = document.createElement("p");

	$target.classList.add(ERROR_MSG_CLASS.input);
	$target.closest(".form__field").append(errorMsg);

	errorMsg.classList.add(ERROR_MSG_CLASS.msg);
	errorMsg.textContent = errorText;
};

// 에러 메시지 삭제
const removeError = ($target, errorElement) => {
	$target.classList.remove(ERROR_MSG_CLASS.input);
	errorElement.remove();
};

// 에러 메시지 생성,삭제 토글
const toggleError = ($target, submitErrorText) => {
	const [errorElement] = findErrorElement($target);
	const errorText = submitErrorText || validateInput($target);
	errorElement && removeError($target, errorElement);
	errorText && showError($target, errorText);
};

// 존재하지 않는 사용자일 경우 에러메시지 보여주기
const showInvalidUserError = (inputArr) =>
	inputArr.forEach((input) => toggleError(input, ERROR_MSG[input.id].check));

// 비밀번호 인풋 password <-> text 토글
const togglePasswordInput = ($target) => {
	const { currentViewMode, passwordInputId } = $target.dataset;

	const nextViewMode = PASSWORD_VIEW_MODE[currentViewMode];
	const passwordInput = document.getElementById(passwordInputId);

	$target.dataset.currentViewMode = nextViewMode.mode;
	$target.src = nextViewMode.imgSrc;
	$target.alt = nextViewMode.alt;
	passwordInput.type = nextViewMode.type;
};

// 로그인 폼 전송
const authFormLogin = () => {
	formInputs.forEach((input) => toggleError(input));

	if (!isAllInputsValid()) return;

	if (!isValidUser(formInputs)) {
		showInvalidUserError(formInputs);
		return;
	}

	authForm.submit();
};

const authForm = document.querySelector(".auth__form");

// 함수로 만들어서 한번에 등록하는 방식...
// 이벤트 핸들러 함수
// const handleFocusOut = (e) => {
// 	if (e.target.matches(".form__input")) toggleError(e.target);
// };

// const handleKeyDown = (e) => {
// 	const isInputOrButton = e.target.matches(".form__input, #login-button");
// 	if (isInputOrButton && e.key === "Enter") authFormLogin();
// };

// const handlePasswordEyeIcon = (e) => {
// 	if (e.target.matches(".form__eye-icon")) togglePasswordInput(e.target);
// };

// authForm.addEventListener("focusout", handleFocusOut);
// authForm.addEventListener("keydown", handleKeyDown);
// authForm.addEventListener("click", handlePasswordEyeIcon);

const formInputs = document.querySelectorAll(".form__input");

formInputs.forEach((input) => {
	input.addEventListener("blur", (e) => toggleError(e.target));
});

const loginButton = document.querySelector("#login-button");

loginButton.addEventListener("click", authFormLogin);

const inputsAndButton = [...formInputs, loginButton];

inputsAndButton.forEach((ele) =>
	ele.addEventListener("keydown", (e) => e.key === "Enter" && authFormLogin())
);

const eyeIcons = authForm.querySelectorAll(".form__eye-icon");

eyeIcons.forEach((icon) => {
	icon.addEventListener("click", (e) => togglePasswordInput(e.target));
});
