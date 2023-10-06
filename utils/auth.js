import { INPUT_ERROR_MESSAGE } from "../constants/error";

export let emailRegex = new RegExp("[a-z0-9]+@[a-z]+\\.[a-z]{2,3}");

export const emailEmptyMsg = createErrorMsg(
  INPUT_ERROR_MESSAGE,
  "이메일을 입력해주세요."
);
export const emailInvalidMsg = createErrorMsg(
  INPUT_ERROR_MESSAGE,
  "올바른 이메일 주소가 아닙니다."
);
export const pwEmptyMsg = createErrorMsg(
  INPUT_ERROR_MESSAGE,
  "비밀번호를 입력해주세요."
);
export const emailIncorrectMsg = createErrorMsg(
  INPUT_ERROR_MESSAGE,
  "이메일을 확인해주세요."
);
export const pwIncorrectMsg = createErrorMsg(
  INPUT_ERROR_MESSAGE,
  "비밀번호를 확인해주세요."
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
