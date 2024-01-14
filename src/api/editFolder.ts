import { axiosInstance } from "./axiosInstance";

export default async function editFolder(folderId: string, name: string) {
  const response = await axiosInstance.put(`/folders/${folderId}`, {
    name: name,
  });

  return response;
}
