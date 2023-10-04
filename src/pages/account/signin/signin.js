import * as account from "../account.js";

const inputEmail = document.querySelector(".email_input");
const inputPwd = document.querySelector(".pwd_input");
const $form = document.querySelector(".sign_form");
const eyesToggle = document.querySelector(".eyes_toggle");

inputEmail.addEventListener("focusout", (e) => {
  account.validationForm(e);
});
inputPwd.addEventListener("focusout", (e) => {
  account.validationForm(e);
});
eyesToggle.addEventListener("click", (e) => {
  account.eyesToggleEvent(e);
});

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  let $Email = inputEmail.value;
  let $Pwd = inputPwd.value;
  if ($Email === "test@codeit.com" && $Pwd === "codeit101") {
    alert("로그인 성공!");
    location.href = "/folder";
  } else {
    alert("로그인 실패!");
  }
});
