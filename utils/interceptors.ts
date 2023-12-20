import axios from "axios";

const instance = axios.create();

instance.interceptors.request.use(function (config) {
  const currentToken = localStorage.getItem("myToken")!;
  if (!currentToken) {
    window.location.href = "/signin";
  }
  config.headers.Authorization = `Bearer ${currentToken}`;
  return config;
});

export default instance;
