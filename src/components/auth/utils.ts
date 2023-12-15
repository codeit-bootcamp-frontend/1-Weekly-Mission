import { PasswordInputProps } from "./Sign/PasswordInput";

export type Token = {
  accessToken: string;
  refreshToken: string;
};

export const EMAIL_PATTERN =
  /^([\w\.\_\-])*[a-zA-Z0-9]+([\w\.\_\-])*([a-zA-Z0-9])+([\w\.\_\-])+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,8}$/;

export const PASSWORD_PATTERN = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export const ERROR_MESSAGES = {
  email: {
    emptyInput: "이메일을 입력해주세요.",
    invalidInput: "올바른 이메일 주소가 아닙니다.",
    unavailableEmail: "이미 사용 중인 이메일입니다.",
  },
  password: {
    emptyInput: "비밀번호를 입력해주세요.",
    invalidInput: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
  },
  passwordCheck: {
    invalidInput: "비밀번호가 일치하지 않아요.",
  },
};

export const loadPage = async function () {
  if (localStorage.getItem("accessToken")) {
    location.replace("/folder.html");
  }
};

export const getAccessToken = async function (response: any) {
  const responseData = await response.json(); // 응답의 JSON 데이터 추출
  const accessToken = responseData.data.accessToken;
  localStorage.setItem("accessToken", accessToken);
};

export const checkEmailInput = (type: "로그인" | "회원가입", inputValue: string) => {
  let error = "";

  switch (type) {
    case "로그인":
      if (inputValue == "") {
        error = ERROR_MESSAGES.email.emptyInput;
      } else if (EMAIL_PATTERN.test(inputValue) == false) {
        error = ERROR_MESSAGES.email.invalidInput;
      }
      break;
    case "회원가입":
      if (inputValue == "") {
        error = ERROR_MESSAGES.email.emptyInput;
      } else if (EMAIL_PATTERN.test(inputValue) == false) {
        error = ERROR_MESSAGES.email.unavailableEmail;
      }
      break;
  }
  return error;
};

export const checkPasswordInput = (
  type: PasswordInputProps["type"],
  inputValue: string,
  password?: PasswordInputProps["password"]
) => {
  let error = "";

  switch (type) {
    case "기본":
      if (inputValue == "") {
        error = ERROR_MESSAGES.password.emptyInput;
      } else if (PASSWORD_PATTERN.test(inputValue) == false) {
        error = ERROR_MESSAGES.password.invalidInput;
      }
      break;
    case "재확인":
      if (inputValue !== password) {
        error = ERROR_MESSAGES.passwordCheck.invalidInput;
      }
      break;
  }
  return error;
};
