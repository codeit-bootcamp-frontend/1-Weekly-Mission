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


export {
    TEST_USER,
    formEl,
    emailWrap,
    inputEmail,
    pwWrap,
    inputPw,
    pwConfirmWrap,
    inputPwConfirm,
}