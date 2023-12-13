const emailFieldInfo = {
  fieldName: "email",
  regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  errorMessageEmpty: "이메일을 입력해주세요.",
  errorMessageInvalid: "올바른 이메일 주소가 아닙니다.",
};

const passwordFieldInfo = {
  signIn: {
    fieldName: "password",
    errorMessageEmpty: "비밀번호를 입력해주세요.",
  },
  signUp: {
    fieldName: "password",
    regex: /^.{6,}$/, // 최소 6자 이상
    errorMessageEmpty: "비밀번호를 입력해주세요.",
    errorMessageInvalid: "비밀번호는 최소 6자 이상이어야 합니다.",
  },
};

export { emailFieldInfo, passwordFieldInfo };
