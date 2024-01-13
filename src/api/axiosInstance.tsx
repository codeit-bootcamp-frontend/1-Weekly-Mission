import { getCookie, setCookie } from "@/utils/manageCookie";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://bootcamp-api.codeit.kr/api/linkbrary/v1/",
  headers: {
    "Content-Type": "application/json",
    withCredentials: true,
  },
});

const accessToken = getCookie("accessToken");

axiosInstance.interceptors.request.use(function (config) {
  config.headers["Authorization"] = accessToken;
  return config;
});
