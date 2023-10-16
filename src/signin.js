import {
  addInputError,
  removeInputError,
  isEmailValid,
  togglePassword,
  TEST_USER,
} from "./utils.js";

//이메일 입력 안하면 오류 반환, 올바른 이메일이 아닐경우 오류 반환
const emailInput = document.querySelector("#signin__email");
const emailErrorMessage = document.querySelector("#email__error__message");
emailInput.addEventListener("focusout", (event) => validateEmailInput(event.target.value));
function validateEmailInput(email) {
  if (email === "") {
    addInputError({ input: emailInput, error__message: emailErrorMessage }, "이메일을 입력해주세요.");
    return;
  }
  if (!isEmailValid(email)) {
    addInputError(
      { input: emailInput, error__message: emailErrorMessage },
      "올바른 이메일 주소가 아닙니다."
    );
    return;
  }
  removeInputError({ input: emailInput, error__message: emailErrorMessage });
}

//패스워드 입력 안하면 오류 반환
const passwordInput = document.querySelector("#signin__password");
const passwordErrorMessage = document.querySelector("#password__error__message");
passwordInput.addEventListener("focusout", (event) => validatePasswordInput(event.target.value));
function validatePasswordInput(password) {
  if (password === "") {
    addInputError(
      { input: passwordInput, error__message: passwordErrorMessage },
      "비밀번호를 입력해주세요."
    );
    return;
  }
  removeInputError({ input: passwordInput, error__message: passwordErrorMessage });
}

const passwordToggleButton = document.querySelector("#password__toggle");
passwordToggleButton.addEventListener("click", () =>
  togglePassword(passwordInput, passwordToggleButton)
);

//폼 제출, 기록 비교 후 성공 혹은 실패 반환
const signForm = document.querySelector("#form");
signForm.addEventListener("submit", submitForm);
function submitForm(event) {
  event.preventDefault();
  
  const isTestUser = {
  email: emailInput.value,
  password: passwordInput.value,
  };

  fetch('https://bootcamp-api.codeit.kr/api/check-email',{
    method: 'POST',
    body: JSON.stringify(isTestUser),
  })
  .then((response) => { 
    if (response.status === 200) {
      return fetch('https://bootcamp-api.codeit.kr/api/sign-up');      
    } else {
      throw new Error('올바른 이메일이 아닙니다.');
    }
  })
  .then((response) => { 
    if (response.status === 200) {
      location.href = "/folder";
      return;      
    } else {
      throw new Error('올바른 이메일이 아닙니다.');
    }
  })
}
