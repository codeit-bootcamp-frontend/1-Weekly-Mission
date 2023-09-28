"use strict";

const USER_EMAIL = "test@codeit.com";
const USER_PASSWORD = "codeit101";

const form = document.querySelector(".form");

const email = document.getElementById("email");
const password = document.getElementById("password");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const eyeIcon = document.querySelector(".form__input--selected");
let isSelected = true;

// 1-1. 비밀번호 가리기 기능 - selected 상태를 변경하는 로직
const onClickHiddenPassword = () => {
  isSelected = !isSelected;

  // 1-2. 비밀번호 가리기 기능 - selected 상태에 따라 type과 src를 변경하는 로직
  changePasswordType();
};

function changePasswordType() {
  if (isSelected) {
    password.setAttribute("type", "password");
    eyeIcon.setAttribute("src", "images/eye-off.svg");
  } else {
    password.setAttribute("type", "text");
    eyeIcon.setAttribute("src", "images/eye-on.svg");
  }
}

// 이메일 input에서 focus out할 때, 이메일 형식에 맞지 않는 값이 있는 경우 에러메세지
const regExp = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/i;

const emailValidation = (value) => {
  if (!regExp.test(value)) {
    emailError.textContent = "올바른 이메일 주소가 아닙니다.";
    email.classList.add("error");
  } else {
    emailError.textContent = "";
    email.classList.remove("error");
  }
};

// 이메일, 비밀번호 input에서 focus out할 때, 값이 없을 경우 에러메세지
const checkEmailValue = () => {
  if (!email.value) {
    emailError.textContent = "이메일을 입력해주세요";
    email.classList.add("error");
  } else {
    emailValidation(email.value);
  }
};

const checkPasswordValue = () => {
  if (!password.value) {
    passwordError.textContent = "비밀번호를 입력해주세요";
    password.classList.add("error");
  } else {
    passwordError.textContent = "";
    password.classList.remove("error");
  }
};

// 이메일: test@codeit.com, 비밀번호: codeit101 으로 로그인 시도할 경우, “/folder” 페이지로 이동
const onClickSubmit = (e) => {
  e.preventDefault();

  if (!email.value || !password.value) {
    checkEmailValue();
    checkPasswordValue();
    return;
  }
  if (email.value === USER_EMAIL && password.value === USER_PASSWORD) {
    form.submit();
  } else {
    // 이외의 로그인 시도의 경우, 이메일 input, 비밀번호 input 아래에 해당 에러 메세지
    emailError.textContent = "이메일을 확인해주세요";
    email.classList.add("error");
    passwordError.textContent = "비밀번호를 확인해주세요";
    password.classList.add("error");
  }
};

email.addEventListener("focusout", checkEmailValue);
password.addEventListener("focusout", checkPasswordValue);
eyeIcon.addEventListener("click", onClickHiddenPassword);
form.addEventListener("submit", onClickSubmit);
