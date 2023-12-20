import { axiosInstance } from "./axiosInstance";

export default async function getSignIn(email = "", password = "") {
  try {
    const response = await axiosInstance.post("/sign-in", {
      email: email,
      password: password,
    });
    return response.data;
  } catch (e) {
    console.log(e);
    return;
  }
}
