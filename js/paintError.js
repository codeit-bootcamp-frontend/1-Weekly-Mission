const ERROR_MSGS = {
  emptyInput: {
    email: "이메일을 입력해주세요.",
    password: "비밀번호를 입력해주세요.",
    text: "비밀번호를 입력해주세요.",
  },
  invalidInput: {
    email: "올바른 이메일 주소가 아닙니다.",
    password: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
    text: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
    "password-check": "비밀번호가 일치하지 않아요.",
  },
  invalidLogin: {
    email: "이메일을 확인해주세요.",
    password: "비밀번호를 확인해주세요.",
  },
  unavailableEmail: {
    email: "이미 사용 중인 이메일입니다.",
  },
};

const paintErrorMsg = ({ error, type, target }) => {
  target.classList.add("form__input-box--error");
  const $errorMsg = target.parentElement.querySelector(".error-msg");
  $errorMsg.textContent = ERROR_MSGS[error][type];
};

const removeErrorMsg = (target) => {
  target.classList.remove("form__input-box--error");
  const $errorMsg = target.parentElement.querySelector(".error-msg");
  $errorMsg.textContent = "";
};

export { paintErrorMsg, removeErrorMsg };
