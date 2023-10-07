import { checkEmailValidation, checkUniqueEmail, checkPasswordValidation } from "./common/emailPasswordValidation.js";

const form = document.querySelector(".form");

const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordCheck = document.getElementById("passwordCheck");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const passwordCheckError = document.getElementById("passwordCheckError");

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

  const isUniqValue = checkUniqueEmail(value);
  if (!isUniqValue) {
    emailError.textContent = "이미 사용 중인 이메일입니다.";
    addErrorClass(email);
    return;
  }

  emailError.textContent = "";
  removeErrorClass(email);
  return true;
};

/* 비밀번호 유효성 검사 */
const passwordValidation = (value) => {
  const isPasswordValid = checkPasswordValidation(value);
  if (!isPasswordValid) {
    passwordError.textContent = "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
    addErrorClass(password);
    return;
  }
  passwordError.textContent = "";
  removeErrorClass(password);
  return true;
};

/* 비밀번호 확인 유효성 검사 */
const passwordCheckValidation = (value) => {
  if (!value || password.value !== value) {
    passwordCheckError.textContent = "비밀번호가 일치하지 않아요.";
    addErrorClass(passwordCheck);
    return;
  }
  passwordCheckError.textContent = "";
  removeErrorClass(passwordCheck);
  return true;
};

/** 이메일, 비밀번호 focus out할 때, value 체크 */
const checkFormValue = (e) => {
  if (!e.target.classList.contains("form__input")) return;

  const { value, id } = e.target;

  if (id === "email") emailValidation(value);
  if (id === "password") passwordValidation(value);
  if (id === "passwordCheck") passwordCheckValidation(value);
};

/*유효한 회원가입 시도의 경우, “/folder”로 이동 */
const onClickSubmit = (e) => {
  e.preventDefault();

  if (!emailValidation(email.value)) return;
  if (!passwordValidation(password.value)) return;
  if (!passwordCheckValidation(passwordCheck.value)) return;

  form.submit();
};

form.addEventListener("focusout", checkFormValue);
form.addEventListener("submit", onClickSubmit);
