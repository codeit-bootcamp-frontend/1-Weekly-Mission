export const ERROR_MESSAGES = {
  email: {
    emptyInput: '이메일을 입력해주세요.',
    invalidInput: '올바른 이메일 주소가 아닙니다.',
    invalidLogin: '이메일을 확인해주세요.',
    unavailableEmail: '이미 사용 중인 이메일입니다.',
  },
  password: {
    emptyInput: '비밀번호를 입력해주세요.',
    invalidInput: '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.',
    invalidLogin: '비밀번호를 확인해주세요.',
  },
  passwordCheck: {
    invalidInput: '비밀번호가 일치하지 않아요.',
  },
};

export const EMAIL_REGEX =
  /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

export const PASSWORD_REGEX = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
