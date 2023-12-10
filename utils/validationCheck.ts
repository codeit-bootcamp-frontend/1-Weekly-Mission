function verifyEmail(text: string) {
  var emailVal = text;
  var regExp =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,5}$/i;
  return emailVal.match(regExp) != null ? true : false;
}

function verifyPassword(text: string) {
  const regExp = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;
  return regExp.test(text) ? true : false;
}

export { verifyEmail, verifyPassword };
