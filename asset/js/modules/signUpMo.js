import * as signComp from '../components/signComp.js';
import {
  requestSign,
  saveAccessTokenToLocalStorage,
} from '../services/service.js';

const isEmailDuplicated = async (email) => {
  const emailCheck = {
    email,
  };

  const emailDuplicationCheck = await requestSign('check-email', emailCheck);

  return emailDuplicationCheck.status === 409;
};

const validateSignUpInputs = async () => {
  if (
    signComp.isEmail(signComp.signInputs[0].value) &&
    signComp.isPasswordCheck() &&
    signComp.signInputs[1].value !== ''
  ) {
    const sendSignUpInputs = {
      email: signComp.signInputs[0].value,
      password: signComp.signInputs[1].value,
    };

    const postSignUpInputs = await requestSign('sign-up', sendSignUpInputs);

    saveAccessTokenToLocalStorage(postSignUpInputs);

    return postSignUpInputs.status === 200;
  }
};

const handleInputEmailError = async ({ target: { value } }) => {
  if (value === '') {
    return '이메일을 입력해주세요';
  } else if (!signComp.isEmail(value)) {
    return '올바른 이메일 주소가 아닙니다';
  } else if (await isEmailDuplicated(value)) {
    return '이미 사용 중인 이메일입니다';
  } else {
    return '';
  }
};

const handleInputPasswordError = ({ target: { value } }) => {
  if (!signComp.isPassword(value)) {
    return '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요';
  }
};

const handleInputPasswordCheckError = ({ target: { value } }) => {
  if (!signComp.isPasswordCheck()) {
    return '비밀번호가 일치하지 않아요';
  }
};

const handleInputError = async (e) => {
  const errMsgNode = signComp.renderErrorMessageNode();
  const ID = e.target.id;

  if (ID === 'signinEmail') {
    errMsgNode.textContent = await handleInputEmailError(e);
  } else if (ID === 'signinPassword') {
    errMsgNode.textContent = handleInputPasswordError(e);
  } else if (ID === 'signinPasswordCheck') {
    errMsgNode.textContent = handleInputPasswordCheckError(e);
  } else {
    errMsgNode.textContent = '';
  }

  signComp.setErrStyle(errMsgNode, e.target);
};

const errorMessageSignUp = {
  signinEmail: '이메일이 형식에 맞는지 확인해주세요',
  signinPassword: '비밀번호가 영문, 숫자 조합 8자 이상인지 확인해주세요',
  signinPasswordCheck: '비밀번호가 일치하는지 확인해주세요',
};

const setSignUpErr = (line) => {
  const errMsgNode = signComp.renderErrorMessageNode();
  errMsgNode.textContent = errorMessageSignUp[line.id];
  signComp.setErrStyle(errMsgNode, line);
};

const handleSignUpSubmit = async (e) => {
  e.preventDefault();
  if (await validateSignUpInputs()) {
    location.href = '/folder.html';
  } else {
    for (const line of signComp.signFormInputs) {
      signComp.eraseErrStyle(line);
    }

    for (const line of signComp.signInputs) {
      setSignUpErr(line);
    }
  }
};

export { handleInputError, handleSignUpSubmit };
