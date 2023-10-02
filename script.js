window.onload=function(){
  
  // <눈모양 아이콘 적용, 비밀번호 입력타입 변경> // 왜 눌러도 반응이 없을까요? ㅠㅠ
  const eyeImage = document.querySelector('.input-eye-off')
  const passWord = document.querySelector('#password')
  function toggleImage() {
    if (eyeImage.src.includes('eye-off')) {
      eyeImage.src = './images/signin/eye-on.svg';
      passWord.setAttribute('type', '');
    } else {
      eyeImage.src = './images/signin/eye-off.svg';
    }
  }
  //오류메시지 출력
  const emailErrorMessage = document.querySelector('.email-error-message')
  const passwordErrorMessage = document.querySelector('.password-error-message')
  const passwordReErrorMessage = document.querySelector('.password-re-error-message')

  //인풋
  const inputEmail= document.querySelector('#sign-up')
  const inputPassword = document.querySelector('#password')
  const inputPasswordRe = document.querySelector('#password-re')
  
  //<이메일을 입력하는 동안에 에러메시지 안 보이게 하기 >
  //1) 이메일을 입력하는 동안 에러메시지를 가려주는 함수
  function errorMessageStop(){
    emailErrorMessage.style.display = 'none';
  }
  //2) 이벤트 적용
  inputEmail.addEventListener('input', errorMessageStop)

  // <이메일이 유효한지 검사하기>
  //1) 사용자가 입력한 입력값이 유효한 형식인지 불린값으로 판단하는 함수
  function testEmail(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  //2) 불린값으로 반환된 결과를 기준으로 오류메세지를 출력하고 CSS속성을 변경
  function checkEmail(){
    const email = emailInput.value; //사용자가 인풋란에 입력한 값을 JS에서 email로 선언
    if (testEmail(email)){
      emailErrorMessage.style.display = 'none';
      inputEmail.classList.remove('.error-border')
    } else {
      emailErrorMessage.style.display = 'block';
      emailErrorMessage.textContent = '올바른 이메일 주소가 아닙니다.';
      inputEmail.classList.add('.error-border');
    }
  };
  //3) 이벤트 적용
  inputEmail.addEventListener('input', checkEmail){
  };

} //onload end