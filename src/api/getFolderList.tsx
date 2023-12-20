import { axiosInstance } from "./axiosInstance";

export default async function getFolderList(userId = "") {
  const response = await axiosInstance.get(`${userId}/folders`);
  return response?.data;
}
