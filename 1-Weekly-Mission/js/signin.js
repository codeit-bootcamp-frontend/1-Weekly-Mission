"use strict";

const emailBox = document.querySelector("#email");
const passwordBox = document.querySelector("#password");
const submitButton = document.querySelector(".sign_button");
const eyeButton = document.querySelector(".eye_off");

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

// 이메일: test@codeit.com, 비밀번호: codeit101 으로 로그인 시도할 경우
submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    emailBox.value === "test@codeit.com" &&
    passwordBox.value === "codeit101"
  ) {
    location.href = "./folder.html";
  } else {
    emailErrorMsg.textContent = "이메일을 확인해주세요.";
    emailBox.classList.add("error_border");
    passwordErrorMsg.textContent = "비밀번호를 확인해주세요.";
    passwordBox.classList.add("error_border");
  }
});

// 눈모양 버튼 클릭 시 구현
eyeButton.addEventListener("click", function (e) {
  if (passwordBox.getAttribute("type") === "password") {
    passwordBox.setAttribute("type", "text");
    eyeButton.firstElementChild.setAttribute("src", "./image/eye-on.svg");
  } else {
    passwordBox.setAttribute("type", "password");
    eyeButton.firstElementChild.setAttribute("src", "./image/eye-off.svg");
  }
});
