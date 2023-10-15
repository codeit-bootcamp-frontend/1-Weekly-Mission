// <이메일 형식검증, 오류메시지 출력 >
import { emailRegex } from "./emailRegex.js";
import { inputEmail, emailErrorMessage } from "../constants.js";
import { addErrorStyle, removeErrorStyle } from "../errors/errors.js";
import { emailDuplicationCheck } from "./emailDuplicationCheck.js";

async function checkSignupEmail() {
  const email = inputEmail.value.trim(); //사용자가 인풋란에 입력한 값을 JS에서 email로 선언

  if (email === "") {
    addErrorStyle(inputEmail, emailErrorMessage, "이메일을 입력해주세요.");
  }
  if (!emailRegex(email)) {
    addErrorStyle(
      inputEmail,
      emailErrorMessage,
      "올바른 이메일 주소가 아닙니다."
    );
  }
  if ((await emailDuplicationCheck(email)) === true) {
    //이메일 중복을 확인하는 함수
  } else {
    removeErrorStyle(inputEmail, emailErrorMessage);
    return true;
  }
}

export { checkSignupEmail };
