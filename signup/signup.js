const emailInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const passwordCheckInput = document.querySelector("#password-check");

const loginBtn = document.querySelector("#loginBtn");

const emailErrorText = document.querySelector("#email-error");
const passwordErrorText = document.querySelector("#password-error");
const passwordCheckErrorText = document.querySelector("#password-check-error");

const toggleVisibility = document.querySelector("#toggleVisibility");

function displayError(element, message) {
  element.textContent = message;
  element.style.visibility = message ? "visible" : "hidden";
}

function checkEmailValidity() {
  const email = emailInput.value;
  if (!email) {
    displayError(emailErrorText, "이메일을 입력해주세요.");
    return false;
  } else if (!isValidEmail(email)) {
    displayError(emailErrorText, "올바른 이메일 주소가 아닙니다.");
    return false;
  } else if (email === "test@codeit.com") {
    displayError(emailErrorText, "이미 사용 중인 이메일입니다.");
    return false;
  } else {
    displayError(emailErrorText, "");
    return true;
  }
}

function checkPasswordValidity() {
  const password = passwordInput.value;
  if (!password) {
    displayError(passwordErrorText, "비밀번호를 입력해주세요.");
    return false;
  } else if (password.length < 8 || !isValidPassword(password)) {
    displayError(
      passwordErrorText,
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요."
    );
    return false;
  } else {
    displayError(passwordErrorText, "");
    return true;
  }
}

function checkPasswordMatch() {
  if (passwordInput.value !== passwordCheckInput.value) {
    displayError(passwordCheckErrorText, "비밀번호가 일치하지 않아요.");
    return false;
  } else {
    displayError(passwordCheckErrorText, "");
    return true;
  }
}

emailInput.addEventListener("blur", checkEmailValidity);
passwordInput.addEventListener("blur", checkPasswordValidity);
passwordCheckInput.addEventListener("blur", checkPasswordMatch);

loginBtn.addEventListener("click", submitForm);
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    submitForm();
  }
});

function submitForm() {
  if (checkEmailValidity() && checkPasswordValidity() && checkPasswordMatch()) {
    window.location.href = "/folder";
  }
}

toggleVisibility.addEventListener("click", function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleVisibility.src = "/assets/eye-on.svg";
  } else {
    passwordInput.type = "password";
    toggleVisibility.src = "/assets/eye-off.svg";
  }
});

function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

function isValidPassword(password) {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return passwordRegex.test(password);
}
