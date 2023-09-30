const form = document.querySelector("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const rePassword = document.getElementById("re-password");
const emailLabel = document.querySelector(".email-label");
const passwordLabel = document.querySelector(".password-label");
const repasswordLabel = document.querySelector(".re-password-label");
const eyeIcon = document.querySelector(".eye-on-image");
const ReEyeIcon = document.querySelector(".re-eye-on-image");
function showMessage(inputText) {
  return `${inputText}을 입력해주세요`;
}

// 빈값일때 handling
function IsEmpty(input, inputLabel) {
  const errorMsgs = inputLabel.querySelector("small");
  if (input.value.trim().length === 0 && errorMsgs.innerText.length === 0) {
    // inpuLabel.textContent는 공백을 포함하기 떄문에 공백포함해서 나와서 이상함
    let errorMessage = showMessage(inputLabel.innerText);
    errorMsgs.innerText = errorMessage;
  } else if (input.value.trim().length !== 0) {
    errorMsgs.innerText = "";
  }
}

// 유효한 이메일이 아닐때 handling
function IsValidEmail(input, inputLabel, message) {
  const re = /^[a-z0-9]+@[a-z]+\.[a-z]{2,5}/;
  const texts = input.value.trim();
  if (!re.test(texts) && texts.length) {
    const errorMsgs = inputLabel.querySelector("small");
    errorMsgs.innerText = message;
  }
}

// test@codeit.com, 비code밀번호: codeit101 으로 로그인 시도한경우
function isCodeItLogin(email, password) {
  return (
    email.value.trim() === "test@codeit.com" &&
    password.value.trim() === "codeit101"
  );
}

// 눈모양
// https://medium.com/@miguelznunez/html-css-javascript-how-to-show-hide-password-using-the-eye-icon-27f033bf84ad
// https://codepen.io/kimpetersend1/pen/abzWEGK

email.addEventListener("focusout", function (event) {
  event.preventDefault();
  IsEmpty(email, emailLabel);
  IsValidEmail(email, emailLabel, "유효하지않은이메일입니다");
});

password.addEventListener("focusout", function (event) {
  event.preventDefault();
  IsEmpty(password, passwordLabel);
});

rePassword.addEventListener("focusout", function (event) {
  event.preventDefault();
  IsEmpty(rePassword, repasswordLabel);
});

function isPasswordVisible() {
  if (eyeIcon.classList.contains("fa-eye")) {
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
    password.type = "password";
  } else if (eyeIcon.classList.contains("fa-eye-slash")) {
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
    password.type = "text";
  }
}

function isPasswordVisible2() {
  if (ReEyeIcon.classList.contains("fa-eye")) {
    ReEyeIcon.classList.remove("fa-eye");
    ReEyeIcon.classList.add("fa-eye-slash");
    rePassword.type = "password";
  } else if (ReEyeIcon.classList.contains("fa-eye-slash")) {
    ReEyeIcon.classList.remove("fa-eye-slash");
    ReEyeIcon.classList.add("fa-eye");
    rePassword.type = "text";
  }
}

eyeIcon.addEventListener("click", isPasswordVisible);
ReEyeIcon.addEventListener("click", isPasswordVisible2);
