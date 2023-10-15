import { email, password, emailError, passwordError } from "./consts.js";
import {
  appearError,
  disappearError,
  eyeCheck,
  isValidEmail,
} from "./functions.js";

(function () {
  if (localStorage.getItem("signInToken")) {
    location.href = "./folder.html";
    localStorage.removeItem("signInToken");
    return;
  }
})();

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

signinBtn.addEventListener("click", async function (event) {
  event.preventDefault();
  try {
    const userInfo = await fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });
    if (userInfo.status === 200) {
      location.href = "./folder.html";
      disappearError(email, emailError);
      disappearError(password, passwordError);
      localStorage.setItem("signInToken", userInfo["access_token"]);
    } else {
      throw new Error();
    }
  } catch (e) {
    appearError(email, emailError, "이메일을 확인해주세요.");
    appearError(password, passwordError, "비밀번호를 확인해주세요.");
  }
});
