const email = document.getElementById("email");
const password = document.getElementById("password");
const rePassword = document.getElementById("re-password");
const emailLabel = document.querySelector(".email-label");
const passwordLabel = document.querySelector(".password-label");
const repasswordLabel = document.querySelector(".re-password-label");
const eyeIcon = document.querySelector(".eye-on-image");
const ReEyeIcon = document.querySelector(".re-eye-on-image");

function passwordMatch(password, rePassword, repasswordLabel) {
  if (password.value.trim() !== rePassword.value.trim()) {
    const errorMsgs = repasswordLabel.querySelector(".error-message");
    errorMsgs.innerText = "비밀번호가맞지않습니다";
    errorMsgs.style.color = "red";
    rePassword.style.border = "3px solid red";
  }
}

function alreadyUsedEmail(email, emailLabel) {
  if (email.value.trim() === "test@codeit.com") {
    const errorMsgs = emailLabel.querySelector(".error-message");
    errorMsgs.innerText = "이미 사용 중인 이메일입니다";
    errorMsgs.style.color = "red";
    email.style.border = "3px solid red";
  }
}

email.addEventListener("focusout", (event) => {
  event.preventDefault();
  showEmptyErrorMessage(email, emailLabel);
  if (isNotEmpty(email)) {
    showValidEmailErrorMessage(email, emailLabel);
  }
  if (isNotEmpty(email)) {
    alreadyUsedEmail(email, emailLabel);
  }
});

password.addEventListener("focusout", (event) => {
  event.preventDefault();
  showEmptyErrorMessage(password, passwordLabel);
});

rePassword.addEventListener("focusout", (event) => {
  event.preventDefault();
  showEmptyErrorMessage(rePassword, repasswordLabel);
  if (password.value.length && rePassword.value.length) {
    passwordMatch(password, rePassword, repasswordLabel);
  }
});

eyeIcon.addEventListener("click", (event) => {
  event.preventDefault();
  PasswordVisibility(eyeIcon, password);
});

ReEyeIcon.addEventListener("click", (event) => {
  event.preventDefault();
  PasswordVisibility(ReEyeIcon, rePassword);
});
