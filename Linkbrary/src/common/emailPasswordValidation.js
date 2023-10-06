/* 이메일 형식 검증 */
const emailRegExp = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/i;

export const checkEmailValidation = (value) => {
  const isEmailValid = emailRegExp.test(value);
  return isEmailValid;
};

/* 이메일 중복 검증 */
const USER_EMAIL = "test@codeit.com";

export const checkUniqueEmail = (value) => {
  if (value === USER_EMAIL) {
    return false;
  }
  return true;
};

/* 비밀번호 형식 검증 */
const passwordRegExp = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/i;

export const checkPasswordValidation = (value) => {
  const isPasswordValid = passwordRegExp.test(value);
  return isPasswordValid;
};
