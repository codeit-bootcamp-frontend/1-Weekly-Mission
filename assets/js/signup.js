import {
  isEmailValid,
  isPwValid,
  addErrorTag,
  removeErrorClass,
  removeElementOrNull,
  togglePw, } from './utils.js';
  
import {
  formEl,
  emailWrap,
  inputEmail,
  pwWrap,
  inputPw,
  pwConfirmWrap,
  inputPwConfirm,
  ERROR,
  API_URL,
 } from './const.js';

/*-----회원가입 유효성 검사-----*/
//이메일 유효성 검사

function validateEmailInput(email){
  removeElementOrNull(emailWrap, '.error');
  removeErrorClass(inputEmail);

  if (email === ''){
    let tagMessage = ERROR.EMAIL.empty;
    addErrorTag (inputEmail, emailWrap, tagMessage);
    return false;
  } 

  if (isEmailValid(email) === false){
    let tagMessage = ERROR.EMAIL.invalid;
    addErrorTag (inputEmail, emailWrap, tagMessage)
    return false;
  }

  let result = true

  const checkEmail = function () {
    fetch(API_URL.AUTH.checkEmail, {
    method: 'POST',
    headers: {
      "Content-Type" : 'application/json',
    },
    body: JSON.stringify({"email": email}),
    })
    .then((response) => {
      if(!response.ok) {
        result = false;
        throw Error("This email is already taken");
      }
    })
    .catch ((err) => {
      let tagMessage = ERROR.EMAIL.duplicated;
      addErrorTag (inputEmail, emailWrap, tagMessage)
    })
    return result
  }
  return (checkEmail());
}

inputEmail.addEventListener('focusout', (e) => {validateEmailInput(e.target.value)})

//비밀번호 유효성 검사
function validatePwInput(password){
  removeElementOrNull(pwWrap, '.error');
  removeErrorClass(inputPw);
  
  if (password == '' || !isPwValid(password)){
    const emptyPwError = "비밀번호를 입력해주세요."
    const invalidPwError = "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요."
    const tagMessage = (password == '') ? emptyPwError : invalidPwError;

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

  const password = inputPw.value;
  const confirmPassword = inputPwConfirm.value;

  if (confirmPassword == '') {
    return false
  }

  const isPwMatch = password === confirmPassword;

  if (!isPwMatch) {
    const mismatchPwError = "비밀번호가 일치하지 않아요."
    addErrorTag(inputPwConfirm, pwConfirmWrap, mismatchPwError)
    return false
  }

  return true
}

inputPwConfirm.addEventListener('focusout', confirmPw)
inputPw.addEventListener('focusout',confirmPw) //비밀번호 입력칸에서 수정 발생시 재검사

//회원가입 실행
function submitForm(e){
  e.preventDefault()

  const email = inputEmail.value
  const password = inputPw.value

  const inputAccount = {
    "email": email,
    "password": password
  }

  //이메일&비밀번호 검사
  let isValidEmail = validateEmailInput(email)
  let isValidPw = validatePwInput(password)
  let isPwMatch = confirmPw();

  //모두 true면 submit
  if (isValidEmail && isValidPw && isPwMatch) {
    fetch (API_URL.AUTH.signup, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(inputAccount)
    })
    .then((response) => {
      if (!response.ok) {
       throw Error("This account is not available")
      }
    })
    .then(() => {
      formEl.submit()
    })
    .catch ((err) => {
      console.log(err)
    });
  }
}

formEl.addEventListener('submit', submitForm); //버튼 클릭시 실행

//비밀번호 숨기기 보이기
const eyes = document.querySelectorAll(".input__eye");

eyes.forEach((eye) => {
  eye.addEventListener('click', togglePw);
});