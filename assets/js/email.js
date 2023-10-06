const emailEl = document.querySelector('#email');
let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
const emailErrorText = document.querySelector('#email-error');
const title = document.querySelector('title').textContent;
import { emailTest } from "./test.js";

function emailValueChecker () {
    if (emailEl.value === '') {
        return (`이메일을 입력해주세요.`);
    }
    else if (!(regex.test(emailEl.value))) {
        return (`올바른 이메일 주소가 아닙니다.`)
    }
    else if (title === 'signup' && emailTest === emailEl.value) {
        return ('이미 사용 중인 이메일입니다.')
    }
    else {
        return (false);
    }
}

function emailCheck () {
    const emailValue = emailValueChecker();
    if (emailValue){
        emailEl.className = 'error';
        emailErrorText.textContent = `${emailValue}`;
        emailErrorText.style.visibility = 'visible';
    }
    else {
        emailEl.className = 'normal';
        emailErrorText.removeAttribute('style');
    }
}

export {emailEl, emailCheck}