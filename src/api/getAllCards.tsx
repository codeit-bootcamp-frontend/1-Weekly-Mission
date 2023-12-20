import { axiosInstance } from "./axiosInstance";

export default async function getAllCards(userId = "", folderId = "") {
  let url = `${userId}/links?`;
  const searchUrl = new URLSearchParams();
  if (folderId !== "") {
    searchUrl.append("folderId", folderId);
    url += searchUrl.toString();
  }
  console.log(url);
  const response = await axiosInstance.get(`${url}`);
  const data = response?.data?.data;
  return data?.folder;
}
