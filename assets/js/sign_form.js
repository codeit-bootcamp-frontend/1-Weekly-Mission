const signinWrap = document.querySelector('.signin__wrap');
const emailWrap = document.querySelector('.signin__email__wrap');
const inputEmail = document.querySelector('.input--email');
const pwWrap = document.querySelector('.signin__pw__wrap');
const inputPw = document.querySelector('.input--pw');
const singinBtn = document.querySelector('.signin__btn')

/*-----로그인 유효성 검사-----*/

//이메일 유효성 검사
function validEmail(email){
  const pattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  return (email.match(pattern)!=null)
}

function checkEmail(e){
  if (emailWrap.querySelector('.errorMsg')){
    let temp = emailWrap.querySelector('.errorMsg');
    temp.remove();
  }

  const span = document.createElement('span');
  span.classList = 'errorMsg'
  const email = e.target.value;

  if (email == ''){
    span.textContent = "이메일을 입력해주세요.";
    emailWrap.appendChild(span);
    inputEmail.classList.add('input__error');
  } else if (validEmail(email) == false){
    span.textContent = "올바른 이메일 주소가 아닙니다.";
    emailWrap.appendChild(span);
    inputEmail.classList.add('input__error');
  }
  
}

//비밀번호 유효성 검사
function checkPw(e){
  if (pwWrap.querySelector('.errorMsg')){
    let temp = pwWrap.querySelector('.errorMsg');
    temp.remove();
  }

  const span = document.createElement('span');
  span.classList = 'errorMsg'
  const password = e.target.value;

  if (password == ''){
    span.textContent = "비밀번호를 입력해주세요."
    pwWrap.appendChild(span);
    inputPw.classList.add('input__error');
  }
}

//로그인 성공
function checkLogin(){
  const email = inputEmail.value;
  const password = inputPw.value;
  const signinWrap = document.querySelector(".signin__wrap")

  if (email === "test@codeit.com" && password === "codeit101"){
    window.location.href = "/folder"
  } else {
      if (signinWrap.querySelector('.errorMsg')){
        let temp = signinWrap.querySelectorAll('.errorMsg');
        for (span of temp){
          span.remove();
        }
      }
      const emailSpan = document.createElement('span');
      const pwSpan = document.createElement('span');

      emailSpan.classList = 'errorMsg'
      pwSpan.classList = 'errorMsg'

      emailSpan.textContent = "이메일을 확인해주세요.";
      pwSpan.textContent = "비밀번호를 확인해주세요.";

      emailWrap.appendChild(emailSpan);
      pwWrap.appendChild(pwSpan);

      inputEmail.classList.add('input__error');
      inputPw.classList.add('input__error');
  }
}

function reset(e) {
  if (e.target.classList.contains('input__error')){
    e.target.classList.remove('input__error');
  }
}

signinWrap.addEventListener('focusin', reset);
inputEmail.addEventListener('focusout', checkEmail);
inputPw.addEventListener('focusout', checkPw);
singinBtn.addEventListener('click', checkLogin);


/*-----눈모양 아이콘 클릭에 따른 노출-----*/
const eye = document.querySelector(".input__eye");

function showPw(e){
  if (e.target.alt === "password eye off"){
    inputPw.setAttribute('type', null);
    inputPw.style.letterSpacing = '0rem'
    e.target.setAttribute('src', "assets/img/eyeOn.svg");
    e.target.setAttribute('alt', "password eye on");
  } else {
    inputPw.setAttribute('type', 'password');
    inputPw.style.letterSpacing = '0.375rem'
    e.target.setAttribute('src', "assets/img/eyeOff.svg");
    e.target.setAttribute('alt', "password eye off");
  }
}

eye.addEventListener('click', showPw)
