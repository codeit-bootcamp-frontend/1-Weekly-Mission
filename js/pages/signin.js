import { $, addClass, removeClass, createElement } from "../utils.js";
import { REG_EXP, DB_USERS } from "../constants.js";

// 인풋 에러 요소 출력
function displayInputError(input, message) {
  const element = createElement();

  element.textContent = message;
  addClass(element, "input-error-message");
  addClass(input, "input-error");
  
  if (input.id === "password") {
    const passwordWrapper = $(".password-wrapper");
    addClass(element, "input-error-message");
    addClass(input, "input-error");
    passwordWrapper.append(element);
    return;
  }

  input.after(element);
}

// 인풋 에러 요소 제거
function removeInputError(input) {
  if (input.id === "password") {
    const passwordWrapper = $(".password-wrapper");
    const passwordErrorMessage = passwordWrapper.querySelector('.input-error-message');
    
    if (passwordErrorMessage) {
      passwordErrorMessage.remove();
      removeClass(input, "input-error");
    }
    return;
  }

  if (input.nextSibling && input.nextSibling.localName === 'span') {
    input.nextSibling.remove();
    removeClass(input, "input-error");
  }
}

// 이메일 공란, 유효성 에러 확인
function handleEmailError(event) { 
  const emailInput = $("#email");
  removeInputError(emailInput);

  if (!event.target.value) {
    displayInputError(emailInput, "이메일을 입력해주세요.");
    return;
  }
  
  else if (!REG_EXP.EMAIL.test(event.target.value) && event.target.value.length > 0) {
    displayInputError(emailInput, "올바른 이메일 주소가 아닙니다.");
    return;
  }  
}

// 비밀번호 공란 에러 확인
function handlePasswordError(event) {
  const passwordInput = $("#password");
  removeInputError(passwordInput);

  if (!event.target.value) {
    displayInputError(passwordInput, "비밀번호를 입력해주세요.");
    return;
  }
}

// 유저 DB 확인
function isCorrectUser(email, password) {
  return DB_USERS.findIndex((dbUser) => {
    return dbUser.email === email && dbUser.password === password;
  })
}

//존재하지 않는 이메일일 떄
export function handleToggleEmail() {
  const emailInput = $("#email");

  if (emailInput.value !== "test@codeit.com") {
    displayInputError(emailInput, "이메일을 확인해주세요.");
    return;
  }

  removeInputError(emailInput);
}

//존재하지 않는 비밀번호일 떄
export function handleTogglePassword() {
  const passwordInput = $("#password");

  if (passwordInput.value !== "codeit101") {
    displayInputError(passwordInput, "비밀번호를 확인해주세요.");
    return;
  }

  removeInputError(passwordInput);
}

//로그인 성공 시
function loginSuccess() {
  alert('로그인 되었습니다.');
  location.href = "folder.html";
}

// 로그인 클릭 시
function handleSignIn(event) {
  event.preventDefault();

  const elements = event.target.elements;
  const emailInput = elements['email'];
  const passwordInput = elements['password'];

  if (isCorrectUser(emailInput.value, passwordInput.value) > -1) {
    return loginSuccess();
  }

  handleToggleEmail();
  handleTogglePassword()
}

// 비밀번호 eye 토글
function handleToggleEye() {
  const eyeButton = $(".eye-off");
  const passwordInput = $("#password");
  const isPasswordType = passwordInput.getAttribute("type") === "password"

  passwordInput.setAttribute("type", isPasswordType ? "text" : "password");
  eyeButton.setAttribute("src", `img/eye-${isPasswordType ? 'on' : 'off'}.svg`);
}


$("#email").addEventListener("focusout", handleEmailError);
$("#password").addEventListener("focusout", handlePasswordError);
$("form").addEventListener("submit", handleSignIn);
$(".eye-off").addEventListener("click", handleToggleEye);


export { handleEmailError };