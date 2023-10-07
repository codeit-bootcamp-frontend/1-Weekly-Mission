import { inputEmailEl, inputPswEl, eyeOffIconEls, inputPswCheckEl, inputBoxEls } from './functions/variablesEl.js';
import { checkEmailValid, removeEmailCheckMessage } from './functions/checkEmail.js';
import { checkPasswordFill, checkPasswordSame, removePswCheckMessage, removePswSameCheckMessage, checkPasswordValid, showPsw } from './functions/checkPsw.js';
import { checkUserForJoin ,checkUserForJoinByEnter } from './functions/join.js';


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

  joinBtn.addEventListener('click', checkUserForJoin);

  inputBoxEls.forEach((inputBox) => inputBox.addEventListener('keypress', checkUserForJoinByEnter));
}

initSignUp ();