import axios from "axios";

const axiosInstance = axios.create({
  baseUrl: "https://bootcamp-api.codeit.kr/api",
});

export default axiosInstance;
