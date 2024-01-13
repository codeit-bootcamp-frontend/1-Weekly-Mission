import { axiosInstance } from "./axiosInstance";

export default async function getSignIn(email = "", password = "") {
  const response = await axiosInstance.post("auth/sign-in", {
    email: email,
    password: password,
  });
  return response;
}
