const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passwordRepeat = document.querySelector("#password-repeat");

const emailError = document.querySelector(".email-message");
const passwordError = document.querySelector(".password-message");
const passwordRepeatError = document.querySelector(".password-repeat-message");

const userEmail = ["test@codeit.com"];
const userPassword = ["codeit101"];

export {
  email,
  password,
  passwordRepeat,
  emailError,
  passwordError,
  passwordRepeatError,
  userEmail,
  userPassword,
};
