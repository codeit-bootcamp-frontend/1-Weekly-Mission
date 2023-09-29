import * as account from "../account.js";

const inputEmail = document.querySelector(".email_input");
const inputPwd = document.querySelector(".pwd_input");
//회원가입 페이지
const inputPwdCheck = document.querySelector(".pwd_check");

inputEmail.addEventListener("focusout", (e) => {
  account.validationForm(e);
});
inputPwd.addEventListener("focusout", (e) => {
  account.validationForm(e);
});
inputPwdCheck.addEventListener("focusout", (e) => {
  account.validationForm(e);
});
