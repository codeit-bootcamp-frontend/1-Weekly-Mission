import { $, displayInputError, removeInputError, handleEmailError } from "../utils.js";
import { REG_EXP, DB_USERS } from "../constants.js";


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

  const emailError = handleEmailError(emailInput);
  const passwordError = handleSignUpPasswordError(passwordInput, passwordInputVerify);

  if (isPossibleUser(emailInput.value) && !emailError && !passwordError) {
    return signUpSuccess();
  } else {
    // 문제가 있는 경우 에러 메세지로 알림
    displayInputError(emailInput, "유효하지 않은 회원가입 시도입니다.");
  }
}

// Enter 키 입력 시 회원가입
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleSignUp(event);
  }
});


export { handleSignUpPasswordError, handleSignUp };