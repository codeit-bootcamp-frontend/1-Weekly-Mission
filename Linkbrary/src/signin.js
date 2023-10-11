import { formEl, emailEl, passwordEl, emailErrorEl, passwordErrorEl } from "./common/constants/elements.js";
import { isEmailEmpty, isEmailValidation } from "./common/utils/emailValidationCheck.js";
import { isPasswordEmpty } from "./common/utils/passwordValidationCheck.js";

const USER_EMAIL = "test@codeit.com";
const USER_PASSWORD = "codeit101";

const addErrorClass = (el) => el.classList.add("error");
const removeErrorClass = (el) => el.classList.remove("error");

/* 이메일 유효성 검사 */
const emailInputValidation = (value) => {
  if (isEmailEmpty(value) || isEmailValidation(value)) {
    addErrorClass(emailEl);
    return false;
  }

  emailErrorEl.textContent = "";
  removeErrorClass(emailEl);
  return true;
};

/** 비밀번호 유효성 검사 */
const passwordInputValidation = (value) => {
  if (isPasswordEmpty(value)) {
    addErrorClass(passwordEl);
    return false;
  }

  passwordErrorEl.textContent = "";
  removeErrorClass(passwordEl);
  return true;
};

/** 이메일, 비밀번호 focus out할 때, value 체크 */
const checkFormValue = (e) => {
  if (!e.target.classList.contains("form__input")) return;

  const { value, id } = e.target;

  if (id === "email") emailInputValidation(value);
  if (id === "password") passwordInputValidation(value);
};

/** 이메일, 비밀번호가 매치되는 로그인 시도할 경우, “/folder” 페이지로 이동  */
const onClickSubmit = (e) => {
  e.preventDefault();

  if (!emailInputValidation(emailEl.value) || !passwordInputValidation(passwordEl.value)) return;

  /** 이외의 로그인 시도의 경우, 이메일 input, 비밀번호 input 아래에 해당 에러 메세지 */
  if (emailEl.value !== USER_EMAIL || passwordEl.value !== USER_PASSWORD) {
    emailErrorEl.textContent = "이메일을 확인해주세요";
    passwordErrorEl.textContent = "비밀번호를 확인해주세요";
    addErrorClass(emailEl);
    addErrorClass(passwordEl);
    return;
  }
  formEl.submit();
};

formEl.addEventListener("focusout", checkFormValue);
formEl.addEventListener("submit", onClickSubmit);
