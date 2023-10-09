import {
    setInputError,
    removeInputError,
    isEmailValid,
    togglePassword,
    TEST_USER,
} from "./utils.js";

const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const passwordCheck = document.querySelector("#password-check");

const emailErrorMessage = document.querySelector("#email-error-message");
const passwordErrorMessage = document.querySelector("#password-error-message");
const passwordCheckErrorMessage = document.querySelector("#password-check-error-message");


const passwordToggleButton = document.querySelector("#password-signup-toggle");
const passwordCheckToggleButton = document.querySelector("#password-check-toggle");
const signForm = document.querySelector("#form");

function validateEmailInput(email) {
    if (email === "") {
        setInputError({ input: emailInput, errorMessage: emailErrorMessage }, "이메일을 입력해주세요.");
        return;
    }

    if (email === TEST_USER.email) {
        setInputError(
            { input: emailInput, errorMessage: emailErrorMessage },
            "이미 사용중인 이메일입니다."
        );
        return;
    }
    if (!isEmailValid(email)) {
        setInputError(
            { input: emailInput, errorMessage: emailErrorMessage },
            "올바른 이메일 주소가 아닙니다."
        );
        return;
    }
    removeInputError({ input: emailInput, errorMessage: emailErrorMessage });
}


function validatePasswordInput(password) {
    var patternInt = /[0-9]/;
    var patternString = /[a-zA-Z]/;
    if (password.length < 8 || !patternInt.test(password) || !patternString.test(password)) {
        setInputError(
            { input: passwordInput, errorMessage: passwordErrorMessage },
            "비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요."
        );
        return;
    }
    removeInputError({ input: passwordInput, errorMessage: passwordErrorMessage });
}


passwordToggleButton.addEventListener("click", () =>
    togglePassword(passwordInput, passwordToggleButton)
);

passwordCheckToggleButton.addEventListener("click", () =>
    togglePassword(passwordCheck, passwordCheckToggleButton)
);


function checkPasswordMatch(password) {
    if (password !== passwordInput.value) {
        setInputError(
            { input: passwordCheck, errorMessage: passwordCheckErrorMessage },
            "비밀번호가 일치하지 않아요."
        );
        return;
    }
    removeInputError({ input: passwordCheck, errorMessage: passwordCheckErrorMessage });
}


function submitForm(event) {
    event.preventDefault();
    const isValidUser =
        emailInput.value !== TEST_USER.email && emailInput.value !== ""
        && passwordInput.value === passwordCheck.value && passwordInput.value !== "";

    if (isValidUser) {
        location.href = "/folder";
        return;
    }
}
emailInput.addEventListener("focusout", (event) => validateEmailInput(event.target.value));
passwordInput.addEventListener("focusout", (event) => validatePasswordInput(event.target.value));
passwordCheck.addEventListener("focusout", (event) => checkPasswordMatch(event.target.value));
signForm.addEventListener("submit", submitForm);