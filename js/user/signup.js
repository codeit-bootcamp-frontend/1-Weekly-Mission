import {
  email,
  password,
  emailInput,
  pwInput,
  TEST_ID,
  showError,
  changeEyeBtn,
  removeError,
} from "./user.js";

const pwConfirmInput = document.querySelector("#pwConfirmInput");
const pwConfirmErrorMsg = document.querySelector("#pwConfirmErrorMsg");
const pwConfirmEyeBtn = document.querySelector(
  "#pwConfirmInputContainer .eyeOffImg"
);
const signupBtn = document.querySelector("#signupBtn");

const passwordConfirm = {
  input: pwConfirmInput,
  errorMsg: pwConfirmErrorMsg,
};

function validEmail() {
  if (emailInput.value === TEST_ID) {
    showError(email, "이미 사용 중인 이메일입니다.");
  }
}

emailInput.addEventListener("focusout", function () {
  validEmail();
});

pwInput.addEventListener("focusout", function () {
  const regexPw = /^(?=.*[a-zA-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;

  if (!regexPw.test(pwInput.value)) {
    showError(password, "비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요.");
  } else {
    removeError(password);
  }
});

pwConfirmEyeBtn.addEventListener("click", function () {
  changeEyeBtn(pwConfirmInput, pwConfirmEyeBtn);
});

pwConfirmInput.addEventListener("focusout", function () {
  if (passwordConfirm.input.value !== pwInput.value) {
    showError(passwordConfirm, "비밀번호가 일치하지 않아요.");
  } else {
    removeError(passwordConfirm);
  }
});

signupBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    emailInput.value &&
    pwInput &&
    pwConfirmInput &&
    !emailInput.classList.contains("error") &&
    !pwInput.classList.contains("error") &&
    !pwConfirmInput.classList.contains("error")
  ) {
    location.href = "folder.html";
  }
});
