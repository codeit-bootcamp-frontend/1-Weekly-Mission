import { validateInput, togglePasswordVisibility } from "../account.js";

const inputEmail = document.querySelector(".email_input");
const inputPwd = document.querySelector(".pwd_input");
const inputPwdCheck = document.querySelector(".pwd_check");
const eyesToggle = document.querySelectorAll(".eyes_toggle");

inputEmail.addEventListener("blur", (e) => {
  validateInput(e);
});
inputPwd.addEventListener("blur", (e) => {
  validateInput(e);
});
inputPwdCheck.addEventListener("blur", (e) => {
  validateInput(e);
});

eyesToggle.forEach((el) => {
  el.addEventListener("click", (e) => {
    togglePasswordVisibility(e);
  });
});
