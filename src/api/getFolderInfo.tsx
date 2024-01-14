import { axiosInstance } from "./axiosInstance";

export default async function getFolderInfo(folderId: string) {
  const response = await axiosInstance.get(`/folders/${folderId}`);
  return response.data;
}
