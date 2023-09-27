const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passwordVisible = document.querySelector(".password-eye-off");
const emailError = document.createElement("div");
const passwordError = document.createElement("div");
const loginButton = document.querySelector("form");

/**
 * 이메일 체크 함수
 * @param {string} email
 * @returns boolean
 */
function emailCheck(email) {
  var pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return pattern.test(email);
}

/**
 * 이메일 에러 메시지 함수
 */
function emailErrorMsg() {
  if (!email.value) {
    email.classList.add("error");
    emailError.classList.add("error-msg");
    emailError.textContent = "이메일을 입력하세요.";
    email.parentElement.append(emailError);
  } else if (!emailCheck(email.value)) {
    email.classList.add("error");
    emailError.classList.add("error-msg");
    emailError.textContent = "올바른 이메일 주소가 아닙니다.";
    email.parentElement.append(emailError);
  }
}

/**
 * 이메일 에러 클래스 삭제 함수
 */
function emailErrorMsgDel() {
  if (email.parentElement.lastElementChild === emailError) {
    email.classList.remove("error");
    email.parentElement.lastElementChild.remove();
  }
}

/**
 * 비밀번호 에러 메시지 함수
 */
function passwordErrorMsg() {
  if (!password.value) {
    password.classList.add("error");
    passwordError.classList.add("error-msg");
    passwordError.textContent = "비밀번호를 입력하세요.";
    password.parentElement.parentElement.append(passwordError);
  }
}

/**
 * 비밀번호 에러 클래스 삭제 함수
 */
function passwordErrorMsgDel() {
  if (password.parentElement.parentElement.lastElementChild === passwordError) {
    password.classList.remove("error");
    password.parentElement.parentElement.lastElementChild.remove();
  }
}

/**
 * 로그인 함수
 * @param {event} event
 */
function login(event) {
  event.preventDefault();
  let link = "../pages/folder.html";
  const testEmail = "test@codeit.com";
  const testPassword = "codeit101";

  if (email.value === testEmail && password.value === testPassword) {
    window.location.replace(link);
  } else if (email.value !== testEmail || password.value !== testPassword) {
    email.classList.add("error");
    emailError.classList.add("error-msg");
    emailError.textContent = "이메일을 확인해주세요.";
    email.parentElement.append(emailError);
    password.classList.add("error");
    passwordError.classList.add("error-msg");
    passwordError.textContent = "비밀번호를 확인해주세요.";
    password.parentElement.parentElement.append(passwordError);
  }
}

/**
 * 비밀번호 보이기 / 숨기기 함수
 * @param {event} event
 */
function passwordEye(event) {
  const passwordType = document.querySelector("#password");

  if (event.target.className == "password-eye-on") {
    event.target.classList.replace("password-eye-on", "password-eye-off");
    passwordType.type = "password";
  } else {
    event.target.classList.replace("password-eye-off", "password-eye-on");
    passwordType.type = "text";
  }
}

email.addEventListener("focusout", emailErrorMsg);
email.addEventListener("focusin", emailErrorMsgDel);
password.addEventListener("focusout", passwordErrorMsg);
password.addEventListener("focusin", passwordErrorMsgDel);
passwordVisible.addEventListener("click", passwordEye);
loginButton.addEventListener("submit", login);
