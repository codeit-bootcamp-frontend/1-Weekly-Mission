import axios from "axios";
import API_ENDPOINTS from "./endpoints";

const baseURL = API_ENDPOINTS.baseUrl;

const instance = axios.create({
  baseURL,
});

export default instance;
