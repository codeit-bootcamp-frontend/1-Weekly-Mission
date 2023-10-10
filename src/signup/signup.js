import {
  formEl,
  emailInputEl,
  emailErrorMessageEl,
  passwordErrorMessagesEl,
  passwordInputsEl,
} from "../constants/tags.js";
import {
  ERROR_CLASS_NAME,
  TEST_ACCOUNT,
  REDIRECT_PATH,
  VALUE_EMPTY,
  isEmpty,
  isValidEmail,
} from "../constants/common.js";
import { displayErrorMessage, addErrorClass, removeErrorClass } from "../constants/error-handling.js";
import validatePasswordInput from "../utils/validate-password-input.js";
import ERROR_MESSAGES from "../constants/error-messages.js";
import generateEyeButton from "../utils/generate-eye-button.js";

const validateEmail = () => {
  const emailValue = emailInputEl.value;

  const isEmptyValue = isEmpty(emailValue);
  const isDuplicate = emailValue === TEST_ACCOUNT.email;
  const invalidEmail = !isValidEmail(emailValue);
  const emptyMessage = ERROR_MESSAGES.email.empty;
  const invalidMessage = ERROR_MESSAGES.email.invalid;
  const duplicateMessage = ERROR_MESSAGES.email.duplicate;

  if (isEmptyValue) {
    displayErrorMessage(emailErrorMessageEl, emptyMessage);
    addErrorClass(emailInputEl);
    return;
  }

  if (invalidEmail) {
    displayErrorMessage(emailErrorMessageEl, invalidMessage);
    addErrorClass(emailInputEl);
    return;
  }

  isDuplicate
    ? (displayErrorMessage(emailErrorMessageEl, duplicateMessage), addErrorClass(emailInputEl))
    : (displayErrorMessage(emailErrorMessageEl, VALUE_EMPTY), removeErrorClass(emailInputEl));
};

const validatePassword = (passwordInputEl, passwordErrorMessage) => {
  validatePasswordInput(passwordInputEl, passwordErrorMessage);
};

const validateConfirmPassword = (passwordInputEl, passwordErrorMessage, passwordInputValue) => {
  validatePasswordInput(passwordInputEl, passwordErrorMessage, passwordInputValue);
};

const handleSignupFormSubmit = (event) => {
  event.preventDefault();

  const passwordInputEl = passwordInputsEl[0];
  const passwordInputValue = passwordInputEl.value;
  const confirmPasswordInputEl = passwordInputsEl[1];
  const passwordErrorMessage = passwordErrorMessagesEl[0];
  const confirmPasswordErrorMessages = passwordErrorMessagesEl[1];

  validateEmail();
  validatePassword(passwordInputEl, passwordErrorMessage);
  validateConfirmPassword(confirmPasswordInputEl, confirmPasswordErrorMessages, passwordInputValue);

  const isValidForm =
    !emailInputEl.classList.contains(ERROR_CLASS_NAME) &&
    !passwordInputEl.classList.contains(ERROR_CLASS_NAME) &&
    !confirmPasswordInputEl.classList.contains(ERROR_CLASS_NAME);

  if (isValidForm) {
    window.location.href = REDIRECT_PATH;
  }
};

formEl.addEventListener("submit", handleSignupFormSubmit);

emailInputEl.addEventListener("focusout", validateEmail);

passwordInputsEl.forEach((passwordInputEl, index) => {
  const isFirstPasswordInput = index === 0;

  isFirstPasswordInput
    ? passwordInputEl.addEventListener("focusout", () =>
        validatePassword(passwordInputEl, passwordErrorMessagesEl[index])
      )
    : passwordInputEl.addEventListener("focusout", () => {
        const firstPasswordInputValue = passwordInputsEl[0].value;

        validateConfirmPassword(passwordInputEl, passwordErrorMessagesEl[index], firstPasswordInputValue);
      });
});

generateEyeButton();
