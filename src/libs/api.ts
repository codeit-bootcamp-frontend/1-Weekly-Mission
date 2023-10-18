import axios from "axios";
import { API_BASE_URL } from "constants/common";

export const instance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
});

function responsefulfilled(res) {
  if (200 <= res.status && res.status < 300) {
    return res.data;
  }
  return Promise.reject(res.data);
}

function responseRejected(error) {
  return error;
}

// response 인터셉터
instance.interceptors.response.use(responsefulfilled, responseRejected);
