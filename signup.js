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
  const errorMsgsLabel = emailLabel.querySelector(".error-message");

  for (const state of ["empty", "notValid", "alreadyUsed"]) {
    if (state === "empty") {
      // checker는 isEmpty함수
      if (EMAIL_MAP[state].checker(email)) {
        showErrorMessageEffect(email, errorMsgsLabel, EMAIL_MAP[state]);
        return;
      }
    } else if (state === "notValid") {
      if (!EMAIL_MAP[state].checker(email)) {
        showErrorMessageEffect(email, errorMsgsLabel, EMAIL_MAP[state]);
        return;
      }
    } else if (state === "alreadyUsed") {
      try {
        const emailValue = email.value.trim();
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
  const errorMsgsLabel = passwordLabel.querySelector(".error-message");
  for (const state of ["empty", "notValid"]) {
    if (state === "empty") {
      // checker는 isEmpty함수
      if (PASSWORD_MAP[state].checker(password)) {
        showErrorMessageEffect(password, errorMsgsLabel, PASSWORD_MAP[state]);
        return;
      }
    } else if (state === "notValid") {
      if (!PASSWORD_MAP[state].checker(password)) {
        showErrorMessageEffect(password, errorMsgsLabel, PASSWORD_MAP[state]);
        return;
      }
    }
  }
  showErrorMessageEffect(password, errorMsgsLabel, PASSWORD_MAP.valid);
});

rePassword.addEventListener("focusout", (event) => {
  event.preventDefault();
  const errorMsgsLabel = rePasswordLabel.querySelector(".error-message");
  for (const state of ["empty", "notMatch"]) {
    if (state === "empty") {
      // checker는 isEmpty함수
      if (REPASSWORD_MAP[state].checker(rePassword)) {
        showErrorMessageEffect(
          rePassword,
          errorMsgsLabel,
          REPASSWORD_MAP[state]
        );
        return;
      }
    } else if (state === "notMatch") {
      if (!REPASSWORD_MAP[state].checker(password, rePassword)) {
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
  // const emailValue = email.value;
  if (
    isEmailValid(email) &&
    isPasswordValid(password) &&
    isPasswordMatch(password, rePassword)
  ) {
    try {
      const emailValue = email.value.trim();
      const passwordValue = password.value.trim();
      const response = await postData("bootcamp-api.codeit.kr", "api/sign-up", {
        email: emailValue,
        password: passwordValue,
      });
      if (response.status === 200) {
        window.location.href = window.location.origin + "/folder.html";
      } else {
        let error = new Error("올바른이메일이 아닙니다");
        error.name = "AuthApiError";
        throw error;
      }
    } catch (err) {
      alert(err.name);
      alert(err.message);
    }
  }
});
