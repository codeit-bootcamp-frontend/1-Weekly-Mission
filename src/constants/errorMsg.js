/**유효성 검사 에러 메세지 객체
 *
 */
const VALIDATION_ERRORS = {
  EMPTY_EMAIL: "이메일을 입력해주세요.",
  EMPTY_PWD: "비밀번호를 입력해주세요.",
  INVALID_EMAIL: "올바른 이메일 주소가 아닙니다.",
  INVALID_PWD: "비밀번호는 영문,숫자 조합 8자 이상 입력해주세요",
  MISMATCH_PWD: "비밀번호가 일치하지 않아요.",
  INUSE_EMAIL: "이미 사용 중인 이메일입니다.",
};

export { VALIDATION_ERRORS };
