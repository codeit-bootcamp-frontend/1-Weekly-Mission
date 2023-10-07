const emailErrorMessage = document.querySelector(".email-error-message");
const passwordErrorMessage = document.querySelector(".password-error-message");
const passwordCheckErrorMessage = document.querySelector(
  ".passwordCheck-error-message"
);
const email = document.querySelector(".email-input");
const password = document.querySelector(".password-input");
const passwordCheck = document.querySelector(".passwordCheck-input");
const signButton = document.querySelector(".login-button");
const passwordEye = document.querySelector(".eye-button");
let eyeOn = false;

const checkEmailError = (event) => {
  if (event.target.value === "") {
    emailErrorMessage.style.display = "block";
    emailErrorMessage.textContent = "이메일을 입력해주세요";
    email.classList.add("border-red");
  } else if (!event.target.value.includes("@")) {
    emailErrorMessage.style.display = "block";
    emailErrorMessage.textContent = "올바른 이메일을 입력해주세요";
    email.classList.add("border-red");
  } else if (event.target.value === "test@codeit.com") {
    emailErrorMessage.style.display = "block";
    emailErrorMessage.textContent = "이미 사용 중인 이메일입니다";
    email.classList.add("border-red");
  } else {
    emailErrorMessage.style.display = "none";
    email.classList.remove("border-red");
  }
};

const checkPasswordError = (event) => {
  if (event.target.value === "") {
    passwordErrorMessage.style.display = "block";
    passwordErrorMessage.textContent = "비밀번호를 입력해주세요";
    password.classList.add("border-red");
  } else if (event.target.value.length < 8) {
    passwordErrorMessage.style.display = "block";
    passwordErrorMessage.textContent =
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요";
    password.classList.add("border-red");
  } else {
    passwordErrorMessage.style.display = "none";
    passwordCheck.classList.remove("border-red");
  }
};

const equalCheckPasswordCheckError = (event) => {
  if (event.target.value === password.value) {
    passwordCheckErrorMessage.style.display = "none";
    passwordCheck.classList.remove("border-red");
  } else {
    passwordCheckErrorMessage.style.display = "block";
    passwordCheckErrorMessage.textContent = "비밀번호가 일치하지 않아요";
    passwordCheck.classList.add("border-red");
  }
};

const checkSignin = (event) => {
  if (email.value === "test@codeit.com" || password.value === "codeit101") {
    // 로그인 시 폴더 페이지로 이동
    window.location.href = "/pages/folder.html";
    event.preventDefault();
  } else {
    emailErrorMessage.textContent = "이메일을 확인해주세요.";
    emailErrorMessage.style.display = "block";
    passwordErrorMessage.textContent = "비밀번호를 확인해주세요";
    passwordErrorMessage.style.display = "block";
    event.preventDefault();
  }
};

const changeEye = (event) => {
  eyeOn = !eyeOn;
  if (eyeOn) {
    event.target.src = "/assets/eye-on.svg";
    password.type = "text";
  } else {
    event.target.src = "/assets/eye-off.svg";
    password.type = "password";
  }
};

email.addEventListener("focusout", checkEmailError);
password.addEventListener("focusout", checkPasswordError);
passwordCheck.addEventListener("focusout", equalCheckPasswordCheckError);
signButton.addEventListener("click", checkSignin);
passwordEye.addEventListener("click", changeEye);

// 정규표현식을 이용한 이메일 형식 검사 (오류)
// const emailPatternCheck = (event) => {
//   let email = event.target;
//   const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//   pattern.test(email) ? true : false;
//   console.log(email);
// };
