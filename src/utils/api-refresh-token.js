import {
  getRefreshToken,
  responseData,
  isResponseSuccess,
  getEndpoint,
  localStorageSetToken,
} from "../constants/common.js";

const endpoint = getEndpoint("refreshToken");
const requsetBody = { refresh_token: getRefreshToken() };

const refreshAccessToken = async () => {
  try {
    if (!getRefreshToken) {
      console.error("Refresh token not found.");
      return;
    }

    const response = await axios.post(endpoint, requsetBody);

    if (isResponseSuccess(response)) {
      localStorageSetToken(responseData(response));
      return true;
    }
  } catch (error) {
    console.error("api-refresh-token error:", error);
    localStorage.clear();
    return false;
  }
};

export default refreshAccessToken;
