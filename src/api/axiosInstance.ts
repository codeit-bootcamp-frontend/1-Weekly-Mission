import axios from "axios";
import { getCookie, setCookie } from "@/utils/manageCookie";
import { getNewToken } from "./getAuthApi";

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

axiosInstance.interceptors.response.use(
  (res) => res,
  async (error) => {
    const {
      config,
      response: { status },
    } = error;

    if (status === 401) {
      const originRequest = config;
      const { data } = await getNewToken();
      if (data) {
        setCookie("accessToken", data.accessToken);
        setCookie("refreshToken", data.refreshToken);
        originRequest.headers["Authorization"] = `Bearer ${data.accessToken}`;
        return axiosInstance(originRequest);
      }
    }
    return Promise.reject(error);
  },
);
