import {
  email,
  password,
  passwordCheck,
  emailError,
  passwordError,
  passwordVisible,
  passwordCheckVisible,
} from "./tags.js";

const testEmail = "test@codeit.com";
const testPassword = "codeit101";

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

function addPasswordCheckClass(msg) {
  passwordCheck.classList.add("error");
  passwordError.classList.add("error-msg");
  passwordError.textContent = msg;
  passwordCheck.parentElement.parentElement.append(passwordError);
}

function passwordCount() {
  let count = 0;
  for (let i in password.value) {
    count += 1;
  }
  return count;
}

function toggleEye(event) {
  event.preventDefault();
  const inputId = event.target.previousElementSibling;
  if (event.pointerType === "mouse") {
    if (inputId.type === "text") {
      inputId.type = "password";
    } else {
      inputId.type = "text";
    }
  }
}

function addEmailErrorMsg() {
  if (!email.value) {
    addEmailClass("이메일을 입력하세요.");
    return false;
  } else if (!validateEmail(email.value)) {
    addEmailClass("올바른 이메일 주소가 아닙니다.");
    return false;
  } else if (location.pathname === "/pages/signup.html" && email.value === testEmail) {
    addEmailClass("이미 사용중인 이메일입니다.");
    return false;
  }
  return true;
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

function addPassWordErrorMsgSignup() {
  const stringCheck = /[a-zA-Z]/;
  const numberCheck = /[0-9]/;
  if (passwordCount() >= 8 && stringCheck.test(password.value) && numberCheck.test(password.value)) {
    return true; // if문을 바꿔야 될꺼 같은데 생각이 잘 안남
  } else {
    addPasswordClass("비밀번호는 영문, 숫자, 조합 8자 이상 입력해주세요.");
    return false;
  }
}

function deletePasswordErrorMsg() {
  if (password.parentElement.nextElementSibling === passwordError) {
    password.classList.remove("error");
    password.parentElement.nextElementSibling.remove();
  }
}

function deletePasswordCheckErrorMsg() {
  if (passwordCheck.parentElement.nextElementSibling === passwordError) {
    passwordCheck.classList.remove("error");
    passwordCheck.parentElement.nextElementSibling.remove();
  }
}

function loginPage() {
  return (location.href = "../pages/folder.html");
}

function login(event) {
  event.preventDefault();

  if (email.value === testEmail && password.value === testPassword) {
    loginPage();
  } else if (email.value !== testEmail || password.value !== testPassword) {
    addEmailClass("이메일을 확인해주세요.");
    addPasswordClass("비밀번호를 확인해주세요.");
  }
}

function togglePasswordVisible(event) {
  toggleEye(event);
  passwordVisible.classList.toggle("on");
}

function togglePasswordCheckVisible(event) {
  toggleEye(event);
  passwordCheckVisible.classList.toggle("on");
}

function checkPassword() {
  if (password.value === passwordCheck.value) {
    return true;
  } else {
    addPasswordCheckClass("비밀번호가 일치하지 않아요.");
    return false;
  }
}

function signup(event) {
  event.preventDefault();
  if (addEmailErrorMsg() === true && addPassWordErrorMsgSignup() === true && checkPassword() === true) {
    loginPage();
  }
}

function enterSignup(event) {
  if (event.code === "Enter") {
    signup(event);
  }
}

export {
  validateEmail,
  addEmailErrorMsg,
  deleteEmailErrorMsg,
  addPasswordErrorMsg,
  addPassWordErrorMsgSignup,
  deletePasswordErrorMsg,
  togglePasswordVisible,
  login,
  checkPassword,
  deletePasswordCheckErrorMsg,
  signup,
  enterSignup,
  togglePasswordCheckVisible,
};
