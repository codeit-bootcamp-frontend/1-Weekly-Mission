
export function isValidEmail(email) {
  const emailRE = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return emailRE.test(email);
}

export function isValidPW(pw) {
  const pwRE = /(?=.*\d)(?=.*[a-z]).{8,}/;
  return pwRE.test(pw);
}

export function doubleCheckPW(pw, pwCheck) {
  return pw === pwCheck;
}
