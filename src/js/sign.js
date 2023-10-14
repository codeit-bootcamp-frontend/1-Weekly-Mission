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

const VERIFY_EAMIL = 'test@codeit.com';
const VERIFY_PW = 'codeit101';
const SPAN = 'span';

import { createErrorMsg, deleteErrorMsg } from './error-msg.js';
import { verifyEmail, checkPw } from './check.js';
import { getResponse } from './sign-api.js';

//이메일 오류 함수
function emailErrorMsg(e) {
  const newMsg = emailInput.value;
  const parentDiv = e.target.parentElement;
  if (!newMsg && !document.querySelector('.emptyEmailErrorSpan')) {
    //이메일칸 빈칸일때 경고창
    deleteErrorMsg('.errorEmailMsg', '.wrongEmailSpan');
    createErrorMsg(SPAN,'emptyEmailSpan',emailDiv,emailInput,'이메일을 입력해주세요.','emptyEmailErrorSpan','errorEmailMsg');
  } else if (newMsg && verifyEmail(newMsg) !== true) {
    //이메일칸 내용은 있지만 이메일 형식 안맞을 때
    if (parentDiv.children.length !== 2) {parentDiv.lastElementChild.remove();}
    createErrorMsg(SPAN,'noEmailSpan',emailDiv,emailInput,'올바른 이메일 주소가 아닙니다.','noEmailErrorSpan','errorEmailMsg');
  } else if (newMsg && verifyEmail(newMsg) == true) {
    //이메일칸 내용은 있고 이메일 형식 맞을 때
    if (parentDiv.children.length !== 2) {parentDiv.lastElementChild.remove();}
    //signup 페이지에서 이메일 형식 맞지만 이미 존재하는 이메일일 경우
    if (newMsg == VERIFY_EAMIL && pwSignupDiv1) {
      createErrorMsg(SPAN,'existEmailSpan',emailDiv,emailInput,'이미 존재하는 이메일입니다.','existEmailErrorSpan','errorEmailMsg');
    } else {
      //signup 페이지에서 이메일 형식 맞고 이미 존재하지도 않을 경우
      emailInput.style.border = '1px solid #ccd5e3';
    }
  }
}

//비밀번호 오류 함수
function pwErrorMsg(e) {
  const input = e.target;
  const newMsg = input.value;
  const pwDiv = input.parentElement;
  if (!newMsg && input.parentElement.children.length == 2) {
    //오류메세지 없고 빈칸일때
    createErrorMsg(SPAN,'emptyPwSpan',pwDiv,input,'비밀번호를 입력해주세요.','pwErrorSpan','Msg');
  } else if (!newMsg && input.parentElement.children.length == 3) {
    //오류메세지 있고 빈칸일때
    pwDiv.lastElementChild.remove();
    createErrorMsg(SPAN,'emptyPwSpan',pwDiv,input,'비밀번호를 입력해주세요.','pwErrorSpan');
  } else if (newMsg) {
    //비밀번호칸 입력됐을 때
    if (pwDiv.children.length !== 2) {pwDiv.lastElementChild.remove();}
    input.style.border = '1px solid #ccd5e3';
    //signup 에서 비밀번호 입력했을 경우
    if (pwSignupDiv1) {
      //8글자 미만일 경우
      if (input.value.length < 8) {
        createErrorMsg(SPAN,'wrongLengthPwSpan',pwDiv,input,'비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.','pwErrorSpan');
        //8글자 이상, 비밀번호 형식 안맞을 경우
      } else {
        if (!checkPw(newMsg)) {
          if (pwDiv.children.length !== 2) {pwDiv.lastElementChild.remove();}
          createErrorMsg(SPAN,'wrongLengthPwSpan',pwDiv,input,'비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.','pwErrorSpan');
        }
        //8글자 이상, 비밀번호칸 두개 서로 일치하지 않을 경우
        if (pwSignupInput2.value &&pwSignupInput1.value !== pwSignupInput2.value) {
          if (pwSignupDiv2.children.length !== 2) {pwSignupDiv2.lastElementChild.remove();}
          createErrorMsg(SPAN,'wrongLengthPwSpan',pwSignupDiv2,pwSignupInput2,'비밀번호가 일치하지 않습니다.','pwDisMatchSpan');
        }
      }
    }
  }
}

