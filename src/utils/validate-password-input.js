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
    return false;
  }

  if (inValidPassword) {
    displayErrorMessage(passwordErrorMessage, errorMessagePassword.invalid);
    addErrorClass(passwordInputEl);
    return false;
  }

  if (isConfirmPasswordInput && passwordMismatch) {
    displayErrorMessage(passwordErrorMessage, errorMessagePassword.mismatch);
    addErrorClass(passwordInputEl);
    return false;
  }

  displayErrorMessage(passwordErrorMessage, VALUE_EMPTY);
  removeErrorClass(passwordInputEl);
  return true;
};

export default validatePasswordInput;
