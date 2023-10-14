// <이메일 형식검증, 오류메시지 출력 >
import { emailRegex } from "./emailRegex";

function checkSignupEmail() {
  const email = inputEmail.value.trim(); //사용자가 인풋란에 입력한 값을 JS에서 email로 선언
  if (email === "") {
    addErrorStyle(inputEmail, emailErrorMessage, "이메일을 입력해주세요.");
  } else if (!emailRegex(email)) {
    addErrorStyle(
      inputEmail,
      emailErrorMessage,
      "올바른 이메일 주소가 아닙니다."
    );
  } else if (
    !(accountInfo.find((account) => account.email === email) === undefined)
  ) {
    addErrorStyle(inputEmail, emailErrorMessage, "이미 사용중인 이메일입니다.");
  } else {
    removeErrorStyle(inputEmail, emailErrorMessage);
    return true;
  }
}

export { checkSignupEmail };
