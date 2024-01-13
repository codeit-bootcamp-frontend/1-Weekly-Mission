import { axiosInstance } from "./axiosInstance";

export default async function getSignUp(email = "", password = "") {
  const response = await axiosInstance.post("auth/sign-up", {
    email: email,
    password: password,
  });
  return response;
}
