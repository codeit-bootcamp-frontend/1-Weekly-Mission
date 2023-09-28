const emailInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const loginBtn = document.querySelector("#loginBtn");

const emailErrorText = document.querySelector("#emailError");
const passwordErrorText = document.querySelector("#passwordError");

emailInput.addEventListener("blur", function () {
  const email = emailInput.value;
  if (!email) {
    emailErrorText.textContent = "이메일을 입력해주세요.";
    emailErrorText.style.visibility = "visible"; // 에러 메시지 표시
  } else if (!isValidEmail(email)) {
    emailErrorText.textContent = "올바른 이메일 주소가 아닙니다.";
    emailErrorText.style.visibility = "visible"; // 에러 메시지 표시
  } else {
    emailErrorText.textContent = "";
    emailErrorText.style.visibility = "hidden"; // 에러 메시지 숨김
  }
});

passwordInput.addEventListener("blur", function () {
  const password = passwordInput.value;
  if (!password) {
    passwordErrorText.textContent = "비밀번호를 입력해주세요.";
    passwordErrorText.style.visibility = "visible"; // 에러 메시지 표시
  } else {
    passwordErrorText.textContent = "";
    passwordErrorText.style.visibility = "hidden"; // 에러 메시지 숨김
  }
});

loginBtn.addEventListener("click", function () {
  const email = emailInput.value;
  const password = passwordInput.value;

  if (email === "test@codeit.com" && password === "codeit101") {
    location.href = "/folder";
  } else if (!email && !password) {
    emailErrorText.textContent = "이메일을 확인해주세요.";
    emailErrorText.style.visibility = "visible"; // 에러 메시지 표시
    passwordErrorText.textContent = "비밀번호를 확인해주세요.";
    passwordErrorText.style.visibility = "visible"; // 에러 메시지 표시
  } else if (!email) {
    emailErrorText.textContent = "이메일을 확인해주세요.";
    emailErrorText.style.visibility = "visible"; // 에러 메시지 표시
  } else if (!password) {
    passwordErrorText.textContent = "비밀번호를 확인해주세요.";
    passwordErrorText.style.visibility = "visible"; // 에러 메시지 표시
  }
});

function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}
