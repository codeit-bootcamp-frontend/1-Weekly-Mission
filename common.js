// common.js

const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function togglePassword(passwordInput, passwordToggle) {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    passwordToggle.src = "assets/img/eye-on.svg";
  } else {
    passwordInput.type = "password";
    passwordToggle.src = "assets/img/eye-off.svg";
  }
}

function validateEmail(emailInput, emailError) {
  if (emailInput.value === "") {
    emailError.textContent = "이메일을 입력해주세요.";
    emailError.style.display = "block";
    emailInput.style.borderColor = "red";
  } else if (!emailPattern.test(emailInput.value)) {
    emailError.textContent = "올바른 이메일 주소가 아닙니다.";
    emailError.style.display = "block";
    emailInput.style.borderColor = "red";
  } else {
    emailError.style.display = "none";
    emailInput.style.borderColor = "black";
  }
}

function validatePassword(passwordInput, passwordError) {
  if (passwordInput.value === "") {
    passwordError.textContent = "비밀번호를 입력해주세요.";
    passwordError.style.display = "block";
    passwordInput.style.borderColor = "red";
  } else {
    passwordError.style.display = "none";
    passwordInput.style.borderColor = "black";
  }
}

export { togglePassword, validateEmail, validatePassword };
