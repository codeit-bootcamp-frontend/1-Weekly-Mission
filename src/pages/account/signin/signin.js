import * as account from "../account.js";

const inputEmail = document.querySelector(".email_input");
const inputPwd = document.querySelector(".pwd_input");

inputEmail.addEventListener("focusout", (e) => {
  account.validationForm(e);
});
inputPwd.addEventListener("focusout", (e) => {
  account.validationForm(e);
});
