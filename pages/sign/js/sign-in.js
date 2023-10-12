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

const loginButton = document.querySelector('.btn.login');

const login = (e) => {
    e.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;

    fetch(`${domain}/sign-in`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            if (response.status === 400) {
                throw new Error("AuthApiError");
            }
        })
        .then(result => {
            const loginToken = "accessToken";
            const {accessToken} = result.data;
            if (LocalStorage.getItem(loginToken)) {
                LocalStorage.removeItem(accessToken);
            }
            LocalStorage.saveItem(loginToken, accessToken);
            location.href = "/folder.html";
        })
        .catch(error => {
            console.error(error);
            showErrorMessage(emailInput, emailErrorMessageElement, errorMessages.email.invalid);
            showErrorMessage(passwordInput, passwordErrorMessageElement, errorMessages.password.invalid);
        });
}

emailInput.addEventListener("focusout", ({target}) => {
    validateEmailType(target.value);
});
passwordInput.addEventListener("focusout", ({target}) => {
    validatePassword(target.value);
});
loginButton.addEventListener("click", login);
