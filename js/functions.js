import { email as tagEmail, password, passwordVisible, passwordCheckVisible } from "./tags.js";
import { checkEmail, checkSignupPassword, checkPasswordMatch, addErrorMessageClass } from "./errorMsg.js";

const URL = "https://bootcamp-api.codeit.kr/api";

const CHECK_EMAIL = "이메일을 확인해주세요.";
const CHECK_PASSWORD = "비밀번호를 확인해주세요.";
const ALREADY_USE_EMAIL = "이미 사용중인 이메일입니다.";

const goToFolderPage = () => (location.href = "../pages/folder.html");

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

const validationLogin = async (email, password) => {
  try {
    let token = localStorage.getItem("login-token");

    const loginContext = {
      email: email,
      password: password,
    };
    const signIn = await fetch(`${URL}/sign-in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginContext),
    });
    if (signIn.status === 200) {
      const response = await signIn.json();
      const result = await response.data.accessToken;
      localStorage.setItem("login-token", result);
      return goToFolderPage();
    } else {
      addErrorMessageClass(email, CHECK_EMAIL);
      addErrorMessageClass(password, CHECK_PASSWORD);
    }
  } catch (error) {
    return error;
  }
};

function login(event) {
  event.preventDefault();

  validationLogin(email.value, password.value);
}

const duplicationEmail = async email => {
  try {
    const emailContext = {
      email: email,
    };
    const signUp = await fetch(`${URL}/check-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailContext),
    });
    if (signUp.status === 200) {
      return goToFolderPage();
    } else if (signUp.status === 409) {
      addErrorMessageClass(tagEmail, ALREADY_USE_EMAIL);
    } else {
      addErrorMessageClass(tagEmail, CHECK_EMAIL);
    }
  } catch (error) {
    return error;
  }
};

function signup(event) {
  event.preventDefault();
  if (checkEmail() && checkSignupPassword() && checkPasswordMatch()) {
    duplicationEmail(email.value);
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
