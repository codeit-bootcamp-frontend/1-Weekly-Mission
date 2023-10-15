import { inputEmail, emailErrorMessage } from "../constants.js";
import { addErrorStyle } from "../errors/errors.js";

//이메일 중복을 확인하는 함수
async function emailDuplicationCheck(email) {
  const checkEmail = {
    email: email,
  };
  try {
    const response = await fetch(
      "https://bootcamp-api.codeit.kr/api/check-email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(checkEmail),
      }
    );

    if (response.status === 200) {
      //중복이 아님
      return true;
    }
    if (response.status === 409) {
      addErrorStyle(
        inputEmail,
        emailErrorMessage,
        "이미 사용중인 이메일입니다."
      );
      return false;
    }
  } catch (error) {
    console.log(error);
  }
}

export { emailDuplicationCheck };
