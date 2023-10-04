import { email, password, emailError, passwordError, passwordVisible } from "./tags.js";

function validateEmail(email) {
  const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return pattern.test(email);
}

function addEmailClass(msg) {
  email.classList.add("error");
  emailError.classList.add("error-msg");
  emailError.textContent = msg;
  email.parentElement.append(emailError);
}

function addPasswordClass(msg) {
  password.classList.add("error");
  passwordError.classList.add("error-msg");
  passwordError.textContent = msg;
  password.parentElement.parentElement.append(passwordError);
}

function addEmailErrorMsg() {
  if (!email.value) {
    addEmailClass("이메일을 입력하세요.");
  } else if (!validateEmail(email.value)) {
    addEmailClass("올바른 이메일 주소가 아닙니다.");
  }
}

function deleteEmailErrorMsg() {
  if (email.parentElement.lastElementChild === emailError) {
    email.classList.remove("error");
    email.nextElementSibling.remove();
  }
}

function addPasswordErrorMsg() {
  if (!password.value) {
    addPasswordClass("비밀번호를 입력하세요.");
  }
}

function deletePasswordErrorMsg() {
  if (password.parentElement.nextElementSibling === passwordError) {
    password.classList.remove("error");
    password.parentElement.nextElementSibling.remove();
  }
}

function loginPage() {
  return (location.href = "../pages/folder.html");
}

function login(event) {
  event.preventDefault();

  const testEmail = "test@codeit.com";
  const testPassword = "codeit101";

  if (email.value === testEmail && password.value === testPassword) {
    loginPage();
  } else if (email.value !== testEmail || password.value !== testPassword) {
    addEmailClass("이메일을 확인해주세요.");
    addPasswordClass("비밀번호를 확인해주세요.");
  }
}

function togglePasswordVisible(event) {
  event.preventDefault();

  if (password.type === "text") {
    password.type = "password";
  } else {
    password.type = "text";
  }
  passwordVisible.classList.toggle("on");
}

export {
  validateEmail,
  addEmailErrorMsg,
  deleteEmailErrorMsg,
  addPasswordErrorMsg,
  deletePasswordErrorMsg,
  togglePasswordVisible,
  login,
};
