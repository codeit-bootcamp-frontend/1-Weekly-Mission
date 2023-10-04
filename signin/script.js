const email = document.querySelector('#email');
const password = document.querySelector('#password');
const btnLogin = document.querySelector('.btn-login');


const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.textContent = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
}

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.textContent = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
}

const isValidEmail = email => {
  const regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regExp.test(email);
}

const checkEmailValidation = () => {
  const emailValue = email.value.trim();
  
  if (emailValue === '') {
    setError(email, '이메일을 입력하세요.');
  } else if (!isValidEmail(emailValue)) {
    setError(email, '올바른 이메일 주소가 아닙니다.')
  } else {
    setSuccess(email);
  }
}

const checkPwdValidation = () => {
  const passwordValue = password.value.trim();
  
  if (passwordValue === '') {
    setError(password, '비밀번호를 입력하세요.');
  } else {
    setSuccess(password);
  }
}

const submit = () => {
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const testEmail = 'test@codeit.com';
  const testPassword = 'codeit101';

  if (emailValue != testEmail && passwordValue 
  != testPassword) {
    setError(email, '이메일을 확인해주세요.');
    setError(password, '비밀번호를 확인해주세요.');
  } else if (emailValue != testEmail) {
    setError(email, '이메일을 확인해주세요.');
  } else if (passwordValue != testPassword) {
    setError(password, '비밀번호를 확인해주세요.');
  } else {
    const link = '/folder.html';
    location.href = link;
  }
}


email.addEventListener("focusout", checkEmailValidation);
password.addEventListener("focusout", checkPwdValidation);
btnLogin.addEventListener('click', submit);