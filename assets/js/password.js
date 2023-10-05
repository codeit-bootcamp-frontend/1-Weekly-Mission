const passwordEl = document.querySelector('#password');
const passwordErrorText = document.querySelector('#password-error');

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

const eye = document.querySelector('.icon-eye');

function eyeOnOff () {
    if (eye.classList.contains('off')) {
        eye.setAttribute('src', '/assets/images/icon/signin-eye-on.png');
        eye.classList.remove('off');
        eye.classList.add('on');
        passwordEl.setAttribute('type','text')
    }
    else if (eye.classList.contains('on')) {
        eye.setAttribute('src', '/assets/images/icon/signin-eye-off.png');
        eye.classList.remove('on');
        eye.classList.add('off');
        passwordEl.setAttribute('type','password')
    }    
}

export {passwordEl, passwordErrorText, passwordCheck, eye, eyeOnOff}