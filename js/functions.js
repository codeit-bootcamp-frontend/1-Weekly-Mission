import { email, password, passwordVisible, passwordCheckVisible } from "./tags.js";
import { addEmailErrorMsg, addPassWordErrorMsgSignup, addPasswordCheckErrorMsg } from "./errormsg.js";

const testEmail = "test@codeit.com";
const testPassword = "codeit101";

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

function signup(event) {
  event.preventDefault();
  if (addEmailErrorMsg() === true && addPassWordErrorMsgSignup() === true && addPasswordCheckErrorMsg() === true) {
    loginPage();
  }
}

function enterSignup(event) {
  if (event.code === "Enter") {
    signup(event);
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

export { login, signup, enterSignup, togglePasswordCheckVisible, togglePasswordVisible };
