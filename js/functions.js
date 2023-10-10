import { email, password, passwordVisible, passwordCheckVisible } from "./tags.js";
import { addEmailClass, addPasswordClass } from "./addclass.js";
import { addEmailErrorMsg, addPassWordErrorMsgSignup, addPasswordCheckErrorMsg } from "./errormsg.js";

const TEST_EMAIL = "test@codeit.com";
const TEST_PASSSWORD = "codeit101";

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

  if (email.value === TEST_EMAIL && password.value === TEST_PASSSWORD) {
    loginPage();
  } else if (email.value !== TEST_EMAIL || password.value !== TEST_PASSSWORD) {
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
