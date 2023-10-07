import { inputEmailEl, inputPswEl, eyeOffIconEls, inputPswCheckEl } from './functions/variablesEl.js';
import { checkEmailValid, removeEmailCheckMessage } from './functions/checkEmail.js';
import { checkPasswordFill, checkPasswordSame, removePswCheckMessage, removePswSameCheckMessage, checkPasswordValid, showPsw } from './functions/checkPsw.js';
import { checkUserForJoin } from './functions/join.js';


function initSignUp () {
  const joinBtn = document.querySelector('.sign-link');

  inputEmailEl.addEventListener('focusout', checkEmailValid);
  inputEmailEl.addEventListener('focusin', removeEmailCheckMessage);

  inputPswEl.addEventListener('focusout', checkPasswordFill);
  inputPswEl.addEventListener('focusout', checkPasswordValid);
  inputPswEl.addEventListener('focusin', removePswCheckMessage);

  inputPswCheckEl.addEventListener('focusout', checkPasswordSame);
  inputPswCheckEl.addEventListener('focusin', removePswSameCheckMessage);

  eyeOffIconEls.forEach((eyeOffIconEl) => eyeOffIconEl.addEventListener('click', showPsw));

  joinBtn.addEventListener('click', checkUserForJoin)
  
}

initSignUp ();