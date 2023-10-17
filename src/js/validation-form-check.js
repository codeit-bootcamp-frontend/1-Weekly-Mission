//이메일 형식 체크 함수
function verifyEmail(text) {
  const regExp =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  return regExp.test(text) ? true : false;
}

//비밀번호 형식 체크 함수
function checkPw(text) {
  const regExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9])/;
  return regExp.test(text) ? true : false;
}

export { verifyEmail, checkPw };
