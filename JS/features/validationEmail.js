import { errorStyle, removeErrorStyle } from "./errorStyle.js";

function validationEmail(e, email){
  const EMAIL_REGEX = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  const isNotValid = !EMAIL_REGEX.test(email.trim());
  const isEmpty = e.target.value.length === 0;

  if (isEmpty) {
    return errorStyle(e, "아이디를 입력해주세요.")
  } else if (isNotValid) {
    return errorStyle(e, "올바른 이메일 주소를 입력해주세요.")
  } else {
    return removeErrorStyle(e);
  }
}

export default validationEmail


