import { email, password, passwordVisible, passwordCheckVisible } from "./tags.js";
import { addEmailClass, addPasswordClass } from "./addclass.js";
import { addEmailErrorMsg, addPassWordErrorMsgSignup, addPasswordCheckErrorMsg } from "./errormsg.js";

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

const loginPage = () => (location.href = "../pages/folder.html");

const validationLogin = async (email, password) => {
  try {
    const loginContext = {
      email: email,
      password: password,
    };
    const signIn = await fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginContext),
    });
    if (signIn.status === 200) {
      return loginPage();
    } else {
      addEmailClass("이메일을 확인해주세요.");
      addPasswordClass("비밀번호를 확인해주세요.");
    }
  } catch (error) {
    return error;
  }
};

function login(event) {
  event.preventDefault();

  validationLogin(email.value, password.value);
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
