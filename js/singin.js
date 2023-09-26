const email = document.querySelector("#email");
const password = document.querySelector("#password");
const emailError = document.createElement("div");
const passwordError = document.createElement("div");

/**
 * 이메일 체크 함수
 * @param {string} email
 * @returns boolean
 */
function emailCheck(email) {
  if (email.indexOf("@") >= 0 && email.indexOf(".") >= 0) {
    return true;
  } else {
    return false;
  }
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
  } else if (email.parentElement.lastElementChild === emailError) {
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
    password.parentElement.append(passwordError);
  } else if (password.parentElement.lastElementChild === passwordError) {
    password.classList.remove("error");
    password.parentElement.lastElementChild.remove();
  }
}

email.addEventListener("focusout", emailErrorMsg);
password.addEventListener("focusout", passwordErrorMsg);
