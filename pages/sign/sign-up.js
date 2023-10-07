import {
    emailInput,
    passwordEyeButton,
    passwordInput,
    toggleEyeButton,
    validateEmailType,
    validatePassword
} from "./sign.js";

const passwordCheckInput = document.querySelector('#sign-password-repeat');
const passwordCheckEyeButton = document.querySelector('.eye-off-check');

emailInput.addEventListener("focusout", validateEmailType);
passwordInput.addEventListener("focusout", validatePassword);
passwordEyeButton.addEventListener("click", () => {
    toggleEyeButton(passwordInput, passwordEyeButton);
});
passwordCheckEyeButton.addEventListener("click", () => {
    toggleEyeButton(passwordCheckInput, passwordCheckEyeButton);
});