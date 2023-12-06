import { axiosInstance } from "./axiosInstance";
import { SHARED_USER_ID } from "./constants";

export default async function getSharedUser() {
  const response = await axiosInstance.get(`${SHARED_USER_ID}/user`);
  return response?.data;
}
