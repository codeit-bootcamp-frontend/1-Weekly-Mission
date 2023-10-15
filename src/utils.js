const SIGN_INPUT_ERROR_CLASSNAME = "sign-input-error";
const ERROR_MESSAGE_CLASSNAME = "error-message-on";
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

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

function toggleImg(btn, tagName, imgSrc) {
  return btn.getElementsByTagName(tagName)[0].setAttribute("src", imgSrc);
}

export function togglePassword(input, toggleButton) {
  if (input.getAttribute("type") === "password") {
    input.setAttribute("type", "text");
    toggleImg(toggleButton, "img", "./images/eye-on.png");
    return;
  }
  input.setAttribute("type", "password");
  toggleImg(toggleButton, "img", "./images/eye-off.png");
}

export const TEST_USER = {
  email: "test@codeit.com",
  password: "codeit101"
};