import { getCookie } from "@/utils/manageCookie";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://bootcamp-api.codeit.kr/api/linkbrary/v1/",
  headers: {
    "Content-Type": "application/json",
    withCredentials: true,
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = getCookie("accessToken");
    config.headers["Authorization"] = `Bearer ${accessToken}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
