import { displayErrorMessage, addErrorClass, removeErrorClass } from "./error-handling.js";
import { VALUE_EMPTY, isEmpty, isValidPassword } from "./utils.js";
import ERROR_MESSAGES from "../components/error-messages.js";

const validatePasswordInput = (passwordInput, passwordErrorMessage, passwordInputValue) => {
  const passwordValue = passwordInput.value;
  const isEmptyValue = isEmpty(passwordValue);
  const inValidPassword = !isValidPassword(passwordValue);
  const passwordMismatch = passwordValue !== passwordInputValue;
  const isConfirmPasswordInput = passwordInputValue !== undefined;
  const errorMessagePassword = ERROR_MESSAGES.password;

  if (isEmptyValue) {
    displayErrorMessage(passwordErrorMessage, errorMessagePassword.empty);
    addErrorClass(passwordInput);
    return;
  }

  if (inValidPassword) {
    displayErrorMessage(passwordErrorMessage, errorMessagePassword.invalid);
    addErrorClass(passwordInput);
    return;
  }

  if (isConfirmPasswordInput && passwordMismatch) {
    displayErrorMessage(passwordErrorMessage, errorMessagePassword.mismatch);
    addErrorClass(passwordInput);
    return;
  }

  displayErrorMessage(passwordErrorMessage, VALUE_EMPTY);
  removeErrorClass(passwordInput);
};

export default validatePasswordInput;
