"use strict";

const emailBox = document.querySelector("#email");
const passwordBox = document.querySelector("#password");
const submitButton = document.querySelector(".sign_button");

// 이메일 에러메시지 생성
const emailErrorMsg = document.createElement("p");
emailErrorMsg.classList.add("email_error");
emailBox.after(emailErrorMsg);

// 비밀번호 에러메시지 생성
const passwordErrorMsg = document.createElement("p");
passwordErrorMsg.classList.add("password_error");
passwordBox.after(passwordErrorMsg);

// 이메일 정규식
let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

// 이메일 input에서 focus out할 때
emailBox.addEventListener("blur", function (e) {
  e.preventDefault();

  if (!e.target.value) {
    // 아무것도 입력하지 않았을 때
    emailErrorMsg.textContent = "이메일을 입력해주세요.";
    emailBox.classList.add("error_border");
  } else if (!regex.test(e.target.value) && e.target.value.length > 0) {
    // 이메일 형식에 맞지 않을 때
    emailErrorMsg.textContent = "올바른 이메일 주소가 아닙니다.";
    emailBox.classList.add("error_border");
  } else {
    emailBox.classList.remove("error_border");
    emailErrorMsg.textContent = "";
  }
});

// 비밀번호 input에서 focus out할 때
passwordBox.addEventListener("blur", function (e) {
  if (!e.target.value) {
    // 아무것도 입력하지 않았을 때
    passwordErrorMsg.textContent = "비밀번호를 입력해주세요.";
    passwordBox.classList.add("error_border");
  } else {
    passwordBox.classList.remove("error_border");
    passwordErrorMsg.textContent = "";
  }
});
