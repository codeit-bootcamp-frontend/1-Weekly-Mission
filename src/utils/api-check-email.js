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
      return false;
    }
    return true;
  } catch (error) {
    console.log("request-check-email status:", error.response.status);
    return true;
  }
};

export default requestCheckEmail;
