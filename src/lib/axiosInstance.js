import axios from "axios";
export const axiosInstance = axios.create({
  baseUrl: "https://bootcamp-api.codeit.kr/api/",
});
