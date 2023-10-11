export const isValidEmail = email => {
  const regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regExp.test(email);
};

export const isValidPwd = value => {
  const pwdRegExp = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
  return pwdRegExp.test(value);
}