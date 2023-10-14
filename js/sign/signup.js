import {
  email,
  password,
  passwordRepeat,
  emailError,
  passwordError,
  passwordRepeatError,
} from "./consts.js";
import {
  appearError,
  disappearError,
  eyeCheck,
  isValidEmail,
  isValidPassword,
} from "./functions.js";

const signupBtn = document.querySelector(".signup-button");
const eyeBtn1 = document.querySelector("#eye-button1");
const eyeBtn2 = document.querySelector("#eye-button2");

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
  } else if (!isValidPassword(password.value)) {
    return appearError(
      password,
      passwordError,
      "비밀번호는 영문, 숫자 조합 8자리 이상 입력해 주세요."
    );
  } else {
    return disappearError(password, passwordError);
  }
}

function passwordRepeatChecker() {
  if (passwordRepeat.value !== password.value) {
    return appearError(
      passwordRepeat,
      passwordRepeatError,
      "비밀번호가 일치하지 않아요."
    );
  } else {
    return disappearError(passwordRepeat, passwordRepeatError);
  }
}

email.addEventListener("blur", emailChecker);
password.addEventListener("blur", passwordChecker);
passwordRepeat.addEventListener("blur", passwordRepeatChecker);

eyeBtn1.addEventListener("click", eyeCheck);
eyeBtn2.addEventListener("click", eyeCheck);

signupBtn.addEventListener("click", async function (e) {
  e.preventDefault();
  const flag = emailChecker() && passwordChecker() && passwordRepeatChecker();
  if (flag) {
    const response = await fetch(
      "https://bootcamp-api.codeit.kr/api/check-email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.value,
        }),
      }
    );
    if (response.status === 200) {
      const signUpPost = await fetch(
        "https://bootcamp-api.codeit.kr/api/sign-up",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email.value,
            password: password.value,
          }),
        }
      );
      if (signUpPost === 200) {
        location.href = "./folder.html";
      }
    } else {
      appearError(email, emailError, "중복된 이메일입니다.");
    }
  }
});
