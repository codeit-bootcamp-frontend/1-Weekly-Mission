import {
  passwordInput,
  checkPasswordInput,
  eyeButton1,
  eyeButton2
} from './tags.js';

const eyeOn = 'on';

function changeTypeEyeButton1(type) {
  eyeButton1.classList.toggle(eyeOn);
  passwordInput.type = type;
}

function showPassword1() {
  if (passwordInput.type === "password") {
    changeTypeEyeButton1('text');
  } else {
    changeTypeEyeButton1('password');
  }
}

//checkPassword-eyebutton
function changeTypeEyeButton2(type) {
  eyeButton2.classList.toggle(eyeOn);
  checkPasswordInput.type = type;
}

function showPassword2() {
  if (checkPasswordInput.type === "password") {
    changeTypeEyeButton2('text');
  } else {
    changeTypeEyeButton2('password');
  }
}

export { showPassword1, showPassword2 };
