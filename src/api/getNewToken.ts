import { getCookie } from "@/utils/manageCookie";
import { axiosInstance } from "./axiosInstance";

export default async function getNewToken() {
  const refreshToken = getCookie("refreshToken");
  const response = await axiosInstance.post(`/auth/refresh-token`, {
    refresh_token: refreshToken,
  });
  return response;
}
