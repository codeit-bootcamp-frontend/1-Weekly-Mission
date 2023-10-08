import {
  TEST_USER,
  isEmailValid,
  addErrorTag,
  removeErrorClass,
  removeElementOrNull,
  togglePw } from './utils.js';
  
  const signupForm = document.querySelector('form');
  const emailWrap = document.querySelector('.signup__email__wrap');
  const inputEmail = document.querySelector('.input--email');
  const pwWrap = document.querySelector('.signup__pw__wrap');
  const inputPw = document.querySelector('.input--pw');
  const pwConfirmWrap = document.querySelector('.signup__pw__wrap--confirm')
  const inputPwConfirm = document.querySelector('.input--pw-confirm')
  
/*-----회원가입 유효성 검사-----*/
//이메일 유효성 검사
function validateEmailInput(email){
  removeElementOrNull(emailWrap, '.error');
  removeErrorClass(inputEmail);

  if (email == '' || !isEmailValid(email) || email == TEST_USER.email) {
    
    const emptyEmailError = "이메일을 입력해주세요."
    const invalidEmailError = "올바른 이메일 주소가 아닙니다."
    const takenEmailError = "이미 사용 중인 이메일입니다."
    
    let tagMessage =
    (email == '') 
    ? emptyEmailError 
    : (!isEmailValid(email)) 
    ? invalidEmailError 
    : takenEmailError;
    
    addErrorTag (inputEmail, emailWrap, tagMessage)
    return false; //오류있음
  }
  return true; //오류없음
}

inputEmail.addEventListener('focusout', (e) => {validateEmailInput(e.target.value)})

const PW_REGEXP = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

function isPwValid(password) {
  return PW_REGEXP.test(password);
}

//비밀번호 유효성 검사

function validatePwInput(password){
  removeElementOrNull(pwWrap, '.error');
  removeErrorClass(inputPw);
  
  if (password == '' || !isPwValid(password)){
    const emptyPwError = "비밀번호를 입력해주세요."
    const invalidPwError = "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요."
    let tagMessage = (password == '') ? emptyPwError : invalidPwError;

    addErrorTag(inputPw, pwWrap, tagMessage)
    return false; //오류있음
  }
  return true; //오류없음
}

inputPw.addEventListener('focusout', (e) => validatePwInput(e.target.value));

//비밀번호 확인
function confirmPw(){
  removeElementOrNull(pwConfirmWrap, '.error');
  removeErrorClass(inputPwConfirm);

  let password01 = inputPw.value;
  let password02 = inputPwConfirm.value;

  if (password02 == '') {
    return false
  }

  let isPwMatch = password01 === password02;

  if (!isPwMatch) {
    const mismatchPwError = "비밀번호가 일치하지 않아요."
    addErrorTag(inputPwConfirm, pwConfirmWrap, mismatchPwError)
    return false
  }

  return true
}

inputPwConfirm.addEventListener('focusout', confirmPw)
inputPw.addEventListener('focusout',confirmPw)

//회원가입 실행
function submitForm(e){
  e.preventDefault()

  //이메일 검사
  const email = inputEmail.value;
  let isValidEmail = validateEmailInput(email)

  //비밀번호 검사
  const password01 = inputPw.value;
  let isValidPw = validatePwInput(password01)
  let isPwMatch = confirmPw();

  if (isValidEmail && isValidPw && isPwMatch) {
    signupForm.submit()
  }
}

signupForm.addEventListener('submit', submitForm); //버튼 클릭시 실행

//비밀번호 숨기기 보이기
const eyes = document.querySelectorAll(".input__eye");

for (let i = 0 ; i < eyes.length ; i++) {
  let eye = eyes[i]
  eye.addEventListener('click', togglePw)
}