import { BASE_URL } from "utils/constants.js";

export const fetchClient = async ({ url, method, body }) => {
  try {
    const response = await fetch(`${BASE_URL}/${url}`, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(response.status);
    }
  } catch (error) {
    throw error;
  }
};

export const fetchClientJson = async ({ url, method, body }) => {
  try {
    const response = await fetch(`${BASE_URL}/${url}`, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(response.status);
    } else {
      const result = await response.json();
      return result;
    }
  } catch (error) {
    throw error;
  }
};
