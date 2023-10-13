import {
  emailInput,
  passwordInput,
  passwordConfirmInput,
  form,
  eyeIcons,
  emailRegex,
  passwordRegex,
  // email as existingEmail,
  editErrorStatus,
  toggleEyeButton
} from '/js/utils.js';

const checkDuplicationEmail = async () => {
  try {
    const response = await fetch('https://bootcamp-api.codeit.kr/api/check-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: emailInput.value,
      }),
    });

    if (response.status === 409) {
      editErrorStatus(emailInput, '이미 사용 중인 이메일입니다.');
    } else {
      editErrorStatus(emailInput);
    }
  } catch (error) {
    console.log(error);
  }
}

const checkEmail = (email) => {
  if (!email) {
    editErrorStatus(emailInput, '이메일을 입력해주세요.');
  } else if (!emailRegex.test(email)) {
    editErrorStatus(emailInput, '올바른 이메일 주소가 아닙니다.');
  } else {
    checkDuplicationEmail();
  }
};

const checkPassword = (password) => {
  if (!passwordRegex.test(password)) {
    editErrorStatus(passwordInput, '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.');
  } else {
    editErrorStatus(passwordInput);
  }
};

const checkPasswordConfirm = (password) => {
  if (password !== passwordInput.value) {
    editErrorStatus(passwordConfirmInput, '비밀번호가 일치하지 않아요.');
  } else {
    editErrorStatus(passwordConfirmInput);
  }
};

const trySignUp = (e) => {
  e.preventDefault();
  const email = emailInput.value;
  const password = passwordInput.value;
  const passwordConfirm = passwordConfirmInput.value;

  if (emailRegex.test(emailInput.value) && passwordRegex.test(passwordInput.value) && passwordConfirmInput.value === passwordInput.value) {
    location.href = '/html/folder.html';
  } else {
    checkEmail(email);
    checkPassword(password);
    checkPasswordConfirm(passwordConfirm);
  }
};

emailInput.addEventListener('focusout', (e) => checkEmail(e.target.value));
passwordInput.addEventListener('focusout', (e) => checkPassword(e.target.value));
passwordConfirmInput.addEventListener('focusout', (e) => checkPasswordConfirm(e.target.value));
form.addEventListener('submit', trySignUp);
for (let el of eyeIcons) {
  el.addEventListener('click', toggleEyeButton);
}