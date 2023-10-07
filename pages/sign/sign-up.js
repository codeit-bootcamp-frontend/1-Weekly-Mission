import {
    emailErrorMessageElement,
    emailInput,
    passwordErrorMessageElement,
    passwordInput,
    removeErrorMessage,
    showErrorMessage,
    toggleEyeButton,
    validateEmailType,
    validatePassword,
} from "./sign.js";
import {errorMessages} from "./error-message.js";
import {passwordRegex} from "./constant.js";

const signUpButton = document.querySelector('.btn.sign-up');
const passwordRepeatInput = document.querySelector('#sign-password-repeat');
const passwordRepeatErrorMessageElement = document.createElement("p");
const passwordRepeatEyeButton = document.querySelector('.eye-off-check');

function validateSignUpEmail(input) {
    if (validateEmailType(input)) {
        if (input === "test@codeit.com") {
            showErrorMessage(emailInput, emailErrorMessageElement, errorMessages.email.duplicated);
        } else {
            removeErrorMessage(emailInput, emailErrorMessageElement);
        }
    }
}

function validateSignUpPassword(input) {
    if (validatePassword(input)) {
        if (!passwordRegex.test(input)) {
            showErrorMessage(passwordInput, passwordErrorMessageElement, errorMessages.password.typeInvalid);
        }
    }
}

function validatePasswordRepeatMatch(input) {
    const password = passwordInput.value;
    if (!input || password !== input) {
        showErrorMessage(passwordRepeatInput, passwordRepeatErrorMessageElement, errorMessages.password.notMatched);
    } else {
        removeErrorMessage(passwordRepeatInput, passwordRepeatErrorMessageElement);
    }
}


emailInput.addEventListener("focusout", ({target}) => {
    validateSignUpEmail(target.value);
});
passwordInput.addEventListener("focusout", ({target}) => {
    validateSignUpPassword(target.value);
});
passwordRepeatInput.addEventListener("focusout", ({target}) => {
    validatePasswordRepeatMatch(target.value);
});
passwordRepeatEyeButton.addEventListener("click", () => {
    toggleEyeButton(passwordRepeatInput, passwordRepeatEyeButton);
});
