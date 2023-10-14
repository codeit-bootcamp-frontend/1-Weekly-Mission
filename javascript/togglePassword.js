import { passwordInput, eyeButton } from "./variables.js";

export function togglePassword() {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    eyeButton.src = "../images/eye-on.svg";
  } else {
    passwordInput.type = 'password';
    eyeButton.src = "../images/eye-off.svg";
  }
};