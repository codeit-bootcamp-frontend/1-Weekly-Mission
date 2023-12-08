export const INPUT_TEXT = {
  id: "이메일",
  password: "비밀번호",
  passwordCheck: "비밀번호 확인",
};

export const WRONG_VALUE_MESSAGE = {
  id: "이메일을 확인해주세요.",
  password: "비밀번호를 확인해주세요.",
  wrongId: "올바른 이메일주소가 아닙니다.",
  wrongPassword: "비밀번호는 영문, 숫자 조합 8자 이상입니다.",
  notSamePassword: "비밀번호가 다릅니다.",
  overlapId: "이미 사용 중인 이메일입니다.",
};

export const VISIBLE_PASSWORD = {
  visible: "비밀번호 보이기",
  hidden: "비밀번호 가리기",
};

export const PLACEHOLDER = {
  id: "이메일을 입력해주세요.",
  password: "비밀번호를 입력해주세요.",
};

export const VALID_PSW_REG = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
export const VALID_EMAIL_REG =
  /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
export const OVERLAP_EMAIL = "test@codeit.com";
