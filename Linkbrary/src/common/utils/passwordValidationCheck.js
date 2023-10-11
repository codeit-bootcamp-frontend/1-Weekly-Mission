import { passwordErrorEl } from "../constants/elements.js";

/** 비밀번호 유효성 검사 */
export const isPasswordEmpty = (value) => {
  if (!value) {
    passwordErrorEl.textContent = "비밀번호를 입력해주세요";
    return true;
  }
  return false;
};

/* 비밀번호 형식 검증 */
const passwordRegExp = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/i;

export const isPasswordValidation = (value) => {
  const isPasswordValid = passwordRegExp.test(value);
  if (!isPasswordValid) {
    passwordErrorEl.textContent = "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
    return true;
  }
  return false;
};
