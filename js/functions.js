import { email, password, passwordVisible, passwordCheckVisible } from './tags.js';
import { checkEmail, checkSignupPassword, checkPasswordMatch, addErrorMessageClass } from './errorMsg.js';

const URL = 'https://bootcamp-api.codeit.kr/api';

const CHECK_EMAIL = '이메일을 확인해주세요.';
const CHECK_PASSWORD = '비밀번호를 확인해주세요.';
const ALREADY_USE_EMAIL = '이미 사용중인 이메일입니다.';

const goToFolderPage = () => (location.href = '../pages/folder.html');

const getToken = async (responseType, tokenType) => {
  const response = await responseType.json();
  const result = await response.data.accessToken;
  localStorage.setItem(tokenType, result);
  goToFolderPage();
};

const toggleEye = event => {
  event.preventDefault();
  const inputId = event.target.previousElementSibling;
  if (event.pointerType === 'mouse') {
    if (inputId.type === 'text') {
      inputId.type = 'password';
    } else {
      inputId.type = 'text';
    }
  }
};

const validationLogin = async () => {
  try {
    const loginContext = {
      email: email.value,
      password: password.value,
    };
    const signIn = await fetch(`${URL}/sign-in`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginContext),
    });
    if (signIn.status === 200) {
      getToken(signIn, 'access-token');
    } else {
      addErrorMessageClass(email, CHECK_EMAIL);
      addErrorMessageClass(password, CHECK_PASSWORD);
      throw new Error('이메일, 비밀번호 체크');
    }
  } catch (error) {
    console.error(error.message);
  }
};

const login = event => {
  event.preventDefault();
  validationLogin();
};

const duplicationEmail = async () => {
  try {
    const emailContext = {
      email: email.value,
    };
    const checkEmail = await fetch(`${URL}/check-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailContext),
    });
    if (checkEmail.status === 200) {
      return;
    } else if (checkEmail.status === 409) {
      addErrorMessageClass(email, ALREADY_USE_EMAIL);
      throw Error('중복된 이메일');
    } else {
      addErrorMessageClass(email, CHECK_EMAIL);
    }
  } catch (error) {
    console.error(error.message);
  }
};

const signUp = async event => {
  try {
    event.preventDefault();
    if (checkEmail() && checkSignupPassword() && checkPasswordMatch()) {
      duplicationEmail(email.value);
    }
    const singUpContext = {
      email: email.value,
      password: password.value,
    };
    const verifiedSignup = await fetch(`${URL}/sign-up`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(singUpContext),
    });
    if (verifiedSignup.status === 200) {
      getToken(verifiedSignup, 'access-token');
    } else {
      addErrorMessageClass(email, CHECK_EMAIL);
      throw new Error('회원가입 실패');
    }
  } catch (error) {
    console.error(error.message);
  }
};

const enterSignup = event => {
  if (event.code === 'Enter') {
    signUp(event);
  }
};

const togglePasswordVisible = event => {
  toggleEye(event);
  passwordVisible.classList.toggle('on');
};

const togglePasswordCheckVisible = event => {
  toggleEye(event);
  passwordCheckVisible.classList.toggle('on');
};

export {
  login,
  signUp,
  duplicationEmail,
  enterSignup,
  togglePasswordCheckVisible,
  togglePasswordVisible,
  goToFolderPage,
};
