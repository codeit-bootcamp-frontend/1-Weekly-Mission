import { axiosInstance } from "./axiosInstance";

const USER_ID = `users/1`;

export async function getUser() {
  const response = await axiosInstance.get(`${USER_ID}`);
  return response?.data;
}
