import { email, password, emailError, passwordError } from "./consts.js";
import {
  appearError,
  disappearError,
  eyeCheck,
  isValidEmail,
} from "./functions.js";

const signinBtn = document.querySelector(".signin-button");
const eyeBtn = document.querySelector("#eye-button1");

function emailChecker() {
  if (!email.value) {
    return appearError(email, emailError, "이메일을 입력해주세요.");
  } else if (!isValidEmail(email.value)) {
    return appearError(email, emailError, "올바른 이메일 주소가 아닙니다.");
  } else {
    return disappearError(email, emailError);
  }
}

function passwordChecker() {
  if (!password.value) {
    return appearError(password, passwordError, "비밀번호를 입력해주세요.");
  } else {
    return disappearError(password, passwordError);
  }
}

email.addEventListener("blur", emailChecker);
password.addEventListener("blur", passwordChecker);

eyeBtn.addEventListener("click", eyeCheck);
signinBtn.addEventListener("click", async function login(event) {
  const userInfo = {
    email: email.value,
    password: password.value,
  };
  const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
    method: "POST",
    body: JSON.stringify(userInfo),
  });
  const result = await response.text();
  console.log(result);
  console.log(userInfo);
  if (response.status === 200) {
    location.replace("./folder.html");
  } else {
    appearError(email, emailError, "이메일을 확인해주세요.");
    appearError(password, passwordError, "비밀번호를 확인해주세요.");
  }
});
