import { USER_INPUT_ID, requestSettings } from "./requestSettings.js";

// 빈 칸인지 검사하는 함수

export function checkFormEmpty(inputTag) {
  const isNotEmpty = !(inputTag.length === 0);
  return isNotEmpty ? true : false;
}

export function checkEmailValid(email) {
  const EMAIL_REGEX = new RegExp(
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
  );
  const isValid = EMAIL_REGEX.test(email.trim());
  return isValid ? true : false;
}

export function checkPasswordValid(password) {
  const PASSWORD_REGEX = new RegExp(
    /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/
  );
  const isValid = PASSWORD_REGEX.test(password.trim());
  return isValid ? true : false;
}

export function checkStringSame(value1, value2) {
  return value1 === value2 ? true : false;
}

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

export async function checkEmailAvailable() {
  try {
    const ID = USER_INPUT_ID();
    const response = await fetch(
      "https://bootcamp-api.codeit.kr/api/check-email",
      requestSettings("POST", ID)
    );
    const result = await response.json();
    if (response.status === 200) {
      return true;
    } else if (response.status === 409) {
      return false;
    }
  } catch (error) {
    return false;
  }
}
