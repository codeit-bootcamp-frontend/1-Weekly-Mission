import { formEl, emailEl, passwordEl, emailErrorEl, passwordErrorEl } from "./common/constants/elements.js";
import { isEmailEmpty, isEmailValidation } from "./common/utils/emailValidationCheck.js";
import { isPasswordEmpty } from "./common/utils/passwordValidationCheck.js";

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
const onClickSubmit = async (e) => {
  e.preventDefault();

  if (!emailInputValidation(emailEl.value) || !passwordInputValidation(passwordEl.value)) return;

  try {
    const res = await fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        email: emailEl.value,
        password: passwordEl.value,
      }),
    });

    if (!res.ok) {
      emailErrorEl.textContent = "이메일을 확인해주세요";
      passwordErrorEl.textContent = "비밀번호를 확인해주세요";
      addErrorClass(emailEl);
      addErrorClass(passwordEl);
      return;
    }

    const result = await res.json();
    const accessToken = result.data.accessToken;
    localStorage.setItem("accessToken", accessToken);
    formEl.submit();
  } catch (error) {
    console.log(error);
  }
};

formEl.addEventListener("focusout", checkFormValue);
formEl.addEventListener("submit", onClickSubmit);
