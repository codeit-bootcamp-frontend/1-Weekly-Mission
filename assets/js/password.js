const passwordEl = document.querySelector('#password');
const passwordCheckEl = document.querySelector('#password-check')


function passwordCheck () {
    const regex = new RegExp('(?=.*[a-zA-Z])(?=.*[0-9])(?=.{8,})');
    const title = document.querySelector('title').textContent;
    if (this.value === ''){
        this.className = 'error';
        this.parentElement.nextElementSibling.textContent = `비밀번호를 입력해주세요`;
        this.parentElement.nextElementSibling.style.visibility = 'visible';
    } else if (title === 'signup' && (this.value !== passwordEl.value)){
        this.className = 'error';
        this.parentElement.nextElementSibling.textContent = `비밀번호가 일치하지 않아요.`;
        this.parentElement.nextElementSibling.style.visibility = 'visible';
    } else if (title === 'signup' && (this.value.length < 8 || !regex.test(this.value))){
        this.className = 'error';
        this.parentElement.nextElementSibling.textContent = `비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.`;
        this.parentElement.nextElementSibling.style.visibility = 'visible';
    } else {
        this.className = 'normal';
        this.parentElement.nextElementSibling.removeAttribute('style');
    }
}

function eyeOnOff () {
    if (this.classList.contains('off')) {
        this.setAttribute('src', '/assets/images/icon/signin-eye-on.png');
        this.classList.remove('off');
        this.classList.add('on');
        this.previousElementSibling.setAttribute('type','text')
    } else if (this.classList.contains('on')) {
        this.setAttribute('src', '/assets/images/icon/signin-eye-off.png');
        this.classList.remove('on');
        this.classList.add('off');
        this.previousElementSibling.setAttribute('type','password')
    }    
}

export {passwordEl, passwordCheckEl, passwordCheck, eyeOnOff}