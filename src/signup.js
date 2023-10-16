import {
    addInputError,
    removeInputError,
    isEmailValid,
    isPasswordValid,
    togglePassword,
    TEST_USER,
  } from "./utils.js";
  
  //이메일 입력 안하면 오류 반환, 올바른 이메일이 아닐경우 오류 반환
  const emailInput = document.querySelector("#signup__email");
  const emailErrorMessage = document.querySelector("#signup__email__error__message");
  emailInput.addEventListener("focusout", (event) => validateEmailInput(event.target.value));
  function validateEmailInput(email) {
    if (email === "") {
      addInputError({ input: emailInput, error__message: emailErrorMessage }, "이메일을 입력해주세요.");
      return;
    }
    if (email === "test@codeit.com") {
        addInputError({ input: emailInput, error__message: emailErrorMessage }, "이미 사용 중인 이메일입니다.");
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
  const passwordInput = document.querySelector("#signup__password");
  const passwordErrorMessage = document.querySelector("#signup__password__error__message");
  passwordInput.addEventListener("focusout", (event) => validatePasswordInput(event.target.value));
  function validatePasswordInput(password) {
    if (password === "") {
      addInputError(
        { input: passwordInput, error__message: passwordErrorMessage },
        "비밀번호를 입력해주세요."
      );
      return;
    }
    if (!isPasswordValid(password)) {
        addInputError(
          { input: passwordInput, error__message: passwordErrorMessage },
          "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요."
        );
        return;
      }
    removeInputError({ input: passwordInput, error__message: passwordErrorMessage });
  }

  //패스워드와 같지않으면 오류 반환
  const passwordCheckInput = document.querySelector("#signup__password__check");
  const passwordCheckErrorMessage = document.querySelector("#signup__password__check__error__message");
  passwordCheckInput.addEventListener("focusout", (event) => validateCheckPasswordInput(event.target.value));
  function validateCheckPasswordInput(passwordCheck) {
    if (passwordCheck === passwordInput.value) {
        addInputError(
            { input: passwordCheckInput, error__message: passwordCheckErrorMessage},
            "비밀번호가 일치하지 않아요."
        );
        return;
    }
    removeInputError({input: passwordCheckInput, error__message: passwordCheckErrorMessage});
  }

  //패스워드 눈 모양 아이콘 토글
  const passwordToggleButton = document.querySelector("#password__toggle");
  passwordToggleButton.addEventListener("click", () =>
    togglePassword(passwordInput, passwordToggleButton)
  );
  const passwordCheckToggleButton = document.querySelector("#password__check__toggle");
  passwordToggleButton.addEventListener("click", () =>
    togglePassword(passwordCheckInput, passwordCheckToggleButton)
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
    
      fetch('https://bootcamp-api.codeit.kr/api/sign-in',{
        method: 'POST',
        body: JSON.stringify(isTestUser),
      })
      .then((response) => { 
        if (response.status === 200) {
          location.href = "/folder";
          return;
        } else {
          throw new Error('New members not added');
        }
      });
  }
  