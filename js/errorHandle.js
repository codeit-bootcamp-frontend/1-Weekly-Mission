import { $all } from "./utils.js";

function displayError(errorLocation, errorMessage) {
  errorLocation.textContent = errorMessage;
}

function getErrors() {
  return $all(".error");
}

function showErrorMessage({ id, value }) {
  const targetValue = value;
  const [emailError, passwordError] = getErrors();

  switch (id) {
    case "email":
      if (!targetValue) {
        displayError(emailError, "이메일을 입력해주세요.");
        return;
      }

      if (!isValidEmail(value)) {
        displayError(emailError, "올바른 이메일 주소가 아닙니다.");
      }
      break;

    case "password":
      if (!targetValue) {
        displayError(passwordError, "비밀번호를 입력해주세요.");
      }
      break;

    default:
      return;
  }
}

function clearError({ target: { id } }) {
  const [$emailError, $passwordError] = getErrors();
  const errorToDelete = id === "email" ? $emailError : id === "password" ? $passwordError : null;
  errorToDelete.textContent = "";
}


export { displayError, showErrorMessage, clearError, getErrors};