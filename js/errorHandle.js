import { $, $all } from "./utils.js";
import { isValidEmail, isValidPassword } from "./inputValidation.js";
import { displayError } from "./utils.js";
import { user } from "./db/users.js";
const errorMessages = {

  emptyInput: {
    email: "이메일을 입력해주세요.",
    password: "비밀번호를 입력해주세요.",
  },

  invalidInput: {
    email: "올바른 이메일 주소가 아닙니다.",
    password: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
    "password-check": "비밀번호가 일치하지 않아요."
  },

  loginFailed: {
    email: "이메일을 확인해주세요.",
    password: "비밀번호를 확인해주세요.",
  },

  duplicateEmail: "이미 사용 중인 이메일입니다."
}

function isEmptyInput(target) {
  displayError(getErrorLocation(target), errorMessages.emptyInput[`${target.id}`]);

}


function isDuplicatedEmail({ value }) {
  return value === user.email;
}


function commonInputCheck(target) {

  const { id, value } = target;
  const errorLocation = getErrorLocation(target);

  if (!value) {
    isEmptyInput(target);
    return;
  }

  if (id === "email" && !isValidEmail(value)) {
    displayError(errorLocation, errorMessages.invalidInput.email);

  }

}



function signupInputCheck(target) {

  commonInputCheck(target);

  const { id, value } = target;
  const errorLocation = getErrorLocation(target);

  switch (id) {
    case "email":
      if (!isDuplicatedEmail(target)) {
        return;
      }

      displayError(errorLocation, errorMessages.duplicateEmail);
      break;

    case "password":
      if (!isValidPassword(value) && value) {
        displayError(errorLocation, errorMessages.invalidInput.password);
      }
      break;

    case "password-check":
      if (value !== $("#password").value) {
        displayError(errorLocation, errorMessages.invalidInput["password-check"]);
      }
      break;

    default:
      break;
  }
}


function displayLoginFailedError() {
  const [$emailError, $passwordError] = getInputErrors();
  $emailError.textContent = errorMessages.loginFailed.email;
  $passwordError.textContent = errorMessages.loginFailed.password;
}




function getInputErrors() {
  return $all(".error");
}


function getErrorLocation({ id }) {
  const [$emailError, $passwordError, $passwordCheckError] = $all(".error");
  const location = id === "email" ? $emailError : id === "password" ? $passwordError : $passwordCheckError;
  return location;
}


function clearError({ target }) {
  getErrorLocation(target).textContent = "";
}


export { displayError, clearError, getInputErrors, isEmptyInput, errorMessages, commonInputCheck, signupInputCheck, displayLoginFailedError }
