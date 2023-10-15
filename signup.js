// import { togglePassword, validateEmail, validatePassword } from './common.js';
// 이메일 input 요소 가져오기
const emailInput = document.getElementById("email");
const emailError = document.getElementById("email-error");

// 비밀번호 input 요소 가져오기
const passwordInput = document.getElementById("password");
const passwordError = document.getElementById("password-error");

// 비밀번호 확인 input 요소 가져오기
const passwordDoublecheck = document.getElementById("passwordCheck");
const passwordCheckError = document.getElementById("passwordCheck-error");

// 비밀번호 토글 이미지 가져오기
const passwordToggle = document.getElementById("password-toggle");
const passwordcheckToggle = document.getElementById("passwordcheck-toggle");

const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// 비밀번호 가시성 토글
function togglePassword() {
    if (passwordInput.type === "password") { // 비밀번호 보이게
      passwordInput.type = "text";
      passwordToggle.src = "assets/img/eye-on.svg";
    } else { // 비밀번호 가리기
      passwordInput.type = "password";
      passwordToggle.src = "assets/img/eye-off.svg";
    }
  }

// 비밀번호 확인 가시성 토글
function togglecheckPassword() {
    if (passwordDoublecheck.type === "password") { // 비밀번호 보이게
      passwordDoublecheck.type = "text";
      passwordcheckToggle.src = "assets/img/eye-on.svg";
    } else { // 비밀번호 가리기
      passwordDoublecheck.type = "password";
      passwordcheckToggle.src = "assets/img/eye-off.svg";
    }
  }

// 이메일 입력란 포커스를 잃었을 때 유효성 검사
function emailInputFocusOut(){
  if (emailInput.value === "") { // 이메일이 비어있을 때
    emailError.textContent = "이메일을 입력해주세요.";
    emailError.style.display = "block";
    emailInput.style.borderColor = "red";
  } else if (!emailPattern.test(emailInput.value)) { // 올바른 이메일 형식이 아닐 때
    emailError.textContent = "올바른 이메일 주소가 아닙니다.";
    emailError.style.display = "block";
    emailInput.style.borderColor = "red";
  } else { // 유효한 이메일 형식일 때
    // 이메일 중복 검사
    fetch('https://bootcamp-api.codeit.kr/docs/api/check-email', {
      method: 'POST',
      body: "test@codeit.com",
    })
    .then((response)=> {response.text()})
    .then((result)=>{
      fetch('https://bootcamp-api.codeit.kr/docs/api/sign-up', {
        method: 'POST',
        body: "test@codeit.com",
      })
      .then((result)=>{
        window.location.href = "/folder";
      })
      .catch((error)=> {console.log(error);})
    })
    .catch((error)=> {console.log(error);})

    // if (emailInput.value === "test@codeit.com"){
    //     emailError.textContent = "이미 사용 중인 이메일입니다.";
    //     emailError.style.display = "block";
    //     emailInput.style.borderColor = "red";
    // }
    // else{
    //     emailError.style.display = "none";
    //     emailInput.style.borderColor = "black";
    // }
  }
}

// 비밀번호 입력란 포커스를 잃었을 때 유효성 검사
function passwordInputFocusOut() {
    const password = passwordInput.value;
  if (password === "") { // 비밀번호가 비어있을 때
    passwordError.textContent = "비밀번호를 입력해주세요.";
    passwordError.style.display = "block";
    passwordInput.style.borderColor = "red";
  } else { // 비밀번호가 비어있지 않을 때
    // 유효성 검사
    if (password.length < 8 || !/[a-zA-Z]/.test(password) || !/\d/.test(password)) {
        passwordError.textContent = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.';
        passwordError.style.display = "block";
        passwordInput.style.borderColor = "red";
    } else{
        passwordError.style.display = "none";
        passwordInput.style.borderColor = "black";
    }
  }
}

// 비밀번호 확인
function passwordCheckInputFocusOut(){
    if (passwordInput.value!==passwordDoublecheck.value){
        passwordCheckError.textContent = "비밀번호가 일치하지 않습니다.";
        passwordCheckError.style.display = "block";
        passwordDoublecheck.style.borderColor = "red";
    }
    else{
        passwordCheckError.style.display = "none";
        passwordDoublecheck.style.borderColor = "black";
    }
}

// 로그인 폼 제출 시 유효성 검사 및 로그인 처리
function checkAvailability(event) {
  window.localStorage.setItem('token', result.data.token);
  window.location.href = "/folder";
  alert('회원가입 성공');
}


emailInput.addEventListener('focusout',emailInputFocusOut);
passwordInput.addEventListener('focusout', passwordInputFocusOut);
passwordDoublecheck.addEventListener('focusout', passwordCheckInputFocusOut);
document.getElementById("loginForm").addEventListener("submit", checkAvailability);
passwordToggle.addEventListener('click',togglePassword);
passwordcheckToggle.addEventListener('click',togglecheckPassword);