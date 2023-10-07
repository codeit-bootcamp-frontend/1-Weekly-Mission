import { passwordInput, eyeButton } from "./valiable";


export function hidePassword() {
  if (passwordInput.type === 'password'){
    passwordInput.setAttribute('type', 'text');
    eyeButton.setAttribute('src', "../images/eye-on.svg")
  } else {
    passwordInput.setAttribute('type', 'password');
    eyeButton.setAttribute('src', "../images/eye-off.svg")
  }
}