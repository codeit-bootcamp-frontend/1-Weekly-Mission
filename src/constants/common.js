import { EMAIL_PATTERN, PASSWORD_PATTERN } from "./regexp.js";
import API_ENDPOINTS from "./api-endpoints.js";

const ERROR_CLASS_NAME = "items__input--error";

const TEST_ACCOUNT = {
  email: "test@codeit.com",
  pw: "codeit101",
};

const REDIRECT_PATH = "/folder";

const VALUE_EMPTY = "";

const EYE_ICON_PATH = {
  eye_on: "../assets/eye-on.svg",
  eye_off: "../assets/eye-off.svg",
};

const HTTP_STATUS_OK = 200;

const baseUrl = API_ENDPOINTS.baseUrl;

axios.defaults.baseURL = baseUrl;

const getRefreshToken = () => localStorage.getItem("refreshToken");

const responseData = (response) => response.data.data;

const isResponseSuccess = (response) => response.status === HTTP_STATUS_OK;

const isEmpty = (emailValue) => emailValue === VALUE_EMPTY;

const isValidEmail = (email) => EMAIL_PATTERN.test(email);

const isValidPassword = (password) => PASSWORD_PATTERN.test(password);

const getEndpoint = (endpoint) => API_ENDPOINTS.auth[endpoint];

const localStorageSetToken = (responseData) => {
  const getResponseAccessToken = responseData.accessToken;
  const getResponseRefreshToken = responseData.refreshToken;
  localStorage.setItem("accessToken", getResponseAccessToken);
  localStorage.setItem("refreshToken", getResponseRefreshToken);
};

export {
  ERROR_CLASS_NAME,
  TEST_ACCOUNT,
  REDIRECT_PATH,
  VALUE_EMPTY,
  EYE_ICON_PATH,
  HTTP_STATUS_OK,
  baseUrl,
  getRefreshToken,
  responseData,
  isResponseSuccess,
  isEmpty,
  isValidEmail,
  isValidPassword,
  getEndpoint,
  localStorageSetToken,
};
