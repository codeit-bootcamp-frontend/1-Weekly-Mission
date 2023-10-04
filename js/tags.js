const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passwordCheck = document.querySelector("#password-check");
const passwordVisible = document.querySelector(".toogle-eye");
const emailError = document.createElement("div");
const passwordError = document.createElement("div");
const loginButton = document.querySelector(".signin-form");
const signupButton = document.querySelector(".signup-form");

export { email, password, passwordCheck, passwordVisible, emailError, passwordError, loginButton, signupButton };
