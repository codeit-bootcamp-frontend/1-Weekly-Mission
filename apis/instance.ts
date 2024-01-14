import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const instance = axios.create({
  baseURL: "https://bootcamp-api.codeit.kr/api/linkbrary/v1",
  timeout: 1000,
});

export const request = (config: AxiosRequestConfig) => {
  const client = instance;
  return client(config);
};

const fetcher = async <T>(config: AxiosRequestConfig) => {
  const response = await request({ ...config });
  const { data, status }: { data: T; status: number } = response;

  return { data, status };
};

export default fetcher;
