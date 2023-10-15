import * as signComp from '../components/signComp.js';
import {
  requestSign,
  saveAccessTokenToLocalStorage,
} from '../services/service.js';

const errorMessageLogin = {
  signinEmail: '이메일을 확인해주세요',
  signinPassword: '비밀번호를 확인해주세요',
};

const handleInputEmailError = ({ target: { value } }) => {
  if (value === '') {
    return '이메일을 입력해주세요';
  } else if (!signComp.isEmail(value)) {
    return '올바른 이메일 주소가 아닙니다';
  } else {
    return '';
  }
};

const handleInputPasswordError = ({ target: { value } }) => {
  if (value === '') {
    return '비밀번호를 입력해주세요';
  }
};

const validateLoginInputs = async (email, password) => {
  const newMember = {
    email,
    password,
  };
  const validatePost = await requestSign('sign-in', newMember);
  console.log(validatePost);
  try {
    saveAccessTokenToLocalStorage(validatePost);
  } catch (err) {
    console.error(err);
  }

  return validatePost.status === 200;
};

const setLoginErr = (line) => {
  const errMsgNode = signComp.renderErrorMessageNode();
  errMsgNode.textContent = errorMessageLogin[line.id];
  signComp.setErrStyle(errMsgNode, line);
};

const handleInputError = (e) => {
  const errMsgNode = signComp.renderErrorMessageNode();
  const ID = e.target.id;

  if (ID === 'signinEmail') {
    errMsgNode.textContent = handleInputEmailError(e);
  } else if (ID === 'signinPassword') {
    errMsgNode.textContent = handleInputPasswordError(e);
  } else {
    errMsgNode.textContent = '';
  }

  signComp.setErrStyle(errMsgNode, e.target);
};

const handleLoginSubmit = async (e) => {
  const email = signComp.signInputs[0].value;
  const password = signComp.signInputs[1].value;

  e.preventDefault();
  if (await validateLoginInputs(email, password)) {
    location.href = '/folder.html';
  } else {
    for (const line of signComp.signFormInputs) {
      signComp.eraseErrStyle(line);
    }

    for (const line of signComp.signInputs) {
      setLoginErr(line);
    }
  }
};

export { handleInputError, handleLoginSubmit };
