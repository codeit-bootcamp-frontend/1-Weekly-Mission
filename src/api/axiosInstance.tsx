import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://bootcamp-api.codeit.kr/api/",
  headers: {
    "Content-Type": "application/json",
    withCredentials: true,
  },
});

axiosInstance.interceptors.request.use((config) => {
  if (!config.headers) return config;
  if (typeof window !== "undefined") {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken && config.headers) {
      config.headers["Authorization"] = accessToken;
    }
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (error) => {
    if (error.config && error.response && error.response.status === 401) {
      error.config._retry = true;
      const refreshtoken = localStorage.getItem("refreshToken");
      error.config.headers.RefreshToken = `${refreshtoken}`;
      return axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/auth/me`, {
          headers: {
            RefreshToken: `${refreshtoken}`,
            "Content-Type": "application/json",
            withCredentials: true,
          },
        })
        .then(async (res) => {
          if (res.status === 200 && res.data.accessToken) {
            localStorage.setItem("accessToken", res.data.accessToken);
            const accesstoken = localStorage.getItem("accessToken");
            error.config.headers["Authorization"] = `${accesstoken}`;
            return axiosInstance(error.config);
          }
        });
    }
    return Promise.reject(error);
  },
);
