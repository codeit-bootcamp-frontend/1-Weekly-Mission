import { displayErrorMessage, addErrorClass, removeErrorClass } from "../constants/error-handling.js";
import { VALUE_EMPTY, isEmpty, isValidPassword } from "../constants/common.js";
import ERROR_MESSAGES from "../constants/error-messages.js";

const validatePasswordInput = (passwordInputEl, passwordErrorMessage, passwordInputValue) => {
  const passwordValue = passwordInputEl.value;
  const isEmptyValue = isEmpty(passwordValue);
  const inValidPassword = !isValidPassword(passwordValue);
  const passwordMismatch = passwordValue !== passwordInputValue;
  const isConfirmPasswordInput = passwordInputValue !== undefined;
  const errorMessagePassword = ERROR_MESSAGES.password;

  if (isEmptyValue) {
    displayErrorMessage(passwordErrorMessage, errorMessagePassword.empty);
    addErrorClass(passwordInputEl);
    return;
  }

  if (inValidPassword) {
    displayErrorMessage(passwordErrorMessage, errorMessagePassword.invalid);
    addErrorClass(passwordInputEl);
    return;
  }

  if (isConfirmPasswordInput && passwordMismatch) {
    displayErrorMessage(passwordErrorMessage, errorMessagePassword.mismatch);
    addErrorClass(passwordInputEl);
    return;
  }

  displayErrorMessage(passwordErrorMessage, VALUE_EMPTY);
  removeErrorClass(passwordInputEl);
};

export default validatePasswordInput;
