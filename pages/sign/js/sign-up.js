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
import {domain, passwordRegex} from "./constant.js";
import LocalStorage from "./localstorage.js";

const signUpButton = document.querySelector('.btn.sign-up');
const passwordRepeatInput = document.querySelector('#sign-password-repeat');
const passwordRepeatErrorMessageElement = document.createElement("p");
const passwordRepeatEyeButton = document.querySelector('.eye-off-check');

async function validateSignUpEmail(input) {
    if (validateEmailType(input)) {
        await fetch(`${domain}/check-email`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: input
            })
        })
            .then(response => {
                if (response.status === 409) {
                    throw new Error("DuplicatedError");
                }
                removeErrorMessage(emailInput, emailErrorMessageElement);
                return true;
            })
            .catch(error => {
                console.error(error);
                showErrorMessage(emailInput, emailErrorMessageElement, errorMessages.email.duplicated);
                return false;
            })
    }
}

function validateSignUpPassword(input) {
    if (validatePassword(input)) {
        if (passwordRegex.test(input)) {
            removeErrorMessage(passwordInput, passwordErrorMessageElement);
            return true;
        }
        showErrorMessage(passwordInput, passwordErrorMessageElement, errorMessages.password.typeInvalid);
        return false;
    }
}

function validatePasswordRepeatMatch(input) {
    const password = passwordInput.value;
    if (input && password === input) {
        removeErrorMessage(passwordRepeatInput, passwordRepeatErrorMessageElement);
        return true;
    }
    showErrorMessage(passwordRepeatInput, passwordRepeatErrorMessageElement, errorMessages.password.notMatched);
    return false;
}

const signUp = (e) => {
    e.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;
    const passwordRepeat = passwordRepeatInput.value;

    if (validateSignUpEmail(email) && validateSignUpPassword(password) &&
        validatePasswordRepeatMatch(passwordRepeat)) {
        fetch(`${domain}/sign-up`, {
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
                    throw new Error("AuthSignUpError");
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
            .catch(error => console.error(error));
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
signUpButton.addEventListener("click", signUp);
