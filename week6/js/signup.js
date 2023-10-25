import {
    setInputError,
    removeInputError,
    isEmailValid,
    isPasswordValid,
    togglePassword,
    TEST_USER,
  } from "./utils.js";
  
  const emailInput = document.querySelector("#email");
  const emailErrorMessage = document.querySelector("#email-error-message");
  function validateEmailInput(email) {
    if (email === "") {
      setInputError({ input: emailInput, errorMessage: emailErrorMessage }, "이메일을 입력해주세요.");
      return;
    }
    fetch("https://bootcamp-api.codeit.kr/api/check-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json" ,
      },
      body: JSON.stringify({
        email: emailInput.value,
      }),
    })
    .then(async (response) => {
      if (response.status === 409) {
        setInputError({ input: emailInput, errorMessage: emailErrorMessage }, "이미 사용 중인 이메일입니다.");
        return;
      }
    })
    .catch((error) => {
      console.log('Error: ', error);
    });

    if (!isEmailValid(email)) {
      setInputError(
        { input: emailInput, errorMessage: emailErrorMessage },
        "올바른 이메일 주소가 아닙니다."
      );
      return;
    }
    removeInputError({ input: emailInput, errorMessage: emailErrorMessage });
  }
  emailInput.addEventListener("focusout", (event) => validateEmailInput(event.target.value));

  const passwordInput = document.querySelector("#password");
  const passwordErrorMessage = document.querySelector("#password-error-message");
  function validatePasswordInput(password) {
    if (password === "") {
      setInputError(
        { input: passwordInput, errorMessage: passwordErrorMessage },
        "비밀번호를 입력해주세요."
      );
      return;
    }
    if (!isPasswordValid(password)) {
      setInputError(
        { input: passwordInput, errorMessage: passwordErrorMessage },
        "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요."
      );
      return;
    }
    removeInputError({ input: passwordInput, errorMessage: passwordErrorMessage });
  }
  passwordInput.addEventListener("focusout", (event) => validatePasswordInput(event.target.value));

  const passwordCheckInput = document.querySelector("#password-check");
  function validatePasswordCheckInput(password) {
    if (password !== passwordInput.value) {
      setInputError(
        { input: passwordCheckInput, errorMessage: passwordCheckErrorMessage },
        "비밀번호가 일치하지 않아요."
      );
      return;
    }
    removeInputError({ input: passwordCheckInput, errorMessage: passwordCheckErrorMessage });
  }
  passwordCheckInput.addEventListener("keydown", (event) => validatePasswordCheckInput(event.target.value));
  
  const passwordCheckErrorMessage = document.querySelector("#password-check-error-message");
  function stopPasswordCheckInput(password) {
    if (password !== passwordInput.value) {
      setInputError(
        { input: passwordCheckInput, errorMessage: passwordCheckErrorMessage },
        "비밀번호가 일치하지 않아요."
      );
      return;
    }
    removeInputError({ input: passwordCheckInput, errorMessage: passwordCheckErrorMessage });
  }
  passwordCheckInput.addEventListener("keyup", (event) => stopPasswordCheckInput(event.target.value));
  
  const passwordToggleButton = document.querySelector("#password-toggle");
  passwordToggleButton.addEventListener("click", () =>
    togglePassword(passwordInput, passwordToggleButton)
  );
  const passwordCheckToggleButton = document.querySelector("#password-check-toggle");
  passwordCheckToggleButton.addEventListener("click", () =>
    togglePassword(passwordInput, passwordCheckToggleButton)
  );
  
  const signForm = document.querySelector("#form");
  signForm.addEventListener("submit", submitForm);
  function submitForm(event) {
    event.preventDefault();

    fetch("https://bootcamp-api.codeit.kr/api/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json" ,
      },
      body: JSON.stringify({
        email: emailInput.value,
        password: passwordInput.value,
      }),
    })
    .then(async (response) => {
      if (response.status === 200) {
        const data = await response.json();
        localStorage.setItem("login-token", data.accessToken);
        location.href = "../folder.html";
      } else {
        setInputError({ input: emailInput, errorMessage: emailErrorMessage }, "이메일을 확인해주세요.");
        setInputError(
          { input: passwordInput, errorMessage: passwordErrorMessage },
          "비밀번호를 확인해주세요."
        );
      }
    })
    .catch((error) => {
      console.log('Error: ', error);
    });
  }
  