const emailDiv = document.querySelector('.content1_div2_div1'); //이메일 상위 div
const pwDiv = document.querySelector('.content1_div2_div2_div-input'); //비밀번호 상위 div
const emailInput = document.querySelector('.content1_div2_div1_input'); //이메일 input
const pwInput = document.querySelector('.content1_div2_div2_input'); //비밀번호 input
const eye = document.querySelector('.content1_div2_div2_img');
const login = document.querySelector('.content1_div3_div');
const emailCheck = document.querySelector('.content1_div2_div1_span2');
const passwordCheck = document.querySelector('.content1_div2_div2_span2');

const VERIFYEAMIL = 'test@codeit.com';
const VERIFYPW = 'codeit101';

//이메일 오류 함수
function emailErrorMsg(e) {
  const newMsg = emailInput.value;
  if (!newMsg && !document.querySelector('.emptyEmailErrorSpan')) {
    //이메일칸 빈칸일때 경고창
    msgDelete('.errorEmailMsg', '.wrongEmailSpan');
    const emptyEmailspan = document.createElement('span');
    emptyEmailspan.classList.add('emptyEmailErrorSpan', 'errorEmailMsg', 'Msg');
    msgCreate(emptyEmailspan, emailDiv, emailInput, '이메일을 입력해주세요.');
  } else if (newMsg && verify(newMsg) !== true) {
    //이메일칸 내용은 있지만 이메일 형식 안맞을 때
    msgDelete('.errorEmailMsg', '.wrongEmailSpan');
    //이메일 형식 안맞을때의 경고창
    const noEmailspan = document.createElement('span');
    noEmailspan.classList.add('noEmailErrorSpan', 'errorEmailMsg', 'Msg');
    msgCreate(
      noEmailspan,
      emailDiv,
      emailInput,
      '올바른 이메일 주소가 아닙니다.'
    );
  } else if (newMsg && verify(newMsg) == true) {
    //그 외일때 span 태그 삭제
    msgDelete('.errorEmailMsg', '.wrongEmailSpan');
    emailInput.style.border = '1px solid #ccd5e3';
  }
}

//비밀번호 오류 함수
function pwErrorMsg(e) {
  const newMsg = pwInput.value;
  if (!newMsg && !document.querySelector('.pwErrorSpan')) {
    //비밀번호칸 빈칸일때 경고창
    msgDelete('.wrongPwErrorSpan');
    const emptyPwSpan = document.createElement('span');
    emptyPwSpan.classList.add('pwErrorSpan', 'Msg');
    msgCreate(emptyPwSpan, pwDiv, pwInput, '비밀번호를 입력해주세요.');
  } else if (newMsg) {
    //비밀번호칸 입력됐을 때
    msgDelete('.pwErrorSpan', '.wrongPwErrorSpan');
    pwInput.style.border = '1px solid #ccd5e3';
  }
}

//비밀번호 표시
function viewPassword(e) {
  const input = e.target.parentElement.firstElementChild;
  if (input.type == 'password') {
    input.setAttribute('type', 'text');
    eye.setAttribute('src', './img/eye-on.svg');
  } else {
    input.setAttribute('type', 'password');
    eye.setAttribute('src', './img/eye-off.svg');
  }
}

//이메일 형식 판단
function verify(text) {
  var emailVal = text;
  var regExp =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  return emailVal.match(regExp) != null ? true : false;
}

//아이디 비번 일치
function loginCheck(e) {
  if (emailInput.value === VERIFYEAMIL && pwInput.value === VERIFYPW) {
    msgDelete('.Msg');
    location.replace('./folder.html');
  } else {
    msgDelete('.pwErrorSpan', '.errorEmailMsg');
    const wrongEmailSpan = document.querySelector('.wrongEmailSpan');
    const wrongPwErrorSpan = document.querySelector('.wrongPwErrorSpan');
    if (!wrongEmailSpan || !wrongPwErrorSpan) {
      //이메일 오류
      msgDelete('.wrongEmailSpan', '.wrongPwErrorSpan');
      const noEmailspan = document.createElement('span');
      noEmailspan.classList.add('wrongEmailSpan', 'wrongMsg');
      msgCreate(noEmailspan, emailDiv, emailInput, '이메일을 확인해 주세요.');
      //비밀번호 오류
      const noPwspan = document.createElement('span');
      noPwspan.classList.add('wrongPwErrorSpan', 'wrongMsg');
      msgCreate(noPwspan, pwDiv, pwInput, '비밀번호를 확인해 주세요.');
    } else {
    }
  }
}

function msgDelete(...msg) {
  for (const arg of msg) {
    const errorMsg = document.querySelector(arg);
    if (errorMsg) errorMsg.remove();
  }
}

function msgCreate(spanName, divName, inputName, msg) {
  spanName.innerText = msg;
  divName.append(spanName);
  inputName.style.border = '1px solid red';
}

emailInput.addEventListener('focusout', emailErrorMsg);
pwInput.addEventListener('focusout', pwErrorMsg);
eye.addEventListener('click', viewPassword);
login.addEventListener('click', loginCheck);
