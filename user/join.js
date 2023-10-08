import {
	ERROR_MSG,
	USER,
	findErrorElement,
	isAllInputsValid,
	setValidStatus,
	removeError,
	toggleError,
	authForm,
	formInputs,
	submitButton,
	inputsAndButton,
} from "./auth.js";

const inputMap = {};

formInputs.forEach((input) => {
	inputMap[input.id] = input;
});

const emailInput = inputMap["user-email"];
const passwordInput = inputMap["user-password"];
const passwordCheckInput = inputMap["user-password-check"];

// --- 순수 함수들 ---

// 비밀번호, 비밀번호 확인 일치여부
const isEqualPassword = () => passwordInput.value === passwordCheckInput.value;

// 이미 존재하는 회원 여부 임시
const userExists = () => !!USER[emailInput.value];

// --- 사이드 이펙트 함수들 ---

// 비밀번호 일치하지 않을 경우 에러 보여주기
const showPasswordNotEqualError = () => {
	const [errorElement] = findErrorElement(passwordCheckInput);

	if (isEqualPassword()) {
		errorElement && removeError(passwordCheckInput, errorElement);
		setValidStatus(passwordCheckInput.id, true);
	} else
		toggleError(
			passwordCheckInput,
			ERROR_MSG[passwordCheckInput.id]["notEqual"]
		);
};

// 에러 메시지 생성,삭제 토글
const toggleErrorForJoin = (input) => {
	if (input === emailInput && userExists()) {
		toggleError(emailInput, ERROR_MSG[emailInput.id]["exist"]);
	} else if (input === passwordCheckInput) showPasswordNotEqualError();
	else toggleError(input);
};

// 회원가입 폼 전송
const authFormJoin = () => {
	formInputs.forEach((input) => toggleErrorForJoin(input));
	if (!isAllInputsValid()) return;

	authForm.submit();
};

formInputs.forEach((input) => {
	input.addEventListener("blur", (e) => toggleErrorForJoin(e.target));
	input.addEventListener(
		"keydown",
		(e) => e.key === "Enter" && authFormJoin()
	);
});

const passwordInputs = [passwordInput, passwordCheckInput];

passwordInputs.forEach((input) =>
	input.addEventListener("blur", showPasswordNotEqualError)
);

submitButton.addEventListener("click", authFormJoin);
