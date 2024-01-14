import axios, { AxiosRequestConfig } from "axios";

const instance = axios.create({
  baseURL: "https://bootcamp-api.codeit.kr/api/linkbrary/v1",
});

if (typeof window !== "undefined") {
  instance.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  });
}

const fetcher = async <T>(config: AxiosRequestConfig) => {
  const response = await instance({ ...config });
  const { data, status }: { data: T; status: number } = response;

  return { data, status };
};

export default fetcher;
