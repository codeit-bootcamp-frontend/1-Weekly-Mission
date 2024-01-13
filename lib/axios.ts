import { BASE_URL } from "@/constants/constants";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import mem from "mem";
import removeTokens from "@/utils/removeTokens";

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 100000,
});

instance.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
  }
  return config;
});

const request = (config: AxiosRequestConfig) => {
  const client = instance;

  return client(config);
};

const fetcher = async <T>(
  config: AxiosRequestConfig
): Promise<AxiosResponse<T, any>> => {
  const response = await request({ ...config });

  return response;
};

export default fetcher;
