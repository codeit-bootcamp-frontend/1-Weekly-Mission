import {errorMessages} from "./error-message.js";
import {emailRegex} from "./constant.js";

export const emailInput = document.querySelector('#sign-email');
export const passwordInput = document.querySelector('#sign-password');
export const passwordEyeButton = document.querySelector('.eye-off');

const submitButton = document.querySelector('.btn.login');

export const emailErrorMessageElement = document.createElement("p");
export const passwordErrorMessageElement = document.createElement("p");

export function validateEmailType(e) {
    const input = e.target.value.trimEnd();
    if (emailRegex.test(input)) {
        removeErrorMessage(emailInput, emailErrorMessageElement);
        return true;
    } else {
        let errorMessage = "";
        if (!input) {
            errorMessage = errorMessages.email.empty;
        } else if (!emailRegex.test(input)) {
            errorMessage = errorMessages.email.typeInvalid;
        }
        showErrorMessage(emailInput, emailErrorMessageElement, errorMessage);
        return false;
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

export function validatePassword(e) {
    const input = e.target.value;
    if (input) {
        removeErrorMessage(passwordInput, passwordErrorMessageElement);
    } else if (!input) {
        showErrorMessage(passwordInput, passwordErrorMessageElement, errorMessages.password.empty);
    }
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

function login(e) {
    e.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;

    if (email === "test@codeit.com" && password === "codeit101") {
        location.href = "/folder.html";
        return;
    }

    showErrorMessage(emailInput, emailErrorMessageElement, errorMessages.email.invalid);
    showErrorMessage(passwordInput, passwordErrorMessageElement, errorMessages.password.invalid);
}

emailInput.addEventListener("focusout", validateEmailType);
passwordInput.addEventListener("focusout", validatePassword);
submitButton.addEventListener("click", login);
passwordEyeButton.addEventListener("click", () => {
    toggleEyeButton(passwordInput, passwordEyeButton);
});
