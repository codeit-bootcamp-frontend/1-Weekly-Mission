const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passwordCheck = document.querySelector("#password-check");
const passwordVisible = document.querySelector(".toogle-eye");
const passwordCheckVisible = document.querySelector(".toogle-eye-check");
const emailError = document.createElement("div");
const passwordError = document.createElement("div");
const passwordCheckError = document.createElement("div");
const loginButton = document.querySelector(".signin-form");
const signupButton = document.querySelector(".signup-form");
const login = document.querySelector(".login");

export {
  email,
  password,
  passwordCheck,
  passwordVisible,
  passwordCheckVisible,
  emailError,
  passwordError,
  loginButton,
  signupButton,
  passwordCheckError,
  login,
};
