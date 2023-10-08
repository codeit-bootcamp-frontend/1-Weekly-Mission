import { $all } from "./utils.js";
import { isValidEmail } from "./inputValidation.js";
import { user } from "./userAuthentication.js";
const errorMessages = {

  emptyInput :{
    email: "이메일을 입력해주세요.",
    password: "비밀번호를 입력해주세요.",
  }, 
  invalidEmailFormat: "올바른 이메일 주소가 아닙니다.",
  duplicateEmail: "이미 사용 중인 이메일입니다.",
  passwordLength: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
  passwordMismatch: "비밀번호가 일치하지 않아요.",
  loginFailed: "이메일과 비밀번호를 확인해주세요.",
  
}



function displayError(errorLocation, errorMessage) {
  errorLocation.textContent = errorMessage;
}


function getInputErrors() {
  return $all(".error");
}




function isemptyInput({ id, value }) {
  const [$emailError, $passwordError] = getInputErrors();
  if(!value){
    const errorLocation = id === "email"? $emailError : id === "password"? $passwordError : null;
    displayError(errorLocation, errorMessages["emptyInput"][`${id}`])
  } 
}

function showErrorMessage({ id, value }) {
  const [emailError, passwordError] = getInputErrors();

  switch (id) {
    case "email":
      if (!value) {
        displayError(emailError, "이메일을 입력해주세요.");
        return;
      }

      if (!isValidEmail(value)) {
        displayError(emailError, "올바른 이메일 주소가 아닙니다.");
        return;
      }

      if (email.value === user.email){
        displayError(emailError, "이미 사용 중인 이메일입니다.");
        return;
      }
      
      break;

    case "password":
      if (!value) {
        displayError(passwordError, "비밀번호를 입력해주세요.");
      }
      break;

    default:
      return;
  }
}

function clearError({ target: { id } }) {
  const [$emailError, $passwordError] = getInputErrors();
  const errorToDelete = id === "email" ? $emailError : id === "password" ? $passwordError : null;
  errorToDelete.textContent = "";
}


export { displayError, showErrorMessage, clearError, getInputErrors, isemptyInput };