import { auth } from "./common/constants/endpoints.js";
import { API_URL, APPLICATION_JSON_TYPE } from "./common/constants/api.js";
import {
  emailEl,
  emailErrorEl,
  formEl,
  passwordCheckEl,
  passwordCheckErrorEl,
  passwordEl,
  passwordErrorEl,
} from "./common/constants/elements.js";

import { isEmailEmpty, isEmailValidation, isDuplicateEmail } from "./common/utils/emailValidationCheck.js";
import { isPasswordEmpty, isPasswordValidation } from "./common/utils/passwordValidationCheck.js";

const addErrorClass = (el) => el.classList.add("error");
const removeErrorClass = (el) => el.classList.remove("error");

/* 이메일 유효성 검사 */
const emailInputValidation = async (value) => {
  if (isEmailEmpty(value) || isEmailValidation(value) || (await isDuplicateEmail(value))) {
    addErrorClass(emailEl);
    return false;
  }

  emailErrorEl.textContent = "";
  removeErrorClass(emailEl);
  return true;
};

/* 비밀번호 유효성 검사 */
const passwordInputValidation = (value) => {
  if (isPasswordEmpty(value) || isPasswordValidation(value)) {
    addErrorClass(passwordEl);
    return false;
  }

  passwordErrorEl.textContent = "";
  removeErrorClass(passwordEl);
  return true;
};

/* 비밀번호 확인 유효성 검사 */
const passwordCheckInputValidation = (value) => {
  if (!value || passwordEl.value !== value) {
    passwordCheckErrorEl.textContent = "비밀번호가 일치하지 않아요.";
    addErrorClass(passwordCheckEl);
    return;
  }
  passwordCheckErrorEl.textContent = "";
  removeErrorClass(passwordCheckEl);
  return true;
};

/** 이메일, 비밀번호 focus out할 때, value 체크 */
const checkFormValue = (e) => {
  if (!e.target.classList.contains("form__input")) return;

  const { value, id } = e.target;

  if (id === "email") emailInputValidation(value);
  if (id === "password") passwordInputValidation(value);
  if (id === "passwordCheck") passwordCheckInputValidation(value);
};

/*유효한 회원가입 시도의 경우, “/folder”로 이동 */
const onClickSubmit = async (e) => {
  e.preventDefault();

  if (
    !emailInputValidation(emailEl.value) ||
    !passwordInputValidation(passwordEl.value) ||
    !passwordCheckInputValidation(passwordCheckEl.value)
  )
    return;

  try {
    const res = await fetch(`${API_URL}${auth.SIGN_UP}`, {
      method: "POST",
      headers: {
        "Content-Type": APPLICATION_JSON_TYPE,
      },
      body: JSON.stringify({
        email: emailEl.value,
        password: passwordEl.value,
      }),
    });

    if (res.ok) {
      const result = await res.json();
      const accessToken = result.data.accessToken;
      localStorage.setItem("accessToken", accessToken);
      formEl.submit();
    }
  } catch (error) {
    console.log(error);
  }
};

formEl.addEventListener("focusout", checkFormValue);
formEl.addEventListener("submit", onClickSubmit);
