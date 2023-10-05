import { EMAIL_PATTERN } from "../components/regexp.js";

const TEST_ACCOUNT = {
  email: "test@codeit.com",
  pw: "codeit101",
};

const ERROR_MESSAGES = {
  email: {
    empty: "이메일을 입력해주세요.",
    invalid: "올바른 이메일 주소가 아닙니다.",
  },
  password: {
    empty: "비밀번호를 입력해주세요.",
  },
  submit: {
    email: "이메일을 확인해주세요.",
    password: "비밀번호를 확인해주세요.",
  },
};

const REDIRECT_PATH = "/folder";

const VALUE_EMPTY = "";

const EYE_ICON_PATH = {
  eye_on: "../src/images/eye-on.svg",
  eye_off: "../src/images/eye-off.svg",
};

const isValidEmail = (email) => EMAIL_PATTERN.test(email);

export { TEST_ACCOUNT, ERROR_MESSAGES, REDIRECT_PATH, VALUE_EMPTY, EYE_ICON_PATH, isValidEmail };
