import { $, $all, addClass, removeClass, createElement } from "../utils.js";
import { REG_EXP, DB_USERS } from "../constants.js";

// $all 적용한 대상이 모두 작용하지 않음!

// 인풋 에러 요소 출력
function displayInputError(input, message) {
  const element = createElement();

  element.textContent = message;
  addClass(element, "input-error-message");
  addClass(input, "input-error");
  
  if (input.id === "password") {
    const passwordWrappers = $all(".password-wrapper");

    addClass(element, "input-error-message");
    addClass(input, "input-error");
    passwordWrappers.append(element);
    return;
  }

  input.after(element);
}

// 인풋 에러 요소 제거 -> textContent를 ''공란으로 바꾸는 방식 말고, pw의 경우 부모 요소의 자매 요소 제거, id의 email의 경우 자매 요소 제거 로 함수를 짰으나 적용이 안됨.
function removeInputError(input){
  if (input.id === "password") {
    const passwordErrorMessage = input.parentElement.nextSibling;
    passwordErrorMessage.remove();
    removeClass(input, "input-error");
    return;
  }

  input.nextSibling.remove();
  removeClass(input, "input-error");
}

// 이메일 공란, 유효성, 중복 여부 확인
function handleEmailError(event) { 
  const emailInput = $("#email");

  if (!event.target.value) {
    displayInputError(emailInput, "이메일을 입력해주세요.");
    return;
  }
  
  if (event.target.value.length > 0 && !REG_EXP.EMAIL.test(event.target.value)) {
    displayInputError(emailInput, "올바른 이메일 주소가 아닙니다.");
    return;
  }

  if (event.target.value === "test@codeit.com"){
    displayInputError(emailInput, "이미 사용 중인 이메일입니다.");
    return;
  }

  removeInputError(emailInput);
}

// 비밀번호 공란, 유효성, 일치 여부 확인
function handlePasswordError(event) {
  const passwordInput = $("#password");
  const passwordInputVerify = $("#password-verify");

  if (!event.target.value) {
    displayInputError(passwordInput, "비밀번호를 입력해주세요.");
    return;
  }

  if (event.target.value.length > 0 && !REG_EXP.PASSWORD.text(event.target.value)) {
    displayInputError(passwordInput, "비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요.");
    return;
  }

  if (passwordInput.value !== passwordInputVerify.value) {
    displayInputError(passwordInputVerify, "비밀번호가 일치하지 않습니다.");
  }

  removeInputError(passwordInput);
}

// 유저 DB 추가 가능 여부 확인
function isPossibleUser(email) {
  return DB_USERS.findIndex((dbUser) => {
    return dbUser.email === email;
  })
}

//회원가입 성공 시
function signUpSuccess() {
  alert('회원가입 되었습니다.');
  location.href = "folder.html";
}

// 회원가입 클릭 시
function handleSignUp(event) {
  event.preventDefault();

  const elements = event.target.elements;
  const emailInput = elements['email'];
  const passwordInput = elements['password'];
  const passwordInputVerify = elements['password-verify'];

  if (isPossibleUser(emailInput.value) < 0 && passwordInput.value === passwordInputVerify.vale) {
    return singUpSuccess();
  }

  handleEmailError();
  handlePasswordError();
}

// 비밀번호 eye 토글
function handleToggleEye() {
  const eyeButtons = $all(".eye-off");
  const passwordInputs = $all(".passwords");
  const isPasswordType = passwordInput.getAttribute("type") === "password"

  passwordInputs.setAttribute("type", isPasswordType ? "text" : "password");
  eyeButtons.setAttribute("src", `img/eye-${isPasswordType ? 'on' : 'off'}.svg`);
}


$("#email").addEventListener("focusout", handleEmailError);
$all("#passwords").addEventListener("focusout", handlePasswordError);
$("form").addEventListener("submit", handleSignUp);
$all(".eye-off").addEventListener("click", handleToggleEye);