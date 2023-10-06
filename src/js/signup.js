import { form, emailInput, emailErrorMessage, passwordErrorMessages, passwordInputs } from "../utils/tags.js";
import { ERROR_CLASS_NAME, TEST_ACCOUNT, REDIRECT_PATH, VALUE_EMPTY, isEmpty, isValidEmail } from "../utils/utils.js";
import { displayErrorMessage, addErrorClass, removeErrorClass } from "../utils/error-handling.js";
import validatePasswordInput from "../utils/validate-password-input.js";
import ERROR_MESSAGES from "../components/error-messages.js";
import generateEyeButton from "../utils/eye-button.js";

const validateEmail = () => {
  const emailValue = emailInput.value;

  const isEmptyValue = isEmpty(emailValue);
  const isDuplicate = emailValue === TEST_ACCOUNT.email;
  const invalidEmail = !isValidEmail(emailValue);
  const emptyMessage = ERROR_MESSAGES.email.empty;
  const invalidMessage = ERROR_MESSAGES.email.invalid;
  const duplicateMessage = ERROR_MESSAGES.email.duplicate;

  if (isEmptyValue) {
    displayErrorMessage(emailErrorMessage, emptyMessage);
    addErrorClass(emailInput);
    return;
  }

  if (invalidEmail) {
    displayErrorMessage(emailErrorMessage, invalidMessage);
    addErrorClass(emailInput);
    return;
  }

  isDuplicate
    ? (displayErrorMessage(emailErrorMessage, duplicateMessage), addErrorClass(emailInput))
    : (displayErrorMessage(emailErrorMessage, VALUE_EMPTY), removeErrorClass(emailInput));
};

const validatePassword = (passwordInput, passwordErrorMessage) => {
  validatePasswordInput(passwordInput, passwordErrorMessage);
};

const validateConfirmPassword = (passwordInput, passwordErrorMessage, passwordInputValue) => {
  validatePasswordInput(passwordInput, passwordErrorMessage, passwordInputValue);
};

const handleSignupFormSubmit = (event) => {
  event.preventDefault();

  const passwordInput = passwordInputs[0];
  const passwordInputValue = passwordInput.value;
  const confirmPasswordInput = passwordInputs[1];
  const passwordErrorMessage = passwordErrorMessages[0];
  const confirmPasswordErrorMessages = passwordErrorMessages[1];

  validateEmail();
  validatePassword(passwordInput, passwordErrorMessage);
  validateConfirmPassword(confirmPasswordInput, confirmPasswordErrorMessages, passwordInputValue);

  const isValidForm =
    !emailInput.classList.contains(ERROR_CLASS_NAME) &&
    !passwordInput.classList.contains(ERROR_CLASS_NAME) &&
    !confirmPasswordInput.classList.contains(ERROR_CLASS_NAME);

  if (isValidForm) {
    window.location.href = REDIRECT_PATH;
  }
};

form.addEventListener("submit", handleSignupFormSubmit);

emailInput.addEventListener("focusout", validateEmail);

passwordInputs.forEach((passwordInput, index) => {
  index === 0
    ? passwordInput.addEventListener("focusout", () => validatePassword(passwordInput, passwordErrorMessages[index]))
    : passwordInput.addEventListener("focusout", () =>
        validateConfirmPassword(passwordInput, passwordErrorMessages[index], passwordInputs[0].value)
      );
});

generateEyeButton();
