import {
  email,
  password,
  passwordRepeat,
  emailError,
  passwordError,
  passwordRepeatError,
} from "./tags.js";
import {
  appearError,
  disappearError,
  eyeCheck,
  isValidEmail,
  isValidPassword,
} from "./functions.js";

const signupBtn = document.querySelector(".signup-button");
const eyeBtn1 = document.querySelector("#eye-button1");
const eyeBtn2 = document.querySelector("#eye-button2");
signupBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    !email.classList.contains("error-border") &&
    !password.classList.contains("error-border") &&
    !passwordRepeat.classList.contains("error-border")
  ) {
    location.href = "./folder.html";
    disappearError(email, emailError);
    disappearError(password, passwordError);
    disappearError(passwordRepeat, passwordRepeatError);
  }
});

email.addEventListener("blur", function () {
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

password.addEventListener("blur", function () {
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

passwordRepeat.addEventListener("blur", function () {
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

eyeBtn1.addEventListener("click", eyeCheck);
eyeBtn2.addEventListener("click", eyeCheck);
