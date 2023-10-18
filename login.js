// import { togglePassword, validateEmail, validatePassword } from './common.js';
// 이메일 input 요소 가져오기
const emailInput = document.getElementById("email");
const emailError = document.getElementById("email-error");
// 비밀번호 input 요소 가져오기
const passwordInput = document.getElementById("password");
const passwordError = document.getElementById("password-error");
// 비밀번호 토글 이미지 가져오기
const passwordToggle = document.getElementById("password-toggle");
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

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
    emailError.style.display = "none";
    emailInput.style.borderColor = "black";
  }
}

// 비밀번호 가시성, 비가시성 토글 함수
function togglePassword() {
  if (passwordInput.type === "password") { // 비밀번호 보이게
    passwordInput.type = "text";
    passwordToggle.src = "assets/img/eye-on.svg";
  } else { // 비밀번호 가리기
    passwordInput.type = "password";
    passwordToggle.src = "assets/img/eye-off.svg";
  }
}


// 비밀번호 입력란 포커스를 잃었을 때 유효성 검사
function passwordInputFocusOut() {
  if (passwordInput.value === "") { // 비밀번호가 비어있을 때
    passwordError.textContent = "비밀번호를 입력해주세요.";
    passwordError.style.display = "block";
    passwordInput.style.borderColor = "red";
  } else { // 비밀번호가 비어있지 않을 때
    passwordError.style.display = "none";
    passwordInput.style.borderColor = "black";
  }
}

// 로그인 폼 제출 시 유효성 검사 및 로그인 처리
function checkAvailability(event) {
  let email = emailInput.value;
  let password = passwordInput.value;
  const requestData={
    email: 'test@codeit.com',
    password: 'sprint101',
  };

  fetch('https://bootcamp-api.codeit.kr/api/sign-in', {
    method: 'POST',
    body: JSON.stringify(requestData),
  })
  .then((response)=> {response.text()})
  .then((result)=>{
    window.localStorage.setItem('token', result.data.token);
    alert('로그인 성공');
    window.location.href = "/folder";
  })
  .catch((error)=> {
    console.error('요청 중 오류 발생:', error);
    event.preventDefault(); // 폼 제출 막기
  })

  // if (email === "test@codeit.com" && password === "codeit101") {
  //   // 유효한 경우 "/folder" 페이지로 이동
  //   window.location.href = "/folder";
  //   alert('로그인 되었습니다');
  // } else {
  //   event.preventDefault(); // 폼 제출 막기
  //   // 비번만 다름 (이메일은 유효)
  //   if(email === "test@codeit.com"){
  //     passwordError.textContent = "비밀번호를 확인해주세요.";
  //     passwordError.style.display = "block";
  //     passwordInput.style.borderColor = "red";
  //   }
  //   else{
  //     emailError.textContent = "이메일을 확인해주세요.";
  //     passwordError.textContent = "비밀번호를 확인해주세요.";
  //     emailError.style.display = "block";
  //     passwordError.style.display = "block";
  //     emailInput.style.borderColor = "red";
  //     passwordInput.style.borderColor = "red";
  //   }
}



emailInput.addEventListener('focusout',emailInputFocusOut);
passwordInput.addEventListener('focusout', passwordInputFocusOut);
document.getElementById("loginForm").addEventListener("submit", checkAvailability);
passwordToggle.addEventListener('click',togglePassword);