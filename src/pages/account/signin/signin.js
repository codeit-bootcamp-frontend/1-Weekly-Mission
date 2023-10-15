import { validateInput, togglePasswordVisibility, login } from "../account.js";

const inputEmail = document.querySelector(".email_input");
const inputPwd = document.querySelector(".pwd_input");
const loginForm = document.querySelector(".sign_form");
const eyesToggle = document.querySelector(".eyes_toggle");

inputEmail.addEventListener("blur", validateInput);
inputPwd.addEventListener("blur", validateInput);
eyesToggle.addEventListener("click", togglePasswordVisibility);

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let loginEmail = inputEmail.value;
  let loginPwd = inputPwd.value;
  const param = {
    email: loginEmail,
    password: loginPwd,
  };
  login(param).then((result) => {
    console.log("로그인 결과 : ", result);
    if (
      result ||
      (loginEmail === "test@codeit.com" && loginPwd === "codeit101")
    ) {
      alert("로그인 성공!");
      location.href = "/folder";
    } else {
      alert("로그인 실패!");
    }
  });
});
