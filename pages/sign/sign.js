import {errorMessages} from "./error-message.js";
import {emailRegex} from "./constant.js";

export const emailInput = document.querySelector('#sign-email');
export const passwordInput = document.querySelector('#sign-password');
export const passwordEyeButton = document.querySelector('.eye-off');

export const emailErrorMessageElement = document.createElement("p");
export const passwordErrorMessageElement = document.createElement("p");

function validateEmailType(e) {
    const input = e.target.value.trimEnd();
    if (emailRegex.test(input)) {
        removeErrorMessage(emailInput, emailErrorMessageElement);
        emailInputValid.validate = true;
        emailInputValid.data = input;
    } else {
        let errorMessage = "";
        if (!input) {
            errorMessage = errorMessages.email.empty;
        } else if (!emailRegex.test(input)) {
            errorMessage = errorMessages.email.typeInvalid;
        }
        showErrorMessage(emailInput, emailErrorMessageElement, errorMessage);
        emailInputValid.validate = false;
        emailInputValid.data = null;
    }
}

export const emailInputValid = {
    validate: false,
    data: null
};

export function showErrorMessage(input, errorMessageElement, errorMessage) {
    input.classList.add("error-input");
    errorMessageElement.textContent = errorMessage;
    errorMessageElement.classList.add("error-input-message");
    input.after(errorMessageElement);
}

export function removeErrorMessage(input, errorMessageElement) {
    input.classList.remove("error-input");
    errorMessageElement.remove();
}

function validatePassword(e) {
    const input = e.target.value;
    if (input) {
        removeErrorMessage(passwordInput, passwordErrorMessageElement);
        passwordInputValid.validate = true;
        passwordInputValid.data = input;
    } else {
        showErrorMessage(passwordInput, passwordErrorMessageElement, errorMessages.password.empty);
        passwordInputValid.validate = false;
        passwordInputValid.data = null;
    }
}

export const passwordInputValid = {
    validate: false,
    data: null
};

export function toggleEyeButton(input, eyeButton) {
    if (input.getAttribute("type") === "password") {
        input.setAttribute("type", "text");
        eyeButton.setAttribute("src", "images/eye-on.svg");
    } else {
        input.setAttribute("type", "password");
        eyeButton.setAttribute("src", "images/eye-off.svg");
    }
}

emailInput.addEventListener("focusout", validateEmailType);
passwordInput.addEventListener("focusout", validatePassword);
passwordEyeButton.addEventListener("click", () => {
    toggleEyeButton(passwordInput, passwordEyeButton);
});
