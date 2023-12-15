import axios from "axios";

const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseUrl: "https://bootcamp-api.codeit.kr/api",
});

export default axiosInstance;
