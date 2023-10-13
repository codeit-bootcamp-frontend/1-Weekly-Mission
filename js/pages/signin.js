import { $, displayInputError, removeInputError } from "../utils.js";
import { DB_USERS } from "../constants.js";


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


export { handlePasswordError, handleSignIn };