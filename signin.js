import { inputEmailEl, inputPswEl, eyeOffIconEls, inputBoxEls } from './functions/variablesEl.js';

import { checkEmailValid, removeEmailCheckMessage } from './functions/checkEmail.js';
import { checkPasswordFill, removePswCheckMessage, showPsw } from './functions/checkPsw.js';
import { checkUserForLogin, checkUserForLoginByEnter } from './functions/login.js';

 function initSignIn() {
  const loginBtn = document.querySelector('.sign-link');

  inputEmailEl.addEventListener('focusout', checkEmailValid);
  inputEmailEl.addEventListener('focusin', removeEmailCheckMessage);

  inputPswEl.addEventListener('focusout', checkPasswordFill);
  inputPswEl.addEventListener('focusin', removePswCheckMessage);

  loginBtn.addEventListener('click', checkUserForLogin);

  eyeOffIconEls.forEach((eyeOffIconEl) => eyeOffIconEl.addEventListener('click', showPsw));

  inputBoxEls.forEach((inputBox) => inputBox.addEventListener('keypress', checkUserForLoginByEnter));
}

initSignIn();
