const VALID_STATUS = {
	"user-email": false,
	"user-password": false,
	"user-password-check": true,
};

const USER_EMAIL = {
	regex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
	errorMsg: {
		empty: "이메일을 입력해주세요.",
		wrong: "올바른 이메일 주소가 아닙니다.",
		check: "이메일을 확인해주세요",
		exist: "이미 사용 중인 이메일입니다.",
	},
	errorCode: {
		409: "exist",
	},
};

const USER_PASSWORD = {
	regex: /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{8,}$/,
	errorMsg: {
		empty: "비밀번호를 입력해주세요.",
		wrong: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
		check: "비밀번호를 확인해주세요",
		notEqual: "비밀번호가 일치하지 않아요.",
	},
	equalTarget: "user-password-check",
};

const USER_PASSWORD_CHECK = {
	errorMsg: {
		notEqual: "비밀번호가 일치하지 않아요.",
	},
	equalTarget: "user-password",
};

const REGEX = {
	"user-email":
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
	"user-password": /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{8,}$/,
};

const ERROR_ELEMENT_CLASS = {
	input: "form__input--warning--active",
	msg: "form__warning-message--active",
};

const PASSWORD_VIEW_MODE = {
	on: {
		img: {
			"data-current-view-mode": "off",
			src: "../images/eye-off.svg",
			alt: "비밀번호 보기",
		},
		input: {
			type: "password",
		},
	},
	off: {
		img: {
			"data-current-view-mode": "on",
			src: "../images/eye-on.svg",
			alt: "비밀번호 가리기",
		},
		input: {
			type: "text",
		},
	},
};

const API_URL = {
	checkEmail: "https://bootcamp-api.codeit.kr/api/check-email",
	signIn: "https://bootcamp-api.codeit.kr/api/sign-in",
};

// 계산
const isAllInputsValid = (status) => Object.values(status).every(Boolean);

const getErrorMessage = (errorMessages, errorType) => errorMessages[errorType];

const makeIsEmpty = () => (value) => value.length > 0 ? null : "empty";

const makeIsValid = (regex) => (value) => regex.test(value) ? null : "wrong";

const makeIsEqualPassword = (passwordValue) => (passwordCheckValue) =>
	passwordValue === passwordCheckValue ? null : "notEqual";

const getErrorType = (validators, value) => validators.map((validator) => validator(value)).find(Boolean);

const getInputErrorMeesage = (valdators, value, errorMessages) => {
	const errorType = getErrorType(valdators, value);
	return getErrorMessage(errorMessages, errorType);
};

// 사이드 이펙트
const setPropertiesForElement = (element, properties) => {
	for (let [propName, value] of Object.entries(properties)) {
		element.setAttribute(propName, value);
	}
};

const findElementFromCloestFormField = (element, selector) => findElement(element.closest(".form__field"), selector);

const addClass = (element, className) => element.classList.add(className);

const removeClass = (element, className) => element.classList.remove(className);

const findElement = (element, selector) => element.querySelector(selector);

const showInputError = (input, pTag, errorClasses) => {
	addClass(input, errorClasses["input"]);
	addClass(pTag, errorClasses["msg"]);
};

const hideInputError = (input, pTag, errorClasses) => {
	removeClass(input, errorClasses["input"]);
	removeClass(pTag, errorClasses["msg"]);
};

const changeTextContent = (element, text) => (element.textContent = text);

const updateInputDomError = (input, pTag, errorMessage, errorClasses) => {
	const isValid = !errorMessage;
	isValid ? hideInputError(input, pTag, errorClasses) : showInputError(input, pTag, errorClasses);
	changeTextContent(pTag, errorMessage);
};

const togglePasswordInput = (img, input, viewMode) => {
	setPropertiesForElement(img, viewMode.img);
	setPropertiesForElement(input, viewMode.input);
};

const handleInputError = ($target, validators, errorMessages, errorClasses) => {
	const pTag = findElementFromCloestFormField($target, ".form__warning-message");
	const errorMessage = getInputErrorMeesage(validators, $target.value, errorMessages);
	const isValid = !errorMessage;

	updateInputDomError($target, pTag, errorMessage, errorClasses);

	return isValid;
};

// handleInputError에서 비밀번호체크 인풋만 특별히 바꾸기 실패...
const handlePasswordNotEqualError = (passwordCheckInput, isEqualPassword, errorMessages, errorClasses) => {
	const pTag = findElementFromCloestFormField(passwordCheckInput, ".form__warning-message");
	const errorMessage = getInputErrorMeesage(isEqualPassword, passwordCheckInput.value, errorMessages);
	const isValid = !errorMessage;

	updateInputDomError(passwordCheckInput, pTag, errorMessage, errorClasses);

	return isValid;
};

export {
	API_URL,
	VALID_STATUS,
	USER_EMAIL,
	USER_PASSWORD,
	USER_PASSWORD_CHECK,
	REGEX,
	ERROR_ELEMENT_CLASS,
	PASSWORD_VIEW_MODE,
	findElementFromCloestFormField,
	updateInputDomError,
	togglePasswordInput,
	handleInputError,
	handlePasswordNotEqualError,
	makeIsEmpty,
	makeIsValid,
	makeIsEqualPassword,
	isAllInputsValid,
};
