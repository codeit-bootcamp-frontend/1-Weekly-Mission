import { isResponseSuccess, getEndpoint } from "../constants/common.js";

const endpoint = getEndpoint("user", "checkEmail");

const requsetBody = (email) => {
  return {
    email,
  };
};

const requestCheckEmail = async (email) => {
  try {
    const response = await axios.post(endpoint, requsetBody(email));

    if (isResponseSuccess(response)) {
      return true;
    }
    return false;
  } catch (error) {
    console.error("request-signup error:", error.response);
    return false;
  }
};

export default requestCheckEmail;
