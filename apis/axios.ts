import axios from "axios";

import { localStorageAccessToken } from "@/constants/localStorage";
import LocalStorage from "@/utils/localStorage";

const BASE_URL = "https://bootcamp-api.codeit.kr/api";

const Instance = () => {
  const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
    // withCredentials: true,
  });

  // request insterceptor 요청 전 헤더에 토큰 등록
  instance.interceptors.request.use(
    (config) => {
      const accessToken = LocalStorage.getItem("accessToken");
      config.headers.Authorization = `Bearer ${accessToken}`;
      return config;
    },
    (err) => Promise.reject(err)
  );

  return instance;
};

export const http = Instance();
