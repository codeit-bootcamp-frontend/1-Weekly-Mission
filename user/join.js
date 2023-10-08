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
	const isEqual = isEqualPassword();
	const [errorElement] = findErrorElement(passwordCheckInput);

	if (!isEqual)
		toggleError(
			passwordCheckInput,
			ERROR_MSG[passwordCheckInput.id]["notEqual"]
		);
	else errorElement && removeError(passwordCheckInput, errorElement);

	setValidStatus(passwordCheckInput.id, isEqual);
};

// 에러 메시지 생성,삭제 토글
const toggleErrorForJoin = (input) => {
	if (input === passwordCheckInput) showPasswordNotEqualError();
	else toggleError(input);
};

// 회원가입 폼 전송
const authFormJoin = () => {
	formInputs.forEach((input) => toggleErrorForJoin(input));

	if (!isAllInputsValid()) return;

	const doesUserExist = userExists();

	if (doesUserExist) {
		toggleError(emailInput, ERROR_MSG[emailInput.id]["exist"]);
		setValidStatus(emailInput.id, !doesUserExist);
		return;
	}

	authForm.submit();
};

formInputs.forEach((input) => {
	input.addEventListener("blur", (e) => toggleErrorForJoin(e.target));
});

const passwordInputs = [passwordInput, passwordCheckInput];
passwordInputs.forEach((input) =>
	input.addEventListener("blur", showPasswordNotEqualError)
);

submitButton.addEventListener("click", authFormJoin);

inputsAndButton.forEach((ele) =>
	ele.addEventListener("keydown", (e) => e.key === "Enter" && authFormJoin())
);
