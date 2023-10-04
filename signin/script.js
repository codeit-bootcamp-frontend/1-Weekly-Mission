const email = document.querySelector('#email');


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

email.addEventListener("focusout", checkEmailValidation);