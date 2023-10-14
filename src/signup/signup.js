import {
  formEl,
  emailInputEl,
  emailErrorMessageEl,
  passwordErrorMessagesEl,
  passwordInputsEl,
} from "../constants/tags.js";
import { REDIRECT_PATH, VALUE_EMPTY, isEmpty, isValidEmail } from "../constants/common.js";
import { displayErrorMessage, addErrorClass, removeErrorClass } from "../constants/error-handling.js";
import validatePasswordInput from "../utils/validate-password-input.js";
import ERROR_MESSAGES from "../constants/error-messages.js";
import generateEyeButton from "../utils/generate-eye-button.js";
import requestSignup from "../utils/request-signup.js";
import requestCheckEmail from "../utils/api-check-email.js";
import refreshAccessToken from "../utils/api-refresh-token.js";

const validateEmail = () => {
  const emailValue = emailInputEl.value;

  const isEmptyValue = isEmpty(emailValue);
  const isDuplicate = !requestCheckEmail(emailValue);
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

const validatePassword = (passwordInputEl, passwordErrorMessage) =>
  validatePasswordInput(passwordInputEl, passwordErrorMessage);

const validateConfirmPassword = (passwordInputEl, passwordErrorMessage, passwordInputValue) =>
  validatePasswordInput(passwordInputEl, passwordErrorMessage, passwordInputValue);

const handleSignupFormSubmit = async (event) => {
  event.preventDefault();
  const emailValue = emailInputEl.value;
  const passwordInputEl = passwordInputsEl[0];
  const passwordInputValue = passwordInputEl.value;
  const confirmPasswordInputEl = passwordInputsEl[1];
  const passwordErrorMessage = passwordErrorMessagesEl[0];
  const confirmPasswordErrorMessages = passwordErrorMessagesEl[1];

  validateEmail();
  validatePassword(passwordInputEl, passwordErrorMessage);
  const isMismatchPassword = validateConfirmPassword(
    confirmPasswordInputEl,
    confirmPasswordErrorMessages,
    passwordInputValue
  );

  const isValidRequest = await requestSignup(emailValue, passwordInputValue, isMismatchPassword);

  if (isValidRequest) {
    window.location.href = REDIRECT_PATH;
    return;
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

(async () => {
  if (await refreshAccessToken()) {
    window.location.href = REDIRECT_PATH;
  }
})();
