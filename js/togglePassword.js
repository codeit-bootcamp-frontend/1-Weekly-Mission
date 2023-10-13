import {
  passwordInput,
  passwordCheckInput,
  eyeButtonInPassword,
  eyeButtonInPasswordCheck
} from './tags.js';

const eyeOn = 'on';

function changeTypeEyeButtonInPassword(type) {
  eyeButtonInPassword.classList.toggle(eyeOn);
  passwordInput.type = type;
}

function togglePasswordInPassword() {
  if (passwordInput.type === "password") {
    changeTypeEyeButtonInPassword('text');
  } else {
    changeTypeEyeButtonInPassword('password');
  }
}

function changeTypeEyeButtonInPasswordCheck(type) {
  eyeButtonInPasswordCheck.classList.toggle(eyeOn);
  passwordCheckInput.type = type;
}

function togglePasswordInPasswordCheck() {
  if (passwordCheckInput.type === "password") {
    changeTypeEyeButtonInPasswordCheck('text');
  } else {
    changeTypeEyeButtonInPasswordCheck('password');
  }
}

export { togglePasswordInPassword, togglePasswordInPasswordCheck };
