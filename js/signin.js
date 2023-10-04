const idInput = document.querySelector('#id-label');
const pwInput = document.querySelector('#password-label');
const idErrorMsgEl = document.createElement('span');
const pwErrorMsgEl = document.createElement('span');
const inputBox = document.querySelector('.input-box:nth-child(2)');
const idInvalidMsgEl = document.createElement('span');
const loginBtn = document.querySelector('.login-btn');
const eyeImg = document.querySelector('.eye-off');

let reg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

function idEmpty(e) {
  if(e.target.value.length === 0){
    idErrorMsgEl.textContent = '이메일을 입력해주세요.';
    idErrorMsgEl.classList.add('input-error-msg');
    idInput.after(idErrorMsgEl);
    idInput.style.borderColor = 'var(--red)';
    }else{
      idInput.style.borderColor = 'var(--gray-40)';
      idErrorMsgEl.remove();
    }
}

function idInvalid(e) {
  if(!reg.test(e.target.value) && e.target.value.length > 0){
    idInvalidMsgEl.textContent = '올바른 이메일 주소가 아닙니다.';
    idInvalidMsgEl.classList.add('input-error-msg');
    idInput.after(idInvalidMsgEl);
    idInput.style.borderColor = 'var(--red)';
  }else{
    idInvalidMsgEl.remove();
  }
}

function pwEmpty(e) {
  if(e.target.value.length === 0){
    pwErrorMsgEl.textContent = '비밀번호를 입력해주세요.';
    pwErrorMsgEl.classList.add('input-error-msg');
    inputBox.after(pwErrorMsgEl);
    pwInput.style.borderColor = 'var(--red)';
    }else{
      pwInput.style.borderColor = 'var(--gray-40)';
      pwErrorMsgEl.remove();
    }
}

function clickSigninBtn(e){
  if(idInput.value !== "test@codeit.com"){
    idErrorMsgEl.textContent = '이메일을 확인해주세요.';
    idErrorMsgEl.classList.add('input-error-msg');
    idInput.after(idErrorMsgEl);
    idInput.style.borderColor = 'var(--red)';
  }else{
    idErrorMsgEl.remove();
  }

  if(pwInput.value !== "codeit101"){
    pwErrorMsgEl.textContent = '비밀번호를 확인해주세요.';
    pwErrorMsgEl.classList.add('input-error-msg');
    inputBox.after(pwErrorMsgEl);
    pwInput.style.borderColor = 'var(--red)';
    }else{
      pwErrorMsgEl.remove();
  }

  if(idInput.value === "test@codeit.com" && pwInput.value === "codeit101"){
    e.preventDefault();
    location.href = "../folder.html";
  }
}

function clickEyeImg(e){
  if(pwInput.getAttribute("type") === "password"){
    pwInput.setAttribute("type", "text");
    eyeImg.setAttribute("src", "../assets/png/eye-on.png");
  }else{
    pwInput.setAttribute("type", "password");
    eyeImg.setAttribute("src", "../assets/png/eye-off.png");
  }
}


idInput.addEventListener("focusout", idEmpty);
idInput.addEventListener("focusout", idInvalid);
pwInput.addEventListener("focusout", pwEmpty);
loginBtn.addEventListener("click", clickSigninBtn);
eyeImg.addEventListener("click", clickEyeImg);