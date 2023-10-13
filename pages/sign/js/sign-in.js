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
import {domain} from "./constant.js";
import LocalStorage from "./localstorage.js";
import {postApi} from "./fetch.js";

const loginButton = document.querySelector('.btn.login');

const login = async (e) => {
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
            const loginToken = "accessToken";
            const {accessToken} = result.data;
            if (LocalStorage.getItem(loginToken)) {
                LocalStorage.removeItem(accessToken);
            }
            LocalStorage.saveItem(loginToken, accessToken);
            location.href = "/folder.html";
        }
        if (response.status === 400) {
            showErrorMessage(emailInput, emailErrorMessageElement, errorMessages.email.invalid);
            showErrorMessage(passwordInput, passwordErrorMessageElement, errorMessages.password.invalid);
        }
    } catch (err) {
        console.error(err);
    }
}

emailInput.addEventListener("focusout", ({target}) => {
    validateEmailType(target.value);
});
passwordInput.addEventListener("focusout", ({target}) => {
    validatePassword(target.value);
});
loginButton.addEventListener("click", login);
