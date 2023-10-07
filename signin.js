import { inputEmailEl, inputPswEl, eyeOffIconEls } from './functions/variablesEl.js';

import { checkEmailValid, removeEmailCheckMessage } from './functions/checkEmail.js';
import { checkPasswordFill, removePswCheckMessage, showPsw } from './functions/checkPsw.js';
import { checkUser } from './functions/login.js';

 function initSignIn() {
  const loginBtn = document.querySelector('.sign-link');

  inputEmailEl.addEventListener('focusout', checkEmailValid);
  inputEmailEl.addEventListener('focusin', removeEmailCheckMessage);

  inputPswEl.addEventListener('focusout', checkPasswordFill);
  inputPswEl.addEventListener('focusin', removePswCheckMessage);

  loginBtn.addEventListener('click', checkUser);

  eyeOffIconEls.forEach((eyeOffIconEl) => eyeOffIconEl.addEventListener('click', showPsw));
}

initSignIn();

export {initSignIn}