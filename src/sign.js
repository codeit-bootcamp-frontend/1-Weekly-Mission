const emailDiv = document.querySelector('.content1_div2_div1');
const emailInput1 = document.querySelector('.content1_div2_div1_input');
const emailInput2 = document.querySelector('.content1_div2_div2_input');
const eye = document.querySelector('.content1_div2_div2_img');
const login = document.querySelector('.content1_div3_div');
const emailCheck =
  emailInput1.parentElement.children[
    emailInput1.parentElement.children.length - 2
  ];
const passwordCheck =
  emailInput2.parentElement.children[
    emailInput2.parentElement.children.length - 2
  ];

//입력 안했을때 경고
function errorMsg(e) {
  const emailSpan = e.target.nextElementSibling;
  const emailInput = e.target;
  const emailSpan2 = e.target.parentElement.lastElementChild;
  const newMsg = emailInput.value;
  if (!newMsg) {
    emailSpan.style.display = 'block';
    emailInput.style.border = '1px solid red';
    emailSpan2.style.display = 'none'; //이메일 형식
    emailCheck.style.display = 'none'; //이메일 확인
    passwordCheck.style.display = 'none'; //비밀번호 확인
  } else {
    emailSpan.style.display = 'none'; //이메일 입력
    emailCheck.style.display = 'none'; //이메일 확인
    passwordCheck.style.display = 'none'; //비밀번호 확인
    emailInput.style.border = '1px solid #ccd5e3';
    if (e.target == emailInput1 && verify(newMsg) !== true) {
      emailSpan2.style.display = 'block'; //이메일 형식
      emailInput.style.border = '1px solid red';
    } else {
      emailSpan2.style.display = 'none'; //이메일 형식
      emailInput.style.border = '1px solid #ccd5e3';
    }
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
//아이디 test@codeit.com
//비번 codeit101
function loginCheck(e) {
  if (
    emailInput1.value === 'test@codeit.com' &&
    emailInput2.value === 'codeit101'
  ) {
    console.log('hello');
    location.replace('./folder.html');
  } else {
    emailInput1.nextElementSibling.style.display = 'none'; //이메일 입력
    emailInput1.parentElement.lastElementChild.style.display = 'none'; //올바른 이메일 입력
    emailInput2.nextElementSibling.style.display = 'none'; //비밀번호 입력
    emailCheck.style.display = 'block';
    emailInput1.style.border = '1px solid red';
    passwordCheck.style.display = 'block';
    emailInput2.style.border = '1px solid red';
  }
}

emailInput1.addEventListener('focusout', errorMsg);
emailInput2.addEventListener('focusout', errorMsg);
eye.addEventListener('click', viewPassword);
login.addEventListener('click', loginCheck);
