const email = document.querySelector("#email");
const password = document.querySelector("#password");
const signinBtn = document.querySelector(".signin-button");

const emailError = document.querySelector(".email-message");
const passwordError = document.querySelector(".password-message");

signinBtn.addEventListener("click", function () {
  location.href = "./folder.html";
});
