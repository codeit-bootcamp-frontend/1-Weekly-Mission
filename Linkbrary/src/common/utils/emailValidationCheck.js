import { user } from "../constants/endpoints.js";
import { API_URL, APPLICATION_JSON_TYPE } from "../constants/api.js";
import { emailErrorEl } from "../constants/elements.js";

/* 이메일 유효성 검사 */
export const isEmailEmpty = (value) => {
  if (!value) {
    emailErrorEl.textContent = "이메일을 입력해주세요";
    return true;
  }
  return false;
};

/* 이메일 형식 검증 */
const emailRegExp = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/i;

export const isEmailValidation = (value) => {
  const isEmailValid = emailRegExp.test(value);
  if (!isEmailValid) {
    emailErrorEl.textContent = "올바른 이메일 주소가 아닙니다.";
    return true;
  }
  return false;
};

/* 이메일 중복 검증 */
export const isDuplicateEmail = async (value) => {
  try {
    const res = await fetch(`${API_URL}${user.CHECK_EMAIL}`, {
      method: "POST",
      headers: {
        "Content-Type": APPLICATION_JSON_TYPE,
      },
      body: JSON.stringify({ email: value }),
    });

    if (!res.ok) {
      emailErrorEl.textContent = "이미 사용 중인 이메일입니다.";
      return true;
    }
    return false;
  } catch (error) {
    console.log(error.message);
  }
};
