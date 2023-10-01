const idInput = document.querySelector('#id-label');
const pwInput = document.querySelector('#password-label');
const idErrorMsg = document.createElement('span');
const pwErrorMsg = document.createElement('span');
const inputBox = document.querySelector('.input-box:nth-child(2)');
const idInvalidMsg = document.createElement('span');
const loginBtn = document.querySelector('.login-btn');
const eyeBtn = document.querySelector('.eye-off');

let reg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

function idEmpty(e) {
  if(e.target.value.length === 0){
    idErrorMsg.textContent = '이메일을 입력해주세요.';
    idErrorMsg.classList.add('input-error-msg');
    idInput.after(idErrorMsg);
    idInput.style.borderColor = 'var(--red)';
    }else{
      idInput.style.borderColor = 'var(--gray-40)';
      idErrorMsg.remove();
    }
}

function idInvalid(e) {
  if(!reg.test(e.target.value) && e.target.value.length > 0){
    idInvalidMsg.textContent = '올바른 이메일 주소가 아닙니다.';
    idInvalidMsg.classList.add('input-error-msg');
    idInput.after(idInvalidMsg);
    idInput.style.borderColor = 'var(--red)';
  }else{
    idInvalidMsg.remove();
  }
}

function pwEmpty(e) {
  if(e.target.value.length === 0){
    pwErrorMsg.textContent = '비밀번호를 입력해주세요.';
    pwErrorMsg.classList.add('input-error-msg');
    inputBox.after(pwErrorMsg);
    pwInput.style.borderColor = 'var(--red)';
    }else{
      pwInput.style.borderColor = 'var(--gray-40)';
      pwErrorMsg.remove();
    }
}

function clickSigninBtn(e){
  if(idInput.value !== "test@codeit.com"){
    idErrorMsg.textContent = '이메일을 확인해주세요.';
    idErrorMsg.classList.add('input-error-msg');
    idInput.after(idErrorMsg);
    idInput.style.borderColor = 'var(--red)';
  }else{
    idErrorMsg.remove();
  }

  if(pwInput.value !== "codeit101"){
    pwErrorMsg.textContent = '비밀번호를 확인해주세요.';
    pwErrorMsg.classList.add('input-error-msg');
    inputBox.after(pwErrorMsg);
    pwInput.style.borderColor = 'var(--red)';
    }else{
      pwErrorMsg.remove();
  }

  if(idInput.value === "test@codeit.com" && pwInput.value === "codeit101"){
    location.href = "../folder.html";
  }
}

function clickEyeBtn(e){
  if(pwInput.getAttribute("type") === "password"){
    pwInput.setAttribute("type", "text");
    eyeBtn.firstElementChild.setAttribute("src", "../assets/png/eye-on.png");
  }else{
    pwInput.setAttribute("type", "password");
    eyeBtn.firstElementChild.setAttribute("src", "../assets/png/eye-off.png");
  }
}


idInput.addEventListener("focusout", idEmpty);
idInput.addEventListener("focusout", idInvalid);
pwInput.addEventListener("focusout", pwEmpty);
loginBtn.addEventListener("click", clickSigninBtn);
eyeBtn.addEventListener("click", clickEyeBtn);