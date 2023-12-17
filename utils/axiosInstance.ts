import axios from "axios";
import Router from "next/router";

export const axiosInstance = axios.create({
  baseURL: "https://bootcamp-api.codeit.kr/api/",
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      Router.push("/user/signin");
    }
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});
