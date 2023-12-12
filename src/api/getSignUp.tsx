import { axiosInstance } from "./axiosInstance";

export default async function getSignUp(email = "", password = "") {
  try {
    const response = await axiosInstance.post(`sign-up`, {
      email: email,
      password: password,
    });
    return response.data;
  } catch (e) {
    return;
  }
}
