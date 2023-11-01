const BASE_API_URL = "https://bootcamp-api.codeit.kr/api";

const USER_URL = (userId) => `${BASE_API_URL}/users/${userId}`;
const SAMPLE_FOLDER_URL = `${BASE_API_URL}/sample/folder`;

const API = {
  BASE: BASE_API_URL,
  USER: {
    DATA: USER_URL,
    LINKS: (userId) => `${USER_URL(userId)}/links`,
    FOLDERS: (userId) => `${USER_URL(userId)}/folders`,
  },
  SAMPLE: {
    FOLDER: SAMPLE_FOLDER_URL,
  },
};

export default API;
