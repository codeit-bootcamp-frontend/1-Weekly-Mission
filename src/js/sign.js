const emailDiv = document.querySelector('.content1_div2_div1'); //이메일 상위 div
const pwDiv = document.querySelector('.content1_div2_div2_div-input'); //비밀번호 상위 div
const pwSignupDiv1 = document.querySelector('.signup_pw1'); //signup 비밀번호 상위 div1
const pwSignupDiv2 = document.querySelector('.signup_pw2'); //signup 비밀번호 상위 div2
const emailInput = document.querySelector('.content1_div2_div1_input'); //이메일 input
const pwInput = document.querySelector('.content1_div2_div2_input'); //비밀번호 input
const pwSignupInput1 = document.querySelector('.signup_pw_input1'); //signup 비밀번호 input1
const pwSignupInput2 = document.querySelector('.signup_pw_input2'); //signup 비밀번호 input2
const eye = document.querySelector('.content1_div2_div2_img'); //signin 눈
const eye_signup1 = document.querySelector('.content1_div2_div2_img_signup1'); //signup 눈1
const eye_signup2 = document.querySelector('.content1_div2_div2_img_signup2'); //signup 눈2
const login = document.querySelector('.content1_div3_div');

const VERIFYEAMIL = 'test@codeit.com';
const VERIFYPW = 'codeit101';

import { msgCreate, msgDelete } from './error-msg.js';

//이메일 오류 함수
function emailErrorMsg(e) {
  const newMsg = emailInput.value;
  const parentDiv = e.target.parentElement;
  if (!newMsg && !document.querySelector('.emptyEmailErrorSpan')) {
    //이메일칸 빈칸일때 경고창
    // parentDiv.lastElementChild.remove();
    msgDelete('.errorEmailMsg', '.wrongEmailSpan');
    const emptyEmailspan = document.createElement('span');
    emptyEmailspan.classList.add('emptyEmailErrorSpan', 'errorEmailMsg');
    msgCreate(emptyEmailspan, emailDiv, emailInput, '이메일을 입력해주세요.');
  } else if (newMsg && verify(newMsg) !== true) {
    //이메일칸 내용은 있지만 이메일 형식 안맞을 때
    if (parentDiv.children.length !== 2) parentDiv.lastElementChild.remove();
    // msgDelete('.errorEmailMsg', '.wrongEmailSpan');
    //이메일 형식 안맞을때의 경고창
    const noEmailspan = document.createElement('span');
    noEmailspan.classList.add('noEmailErrorSpan', 'errorEmailMsg');
    msgCreate(
      noEmailspan,
      emailDiv,
      emailInput,
      '올바른 이메일 주소가 아닙니다.'
    );
  } else if (newMsg && verify(newMsg) == true) {
    //그 외일때 span 태그 삭제
    if (parentDiv.children.length !== 2) parentDiv.lastElementChild.remove();
    // msgDelete('.errorEmailMsg', '.wrongEmailSpan');
    if (newMsg == VERIFYEAMIL) {
      const existEmailspan = document.createElement('span');
      existEmailspan.classList.add('existEmailErrorSpan', 'errorEmailMsg');
      msgCreate(
        existEmailspan,
        emailDiv,
        emailInput,
        '이미 존재하는 이메일입니다.'
      );
    } else {
      emailInput.style.border = '1px solid #ccd5e3';
    }
  }
}

//비밀번호 오류 함수
function pwErrorMsg(e) {
  const newMsg = e.target.value;
  const pwDiv = e.target.parentElement;
  if (!newMsg && e.target.parentElement.children.length == 2) {
    //오류메세지 없고 빈칸일때
    // msgDelete('pwErrorSpan');
    const emptyPwSpan = document.createElement('span');
    emptyPwSpan.classList.add('pwErrorSpan', 'Msg');
    msgCreate(emptyPwSpan, pwDiv, e.target, '비밀번호를 입력해주세요.');
  } else if (!newMsg && e.target.parentElement.children.length == 3) {
    //오류메세지 있고 빈칸일때
    pwDiv.lastElementChild.remove();
    // msgDelete('pwErrorSpan', '.wrongPwErrorSpan', '.wrongPwSignupErrorSpan');
    const emptyPwSpan = document.createElement('span');
    emptyPwSpan.classList.add('pwErrorSpan', 'Msg');
    msgCreate(emptyPwSpan, pwDiv, e.target, '비밀번호를 입력해주세요.');
  } else if (newMsg) {
    //비밀번호칸 입력됐을 때
    console.log(pwDiv.children.length);
    if (pwDiv.children.length !== 2) pwDiv.lastElementChild.remove();
    // msgDelete('.pwErrorSpan', '.wrongPwErrorSpan', '.wrongPwSignupErrorSpan');
    e.target.style.border = '1px solid #ccd5e3';
  }
}

