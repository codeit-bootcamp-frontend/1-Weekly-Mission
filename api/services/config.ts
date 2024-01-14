import axios from "axios";

const BASE_URL = "https://bootcamp-api.codeit.kr/api/linkbrary/v1";
const SAMPLE_USER_ENDPOINT = "/api/users/1";
const SAMPLE_FOLDER_ENDPOINT = "/api/sample/folder";
const USERS_ENDPOINT = "/users";
const SIGNIN_ENDPOINT = "/auth/sign-in";
const SIGNUP_ENDPOINT = "/auth/sign-up";
const FOLDER_ENDPOINT = `/api/folders`;
const LINKS_ENDPOINT = `/api/links`;

const instance = axios.create({
  baseURL: "https://bootcamp-api.codeit.kr/api/linkbrary/v1",
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
  FOLDER_ENDPOINT,
  LINKS_ENDPOINT,
};
