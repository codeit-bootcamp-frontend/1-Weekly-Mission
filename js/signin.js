const emailErrorMessage = document.querySelector(".email-error-message");
const passwordErrorMessage = document.querySelector(".password-error-message");
const email = document.querySelector(".email-input");
const password = document.querySelector(".password-input");
const signButton = document.querySelector(".login-button");
const passwordEye = document.querySelector(".eye-button");

const emailErrorCheck = (event) => {
  if (event.target.value === "") {
    emailErrorMessage.style.display = "block";
    emailErrorMessage.textContent = "이메일을 입력해주세요";
    email.classList.add("border-red");
  } else if (!event.target.value.includes("@")) {
    emailErrorMessage.style.display = "block";
    emailErrorMessage.textContent = "올바른 이메일을 입력해주세요";
    email.classList.add("border-red");
  } else {
    emailErrorMessage.style.display = "none";
    email.classList.remove("border-red");
  }
};

const passwordErrorCheck = (event) => {
  if (event.target.value === "") {
    passwordErrorMessage.style.display = "block";
    passwordErrorMessage.textContent = "비밀번호를 입력해주세요";
    password.classList.add("border-red");
  } else {
    passwordErrorMessage.style.display = "none";
    password.classList.remove("border-red");
  }
};

// 정규표현식을 이용한 이메일 형식 검사 (오류)
// const emailPatternCheck = (event) => {
//   let email = event.target;
//   const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//   pattern.test(email) ? true : false;
//   console.log(email);
// };

email.addEventListener("focusout", emailErrorCheck);
password.addEventListener("focusout", passwordErrorCheck);
