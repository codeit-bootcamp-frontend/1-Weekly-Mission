import { USER_INPUT_ID, requestSettings } from "./requestSettings.js";

// 빈 칸인지 검사하는 함수
export function checkFormEmpty(inputTag) {
  const isNotEmpty = !(inputTag.length === 0);
  return isNotEmpty ? true : false;
}

//올바른 이메일 형식인지 검사하는 함수
export function checkEmailValid(email) {
  const EMAIL_REGEX = new RegExp(
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
  );
  const isValid = EMAIL_REGEX.test(email.trim());
  return isValid ? true : false;
}

//올바른 패스워드 형식인지 검사하는 함수
export function checkPasswordValid(password) {
  const PASSWORD_REGEX = new RegExp(
    /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/
  );
  const isValid = PASSWORD_REGEX.test(password.trim());
  return isValid ? true : false;
}

//두 값을 비교해서 일치하는지 검사하는 함수
export function checkStringSame(value1, value2) {
  return value1 === value2 ? true : false;
}

//사용 가능한 이메일인지 검사하는 함수
export async function checkEmailAvailable() {
  try {
    const ID = USER_INPUT_ID();
    const response = await fetch(
      "https://bootcamp-api.codeit.kr/api/check-email",
      requestSettings("POST", ID)
    );
    if (response.status === 200) {
      return true;
    } else if (response.status === 409) {
      return false;
    }
  } catch (error) {
    return false;
  }
}

//(submit할 때) 에러메시지가 없는지 확인하는 함수 
export function checkErrorMessagesExist() {
  let isAllValid = true;
  const errorMessages = document.querySelectorAll(".error_message");
  for (let errorTag of errorMessages) {
    if ([...errorTag.classList].includes("show")) {
      isAllValid = false;
    }
  }
  return isAllValid;
}