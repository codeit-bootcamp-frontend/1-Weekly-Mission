import { axiosInstance } from "./axiosInstance";
import USER_ID from "./constants";

export default async function getFolderList() {
  const response = await axiosInstance.get(`${USER_ID}/folders`);
  return response?.data;
}
