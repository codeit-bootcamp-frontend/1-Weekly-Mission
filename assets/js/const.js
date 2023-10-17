//TEST USER
const TEST_USER = {
    email: "test@codeit.com",
    pw: "sprint101"
  }

//Element
const formEl = document.querySelector('form');
const emailWrap = document.querySelector('.sign__email__wrap');
const inputEmail = document.querySelector('.input--email');
const pwWrap = document.querySelector('.sign__pw__wrap');
const inputPw = document.querySelector('.input--pw');
const pwConfirmWrap = document.querySelector('.sign__pw__wrap--confirm')
const inputPwConfirm = document.querySelector('.input--pw-confirm')

//Error Message
/*const incorrectEmailError = "이메일을 확인해주세요."
const incorrectPwError = "비밀번호를 확인해주세요."
const emptyEmailError = "이메일을 입력해주세요."
const invalidEmailError = "올바른 이메일 주소가 아닙니다."
const emptyPwError = "비밀번호를 입력해주세요."*/

const ERROR = {
  EMAIL: {
    incorrect: "이메일을 확인해주세요.", //ERROR.EMAIL.incorrect
    empty: "이메일을 입력해주세요.", //ERROR.EMAIL.empty
    invalid: "올바른 이메일 주소가 아닙니다.", //ERROR.EMAIL.invalid
  },
  PW: {
    incorrect: "비밀번호를 확인해주세요.", //ERROR.PW.incorrect
    empty: "비밀번호를 입력해주세요.", //ERROR.PW.empty
  }
}

//API
const API_URL = {
  AUTH: {
    signin: "https://bootcamp-api.codeit.kr/api/sign-in",
    checkEmail: "https://bootcamp-api.codeit.kr/api/check-email",
    signup: "https://bootcamp-api.codeit.kr/api/sign-up",
  }
}


export {
    TEST_USER,
    formEl,
    emailWrap,
    inputEmail,
    pwWrap,
    inputPw,
    pwConfirmWrap,
    inputPwConfirm,
    ERROR,
    API_URL,
}