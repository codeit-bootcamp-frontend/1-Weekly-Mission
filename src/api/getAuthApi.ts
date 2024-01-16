/* signin, signup에 필요한 api*/

import { axiosInstance } from "./axiosInstance";
import { getCookie } from "@/utils/manageCookie";

// signup 페이지에서 쓰이는 이메일 중복 체크 api.
export async function getEmailCheck(email = "") {
  const response = await axiosInstance.post(`users/check-email`, {
    email: email,
  });
  return response;
}

// signup 페이지에서 쓰이는 회원가입 api
export async function getSignUp(email = "", password = "") {
  const response = await axiosInstance.post("auth/sign-up", {
    email: email,
    password: password,
  });
  return response;
}

// signin 페이지에서 쓰이는 로그인 api
export async function getSignIn(email = "", password = "") {
  const response = await axiosInstance.post("auth/sign-in", {
    email: email,
    password: password,
  });
  return response;
}

// refresh token으로 새 token 발급받는 api
export async function getNewToken() {
  const refreshToken = getCookie("refreshToken");
  const response = await axiosInstance.post(`/auth/refresh-token`, {
    refresh_token: refreshToken,
  });
  return response;
}
