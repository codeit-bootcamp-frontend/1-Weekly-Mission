const inputFrame = getElements(".input-frame")[0];
const email = getElement("#email");
const password = getElement("#password");
const eyeImage = getElements(".eye-Image")[0];
const loginButton = getElements(".login-button")[0];


const REG_PATTERN = /^[A-Za-z0-9_\\.\\-]+@[A-Za-z0-9\\-]+\.[A-za-z0-9\\-]+/;


const pEmail = document.createElement("p");
const pPassword = document.createElement("p");


function getElement(selector){
  return document.querySelector(selector);
}

function getElements(selector){
  return document.querySelectorAll(selector);
}


function isValidEmail(email) {
  return REG_PATTERN.test(email);
}

function displayError(inputBox, errorMessage, element) {
  element.textContent = errorMessage;
  element.classList.add("error");
  inputBox.append(element);
}

function clearErrors(e) {
  e.target.parentElement.lastElementChild.textContent = "";

}
function showErrorMessage(e) {
  const inputBox = e.target.parentElement;



  switch (e.target.id) {

    case "email":
      if (e.target.value === "") {
        displayError(inputBox, "이메일을 입력해주세요.", pEmail);
      } else if (!isValidEmail(email.value)) {
        displayError(inputBox, "올바른 이메일 주소가 아닙니다.", pEmail);
      }

      break;

    case "password":
      if (e.target.value === "") {
        displayError(inputBox, "비밀번호를 입력해주세요.", pPassword);
      }
      break;

    default:
      return;
  }
}


function eyeOnOff(e) {
  e.stopPropagation();
  const eyeOn = "images/signin/eye-on.png";
  const eyeOff = "images/signin/eye-off.svg"
  if (e.target.src.includes("eye-on")) {
    e.target.src = eyeOff;
    password.type = "password";
  } else if (e.target.src.includes("eye-off")) {
    e.target.src = eyeOn;
    password.type = "text";
  }

}



inputFrame.addEventListener("focusout", showErrorMessage);
inputFrame.addEventListener("focusin", clearErrors);

eyeImage.addEventListener("click", eyeOnOff);



document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  const {target : {elements}} = event;
  

  const emailInput = elements[0].parentElement;
  const passwordInput = elements[1].parentElement;

  if (email.value === "test@codeit.com" && password.value === "codeit101") {
    window.location.href = "/folder";
  } else {
    displayError(emailInput, "이메일을 확인해주세요.", pEmail);
    displayError(passwordInput, "비밀번호를 확인해주세요.", pPassword);
  }

});
