import { displayErrorMessage, addErrorClass, removeErrorClass } from "./error-handling.js";
import { VALUE_EMPTY, isEmpty, isValidPassword } from "./utils.js";
import ERROR_MESSAGES from "../components/error-messages.js";

const validatePasswordInput = (passwordInput, passwordErrorMessage, passwordInputValue) => {
  const passwordValue = passwordInput.value;
  const isEmptyValue = isEmpty(passwordValue);
  const inValidPassword = !isValidPassword(passwordValue);
  const passwordMatch = passwordValue !== passwordInputValue;
  const confirmPasswordMatch = passwordInputValue !== undefined;
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

  if (confirmPasswordMatch) {
    if (passwordMatch) {
      displayErrorMessage(passwordErrorMessage, errorMessagePassword.mismatch);
      addErrorClass(passwordInput);
      return;
    }
  }

  displayErrorMessage(passwordErrorMessage, VALUE_EMPTY);
  removeErrorClass(passwordInput);
};

export default validatePasswordInput;
