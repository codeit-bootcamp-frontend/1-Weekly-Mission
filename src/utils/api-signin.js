import API_ENDPOINTS from "../constants/api-endpoints.js";

const baseUrl = API_ENDPOINTS.baseUrl;
const endpoint = API_ENDPOINTS.auth.signIn;
const signinURL = baseUrl + endpoint;

const apiSignin = async (email, password) => {
  try {
    const response = await axios.post(
      signinURL,
      {
        email,
        password,
      },
      { validateStatus: false }
    );

    if (response.status === 200) {
      return true;
    }

    return false;
  } catch (error) {
    console.error("Sign-in error:", error);
    return false;
  }
};

export default apiSignin;
