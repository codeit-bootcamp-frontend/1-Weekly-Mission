import { axiosInstance } from "./axiosInstance";
import USER_ID from "./constants";

export async function getUser() {
  const response = await axiosInstance.get(`${USER_ID}`);
  return response?.data;
}
