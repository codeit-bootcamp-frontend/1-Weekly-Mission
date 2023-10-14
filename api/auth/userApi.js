import { storeAccessToken } from "../../utils/auth.js";
import { baseURL } from "../config.js";

export const signin = async (id, password) => {
  try {
    const response = await fetch(`${baseURL}/api/sign-in`, {
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
