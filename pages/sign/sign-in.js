import {errorMessages} from "./error-message.js";
import {
    emailErrorMessageElement,
    emailInput,
    passwordErrorMessageElement,
    passwordInput,
    showErrorMessage,
    validateEmailType,
    validatePassword
} from "./sign.js";

const loginButton = document.querySelector('.btn.login');

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

emailInput.addEventListener("focusout", ({target}) => {
    validateEmailType(target.value);
});
passwordInput.addEventListener("focusout", ({target}) => {
    validatePassword(target.value);
});
loginButton.addEventListener("click", login);
