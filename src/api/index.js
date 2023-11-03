import axios from "axios";

const api = axios.create({
  baseURL: "https://bootcamp-api.codeit.kr/api/",
});

const fetch = async (options) => {
  try {
    const response = api({ ...options });
    return (await response).data;
  } catch (error) {
    throw error;
  }
}

export default fetch;