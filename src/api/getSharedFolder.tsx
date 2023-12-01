import { axiosInstance } from "./axiosInstance";
import { SHARED_USER_ID } from "./constants";

export default async function getSharedFolder() {
  const response = await axiosInstance.get(`${SHARED_USER_ID}/folder`);
  return response?.data;
}
