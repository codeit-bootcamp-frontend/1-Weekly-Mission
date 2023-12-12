import { axiosInstance } from "./axiosInstance";

export default async function getEmailCheck(email = "") {
  try {
    const response = await axiosInstance.post(`check-email`, {
      email: email,
    });
    return response.data;
  } catch (e) {
    return;
  }
}
