import { isEmpty } from "@/utils/utility";
import axios from "axios";

declare module "axios" {
  export interface AxiosRequestConfig {
    path?: {};
    query?: {};
    type?: "auth" | "default";
  }
}

const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_KEY,

  headers: {
    accept: "application/json",
  },
});

request.interceptors.request.use(
  (config) => {
    const { type = "default" } = config;
    const accessToken = localStorage.getItem("accessToken");

    if (config.path && config.url) {
      for (const [key, value] of Object.entries(config.path)) {
        config.url = config.url.replace(`:${key}`, String(value));
      }
    }

    if (!isEmpty(config.query)) {
      const query = new URLSearchParams(config.query).toString();
      config.url += "?" + query;
    }

    if (type === "auth") {
      if (accessToken) {
        config.headers["Authorization"] = `Bearer ${accessToken}`;
      }
    }

    return config;
  },
  (error) => {
    console.error("ApiConfig Error : ", error.message);
    return;
  }
);

export default request;
