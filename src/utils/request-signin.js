import { responseData, isResponseSuccess, getEndpoint, localStorageSetToken } from "../constants/common.js";

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
      localStorageSetToken(responseData(response));
      return true;
    }
    return false;
  } catch (error) {
    console.error("request-signin error:", error.status);
    return false;
  }
};

export default requestSignin;
