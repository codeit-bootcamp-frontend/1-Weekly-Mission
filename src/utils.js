const SIGN_INPUT_ERROR_CLASSNAME = "input--error";
const ERROR_MESSAGE_CLASSNAME = "error__message--on";
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const PASSWORD_REGEX = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/g;

//에러 출력
export function addInputError(elements, message) {
  elements.input.className += ` ${SIGN_INPUT_ERROR_CLASSNAME}`;
  elements.error__message.className += ` ${ERROR_MESSAGE_CLASSNAME}`;
  elements.error__message.textContent = message;
}

//에러 삭제
export function removeInputError(elements) {
  elements.input.classList.remove(SIGN_INPUT_ERROR_CLASSNAME);
  elements.error__message.classList.remove(ERROR_MESSAGE_CLASSNAME);
  elements.error__message.textContent = "";
}

//이메일 형식 확인
export function isEmailValid(email) {
  return new RegExp(EMAIL_REGEX).test(email);
}

//비밀번호 형식 확인
export function isPasswordValid(password) {
  return new RegExp(PASSWORD_REGEX).test(password);
}

//패스워드 토글
export function togglePassword(input, toggleButton) {
  if (input.getAttribute("type") === "password") {
    input.setAttribute("type", "text");
    toggleButton.getElementsByTagName("img")[0].setAttribute("src", "./images/eye-on.svg");
    return;
  }
  input.setAttribute("type", "password");
  toggleButton.getElementsByTagName("img")[0].setAttribute("src", "./images/eye-off.svg");
}

//유저 정보 대입
export const TEST_USER = {
  email: "test@codeit.com",
  password: "codeit101",
};
