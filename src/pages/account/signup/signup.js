import * as account from "../account.js";

const inputEmail = document.querySelector(".email_input");
const inputPwd = document.querySelector(".pwd_input");
const inputPwdCheck = document.querySelector(".pwd_check");
const eyesToggle = document.querySelectorAll(".eyes_toggle");

inputEmail.addEventListener("focusout", (e) => {
  account.validationForm(e);
});
inputPwd.addEventListener("focusout", (e) => {
  account.validationForm(e);
});
inputPwdCheck.addEventListener("focusout", (e) => {
  account.validationForm(e);
});

eyesToggle.forEach((el) => {
  el.addEventListener("click", (e) => {
    account.eyesToggleEvent(e);
  });
});
