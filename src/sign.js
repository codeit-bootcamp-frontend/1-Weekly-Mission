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
  if (!newMsg && !document.querySelector('.emailErrorSpan')) {
    //이메일칸 빈칸일때 경고창
    const emptyEmailspan = document.createElement('span');
    emptyEmailspan.classList.add('emailErrorSpan');
    emptyEmailspan.innerText = '이메일을 입력해주세요.';
    emailDiv.append(emptyEmailspan);
    emailInput.style.border = '1px solid red';
  } else if (newMsg && verify(newMsg) !== true) {
    //이메일칸 내용은 있지만 이메일 형식 안맞을 때
    const emptyEmailspan = document.querySelector('.emailErrorSpan');
    emptyEmailspan.remove();
    //이메일 형식 안맞을때의 경고창
    const noEmailspan = document.createElement('span');
    noEmailspan.classList.add('emailErrorSpan');
    noEmailspan.innerText = '올바른 이메일 주소가 아닙니다.';
    emailDiv.append(noEmailspan);
    emailInput.style.border = '1px solid red';
  } else if (newMsg && verify(newMsg) == true) {
    //그 외일때 span 태그 삭제
    const span = document.querySelector('.emailErrorSpan');
    span.remove();
    emailInput.style.border = '1px solid #ccd5e3';
  }
}

//비밀번호 오류 함수
function pwErrorMsg(e) {
  const newMsg = pwInput.value;
  if (!newMsg && !document.querySelector('.pwErrorSpan')) {
    //비밀번호칸 빈칸일때 경고창
    const emptyPwSpan = document.createElement('span');
    emptyPwSpan.classList.add('pwErrorSpan');
    emptyPwSpan.innerText = '이메일을 입력해주세요.';
    pwDiv.append(emptyPwSpan);
    pwInput.style.border = '1px solid red';
  } else if (newMsg) {
    //비밀번호칸 입력됐을 때
    const emptyPwSpan = document.querySelector('.pwErrorSpan');
    emptyPwSpan.remove();
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
    location.replace('./folder.html');
  } else {
    const noEmailspan = document.createElement('span');
    noEmailspan.classList.add('emailErrorSpan');
    noEmailspan.innerText = '올바른 이메일 주소가 아닙니다.';
    emailDiv.append(noEmailspan);
    emailInput.style.border = '1px solid red';
    // emailInput.nextElementSibling.style.display = 'none'; //이메일 입력
    // emailInput.parentElement.lastElementChild.style.display = 'none'; //올바른 이메일 입력
    // passwordInput.nextElementSibling.style.display = 'none'; //비밀번호 입력
    // emailCheck.style.display = 'block';
    // emailInput.style.border = '1px solid red';
    // passwordCheck.style.display = 'block';
    // passwordInput.style.border = '1px solid red';
  }
}

emailInput.addEventListener('focusout', emailErrorMsg);
pwInput.addEventListener('focusout', pwErrorMsg);
eye.addEventListener('click', viewPassword);
login.addEventListener('click', loginCheck);
