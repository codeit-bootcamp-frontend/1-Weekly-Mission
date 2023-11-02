import axios from "axios";

const BASE_URL = `https://bootcamp-api.codeit.kr`;
const USER_ID = `users/1`;

export async function getAllCards(id = "") {
  let url = "";
  if (id === "") {
    url = `${BASE_URL}/api/${USER_ID}/links`;
  } else {
    const query = `?folderId=${id}`;
    url = `${BASE_URL}/api/${USER_ID}/links${query}`;
  }
  const response = await axios.get(`${url}`);
  return response?.data;
}
