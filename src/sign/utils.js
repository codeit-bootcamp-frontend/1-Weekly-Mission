const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

export function isEmailValid(email) {
  return new RegExp(EMAIL_REGEX).test(email);
}

export function isPasswordValid(password) {
  const isEightLettersOrMore = password.length >= 8;
  const hasNumberAndCharacter =
    password.match(/[0-9]/g) && password.match(/[a-zA-Z]/gi);
  return isEightLettersOrMore && hasNumberAndCharacter;
}
