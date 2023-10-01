const emailInputWrap = document.querySelector('.signin__email__wrap');
const emailInput = document.querySelector('.input--email');
const passwordInputWrap = document.querySelector('.signin__pw__wrap');
const passwordInput = document.querySelector('.input--pw');
const singinBtn = document.querySelector('.signin__btn')

function validEmail(email){
  const pattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  return (email.match(pattern)!=null)
}

//이메일 유효성 검사
function checkEmail(e){
  if (emailInputWrap.querySelector('span')){
    let temp = emailInputWrap.querySelector('span');
    temp.remove();
  }

  const span = document.createElement('span');
  span.classList = 'emailError'
  const email = e.target.value;

  if (email == ''){
    span.textContent = "이메일을 입력해주세요.";
  } else if (validEmail(email) == false){
    span.textContent = "올바른 이메일 주소가 아닙니다.";
  }

  emailInputWrap.appendChild(span);
}

//비밀번호 유효성 검사
function checkPw(e){
  if (passwordInputWrap.querySelector('span')){
    let temp = passwordInputWrap.querySelector('span');
    temp.remove();
  }

  const span = document.createElement('span');
  span.classList = 'PwError'
  const password = e.target.value;

  if (password == ''){
    span.textContent = "비밀번호를 입력해주세요."
    passwordInputWrap.appendChild(span);
  }
}

//로그인 성공
function checkLogin(){
  const email = emailInput.value;
  const signinWrap = document.querySelector(".signin__wrap")

  if (email === "test@codeit.com" && password === "codeit101"){
    window.location.href = "/folder"
  } else {
      if (signinWrap.querySelector('span')){
        let temp = signinWrap.querySelectorAll('span');
        for (span of temp){
          span.remove();
        }
      }
      const emailSpan = document.createElement('span');
      const pwSpan = document.createElement('span');

      emailSpan.textContent = "이메일을 확인해주세요.";
      pwSpan.textContent = "비밀번호를 확인해주세요.";

      emailInputWrap.appendChild(emailSpan);
      passwordInputWrap.appendChild(pwSpan);
  }
}

emailInput.addEventListener('focusout', checkEmail);
passwordInput.addEventListener('focusout', checkPw);
singinBtn.addEventListener('click', checkLogin);

//눈모양 아이콘 클릭에 따른 노출
const eye = document.querySelector(".input__eye");

function showPw(e){
  if (e.target.alt === "password eye off"){
    passwordInput.setAttribute('type', null);
    e.target.setAttribute('src', "assets/img/eyeOn.svg");
    e.target.setAttribute('alt', "password eye on");
  } else {
    passwordInput.setAttribute('type', 'password');
    e.target.setAttribute('src', "assets/img/eyeOff.svg");
    e.target.setAttribute('alt', "password eye off");
  }
}

eye.addEventListener('click', showPw)