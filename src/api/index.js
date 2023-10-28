import axios from "axios";
import { isEmpty } from "../utils/utility";

const request = axios.create({
  baseURL: process.env.REACT_APP_API,

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
      config.url +=
        "?" +
        Object.keys(config.query)
          .map((key) => key + "=" + config.query[key])
          .join("&");
    }

    return config;
  },
  (error) => {
    console.log("ApiConfig Error : ", error.message);
    return;
  }
);

export default request;
