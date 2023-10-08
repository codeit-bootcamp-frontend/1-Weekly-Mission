const SIGN_INPUT_ERROR_CLASSNAME = "sign-input-error";
const ERROR_MESSAGE_CLASSNAME = "error-message-on";
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export function setInputError(elements, message) {
  elements.input.className += ` ${SIGN_INPUT_ERROR_CLASSNAME}`;
  elements.errorMessage.className += ` ${ERROR_MESSAGE_CLASSNAME}`;
  elements.errorMessage.textContent = message;
}

export function removeInputError(elements) {
  elements.input.classList.remove(SIGN_INPUT_ERROR_CLASSNAME);
  elements.errorMessage.classList.remove(ERROR_MESSAGE_CLASSNAME);
  elements.errorMessage.textContent = "";
}

export function isEmailValid(email) {
  return new RegExp(EMAIL_REGEX).test(email);
}

export function isPasswordValid(password) {
  console.log('test');
  return new RegExp(PASSWORD_REGEX).test(password);
}

export function togglePassword(input, toggleButton) {
  if (input.getAttribute("type") === "password") {
    input.setAttribute("type", "text");
    toggleButton.getElementsByTagName("img")[0].setAttribute("src", "image/eye-on.svg");
    return;
  }
  input.setAttribute("type", "password");
  toggleButton.getElementsByTagName("img")[0].setAttribute("src", "image/eye-off.svg");
}

export const TEST_USER = {
  email: "test@codeit.com",
  password: "codeit101",
};
