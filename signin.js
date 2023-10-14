import {
  EMAIL_MAP,
  PASSWORD_MAP,
  showErrorMessageEffect,
  passwordVisibility,
  postData,
} from "./common.js";

const email = document.getElementById("email");
const password = document.getElementById("password");
const emailLabel = document.querySelector(".email-label");
const passwordLabel = document.querySelector(".password-label");
const loginButton = document.getElementById("login-button");
const eyeIcon = document.querySelector(".eye-on-image");

// email
email.addEventListener("focusout", (event) => {
  event.preventDefault();
  const emailValue = email.value;
  const errorMsgsLabel = emailLabel.querySelector(".error-message");
  for (const state of ["empty", "notValid"]) {
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
    }
  }
  showErrorMessageEffect(email, errorMsgsLabel, EMAIL_MAP.valid);
});

// pasword
password.addEventListener("focusout", (event) => {
  event.preventDefault();
  const passwordValue = password.value;
  const errorMsgsLabel = passwordLabel.querySelector(".error-message");
  if (PASSWORD_MAP["empty"].checker(passwordValue)) {
    showErrorMessageEffect(password, errorMsgsLabel, PASSWORD_MAP["empty"]);
    return;
  }
  showErrorMessageEffect(password, errorMsgsLabel, PASSWORD_MAP["valid"]);
});

loginButton.addEventListener("click", async (event) => {
  event.preventDefault();
  let emailValue = email.value;
  let passwordValue = password.value;
  const emailErrorMsgsLabel = emailLabel.querySelector(".error-message");
  const passwordErrorMsgsLabel = passwordLabel.querySelector(".error-message");
  for (const state of ["empty", "notValid"]) {
    if (state === "empty") {
      if (
        EMAIL_MAP[state].checker(emailValue) ||
        PASSWORD_MAP[state].checker(passwordValue)
      ) {
        showErrorMessageEffect(email, emailErrorMsgsLabel, EMAIL_MAP["login"]);
        showErrorMessageEffect(
          password,
          passwordErrorMsgsLabel,
          PASSWORD_MAP["login"]
        );
        return;
      }
    }

    if (state === "notValid") {
      if (!EMAIL_MAP[state].checker(emailValue)) {
        showErrorMessageEffect(email, emailErrorMsgsLabel, EMAIL_MAP["login"]);
        showErrorMessageEffect(
          password,
          passwordErrorMsgsLabel,
          PASSWORD_MAP["login"]
        );
      }
    }
  }
  emailValue = email.value.trim();
  passwordValue = password.value.trim();
  // test@codeit.com   sprint101
  try {
    await postData("bootcamp-api.codeit.kr", "api/sign-in", {
      email: emailValue,
      password: passwordValue,
    })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          return response.text();
        }
      })
      .then((result) => {
        const accessToken = result.split('"')[5];
        localStorage.setItem("accessToken", JSON.stringify(accessToken));
      });

    if (JSON.parse(localStorage.getItem("accessToken"))) {
      // console.log(JSON.parse(localStorage.getItem("accessToken")));
      window.location.href = window.location.origin + "/folder.html";
    } else {
      let error = new Error("Invalid login credentials");
      error.name = "AuthApiError";
      throw error;
    }
  } catch (error) {
    alert(error);
  }
});

eyeIcon.addEventListener("click", (event) => {
  event.preventDefault();
  passwordVisibility(eyeIcon, password);
});
