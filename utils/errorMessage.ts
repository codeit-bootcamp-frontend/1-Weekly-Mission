import { REG_EXP } from "./constant";

export const emailErrorMessage = (value: string) => {
  if (!value.trim()) {
    return "empty";
  } else if (!REG_EXP.CHECK_EMAIL.test(value)) {
    return "wrong";
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
