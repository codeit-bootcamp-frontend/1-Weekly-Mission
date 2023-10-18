import { isEmail, isPassword } from '/utils/validation.js';
import { addErrorMessage, removeErrorMessage } from '/utils/error.js';
import { toggleEyeIcon } from '/utils/toggle-icon.js';
import { 
  EMAIL_EMPTY, 
  EMAIL_INVALID, 
  EMAIL_USED,
  PASSWORD_INVALID,
  PASSWORD_NOT_MATCH
} from '/constants/error-message.js';
import {
  EMAIL_INPUT,
  EMAIL_ERROR,
  PASSWORD_INPUT,
  PASSWORD_ERROR,
  PASSWORD_CONFIRM_INPUT,
  PASSWORD_CONFIRM_ERROR,
  EYE_ICON,
  EYE_ICON_RE,
  LOGIN_BUTTON
} from '/constants/selector.js';
import { requestPost } from '/api/post.js';

// Email
const emailInput = document.querySelector(EMAIL_INPUT);
const emailError = document.querySelector(EMAIL_ERROR);

// Password
const passwordInput = document.querySelector(PASSWORD_INPUT);
const passwordError = document.querySelector(PASSWORD_ERROR);
const pwdConfirmInput = document.querySelector(PASSWORD_CONFIRM_INPUT);
const pwdConfirmError = document.querySelector(PASSWORD_CONFIRM_ERROR);

// Toggle
const eyeIcon = document.querySelector(EYE_ICON);
const eyeIcon_Re = document.querySelector(EYE_ICON_RE);

// LoginButton
const loginBtn = document.querySelector(LOGIN_BUTTON);


// AccessToken 존재 여부
if (localStorage.getItem("accessToken")) {
  location.href="/folder";
}


// 이메일 중복 확인
async function isDuplicatedEmail(email) {
  try {
    // const response = await fetch("https://bootcamp-api.codeit.kr/api/check-email", {
    //   method: 'POST',
    //   headers: {
    //   "content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ email }),
    // });

    const response = await requestPost(email);

    if (response.status === 409) {
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
  }
}


// 이메일 유효성 검사 
async function checkEmailValidation() {
  const email = emailInput.value.trim();

  if (email === '') {
    addErrorMessage(emailInput, emailError, EMAIL_EMPTY);
    return false;
  } else if (!isEmail(email)) {
    addErrorMessage(emailInput, emailError, EMAIL_INVALID);
    return false;
  } else if (await (isDuplicatedEmail(email))) {
    addErrorMessage(emailInput, emailError, EMAIL_USED); 
    return false;
  } else {
    removeErrorMessage(emailInput, emailError);
    return true;
  }
}


// 비밀번호 유효성 검사 
function checkPwdValidation() {
  const password = passwordInput.value.trim();

  if (!isPassword(password)) { // 값이 8자 미만 or only 문자열 or only 숫자
    addErrorMessage(passwordInput, passwordError, PASSWORD_INVALID);
    return false;
  } else {
    removeErrorMessage(passwordInput, passwordError);
    return true;
  }
} 


// 비밀번호 일치 확인 
function confirmPwd() {
  const password = passwordInput.value;
  const pwdConfirm = pwdConfirmInput.value;

  if(password !== pwdConfirm) {
    addErrorMessage(pwdConfirmInput, pwdConfirmError, PASSWORD_NOT_MATCH);
    return false;
  } else {
    removeErrorMessage(pwdConfirmInput, pwdConfirmError);
    return true;
  }
}

// 회원가입 시도 
async function submitForm() { 
  if (checkEmailValidation() && checkPwdValidation() && confirmPwd()) {
    try {
      const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-up", 
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailInput.value,
          password: passwordInput.value,
        })
      });

      const responseData = await response.json();
      
      if (response.ok) {
        // localStorage.setItem("acceessToken", responseData.accessToken);
        window.location.href = "/folder/index.html";
      }

    } catch(error) {
      console.log(error);
    }
  }
}

// Enter키 입력 시 회원가입 시도
function submitOnEnter(e) {
  if(e.key === "Enter") {
    submitForm();
  }
}

emailInput.addEventListener("focusout", checkEmailValidation);
passwordInput.addEventListener("focusout", checkPwdValidation);
pwdConfirmInput.addEventListener("focusout", confirmPwd);
loginBtn.addEventListener("click", submitForm);
pwdConfirmInput.addEventListener("keydown", submitOnEnter);


// 비밀번호 문자열 노출 
eyeIcon.addEventListener("click", () => {
  toggleEyeIcon(passwordInput, eyeIcon)
});
eyeIcon_Re.addEventListener("click", () => {
  toggleEyeIcon(pwdConfirmInput, eyeIcon_Re)
});