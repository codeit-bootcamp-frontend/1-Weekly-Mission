export const emailEmptyMsg = createErrorMsg(
  "input-error-msg",
  "이메일을 입력해주세요."
);
export const emailInvalidMsg = createErrorMsg(
  "input-error-msg",
  "올바른 이메일 주소가 아닙니다."
);
export const pwEmptyMsg = createErrorMsg(
  "input-error-msg",
  "비밀번호를 입력해주세요."
);
export const emailIncorrectMsg = createErrorMsg(
  "input-error-msg",
  "이메일을 확인해주세요."
);
export const pwIncorrectMsg = createErrorMsg(
  "input-error-msg",
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
