import {
  loginForm,
  emailInput,
  emailErrorMessage,
  passwordErrorMessages,
  passwordInputs,
  eyeIcons,
  eyeButtons,
} from "../utils/tags.js";
import {
  TEST_ACCOUNT,
  ERROR_MESSAGES,
  REDIRECT_PATH,
  VALUE_EMPTY,
  EYE_ICON_PATH,
  isValidEmail,
} from "../utils/utils.js";
import { displayErrorMessage, addErrorClass, removeErrorClass } from "../utils/error-handling.js";
import togglePasswordVisible from "../components/toggle-password-visible.js";

const validateEmail = () => {
  const emailValue = emailInput.value;

  if (emailValue === "") {
    displayErrorMessage(emailErrorMessage, ERROR_MESSAGES.email.empty);
    addErrorClass(emailInput);
    return;
  }

  return isValidEmail(emailValue)
    ? (displayErrorMessage(emailErrorMessage, VALUE_EMPTY), removeErrorClass(emailInput))
    : (displayErrorMessage(emailErrorMessage, ERROR_MESSAGES.email.invalid), addErrorClass(emailInput));
};

const validatePassword = (passwordInput, passwordErrorMessage) => {
  const isEmpty = passwordInput.value === VALUE_EMPTY;

  displayErrorMessage(passwordErrorMessage, isEmpty ? ERROR_MESSAGES.password.empty : VALUE_EMPTY);
  isEmpty ? addErrorClass(passwordInput) : removeErrorClass(passwordInput);
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

loginForm.addEventListener("submit", handleLoginFormSubmit);

passwordInputs.forEach((passwordInput, index) =>
  passwordInput.addEventListener("focusout", () => validatePassword(passwordInput, passwordErrorMessages[index]))
);

eyeButtons.forEach((eyeButton, index) =>
  eyeButton.addEventListener("click", () =>
    togglePasswordVisible(passwordInputs[index], eyeIcons[index], EYE_ICON_PATH)
  )
);
