export function emailChecker(text = "") {
  const emailReg = new RegExp("[a-z0-9]+@[a-z0-9]+.[a-z0-9]");
  return emailReg.test(text);
}

export function pswChecker(text = "") {
  const pwsReg = new RegExp(/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/);
  return pwsReg.test(text);
}
