import {
  EMAIL_MAP,
  PASSWORD_MAP,
  isEmailValid,
  isPasswordValid,
  showErrorMessageEffect,
  isCodeItLogin,
  passwordVisibility,
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
  const errorMsgsLabel = emailLabel.querySelector(".error-message");
  for (const state of ["empty", "notValid"]) {
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
    }
  }
  showErrorMessageEffect(email, errorMsgsLabel, EMAIL_MAP.valid);
});

// pasword
password.addEventListener("focusout", (event) => {
  event.preventDefault();
  const errorMsgsLabel = passwordLabel.querySelector(".error-message");
  if (PASSWORD_MAP["empty"].checker(password)) {
    showErrorMessageEffect(password, errorMsgsLabel, PASSWORD_MAP["empty"]);
    return;
  }
  showErrorMessageEffect(password, errorMsgsLabel, PASSWORD_MAP["valid"]);
});

async function postData(host, path, body) {
  const url = `https://${host}/${path}`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json, text-plain, */*",
    },
    body: JSON.stringify(body),
  };
  const response = await fetch(url, options);
  return response;
}

loginButton.addEventListener("click", async (event) => {
  event.preventDefault();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  // test@codeit.com   sprint101
  try {
    const response = await postData("bootcamp-api.codeit.kr", "api/sign-in", {
      email: emailValue,
      password: passwordValue,
    });

    if (response.status === 200) {
      window.location.href = window.location.origin + "/folder.html";
    } else {
      //  status가 400일떄
      let error = new Error("Invalid login credentials");
      error.name = "AuthApiError";
      throw error;
    }
  } catch (err) {
    alert(err.name);
    alert(err.message);
  }
});

eyeIcon.addEventListener("click", (event) => {
  event.preventDefault();
  passwordVisibility(eyeIcon, password);
});
