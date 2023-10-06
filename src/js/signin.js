import { form, emailInput, emailErrorMessage, passwordErrorMessages, passwordInputs } from "../utils/tags.js";
import { TEST_ACCOUNT, REDIRECT_PATH, VALUE_EMPTY, isEmpty, isValidEmail } from "../utils/utils.js";
import { displayErrorMessage, addErrorClass, removeErrorClass } from "../utils/error-handling.js";
import generateEyeButton from "../utils/eye-button.js";
import ERROR_MESSAGES from "../components/error-messages.js";

const validateEmail = () => {
  const emailValue = emailInput.value;
  const isEmptyValue = isEmpty(emailValue);

  if (isEmptyValue) {
    displayErrorMessage(emailErrorMessage, ERROR_MESSAGES.email.empty);
    addErrorClass(emailInput);
    return;
  }

  isValidEmail(emailValue)
    ? (displayErrorMessage(emailErrorMessage, VALUE_EMPTY), removeErrorClass(emailInput))
    : (displayErrorMessage(emailErrorMessage, ERROR_MESSAGES.email.invalid), addErrorClass(emailInput));
};

const validatePassword = (passwordInput, passwordErrorMessage) => {
  const passwordValue = passwordInput.value;
  const isEmptyValue = isEmpty(passwordValue);

  displayErrorMessage(passwordErrorMessage, isEmptyValue ? ERROR_MESSAGES.password.empty : VALUE_EMPTY);
  isEmptyValue ? addErrorClass(passwordInput) : removeErrorClass(passwordInput);
};

const handleLoginFormSubmit = (event) => {
  event.preventDefault();

  passwordInputs.forEach((passwordInput, index) => {
    const isValid = emailInput.value === TEST_ACCOUNT.email && passwordInput.value === TEST_ACCOUNT.pw;

    if (isValid) {
      window.location.href = REDIRECT_PATH;
      return;
    }

    Object.keys(ERROR_MESSAGES.submit).forEach((field) => {
      displayErrorMessage(
        field === "email" ? emailErrorMessage : passwordErrorMessages[index],
        ERROR_MESSAGES.submit[field]
      );
    });

    addErrorClass(emailInput, passwordInput);
  });
};

emailInput.addEventListener("focusout", validateEmail);

form.addEventListener("submit", handleLoginFormSubmit);

passwordInputs.forEach((passwordInput, index) =>
  passwordInput.addEventListener("focusout", () => validatePassword(passwordInput, passwordErrorMessages[index]))
);

generateEyeButton();
