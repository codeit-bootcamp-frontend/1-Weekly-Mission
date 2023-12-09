import { API_URL } from "@/config/apiUrl";
import { REG_EXP } from "./constant";

const isCheck = (value: string, location: string) => {
  return REG_EXP.CHECK_EMAIL.test(value) && location.indexOf("signup") > -1;
};

export const emailErrorMessage = async (value: string, location: string) => {
  if (!value.trim()) {
    return "empty";
  } else if (!REG_EXP.CHECK_EMAIL.test(value)) {
    return "wrong";
  } else if (isCheck(value, location)) {
    const res = await fetch(`${API_URL}check-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: value }),
    });
    if (res.status === 409) {
      return "already";
    } else if (res.status === 400) {
      return "wrong";
    } else if (res.status === 200) {
      return "";
    }
  }
  return "";
};

export const pwErrorMessage = (value: string) => {
  if (!value.trim()) {
    return "empty";
  } else if (!REG_EXP.CHECK_PASSWORD.test(value)) {
    return "terms";
  }
  return "";
};

export const pwChErrorMessage = (value: string, password: string) => {
  if (!value.trim()) {
    return "empty";
  } else if (value !== password) {
    return "check";
  }
  return "";
};
