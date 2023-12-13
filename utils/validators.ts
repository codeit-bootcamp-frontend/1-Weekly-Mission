export function isValidEmail(email: string) {
  const emailRE =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return emailRE.test(email);
}

export function isValidPW(pw: string) {
  const pwRE = /(?=.*\d)(?=.*[a-z]).{8,}/;
  return pwRE.test(pw);
}

export function isValidPWCheck(pw: string, pwCheck: string) {
  return pw === pwCheck;
}
