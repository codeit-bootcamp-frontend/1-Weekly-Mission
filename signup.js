const email = document.getElementById("email");
const password = document.getElementById("password");
const rePassword = document.getElementById("re-password");
const emailLabel = document.querySelector(".email-label");
const passwordLabel = document.querySelector(".password-label");
const repasswordLabel = document.querySelector(".re-password-label");
const eyeIcon = document.querySelector(".eye-on-image");
const ReEyeIcon = document.querySelector(".re-eye-on-image");

function rePasswordVisible() {
  if (ReEyeIcon.classList.contains("fa-eye")) {
    ReEyeIcon.classList.remove("fa-eye");
    ReEyeIcon.classList.add("fa-eye-slash");
    rePassword.type = "password";
  } else if (ReEyeIcon.classList.contains("fa-eye-slash")) {
    ReEyeIcon.classList.remove("fa-eye-slash");
    ReEyeIcon.classList.add("fa-eye");
    rePassword.type = "text";
  }
}

function passwordMatch(password, rePassword, repasswordLabel) {
  if (password.value.trim() !== rePassword.value.trim()) {
    const errorMsgs = repasswordLabel.querySelector(".error-message");
    errorMsgs.innerText = "비밀번호가맞지않습니다";
    errorMsgs.style.color = "red";
  }
}

email.addEventListener("focusout", function (event) {
  event.preventDefault();
  emptyCheck(email, emailLabel);
  validEmailCheck(email, emailLabel);
});

password.addEventListener("focusout", function (event) {
  event.preventDefault();
  emptyCheck(password, passwordLabel);
});

rePassword.addEventListener("focusout", function (event) {
  event.preventDefault();
  emptyCheck(rePassword, repasswordLabel);
  if (password.value.length && rePassword.value.length) {
    passwordMatch(password, rePassword, repasswordLabel);
  }
});

eyeIcon.addEventListener("click", passwordVisible);
ReEyeIcon.addEventListener("click", rePasswordVisible);
