import {
    emailErrorMessageElement,
    emailInput,
    emailInputValid,
    passwordErrorMessageElement,
    passwordInput,
    passwordInputValid,
    removeErrorMessage,
    showErrorMessage,
    toggleEyeButton,
} from "./sign.js";
import {errorMessages} from "./error-message.js";
import {passwordRegex} from "./constant.js";

const passwordCheckInput = document.querySelector('#sign-password-repeat');
const passwordCheckEyeButton = document.querySelector('.eye-off-check');

function validateSignUpEmail() {
    const {validate, data} = emailInputValid;
    if (validate) {
        if (data === "test@codeit.com") {
            showErrorMessage(emailInput, emailErrorMessageElement, errorMessages.email.duplicated);
        } else {
            removeErrorMessage(emailInput, emailErrorMessageElement);
        }
    }
}

function validateSignUpPassword() {
    const {validate, data} = passwordInputValid;
    if (validate) {
        if (!passwordRegex.test(data)) {
            showErrorMessage(passwordInput, passwordErrorMessageElement, errorMessages.password.typeInvalid);
        }
    }
}

emailInput.addEventListener("focusout", validateSignUpEmail);
passwordInput.addEventListener("focusout", validateSignUpPassword);
passwordCheckEyeButton.addEventListener("click", () => {
    toggleEyeButton(passwordCheckInput, passwordCheckEyeButton);
});