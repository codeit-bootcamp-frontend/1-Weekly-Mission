import { emailTest } from "./constants.js";
const emailEl = document.querySelector('#email');

function emailValueChecker () {
    const regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    const title = document.querySelector('title').textContent;
    if (emailEl.value === '') {
        return (`이메일을 입력해주세요.`);
    }
    if (!(regex.test(emailEl.value))) {
        return (`올바른 이메일 주소가 아닙니다.`)
    }
    if (title === 'signup' && emailTest === emailEl.value) {
        return ('이미 사용 중인 이메일입니다.')
    }
    return (false);
}

function emailCheck () {
    const emailValue = emailValueChecker();
    const emailErrorText = document.querySelector('#email-error');
    if (emailValue){
        emailEl.className = 'error';
        emailErrorText.textContent = `${emailValue}`;
        emailErrorText.style.visibility = 'visible';
    } else {
        emailEl.className = 'normal';
        emailErrorText.removeAttribute('style');
    }
}

export { emailEl, emailCheck }