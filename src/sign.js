const emailDiv = document.querySelector('.content1_div2_div1');
const emailInput1 = document.querySelector('.content1_div2_div1_input');
const emailInput2 = document.querySelector('.content1_div2_div2_input');
const eye = document.querySelector('.content1_div2_div2_img');

//입력 안했을때 경고
function errorMsg(e) {
  const emailSpan = e.target.nextElementSibling;
  const emailInput = e.target;
  const emailSpan2 = e.target.parentElement.lastElementChild;
  const newMsg = emailInput.value;
  if (!newMsg) {
    emailSpan.style.display = 'block';
    emailInput.style.border = '1px solid red';
    emailSpan2.style.display = 'none';
  } else {
    emailSpan.style.display = 'none';
    emailInput.style.border = '1px solid #ccd5e3';
    if (e.target == emailInput1 && verify(newMsg) !== true) {
      emailSpan2.style.display = 'block';
      emailInput.style.border = '1px solid red';
    } else {
      emailSpan2.style.display = 'none';
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

emailInput1.addEventListener('focusout', errorMsg);
emailInput2.addEventListener('focusout', errorMsg);
eye.addEventListener('click', viewPassword);
