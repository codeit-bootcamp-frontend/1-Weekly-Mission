const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passwordRepeat = document.querySelector("#password-repeat");

const signupBtn = document.querySelector(".signup-button");

const eyeBtn = document.querySelector(".eye-slashed");

const emailError = document.querySelector(".email-message");
const passwordError = document.querySelector(".password-message");
const passwordRepeatError = document.querySelector(".password-repeat-message");

function appearError(el, elError, errorText) {
  elError.classList.add("error-appear");
  elError.textContent = errorText;
  el.classList.add("error-border");
}
function disappearError(el, elError) {
  elError.classList.remove("error-appear");
  el.classList.remove("error-border");
}

signupBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (email.value === "test@codeit.com" && password.value === "codeit101") {
    location.href = "./folder.html";
    disappearError(email, emailError);
    disappearError(password, passwordError);
  } else {
    appearError(email, emailError, "이메일을 확인해주세요.");
    appearError(password, passwordError, "비밀번호를 확인해주세요.");
  }
});

email.addEventListener("focusout", function () {
  if (!email.value) {
    appearError(email, emailError, "이메일을 입력해주세요.");
  } else if (!isValidEmail(email.value)) {
    appearError(email, emailError, "올바른 이메일 주소가 아닙니다.");
  } else if (email.value === "test@codeit.com") {
    appearError(email, emailError, "이미 사용 중인 이메일입니다.");
  } else {
    disappearError(email, emailError);
  }
});

function isValidEmail(email) {
  const pattern = /^[A-Za-z0-9_\\.\\-]+@[A-Za-z0-9\\-]+\.[A-za-z0-9\\-]+/;
  return pattern.test(email);
}

password.addEventListener("focusout", function () {
  if (!password.value) {
    appearError(password, passwordError, "비밀번호를 입력해주세요.");
  } else if (!isValidPassword(password.value)) {
    appearError(
      password,
      passwordError,
      "비밀번호는 영문, 숫자 조합 8자리 이상 입력해 주세요."
    );
  } else {
    disappearError(password, passwordError);
  }
});

function isValidPassword(password) {
  const pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return pattern.test(password);
}

passwordRepeat.addEventListener("focusout", function () {
  if (passwordRepeat.value !== password.value) {
    appearError(
      passwordRepeat,
      passwordRepeatError,
      "비밀번호가 일치하지 않아요."
    );
  } else {
    disappearError(passwordRepeat, passwordRepeatError);
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
