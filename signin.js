const inputFrame = document.querySelector(".inputFrame");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const eyeImage = document.querySelector(".eye-Image");
const loginButton = document.querySelector(".login-button");


const pattern = /^[A-Za-z0-9_\\.\\-]+@[A-Za-z0-9\\-]+\.[A-za-z0-9\\-]+/;


const pEmail = document.createElement("p");
const pPassword = document.createElement("p");

function emailValidChk(email) {
  return pattern.test(email);
}

function displayError(inputBox, errorMessage, p) {
  p.textContent = errorMessage;
  p.classList.add("error");
  inputBox.append(p);
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
      } else if (!emailValidChk(email.value)) {
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

function userAuthentication(e) {

  const inputEmail = document.querySelector(".email");
  const inputPassword = document.querySelector(".password");


  if (e.key === "Enter" || e.type === "click") {
    e.preventDefault();
    if (email.value === "test@codeit.com" && password.value === "codeit101") {
      window.location.href = "/folder";
    } else {
      displayError(inputEmail, "이메일을 확인해주세요.", pEmail);
      displayError(inputPassword, "비밀번호를 확인해주세요.", pPassword);
    }
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

password.addEventListener("keypress", userAuthentication);
loginButton.addEventListener("click", userAuthentication);

eyeImage.addEventListener("click", eyeOnOff);
