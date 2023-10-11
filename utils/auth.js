import { TEST_EMAIL, TEST_PASSWORD } from "../constants/auth.js";
import { ERROR_MESSAGE_SELECTOR } from "../constants/error.js";
import { eyeBtn, pwInput } from "./tags.js";

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

export function handleEmailInputEmptyValueCheck(inputElement, errorMsg) {
  if (!inputElement.value.trim()) {
    inputElement.after(errorMsg);
    inputElement.classList.add("input-error");
  } else {
    inputElement.classList.remove("input-error");
    errorMsg.remove();
  }
}

export function handleEmailInputInvalidValueCheck(
  regex,
  inputElement,
  errorMsg
) {
  if (
    !regex.test(inputElement.value.trim()) &&
    inputElement.value.trim().length > 0
  ) {
    inputElement.after(errorMsg);
    inputElement.classList.add("input-error");
  } else {
    errorMsg.remove();
  }
}

export function handleInputDuplicatedCheck(inputElement, errorMsg) {
  if (inputElement.value.trim() === TEST_EMAIL) {
    inputElement.after(errorMsg);
    inputElement.classList.add("input-error");
  } else {
    errorMsg.remove();
  }
}

export function handlePwInputDoubleCheck(
  passwordInput,
  passwordCheckInput,
  errorMsg
) {
  if (passwordInput.value.trim() !== passwordCheckInput.value.trim()) {
    passwordCheckInput.parentNode.after(errorMsg);
    passwordCheckInput.classList.add("input-error");
  } else {
    errorMsg.remove();
    passwordCheckInput.classList.remove("input-error");
  }
}

export function handlePwInputInvalidCheck(regex, pwInput, errorMsg) {
  if (!regex.test(pwInput.value.trim())) {
    pwInput.parentNode.after(errorMsg);
    pwInput.classList.add("input-error");
  } else {
    errorMsg.remove();
    pwInput.classList.remove("input-error");
  }
}

export function handleEyeBtnClick(inputElement, eyeBtn) {
  if (inputElement.getAttribute("type") === "password") {
    inputElement.setAttribute("type", "text");
    eyeBtn.firstElementChild.setAttribute("src", "/assets/common/eye-on.svg");
  } else {
    inputElement.setAttribute("type", "password");
    eyeBtn.firstElementChild.setAttribute("src", "/assets/common/eye-off.svg");
  }
}
