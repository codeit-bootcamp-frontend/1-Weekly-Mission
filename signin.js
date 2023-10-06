const REG_EMAIL = /^[A-Za-z0-9_\\.\\-]+@[A-Za-z0-9\\-]+\.[A-za-z0-9\\-]+/;

function $(selector) {
  return document.querySelector(selector);
}

function $All(selector) {
  return document.querySelectorAll(selector);
}

function isValidEmail(email) {
  return REG_EMAIL.test(email);
}

function displayError(errorLocation, errorMessage) {
  errorLocation.textContent = errorMessage;
}


const emailError = $All(".error")[0]; 
const passwordError = $All(".error")[1]; 

function showErrorMessage(e) {
  const hasTargetValue = e.target.value;

  switch (e.target.id) {
    case "email":
      if (!hasTargetValue) {
        displayError(emailError, "이메일을 입력해주세요.");
      } else if (!isValidEmail(e.target.value)) {
        displayError(emailError, "올바른 이메일 주소가 아닙니다.");
      }
      break;

    case "password":
      if (!hasTargetValue) {
        displayError(passwordError, "비밀번호를 입력해주세요.");
      }
      break;

    default:
      return;
  }
}


function eyeOnOff(e) {
  e.stopPropagation();
  const isEyeOn = e.target.src.includes("eye-on");
  e.target.src = `./images/signin/${isEyeOn ? "eye-off" : "eye-on"}.svg`;
  passwordInput.type = isEyeOn ? "password" : "text";

}

function clearError(e) {
  const errorElement = `${e.target.id}Error`;
  errorElement.textContent = "";

}


function userAuthenticated(event){
  event.preventDefault();
  const { target: { elements } } = event;

  const emailInput = elements[0];
  const passwordInput = elements[1];

  if (emailInput.value === "test@codeit.com" && passwordInput.value === "codeit101") {
    window.location.href = "/folder";
    return;
  }
  displayError(emailError, "이메일을 확인해주세요.");
  displayError(passwordError, "비밀번호를 확인해주세요.");
  

};

const emailInput = $("#email");
const passwordInput = $("#password");
const $form = $("form");


emailInput.addEventListener("focusout", showErrorMessage);
passwordInput.addEventListener("focusout", showErrorMessage);
emailInput.addEventListener("focusin", clearError);
passwordInput.addEventListener("focusin", clearError);

$form.addEventListener("submit", userAuthenticated);
$All(".eye-Image")[0].addEventListener("click", eyeOnOff);
