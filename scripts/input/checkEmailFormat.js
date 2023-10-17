// <이메일 형식검증, 오류메시지 출력 >
import { addErrorStyle, removeErrorStyle } from "../errors/errors.js";
import { inputEmail, emailErrorMessage } from "../constants.js";
import { emailRegex } from "./emailRegex.js";

function checkEmailFormat() {
  const email = inputEmail.value.trim();

  if (email === "") {
    addErrorStyle(inputEmail, emailErrorMessage, "이메일을 입력해주세요.");
  } else if (!emailRegex(email)) {
    addErrorStyle(
      inputEmail,
      emailErrorMessage,
      "올바른 이메일 주소가 아닙니다."
    );
  } else {
    removeErrorStyle(inputEmail, emailErrorMessage);
    return true;
  }
}

export { checkEmailFormat };
