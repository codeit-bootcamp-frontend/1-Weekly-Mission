const EMAIL_REGEX =
  /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

const PASSWORD_REGEX = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

export const validateEmailPattern = (email: string) => {
  return EMAIL_REGEX.test(email);
};

export const validatePasswordPattern = (password: string) => {
  return PASSWORD_REGEX.test(password);
};
