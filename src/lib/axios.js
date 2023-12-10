import axios from "axios";

const instance = axios.create({
  baseURL: "https://bootcamp-api.codeit.kr/api/",
  headers: {
    Accept: "application/json, text/plain, /",
    "Content-Type": "multipart/form-data",
  },
});

export default instance;
