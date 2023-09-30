const form = document.querySelector("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const emailLabel = document.querySelector(".email-label");
const passwordLabel = document.querySelector(".password-label");
const loginButton = document.getElementById("login-button");
const eyeIcon = document.querySelector(".eye-on-image");

function showMessage(inputText) {
  return `${inputText}을 입력해주세요`;
}

// 빈값일때 handling
function IsEmpty(input, inputLabel) {
  const errorMsgs = inputLabel.querySelector("small");
  if (input.value.trim().length === 0 && errorMsgs.innerText.length === 0) {
    let errorMessage = showMessage(inputLabel.innerText);
    errorMsgs.innerText = errorMessage;
  } else if (input.value.trim().length !== 0) {
    errorMsgs.innerText = "";
  }
}

// 유효한 이메일이 아닐때 handling
// 메세지는 validation의 기능이 아니다...
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

// 비밀번호 눈emoji클릭한경우
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

email.addEventListener("focusout", function (event) {
  event.preventDefault();
  IsEmpty(email, emailLabel);
  IsValidEmail(email, emailLabel, "유효하지않은이메일입니다");
});

password.addEventListener("focusout", function (event) {
  event.preventDefault();
  IsEmpty(password, passwordLabel);
});

loginButton.addEventListener("click", function (event) {
  event.preventDefault();
  if (isCodeItLogin(email, password)) {
    window.location = "http://127.0.0.1:5500/folder.html";
  }
});

eyeIcon.addEventListener("click", isPasswordVisible);
