import axios from "axios";
import { getLocalStorage } from "./localStorage";

const instance = axios.create({
  baseURL: "https://bootcamp-api.codeit.kr/api",
});

/**
 * interceptors로 req 도중에 accessToken을 넣어서 요청하기
 */

instance.interceptors.request.use((config) => {
  const accessToken = getLocalStorage();

  if (accessToken) {
    config.headers.Authorization = accessToken;
  }

  return config;
});

export default instance;
