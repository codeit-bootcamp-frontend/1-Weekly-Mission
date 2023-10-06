import { form, emailInput, emailErrorMessage, passwordErrorMessages, passwordInputs } from "../utils/tags.js";
import { TEST_ACCOUNT, REDIRECT_PATH, VALUE_EMPTY, isEmpty, isValidEmail } from "../utils/utils.js";
import { displayErrorMessage, addErrorClass, removeErrorClass } from "../utils/error-handling.js";
import generateEyeButton from "../utils/eye-button.js";
import ERROR_MESSAGES from "../components/error-messages.js";

const validateEmail = () => {
  const emailValue = emailInput.value;

  const isEmptyValue = isEmpty(emailValue);
  const isValidValue = isValidEmail(emailValue);
  const invalidMessage = ERROR_MESSAGES.email.invalid;

  if (isEmptyValue) {
    displayErrorMessage(emailErrorMessage, ERROR_MESSAGES.email.empty);
    addErrorClass(emailInput);
    return;
  }

  isValidValue
    ? (displayErrorMessage(emailErrorMessage, VALUE_EMPTY), removeErrorClass(emailInput))
    : (displayErrorMessage(emailErrorMessage, invalidMessage), addErrorClass(emailInput));
};

const validatePassword = (passwordInput, passwordErrorMessage) => {
  const passwordValue = passwordInput.value;
  const isEmptyValue = isEmpty(passwordValue);
  const emptyMessage = ERROR_MESSAGES.password.empty;

  displayErrorMessage(passwordErrorMessage, isEmptyValue ? emptyMessage : VALUE_EMPTY);
  isEmptyValue ? addErrorClass(passwordInput) : removeErrorClass(passwordInput);
};

const handleLoginFormSubmit = (event) => {
  event.preventDefault();

  passwordInputs.forEach((passwordInput, index) => {
    const emailInputValue = emailInput.value;
    const passwordInputValue = passwordInput.value;
    const testAccountEmail = TEST_ACCOUNT.email;
    const testAccountPW = TEST_ACCOUNT.pw;
    const isValid = emailInputValue === testAccountEmail && passwordInputValue === testAccountPW;

    const submitErrorMessages = ERROR_MESSAGES.submit;
    const isMatchEmail = (field) => field === "email";

    if (isValid) {
      window.location.href = REDIRECT_PATH;
      return;
    }

    Object.keys(submitErrorMessages).forEach((field) => {
      displayErrorMessage(
        isMatchEmail(field) ? emailErrorMessage : passwordErrorMessages[index],
        submitErrorMessages[field]
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
