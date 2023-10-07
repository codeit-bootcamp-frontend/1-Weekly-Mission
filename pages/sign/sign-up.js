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

const passwordRepeatInput = document.querySelector('#sign-password-repeat');
const passwordRepeatErrorMessageElement = document.createElement("p");
const passwordRepeatEyeButton = document.querySelector('.eye-off-check');

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

const validatePasswordRepeatMatch = ({target}) => {
    const passwordRepeat = target.value;
    const {data: password} = passwordInputValid;
    if (password !== passwordRepeat) {
        showErrorMessage(passwordRepeatInput, passwordRepeatErrorMessageElement, errorMessages.password.notMatched);
    } else {
        removeErrorMessage(passwordRepeatInput, passwordRepeatErrorMessageElement);
    }
}

emailInput.addEventListener("focusout", validateSignUpEmail);
passwordInput.addEventListener("focusout", validateSignUpPassword);
passwordRepeatInput.addEventListener("focusout", validatePasswordRepeatMatch);
passwordRepeatEyeButton.addEventListener("click", () => {
    toggleEyeButton(passwordRepeatInput, passwordRepeatEyeButton);
});