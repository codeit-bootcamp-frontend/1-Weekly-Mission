import {
  reset,
  eyeOnOff,
  writeError,
  displayError,
  checkerEmail,
  postInputs,
  testUserFile,
  FindEmail,
} from "./util.js";

const $emailInput = document.querySelector("#email");

function checkerUsingEmail(e) {
  const userEmail = {
    email: "test@codeit.com",
  };
  postInputs("https://bootcamp-api.codeit.kr/api/check-email", userEmail)
    .then((response) => {
      if (response.ok) {
        return;
      } else {
        displayError(e, "중복되는 이메일입니다.");
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
const $passwordInput = document.querySelector("#password");

const alphabet = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const alphaArray = [...alphabet];
const numArray = [...numbers];
const passArray = [...$passwordInput.value];

function isIncludePassword(passArray) {
  if (
    passArray.some((p) => alphaArray.includes(p)) &&
    passArray.some((p) => numArray.includes(p)) &&
    passArray.length >= 8
  ) {
    return true;
  }
}

function isValidPassword(e) {
  if (!isIncludePassword(passArray)) {
    displayError(e, "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요");
  }
}

const $rePasswordInput = document.querySelector("#rePassword");

function matchPassword(e) {
  if ($passwordInput.value === $rePasswordInput.value) {
    return;
  }
  displayError(e.target, "비밀번호가 일치하지 않아요");
}

const $eyeOff2 = document.querySelector(".eye-button.second");

const $signBtn = document.querySelector(".cta");

function signUpAftercheckingError(e) {
  const $errorTextList = document.querySelectorAll("warning-text");

  if ($errorTextList.length !== 0) {
    return;
  }

  if (e.key === "Enter" || e.type === "click") {
    e.preventDefault();

    const userProfile = {
      email: $emailInput.value,
      password: $passwordInput.value,
    };

    postInputs("https://bootcamp-api.codeit.kr/api/check-email", userProfile)
      .then((response) => {
        if (response.ok) {
          const link = "../folder.html";
          window.location.assign(link);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

$emailInput.addEventListener("focusout", checkerEmail);
$emailInput.addEventListener("change", checkerUsingEmail);
$emailInput.addEventListener("focusin", reset);

$passwordInput.addEventListener("focusout", isValidPassword);
$passwordInput.addEventListener("focusin", reset);

$rePasswordInput.addEventListener("focusout", matchPassword);
$rePasswordInput.addEventListener("focusin", reset);

$signBtn.addEventListener("click", signUpAftercheckingError);
$rePasswordInput.addEventListener("keypress", signUpAftercheckingError);
$eyeOff2.addEventListener("click", eyeOnOff);
