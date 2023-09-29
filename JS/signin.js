// form input box 유효성 검사

const $inputEmail = document.querySelector(`[name="email"]`);
const $inputPassword = document.querySelector(`[name="password"]`)
const spanErrorEmail = document.querySelector('#error_email');
const spanErrorPassword = document.querySelector('#error_password');
const $submitBtn = document.querySelector('#submit');
let flag = true;

function verificationEmail (){ 
  if ( $inputEmail.value.length === 0){
    spanErrorEmail.textContent = "이메일을 입력해주세요.";
    spanErrorEmail.classList.add('show');
    spanErrorEmail.previousElementSibling.classList.add('red_border');
    flag = false;
  } else if ($inputEmail.value.indexOf('@', 1) <= 0 || $inputEmail.value.lastIndexOf('.') === $inputEmail.value.length -1 ||$inputEmail.value.lastIndexOf('.') < 0 || $inputEmail.value.lastIndexOf('.') < $inputEmail.value.lastIndexOf('@')) {
    spanErrorEmail.textContent = "올바른 이메일 주소가 아닙니다.";
    spanErrorEmail.classList.add('show');
    spanErrorEmail.previousElementSibling.classList.add('red_border');
    flag = false;
  } else {
    spanErrorEmail.classList.remove('show')
    spanErrorEmail.previousElementSibling.classList.remove('red_border');
  }
}

function verificationPassword (){
  if ( $inputPassword.value.length === 0){
    spanErrorPassword.textContent = "비밀번호를 입력해주세요.";
    spanErrorPassword.classList.add('show');
    spanErrorPassword.previousElementSibling.classList.add('red_border');
    flag = false;
  } else {
    spanErrorPassword.classList.remove('show')
    spanErrorPassword.previousElementSibling.classList.remove('red_border');
  }
}

function successToAccess(){
  if ($inputEmail.value === "test@codeit.com" && $inputPassword.value === "codeit101"){
    flag = true;
  } else {
    flag = false;
  }
}



function submitVerification (e){
  e.preventDefault();
  verificationEmail();
  verificationPassword();
  successToAccess()


  if (flag === true){
    let link = '../folder.html';
    window.location.href = link;
  } else {
    spanErrorEmail.textContent = "이메일을 확인해주세요.";
    spanErrorPassword.textContent = "비밀번호를 확인해주세요.";
    spanErrorEmail.classList.add('show');
    spanErrorPassword.classList.add('show');
  }
}

$inputPassword.addEventListener('focusout', verificationPassword);
$inputEmail.addEventListener('focusout', verificationEmail);
$submitBtn.addEventListener('click', submitVerification);

// eye icon toggle 이벤트

const $eyeOn = document.querySelector('#eye_on');
const $eyeOff = document.querySelector('#eye_off');

function makeEyeOn (){
  $eyeOn.classList.toggle('show');
  $eyeOff.classList.toggle('show');
  $inputPassword.type = "text";
}

function makeEyeOff (){
  $eyeOn.classList.toggle('show');
  $eyeOff.classList.toggle('show');
  $inputPassword.type = "password";
}

$eyeOff.addEventListener('click', makeEyeOn);
$eyeOn.addEventListener('click', makeEyeOff);