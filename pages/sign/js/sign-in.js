import {errorMessages} from "./error-message.js";
import {
    emailErrorMessageElement,
    emailInput,
    passwordErrorMessageElement,
    passwordInput,
    saveAccessToken,
    showErrorMessage,
    validateEmailType,
    validatePassword
} from "./sign.js";
import {domain} from "./constant.js";
import {postApi} from "./fetch.js";
import LocalStorage from "./localstorage.js";
import {signUpATag} from "./page.js";

const loginButton = document.querySelector('.btn.login');

const _login = async (e) => {
    e.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;

    const body = {
        email: email,
        password: password
    }
    try {
        const response = await postApi(`${domain}/sign-in`, body);
        if (response.ok) {
            const result = await response.json();
            saveAccessToken(result);
        }
        if (response.status === 400) {
            showErrorMessage(emailInput, emailErrorMessageElement, errorMessages.email.invalid);
            showErrorMessage(passwordInput, passwordErrorMessageElement, errorMessages.password.invalid);
        }
    } catch (err) {
        console.error(err);
    }
}

signUpATag.addEventListener('click', () => {
    if (LocalStorage.getItem("accessToken")) {
        signUpATag.setAttribute("href", "/folder.html");
    }
});
emailInput.addEventListener("focusout", ({target}) => {
    validateEmailType(target.value);
});
passwordInput.addEventListener("focusout", ({target}) => {
    validatePassword(target.value);
});
loginButton.addEventListener("click", _login);
