import {
  EMAIL_MAP,
  PASSWORD_MAP,
  REPASSWORD_MAP,
  showErrorMessageEffect,
  isEmailValid,
  isPasswordValid,
  postData,
  isPasswordMatch,
  passwordVisibility,
} from "./common.js";

const email = document.getElementById("email");
const password = document.getElementById("password");
const rePassword = document.getElementById("re-password");
const emailLabel = document.querySelector(".email-label");
const passwordLabel = document.querySelector(".password-label");
const rePasswordLabel = document.querySelector(".re-password-label");
const eyeIcon = document.querySelector(".eye-on-image");
const reEyeIcon = document.querySelector(".re-eye-on-image");
const registerButton = document.querySelector(".register-button");

email.addEventListener("focusout", async (event) => {
  event.preventDefault();
  const emailValue = email.value;
  const errorMsgsLabel = emailLabel.querySelector(".error-message");
  // 순수함수를 만들기위해? input.value 자체를 인자로 받는다. Not, input이 아닌

  for (const state of ["empty", "notValid", "alreadyUsed"]) {
    if (state === "empty") {
      // checker는 isEmpty함수
      if (EMAIL_MAP[state].checker(emailValue)) {
        showErrorMessageEffect(email, errorMsgsLabel, EMAIL_MAP[state]);
        return;
      }
    } else if (state === "notValid") {
      if (!EMAIL_MAP[state].checker(emailValue)) {
        showErrorMessageEffect(email, errorMsgsLabel, EMAIL_MAP[state]);
        return;
      }
    } else if (state === "alreadyUsed") {
      try {
        const response = await postData(
          "bootcamp-api.codeit.kr",
          "api/check-email",
          {
            email: emailValue,
          }
        );
        if (response.status !== 200) {
          showErrorMessageEffect(email, errorMsgsLabel, EMAIL_MAP[state]);
          return;
        }
      } catch (err) {
        return;
      }
    }
  }
  showErrorMessageEffect(email, errorMsgsLabel, EMAIL_MAP.valid);
});

password.addEventListener("focusout", (event) => {
  event.preventDefault();
  const passwordValue = password.value;
  const errorMsgsLabel = passwordLabel.querySelector(".error-message");
  for (const state of ["empty", "notValid"]) {
    if (state === "empty") {
      // checker는 isEmpty함수
      if (PASSWORD_MAP[state].checker(passwordValue)) {
        showErrorMessageEffect(password, errorMsgsLabel, PASSWORD_MAP[state]);
        return;
      }
    } else if (state === "notValid") {
      if (!PASSWORD_MAP[state].checker(passwordValue)) {
        showErrorMessageEffect(password, errorMsgsLabel, PASSWORD_MAP[state]);
        return;
      }
    }
  }
  showErrorMessageEffect(password, errorMsgsLabel, PASSWORD_MAP.valid);
});

rePassword.addEventListener("focusout", (event) => {
  event.preventDefault();
  const passwordValue = password.value;
  const rePasswordValue = rePassword.value;
  const errorMsgsLabel = rePasswordLabel.querySelector(".error-message");
  for (const state of ["empty", "notMatch"]) {
    if (state === "empty") {
      if (REPASSWORD_MAP[state].checker(rePasswordValue)) {
        showErrorMessageEffect(
          rePassword,
          errorMsgsLabel,
          REPASSWORD_MAP[state]
        );
        return;
      }
    } else if (state === "notMatch") {
      if (!REPASSWORD_MAP[state].checker(passwordValue, rePasswordValue)) {
        showErrorMessageEffect(
          rePassword,
          errorMsgsLabel,
          REPASSWORD_MAP[state]
        );
        return;
      }
    }
  }
  showErrorMessageEffect(rePassword, errorMsgsLabel, REPASSWORD_MAP.valid);
});

// 눈아이콘
eyeIcon.addEventListener("click", (event) => {
  event.preventDefault();
  passwordVisibility(eyeIcon, password);
});

reEyeIcon.addEventListener("click", (event) => {
  event.preventDefault();
  passwordVisibility(reEyeIcon, rePassword);
});

registerButton.addEventListener("click", async (event) => {
  event.preventDefault();
  let emailValue = email.value;
  let passwordValue = password.value;
  let rePasswordValue = rePassword.value;
  if (
    isEmailValid(emailValue) &&
    isPasswordValid(passwordValue) &&
    isPasswordMatch(passwordValue, rePasswordValue)
  ) {
    emailValue = emailValue.trim();
    passwordValue = passwordValue.trim();
    try {
      await postData("bootcamp-api.codeit.kr", "api/sign-up", {
        email: emailValue,
        password: passwordValue,
      })
        .then((response) => {
          if (response.status === 200) {
            return response.text();
          }
        })
        .then((result) => {
          const accessToken = result.split('"')[5];
          localStorage.setItem("accessToken", JSON.stringify(accessToken));
        });
      if (JSON.parse(localStorage.getItem("accessToken"))) {
        window.location.href = window.location.origin + "/folder.html";
      } else {
        let error = new Error("올바른이메일이 아닙니다");
        error.name = "AuthApiError";
        throw error;
      }
    } catch (error) {
      alert(error.name);
      alert(error.message);
    }
  }
});
