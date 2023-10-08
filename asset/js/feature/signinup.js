// TODO : 모듈화, 의존성 분리

import {
    isValidEmail,
    isValidPW,
    doubleCheckPW,
} from "../utils/signUtils.js";

import {
    SignInTest,
    AlreadyMemberTest,
} from "../api/UserData.js";


const emailInput = document.getElementById("email");
const emailErrorMsg = document.getElementById("emailErrorMsg");

emailInput.addEventListener("focusout", (e) => validateEmailInput(e.target.value));

function validateEmailInput(email) {
    if(email==="") {
        emailInput.classList += " signin-form__input--error";
        emailErrorMsg.textContent = "이메일을 입력해주세요.";
        return false;
    }
    if(!isValidEmail(email)) {
        emailInput.classList += " signin-form__input--error";
        emailErrorMsg.textContent = "올바른 이메일 주소가 아닙니다.";
        return false;
    }
    if(document.getElementById("pwCheck")) {
        if(AlreadyMemberTest(email)) {
            emailInput.classList += " signin-form__input--error";
            emailErrorMsg.textContent = "이미 사용 중인 이메일입니다.";
            return false;
        }
    }
    emailInput.classList.remove("signin-form__input--error");
    emailErrorMsg.textContent = "";
    return true;
}


const pwInput = document.getElementById("pw");
const pwErrorMsg = document.getElementById("pwErrorMsg");

pwInput.addEventListener("focusout", (e) => validatePWInput(e.target.value));

function validatePWInput(pw) {
    pwInput.value = pwInput.value;
    if(pw==="") {
        pwInput.classList += " signin-form__input--error";
        pwErrorMsg.textContent = "비밀번호를 입력해주세요.";
        return false;
    }
    if(!isValidPW(pw)) {
        pwInput.classList += " signin-form__input--error";
        pwErrorMsg.textContent = "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
        return false;
    }
    pwInput.classList.remove("signin-form__input--error");
    pwErrorMsg.textContent = "";
    return true;
}


const pwCheckInput = document.getElementById("pwCheck");
const pwCheckErrorMsg = document.getElementById("pwCheckErrorMsg");

if(pwCheckInput) {
    pwCheckInput.addEventListener("focusout", (e) => validatePWCheckInput(e.target.value));
}

function validatePWCheckInput(pwCheck) {
    const pw = pwInput.value;
    if(!doubleCheckPW(pw, pwCheck)) {
        pwCheckInput.classList += " signin-form__input--error";
        pwCheckErrorMsg.textContent = "비밀번호가 일치하지 않아요.";
        return false;
    }
    pwCheckInput.classList.remove("signin-form__input--error");
    pwCheckErrorMsg.textContent = "";
    return true;
}


const signinForm = document.querySelector(".signin-form");
signinForm.addEventListener("submit",(e) => validateFormSubmit(e));

function validateFormSubmit(e) {
    e.preventDefault();

    const isValidSignIn = SignInTest(emailInput.value, pwInput.value);
    const isSignUp = e.target.querySelector("#pwCheck");

    if(isValidSignIn && !isSignUp) {
        location.href = "./folder.html"
        return;
    }
    if(!isValidSignIn && !isSignUp) {
        emailInput.classList += " signin-form__input--error";
        emailErrorMsg.textContent = "이메일을 확인해주세요.";
        pwInput.classList += " signin-form__input--error";
        pwErrorMsg.textContent = "비밀번호를 확인해주세요.";
        return;
    }
    if(isSignUp) {
        let allPass = true;
        allPass = allPass && !AlreadyMemberTest(emailInput.value);
        allPass = allPass && validateEmailInput(emailInput.value);
        allPass = allPass && validatePWInput(pwInput.value);
        allPass = allPass && validatePWCheckInput(pwCheckInput.value);
        console.log(allPass);
        if(allPass) location.href = "./folder.html";
        return;
    }
}


const pwEye = document.querySelector("#pwEye");
const pwCheckEye = document.querySelector("#pwCheckEye");

pwEye.addEventListener("click", (e) => toggleEye(e,pwInput));
if(pwCheckEye) pwCheckEye.addEventListener("click", (e) => toggleEye(e,pwCheckInput));

function toggleEye(e,input) {
    if(e.target.src.endsWith("eye-off.svg")) {
        input.type = "text";
        e.target.src = "/asset/images/eye-on.svg";
    }
    else {
        input.type = "password";
        e.target.src = "/asset/images/eye-off.svg";
    }
}