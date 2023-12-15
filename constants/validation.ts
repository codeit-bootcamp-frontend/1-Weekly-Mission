interface MEMBER_INTERFACE {
  [key: string]: {
    message: string;
    require: string;
    fail: string;
  };
}

interface VALIDATION_TEXT_INTERFACE {
  [key: string]: RegExp;
}

interface INPUT_PLACEHOLDER_INTERFACE {
  email: string;
  password: string;
  passwordConfirm: string;
}

const LABEL_TO_KOR: Record<string, string> = {
  email: "이메일",
  password: "비밀번호",
  passwordConfirm: "비밀번호 확인",
};

const REGEXP_TEXT_EMAIL = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
const REGEXP_TEXT_PASSWORD = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const ERROR_MESSAGE_PASSWORD_PASSWORD_CONFIRM = "비밀번호가 일치하지 않아요.";

const ERROR_MESSAGE: MEMBER_INTERFACE = {
  email: {
    message: "올바른 이메일 주소가 아닙니다.",
    require: "이메일을 입력해주세요.",
    fail: "이메일을 확인해주세요.",
  },
  password: {
    message: "비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요.",
    require: "비밀번호를 입력해주세요.",
    fail: "비밀번호를 확인해주세요.",
  },
  passwordConfirm: {
    message: "비밀번호는 영문, 숫자 조합 8자 이상 입력해주세요.",
    require: "비밀번호 확인을 입력해주세요.",
    fail: "비밀번호 확인을 확인해주세요.",
  },
};

const INPUT_PLACEHOLDER: INPUT_PLACEHOLDER_INTERFACE = {
  email: "이메일을 입력해 주세요.",
  password: "비밀번호를 입력해 주세요.",
  passwordConfirm: "비밀번호와 일치하는 값을 입력해주세요.",
};

const VALIDATION_TEXT: VALIDATION_TEXT_INTERFACE = {
  email: REGEXP_TEXT_EMAIL,
  password: REGEXP_TEXT_PASSWORD,
};

export {
  LABEL_TO_KOR,
  ERROR_MESSAGE_PASSWORD_PASSWORD_CONFIRM,
  ERROR_MESSAGE,
  VALIDATION_TEXT,
  INPUT_PLACEHOLDER,
};
