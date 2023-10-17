import { ERROR_MESSAGE_SELECTOR } from "../constants/error.js";

export let emailRegex = new RegExp("[a-z0-9]+@[a-z]+\\.[a-z]{2,3}$");
export let pwRegex = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);

export const emailEmptyMsg = createErrorMsg(
  ERROR_MESSAGE_SELECTOR,
  "이메일을 입력해주세요."
);
export const emailInvalidMsg = createErrorMsg(
  ERROR_MESSAGE_SELECTOR,
  "올바른 이메일 주소가 아닙니다."
);
export const pwEmptyMsg = createErrorMsg(
  ERROR_MESSAGE_SELECTOR,
  "비밀번호를 입력해주세요."
);
export const emailIncorrectMsg = createErrorMsg(
  ERROR_MESSAGE_SELECTOR,
  "이메일을 확인해주세요."
);
export const pwIncorrectMsg = createErrorMsg(
  ERROR_MESSAGE_SELECTOR,
  "비밀번호를 확인해주세요."
);
export const emailDuplicatedMsg = createErrorMsg(
  ERROR_MESSAGE_SELECTOR,
  "이미 사용 중인 이메일입니다."
);

export const pwNotMachedMsg = createErrorMsg(
  ERROR_MESSAGE_SELECTOR,
  "비밀번호가 일치하지 않아요."
);

export const pwInvalidMsg = createErrorMsg(
  ERROR_MESSAGE_SELECTOR,
  "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요."
);

export function createErrorMsg(style, errorStatement) {
  const errorMsg = document.createElement("span");
  errorMsg.textContent = errorStatement;
  errorMsg.classList.add(style);
  return errorMsg;
}

export function isInputValueValid(regex, inputElement) {
  if (regex.test(inputElement.value.trim())) {
    return true;
  }
}

export function addErrorMessage(errorMessage, element) {
  element.after(errorMessage);
  element.classList.add("input-error");
}

export function setErrorMessage(elements, message) {
  elements.input.classList.add("input-error");
  elements.errorMessageContainer.className += "input-error-msg";
  elements.errorMessageContainer.textContent = message;
}

export function deleteErrorMessage(elements) {
  elements.input.classList.remove("input-error");
  elements.errorMessageContainer.classList.remove("input-error-msg");
  elements.errorMessageContainer.textContent = "";
}

export function addPwInputErrorMessage(errorMessage, element) {
  element.parentNode.after(errorMessage);
  element.classList.add("input-error");
}

export function removeErrorMessage(errorMessage, element) {
  errorMessage.remove();
  element.classList.remove("input-error");
}

export function toggleEyeBtn(inputElement, eyeBtn) {
  if (inputElement.getAttribute("type") === "password") {
    inputElement.setAttribute("type", "text");
    eyeBtn.firstElementChild.setAttribute("src", "/assets/common/eye-on.svg");
  } else {
    inputElement.setAttribute("type", "password");
    eyeBtn.firstElementChild.setAttribute("src", "/assets/common/eye-off.svg");
  }
}

export function storeAccessToken(token) {
  localStorage.setItem("accessToken", token);
}

export function hasToken() {
  if (localStorage.getItem("accessToken")) {
    location.href = "/pages/folder/";
  }
}
