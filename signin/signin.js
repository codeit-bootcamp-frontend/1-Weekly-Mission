import { reset, eyeOnOff, writeError, displayError, checkerEmail } from "../util.js";

const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const eyeBtn = document.querySelector(".eye-button");
const signForm = document.querySelector("form");



function checkerPassword(e) {
  if (passwordInput.value === "") {
    displayError(e, "비밀번호를 입력해주세요.");
  }
}

function login(e) {
  e.preventDefault();
  if (
    emailInput.value === "test@codeit.com" &&
    passwordInput.value === "codeit101"
  ) {
    const link = "../folder.html";
    window.location.assign(link);
  } else {
    const emailText = writeError(e, "이메일을 확인해주세요.");
    document.querySelector("#email").after(emailText);
    const passwordText = writeError(e, "비밀번호를 확인해주세요");
    document.querySelector("#password").after(passwordText);
  }
}

emailInput.addEventListener("focusout", checkerEmail);
emailInput.addEventListener("focusin", reset);

passwordInput.addEventListener("focusout", checkerPassword);
passwordInput.addEventListener("focusin", reset);

signForm.addEventListener("submit", login);
eyeBtn.addEventListener("click", eyeOnOff);
