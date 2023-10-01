const email = document.querySelector('#email');
const password = document.querySelector('#password');
const emailBox = email.parentElement;
const passwordBox = password.parentElement.parentElement;
const login = document.querySelector('.login-box');

function emailValueChecker () {
    const includeAt = email.value.indexOf('@');
    const includeFullStop = email.value.indexOf('.');
    const includeSpace = email.value.indexOf(' ');
    if (email.value === '') {
        return (`이메일을 입력해주세요.`);
    }
    else if (includeAt === -1 || includeFullStop === -1 || includeSpace !== -1
        || (Math.abs(includeAt - includeFullStop) === 1 || includeFullStop === email.value.length - 1)) {
        return (`올바른 이메일 주소가 아닙니다.`)
    }
    else {
        return (false);
    }
}

function emailCheck () {
    const emailValue = emailValueChecker();
    
    if (emailValue){
        email.className = 'wrong';
        const alertWord = document.createElement('div');
        alertWord.textContent = `${emailValue}`;
        alertWord.setAttribute('class','wrong-text');
        emailBox.append(alertWord);
    }
    else {
        email.className = 'normal';
    }
}

function emailRemove () {
    if (emailBox.lastElementChild.classList.contains(`wrong-text`)) {
        emailBox.lastElementChild.remove();
    }
}

function passwordCheck () {
    if (password.value === ''){
        password.className = 'wrong';
        const alertWord = document.createElement('div');
        alertWord.textContent = `비밀번호를 입력해주세요`;
        alertWord.setAttribute('class','wrong-text');
        passwordBox.append(alertWord);
    }
    else {
        password.className = 'normal';
    }
}

function passwordRemove () {
    if (passwordBox.lastElementChild.classList.contains(`wrong-text`)) {
        passwordBox.lastElementChild.remove();
    }
}

function loginCheck () {
    if (email.value === '' || password.value === '') {
        if (email.value === '') {
            emailRemove();
            email.className = 'wrong';
            const alertEmail = document.createElement('div');
            alertEmail.textContent = `이메일을 확인해주세요`;
            alertEmail.setAttribute('class','wrong-text');
            emailBox.append(alertEmail);
        }
        if (password.value === '') {
            passwordRemove();
            password.className = 'wrong';
            const alertPassword = document.createElement('div');
            alertPassword.textContent = `비밀번호를 확인해주세요`;
            alertPassword.setAttribute('class','wrong-text');
            passwordBox.append(alertPassword);
        }
    }
    else if (email.classList.contains('normal') && password.classList.contains('normal')){
        login.setAttribute('href','/folder.html');
    }
}

email.addEventListener('focusout', emailCheck);
email.addEventListener('focusin', emailRemove);
password.addEventListener('focusout', passwordCheck);
password.addEventListener('focusin', passwordRemove)
login.addEventListener('click', loginCheck);

const eye = document.querySelector('.icon-eye');

function eyeOnOff () {
    if (eye.classList.contains('off')) {
        eye.setAttribute('src', 'images/icon/signup-input-active-eye-on.png');
        eye.classList.remove('off');
        eye.classList.add('on');
        password.setAttribute('type','text')
    }
    else if (eye.classList.contains('on')) {
        eye.setAttribute('src', 'images/icon/signin-eye-off.png');
        eye.classList.remove('on');
        eye.classList.add('off');
        password.setAttribute('type','password')
    }    
}

eye.addEventListener('click',eyeOnOff);