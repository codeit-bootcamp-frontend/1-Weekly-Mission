import { email, password, emailError, passwordError } from "./tags.js";
import { appearError, disappearError, eyeCheck } from "./controlError.js";

const signinBtn = document.querySelector(".signin-button");
const eyeBtn = document.querySelector(".eye-button");

signinBtn.addEventListener("click", function (e) {
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

email.addEventListener("blur", function () {
  if (!email.value) {
    appearError(email, emailError, "이메일을 입력해주세요.");
  } else if (!isValidEmail(email.value)) {
    appearError(email, emailError, "올바른 이메일 주소가 아닙니다.");
  } else {
    disappearError(email, emailError);
  }
});

function isValidEmail(email) {
  const pattern = /^[A-Za-z0-9_\\.\\-]+@[A-Za-z0-9\\-]+\.[A-za-z0-9\\-]+/;
  return pattern.test(email);
}

password.addEventListener("blur", function () {
  if (!password.value) {
    appearError(password, passwordError, "비밀번호를 입력해주세요.");
  } else {
    disappearError(password, passwordError);
  }
});

eyeBtn.addEventListener("click", eyeCheck);
