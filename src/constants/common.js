import { EMAIL_PATTERN, PASSWORD_PATTERN } from "./regexp.js";
import API_ENDPOINTS from "./api-endpoints.js";

const ERROR_CLASS_NAME = "items__input--error";

const REDIRECT_PATH = "/folder";

const VALUE_EMPTY = "";

const EYE_ICON_PATH = {
  eye_on: "../assets/eye-on.svg",
  eye_off: "../assets/eye-off.svg",
};

const HTTP_STATUS_OK = 200;

const baseUrl = API_ENDPOINTS.baseUrl;

const getAccessToken = localStorage.getItem("accessToken");

const redirectPath = () => {
  window.location.href = REDIRECT_PATH;
};

const responseData = (response) => response.data.data;

const isResponseSuccess = (response) => response.status === HTTP_STATUS_OK;

const isEmpty = (emailValue) => emailValue === VALUE_EMPTY;

const isValidEmail = (email) => EMAIL_PATTERN.test(email);

const isValidPassword = (password) => PASSWORD_PATTERN.test(password);

const getEndpoint = (section, endpoint) => API_ENDPOINTS[section][endpoint];

const setLocalStorageToken = (responseData) => {
  const getResponseAccessToken = responseData.accessToken;
  const getResponseRefreshToken = responseData.refreshToken;
  localStorage.setItem("accessToken", getResponseAccessToken);
  localStorage.setItem("refreshToken", getResponseRefreshToken);
};

axios.defaults.baseURL = baseUrl;

export {
  ERROR_CLASS_NAME,
  REDIRECT_PATH,
  VALUE_EMPTY,
  EYE_ICON_PATH,
  HTTP_STATUS_OK,
  baseUrl,
  getAccessToken,
  redirectPath,
  responseData,
  isResponseSuccess,
  isEmpty,
  isValidEmail,
  isValidPassword,
  getEndpoint,
  setLocalStorageToken,
};
