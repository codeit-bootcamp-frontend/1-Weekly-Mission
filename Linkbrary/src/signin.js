import { checkEmailValidation } from "./common/emailPasswordValidation.js";

const USER_EMAIL = "test@codeit.com";
const USER_PASSWORD = "codeit101";

const form = document.querySelector(".form");

const email = document.getElementById("email");
const password = document.getElementById("password");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const addErrorClass = (el) => el.classList.add("error");
const removeErrorClass = (el) => el.classList.remove("error");

/* 이메일 유효성 검사 */
const emailValidation = (value) => {
  if (!value) {
    emailError.textContent = "이메일을 입력해주세요";
    addErrorClass(email);
    return;
  }

  const isEmailValid = checkEmailValidation(value);
  if (!isEmailValid) {
    emailError.textContent = "올바른 이메일 주소가 아닙니다.";
    addErrorClass(email);
    return;
  }

  emailError.textContent = "";
  removeErrorClass(email);
  return true;
};

/** 비밀번호 유효성 검사 */
const passwordValidation = (value) => {
  if (!value) {
    passwordError.textContent = "비밀번호를 입력해주세요";
    addErrorClass(password);
    return;
  }
  passwordError.textContent = "";
  removeErrorClass(password);
  return true;
};

/** 이메일, 비밀번호 focus out할 때, value 체크 */
const checkFormValue = (e) => {
  if (!e.target.classList.contains("form__input")) return;

  const { value, id } = e.target;

  if (id === "email") emailValidation(value);
  if (id === "password") passwordValidation(value);
};

/** 이메일: test@codeit.com, 비밀번호: codeit101 으로 로그인 시도할 경우, “/folder” 페이지로 이동  */
const onClickSubmit = (e) => {
  e.preventDefault();

  if (!emailValidation(email.value)) return;
  if (!passwordValidation(password.value)) return;

  /** 이외의 로그인 시도의 경우, 이메일 input, 비밀번호 input 아래에 해당 에러 메세지 */
  if (email.value !== USER_EMAIL || password.value !== USER_PASSWORD) {
    emailError.textContent = "이메일을 확인해주세요";
    passwordError.textContent = "비밀번호를 확인해주세요";
    addErrorClass(email);
    addErrorClass(password);
    return;
  }
  form.submit();
};

form.addEventListener("focusout", checkFormValue);
form.addEventListener("submit", onClickSubmit);
