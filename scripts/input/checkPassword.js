//<비밀번호 빈 값일때 오류메시지 출력>
import { addErrorStyle, removeErrorStyle } from "../errors/errors.js";
import { inputPassword, passwordErrorMessage } from "../constants.js";

function checkPassword() {
  const password = inputPassword.value;

  if (password === "") {
    addErrorStyle(
      inputPassword,
      passwordErrorMessage,
      "비밀번호를 입력해주세요."
    );
  } else if (
    password.length < 8 ||
    !/^(?=.*[a-zA-Z])(?=.*[0-9])/.test(password)
  ) {
    addErrorStyle(
      inputPassword,
      passwordErrorMessage,
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요."
    );
  } else {
    removeErrorStyle(inputPassword, passwordErrorMessage);
    return true;
  }
}

export { checkPassword };
