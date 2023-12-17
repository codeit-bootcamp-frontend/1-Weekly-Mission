import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://bootcamp-api.codeit.kr/api/",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
