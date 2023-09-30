const emailInput = document.querySelector(".email-input");
const pwInput = document.querySelector(".password-input");
const pwWrapper = document.querySelector(".password-wrapper");
const signinBtn = document.querySelector(".signin-btn");
const emailEmptyMsg = document.createElement("span");
const emailInvalidMsg = document.createElement("span");
const pwEmptyMsg = document.createElement("span");

let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

function inputEmptyValueHandler(e) {
  if (!e.target.value) {
    emailEmptyMsg.textContent = "이메일을 입력해주세요.";
    emailEmptyMsg.classList.add("input-error-msg");
    emailInput.after(emailEmptyMsg);
    emailInput.classList.add("input-error");
  } else {
    emailInput.classList.remove("input-error");
    emailEmptyMsg.remove();
  }
}

function inputInvalidEmailHandler(e) {
  if (!regex.test(e.target.value) && e.target.value.length > 0) {
    emailInvalidMsg.textContent = "올바른 이메일 주소가 아닙니다.";
    emailInvalidMsg.classList.add("input-error-msg");
    emailInput.after(emailInvalidMsg);
    emailInput.classList.add("input-error");
  } else {
    emailInvalidMsg.remove();
  }
}

function pwInputEmptyHandler(e) {
  if (!e.target.value) {
    pwEmptyMsg.textContent = "비밀번호를 입력해주세요.";
    pwEmptyMsg.classList.add("input-error-msg");
    pwWrapper.after(pwEmptyMsg);
    pwInput.classList.add("input-error");
  } else {
    pwEmptyMsg.remove();
    pwInput.classList.remove("input-error");
  }
}

function clickSigninBtnHandler() {
  if (emailInput.value !== "test@codeit.com") {
    emailEmptyMsg.textContent = "이메일을 확인해주세요.";
    emailEmptyMsg.classList.add("input-error-msg");
    emailInput.classList.add("input-error");
    emailInput.after(emailEmptyMsg);
  } else {
    emailEmptyMsg.remove();
  }

  if (pwInput.value !== "codeit101") {
    pwEmptyMsg.textContent = "비밀번호를 확인해주세요.";
    pwEmptyMsg.classList.add("input-error-msg");
    pwWrapper.after(pwEmptyMsg);
    pwInput.classList.add("input-error");
  } else {
    pwEmptyMsg.remove();
  }

  if (emailInput.value === "test@codeit.com" && pwInput.value === "codeit101") {
    location.href = "/folder";
  }
}

emailInput.addEventListener("focusout", inputEmptyValueHandler);
emailInput.addEventListener("focusout", inputInvalidEmailHandler);
pwInput.addEventListener("focusout", pwInputEmptyHandler);
signinBtn.addEventListener("click", clickSigninBtnHandler);
