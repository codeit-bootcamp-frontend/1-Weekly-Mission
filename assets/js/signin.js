import {
  isEmailValid,
  addErrorTag,
  removeErrorClass,
  removeElementOrNull,
  togglePw
} from './utils.js';

import {
  TEST_USER,
  formEl,
  emailWrap,
  inputEmail,
  pwWrap,
  inputPw
} from './const.js';

/*-----로그인 유효성 검사-----*/

//이메일 유효성 검사
function validateEmailInput(e) {
  removeElementOrNull(emailWrap, '.error');
  removeErrorClass(inputEmail);

  const email = e.target.value;

  if (email == '' || !isEmailValid(email)) {

    const emptyEmailError = "이메일을 입력해주세요."
    const invalidEmailError = "올바른 이메일 주소가 아닙니다."
    let tagMessage = (email == '') ? emptyEmailError : invalidEmailError;

    addErrorTag(inputEmail, emailWrap, tagMessage)
    return;
  }
}

inputEmail.addEventListener('focusout', validateEmailInput);


//비밀번호 유효성 검사
function validatePwInput(e) {
  removeElementOrNull(pwWrap, '.error');
  removeErrorClass(inputPw);

  const password = e.target.value;

  if (password == '') {
    const emptyPwError = "비밀번호를 입력해주세요."
    addErrorTag(inputPw, pwWrap, emptyPwError)
  }
}

inputPw.addEventListener('focusout', validatePwInput);

//로그인 실행
function submitForm(e) {
  e.preventDefault()

  const email = inputEmail.value;
  const password = inputPw.value;

  if (email === TEST_USER.email && password === TEST_USER.pw) {
    formEl.submit()
    return;
  }

  removeElementOrNull(emailWrap, '.error');
  removeErrorClass(inputEmail);
  removeElementOrNull(pwWrap, '.error');
  removeErrorClass(inputPw);

  const incorrectEmailError = "이메일을 확인해주세요."
  const incorrectPwError = "비밀번호를 확인해주세요."

  addErrorTag(inputEmail, emailWrap, incorrectEmailError)
  addErrorTag(inputPw, pwWrap, incorrectPwError)
}

formEl.addEventListener('submit', submitForm); //버튼 클릭시 실행

/*-----눈모양 아이콘 클릭에 따른 노출-----*/
const eye = document.querySelector(".input__eye");

eye.addEventListener('click', togglePw)