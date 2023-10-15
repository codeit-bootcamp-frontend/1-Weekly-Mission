const emailDiv = document.querySelector('.email_div'); //이메일 상위 div
const pwDiv = document.querySelector('.signin_pw_div'); //비밀번호 상위 div
const emailInput = document.querySelector('.email_input'); //이메일 input
const pwInput = document.querySelector('.signin_pw_input'); //비밀번호 input
const pwSignupDiv1 = document.querySelector('.signup_pw_div1'); //signup 비밀번호 상위 div1
const pwSignupDiv2 = document.querySelector('.signup_pw_div2'); //signup 비밀번호 상위 div2
const pwSignupInput1 = document.querySelector('.signup_pw_input1'); //signup 비밀번호 input1
const pwSignupInput2 = document.querySelector('.signup_pw_input2'); //signup 비밀번호 input2
const eye = document.querySelector('.signin_eye'); //signin 눈
const eye_signup1 = document.querySelector('.signup_eye1'); //signup 눈1
const eye_signup2 = document.querySelector('.signup_eye2'); //signup 눈2
const login = document.querySelector('.submit_button'); //로그인,회원가입 버튼
const signupPage = pwSignupDiv1;
const signinPage = !pwSignupDiv1;

const SPAN = 'span';

import { createErrorMsg } from './error-msg.js';
import { verifyEmail, checkPw } from './validation-form-check.js';
import { getSigninResponse, getSignupResponse, getSignupExistEmail } from './sign-api.js';
import { EMPTY_EMAIL,NO_VALID_EMAIL,EXIST_EMAIL,CHECK_EMAIL,EMPTY_PW,NO_VALID_PW,NO_SAME_PW,CHECK_PW } from './error-msg.js';
import { viewPassword } from './view-pw.js';

//이메일 오류 함수
function emailErrorMsg(e) {
  const newMsg = emailInput.value;
  const parentDiv = e.target.parentElement;
  const emailNoMsgNoErrMsg = !newMsg && parentDiv.children.length!==2;
  const emailYesMsgNoValid = newMsg && !verifyEmail(newMsg);
  const emailYesMsgYesValid = newMsg && verifyEmail(newMsg);
  if (emailNoMsgNoErrMsg) {
    return createErrorMsg(parentDiv,SPAN,'emptyEmailSpan',emailDiv, emailInput, EMPTY_EMAIL,'emptyEmailErrorSpan','errorEmailMsg');
  }
  if (emailYesMsgNoValid) {
    return createErrorMsg(parentDiv,SPAN,'noEmailSpan',emailDiv, emailInput, NO_VALID_EMAIL,'noEmailErrorSpan','errorEmailMsg');
  }
  if (emailYesMsgYesValid) {
    //signup 페이지에서 이메일 형식 맞지만 이미 존재하는 이메일일 경우
    const promise = getSignupExistEmail(emailInput.value);
    const getData = () => {
      promise.then((data) => {
        console.log(data);
        if (signupPage&&data!==200) {
          createErrorMsg(parentDiv, SPAN,'existEmailSpan', emailDiv, emailInput, EXIST_EMAIL,'existEmailErrorSpan','errorEmailMsg');
        } 
      });
    }
    getData();
    //signup 페이지에서 이메일 형식 맞고 이미 존재하지도 않을 경우
    if (parentDiv.children.length !== 2) {parentDiv.lastElementChild.remove()}
    emailInput.style.border = '1px solid #ccd5e3';
    
  }
}

//비밀번호 오류 함수
function pwErrorMsg(e) {
  const input = e.target;
  const newMsg = input.value;
  const tempPwDiv = input.parentElement;
  const SigninPwIsMsg = newMsg&&!signupPage;
  const SignupPwIsMsgNoLength = newMsg&&signupPage&&input.value.length < 8;
  const SignupPwIsMsgYesLength = newMsg&&signupPage&&input.value.length >= 8;
  if (!newMsg) {
    return createErrorMsg(tempPwDiv,SPAN,'emptyPwSpan',tempPwDiv,input, EMPTY_PW,'pwErrorSpan','Msg');
  }
  if (SigninPwIsMsg) {
    if(tempPwDiv.children.length !== 2) {tempPwDiv.lastElementChild.remove()}
    return input.style.border = '1px solid #ccd5e3';
  }
  if (SignupPwIsMsgNoLength) {
    return createErrorMsg(tempPwDiv,SPAN,'wrongLengthPwSpan',tempPwDiv,input, NO_VALID_PW,'pwErrorSpan');
  } 
  if(SignupPwIsMsgYesLength&&!checkPw(newMsg)) {
    console.log('wrong')
    return createErrorMsg(tempPwDiv,SPAN,'wrongLengthPwSpan',tempPwDiv,input, NO_VALID_PW,'pwErrorSpan');
  }
  if (SignupPwIsMsgYesLength&&pwSignupInput2.value &&pwSignupInput1.value !== pwSignupInput2.value) {
    console.log('no')
    return createErrorMsg(pwSignupDiv2,SPAN,'wrongLengthPwSpan',pwSignupDiv2,pwSignupInput2, NO_SAME_PW,'pwDisMatchSpan');
  }
  else{
    if(tempPwDiv.children.length !== 2) {tempPwDiv.lastElementChild.remove()}
    return input.style.border = '1px solid #ccd5e3';
  }
}   

