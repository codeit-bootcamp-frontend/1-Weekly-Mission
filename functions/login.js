import { inputEmailEl, inputPswEl, showMessageByEmailEl, showMessageByPswEl, eyeOffIconEls,TEST_EMAIL, TEST_PSW} from './variablesEl.js'

function checkUser(e) {
  const INPUT_PSW_VALUE = inputPswEl.value;
  if(inputEmailEl.value === TEST_EMAIL && INPUT_PSW_VALUE === TEST_PSW) {
    e.target.setAttribute('href', '/folder');
  } else {
    showMessageByEmailEl.textContent = '이메일을 확인해주세요.';
    showMessageByPswEl.textContent = '비밀번호를 확인해주세요.';

    eyeOffIconEls[0].classList.add('psw-wrong');
    inputPswEl.classList.add('input-wrong');
    inputEmailEl.classList.add('input-wrong');
    inputEmailEl.setAttribute('onfocus', 'this.select()');
    inputPswEl.setAttribute('onfocus', 'this.select()');
  }
}

export { checkUser };