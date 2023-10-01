// 이메일 input 요소 가져오기
let emailInput = document.getElementById("email");
let emailError = document.getElementById("email-error");

// 비밀번호 input 요소 가져오기
let passwordInput = document.getElementById("password");
let passwordError = document.getElementById("password-error");

// 비밀번호 토글 이미지 가져오기
let passwordToggle = document.getElementById("password-toggle");

let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

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

// 이메일 입력란 포커스를 잃었을 때 유효성 검사
emailInput.addEventListener('focusout', function () {
  if (emailInput.value === "") { // 이메일이 비어있을 때
    emailError.textContent = "이메일을 입력해주세요.";
    emailError.style.display = "block";
    emailInput.style.border = "1px solid red";
  } else if (!emailPattern.test(emailInput.value)) { // 올바른 이메일 형식이 아닐 때
    emailError.textContent = "올바른 이메일 주소가 아닙니다.";
    emailError.style.display = "block";
    emailInput.style.border = "1px solid red";
  } else { // 유효한 이메일 형식일 때
    emailError.style.display = "none";
    emailInput.style.border = "1px solid black";
  }
});

// 비밀번호 입력란 포커스를 잃었을 때 유효성 검사
passwordInput.addEventListener('focusout', function () {
  if (passwordInput.value === "") { // 비밀번호가 비어있을 때
    passwordError.textContent = "비밀번호를 입력해주세요.";
    passwordError.style.display = "block";
    passwordInput.style.border = "1px solid red";
  } else { // 비밀번호가 비어있지 않을 때
    passwordError.style.display = "none";
    passwordInput.style.border = "1px solid black";
  }
});

// 로그인 폼 제출 시 유효성 검사 및 로그인 처리
document.getElementById("loginForm").addEventListener("submit", function (event) {
  let email = emailInput.value;
  let password = passwordInput.value;

  if (email === "test@codeit.com" && password === "codeit101") {
    // 유효한 경우 "/folder" 페이지로 이동
    window.location.href = "/folder";
  } else {
    event.preventDefault(); // 폼 제출 막기
    // 유효하지 않은 경우 에러 메시지 표시
    emailError.textContent = "이메일 또는 비밀번호를 확인해주세요.";
    passwordError.textContent = "이메일 또는 비밀번호를 확인해주세요.";
    emailError.style.display = "block";
    passwordError.style.display = "block";
    emailInput.style.border = "1px solid red";
    passwordInput.style.border = "1px solid red";
  }
});