//로그인 / 회원가입 버튼 눌렀을 때 이메일 비밀번호 일치 확인
function loginCheck(e) {
  const isValidSignin = signinPage &&emailInput.value&&pwInput.value;
  const isValidSignup = signupPage && emailDiv.children.length == 2 && pwSignupDiv1.children.length == 2 &&
                        pwSignupDiv2.children.length == 2 && pwSignupInput1.value &&pwSignupInput2.value &&emailInput.value;
  //이메일 비밀번호 일치할때
  if(signinPage){
    const promise = getSigninResponse(emailInput.value,pwInput.value);
    const getData = () => {
    promise.then((data) => {
      if(isValidSignin&&data[0]==200){
        window.localStorage.setItem('signinToken',data[1]);
        location.href = './folder.html';
      }
      else{
        createErrorMsg(emailDiv, SPAN,'noEmailSpan',emailDiv,emailInput, CHECK_EMAIL,'wrongEmailSpan','wrongMsg');
        createErrorMsg(pwDiv, SPAN,'noPwSpan',pwDiv,pwInput, CHECK_PW,'wrongPwErrorSpan','wrongMsg');
      }
    });
  };
  getData();
  }
  //signup 페이지
  if(signupPage){
    const promise = getSignupResponse(emailInput.value,pwSignupInput1.value);
    const getData = () => {
      promise.then((data) => {
        console.log(data)
        if (isValidSignup&&data[0]==200) {
          window.localStorage.setItem('signupToken',data[1]);
          location.href = './folder.html';
        }
        if(isValidSignup&&data[0]!==200){
          createErrorMsg(emailDiv, SPAN,'existEmailSpan', emailDiv, emailInput, EXIST_EMAIL,'existEmailErrorSpan','errorEmailMsg');
        }
      }
      )};
    getData();
    //오류가 있거나 비어있는 칸이 있으면 확인해 달라 오류 뜨게하는 코드
    if (!emailInput.value || emailDiv.children.length !== 2) {
      createErrorMsg(emailDiv,SPAN,'noEmailSpan',emailDiv,emailInput, CHECK_EMAIL,'wrongEmailSpan','wrongMsg');
    }
    if (!pwSignupInput1.value || pwSignupDiv1.children.length !== 2) {
      createErrorMsg(pwSignupDiv1,SPAN,'noPwSignupSpan1',pwSignupDiv1,pwSignupInput1, CHECK_PW,'wrongPwSignupErrorSpan1','wrongMsg');
    }
    if (!pwSignupInput2.value || pwSignupDiv2.children.length !== 2) {
      createErrorMsg(pwSignupDiv2, SPAN,'noPwSignupSpan2',pwSignupDiv2,pwSignupInput2, CHECK_PW,'wrongPwSignupErrorSpan1','wrongMsg'
      );
    }
  }
}

//Email Password Event
emailInput.addEventListener('focusout', emailErrorMsg);
if (signinPage) {
  pwInput.addEventListener('focusout', pwErrorMsg);
  eye.addEventListener('click', viewPassword);
}
if (signupPage) {
  pwSignupInput1.addEventListener('focusout', pwErrorMsg);
  pwSignupInput2.addEventListener('focusout', pwErrorMsg);
  eye_signup1.addEventListener('click', viewPassword);
  eye_signup2.addEventListener('click', viewPassword);
}
//로그인 회원가입 Evnet
document.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    if(signupPage){
      emailInput.blur();
      pwSignupInput1.blur();
      pwSignupInput2.blur();
    }
    loginCheck();
  }
});
login.addEventListener('click', loginCheck);
