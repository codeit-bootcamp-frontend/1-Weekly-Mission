import {
  getRefreshToken,
  setAccessToken,
  setRefreshToken,
} from "@/utils/localStorage";
import axios from "axios";

const BASE_URL = "https://bootcamp-api.codeit.kr";
const SAMPLE_USER_ENDPOINT = "/api/users/1";
const SAMPLE_FOLDER_ENDPOINT = "/api/sample/folder";
const USERS_ENDPOINT = "/api/users";
const SIGNIN_ENDPOINT = "/api/sign-in";
const SIGNUP_ENDPOINT = "/api/sign-up";
const FOLDER_ENDPOINT = `/api/folders`;
const LINKS_ENDPOINT = `/api/links`;

const instance = axios.create({
  baseURL: "https://bootcamp-api.codeit.kr",
  timeout: 3000,
});

instance.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;
    let res;
    if (error.response?.status === 401 && !originalRequest._retry) {
      res = await instance.post(
        "/api/refresh-token",
        {
          refresh_token: getRefreshToken(),
        },
        { _retry: true } as any
      );
      setAccessToken(res?.data.data.accessToken);
      setRefreshToken(res?.data.data.refreshToken);
      originalRequest._retry = true;
      return instance(originalRequest);
    }
    return Promise.reject(error);
  }
);

export {
  BASE_URL,
  SAMPLE_USER_ENDPOINT,
  SAMPLE_FOLDER_ENDPOINT,
  USERS_ENDPOINT,
  instance,
  SIGNIN_ENDPOINT,
  SIGNUP_ENDPOINT,
  FOLDER_ENDPOINT,
  LINKS_ENDPOINT,
};
