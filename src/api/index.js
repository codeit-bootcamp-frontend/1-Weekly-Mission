import axios from "axios";
import { isEmpty } from "../utils/utility";

const request = axios.create({
  baseURL: process.env.REACT_APP_API ?? "https://bootcamp-api.codeit.kr",

  headers: {
    accept: "application/json",
  },
});

request.interceptors.request.use(
  (config) => {
    if (config.path) {
      for (const [key, value] of Object.entries(config.path)) {
        config.url = config.url.replace(`:${key}`, value);
      }
    }

    if (!isEmpty(config.query)) {
      const query = new URLSearchParams(config.query).toString();
      config.url += "?" + query;
    }

    return config;
  },
  (error) => {
    console.error("ApiConfig Error : ", error.message);
    return;
  }
);

export default request;
