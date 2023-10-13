import {
    emailErrorMessageElement,
    emailInput,
    passwordErrorMessageElement,
    passwordInput,
    removeErrorMessage,
    saveAccessToken,
    showErrorMessage,
    signInATag,
    toggleEyeButton,
    validateEmailType,
    validatePassword,
} from "./sign.js";
import {errorMessages} from "./error-message.js";
import {domain, passwordRegex} from "./constant.js";
import {postApi} from "./fetch.js";
import LocalStorage from "./localstorage.js";

const signUpButton = document.querySelector('.btn.sign-up');
const passwordRepeatInput = document.querySelector('#sign-password-repeat');
const passwordRepeatErrorMessageElement = document.createElement("p");
const passwordRepeatEyeButton = document.querySelector('.eye-off-check');

async function validateSignUpEmail(input) {
    if (validateEmailType(input)) {
        try {
            const response = await postApi(`${domain}/check-email`, {email: input });
            if (response.status === 409) {
                showErrorMessage(emailInput, emailErrorMessageElement, errorMessages.email.duplicated);
                return false;
            }
            removeErrorMessage(emailInput, emailErrorMessageElement);
            return true;
        } catch (err) {
            console.error(err);
        }
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

const _signUp = async (e) => {
    e.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;
    const passwordRepeat = passwordRepeatInput.value;

    const body = {
        email: email,
        password: password
    }
    try {
        if (await validateSignUpEmail(email) && validateSignUpPassword(password) &&
            validatePasswordRepeatMatch(passwordRepeat)) {
            const response = await postApi(`${domain}/sign-up`, body);
            if (response.ok) {
                const result = await response.json();
                saveAccessToken(result);
            }
            if (response.status === 400) {
                throw new Error("AuthSignUpError");
            }
        }
    } catch (err) {
        console.error(err);
    }
}

signInATag.addEventListener('click', () => {
    if (LocalStorage.getItem("accessToken")) {
        signInATag.setAttribute("href", "/folder.html");
    }
});
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
signUpButton.addEventListener("click", _signUp);