//비밀번호 표시
function viewPassword(e) {
  const input = e.target.parentElement.firstElementChild;
  console.log(e.target);
  if (input.type == 'password') {
    input.setAttribute('type', 'text');
    e.target.setAttribute('src', './img/eye-on.svg');
  } else {
    input.setAttribute('type', 'password');
    e.target.setAttribute('src', './img/eye-off.svg');
  }
}

//이메일 비밀번호 일치 확인
function loginCheck(e) {
  //이메일 비밀번호 일치할때
  if (emailInput.value === VERIFYEAMIL && pwInput.value === VERIFYPW) {
    location.replace('./folder.html');
  } else if (
    pwSignupDiv1 &&
    emailDiv.children.length == 2 &&
    pwSignupDiv1.children.length == 2 &&
    pwSignupDiv2.children.length == 2 &&
    pwSignupInput1.value &&
    pwSignupInput2.value &&
    emailInput.value
  ) {
    console.log('오ㅓ류없었냐ㅑㅑㅑㅑㅑㅑㅑㅑ');
  } else {
    //이메일 비밀번호 불일치일때
    console.log('z번');
    msgDelete('.errorEmailMsg', '.wrongEmailSpan');
    const wrongEmailSpan = document.querySelector('.wrongEmailSpan');
    const wrongPwErrorSpan = document.querySelector('.wrongPwErrorSpan');
    if (!wrongEmailSpan || !wrongPwErrorSpan) {
      //이메일 오류
      console.log('0번');
      msgDelete(
        '.wrongEmailSpan',
        '.wrongPwErrorSpan',
        '.pwErrorSpan',
        '.wrongPwSignupErrorSpan'
      );
      const noEmailspan = document.createElement('span');
      noEmailspan.classList.add('wrongEmailSpan', 'wrongMsg');
      msgCreate(noEmailspan, emailDiv, emailInput, '이메일을 확인해 주세요.');
      //비밀번호 오류
      //signup 페이지
      const wrongPwSignupErrorSpan = document.querySelector(
        '.wrongPwSignupErrorSpan'
      );
      if (pwSignupDiv1 && !wrongPwSignupErrorSpan) {
        console.log('1번');
        msgDelete('.wrongPwErrorSpan', '.pwErrorSpan');
        const noPwSignupspan1 = document.createElement('span');
        noPwSignupspan1.classList.add('wrongPwSignupErrorSpan', 'wrongMsg');
        msgCreate(
          noPwSignupspan1,
          pwSignupDiv1,
          pwSignupInput1,
          '비밀번호를 확인해 주세요.'
        );
        const noPwSignupspan2 = document.createElement('span');
        noPwSignupspan2.classList.add('wrongPwSignupErrorSpan', 'wrongMsg');
        msgCreate(
          noPwSignupspan2,
          pwSignupDiv2,
          pwSignupInput2,
          '비밀번호를 확인해 주세요.'
        );
      } else {
        console.log('2번');
        //signin 페이지
        if (!pwSignupDiv2) {
          const noPwspan = document.createElement('span');
          noPwspan.classList.add('wrongPwErrorSpan', 'wrongMsg');
          msgCreate(noPwspan, pwDiv, pwInput, '비밀번호를 확인해 주세요.');
        }
      }
    }
  }
}

//이메일 형식 판단 함수
function verify(text) {
  var emailVal = text;
  var regExp =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  return emailVal.match(regExp) != null ? true : false;
}

//Event 부분
emailInput.addEventListener('focusout', emailErrorMsg);
if (pwInput) pwInput.addEventListener('focusout', pwErrorMsg);
if (pwSignupInput1) pwSignupInput1.addEventListener('focusout', pwErrorMsg);
if (pwSignupInput2) pwSignupInput2.addEventListener('focusout', pwErrorMsg);
if (eye) eye.addEventListener('click', viewPassword);
if (eye_signup1) eye_signup1.addEventListener('click', viewPassword);
if (eye_signup2) eye_signup2.addEventListener('click', viewPassword);
login.addEventListener('click', loginCheck);
