const emailInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const loginBtn = document.querySelector("#loginBtn");

const emailErrorText = document.querySelector("#emailError");
const passwordErrorText = document.querySelector("#passwordError");

const toggleVisibility = document.querySelector(".toggleVisibility");

emailInput.addEventListener("blur", function () {
  const email = emailInput.value;
  if (!email) {
    emailErrorText.textContent = "이메일을 입력해주세요.";
    emailErrorText.style.visibility = "visible"; // 에러 메시지 표시
    emailInput.classList.add("error"); // 에러 발생 시 .error 클래스 추가
  } else if (!isValidEmail(email)) {
    emailErrorText.textContent = "올바른 이메일 주소가 아닙니다.";
    emailErrorText.style.visibility = "visible"; // 에러 메시지 표시
    emailInput.classList.add("error"); // 에러 발생 시 .error 클래스 추가
  } else {
    emailErrorText.textContent = "";
    emailErrorText.style.visibility = "hidden"; // 에러 메시지 숨김
    emailInput.classList.remove("error"); // 정상 시 .error 클래스 제거
  }
});

passwordInput.addEventListener("blur", function () {
  const password = passwordInput.value;
  if (!password) {
    passwordErrorText.textContent = "비밀번호를 입력해주세요.";
    passwordErrorText.style.visibility = "visible"; // 에러 메시지 표시
    passwordInput.classList.add("error"); // 에러 발생 시 .error 클래스 추가
  } else {
    passwordErrorText.textContent = "";
    passwordErrorText.style.visibility = "hidden"; // 에러 메시지 숨김
    passwordInput.classList.remove("error"); // 정상 시 .error 클래스 제거
  }
});

loginBtn.addEventListener("click", function () {
  const email = emailInput.value;
  const password = passwordInput.value;

  if (email === "test@codeit.com" && password === "codeit101") {
    location.href = "/folder";
  } else {
    // 잘못된 계정과 비밀번호에 대한 처리
    emailErrorText.textContent = "이메일을 확인해주세요.";
    emailErrorText.style.visibility = "visible";
    passwordErrorText.textContent = "비밀번호를 확인해주세요.";
    passwordErrorText.style.visibility = "visible";
    emailInput.classList.add("error");
    passwordInput.classList.add("error");
  }
});

toggleVisibility.addEventListener("click", function () {
  if (passwordInput.type === "password") {
    // 현재 비밀번호 타입이 'password'인 경우
    passwordInput.type = "text"; // 타입을 'text'로 변경하여 비밀번호를 표시
    toggleVisibility.src = "/assets/eye-on.svg"; // 이미지 변경
  } else {
    // 현재 비밀번호 타입이 'text'인 경우
    passwordInput.type = "password"; // 타입을 다시 'password'로 변경하여 숨김
    toggleVisibility.src = "/assets/eye-off.svg"; // 이미지 변경
  }
});

function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}
