import { axiosInstance } from "./axiosInstance";

export default async function getEmailCheck(email = "") {
  const response = await axiosInstance.post(`users/check-email`, {
    email: email,
  });
  return response;
}
