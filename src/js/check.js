//이메일 형식 체크 함수
function verify(text) {
  var emailVal = text;
  var regExp =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  return emailVal.match(regExp) != null ? true : false;
}

//특수문자 체크 함수
function checkSpecial(text) {
  const regExp = /[!?@#$%^&*():;+-=~{}<>\_\[\]\|\\\"\'\,\.\/\`\₩]/g;
  if (regExp.test(text)) {
    return true;
  } else {
    return false;
  }
}

//영어 체크 함수
function checkEng(text) {
  const regExp = /[a-zA-Z]/g; // 영어
  if (regExp.test(text)) {
    return true;
  } else {
    return false;
  }
}

// 숫자 체크 함수
function checkNum(text) {
  const regExp = /[0-9]/g;
  if (regExp.test(text)) {
    return true;
  } else {
    return false;
  }
}

export { verify, checkSpecial, checkEng, checkNum };
