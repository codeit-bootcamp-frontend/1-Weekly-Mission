const email = document.getElementById("email");
const password = document.getElementById("password");
const emailLabel = document.querySelector(".email-label");
const passwordLabel = document.querySelector(".password-label");
const loginButton = document.getElementById("login-button");
const eyeIcon = document.querySelector(".eye-on-image");

email.addEventListener("focusout", function (event) {
  event.preventDefault();

  showEmptyErrorMessage(email, emailLabel);
  if (isNotEmpty(email)) {
    showValidEmailErrorMessage(email, emailLabel);
  }
});

password.addEventListener("focusout", function (event) {
  event.preventDefault();
  showEmptyErrorMessage(password, passwordLabel);
});

loginButton.addEventListener("click", function (event) {
  event.preventDefault();
  if (isCodeItLogin(email, password)) {
    window.location = "http://127.0.0.1:5500/folder.html";
  }
});

eyeIcon.addEventListener("click", () => {
  passwordVisibility(eyeIcon, password);
});
