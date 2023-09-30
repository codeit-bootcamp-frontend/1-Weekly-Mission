const email = document.querySelector("#email");
const password = document.querySelector("#password");
const signinBtn = document.querySelector(".signin-button");

const eyeBtn = document.querySelector(".eye-slashed");

const emailError = document.querySelector(".email-message");
const passwordError = document.querySelector(".password-message");

signinBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (email.value == "test@codeit.com" && password.value == "codeit101") {
    location.href = "./folder.html";
    emailError.classList.remove("error-appear");
    passwordError.classList.remove("error-appear");
  } else if (
    email.value !== "test@codeit.com" &&
    password.value == "codeit101"
  ) {
    emailError.classList.add("error-appear");
    email.classList.add("error-border");
    emailError.textContent = "이메일을 확인해주세요.";
    passwordError.classList.remove("error-appear");
  } else if (
    email.value == "test@codeit.com" &&
    password.value !== "codeit101"
  ) {
    emailError.classList.remove("error-appear");
    passwordError.classList.add("error-appear");
    password.classList.add("error-border");
    passwordError.textContent = "비밀번호를 확인해주세요.";
  } else {
    emailError.classList.add("error-appear");
    passwordError.classList.add("error-appear");
    email.classList.add("error-border");
    password.classList.add("error-border");
    emailError.textContent = "이메일을 확인해주세요.";
    passwordError.textContent = "비밀번호를 확인해주세요.";
  }
});

email.addEventListener("blur", function () {
  if (!email.value) {
    emailError.classList.add("error-appear");
    email.classList.add("error-border");
    emailError.textContent = "이메일을 입력해주세요.";
  } else if (!isValidEmail(email.value)) {
    emailError.classList.add("error-appear");
    email.classList.add("error-border");

    emailError.textContent = "올바른 이메일 주소가 아닙니다.";
  } else {
    emailError.classList.remove("error-appear");
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

password.addEventListener("blur", function () {
  if (!password.value) {
    passwordError.classList.add("error-appear");
    password.classList.add("error-border");

    passwordError.textContent = "비밀번호를 입력해주세요.";
  } else {
    passwordError.classList.remove("error-appear");
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
