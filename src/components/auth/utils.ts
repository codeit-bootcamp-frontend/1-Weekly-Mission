import { URL } from "@/src/global/api";
import { PasswordInputProps } from "./Sign/PasswordInput";
import { SignButtonProps } from "./Sign/SignButton";
import { useRouter } from "next/router";

export interface Token {
  accessToken: string;
  refreshToken: string;
}

export const EMAIL_PATTERN =
  /^([\w\.\_\-])*[a-zA-Z0-9]+([\w\.\_\-])*([a-zA-Z0-9])+([\w\.\_\-])+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,8}$/;
// 이제 안씀...api에서 해줌

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

export const getAccessToken = async function (response: any) {
  const responseData = await response.json(); // 응답의 JSON 데이터 추출
  const accessToken = responseData.data.accessToken;
  localStorage.setItem("accessToken", accessToken);
};

export const checkEmailInput = async (type: "로그인" | "회원가입", inputValue: string) => {
  let error = "";
  const result = await checkDuplicationEmail(inputValue);
  if (result === 200) return error;

  switch (type) {
    case "로그인":
      if (result === 400 && inputValue == "") {
        error = ERROR_MESSAGES.email.emptyInput;
      } else if (result === 400) {
        error = ERROR_MESSAGES.email.invalidInput;
      }
      break;
    case "회원가입":
      if (result === 400 && inputValue == "") {
        error = ERROR_MESSAGES.email.emptyInput;
      } else if (result === 400) {
        error = ERROR_MESSAGES.email.invalidInput;
      } else if (result === 409) {
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

export const checkDuplicationEmail = async function (inputValue: string) {
  const path = "check-email";
  const response = await fetch(URL + path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: inputValue }),
  });
  return response.status;
};

export const trySign = async ({ type, email, password }: SignButtonProps) => {
  const router = useRouter();
  const path = type === "로그인" ? "sign-in" : "sign-up";

  try {
    const response = await fetch(URL + path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const statusCode = response.status; // response.ok 는 200~299까지
    if (statusCode === 200) {
      getAccessToken(response);
      router.push("/folder");
    } else {
      checkEmailInput(type, email);
      checkPasswordInput("기본", password);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};
