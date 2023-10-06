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

function displayError(inputBox, errorMessage) {
  element = document.createElement("p");
  element.textContent = errorMessage;
  element.classList.add("error");
  inputBox.append(element);
}


function showErrorMessage(e) {
  const inputBox = e.target.parentElement;
  const hasTargetValue = e.target.value;

  switch (e.target.id) {
    case "email":
      if (!hasTargetValue) {
        displayError(inputBox, "이메일을 입력해주세요.");
      } else if (!isValidEmail(e.target.value)) {
        displayError(inputBox, "올바른 이메일 주소가 아닙니다.");
      }
      break;

    case "password":
      if (!hasTargetValue) {
        displayError(inputBox, "비밀번호를 입력해주세요.");
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
  e.target.type = isEyeOn ? "password" : "text";

}

function clearErrors(e) {
  const hasError = e.target.nextElementSibling;
  hasError ? hasError.remove() : null;

}

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  const { target: { elements } } = event;

  const emailInput = elements[0];
  const passwordInput = elements[1];

  if (emailInput.value === "test@codeit.com" && passwordInput.value === "codeit101") {
    window.location.href = "/folder";
    return;
  }
  displayError(emailInput.parentElement, "이메일을 확인해주세요.");
  displayError(passwordInput.parentElement, "비밀번호를 확인해주세요.");


});

const emailInput = $("#email");
const passwordInput = $("#password");

emailInput.addEventListener("focusout", showErrorMessage);
passwordInput.addEventListener("focusout", showErrorMessage);
emailInput.addEventListener("focusin", clearErrors);
passwordInput.addEventListener("focusin", clearErrors);
$All(".eye-Image")[0].addEventListener("click", eyeOnOff);
