import axios, { AxiosError, AxiosResponse } from "axios";
import { API_BASE_URL } from "src/constants/common";

export const instance = axios.create({
  baseURL: API_BASE_URL,
});

function responsefulfilled(res: AxiosResponse) {
  if (200 <= res.status && res.status < 300) {
    return res.data;
  }
  return Promise.reject(res.data);
}

function responseRejected(error: AxiosError) {
  return error;
}

instance.interceptors.response.use(responsefulfilled, responseRejected);
