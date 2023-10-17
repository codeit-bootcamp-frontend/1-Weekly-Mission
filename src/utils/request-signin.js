import {
  redirectPath,
  responseData,
  isResponseSuccess,
  getEndpoint,
  setLocalStorageToken,
} from "../constants/common.js";

const endpoint = getEndpoint("auth", "signIn");

const requsetBody = (email, password) => {
  return {
    email,
    password,
  };
};

const requestSignin = async (email, password) => {
  try {
    const response = await axios.post(endpoint, requsetBody(email, password));

    if (isResponseSuccess(response)) {
      setLocalStorageToken(responseData(response));
      redirectPath();
      return true;
    }
    return false;
  } catch (error) {
    console.error("request-signin status:", error.response.status);
    return false;
  }
};

export default requestSignin;
