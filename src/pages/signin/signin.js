// HTML tag를 담는 변수는 앞에 $를 붙임
const $email = document.querySelector('#email');
const $password = document.querySelector('#password');

const $error_msg = document.createElement('div');
$error_msg.classList.add('error_msg');
$email.after($error_msg);

const checking_email_input = (event) => {
  const repExp_Korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;  // 한글 정규표현식
  if (!event.target.value) {
    // input에 아무런 입력이 없는 경우
    $error_msg.textContent = '이메일을 입력해주세요.';
  } else if (event.target.value.indexOf('@') === -1 || event.target.value.slice(event.target.value.indexOf('@') + 1).indexOf('.') === -1 || repExp_Korean.test(event.target.value)) {
    // '@'가 없거나 '@'뒤에 '.'이 없거나 한글이 포함된 경우
    $error_msg.textContent = '올바른 이메일 주소가 아닙니다.'
  } else {
    $error_msg.textContent = '';
  }
}

$email.addEventListener('focusout', checking_email_input);