import {
	ERROR_MSG,
	USER,
	isAllInputsValid,
	toggleError,
	authForm,
	formInputs,
	submitButton,
	inputsAndButton,
} from "./auth.js";

// --- 순수 함수 ---

// 유저 정보 확인 임시
const isValidUser = ([email, password]) => USER[email.value] === password.value;

// --- 사이드 이펙트 함수들 ---

// 존재하지 않는 사용자일 경우 에러메시지 보여주기
const showInvalidUserError = (inputArr) =>
	inputArr.forEach((input) => toggleError(input, ERROR_MSG[input.id].check));

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

formInputs.forEach((input) => {
	input.addEventListener("blur", (e) => toggleError(e.target));
	input.addEventListener(
		"keydown",
		(e) => e.key === "Enter" && authFormLogin()
	);
});

submitButton.addEventListener("click", authFormLogin);
