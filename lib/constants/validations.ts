export const signInEmailRules = {
  required: '이메일을 입력해주세요.',
  pattern: {
    value: /[0-9a-zA-Z]*@[0-9a-zA-Z]*\.[a-zA-Z]{2,3}$/i,
    message: '올바른 이메일 주소가 아닙니다.',
  },
};

export const signInPwRules = {
  required: '비밀번호를 입력해주세요.',
};

export const signUpEmailRules = {
  required: '이메일을 입력해주세요.',
  pattern: {
    value: /[0-9a-zA-Z]*@[0-9a-zA-Z]*\.[a-zA-Z]{2,3}$/i,
    message: '올바른 이메일 주소가 아닙니다.',
  },
};

export const signUpPwRules = {
  required: '비밀번호를 입력해주세요.',
  pattern: {
    value: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/,
    message: '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.',
  },
};
