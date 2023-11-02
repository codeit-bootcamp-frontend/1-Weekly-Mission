import axios from "axios";

const BASE_URL = `https://bootcamp-api.codeit.kr`;
const USER_ID = `users/1`;

export async function useGetUser() {
  const response = await axios.get(`${BASE_URL}/api/${USER_ID}`);
  return response?.data;
}
