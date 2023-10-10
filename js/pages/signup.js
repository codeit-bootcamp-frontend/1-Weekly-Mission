import { $, $all, addClass, removeClass, createElement } from "../utils.js";
import { REG_EXP, DB_USERS } from "../constants.js";
import { handleEmailError } from "./signin.js";

// 인풋 에러 요소 출력
function displayInputError(input, message) {
  const element = createElement();
  element.textContent = message;
  addClass(element, "input-error-message");
  addClass(input, "input-error");

  const passwordWrappers = $all(".password-wrapper");

  if (input.id === "password") {
    addClass(element, "input-error-message");
    addClass(input, "input-error");
    passwordWrappers[0].append(element);
    return;
  }

  if (input.id === "password-verify") {
    addClass(element, "input-error-message");
    addClass(input, "input-error");
    passwordWrappers[1].append(element);
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

  if (input.id === "password-verify") {
    const passwordWrapper = $all(".password-wrapper")[1]; // password-verify의 부모 요소 선택
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

// 이메일 공란, 유효성, 중복 여부 확인
function handleSignUpEmailError(event) {
  const emailInput = $("#email");

  // 중복 확인
  if (event.target.value === "test@codeit.com") {
    displayInputError(emailInput, "이미 사용 중인 이메일입니다.");
  } else {
    // 이전에 표시된 에러 메시지 제거
    removeInputError(emailInput);

    // 이메일 공란 및 유효성 에러 확인
    handleEmailError(event);
  }
}

// 비밀번호 공란, 유효성, 일치 여부 확인
function handleSignUpPasswordError(event) {
  const passwordInput = $("#password");
  const passwordInputVerify = $("#password-verify");

  // 각 입력 필드에 대한 에러 메시지 초기화
  removeInputError(passwordInput);
  removeInputError(passwordInputVerify);

  if (!passwordInput.value) {
    displayInputError(passwordInput, "비밀번호를 입력해주세요.");
  } else if (passwordInput.value.length < 8 || !REG_EXP.PASSWORD.test(passwordInput.value)) {
    displayInputError(passwordInput, "비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요.");
  }

  if (passwordInput.value !== passwordInputVerify.value && passwordInputVerify.value) {
    displayInputError(passwordInputVerify, "비밀번호가 일치하지 않습니다.");
  }
}

// 유저 DB 추가 가능 여부 확인
function isPossibleUser(email) {
  const userIndex = DB_USERS.findIndex((dbUser) => {
    return dbUser.email === email;
  });

  return userIndex === -1; // 일치하는 사용자가 없을 때 true를 반환합니다.
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

  // 이전에 표시된 에러 메시지 제거
  removeInputError(emailInput);
  removeInputError(passwordInput);
  removeInputError(passwordInputVerify);

  const emailError = handleSignUpEmailError(emailInput);
  const passwordError = handleSignUpPasswordError(passwordInput, passwordInputVerify);

  if (!isPossibleUser(emailInput.value) && !emailError && !passwordError) {
    return signUpSuccess();
  } else {
    // 문제가 있는 경우 에러 메세지로 알림
    displayInputError(emailInput, "유효하지 않은 회원가입 시도입니다.");
  }
}

// 회원가입 버튼 클릭 시
const signUpButton = $("#signup-button");
signUpButton.addEventListener("click", handleSignUp);

// Enter 키 입력 시 회원가입
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleSignUp(event);
  }
});

// 비밀번호 eye 토글
function handleToggleEye(eyeButton, passwordInput) {
  const isPasswordType = passwordInput.getAttribute("type") === "password";

  passwordInput.setAttribute("type", isPasswordType ? "text" : "password");
  eyeButton.setAttribute("src", `img/eye-${isPasswordType ? 'on' : 'off'}.svg`);
}


$("#email").addEventListener("focusout", handleSignUpEmailError);
$all(".passwords").forEach((passwordInput) => {
  passwordInput.addEventListener("focusout", handleSignUpPasswordError);
});
$("form").addEventListener("submit", handleSignUp);
$all(".eye-off").forEach((eyeButton, index) => {
  const passwordInput = $all(".passwords")[index]; // 해당 인덱스의 비밀번호 필드 가져오기
  eyeButton.addEventListener("click", () => handleToggleEye(eyeButton, passwordInput));
});
