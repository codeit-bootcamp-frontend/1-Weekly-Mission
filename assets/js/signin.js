import {
  isEmailValid,
  addErrorTag,
  removeErrorClass,
  removeElementOrNull} from './utils.js';

const signinForm = document.querySelector('form');
const emailWrap = document.querySelector('.signin__email__wrap');
const inputEmail = document.querySelector('.input--email');
const pwWrap = document.querySelector('.signin__pw__wrap');
const inputPw = document.querySelector('.input--pw');

/*-----로그인 유효성 검사-----*/

//이메일 유효성 검사
function validateEmailInput(e){
  removeElementOrNull(emailWrap, '.error');
  removeErrorClass(inputEmail);

  const email = e.target.value;

  if (email == '' || !isEmailValid(email)) {
    
    const emptyEmailError = "이메일을 입력해주세요."
    const invalidEmailError = "올바른 이메일 주소가 아닙니다."
    let tagMessage = (email == '') ? emptyEmailError : invalidEmailError ;
    
    addErrorTag (inputEmail, emailWrap, tagMessage)
    return;
  }
}

inputEmail.addEventListener('focusout', validateEmailInput);


//비밀번호 유효성 검사
function validatePwInput(e){
  removeElementOrNull(pwWrap, '.error');
  removeErrorClass(inputPw);

  const password = e.target.value;
  
  if (password == ''){
    const emptyPwError = "비밀번호를 입력해주세요."
    addErrorTag(inputPw, pwWrap, emptyPwError)
  }
}

inputPw.addEventListener('focusout', validatePwInput);


//테스트 계정
const TEST_USER = {
  email: "test@codeit.com",
  pw: "codeit101"
}

//로그인 시도
function submitForm(e){
  e.preventDefault()

  const email = inputEmail.value;
  const password = inputPw.value;

  if (email === TEST_USER.email && password === TEST_USER.pw){
    signinForm.submit()
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

function isEnter(key){
  if (key.keycode == 13) {submitForm} ;
}

signinForm.addEventListener('submit', submitForm); //버튼 클릭시 실행
signinForm.addEventListener('keypress', isEnter) //Enter시 실행

/*-----눈모양 아이콘 클릭에 따른 노출-----*/
const eye = document.querySelector(".input__eye");
let isShowPw = false

function togglePw(e){
  const pwIcon = e.target

  isShowPw = !isShowPw

  const pwInputType = (isShowPw) ? 'text' : 'password';
  inputPw.setAttribute('type', pwInputType)

  const pwIconPath = (isShowPw) ? "assets/img/icon-eye-on.svg" : "assets/img/icon-eye-off.svg";
  pwIcon.setAttribute('src', pwIconPath)
  
  const pwLetterSpacing = (isShowPw) ? '0rem' : '0.375rem';
  inputPw.style.letterSpacing = pwLetterSpacing

  const pwIconAltText = (isShowPw) ? "show password" : "hide password";
  pwIcon.setAttribute('alt', pwIconAltText)
}

eye.addEventListener('click', togglePw)
