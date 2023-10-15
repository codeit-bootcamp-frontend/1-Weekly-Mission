import { storeAccessToken } from "../../utils/auth.js";
import {
  BASE_URL,
  CHECK_EMAIL_ENDPOINT,
  SIGNIN_ENDPOINT,
  SIGNUP_ENDPOINT,
} from "../services/endpoints.js";

export const signin = async (id, password) => {
  try {
    const response = await fetch(`${BASE_URL}${SIGNIN_ENDPOINT}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: id,
        password,
      }),
    });
    const result = await response.json();
    const token = result.data.accessToken;
    if (response.status === 200) {
      location.href = "/folder";
    }
    if (token) {
      storeAccessToken(token);
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const signup = async (email, password) => {
  try {
    const response = await fetch(`${BASE_URL}${SIGNUP_ENDPOINT}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const result = await response.json();
    const token = result.data.accessToken;
    if (token) {
      return token;
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const checkEmailDuplication = async (email) => {
  try {
    const response = await fetch(`${BASE_URL}${CHECK_EMAIL_ENDPOINT}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });
    const result = await response.json();
    if (response.status === 200) {
      return result.data.isUsableNickname;
    } else if (response.status === 409) {
      return result.error.message;
    }
  } catch (error) {
    console.log(error.message);
  }
};
