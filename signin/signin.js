const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const loginBtn = document.querySelector('button');
const eyeOff = document.querySelector('.eye-off');

function reset(e) {
    e.target.classList.remove('warning');
    const warningText = e.target.getAttribute('warning-text')
    if (warningText) {
        warningText.remove();
    }
}

function checkerEmail(e) {
    if (emailInput.value === '') {
        emailInput.classList.add('warning');
        const text = document.createElement('span');
        text.classList.add('warning-text');
        text.textContent = '이메일을 입력해주세요';
        e.target.after(text);
    } else if (emailInput.value.includes('@') === false) {
        emailInput.classList.add('warning');
        const text = document.createElement('span');
        text.classList.add('warning-text');
        text.textContent = '올바른 이메일 주소가 아닙니다.';
        e.target.after(text);
    }

 
}

function checkerPassword(e) {
    if (passwordInput.value === '') {
        passwordInput.classList.add('warning');
        const text = document.createElement('span');
        text.classList.add('warning-text');
        text.textContent = '비밀번호를 입력해주세요';
        e.target.after(text);
    }

}

function login(e) {
    if(emailInput.value == 'test@codeit.com' && passwordInput.value == 'codeit101') {
        const link = 'folder.html';
        window.location.assign(link);
    } else {
        emailInput.classList.add('warning');
        const emailText = document.createElement('span');
        emailText.classList.add('warning-text');
        emailText.textContent = '이메일을 입력해주세요';
        document.querySelector('#email').after(emailText);

        passwordInput.classList.add('warning');
        const passwordText = document.createElement('span');
        passwordText.classList.add('warning-text');
        passwordText.textContent = '비밀번호를 입력해주세요';
        document.querySelector('#password').after(passwordText);

    }
}

function eyeOnOff(e) {
    e.target.classList.toggle('line')
    if (e.target.classList.contains('line') === true) {
        passwordInput.removeAttribute('type');
    } else {
        passwordInput.setAttribute('type', 'password')
    }
}



emailInput.addEventListener('focusout', checkerEmail);
emailInput.addEventListener('focusin', reset);
passwordInput.addEventListener('focusout', checkerPassword);
passwordInput.addEventListener('focusin', reset);
loginBtn.addEventListener('click', login);
eyeOff.addEventListener('click', eyeOnOff)





export {checkerEmail, reset, eyeOnOff};