// HTML tag를 담는 변수는 앞에 $를 붙임
const $email = document.querySelector('#email');
const $password = document.querySelector('#password');

const $error_msg = document.createElement('div');
$error_msg.classList.add('error_msg');
$email.after($error_msg);

const checking_void_email = (event) => {
  if (!event.target.value) {
    $error_msg.textContent = '이메일을 입력해주세요.';
  } else if (event.target.value.indexOf('@') === -1) {
    $error_msg.textContent = '올바른 이메일 주소가 아닙니다.'
  } else {
    $error_msg.textContent = '';
  }
}

$email.addEventListener('focusout', checking_void_email);