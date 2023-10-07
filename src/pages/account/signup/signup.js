import { validateInput, togglePasswordVisibility } from "../account.js";

const inputEmail = document.querySelector(".email_input");
const inputPwd = document.querySelector(".pwd_input");
const inputPwdCheck = document.querySelector(".pwd_check");
const eyesToggle = document.querySelectorAll(".eyes_toggle");
const signupBtn = document.querySelector(".sign_btn");

inputEmail.addEventListener("blur", validateInput);
inputPwd.addEventListener("blur", validateInput);
inputPwdCheck.addEventListener("blur", validateInput);

eyesToggle.forEach((el) =>
  el.addEventListener("click", togglePasswordVisibility)
);

signupBtn.addEventListener("submit", (e) => {
  e.preventDefault();
});
