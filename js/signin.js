const email = document.querySelector("#email");
const password = document.querySelector("#password");
const signinBtn = document.querySelector(".signin-button");

const eyeBtn = document.querySelector(".eye-slashed");

const emailError = document.querySelector(".email-message");
const passwordError = document.querySelector(".password-message");

function appearErrorEmail() {
  emailError.classList.add("error-appear");
  email.classList.add("error-border");
}
function disappearErrorEmail() {
  emailError.classList.remove("error-appear");
  email.classList.remove("error-border");
}
function appearErrorPassword() {
  passwordError.classList.add("error-appear");
  password.classList.add("error-border");
}
function disappearErrorPassword() {
  passwordError.classList.remove("error-appear");
  password.classList.remove("error-border");
}

signinBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (email.value === "test@codeit.com" && password.value === "codeit101") {
    location.href = "./folder.html";
    disappearErrorEmail();
    disappearErrorPassword();
  } else if (
    email.value !== "test@codeit.com" &&
    password.value == "codeit101"
  ) {
    appearErrorEmail();
    disappearErrorPassword();
    emailError.textContent = "이메일을 확인해주세요.";
  } else if (
    email.value == "test@codeit.com" &&
    password.value !== "codeit101"
  ) {
    disappearErrorEmail();
    appearErrorPassword();
    passwordError.textContent = "비밀번호를 확인해주세요.";
  } else {
    appearErrorEmail();
    appearErrorPassword();
    emailError.textContent = "이메일을 확인해주세요.";
    passwordError.textContent = "비밀번호를 확인해주세요.";
  }
});

email.addEventListener("focusout", function () {
  if (!email.value) {
    appearErrorEmail();
    emailError.textContent = "이메일을 입력해주세요.";
  } else if (!isValidEmail(email.value)) {
    appearErrorEmail();
    emailError.textContent = "올바른 이메일 주소가 아닙니다.";
  } else {
    disappearErrorEmail();
  }
});

function isValidEmail(email) {
  const pattern = /^[A-Za-z0-9_\\.\\-]+@[A-Za-z0-9\\-]+\.[A-za-z0-9\\-]+/;
  if (pattern.test(email) === false) {
    return false;
  } else {
    return true;
  }
}

password.addEventListener("focusout", function () {
  if (!password.value) {
    appearErrorPassword();
    passwordError.textContent = "비밀번호를 입력해주세요.";
  } else {
    disappearErrorPassword();
  }
});

eyeBtn.addEventListener("click", function () {
  if (password.type === "password") {
    password.type = "text";
    eyeBtn.src = "./images/eye_unslashed.svg";
  } else {
    password.type = "password";
    eyeBtn.src = "./images/eye_slashed.svg";
  }
});
