import {
  redirectPath,
  responseData,
  isResponseSuccess,
  getEndpoint,
  setLocalStorageToken,
} from "../constants/common.js";

const endpoint = getEndpoint("auth", "signUp");

const requsetBody = (email, password) => {
  return {
    email,
    password,
  };
};

const requestSignup = async (email, password, ismismatchPassword) => {
  try {
    if (!ismismatchPassword) {
      return false;
    }
    const response = await axios.post(endpoint, requsetBody(email, password));

    if (isResponseSuccess(response)) {
      setLocalStorageToken(responseData(response));
      redirectPath;
      return true;
    }
    return false;
  } catch (error) {
    console.error("request-signup status:", error.response.status);
    return false;
  }
};

export default requestSignup;
