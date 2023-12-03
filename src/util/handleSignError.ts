const REGEMAIL = /^[A-Za-z0-9\-]+@[A-Za-z0-9]+\.[a-z]/;
const REGPWD = /(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{8,}/;

export function showEmailError(value: string) {
  if (value == "") return "이메일을 입력해주세요.";
  else if (!REGEMAIL.test(value)) return "올바른 이메일 주소가 아닙니다.";
  return "";
}

export function showPwdError(value: string) {
  if (value === "") return "비밀번호를 입력해주세요.";
  else if (!REGPWD.test(value))
    return "비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요.";
  return "";
}
