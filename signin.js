const inputFrame = document.querySelector(".inputFrame");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const pattern = /^[A-Za-z0-9_\\.\\-]+@[A-Za-z0-9\\-]+\.[A-za-z0-9\\-]+/;

const pEmail = document.createElement("p");
const pPassword = document.createElement("p");

function emailValidChk(email) {
  if (pattern.test(email) === false) { return false; }
  else { return true; }
}

function showErrorMessage(e) {
  const inputBox = e.target.parentElement;
  // Create a new <p> element for each error message
  let errorMessage = '';

  switch (e.target.id) {
    case "email":
      if (e.target.value === "") {
        errorMessage = "이메일을 입력해주세요.";
      } else if (!emailValidChk(email.value)) {
        errorMessage = "올바른 이메일 주소가 아닙니다.";
      }
      pEmail.textContent = errorMessage;
      pEmail.classList.add("error");
      inputBox.append(pEmail);
      break;

    case "password":
      if (e.target.value === "") {
        errorMessage = "비밀번호를 입력해주세요.";
      }
      pPassword.textContent = errorMessage;
      pPassword.classList.add("error");
      inputBox.append(pPassword);
      break;

    default:
      return;
  }


  
}

function userAuthentication(e) {
  const inputEmail = document.querySelector(".email");
  const inputPassword = document.querySelector(".password");

  if (email.value === "test@codeit.com" && password.value === "codeit101") {
    window.location.href = "/folder";
  } else {
    pEmail.textContent = "이메일을 확인해주세요.";
    pPassword.textContent = "비밀번호를 확인해주세요.";
    pEmail.classList.add("error");
    pPassword.classList.add("error");
    inputEmail.append(pEmail);
    inputPassword.append(pPassword);
  }
}

inputFrame.addEventListener("focusout", showErrorMessage);
password.addEventListener("change", userAuthentication);
