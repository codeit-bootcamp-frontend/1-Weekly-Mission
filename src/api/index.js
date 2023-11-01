import axios from "axios";

const api = axios.create({
  baseURL: "https://bootcamp-api.codeit.kr/api/",
});

export async function getAPI(url) {
  try {
    const response = await api(url);
    return response.data;
  } catch (error) {
    return error.response;
  }
}