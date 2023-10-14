import {
  errorMessageStop,
  addErrorStyle,
  removeErrorStyle,
} from "./errors/errors.js";
import { toggleImage } from "./toggleImage.js";
import { checkPassword } from "./input/checkPassword.js";
import { inputEmail, inputPassword } from "./constants.js";
import { checkSignupEmail } from "./input/checkSignupEmail.js";

const eyeImagePasswordEl = document.querySelector("#eyeImage-password");
const eyeImagePasswordReEl = document.querySelector("#eyeImage-password-re");
const eyeImagePassword = eyeImagePasswordEl.children[0];
const eyeImagePasswordRe = eyeImagePasswordReEl.children[0];
const submitButton = document.querySelector('button[type="submit"]');
const signupForm = document.querySelector("form");
const inputPasswordRe = document.querySelector("#password-re");
const passwordReErrorMessage = document.querySelector(
  ".password-re-error-message"
);

// <눈모양 아이콘 적용, 비밀번호 입력타입 변경>
eyeImagePassword.addEventListener("click", () => {
  toggleImage(eyeImagePassword, inputPassword);
});
eyeImagePasswordRe.addEventListener("click", () => {
  toggleImage(eyeImagePasswordRe, inputPasswordRe);
});

//<입력하는 동안에는 에러메시지 안 보이게 하기 >
inputEmail.addEventListener("input", errorMessageStop);
inputPassword.addEventListener("input", errorMessageStop);

//<이메일 형식 검증>
inputEmail.addEventListener("focusout", checkSignupEmail);

//<비밀번호 형식 검증>
inputPassword.addEventListener("focusout", checkPassword);

//비밀번호-비밀번호 확인 값 일치 확인
function checkPasswordRe() {
  const password = inputPassword.value;
  const passwordRe = inputPasswordRe.value;
  if (password !== passwordRe) {
    addErrorStyle(
      inputPasswordRe,
      passwordReErrorMessage,
      "비밀번호가 일치하지 않아요."
    );
  } else {
    removeErrorStyle(inputPasswordRe, passwordReErrorMessage);
    return true;
  }
}
inputPasswordRe.addEventListener("focusout", checkPasswordRe);

//이메일&비밀번호 모두 유효한 값이라면 버튼 동작하도록 함
function submitAccount() {
  const isEmailValid = checkSignupEmail();
  const isPasswordValid = checkPassword();
  const isPasswordReValid = checkPasswordRe();
  if (isEmailValid && isPasswordValid && isPasswordReValid) {
    window.location.href = "./folder.html";
  }
}

submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  submitAccount();
});

signupForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const email = inputEmail.value.trim();
  const password = inputPassword.value;
  validAccount(email, password);
});
