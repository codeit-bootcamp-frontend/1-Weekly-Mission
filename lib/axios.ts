import { BASE_URL, ENDPOINT_REFRESH_TOKEN } from "@/constants/constants";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import mem from "mem";
import removeTokens from "@/utils/removeTokens";

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 100000,
});

const getRefreshToken = mem(
  async (): Promise<string | void> => {
    try {
      const {
        data: { accessToken, refreshToken },
      } = await axios.get<{ accessToken: string; refreshToken: string | null }>(
        ENDPOINT_REFRESH_TOKEN
      );

      localStorage.setItem("accessToken", accessToken);

      if (refreshToken !== null) {
        localStorage.setItem("refreshToken", refreshToken);
      }
      return accessToken;
    } catch (error) {
      removeTokens();
    }
  },
  { maxAge: 1000 }
);

instance.interceptors.response.use(
  (res) => res,
  async (err) => {
    const {
      config,
      response: { status },
    } = err;

    if (config.url === ENDPOINT_REFRESH_TOKEN || status !== 401 || config.sent)
      return Promise.reject(err);

    config.sent = true;
    const accessToken = await getRefreshToken();

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
      return config;
    }

    return Promise.reject(err);
  }
);

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
