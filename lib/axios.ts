import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://bootcamp-api.codeit.kr/api/linkbrary/v1",
});

export default axiosInstance;
