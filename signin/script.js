
// 이메일 input에서 focus out할 때
// 값이 없을 경우 '이메일을 입력해주세요' 에러메세지
// 이메일 형식에 맞지 않는 값이 있는 경우 '올바른 이메일 주소가 아닙니다' 에러메시지
const email = document.querySelector('#email');
const password = document.querySelector('#password')
const errorMessage = document.querySelector(".error-message");

email.onclick = function() {
  let x = email.value;
  if (x == null || x == ''){
      errorMessage.classList.remove('hide');
  }
}



