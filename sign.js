const emailEl = document.querySelector('#email');
const emailBox = emailEl.closest('.box');
const emailErrorText = emailBox.lastElementChild;
const passwordEl = document.querySelector('#password');
const passwordBox = passwordEl.closest('.box');
const passwordErrorText = passwordBox.lastElementChild;
const login = document.querySelector('.login-box');
let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
const emailTest = 'test@codeit.com'
const passwordTest = 'codeit101'

function emailValueChecker () {
    if (emailEl.value === '') {
        return (`이메일을 입력해주세요.`);
    }
    else if (!(regex.test(emailEl.value))) {
        return (`올바른 이메일 주소가 아닙니다.`)
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

function passwordCheck () {
    if (passwordEl.value === ''){
        passwordEl.className = 'error';
        passwordErrorText.style.visibility = 'visible';
    }
    else {
        passwordEl.className = 'normal';
        passwordErrorText.removeAttribute('style');
    }
}

function loginCheck () {
    if (emailEl.value === '' || emailEl.value !== emailTest ) {
        emailEl.className = 'error';
        emailErrorText.textContent = `이메일을 확인해주세요`;
        emailErrorText.style.visibility = 'visible';
        return;
    }
    else if (passwordEl.value === '' || passwordEl.value !== passwordTest) {
        passwordEl.className = 'error';
        passwordErrorText.textContent = `비밀번호를 확인해주세요`;
        passwordErrorText.style.visibility = 'visible';
        return;
    }
    else if (emailEl.classList.contains('normal') && passwordEl.classList.contains('normal')){
        login.setAttribute('href','/folder.html');
    }
}

emailEl.addEventListener('focusout', emailCheck);
passwordEl.addEventListener('focusout', passwordCheck);
login.addEventListener('click', loginCheck);

const eye = document.querySelector('.icon-eye');

function eyeOnOff () {
    if (eye.classList.contains('off')) {
        eye.setAttribute('src', 'images/icon/signup-input-active-eye-on.png');
        eye.classList.remove('off');
        eye.classList.add('on');
        passwordEl.setAttribute('type','text')
    }
    else if (eye.classList.contains('on')) {
        eye.setAttribute('src', 'images/icon/signin-eye-off.png');
        eye.classList.remove('on');
        eye.classList.add('off');
        passwordEl.setAttribute('type','password')
    }    
}

eye.addEventListener('click',eyeOnOff);