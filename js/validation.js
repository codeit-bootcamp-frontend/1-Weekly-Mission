const EMAIL_PATTERN =
  /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

const PASSWORD_PATTERN = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

const validateEmailPattern = (email) => {
  return EMAIL_PATTERN.test(email);
};

const validatePasswordPattern = (password) => {
  return PASSWORD_PATTERN.test(password);
};

export { validateEmailPattern, validatePasswordPattern };
