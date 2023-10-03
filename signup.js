window.onload=function(){

  const eyeImagePasswordEl = document.querySelector('#eyeImage-password')
  // const eyeImagePasswordReEl = document.querySelector('#eyeImage-password-re')
  const eyeImagePassword = eyeImagePasswordEl.children[0]
  // const eyeImagePasswordRe = eyeImagePasswordReEl.children[0]
  const inputEmail= document.querySelector('#sign-up')
  const inputPassWord = document.querySelector('#password')
  // const inputPassWordRe = document.querySelector('#password-re')
  const loginButton = document.querySelector('button[type="submit"]');
  const inputEmailCss = document.querySelector('input')

  //오류메시지 출력
  const emailErrorMessage = document.querySelector('.email-error-message')
  const passwordErrorMessage = document.querySelector('.password-error-message')
  // const passwordReErrorMessage = document.querySelector('.password-re-error-message')

 // <눈모양 아이콘 적용, 비밀번호 입력타입 변경>
  function toggleImage(image, inputPassword) {
    if (image.src.includes('eye-off')) {
      image.setAttribute('src','./images/signin/eye-on.png');
      inputPassword.setAttribute('type', '');
    } else {
      image.setAttribute('src','./images/signin/eye-off.svg');
      inputPassword.setAttribute('type', 'password');
    }
  }
  eyeImagePassword.addEventListener('click', ()=> {
    toggleImage(eyeImagePassword, inputPassWord)});
  // eyeImagePasswordRe.addEventListener('click', ()=> {
  //   toggleImage(eyeImagePasswordRe, inputPassWordRe)});

  //<이메일을 입력하는 동안에 에러메시지 안 보이게 하기 >
  //1) 이메일을 입력하는 동안 에러메시지를 가려주는 함수
  function errorMessageStop(){
    emailErrorMessage.style.display = 'none';
  }
  //2) 이벤트 적용
  inputEmail.addEventListener('input', errorMessageStop)

  // <이메일 형식검증, 오류메시지 출력 >
  //1) 사용자가 입력한 입력값이 유효한 형식인지 불린값으로 판단하는 함수
  function testEmail(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  //2) 불린값으로 반환된 결과를 기준으로 오류메세지를 출력하고 CSS속성을 변경
  function checkEmail(){
    const email = inputEmail.value.trim();    //사용자가 인풋란에 입력한 값을 JS에서 email로 선언
    if (email === ''){
      emailErrorMessage.style.display = 'block';
      inputEmailCss.style.border = '1px solid red';
      emailErrorMessage.textContent = '이메일을 입력해주세요.';
    }
    else if (!testEmail(email)){
      emailErrorMessage.style.display = 'block';
      emailErrorMessage.textContent = '올바른 이메일 주소가 아닙니다.';
      inputEmailCss.style.border = '1px solid red';
    } else {
      emailErrorMessage.style.display = 'none';
      inputEmailCss.style.border = '1px solid #ccd5e3';
    }
  };
  //3) 이벤트 적용
  inputEmail.addEventListener('focusout', checkEmail)

  //<비밀번호 빈 값일때 오류메시지 출력>
  function checkPassword(){
    const password = inputPassWord.value;
    if (password === ''){
      passwordErrorMessage.style.display = 'block';      
    }else {
      passwordErrorMessage.style.display = 'none';
    };
  }
  inputPassWord.addEventListener('focusout', checkPassword)

  //<아이디&비밀번호 올바르게 입력했을 경우 /folder로 이동하고 아닌 경우 확인메시지 출력>
function validAccount(email, password){
  if (email === 'test@codeit.com' && password === 'codeit101'){
    window.location.href = './index.html';
  } else if (email !== 'test@codeit.com'){
    emailErrorMessage.style.display = 'block';
    inputEmailCss.style.border = '1px solid red';
    emailErrorMessage.textContent = '이메일을 확인해주세요.';
  } else if (password !== 'codeit101'){
    passwordErrorMessage.style.display = 'block';
    passwordErrorMessage.textContent = '비밀번호를 확인해주세요';    
  }
}
loginButton.addEventListener('click', function(event) {
  event.preventDefault();
  const email = inputEmail.value.trim();
  const password = inputPassWord.value;
  validAccount(email, password);
});

} //onload end