const emailInput = document.querySelector('#email');


const isValidEmail = email => {
  const regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regExp.test(email);
}

const checkEmailValidation = () => {
  const email = emailInput.value.trim();
  const inputControl = document.querySelector('.input-control');
  const errorMessage = inputControl.querySelector('.error');

  if (email === '') {
    errorMessage.textContent = '이메일을 입력해주세요.';
    inputControl.classList.add('error');
  } else if (!isValidEmail(email)) {
    errorMessage.textContent = '올바른 이메일 주소가 아닙니다.';
    inputControl.classList.add('error');
  } else {
    errorMessage.textContent = '';
    inputControl.classList.remove('error');
  }
};

emailInput.addEventListener("focusout", checkEmailValidation);
