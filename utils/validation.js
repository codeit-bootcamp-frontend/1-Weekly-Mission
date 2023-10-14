export function isEmail(email) {
  const regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  return regExp.test(email);
}

export function isPassword(password) {
  const pwdRegExp = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

  return pwdRegExp.test(password);
}
