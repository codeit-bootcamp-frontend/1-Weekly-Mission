import { validateInput, togglePasswordVisibility, signup } from "../account.js";

const inputEmail = document.querySelector(".email_input");
const inputPwd = document.querySelector(".pwd_input");
const inputPwdCheck = document.querySelector(".pwd_check");
const eyesToggle = document.querySelectorAll(".eyes_toggle");
const signupBtn = document.querySelector(".sign_form");
let errorGb = true;

inputEmail.addEventListener("blur", (e) => {
  errorGb = validateInput(e);
});
inputPwd.addEventListener("blur", (e) => {
  errorGb = validateInput(e);
});
inputPwdCheck.addEventListener("blur", (e) => {
  errorGb = validateInput(e);
});

eyesToggle.forEach((el) =>
  el.addEventListener("click", togglePasswordVisibility)
);

signupBtn.addEventListener("submit", (e) => {
  e.preventDefault();
  const param = {
    email: inputEmail.value,
    password: inputPwd.value,
  };
  signup(param).then((result) => {
    console.log("회원가입 결과 : ", result);
    if (result && !errorGb) {
      alert("회원가입 성공!");
      location.href = "/folder";
    } else {
      alert("회원가입 실패!");
    }
  });

  // if (!errorGb) {
  //   alert("회원가입 성공!");
  //   location.href = "/folder";
  // } else {
  //   alert("회원가입 실패!");
  // }
});
