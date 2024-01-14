import { axiosInstance } from "./axiosInstance";

export default async function deleteFolder(folderId: string) {
  const response = await axiosInstance.delete(`/folders/${folderId}`);
  return response;
}
