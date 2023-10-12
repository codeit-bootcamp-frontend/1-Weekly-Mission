import {errorMessages} from "./error-message.js";
import {emailRegex} from "./constant.js";

export const emailInput = document.querySelector('#sign-email');
export const passwordInput = document.querySelector('#sign-password');
export const passwordEyeButton = document.querySelector('.eye-off');

export const emailErrorMessageElement = document.createElement("p");
export const passwordErrorMessageElement = document.createElement("p");

export function validateEmailType(input) {
    if (emailRegex.test(input)) {
        removeErrorMessage(emailInput, emailErrorMessageElement);
        return true;
    }
    const errorMessage = checkValidEmail(input);
    showErrorMessage(emailInput, emailErrorMessageElement, errorMessage);
    return false;
}

function checkValidEmail(input) {
    if (!input) {
        return errorMessages.email.empty;
    }
    if (!emailRegex.test(input)) {
        return errorMessages.email.typeInvalid;
    }
}

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

export function validatePassword(input) {
    if (input) {
        removeErrorMessage(passwordInput, passwordErrorMessageElement);
        return input;
    }
    showErrorMessage(passwordInput, passwordErrorMessageElement, errorMessages.password.empty);
    return null;
}

export function toggleEyeButton(input, eyeButton) {
    if (input.getAttribute("type") === "password") {
        input.setAttribute("type", "text");
        eyeButton.setAttribute("src", "images/eye-on.svg");
    } else {
        input.setAttribute("type", "password");
        eyeButton.setAttribute("src", "images/eye-off.svg");
    }
}

passwordEyeButton.addEventListener("click", () => {
    toggleEyeButton(passwordInput, passwordEyeButton);
});
