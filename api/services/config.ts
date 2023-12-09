import axios from "axios";

const BASE_URL = "https://bootcamp-api.codeit.kr";
const SAMPLE_USER_ENDPOINT = "/api/users/1";
const SAMPLE_FOLDER_ENDPOINT = "/api/sample/folder";
const USERS_ENDPOINT = "/api/users";
const SIGNIN_ENDPOINT = "/api/sign-in";
const SIGNUP_ENDPOINT = "/api/sign-up";

const instance = axios.create({
  baseURL: "https://bootcamp-api.codeit.kr",
  timeout: 3000,
});

export {
  BASE_URL,
  SAMPLE_USER_ENDPOINT,
  SAMPLE_FOLDER_ENDPOINT,
  USERS_ENDPOINT,
  instance,
  SIGNIN_ENDPOINT,
  SIGNUP_ENDPOINT,
};
