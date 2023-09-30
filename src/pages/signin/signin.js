// HTML tag를 담는 변수는 앞에 $를 붙임
const $email = document.querySelector('#email');
const $password = document.querySelector('#password');
const $form = document.querySelector('form');
const $pw_invisible =document.querySelector('.password-invisible');

const $email_error_msg = document.createElement('div');
const $password_error_msg = document.createElement('div');
$email_error_msg.classList.add('email_error_msg');
$password_error_msg.classList.add('password_error_msg');
$email.after($email_error_msg);
$password.after($password_error_msg);

let toggle_pw = 0;

const checking_email_input = (event) => {
  const repExp_Korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;  // 한글 정규표현식
  event.preventDefault();
  if (!event.target.value) {
    // input에 아무런 입력이 없는 경우
    $email_error_msg.textContent = '이메일을 입력해주세요.';
    $email.classList.toggle('error_border');
  } else if (event.target.value.indexOf('@') === -1 || event.target.value.slice(event.target.value.indexOf('@') + 1).indexOf('.') === -1 || repExp_Korean.test(event.target.value)) {
    // '@'가 없거나 '@'뒤에 '.'이 없거나 한글이 포함된 경우
    $email_error_msg.textContent = '올바른 이메일 주소가 아닙니다.'
    $email.classList.toggle('error_border');
  } else {
    $email_error_msg.textContent = '';
  }
}

const checking_password_input = (event) => {
  if (!event.target.value) {
    // input에 아무런 입력이 없는 경우
    $password_error_msg.textContent = '비밀번호를 입력해주세요.';
    $password.classList.toggle('error_border');
  } else {
    $password_error_msg.textContent = '';
  }
}

const admin_login = (event) => {
  event.preventDefault();
  if ($email.value === "test@codeit.com" && $password.value === "codeit101") {
    // admin 계정으로 로그인 시 'folder/' 로 이동
    window.location.href = '../folder/index.html';
  } else {
    $email_error_msg.textContent = '이메일을 확인해주세요.';
    $password_error_msg.textContent = '비밀번호를 확인해주세요.';
    $email.classList.toggle('error_border');
    $password.classList.toggle('error_border');
  }
}

const toggle_pw_visibility = () => {
  if (toggle_pw === 0) {
    // 비밀번호 보이게 하기
    $pw_invisible.setAttribute('src', '../../assets/images/svg/eye-on.svg');
    $password.setAttribute('type', 'text');
    toggle_pw += 1;
  } else {
    // 비밀번호 가리기
    $pw_invisible.setAttribute('src', '../../assets/images/svg/eye-off.svg');
    $password.setAttribute('type', 'password');
    toggle_pw -= 1;
  }
}

$email.addEventListener('focusout', checking_email_input);
$password.addEventListener('focusout', checking_password_input);
$form.addEventListener('submit', admin_login);
$pw_invisible.addEventListener('click', toggle_pw_visibility);