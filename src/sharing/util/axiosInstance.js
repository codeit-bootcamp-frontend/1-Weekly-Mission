import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://bootcamp-api.codeit.kr/api/linkbrary/v1",
});

axiosInstance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }

  return config;
});
