import {reset, eyeOnOff, writeError, displayError} from "../util.js"
import {checkerEmail} from "../signin.js"

const $emailInput = document.querySelector("#email");

function checkerEmailAlreadyInUse(e) {
  if ($emailInput.value !== "test@codeit.com") {
   return
  }
  displayError(e, "이미 사용중인 이메일입니다");
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

function conditionOfPassword(e) {
  if (!isIncludePassword(passArray)) {
   displayError(e, "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요");
  }
}

const $rePasswordInput = document.querySelector("#rePassword");

function matchPassword(e) {
  if ($passwordInput.value === $rePasswordInput.value) {
    return;
  }
  displayError(e, "비밀번호가 일치하지 않아요");
}


const $eyeOff2 = document.querySelector("eye-button.second")

const $signBtn = document.querySelector(".cta")

function signUpAftercheckingError(e) {
  const $errorTextList = document.querySelectorAll("warning-text");

  if ($errorTextList.length !== 0) {
    return;
  }

  if (e.key === "Enter" || e.type === "click") {
    e.preventDefault();
    window.location.href = "../folder.html";
  }
}


$emailInput.addEventListener("focusout", checkerEmail);
$emailInput.addEventListener("focusout", checkerEmailAlreadyInUse);
$emailInput.addEventListener("focusin", reset);

$passwordInput.addEventListener("focusout", conditionOfPassword);
$passwordInput.addEventListener("focusin", reset);

$rePasswordInput.addEventListener("focusout", matchPassword);
$rePasswordInput.addEventListener("focusin", reset);

$signBtn.addEventListener("click", signUpAftercheckingError)
$rePasswordInput.addEventListener("keypress", signUpAftercheckingError);
$eyeOff2.addEventListener("click", eyeOnOff );

