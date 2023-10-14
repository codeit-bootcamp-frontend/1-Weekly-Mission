const accountInfo = [
  { email: "test@codeit.com", password: "codeit101" },
  { email: "test2@codeit.com", password: "codeit202" },
  { email: "test3@codeit.com", password: "codeit303" },
];
const inputEmail = document.querySelector("#sign-up");
const inputPassword = document.querySelector("#password");
const emailErrorMessage = document.querySelector(".email-error-message");
const passwordErrorMessage = document.querySelector(".password-error-message");

export {
  accountInfo,
  inputEmail,
  inputPassword,
  emailErrorMessage,
  passwordErrorMessage,
};
