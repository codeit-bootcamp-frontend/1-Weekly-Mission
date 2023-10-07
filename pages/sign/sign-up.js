import {
    emailErrorMessageElement,
    emailInput,
    passwordEyeButton,
    passwordInput,
    removeErrorMessage,
    showErrorMessage,
    toggleEyeButton,
    validateEmailType,
    validatePassword,
} from "./sign.js";
import {errorMessages} from "./error-message.js";

const passwordCheckInput = document.querySelector('#sign-password-repeat');
const passwordCheckEyeButton = document.querySelector('.eye-off-check');

function validateSignUpEmail(e) {
    if(validateEmailType(e)) {
        const input = e.target.value.trimEnd();
        if (input === "test@codeit.com") {
            showErrorMessage(emailInput, emailErrorMessageElement, errorMessages.email.duplicated);
        } else {
            removeErrorMessage(emailInput, emailErrorMessageElement);
        }
    }
}

emailInput.addEventListener("focusout", validateSignUpEmail);
passwordInput.addEventListener("focusout", validatePassword);
passwordEyeButton.addEventListener("click", () => {
    toggleEyeButton(passwordInput, passwordEyeButton);
});
passwordCheckEyeButton.addEventListener("click", () => {
    toggleEyeButton(passwordCheckInput, passwordCheckEyeButton);
});