//비밀번호 표시
function viewPassword(e) {
  const input = e.target.parentElement.firstElementChild;
  if (input.type == 'password') {
    input.setAttribute('type', 'text');
    e.target.setAttribute('src', './img/eye-on.svg');
  } else {
    input.setAttribute('type', 'password');
    e.target.setAttribute('src', './img/eye-off.svg');
  }
}

//로그인 / 회원가입 버튼 눌렀을 때 이메일 비밀번호 일치 확인
function loginCheck(e) {
  const isValidSignin = !pwSignupDiv1 &&emailInput.value === VERIFY_EAMIL &&pwInput.value === VERIFY_PW;
  const isValidSignup = pwSignupDiv1 && emailDiv.children.length == 2 && pwSignupDiv1.children.length == 2 &&
  pwSignupDiv2.children.length == 2 && pwSignupInput1.value &&pwSignupInput2.value &&emailInput.value;
  //이메일 비밀번호 일치할때
  if (isValidSignin) {
    location.href = './folder.html';
  } else if (isValidSignup) {
    // console.log('오ㅓ류없었냐ㅑㅑㅑㅑㅑㅑㅑㅑ');
    location.href = './folder.html';
  } else if (pwSignupDiv1) {
    //이메일 비밀번호 불일치일때
    // console.log('z번');
    //아래는 오류가 있거나 비어있는 칸이 있으면 확인해 달라 오류 뜨게하는 코드
    //
    //이메일칸에 내용이 없거나 오류메세지가 있는 경우
    if (!emailInput.value || emailDiv.children.length !== 2) {
      deleteErrorMsg('.errorEmailMsg', '.wrongEmailSpan');
      createErrorMsg(SPAN,'noEmailSpan',emailDiv,emailInput,'이메일을 확인해 주세요.','wrongEmailSpan','wrongMsg');
    }
    //비밀번호칸에 내용이 없거나 오류메세지가 있는 경우
    if (!pwSignupInput1.value || pwSignupDiv1.children.length !== 2) {
      if (pwSignupDiv1.children.length !== 2) {pwSignupDiv1.lastElementChild.remove();}
      createErrorMsg(SPAN,'noPwSignupSpan1',pwSignupDiv1,pwSignupInput1,'비밀번호를 확인해 주세요.','wrongPwSignupErrorSpan1','wrongMsg');
    }
    //비밀번호 확인 칸에 내용이 없거나 오류메세지가 있는 경우
    if (!pwSignupInput2.value || pwSignupDiv2.children.length !== 2) {
      if (pwSignupDiv2.children.length !== 2) {pwSignupDiv2.lastElementChild.remove();}
      createErrorMsg(SPAN,'noPwSignupSpan2',pwSignupDiv2,pwSignupInput2,'비밀번호를 확인해 주세요.','wrongPwSignupErrorSpan1','wrongMsg'
      );
    }
  } else if (!pwSignupDiv1) {
    //signin 페이지
    //이메일 오류창
    deleteErrorMsg('.wrongEmailSpan', '.errorEmailMsg');
    createErrorMsg(SPAN,'noEmailSpan',emailDiv,emailInput,'이메일을 확인해 주세요.','wrongEmailSpan','wrongMsg');
    // console.log('2번');
    //비밀번호 오류창
    if (pwDiv.children.length !== 2) {pwDiv.lastElementChild.remove();}
    createErrorMsg(SPAN,'noPwSpan',pwDiv,pwInput,'비밀번호를 확인해 주세요.','wrongPwErrorSpan','wrongMsg');
  }
}

//Event 부분
emailInput.addEventListener('focusout', emailErrorMsg);
//signin 페이지
if (pwInput) {
  pwInput.addEventListener('focusout', pwErrorMsg);
  eye.addEventListener('click', viewPassword);
}
//signup 페이지
if (pwSignupInput1) {
  pwSignupInput1.addEventListener('focusout', pwErrorMsg);
  pwSignupInput2.addEventListener('focusout', pwErrorMsg);
  eye_signup1.addEventListener('click', viewPassword);
  eye_signup2.addEventListener('click', viewPassword);
}
//로그인 회원가입 버튼
document.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    emailInput.blur();
    if(pwInput){pwInput.blur();}
    else{pwSignupInput1.blur();pwSignupInput2.blur();}
    loginCheck();
    getResponse();
  }
});
login.addEventListener('click', loginCheck);
