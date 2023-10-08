import { $, $all } from "./utils.js";

const REG_EMAIL = /^[A-Za-z0-9_\\.\\-]+@[A-Za-z0-9\\-]+\.[A-za-z0-9\\-]+/;


function isValidEmail(email) {
  return REG_EMAIL.test(email);
}

function displayError(errorLocation, errorMessage) {
  errorLocation.textContent = errorMessage;
}



function showErrorMessage({id, value}) {
  
  // const {id, value} = target;

  const targetValue = value;
  const [emailError, passwordError] = $all(".error");

  switch (id) {
    case "email":
      if (!targetValue) {
        displayError(emailError, "이메일을 입력해주세요.");
      } else if (!isValidEmail(value)) {
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


function toggleEye(e) {
  e.stopPropagation();
  const isEyeOn = e.target.src.includes("eye-on");
  e.target.src = `./images/signin/${isEyeOn ? "eye-off" : "eye-on"}.svg`;
  passwordInput.type = isEyeOn ? "password" : "text";

}

function clearError(e) {
  // const errorMessage = e.target.parentsElement.$all(".error");

  // errorMessage.textContent = "";

}


function userAuthenticate(e) {
  e.preventDefault();
  const { target: { elements } } = e;
  const [emailInput, passwordInput] = elements;

  if (emailInput.value === "test@codeit.com" && passwordInput.value === "codeit101") {
    window.location.href = "/folder";
    return;
  }
  displayError(emailError, "이메일을 확인해주세요.");
  displayError(passwordError, "비밀번호를 확인해주세요.");


};


$("#email").addEventListener("focusout", ({target}) => showErrorMessage(target));
$("#password").addEventListener("focusout", ({target}) => showErrorMessage(target));
$("#email").addEventListener("focusin", clearError);
$("#password").addEventListener("focusin", clearError);

$("form").addEventListener("submit", userAuthenticate);
$all(".eye-Image")[0].addEventListener("click", toggleEye);
