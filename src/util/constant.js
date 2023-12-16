const INPUT_TYPE = {
  email: { type: "email", placeholder: "이메일을 입력해주세요." },
  password: {
    type: "password",
    placeholder: {
      signIn: "비밀번호를 입력해주세요.",
      signUp: "영문, 숫자를 조합해 8자 이상 입력해 주세요.",
    },
  },
  passwordCheck: {
    type: "password",
    placeholder: "비밀번호와 일치하는 값을 입력해 주세요",
  },
};

const REG_EMAIL = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const REG_PASSWORD = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

const ERROR_MESSAGE = {
  emailRequired: "이메일을 입력해 주세요.",
  emailInvalid: "올바른 이메일 주소가 아닙니다.",
  emailCheck: "이메일을 확인해 주세요.",
  emailDuplicated: "이미 사용 중인 이메일입니다",
  passwordRequired: "비밀번호를 입력해 주세요.",
  passwordInvalid: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
  passwordCheck: "비밀번호를 확인해 주세요.",
  passwordNotMatch: "비밀번호가 일치하지 않아요",
};

export { INPUT_TYPE, REG_EMAIL, REG_PASSWORD, ERROR_MESSAGE };
