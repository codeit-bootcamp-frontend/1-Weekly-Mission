const inputFrame = document.querySelector(".inputFrame");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const pattern = /^[A-Za-z0-9_\\.\\-]+@[A-Za-z0-9\\-]+\.[A-za-z0-9\\-]+/;

const loginButton = document.querySelector(".login-button");
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

function clearErrors(e, p){
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
        displayError(inputBox, "비밀번호를 입력해주세요.",pPassword);
      } 
      break;

    default:
      return;
  }
}

function userAuthentication(e) {
  const inputEmail = document.querySelector(".email");
  const inputPassword = document.querySelector(".password");
  console.log(e.type);
  if (email.value == "test@codeit.com" && password.value == "codeit101") {
    window.location.href = "/folder";
  } else {
    // e.preventDefault();
    displayError(inputEmail, "이메일을 확인해주세요.", pEmail);
    displayError(inputPassword, "비밀번호를 확인해주세요.", pPassword);
  }
}

inputFrame.addEventListener("focusout", showErrorMessage);
inputFrame.addEventListener("focusin", clearErrors);
loginButton.addEventListener("click", userAuthentication);
