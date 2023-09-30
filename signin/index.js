const email = document.querySelector('#email');
const password = document.querySelector('#password');
const loginBtn = document.querySelector('button');
const eyeOff = document.querySelector('.eye-off');

function reset() {
    email.classList.remove('warning');
    if (document.querySelector('.warning-text') != undefined) {
        document.querySelector('.warning-text').remove();
    }
}

function checkerEmail(e) {
    if (email.value === '') {
        email.classList.add('warning');
        const text = document.createElement('span');
        text.classList.add('warning-text');
        text.textContent = '이메일을 입력해주세요';
        e.target.after(text);
    } else if (email.value.includes('@') === false) {
        email.classList.add('warning');
        const text = document.createElement('span');
        text.classList.add('warning-text');
        text.textContent = '올바른 이메일 주소가 아닙니다.';
        e.target.after(text);
    }

 
}

function checkerPassword(e) {
    if (password.value === '') {
        password.classList.add('warning');
        const text = document.createElement('span');
        text.classList.add('warning-text');
        text.textContent = '비밀번호를 입력해주세요';
        e.target.after(text);
    }

}

function login(e) {
    if(email.value == 'test@codeit.com' && password.value == 'codeit101') {
        let link = 'folder.html';
        window.location.assign(link);
    } else {
        email.classList.add('warning');
        const emailText = document.createElement('span');
        emailText.classList.add('warning-text');
        emailText.textContent = '이메일을 입력해주세요';
        document.querySelector('#email').after(emailText);

        password.classList.add('warning');
        const passwordText = document.createElement('span');
        passwordText.classList.add('warning-text');
        passwordText.textContent = '비밀번호를 입력해주세요';
        document.querySelector('#password').after(passwordText);

    }
}

function eyeOnOff(e) {
    e.target.classList.toggle('line')
    if (e.target.classList.contains('line') === true) {
        password.removeAttribute('type');
    } else {
        password.setAttribute('type', 'password')
    }
}



email.addEventListener('focusout', checkerEmail);
email.addEventListener('focusin', reset);
password.addEventListener('focusout', checkerPassword);
password.addEventListener('focusin', reset);
loginBtn.addEventListener('click', login);
eyeOff.addEventListener('click', eyeOnOff)