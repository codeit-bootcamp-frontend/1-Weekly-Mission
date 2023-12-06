//정규식
const EMAIL_REGEXP =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,}$/i;
const PW_REGEXP = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

//이메일 유효 형식 검사
export function isEmailValid(email: string) {
  return email.match(EMAIL_REGEXP) != null;
}

//비밀번호 유효 형식 검사
export function isPwValid(password: string) {
  return PW_REGEXP.test(password);
}
