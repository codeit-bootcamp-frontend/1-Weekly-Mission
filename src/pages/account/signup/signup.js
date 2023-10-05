import * as account from "../account.js";

const inputEmail = document.querySelector(".email_input");
const inputPwd = document.querySelector(".pwd_input");
const inputPwdCheck = document.querySelector(".pwd_check");
const eyesToggle = document.querySelectorAll(".eyes_toggle");

inputEmail.addEventListener("blur", (e) => {
  account.validateInput(e);
});
inputPwd.addEventListener("blur", (e) => {
  account.validateInput(e);
});
inputPwdCheck.addEventListener("blur", (e) => {
  account.validateInput(e);
});

eyesToggle.forEach((el) => {
  el.addEventListener("click", (e) => {
    account.togglePasswordVisibility(e);
  });
});
