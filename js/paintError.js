const ERROR_MESSAGES = {
  emptyInput: {
    email: "이메일을 입력해주세요.",
    password: "비밀번호를 입력해주세요.",
    text: "비밀번호를 입력해주세요.",
  },
  invalidInput: {
    email: "올바른 이메일 주소가 아닙니다.",
    password: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
    text: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
    passwordCheck: "비밀번호가 일치하지 않아요.",
  },
  invalidLogin: {
    email: "이메일을 확인해주세요.",
    password: "비밀번호를 확인해주세요.",
  },
  unavailableEmail: {
    email: "이미 사용 중인 이메일입니다.",
  },
};

const ERROR_MESSAGE_STYLE = "error-message";
const ERROR_INPUT_STYLE = "form__input-box--error";

const paintErrorMessage = ({ error, type, target }) => {
  target.classList.add(ERROR_INPUT_STYLE);
  const $errorMessage = target.parentElement.querySelector(
    `.${ERROR_MESSAGE_STYLE}`
  );
  $errorMessage.textContent = ERROR_MESSAGES[error][type];
};

const removeErrorMessage = (target) => {
  target.classList.remove(ERROR_INPUT_STYLE);
  const $errorMessage = target.parentElement.querySelector(
    `.${ERROR_MESSAGE_STYLE}`
  );
  $errorMessage.textContent = "";
};

export { paintErrorMessage, removeErrorMessage, ERROR_INPUT_STYLE };
