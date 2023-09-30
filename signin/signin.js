const input = document.querySelector(".email-input");
const pwInput = document.querySelector(".password-input");
const emailEmptyMsg = document.createElement("span");
const emailInvalidMsg = document.createElement("span");

let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

function inputEmptyValueHandler(e) {
  if (!e.target.value) {
    emailEmptyMsg.textContent = "이메일을 입력해주세요.";
    emailEmptyMsg.classList.add("input-error-msg");
    input.after(emailEmptyMsg);
    input.classList.add("input-error");
  } else {
    input.classList.remove("input-error");
    emailEmptyMsg.remove();
  }
}

function inputInvalidEmailHandler(e) {
  if (!regex.test(e.target.value) && e.target.value.length > 0) {
    emailInvalidMsg.textContent = "올바른 이메일 주소가 아닙니다.";
    emailInvalidMsg.classList.add("input-error-msg");
    input.after(emailInvalidMsg);
    input.classList.add("input-error");
  } else {
    input.classList.remove("input-error");
    emailInvalidMsg.remove();
  }
}

input.addEventListener("focusout", inputEmptyValueHandler);
input.addEventListener("focusout", inputInvalidEmailHandler);
