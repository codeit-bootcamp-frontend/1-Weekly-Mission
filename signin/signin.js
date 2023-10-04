const emailInput = document.querySelector(".email-input");
const pwInput = document.querySelector(".password-input");
const pwWrapper = document.querySelector(".password-wrapper");
const signinBtn = document.querySelector(".signin-btn");
const eyeBtn = document.querySelector(".eye-off-btn");

let emailRegex = new RegExp("[a-z0-9]+@[a-z]+\\.[a-z]{2,3}");
const emailEmptyMsg = createErrorMsg(
  "input-error-msg",
  "이메일을 입력해주세요."
);
const emailInvalidMsg = createErrorMsg(
  "input-error-msg",
  "올바른 이메일 주소가 아닙니다."
);
const pwEmptyMsg = createErrorMsg(
  "input-error-msg",
  "비밀번호를 입력해주세요."
);
const emailIncorrectMsg = createErrorMsg(
  "input-error-msg",
  "이메일을 확인해주세요."
);
const pwIncorrectMsg = createErrorMsg(
  "input-error-msg",
  "비밀번호를 확인해주세요."
);

function handleEmailInputEmptyValueCheck(e) {
  if (!e.target.value.trim()) {
    emailInput.after(emailEmptyMsg);
    emailInput.classList.add("input-error");
  } else {
    emailInput.classList.remove("input-error");
    emailEmptyMsg.remove();
  }
}

function handleEmailInputInvalidValueCheck(e) {
  if (
    !emailRegex.test(e.target.value.trim()) &&
    e.target.value.trim().length > 0
  ) {
    emailInput.after(emailInvalidMsg);
    emailInput.classList.add("input-error");
  } else {
    emailInvalidMsg.remove();
  }
}

function handlePasswordInputEmptyValueCheck(e) {
  if (!e.target.value.trim()) {
    pwWrapper.after(pwEmptyMsg);
    pwInput.classList.add("input-error");
  } else {
    pwEmptyMsg.remove();
    pwInput.classList.remove("input-error");
  }
}

function handleSigninBtnClick() {
  const testEmail = "test@codeit.com";
  const testPw = "codeit101";
  if (emailInput.value.trim() !== testEmail) {
    emailInput.classList.add("input-error");
    emailInput.after(emailIncorrectMsg);
  } else {
    emailIncorrectMsg.remove();
  }

  if (pwInput.value.trim() !== testPw) {
    pwWrapper.after(pwIncorrectMsg);
    pwInput.classList.add("input-error");
  } else {
    pwIncorrectMsg.remove();
  }

  if (emailInput.value.trim() === testEmail && pwInput.value.trim === testPw) {
    location.href = "/folder";
  }
}

function handleEyeBtnClick() {
  if (pwInput.getAttribute("type") === "password") {
    pwInput.setAttribute("type", "text");
    eyeBtn.firstElementChild.setAttribute("src", "/assets/common/eye-on.svg");
  } else {
    pwInput.setAttribute("type", "password");
    eyeBtn.firstElementChild.setAttribute("src", "/assets/common/eye-off.svg");
  }
}

function createErrorMsg(style, errorStatement) {
  const errorMsg = document.createElement("span");
  errorMsg.textContent = errorStatement;
  errorMsg.classList.add(style);
  return errorMsg;
}

emailInput.addEventListener("blur", handleEmailInputEmptyValueCheck);
emailInput.addEventListener("blur", handleEmailInputInvalidValueCheck);
pwInput.addEventListener("blur", handlePasswordInputEmptyValueCheck);
signinBtn.addEventListener("click", handleSigninBtnClick);
eyeBtn.addEventListener("click", handleEyeBtnClick);
