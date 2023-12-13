const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
/* const TEST_USER = {
  email: "test@codeit.com",
  password: "sprint101",
}; */

function isEmailValid(email: string) {
  return new RegExp(EMAIL_REGEX).test(email);
}

export function validateEmailInput(email: string) {
  let errMsg = "";
  if (email === "") {
    errMsg = "이메일을 입력해주세요.";
    return errMsg;
  } else if (!isEmailValid(email)) {
    errMsg = "올바른 이메일 주소가 아닙니다.";
    return errMsg;
  }
  return errMsg;
}

function isPasswordValid(password: string) {
  const isEightLettersOrMore = password.length >= 8;
  const hasNumberAndCharacter =
    password.match(/[0-9]/g) && password.match(/[a-zA-Z]/gi);
  return isEightLettersOrMore && hasNumberAndCharacter;
}

export function validatePasswordInput(password: string) {
  let errMsg = "";
  if (password === "") {
    errMsg = "비밀번호를 입력해주세요.";
    return errMsg;
  } else if (!isPasswordValid(password)) {
    errMsg = "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
    return errMsg;
  }
  return errMsg;
}

export function validatePasswordConfirmInput(
  password: string,
  passwordConfirm: string
) {
  let errMsg = "";
  if (passwordConfirm === "") {
    errMsg = "비밀번호를 입력해주세요.";
    return errMsg;
  } else if (!isPasswordValid(passwordConfirm)) {
    errMsg = "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
    return errMsg;
  } else if (password !== passwordConfirm) {
    errMsg = "비밀번호가 일치하지 않아요.";
  }
  return errMsg;
}
