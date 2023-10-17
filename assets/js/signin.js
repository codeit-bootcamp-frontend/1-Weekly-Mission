import {
  isEmailValid,
  addErrorTag,
  removeErrorClass,
  removeElementOrNull,
  togglePw
} from './utils.js';

import {
  formEl,
  emailWrap,
  inputEmail,
  pwWrap,
  inputPw,
  ERROR,
  API_URL,
} from './const.js';

/*-----로그인 유효성 검사-----*/

//이메일 유효성 검사
function validateEmailInput(e) {
  removeElementOrNull(emailWrap, '.error');
  removeErrorClass(inputEmail);

  const email = e.target.value;

  if (email == '' || !isEmailValid(email)) {
    let tagMessage = (email == '') ? ERROR.EMAIL.empty : ERROR.EMAIL.invalid;

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
    addErrorTag(inputPw, pwWrap, ERROR.PW.empty)
  }
}

inputPw.addEventListener('focusout', validatePwInput);

//로그인 실행
function submitForm(e) {
  e.preventDefault()

  const email = inputEmail.value
  const password = inputPw.value

  const inputAccount = {
    email,
    password,
  }

  fetch (API_URL.AUTH.signin, {
    method: "POST", 
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(inputAccount)
  })
  .then((response) => {
    if (!response.ok) {
     throw Error("This account is not exist")
    }
  })
  .then(() => {
    formEl.submit()
  })
  .catch ((err) => {
    console.log(err)
    removeElementOrNull(emailWrap, '.error');
    removeErrorClass(inputEmail);
    removeElementOrNull(pwWrap, '.error');
    removeErrorClass(inputPw);
  
    addErrorTag(inputEmail, emailWrap, ERROR.EMAIL.incorrect)
    addErrorTag(inputPw, pwWrap, ERROR.PW.incorrect)
  });
}

formEl.addEventListener('submit', submitForm); //버튼 클릭시 실행

/*-----눈모양 아이콘 클릭에 따른 노출-----*/
const eye = document.querySelector(".input__eye");

eye.addEventListener('click', togglePw)