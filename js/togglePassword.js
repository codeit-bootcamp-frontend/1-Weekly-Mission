import {
  passwordInput,
  checkPasswordInput,
  eyeButtonInPassword,
  eyeButtonInCheckPassword
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

//checkPassword-eyebutton
function changeTypeEyeButtonInCheckPassword(type) {
  eyeButtonInCheckPassword.classList.toggle(eyeOn);
  checkPasswordInput.type = type;
}

function togglePasswordInCheckPassword() {
  if (checkPasswordInput.type === "password") {
    changeTypeEyeButtonInCheckPassword('text');
  } else {
    changeTypeEyeButtonInCheckPassword('password');
  }
}

export { togglePasswordInPassword, togglePasswordInCheckPassword };
