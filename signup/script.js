const emailInput = document.querySelector('#email');
const pwdInput = document.querySelector('#password');
const pwdConfirmInput = document.querySelector('#password-confirm');

const isValidEmail = email => {
  const regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regExp.test(email);
}

const checkEmailValidation = () => {
  const inputControl = document.querySelector('.email-field');
  const email = emailInput.value.trim();
  const errorMessage = inputControl.querySelector('.error');

  if (email === '') {
    errorMessage.textContent = '이메일을 입력해주세요.';
    inputControl.classList.add('error');
  } else if (!isValidEmail(email)) {
    errorMessage.textContent = '올바른 이메일 주소가 아닙니다.';
    inputControl.classList.add('error');
  } else if (email == 'test@codeit.com') {
    errorMessage.textContent = '이미 사용 중인 이메일입니다.';
    inputControl.classList.add('error');
  } else {
    errorMessage.textContent = '';
    inputControl.classList.remove('error');
  }
};

const checkPwdValidation = () => {
  const inputControl = document.querySelector('.pwd-field');
  const pwd = pwdInput.value.trim();
  const errorMessage = inputControl.querySelector('.error');

  if (!isValidPwd(pwd)) { // 값이 8자 미만 or only 문자열 or only 숫자
    errorMessage.textContent = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.';
    inputControl.classList.add('error');
  } else {
    errorMessage.textContent = '';
    inputControl.classList.remove('error');
  }
};

const isValidPwd = value => {
  const pwdRegExp = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
  return pwdRegExp.test(value);
}


const confirmPwd = () => {
  const inputControl = document.querySelector('.pwd-confirm-field');
  const pwd = pwdInput.value.trim();
  const pwd2 = document.querySelector('#password-confirm').value.trim();
  const errorMessage = inputControl.querySelector('.error');

  if(pwd !="" && pwd2 != "") {
        if(pwd !== pwd2){
          errorMessage.innerHTML='비밀번호가 일치하지 않습니다.'
          inputControl.classList.add('error');
      }
  }
};


const 

emailInput.addEventListener("focusout", checkEmailValidation);
pwdInput.addEventListener("focusout", checkPwdValidation);
pwdConfirmInput.addEventListener("focusout", confirmPwd);